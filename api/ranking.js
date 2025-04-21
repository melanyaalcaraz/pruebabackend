
let ranking = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const nuevaPartida = req.body;

    ranking.push(nuevaPartida);
    ranking.sort((a, b) => b.puntos - a.puntos);
    ranking = ranking.slice(0, 20);

    return res.status(201).json({ mensaje: 'Partida guardada' });
  }

  if (req.method === 'GET') {
    return res.status(200).json(ranking);
  }

  return res.status(405).json({ error: 'Método no permitido' });
}

