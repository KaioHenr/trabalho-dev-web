import { TableLogin } from "../Database/Models/index.js";
import bolaoDB from "../Database/index.js";

// Buscar um login por ID com transação
export async function SelectOneLogin(id) {
    const transaction = await bolaoDB.transaction();
    try {
        const login = await TableLogin.findByPk(id, { transaction });
        if (!login) throw new Error("Login não encontrado.");
        await transaction.commit();
        return login;
    } catch (error) {
        await transaction.rollback();
        throw new Error("Erro ao buscar login: " + error.message);
    }
}

// Buscar todos os logins com transação
export async function SelectAllLogin() {
    const transaction = await bolaoDB.transaction();
    try {
        const logins = await TableLogin.findAll({ transaction });
        await transaction.commit();
        return logins;
    } catch (error) {
        await transaction.rollback();
        throw new Error("Erro ao buscar todos os logins: " + error.message);
    }
}

// Inserir um novo login com transação
export async function InsertLogin(data) {
    const transaction = await bolaoDB.transaction();
    try {
        const { id_user, status } = data;

        const existing = await TableLogin.findOne({ where: { id_user }, transaction });

        if (!existing) {
            await TableLogin.create({ id_user, status }, { transaction });
        } else {
            await TableLogin.update({ status }, { where: { id_user }, transaction });
        }

        await transaction.commit();
        return { success: true };
    } catch (error) {
        await transaction.rollback();
        throw new Error("Erro ao inserir login: " + error.message);
    }
}

// Atualizar login por ID com transação
export async function UpdateLogin(id, data) {
    const transaction = await bolaoDB.transaction();
    try {
        const [updated] = await TableLogin.update(data, {
            where: { id },
            transaction
        });

        if (updated === 0) throw new Error("Login não encontrado para atualização");

        await transaction.commit();
        return { success: true };
    } catch (error) {
        await transaction.rollback();
        throw new Error("Erro ao atualizar login: " + error.message);
    }
}

// Soft delete com transação
export async function RemoveLogin(id) {
    const transaction = await bolaoDB.transaction();
    try {
        const [deleted] = await TableLogin.update(
            { status: false },
            {
                where: { id },
                transaction
            }
        );

        if (deleted === 0) throw new Error("Login não encontrado para remoção");

        await transaction.commit();
        return { success: true };
    } catch (error) {
        await transaction.rollback();
        throw new Error("Erro ao remover login: " + error.message);
    }
}
