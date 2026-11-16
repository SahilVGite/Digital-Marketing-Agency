/**
 * Demo submission layer.
 * Swap the bodies of these functions for real fetch() calls to your API / CRM
 * (HubSpot, Zoho, a serverless function, etc.). Components only depend on the
 * returned promise, so no UI changes are needed when you integrate a backend.
 */

const wait = (ms) => new Promise((r) => setTimeout(r, ms))

export async function submitEnquiry(data) {
  await wait(1400)
  // Simulate an occasional failure so error states can be demoed.
  if (data.email?.toLowerCase().endsWith('@fail.test')) {
    throw new Error('The server could not process your enquiry. Please try again.')
  }
  console.info('[demo] Enquiry submitted:', data)
  return { ok: true, id: `ENQ-${Date.now().toString(36).toUpperCase()}` }
}

export async function subscribeNewsletter(email) {
  await wait(900)
  console.info('[demo] Newsletter subscription:', email)
  return { ok: true }
}
