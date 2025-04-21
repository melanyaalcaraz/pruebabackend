let ranking = [];

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const buffers = [];

    for await (const chunk of req) {
      buffers.push(chunk);
    }

    const data = JSON.parse(Buffer.concat(buffers).toString());

    ranking.push(data);
    ranking.sort((a, b) => b.puntos - a.puntos);
    ranking = ranking.slice(0, 20);

    return res.status(201).json({ mensaje: 'Partida guardada' });
  }

  if (req.method === 'GET') {
    return res.status(200).json(ranking);
  }

  return res.status(405).json({ error: 'Método no permitido' });
}

