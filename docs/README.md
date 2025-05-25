# 📘 Documentação do Projeto - Desenvolvimento Web

![Planejamento do Projeto](./PMC.png)

---

## 🧾 Visão Geral

Este projeto visa o desenvolvimento de um sistema de pedidos online. O sistema permite que clientes visualizem produtos, adicionem ao carrinho, finalizem compras e acompanhem pedidos. A seguir, detalhamos os principais artefatos exigidos para a entrega.

---

## ✅ Backlog



| ID    | Prioridade   | História de Usuário                                                                                                                     |
|-------|--------------|------------------------------------------------------------------------------------------------------------------------------------------|
| HU-1  | Alta         | No papel de usuário, desejo me cadastrar e fazer login, para poder participar dos bolões.                                               |
| HU-2  | Alta         | No papel de usuário, desejo criar um bolão público ou privado, para permitir que outros participem por convite ou código.               |
| HU-3  | Alta         | No papel de criador de bolão, desejo cadastrar opções de palpite, para que os participantes possam escolher entre elas.                 |
| HU-4  | Alta         | No papel de participante, desejo entrar em um bolão e fazer meus palpites, para tentar acertar o resultado antes do prazo.              |
| HU-5  | Média-Alta   | No papel de criador de bolão, desejo encerrar o bolão e registrar o resultado real, para definir os ganhadores.                         |
| HU-6  | Média        | No papel de usuário, desejo visualizar o ranking de participantes, para acompanhar meu desempenho em cada bolão e no geral.             |
| HU-7  | Média        | No papel de usuário, desejo ver o histórico de bolões e resultados, para consultar eventos anteriores e seus desfechos.                 |
| HU-8  | Baixa        | No papel de administrador, desejo que o sistema redistribua automaticamente a premiação, para seguir as regras definidas.               |
| HU-9  | Baixa        | No papel de participante, desejo ganhar pontos ou prêmios ao acertar palpites, conforme as regras definidas pelo criador do bolão.       |
| HU-10 | Baixa        | No papel de criador de bolão, desejo definir o tipo de evento e as regras de premiação, para personalizar o funcionamento do bolão.     |


---

## 🎨 Protótipo de Telas

Cada funcionalidade de média/alta prioridade descrita no backlog possui uma tela representando sua interface/funcionalidade esperada.

### 🖼️ Protótipo do Requisito HU-1

![Autenticação](./Login.png)
Formulário de login para autenticação do usuário no sistema.

### 🖼️ Protótipo do Requisito HU-7

![Visualizar bolões](./meus_boloes.png)
Tela de listagem de bolões que o usuário participa ou participou.

### 🖼️ Protótipo do Requisito HU-4

![Visualizar bolão](./visualizar_bolao_em_andamento.png)
Tela para visualização de informações do bolão fazer o papite.

### 🖼️ Protótipo do Requisito HU-2, HU-3

![Criar bolão](./criar_bolao.png)
Interface com formulário para a criação de um bolão.

### 🖼️ Protótipo do Requisito HU-5

![Administrar bolão](./administrar_bolao.png)
Interface para o criador do bolão administrar os participantes e o resultado.

### 🖼️ Protótipo do Requisito HU-6

![Visualizar bolão finalizado](./visualizar_boloes_finalizados.png)
Tela para visualizar um bolão após ele ter finalizado.


### 🖼️ Protótipo do Requisito HU-1

![Entrar em um bolão](./entrar_bolao.png)
Tela para buscar e entrar em bolões.


---

## 🏗 Análise e Projeto 

O projeto  do sistema 

### Modelo 

![alt text](image-1.png)

### Esboço da arquitetura geral (cliente-servidor)


![alt text](image.png)


### Autorização  e Autenticação 
A autorização no Strapi (a partir do v4 e mantida no v5) é baseada em perfis de usuários (roles) e permissões atribuídas a esses perfis. Ela define o que cada usuário pode ou não pode fazer ao interagir com os endpoints da API.

1. Tipos de usuários
O Strapi tem dois contextos principais de usuários:

🔹 Usuários Autenticados
Criados via cadastro/login na API pública.

Associados a uma role do tipo “Authenticated” ou outra personalizada.

Usam token JWT para acesso autenticado.

🔸 Usuários Administrativos
Criados via painel de administração do Strapi.

Usam o Strapi Admin Panel.

Gerenciados separadamente e com permissões diferentes.


### Tecnologias a serem utilizadas 
Strapi, HTML, CSS, SQLITE....

---

### Telas do sistema

![alt text](tela1-1.png)
**Figura 2**: Tela de listagem de produtos com imagem, nome e preço — correspondente à história de usuário HU-1.


