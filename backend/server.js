const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/generate-video', async (req, res) => {
  const { prompt, duration, style } = req.body;

  try {
    const response = await axios.post('https://api.example.com/create-video', {
      prompt,
      duration,
      style,
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate video' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
