import {
    SelectAllGrupos,
    SelectOneGrupo,
    InsertGrupo,
    UpdateGrupo,
    RemoveGrupo
} from '../Service/ServiceGrupo.js';

export async function PostGrupo(req, res){
  try {
        const newGrupo = req.body;
        await InsertGrupo(newGrupo);
        res.status(201).json({ message: 'Bolão criado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function GetOneGrupo(req, res){
    try {
        const { id } = req.params;
        const grupo = await SelectOneGrupo(id);
        res.json(grupo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function GetAllGrupo(req, res){
    try {
        const grupos = await SelectAllGrupos();
        res.json(grupos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function PatchGrupo(req, res) {
    try {
        const { id } = req.params;
        const updateData = req.body;
        await UpdateGrupo(id, updateData);
        res.json({ message: 'Bolão atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function DeleteGrupo(req, res){
  try {
        const { id } = req.params;
        await RemoveGrupo(id);
        res.json({ message: 'Grupo removido com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}