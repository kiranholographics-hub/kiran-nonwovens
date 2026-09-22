'use client';

import { useState } from 'react';
import { PLANT } from '@/data/catalog';
import styles from './EnquiryForm.module.css';

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
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, source: source || product }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        setServerError(data.error || 'We could not send that just now.');
        setState('error');
        return;
      }
      setValues({ ...EMPTY, product });
      setState('sent');
    } catch {
      setServerError(
        'We could not reach the server. Please try again, or email us directly.'
      );
      setState('error');
    }
  };

  const field = (key, label, extra = {}) => (
    <div className={extra.full ? styles.full : undefined}>
      <label className={styles.label} htmlFor={`enq-${key}`}>
        {label}
        {extra.required ? <span className={styles.req}> *</span> : null}
      </label>
      <input
        id={`enq-${key}`}
        className={styles.input}
        type={extra.type || 'text'}
        value={values[key]}
        onChange={set(key)}
        placeholder={extra.placeholder}
        autoComplete={extra.autoComplete}
        aria-invalid={errors[key] ? 'true' : undefined}
        aria-describedby={errors[key] ? `enq-${key}-error` : undefined}
      />
      {errors[key] ? (
        <span className={styles.error} id={`enq-${key}-error`}>
          {errors[key]}
        </span>
      ) : null}
    </div>
  );

  if (state === 'sent') {
    return (
      <div className={styles.form}>
        <h3>Enquiry received</h3>
        <p>
          Thank you — your enquiry is with our export team and we will come back
          to you with specifications and pricing.
        </p>
        <button
          type="button"
          className="btn"
          onClick={() => setState('idle')}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      {heading ? <h3>{heading}</h3> : null}
      <p className={styles.hint}>
        Fields marked <span className={styles.req}>*</span> are required. The
        more of the specification you give us, the faster we can quote.
      </p>

      <div className={`${styles.fields} ${styles.two}`}>
        {field('name', 'Name', { required: true, autoComplete: 'name' })}
        {field('company', 'Company', { autoComplete: 'organization' })}
        {field('email', 'Email', {
          required: true,
          type: 'email',
          autoComplete: 'email',
        })}
        {field('phone', 'Phone / WhatsApp', { type: 'tel', autoComplete: 'tel' })}
        {field('country', 'Country', { autoComplete: 'country-name' })}
        {field('product', 'Product', {
          placeholder: 'Which material are you asking about?',
        })}
      </div>

      {showSpecs ? (
        <fieldset className={styles.group}>
          <legend className={styles.legend}>Specification</legend>
          <div className={`${styles.fields} ${styles.three}`}>
            <div>
              <label className={styles.label} htmlFor="enq-fibre">
                Fibre
              </label>
              <select
                id="enq-fibre"
                className={styles.select}
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
            {field('quantity', 'Quantity', { placeholder: 'e.g. 5000 m² / month' })}
          </div>
        </fieldset>
      ) : null}

      <div className={styles.fields}>
        <div>
          <label className={styles.label} htmlFor="enq-message">
            Message
          </label>
          <textarea
            id="enq-message"
            className={styles.textarea}
            value={values.message}
            onChange={set('message')}
            placeholder="Application, end use, standards you need to meet…"
          />
        </div>
      </div>

      {/* Honeypot */}
      <div className={styles.hp} aria-hidden="true">
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

      <button type="submit" className="btn btnFill" disabled={state === 'sending'}>
        {state === 'sending' ? 'Sending…' : 'Send enquiry'}
      </button>

      {state === 'error' && serverError ? (
        <p className={styles.status} role="alert">
          {serverError}
        </p>
      ) : null}
    </form>
  );
}
