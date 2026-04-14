export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const zapierUrl = "https://hooks.zapier.com/hooks/catch/27207458/u7p1qhw/";

    const response = await fetch(zapierUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      return res.status(500).json({ error: "Zapier request failed" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Lead API error:", error);
    return res.status(500).json({ error: "Server error" });
  }
}