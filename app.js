//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

        function exibirTextoNaTela(tag, texto) {
            let campo = document.querySelector(tag);
            campo.innerHTML = texto;
        }

        function exibirMensagemInicial() {
            exibirTextoNaTela("h1", "Jogo do Amigo Secreto!");
            exibirTextoNaTela("h2", "Digite o nome do seu amigo!");
        }

        exibirMensagemInicial();

        function adicionarAmigo() {
            let nomeInput = document.querySelector("input");
            let nome = nomeInput.value.trim();

            if (nome === "") {
                exibirTextoNaTela("h2", "Nome inválido. Tente novamente.");
                return;
            }

            listaAmigos.push(nome);
            atualizarListaNaTela();
            exibirTextoNaTela("h2", "Nome adicionado com sucesso!");
            limparCampo();
        }

        function atualizarListaNaTela() {
            let ul = document.getElementById("listaAmigos");
            ul.innerHTML = ""; // limpa a lista para evitar duplicação

            listaAmigos.forEach(amigo => {
                let li = document.createElement("li");
                li.textContent = amigo;
                ul.appendChild(li);
            });
        }

        function sortearAmigo() {
            if (listaAmigos.length === 0) {
                exibirTextoNaTela("h2", "Adicione algum nome antes de sortear.");
                return;
            }

            let indice = Math.floor(Math.random() * listaAmigos.length);
            let amigoSorteado = listaAmigos[indice];

            let resultado = document.getElementById("resultado");
            resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
        }

        function limparCampo() {
            let input = document.querySelector("input");
            input.value = "";
        }