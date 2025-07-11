import { TableOpcao } from '../Database/Models/index.js';
import bolaoDB from '../Database/index.js';

export async function InsertOpcao(novaOpcao, transaction) {
    try {
        return await TableOpcao.create(novaOpcao, { transaction });
    } catch (error) {
        throw new Error(`Erro ao inserir opção: ${error.message}`);
    }
}
export async function SelectOneOpcao(id) {
    const transaction = await bolaoDB.transaction();
    try {
        const opcao = await TableOpcao.findByPk(id, { transaction });
        await transaction.commit();
        if (!opcao) throw new Error('Opção não encontrada.');
        return opcao;
    } catch (error) {
        await transaction.rollback();
        throw new Error(`Erro ao buscar opção: ${error.message}`);
    }
}

export async function SelectAllOpcao() {
    const transaction = await bolaoDB.transaction();
    try {
        const opcoes = await TableOpcao.findAll({ transaction });
        await transaction.commit();
        return opcoes;
    } catch (error) {
        await transaction.rollback();
        throw new Error(`Erro ao buscar todas as opções: ${error.message}`);
    }
}

export async function UpdateOpcao(id, updateData) {
    const transaction = await bolaoDB.transaction();
    try {
        const [updated] = await TableOpcao.update(updateData, {
            where: { id },
            transaction
        });

        if (updated === 0) throw new Error('Opção não encontrada para atualização.');

        await transaction.commit();
        return { success: true, id };
    } catch (error) {
        await transaction.rollback();
        throw new Error(`Erro ao atualizar opção: ${error.message}`);
    }
}

export async function RemoveOpcao(id) {
    const transaction = await bolaoDB.transaction();
    try {
        const deleted = await TableOpcao.destroy({
            where: { id },
            transaction
        });

        if (deleted === 0) throw new Error('Opção não encontrada para exclusão.');

        await transaction.commit();
        return { success: true, id };
    } catch (error) {
        await transaction.rollback();
        throw new Error(`Erro ao excluir opção: ${error.message}`);
    }
}
