// api/chat.js
export default async function handler(req, res) {
  const { message } = req.body;

  const prompt = `
Client: ${message}
AI: Based on your field, here’s how Ladder can help:
`;

  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 150,
      temperature: 0.7,
    }),
  });

  const data = await response.json();
  res.status(200).json({ reply: data.choices[0].text.trim() });
}
