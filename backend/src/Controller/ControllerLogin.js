import {
    SelectOneLogin,
    SelectAllLogin,
    InsertLogin,
    UpdateLogin,
    RemoveLogin
} from '../Service/index.js';

// Buscar login por ID (GET /login/:id)
export async function GetOneLogin(req, res) {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).send('ID não fornecido');

        const login = await SelectOneLogin(id);
        if (!login) return res.status(404).send('Login não encontrado');

        res.status(200).json(login);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

// Buscar todos os logins (GET /login)
export async function GetAllLogin(req, res) {
    try {
        const logins = await SelectAllLogin();
        res.status(200).json(logins);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

// Criar login (POST /login)
export async function PostLogin(req, res) {
    try {
        const { loginNovo } = req.body;
        if (!loginNovo) return res.status(400).send('Dados do login não fornecidos');

        const novoLogin = await InsertLogin(loginNovo);
        res.status(201).json({ message: 'Inserido com sucesso', data: novoLogin });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

// Atualizar login (PATCH /login/:id)
export async function PatchLogin(req, res) {
    try {
        const { id } = req.params;
        const updateData = req.body;

        if (!id) return res.status(400).send('ID não fornecido');

        const atualizado = await UpdateLogin(id, updateData);
        if (!atualizado) return res.status(404).send('Login não encontrado');

        res.status(200).json({ message: 'Atualizado com sucesso' });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

// Deletar login (DELETE /login/:id)
export async function DeleteLogin(req, res) {
    try {
        const { id } = req.params;

        if (!id) return res.status(400).send('ID não fornecido');

        const removido = await RemoveLogin(id);
        if (!removido) return res.status(404).send('Login não encontrado');

        res.status(204).send(); // sucesso sem conteúdo
    } catch (error) {
        res.status(500).send(error.message);
    }
}
