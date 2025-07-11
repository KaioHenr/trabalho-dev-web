import {
    SelectOneOpcao,
    SelectAllOpcao,
    InsertOpcao,
    UpdateOpcao,
    RemoveOpcao
} from '../Service/index.js';

export async function PostOpcao(req, res) {
    try {
        const novaOpcao = req.body;
        const result = await InsertOpcao(novaOpcao);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function GetOneOpcao(req, res) {
    try {
        const { id } = req.query;
        const opcao = await SelectOneOpcao(id);
        res.status(200).json(opcao);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function GetAllOpcao(req, res) {
    try {
        const opcoes = await SelectAllOpcao();
        res.status(200).json(opcoes);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function PatchOpcao(req, res) {
    try {
        const { id } = req.query;
        const updateData = req.body;
        const result = await UpdateOpcao(id, updateData);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function DeleteOpcao(req, res) {
    try {
        const { id } = req.query;
        const result = await RemoveOpcao(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
