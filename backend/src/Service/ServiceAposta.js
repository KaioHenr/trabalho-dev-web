import { TableAposta } from "../Database/Models/index.js";
import bolaoDB from "../Database/index.js";

// Criar nova aposta
export async function InsertAposta(novaAposta) {
    const transaction = await bolaoDB.transaction();
    try {
        const apostaCriada = await TableAposta.create(novaAposta, { transaction });
        await transaction.commit();
        return apostaCriada;
    } catch (error) {
        await transaction.rollback();
        throw new Error("Erro ao inserir aposta: " + error.message);
    }
}

// Buscar uma aposta por ID
export async function SelectOneAposta(id) {
    const transaction = await bolaoDB.transaction();
    try {
        const aposta = await TableAposta.findByPk(id, { transaction });
        if (!aposta) throw new Error("Aposta não encontrada.");
        await transaction.commit();
        return aposta;
    } catch (error) {
        await transaction.rollback();
        throw new Error("Erro ao buscar aposta: " + error.message);
    }
}

// Buscar todas as apostas
export async function SelectAllAposta() {
    const transaction = await bolaoDB.transaction();
    try {
        const apostas = await TableAposta.findAll({ transaction });
        await transaction.commit();
        return apostas;
    } catch (error) {
        await transaction.rollback();
        throw new Error("Erro ao buscar apostas: " + error.message);
    }
}

// Remover uma aposta por ID (soft delete se tiver `status`, senão hard delete)
export async function RemoveAposta(id) {
    const transaction = await bolaoDB.transaction();
    try {
        const aposta = await TableAposta.findByPk(id, { transaction });
        if (!aposta) throw new Error("Aposta não encontrada para remoção.");

        // Se tiver campo status, faz soft delete
        if ("status" in aposta) {
            await aposta.update({ status: false }, { transaction });
        } else {
            await aposta.destroy({ transaction });
        }

        await transaction.commit();
        return { success: true, id };
    } catch (error) {
        await transaction.rollback();
        throw new Error("Erro ao remover aposta: " + error.message);
    }
}
