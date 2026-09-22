const API_BASE = (process.env.API_BASE_URL || '').replace(/\/$/, '');

/**
 * Forwards an enquiry to the Express API.
 *
 * The form posts here rather than straight to Express so the API's address
 * stays server-side and there is no cross-origin hop from the browser.
 */
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  if (!API_BASE) {
    console.warn('[enquiries] API_BASE_URL is not set — enquiry not saved:', body?.email);
    return Response.json(
      {
        error:
          'The enquiry service is not connected yet. Please email us directly and we will pick it up.',
      },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(`${API_BASE}/api/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(10000),
    });
    const data = await res.json().catch(() => ({}));
    return Response.json(data, { status: res.status });
  } catch (err) {
    console.error('[enquiries] forward failed:', err.message);
    return Response.json(
      {
        error:
          'We could not send that just now. Please try again in a moment, or email us directly.',
      },
      { status: 502 }
    );
  }
}
