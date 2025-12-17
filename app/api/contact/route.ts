import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = String(body?.email ?? "").trim();
    const message = String(body?.message ?? "").trim();

    // Validación sencilla
    const emailOk =
      email.length >= 6 &&
      email.length <= 120 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

    const msgOk = message.length >= 10 && message.length <= 2000;

    if (!emailOk || !msgOk) {
      return Response.json(
        { ok: false, error: "Datos inválidos." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true", 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.CONTACT_TO_EMAIL;

    if (!to) {
      return Response.json(
        { ok: false, error: "Falta configurar CONTACT_TO_EMAIL." },
        { status: 500 }
      );
    }

    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
      to,
      replyTo: email,
      subject: `Nuevo mensaje de contacto (${email})`,
      text: message,
      html: `
        <div style="font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;">
          <p><b>From:</b> ${email}</p>
          <p><b>Message:</b></p>
          <pre style="white-space:pre-wrap;">${escapeHtml(message)}</pre>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, error: "Error enviando el mensaje." },
      { status: 500 }
    );
  }
}


function escapeHtml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
