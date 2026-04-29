export async function POST(req: Request) {
  try {
    const { name, email, phone, flowsOrBoards } = await req.json();

    const hookMessage = `🚀 Nueva solicitud de Demo de Oning:\n\nNombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}${flowsOrBoards ? `\nFlujos/Boards: ${flowsOrBoards}` : ""}`;

    await Promise.all([
      fetch("https://openclaw.genchelita.site/hooks/agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer claw-hook-genchelita-2026",
        },
        body: JSON.stringify({
          message: hookMessage,
          name: "Demo Oning",
          deliver: true,
          channel: "telegram",
          to: "6357553334", // Carlos
        }),
      }),
      fetch("https://openclaw.genchelita.site/hooks/agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer claw-hook-genchelita-2026",
        },
        body: JSON.stringify({
          message: hookMessage,
          name: "Demo Oning",
          deliver: true,
          channel: "telegram",
          to: "1630980825", // Pavel
        }),
      }),
    ]);

    return Response.json({ ok: true, message: "Notificaciones de demo enviadas" });
  } catch (error) {
    console.error("Error enviando el webhook:", error);
    return Response.json(
      { ok: false, error: "Error procesando la petición" },
      { status: 500 }
    );
  }
}
