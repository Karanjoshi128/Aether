import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validators";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Please check the form and try again." },
      { status: 400 }
    );
  }

  const { website, ...lead } = parsed.data;

  // Honeypot tripped — pretend success so bots don't learn anything.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  // No CRM/email is wired up in this demo. In production, forward `lead` to
  // your provider here (e.g. Resend, Postmark, HubSpot, a database, or Slack).
  console.info("[lead] new enquiry", lead);

  return NextResponse.json({ ok: true });
}
