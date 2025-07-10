import {
  InsertAposta,
  SelectOneAposta,
  SelectAllAposta,
  RemoveAposta
} from '../Service/index.js';

// POST /post-aposta
export async function PostAposta(req, res) {
  try {
    const novaAposta = req.body;
    const apostaCriada = await InsertAposta(novaAposta);
    res.status(201).json(apostaCriada);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

// GET /get-one-Aposta/:id
export async function GetOneAposta(req, res) {
  try {
    const { id } = req.params;
    const aposta = await SelectOneAposta(id);
    res.status(200).json(aposta);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

// GET /get-all-Aposta
export async function GetAllAposta(req, res) {
  try {
    const apostas = await SelectAllAposta();
    res.status(200).json(apostas);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

// DELETE /delete-Aposta/:id
export async function DeleteAposta(req, res) {
  try {
    const { id } = req.params;
    const resultado = await RemoveAposta(id);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
