import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

// GET todos os horários
router.get('/', async (req, res) => {
  const [rows] = await pool.query(`
    SELECT h.id_horario, h.dia_semana, h.hora_inicio, h.hora_fim,
           s.nome AS sala,
           p.nome AS professor,
           a.disciplina AS aula
    FROM Horarios h
    JOIN Salas s ON h.id_sala = s.id_sala
    JOIN Professores p ON h.id_professor = p.id_professor
    JOIN Aulas a ON h.id_aula = a.id_aula
  `);
  res.json(rows);
});


// GET horário por id
router.get('/:id', async (req, res) => {
  const [rows] = await pool.query(`
    SELECT h.id_horario, h.dia_semana, h.hora_inicio, h.hora_fim,
           s.nome AS sala,
           p.nome AS professor,
           a.disciplina AS aula
    FROM Horarios h
    JOIN Salas s ON h.id_sala = s.id_sala
    JOIN Professores p ON h.id_professor = p.id_professor
    JOIN Aulas a ON h.id_aula = a.id_aula
    WHERE h.id_horario = ?
  `, [req.params.id]);

  if (rows.length === 0) {
    return res.status(404).json({ msg: 'Horário não encontrado' });
  }
  res.json(rows[0]);
});

// POST novo horário
router.post('/', async (req, res) => {
  const { dia_semana, hora_inicio, hora_fim, id_sala, id_professor, id_aula } = req.body;
  const [result] = await pool.query(
    'INSERT INTO Horarios (dia_semana, hora_inicio, hora_fim, id_sala, id_professor, id_aula) VALUES (?, ?, ?, ?, ?, ?)',
    [dia_semana, hora_inicio, hora_fim, id_sala, id_professor, id_aula]
  );
  res.json({ id: result.insertId, dia_semana, hora_inicio, hora_fim, id_sala, id_professor, id_aula });
});


// PUT atualizar horário
router.put('/:id', async (req, res) => {
  const { dia_semana, hora_inicio, hora_fim, id_sala, id_professor, id_aula } = req.body;
  await pool.query(
    'UPDATE Horarios SET dia_semana=?, hora_inicio=?, hora_fim=?, id_sala=?, id_professor=?, id_aula=? WHERE id_horario = ?',
    [dia_semana, hora_inicio, hora_fim, id_sala, id_professor, id_aula, req.params.id]
  );
  res.json({ msg: 'Horário atualizado com sucesso' });
});


// DELETE remover horário
router.delete('/:id', async (req, res) => {
  await pool.query('DELETE FROM Horarios WHERE id_horario = ?', [req.params.id]);
  res.json({ msg: 'Horário removido com sucesso' });
});

export default router;
