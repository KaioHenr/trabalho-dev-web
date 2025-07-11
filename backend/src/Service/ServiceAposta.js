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
        return { message: "Aposta removida com sucesso!" };
    } catch (error) {
        await transaction.rollback();
        throw new Error("Erro ao remover aposta: " + error.message);
    }
}

// Criar novo palpite (busca por opção usando descrição e substitui palpite anterior se existir)
export async function InsertPalpite(novoPalpite) {
    const transaction = await bolaoDB.transaction();
    try {
        const { userId, grupoId, opcaoEscolhida, valor } = novoPalpite;

        // Primeiro, buscar a opção pelo nome/descrição no grupo específico
        const { TableOpcao } = await import("../Database/Models/index.js");
        const opcao = await TableOpcao.findOne({
            where: {
                grupoId: grupoId,
                descricao: opcaoEscolhida
            },
            transaction
        });

        if (!opcao) {
            throw new Error(`Opção "${opcaoEscolhida}" não encontrada neste bolão.`);
        }

        // Verificar se o usuário já tem um palpite neste grupo (buscar por todas as opções do grupo)
        const opcoesDoGrupo = await TableOpcao.findAll({
            where: { grupoId },
            attributes: ['id'],
            transaction
        });
        
        const idsOpcoes = opcoesDoGrupo.map(opt => opt.id);
        
        const palpiteExistente = await TableAposta.findOne({
            where: { 
                userId,
                opcaoId: idsOpcoes
            },
            transaction
        });

        let resultado;
        if (palpiteExistente) {
            // Atualizar palpite existente
            palpiteExistente.opcaoId = opcao.id;
            palpiteExistente.valor = valor;
            await palpiteExistente.save({ transaction });
            resultado = palpiteExistente;
        } else {
            // Criar novo palpite
            const dadosPalpite = {
                userId,
                opcaoId: opcao.id,
                valor
            };
            resultado = await TableAposta.create(dadosPalpite, { transaction });
        }

        await transaction.commit();
        return resultado;
    } catch (error) {
        await transaction.rollback();
        throw new Error("Erro ao fazer palpite: " + error.message);
    }
}

// Buscar palpite de um usuário em um grupo específico
export async function SelectPalpiteUsuarioGrupo(userId, grupoId) {
    const transaction = await bolaoDB.transaction();
    try {
        const { TableOpcao } = await import("../Database/Models/index.js");
        
        const palpite = await TableAposta.findOne({
            where: { userId },
            include: [{
                model: TableOpcao,
                as: 'opcao',
                where: { grupoId },
                attributes: ['id', 'descricao', 'grupoId']
            }],
            transaction
        });

        await transaction.commit();
        return palpite;
    } catch (error) {
        await transaction.rollback();
        throw new Error("Erro ao buscar palpite do usuário: " + error.message);
    }
}

// Buscar todos os palpites de um grupo específico
export async function SelectTodosPalpitesGrupo(grupoId) {
    const transaction = await bolaoDB.transaction();
    try {
        const { TableOpcao, TableUser } = await import("../Database/Models/index.js");
        
        const palpites = await TableAposta.findAll({
            include: [
                {
                    model: TableOpcao,
                    as: 'opcao',
                    where: { grupoId },
                    attributes: ['id', 'descricao', 'grupoId']
                },
                {
                    model: TableUser,
                    as: 'apostador',
                    attributes: ['id', 'nome', 'email']
                }
            ],
            order: [['createdAt', 'DESC']],
            transaction
        });

        await transaction.commit();
        return palpites;
    } catch (error) {
        await transaction.rollback();
        throw new Error("Erro ao buscar palpites do grupo: " + error.message);
    }
}
