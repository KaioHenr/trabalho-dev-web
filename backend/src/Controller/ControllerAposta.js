import {
  InsertAposta,
  SelectOneAposta,
  SelectAllAposta,
  RemoveAposta,
  InsertPalpite,
  SelectPalpiteUsuarioGrupo,
  SelectTodosPalpitesGrupo
} from '../Service/index.js';

// POST /post-aposta
export async function PostAposta(req, res) {
  try {
    const novaAposta = req.body;
    const apostaCriada = await InsertAposta(novaAposta);
    res.status(201).json(apostaCriada);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

// GET /get-one-Aposta/:id
export async function GetOneAposta(req, res) {
  try {
    const { id } = req.params;
    const aposta = await SelectOneAposta(id);
    res.status(200).json(aposta);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

// GET /get-all-Aposta
export async function GetAllAposta(req, res) {
  try {
    const apostas = await SelectAllAposta();
    res.status(200).json(apostas);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

// DELETE /delete-Aposta/:id
export async function DeleteAposta(req, res) {
  try {
    const { id } = req.params;
    const resultado = await RemoveAposta(id);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

// POST /palpite/:grupoId - Fazer palpite em um grupo/bolão
export async function PostPalpite(req, res) {
  try {
    const { grupoId } = req.params;
    const { opcaoEscolhida } = req.body;
    const userId = req.user?.id;

    console.log('Dados do palpite recebidos:', {
      grupoId,
      opcaoEscolhida,
      userId,
      userInfo: req.user ? { id: req.user.id, nome: req.user.nome } : 'Não autenticado'
    });

    // Validar se o usuário está autenticado
    if (!userId) {
      return res.status(401).json({ error: 'Usuário não autenticado.' });
    }

    // Validar se a opção escolhida foi fornecida
    if (!opcaoEscolhida) {
      return res.status(400).json({ error: 'Opção escolhida é obrigatória.' });
    }

    // Validar se o grupoId é válido
    if (!grupoId || isNaN(parseInt(grupoId))) {
      return res.status(400).json({ error: 'ID do grupo inválido.' });
    }

    const palpite = {
      userId: userId,
      grupoId: parseInt(grupoId),
      opcaoEscolhida: opcaoEscolhida,
      valor: 1 // Valor padrão para palpites simples
    };

    console.log('Dados do palpite a serem inseridos:', palpite);

    const palpiteCriado = await InsertPalpite(palpite);
    
    console.log('Palpite criado com sucesso:', palpiteCriado);
    
    res.status(201).json({
      message: 'Palpite realizado com sucesso!',
      data: palpiteCriado
    });
  } catch (error) {
    console.error('Erro ao processar palpite:', error);
    res.status(500).json({ error: error.message });
  }
}

// GET /meu-palpite/:grupoId - Obter palpite do usuário em um grupo específico
export async function GetMeuPalpite(req, res) {
  try {
    const { grupoId } = req.params;
    const userId = req.user?.id || 1; // Usar ID do usuário autenticado ou fallback

    const palpite = await SelectPalpiteUsuarioGrupo(userId, grupoId);
    
    if (!palpite) {
      return res.status(404).json({ message: 'Nenhum palpite encontrado para este bolão.' });
    }

    res.status(200).json({
      message: 'Palpite encontrado.',
      data: palpite
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// GET /palpites/:grupoId - Obter todos os palpites de um grupo/bolão
export async function GetPalpitesBolao(req, res) {
  try {
    const { grupoId } = req.params;

    const palpites = await SelectTodosPalpitesGrupo(grupoId);
    
    res.status(200).json({
      message: 'Palpites encontrados.',
      data: palpites
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
