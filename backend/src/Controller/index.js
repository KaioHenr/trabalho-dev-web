
import {
    PostUser,
    GetOneUser,
    GetAllUser,
    PatchUser,
    DeleteUser
} from './ControllerUser.js';

async function Authentication(req, res, next) {
    try {
        if (!req.headers.token) {
            return res.status(401).json({ message: "Token não fornecido para autenticação." });
        }

        const verification = await CheckToken(req.headers.token);

        if (verification.statuscode !== 200) {
            return res.status(verification.statuscode).json({ message: verification.message });
        }
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(500).json({ message: "Erro interno durante autenticação" });
    }
}

async function CheckToken(token) {
    const TOKEN_EXPIRATION_HOURS = 3;
    if (typeof token !== 'string' || !token.trim()) {
        return { statuscode: 401, message: "Formato de token inválido." };
    }

    try {


        if (!tokenRecord) {
            return { statuscode: 401, message: "Token inválido." };
        }

        const lastUpdate = new Date(tokenRecord.updatedAt);
        const diff = Math.abs(new Date() - lastUpdate) / 3600000;

        if (diff > TOKEN_EXPIRATION_HOURS) {
            return { statuscode: 403, message: "Token expirado, necessário novo login." };
        }

        // Atualiza o updatedAt para "renovar" o token
        await tokenRecord.update({ updatedAt: new Date() });

        return { statuscode: 200, message: "Token válido." };

    } catch (error) {
        console.error('Token verification error:', error);
        return { statuscode: 500, message: "Erro durante verificação do token." };
    }
}
export {
    // Função de autenticação
    Authentication,

    // Controler User
    PostUser,
    GetOneUser,
    GetAllUser,
    PatchUser,
    DeleteUser,
};