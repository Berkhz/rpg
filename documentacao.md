> **Uma breve introdução ao domínio do problema**
> 
> **O que é RPG?**
> 
> RPG, sigla para Jogo de Interpretação de Papéis, é uma atividade colaborativa onde os jogadores assumem a persona de personagens em um mundo ficcional. Através da imaginação e da narração, os jogadores guiam seus personagens por aventuras épicas, enfrentando desafios, tomando decisões e construindo uma história em conjunto.
> 
> **Elementos Essenciais do RPG:**
> 
> **Narrador:** O maestro da história, responsável por guiar a narrativa e apresentar os cenários, desafios e personagens não-jogadores (NPCs) que os jogadores encontrarão. **Jogadores:** Cada jogador cria e interpreta um personagem único, definindo suas características, habilidades, motivações e personalidade. **Regras:** Um conjunto de regras serve como base para as ações dos jogadores, desde combate até resolução de problemas, garantindo equilíbrio e coerência na história. **Imaginação:** A chave para o sucesso do RPG! É através da criatividade e da imersão que os jogadores dão vida aos seus personagens e constroem uma experiência memorável.
> 
> D&D, lançado em 1974, é considerado o precursor dos RPGs modernos. Nele, os jogadores embarcam em missões épicas em um mundo de fantasia medieval, combatendo monstros, desvendando segredos e buscando tesouros.
> 
> **Características de D&D:**
> 
> **Sistema de Regras:** D&D utiliza um conjunto detalhado de regras que abrangem desde combate até interação social, garantindo um jogo equilibrado e desafiador. **Classes e Raças:** Os jogadores podem escolher entre diversas classes, como guerreiros, magos e clérigos, cada uma com habilidades e estilos de jogo únicos. Além disso, podem selecionar a raça de seus personagens, como humanos, elfos, anões e orcs. **Masmorras e Dragões:** O nome do jogo já diz tudo! Explore masmorras repletas de perigos, encontre monstros lendários e derrote dragões poderosos. **Campanhas Épicas:** D&D oferece diversas campanhas prontas para jogar, com histórias envolventes e personagens memoráveis. Os jogadores também podem criar suas próprias aventuras, expandindo o universo do jogo e explorando infinitas possibilidades.
> 
> **Benefícios do RPG:**
> 
> **Criatividade e Imaginação:** O RPG estimula a criatividade e a capacidade de improvisar, pois os jogadores precisam pensar fora da caixa para superar os desafios que encontram. **Trabalho em Equipe:** O sucesso no RPG depende da colaboração entre os jogadores, que precisam trabalhar juntos para alcançar seus objetivos. **Resolução de Problemas:** Os jogadores desenvolvem habilidades de resolução de problemas ao lidar com os diversos desafios que surgem durante a aventura. **Contagiem de Histórias**: O RPG proporciona uma experiência única de contar histórias, onde cada jogador contribui para a narrativa, criando memórias inesquecíveis.
> 
> **Desenvolvimento da aplicação**
> 
> Utilizando a API utilizando a https://www.dnd5eapi.co/, desenvolva uma aplicação utilizando Nest JS com as seguintes funcionalidades:
> 
> * Realize o CRUD de um personagem, como se estivesse criando a sua ficha, alguns items básicos para isso seriam:
>   
>   * Nome
>   * Classe
>   * Atributos
>   * Feats
>   * Alinhamento
>   * Talentos
>   * Magias
>   * items
> 
> Fique a vontade para adicionar outros items na criação do personagem
> 
> * [ ]  Crie uma entidade de usuário, e crie um sistema de cadastro e autenticação via JWT (crie todos os métodos de CRUD para o usuário, a senha do usuário deve ser criptografada)
> * [ ]  Adicione um Auth Guard para as rotas da entidade principal da sua aplicação, somente usuários autenticados poderão chamar essas rotas
> * [ ]  Crie uma entidade para logar o tempo de resposta das rotas de sua API. Registre pelo menos o nome da rota chamada, o método utilizado e quanto tempo demorou para a solicitação terminar.
> * [ ]  Adicione Exceções a todos os métodos de sua controller, sendo que pelo menos uma delas deve ser de uma classe personalizada
> * [ ]  Adicione validações de dados via class-validator
> * [ ]  Crie um arquivo docker compose para sua aplicação, onde pelo menos o banco de dados seja levantado para utilizar a aplicação
> * [ ]  Crie uma função para criar um personagem de forma aleatória, porém que respeite a regra de nível.
> * [ ]  Integre sua aplicação com o Gemini (ou uma IA Generativa) para que:
> * [ ]    - Dado um personagem, crie um background para ele baseado em sua ficha
> * [ ]    - Dado um grupo de personagens (3 ou mais), gere uma aventura para eles
> * [ ]  Exporte as requisições da sua aplicação para um arquivo .json e anexe a sua entrega
> 
> **Regra de negócio básica!**
> 
> * Um personagem não pode ter atributos, feats, magias, talentos etc.. que não sejam correspondentes a seu nível.
>   Ex: Um mago nível 1 pode ter a magia magic missil, mas não pode ter Wish nem Black Hole.
> * Personagens Guerreiros não podem aprender magia, da mesma forma que cléricos só podem aprender magias divinas e não as arcanas. Muita atenção nessa parte (Fica opcional se aprofundar nessa regra)
> 
> **Dicas**
> 
> Uma forma interessante de construir sua aplicação, principalmente se estiver utilizando mongodb, seria utilizar-se da vantagem de não precisar trabalhar com uma tabela pré-definida. Dessa forma você poderia criar no seu registro do personagem um campo chamado **step ou passo**. Ao definir o nome e atributos do personagem, salve esse registro no banco com o **passo: 1** Ao definir a raça do personagem, salve um **novo** registro com o **passo: 2** e assim por diante. Dessa forma você tem o rastreio completo da criação e alteração dos dados do personagem até chegar na montagem final da ficha
> 
> **Como começar?** É de extrema importância que você leia a documentação da API: https://5e-bits.github.io/docs/api/get-a-class-by-index Aqui podemos ver como fazemos uma requição para API para receber os dados de uma classe. Sendo assim, você criaria uma rota na sua aplicação que receberia uma classe como parametro. Pegue o nome da classe, envie para a API do D&D, salve os dados retornados da API em memória e trabalhe com eles para a etapa atual de criação de personagem.
> 
> Links úteis:
> 
> * Roteiro para criação do personagem: https://medium.com/dadoscriticos/roteiro-de-cria%C3%A7%C3%A3o-de-personagem-d-d-5e-passo-a-passo-3d9741f94441
> * Como montar uma ficha de D&D: https://www.youtube.com/watch?v=lyGYFRBH4bk&ab_channel=ClasseGeek