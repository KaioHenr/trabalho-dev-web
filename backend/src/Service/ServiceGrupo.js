import { TableGrupo } from '../Database/Models/index.js';
import { InsertOpcao } from './index.js'
import bolaoDB from '../Database/index.js';

export async function SelectOneGrupo(id) {
    try {
        const grupo = await TableGrupo.findByPk(id);
        if (!grupo) throw new Error('Bolão não encontrado.');
        return grupo;
    } catch (error) {
        throw new Error('Erro ao buscar bolão: ' + error.message);
    }
}

export async function SelectAllGrupos() {
    try {
        return await TableGrupo.findAll();
    } catch (error) {
        throw new Error('Erro ao buscar bolões: ' + error.message);
    }
}

export async function InsertGrupo(newGrupo) {
    const transaction = await bolaoDB.transaction();
    const { opcoes, ...dataNewGrupo } = newGrupo;

    try {
        const grupoCriado = await TableGrupo.create(dataNewGrupo, { transaction });

        for (const opcoe of opcoes) {
            const objAux = {
                grupoId: grupoCriado.id,
                descricao: opcoe
            };
            await InsertOpcao(objAux, transaction);
        }

        await transaction.commit();
        return { success: true };
    } catch (error) {
        await transaction.rollback();
        throw new Error('Erro ao inserir bolão: ' + error.message);
    }
}

export async function UpdateGrupo(id, updateData) {
    const transaction = await bolaoDB.transaction();
    try {
        const [updated] = await TableGrupo.update(updateData, { where: { id }, transaction });
        if (updated === 0) throw new Error('Bolão não encontrado para atualização.');
        await transaction.commit();
        return { success: true, message: "Bolão atualizado com sucesso." };
    } catch (error) {
        await transaction.rollback();
        throw new Error('Erro ao atualizar bolão: ' + error.message);
    }
}

export async function RemoveGrupo(id) {
    const transaction = await bolaoDB.transaction();
    try {
        const deleted = await TableGrupo.destroy({ where: { id }, transaction });
        if (deleted === 0) throw new Error('Bolão não encontrado para remoção.');
        await transaction.commit();
        return { success: true };
    } catch (error) {
        await transaction.rollback();
        throw new Error('Erro ao remover Bolão: ' + error.message);
    }
}
