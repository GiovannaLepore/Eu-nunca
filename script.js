const frases = [
    "Eu nunca deixei de fazer a lição de casa.",
    "Eu nunca dormi durante uma aula.",
    "Eu nunca usei o celular escondido na sala de aula.",
    "Eu nunca estudei na última hora para uma prova.",
    "Eu nunca peguei um ônibus errado para a escola.",
    "Eu nunca fui chamado(a) para a diretoria.",
    "Eu nunca colhei em uma prova.",
    "Eu nunca esqueci de levar o material escolar.",
    "Eu nunca fiz amizade com alguém em um intervalo.",
    "Eu nunca comi lanche escondido na sala de aula.",
    "Eu nunca deixei de fazer um trabalho em grupo.",
    "Eu nunca fui o(a) último(a) a ser escolhido(a) para um time na educação física.",
    "Eu nunca esqueci a data de uma prova.",
    "Eu nunca tirei nota vermelha.",
    "Eu nunca fui elogiado(a) por um professor.",
    "Eu nunca fui suspenso(a) da escola.",
    "Eu nunca participei de uma feira de ciências.",
    "Eu nunca briguei com um(a) amigo(a) na escola.",
    "Eu nunca perdi a carteirinha da escola.",
    "Eu nunca fiquei ansioso(a) por uma apresentação.",
    "Eu nunca faltei na aula sem motivo.",
    "Eu nunca deixei de estudar para sair com amigos.",
    "Eu nunca fiquei de recuperação.",
    "Eu nunca me atrasei para a aula.",
    "Eu nunca fui o(a) melhor aluno(a) em uma matéria.",
    "Eu nunca tirei uma nota 10.",
    "Eu nunca fui ao banheiro para evitar uma aula.",
    "Eu nunca fiz uma amizade que dura até hoje na escola.",
    "Eu nunca esqueci de fazer um trabalho.",
    "Eu nunca fiz parte do grêmio estudantil.",
    "Eu nunca me apaixonei por alguém da escola.",
    "Eu nunca esqueci o uniforme em casa.",
    "Eu nunca pedi ajuda ao professor após a aula.",
    "Eu nunca fiquei nervoso(a) para uma apresentação oral.",
    "Eu nunca fui voluntário(a) em um projeto escolar.",
    "Eu nunca participei de uma competição esportiva da escola.",
    "Eu nunca me perdi em uma excursão escolar.",
    "Eu nunca fui chamado(a) para fazer um discurso na frente da turma.",
    "Eu nunca fui em uma festa de formatura.",
    "Eu nunca fiquei com sono na primeira aula do dia.",
    "Eu nunca fui o(a) aluno(a) favorito(a) de um professor.",
    "Eu nunca fiquei sem entender uma explicação na aula.",
    "Eu nunca fiz uma pergunta ao professor que deixou ele(a) sem resposta.",
    "Eu nunca pedi para o professor adiar uma prova.",
    "Eu nunca participei de uma gincana escolar.",
    "Eu nunca fui escolhido(a) para ser líder de turma.",
    "Eu nunca troquei de lugar na sala sem autorização.",
    "Eu nunca fiz um trabalho que foi escolhido como exemplo.",
    "Eu nunca fiz uma amizade inesperada na escola.",
    "Eu nunca fiquei nervoso(a) antes de uma prova importante.",
    "Eu nunca participei de um coral ou grupo de música escolar.",
    "Eu nunca ajudei a organizar um evento na escola.",
    "Eu nunca fui o(a) mais falante da turma.",
    "Eu nunca tive medo de perguntar algo na aula.",
    "Eu nunca fiz um trabalho de última hora.",
    "Eu nunca fui expulso(a) de uma aula por comportamento.",
    "Eu nunca esqueci o nome de um colega de classe.",
    "Eu nunca fui pego(a) dormindo na aula.",
    "Eu nunca recebi um elogio inesperado de um professor.",
    "Eu nunca perdi a hora de entrar na escola.",
    "Eu nunca fiz parte de um clube escolar.",
    "Eu nunca fiz um desenho no caderno durante a aula.",
    "Eu nunca deixei de entregar um trabalho no prazo.",
    "Eu nunca participei de uma reunião de pais.",
    "Eu nunca fiz um amigo(a) em outra série.",
    "Eu nunca organizei um grupo de estudos.",
    "Eu nunca fui o(a) primeiro(a) a levantar a mão para responder uma pergunta.",
    "Eu nunca dei risada durante uma prova.",
    "Eu nunca fiz um projeto escolar que me deixou orgulhoso(a).",
    "Eu nunca esqueci o nome de um professor.",
    "Eu nunca me senti perdido(a) em uma matéria.",
    "Eu nunca dei um presente para um(a) professor(a).",
    "Eu nunca fiz um trabalho em grupo fora da escola.",
    "Eu nunca participei de uma peça de teatro escolar.",
    "Eu nunca fui escolhido(a) para representar a turma em um evento.",
    "Eu nunca faltei à aula por causa de doença.",
    "Eu nunca pedi desculpas a um(a) amigo(a) depois de uma briga.",
    "Eu nunca fui o(a) último(a) a sair da sala no final da aula.",
    "Eu nunca participei de um acampamento escolar.",
    "Eu nunca perdi um material importante.",
    "Eu nunca deixei de fazer uma tarefa porque esqueci.",
    "Eu nunca fui a uma excursão escolar.",
    "Eu nunca fiz um amigo(a) em uma aula extra.",
    "Eu nunca ajudei a montar um mural na escola.",
    "Eu nunca comi algo na aula de forma escondida.",
    "Eu nunca tive que recomeçar um trabalho porque perdi o arquivo.",
    "Eu nunca fui a um clube de leitura na escola.",
    "Eu nunca falei em público na escola.",
    "Eu nunca ajudei um colega com os estudos.",
    "Eu nunca fiz uma apresentação que me deixou nervoso(a).",
    "Eu nunca participei de um campeonato esportivo escolar.",
    "Eu nunca briguei com um professor.",
    "Eu nunca fui elogiado(a) na frente da turma.",
    "Eu nunca fiz uma viagem escolar inesquecível.",
    "Eu nunca precisei de ajuda para entender uma matéria.",
    "Eu nunca esqueci meu lanche em casa.",
    "Eu nunca escrevi uma redação que foi lida para a turma.",
    "Eu nunca ajudei a arrumar a sala de aula.",
    "Eu nunca me perdi no horário da aula.",
    "Eu nunca tive medo de uma prova surpresa."
];

function gerarFrase() {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById('frase').innerText = fraseAleatoria;
}
