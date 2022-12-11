function talk(){

    var know = {
        "Olá" : "Oi, como você está hoje?",
        "Bem, obrigado" : "Que ótimo! Podemos começar com as suas perguntas então.",
        "Oi" : "Olá! Pode começar a trazer seus questionamentos.",
        "Como você está?" : "Bem, apenas ansioso. Aguardando seus questionamentos, claro.",
        "Como vai você?" : "Estou muito bem, obrigado por perguntar.",
        "Quem programou você?" : "Um certo estudante que diz não querer ser nomeado...",
        "Como você surgiu?" : "Bem, claramente não fui trazido por uma cegonha, se é que me entende.",
        "Como você foi feito?" : "Seguindo um tutorial. Aliás, meu código é programado em JavaScript.",
        "O que você está fazendo?" : "Bem, achei que tivesse percebido que estamos conversando...",
        "Ah, é" : "Sem problemas, pode fazer outra pergunta.",
        "Não gostei das suas respostas" : "Poxa que pena. Talvez se você tentar outras perguntas...",
        "Então..." : "Acho que encerramos por agora. Muito prazer em conversar com você!",
        "O prazer foi meu" : "Fico lisonjeado.",
        "Tchau" : "Até mais!",
        "Adeus!" : "Au revoir ma chérie.",
    }
    
    var user = document.getElementById("userBox").value;
        document.getElementById("chatLog").innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML = know[user] + "<br>";
    }
    else{
        document.getElementById("chatLog").innerHTML = "Poderia repetir? Não entendi muito bem o que você quis dizer.";
    }
}