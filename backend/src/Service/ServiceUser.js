import { TableUser } from '../Database/Models/index.js';
import bolaoDB from '../Database/index.js';
import { v4 as uuidv4 } from 'uuid';
//auth
export async function SelectUser(email, senha) {
    try {
        const user = await TableUser.findOne({ where: { email, senha } });

        if (!user) throw new Error('Usuário não encontrado.');

        const token = uuidv4();
        user.token = token;
        await user.save();

        return {
            user: {
                ...user,
                token: token
            }
        };

    } catch (error) {
        throw new Error('Erro ao buscar usuário: ' + error.message);
    }
}

export async function DeleteSession(token) {
    try {
        const user = await TableUser.findOne({ where: { token } });

        if (!user) {
            throw new Error('Sessão não encontrada.');
        }

        // Remove o token para invalidar a sessão
        user.token = null;
        await user.save();

        return true;
    } catch (error) {
        throw new Error('Erro ao deletar sessão: ' + error.message);
    }
}


//user
export async function SelectOneUser(id) {
    try {
        const user = await TableUser.findByPk(id);
        if (!user) throw new Error('Usuário não encontrado.');
        return user;
    } catch (error) {
        throw new Error('Erro ao buscar usuário: ' + error.message);
    }
}

export async function SelectOneUserByEmail(email) {
    try {
        const user = await TableUser.findOne({ where: { email: email } });
        if (!user) throw new Error('Usuário não encontrado.');
        return user;
    } catch (error) {
        throw new Error('Erro ao buscar usuário: ' + error.message);
    }
}

export async function SelectAllUser() {
    try {
        return await TableUser.findAll();
    } catch (error) {
        throw new Error('Erro ao buscar usuários: ' + error.message);
    }
}

export async function InsertUser(newUser) {
    const transaction = await bolaoDB.transaction();
    try {
        await TableUser.create(newUser, { transaction });
        await transaction.commit();
        return { success: true };
    } catch (error) {
        await transaction.rollback();
        throw new Error('Erro ao inserir usuário: ' + error.message);
    }
}

export async function UpdateUser(id, updateData) {
    const transaction = await bolaoDB.transaction();
    try {
        const [updated] = await TableUser.update(updateData, { where: { id }, transaction });
        if (updated === 0) throw new Error('Usuário não encontrado para atualização.');
        await transaction.commit();
        return { success: true };
    } catch (error) {
        await transaction.rollback();
        throw new Error('Erro ao atualizar usuário: ' + error.message);
    }
}

export async function RemoveUser(id) {
    const transaction = await bolaoDB.transaction();
    try {
        const deleted = await TableUser.destroy({ where: { id }, transaction });
        if (deleted === 0) throw new Error('Usuário não encontrado para remoção.');
        await transaction.commit();
        return { success: true };
    } catch (error) {
        await transaction.rollback();
        throw new Error('Erro ao remover usuário: ' + error.message);
    }
}
