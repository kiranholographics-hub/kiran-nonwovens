import { useState } from 'react';
import { PLANT } from '../data/catalog.js';
import { postEnquiry } from '../api/client.js';
import './EnquiryForm.css';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMPTY = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  product: '',
  fibre: '',
  gsm: '',
  width: '',
  thickness: '',
  colour: '',
  quantity: '',
  message: '',
  website: '', // honeypot
};

/**
 * The enquiry form — a spec-based quote request, not a name-and-email contact
 * box. Buyers tell us the material they need; the specs travel with the lead.
 */
export default function EnquiryForm({
  showSpecs = true,
  product = '',
  source = '',
  heading,
}) {
  const [values, setValues] = useState({ ...EMPTY, product });
  const [errors, setErrors] = useState({});
  const [state, setState] = useState('idle'); // idle | sending | sent | error
  const [serverError, setServerError] = useState('');

  const set = (key) => (e) => {
    const { value } = e.target;
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = 'Please tell us your name.';
    if (!values.email.trim()) next.email = 'We need an email to reply to.';
    else if (!EMAIL_RE.test(values.email.trim()))
      next.email = 'That email address does not look right.';
    return next;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) return;

    setState('sending');
    setServerError('');
    try {
      await postEnquiry({ ...values, source: source || product });
      setValues({ ...EMPTY, product });
      setState('sent');
    } catch (err) {
      if (err.fieldErrors) setErrors(err.fieldErrors);
      setServerError(err.message);
      setState('error');
    }
  };

  const field = (key, label, extra = {}) => (
    <div className={extra.full ? 'enquiry__full' : undefined}>
      <label className="enquiry__label" htmlFor={`enq-${key}`}>
        {label}
        {extra.required ? <span className="enquiry__req"> *</span> : null}
      </label>
      <input
        id={`enq-${key}`}
        className="enquiry__input"
        type={extra.type || 'text'}
        value={values[key]}
        onChange={set(key)}
        placeholder={extra.placeholder}
        autoComplete={extra.autoComplete}
        aria-invalid={errors[key] ? 'true' : undefined}
        aria-describedby={errors[key] ? `enq-${key}-error` : undefined}
      />
      {errors[key] ? (
        <span className="enquiry__error" id={`enq-${key}-error`}>
          {errors[key]}
        </span>
      ) : null}
    </div>
  );

  if (state === 'sent') {
    return (
      <div className="enquiry">
        <h3>Enquiry received</h3>
        <p>
          Thank you — your enquiry is with our export team and we will come back
          to you with specifications and pricing.
        </p>
        <button type="button" className="btn" onClick={() => setState('idle')}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="enquiry" onSubmit={onSubmit} noValidate>
      {heading ? <h3>{heading}</h3> : null}
      <p className="enquiry__hint">
        Fields marked <span className="enquiry__req">*</span> are required. The
        more of the specification you give us, the faster we can quote.
      </p>

      <div className="enquiry__fields enquiry__fields--two">
        {field('name', 'Name', { required: true, autoComplete: 'name' })}
        {field('company', 'Company', { autoComplete: 'organization' })}
        {field('email', 'Email', {
          required: true,
          type: 'email',
          autoComplete: 'email',
        })}
        {field('phone', 'Phone / WhatsApp', {
          type: 'tel',
          autoComplete: 'tel',
        })}
        {field('country', 'Country', { autoComplete: 'country-name' })}
        {field('product', 'Product', {
          placeholder: 'Which material are you asking about?',
        })}
      </div>

      {showSpecs ? (
        <fieldset className="enquiry__group">
          <legend className="enquiry__legend">Specification</legend>
          <div className="enquiry__fields enquiry__fields--three">
            <div>
              <label className="enquiry__label" htmlFor="enq-fibre">
                Fibre
              </label>
              <select
                id="enq-fibre"
                className="enquiry__input"
                value={values.fibre}
                onChange={set('fibre')}
              >
                <option value="">No preference</option>
                {PLANT.fibres.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>
            {field('gsm', 'GSM', { placeholder: PLANT.gsmLabel })}
            {field('width', 'Width', { placeholder: PLANT.widthLabel })}
            {field('thickness', 'Thickness', { placeholder: 'e.g. 3 mm' })}
            {field('colour', 'Colour', { placeholder: 'e.g. black, natural' })}
            {field('quantity', 'Quantity', {
              placeholder: 'e.g. 5000 m² / month',
            })}
          </div>
        </fieldset>
      ) : null}

      <div className="enquiry__fields">
        <div>
          <label className="enquiry__label" htmlFor="enq-message">
            Message
          </label>
          <textarea
            id="enq-message"
            className="enquiry__input enquiry__textarea"
            value={values.message}
            onChange={set('message')}
            placeholder="Application, end use, standards you need to meet…"
          />
        </div>
      </div>

      {/* Honeypot — off-screen, never shown to a real buyer. */}
      <div className="enquiry__hp" aria-hidden="true">
        <label htmlFor="enq-website">Leave this empty</label>
        <input
          id="enq-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={set('website')}
        />
      </div>

      <button type="submit" className="btn btn--fill" disabled={state === 'sending'}>
        {state === 'sending' ? 'Sending…' : 'Send enquiry'}
      </button>

      {state === 'error' && serverError ? (
        <p className="enquiry__status" role="alert">
          {serverError}
        </p>
      ) : null}
    </form>
  );
}
