const CATALOG = [
 {
  "id": "perfil-0",
  "group": "Começar",
  "title": "Padrão",
  "note": "Para iniciar uma edição com este perfil. Indique a pasta dos vídeos e o objetivo.",
  "prompt": "EDITCLUB, edite os vídeos da pasta [pasta] no perfil Padrão. Meu objetivo é [objetivo]."
 },
 {
  "id": "perfil-1",
  "group": "Começar",
  "title": "Corte Dinâmico",
  "note": "Para iniciar uma edição com este perfil. Indique a pasta dos vídeos e o objetivo.",
  "prompt": "EDITCLUB, edite os vídeos da pasta [pasta] no perfil Corte Dinâmico. Meu objetivo é [objetivo]."
 },
 {
  "id": "perfil-2",
  "group": "Começar",
  "title": "Dinâmico Premium",
  "note": "Para iniciar uma edição com este perfil. Indique a pasta dos vídeos e o objetivo.",
  "prompt": "EDITCLUB, edite os vídeos da pasta [pasta] no perfil Dinâmico Premium. Meu objetivo é [objetivo]."
 },
 {
  "id": "perfil-3",
  "group": "Começar",
  "title": "Alta Retenção (VSL)",
  "note": "Para iniciar uma edição com este perfil. Indique a pasta dos vídeos e o objetivo.",
  "prompt": "EDITCLUB, edite os vídeos da pasta [pasta] no perfil Alta Retenção (VSL). Meu objetivo é [objetivo]."
 },
 {
  "id": "1",
  "group": "Corte e ritmo",
  "title": "Tem pausa sobrando, está arrastado",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, deixa mais seco: pausas de no máximo [0,15] segundo e começa direto na primeira palavra.",
  "tags": ""
 },
 {
  "id": "2",
  "group": "Corte e ritmo",
  "title": "Só um pedaço está errado",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, entre [00:12] e [00:18], [O QUE MUDAR]. Não mexe no resto.",
  "tags": ""
 },
 {
  "id": "3",
  "group": "Corte e ritmo",
  "title": "Parece slide, sem ritmo",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, tá parado. Deixa mais dinâmico sem encher de coisa.",
  "tags": ""
 },
 {
  "id": "4",
  "group": "Corte e ritmo",
  "title": "Imagens e textos fora da hora",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, as imagens e os textos estão entrando fora da hora. Acerta pela minha fala, sem mudar o resto.",
  "tags": ""
 },
 {
  "id": "5",
  "group": "Imagem e texto",
  "title": "Tem coisa demais na tela",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, não mexe em nada ainda. Me diz o que está sobrando ou brigando na tela, no máximo cinco coisas.",
  "tags": ""
 },
 {
  "id": "6",
  "group": "Imagem e texto",
  "title": "Tá poluído e já pode mexer",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, tá poluído. Tira o que não ajuda e deixa uma ideia por vez.",
  "tags": ""
 },
 {
  "id": "7",
  "group": "Imagem e texto",
  "title": "Texto ou moldura em cima do rosto",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, o texto tá em cima do meu rosto em [00:08]. Arruma pela posição do meu rosto.",
  "tags": ""
 },
 {
  "id": "8",
  "group": "Imagem e texto",
  "title": "A pessoa anda e sai do meio",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, entre [00:20] e [00:26] eu me mexo e saio do meio. Me acompanha sem tremer.",
  "tags": ""
 },
 {
  "id": "9",
  "group": "Imagem e texto",
  "title": "Mudar de formato",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, faz esse mesmo vídeo em [16:9 ou 9:16] sem perder nenhum texto.",
  "tags": ""
 },
 {
  "id": "10",
  "group": "Imagem e texto",
  "title": "Testar o recorte",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, testa se dá pra me recortar do fundo em uns 5 segundos antes de fazer o resto.",
  "tags": ""
 },
 {
  "id": "11",
  "group": "Imagem e texto",
  "title": "Texto atrás da pessoa",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, em [00:12], quando eu falo \"[FRASE]\", põe a palavra [PALAVRA] grande atrás de mim.",
  "tags": ""
 },
 {
  "id": "12",
  "group": "Imagem e texto",
  "title": "Quer animação num ponto",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, em [00:21], quando eu falo \"[PALAVRA]\", põe [TIPO: lista, número, notificação, carimbo...].",
  "tags": ""
 },
 {
  "id": "13",
  "group": "Imagem e texto",
  "title": "Animações aparecem e somem como slide",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, as animações parecem slide. Faz uma virar a outra, mostrando o que muda.",
  "tags": ""
 },
 {
  "id": "14",
  "group": "Imagem e texto",
  "title": "Explicação longa",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, quando eu explico [ASSUNTO], monta um esquema que vai crescendo a cada parte que eu falo.",
  "tags": ""
 },
 {
  "id": "15",
  "group": "Imagem e texto",
  "title": "Lettering nas frases fortes",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, põe lettering nas minhas frases mais fortes, no estilo que eu já aprovei.",
  "tags": ""
 },
 {
  "id": "16",
  "group": "Imagem e texto",
  "title": "Texto com tudo do mesmo peso",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, os textos estão todos com o mesmo peso. Organiza o que é principal, o que é apoio e a chamada.",
  "tags": ""
 },
 {
  "id": "17",
  "group": "Imagem e texto",
  "title": "Explicação espacial",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, explica [O QUE] em 3D de verdade, ou me diz por que fica melhor no plano.",
  "tags": ""
 },
 {
  "id": "36",
  "group": "Imagem e texto",
  "title": "Mostrar que o mesmo arquivo mudou",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, quando eu falo de [O QUE MUDOU: os respiros, os erros, o tamanho], mostra o vídeo mudando no mesmo lugar, uma coisa de cada vez.",
  "tags": ""
 },
 {
  "id": "37",
  "group": "Imagem e texto",
  "title": "Conversa que anda até o pedido",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, quando eu conto a conversa com [QUEM], mostra um celular com as mensagens chegando e terminando em [ESTADO: pedido confirmado, pago...]. As mensagens são: [TEXTO OU PRINT].",
  "tags": ""
 },
 {
  "id": "38",
  "group": "Imagem e texto",
  "title": "Esquema com exemplo aceso",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, quando eu explico [ASSUNTO], monta um esquema com [AS ETAPAS / OS GRUPOS / AS CAUSAS] que cresce enquanto eu falo. No exemplo, acende o caminho de [PARTE] até [PARTE].",
  "tags": ""
 },
 {
  "id": "39",
  "group": "Imagem e texto",
  "title": "Antes e depois desenhado",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, mostra [O ANTES] e [O DEPOIS] na mesma escala, com os nomes [RÓTULO DO ANTES] e [RÓTULO DO DEPOIS], e acende só o que mudou.",
  "tags": ""
 },
 {
  "id": "40",
  "group": "Imagem e texto",
  "title": "Vídeo curto só com frases grandes",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, faz esse vídeo como fala curta com destaques grandes: de 2 a 4 frases minhas na tela, uma de cada vez, no estilo [ESTILO].",
  "tags": ""
 },
 {
  "id": "41",
  "group": "Imagem e texto",
  "title": "Pedido que eu faço para a IA",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, quando eu falo o pedido que faço para a IA ([O PEDIDO]), mostra uma barra digitando esse pedido junto com a minha voz e, na palavra [A PALAVRA DO RESULTADO], o botão envia e aparece [O RESULTADO].",
  "tags": ""
 },
 {
  "id": "42",
  "group": "Imagem e texto",
  "title": "Uma coisa numa escala",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, quando eu falo de [O QUE: custo, risco, nível, nota], mostra um medidor com a agulha indo para [A ZONA OU O VALOR] e a leitura [O TEXTO].",
  "tags": ""
 },
 {
  "id": "43",
  "group": "Imagem e texto",
  "title": "Busca digitada e chamada",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, quando eu falo o que [QUEM] busca ([O TERMO]), mostra uma barra de busca digitando esse termo junto com a minha voz e, na palavra [A PALAVRA DO RESULTADO], um cartão de resultado com [TÍTULO] e [LINHA CURTA]. Quando eu falo [A PALAVRA DA CHAMADA], entra o selo \"[Comenta PALAVRA]\".",
  "tags": ""
 },
 {
  "id": "44",
  "group": "Imagem e texto",
  "title": "Lista de pontos que vão sendo concluídos",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, quando eu falo os pontos ([OS ITENS]), escreve cada um num bloco de notas na hora em que eu falo e, quando eu falo [A PALAVRA DO CHECK], a bolinha vira check. O último item fica em destaque.",
  "tags": ""
 },
 {
  "id": "18",
  "group": "Som e voz",
  "title": "Som demais ou de menos",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, deixa só [5 ou 6] efeitos sonoros, nos momentos mais fortes.",
  "tags": ""
 },
 {
  "id": "19",
  "group": "Som e voz",
  "title": "Trilha alta ou sumida",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, a trilha tá [alta/sumida]. Deixa uns [22] dB abaixo da minha voz.",
  "tags": "música alta volume trilha"
 },
 {
  "id": "20",
  "group": "Som e voz",
  "title": "Voz com chiado ou volume irregular",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, tem [chiado / volume subindo e descendo]. Limpa sem mudar minha voz e me mostra antes e depois no mesmo volume.",
  "tags": ""
 },
 {
  "id": "21",
  "group": "Imagem e texto",
  "title": "Nome errado na legenda",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, na legenda, onde está [ERRADO] o certo é [CERTO]. Confere as outras palavras difíceis também.",
  "tags": ""
 },
 {
  "id": "22",
  "group": "Imagem e texto",
  "title": "Antes de entregar",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, confere a legenda palavra por palavra com o áudio e me lista as palavras que ficaram em dúvida.",
  "tags": ""
 },
 {
  "id": "23",
  "group": "Referências e versões",
  "title": "Antes de postar um vídeo com tela, conversa ou borrão",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, confere se não aparece nenhum dado pessoal no vídeo final. Não pode aparecer: [NOMES, CONVERSAS, PROJETOS].",
  "tags": ""
 },
 {
  "id": "24",
  "group": "Referências e versões",
  "title": "Pasta cheia de arquivos",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, tenho muitos arquivos em [PASTA]. Escolhe só o que serve pra minha fala e me diz o que falta.",
  "tags": ""
 },
 {
  "id": "25",
  "group": "Referências e versões",
  "title": "Antes e depois",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, faz um antes e depois de [O QUE] sem favorecer nenhum lado.",
  "tags": ""
 },
 {
  "id": "26",
  "group": "Referências e versões",
  "title": "Tem uma referência",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, quero parecido com esse vídeo: [ARQUIVO OU LINK]. Mede o estilo e usa no meu, sem copiar o conteúdo.",
  "tags": ""
 },
 {
  "id": "27",
  "group": "Referências e versões",
  "title": "Guardar o estilo de uma referência",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, analisa esse vídeo e me deixa um pedido pronto pra usar esse estilo em outros vídeos.",
  "tags": ""
 },
 {
  "id": "28",
  "group": "Referências e versões",
  "title": "Duas referências",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, usa a montagem do vídeo [A] e o lettering do vídeo [B].",
  "tags": ""
 },
 {
  "id": "29",
  "group": "Referências e versões",
  "title": "Repetir o estilo aprovado",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, edita o vídeo da pasta [PASTA NOVA] com o padrão do vídeo da pasta [PASTA APROVADA].",
  "tags": ""
 },
 {
  "id": "30",
  "group": "Referências e versões",
  "title": "Aprovado, pode seguir",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, aprovado. Faz o vídeo inteiro nesse padrão e guarda o padrão pros próximos.",
  "tags": ""
 },
 {
  "id": "31",
  "group": "Referências e versões",
  "title": "Trocar a abertura",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, troca o gancho escrito por \"[NOVO GANCHO]\" e deixa o resto igual.",
  "tags": ""
 },
 {
  "id": "32",
  "group": "Referências e versões",
  "title": "Várias aberturas pra testar",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, faz uma versão pra cada gancho da pasta [PASTA DOS GANCHOS], com o mesmo corpo.",
  "tags": ""
 },
 {
  "id": "33",
  "group": "Referências e versões",
  "title": "Testar uma coisa de cada vez",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, faz [N] versões mudando só [O QUE: o texto da abertura, a primeira frase, a chamada, o enquadramento].",
  "tags": ""
 },
 {
  "id": "34",
  "group": "Referências e versões",
  "title": "Muitas versões prontas",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, confere e exporta todas as versões da pasta [PASTA] e me dá a lista do que passou.",
  "tags": ""
 },
 {
  "id": "35",
  "group": "Referências e versões",
  "title": "Quanto gastou",
  "note": "Ajuste o pedido ao seu material e copie para a conversa com a EDITCLUB.",
  "prompt": "EDITCLUB, quanto isso gastou até agora?",
  "tags": ""
 }
];