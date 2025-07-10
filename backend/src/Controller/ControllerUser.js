import {
    SelectOneUser,
    SelectOneUserByEmail,
    SelectAllUser,
    InsertUser,
    UpdateUser,
    RemoveUser
} from '../Service/index.js';

export async function GetUserByEmail(req, res){
    try {
        const { email } = req.params;
        const user = await SelectOneUserByEmail(email);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function GetOneUser(req, res) {
    try {
        const { id } = req.params;
        const user = await SelectOneUser(id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function GetAllUser(req, res) {
    try {
        const users = await SelectAllUser();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function PostUser(req, res) {
    try {
        const newUser = req.body;
        console.log();
        console.log(newUser);
        console.log();
        await InsertUser(newUser);
        res.status(201).json({ message: 'Usuário criado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function PatchUser(req, res) {
    try {
        const { id } = req.params;
        const updateData = req.body;
        await UpdateUser(id, updateData);
        res.json({ message: 'Usuário atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function DeleteUser(req, res) {
    try {
        const { id } = req.params;
        await RemoveUser(id);
        res.json({ message: 'Usuário removido com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
