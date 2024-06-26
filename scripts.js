// Chave da API
const chave = "cebcd482eda57fa9a6714c1c2ba91885";

// Função para exibir os dados na tela
function colocarNaTela(dados) {
    console.log(dados);

    // Atualiza as informações do DOM com os dados recebidos da API
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.round(dados.main.temp) + "°C";
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".max").innerHTML = Math.round(dados.main.temp_max) + "°C";
    document.querySelector(".min").innerHTML = Math.round(dados.main.temp_min) + "°C";
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";

    // Muda a imagem de fundo com base na descrição do clima
    const background = document.querySelector('.background');
    const textoPrevisao = dados.weather[0].description;

    // Define a imagem de fundo de acordo com a descrição do clima
    switch (textoPrevisao) {
        case "céu limpo":
            background.src = "/img/Ceu_limpo.jpg";
            break;
        case "nublado":
            background.src = "/img/Nublado.jpg";
            break;
        case "nuvens dispersas":
            background.src = "/img/Nuvens-Dispersas.jpg";
            break;
        case "algumas nuvens":
            background.src = "/img/Algumas-nuvens.jpg";
            break;
        case "chuva moderada":
            background.src = "/img/chuva-moderada.jpg";
            break;
        case "chuva leve":
            background.src = "/img/chuva-leve.jpg";
            break;
        case "chuva forte":
            background.src = "/img/chuva-forte.jpg";
            break;
        default:
            background.src = ""; // Fundo padrão se não houver correspondência
    }
}

// Função para buscar os dados da cidade na API
async function buscarCidade(cidade) {
    try {
        const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`);
        const dados = await resposta.json();
        colocarNaTela(dados);
    } catch (erro) {
        console.error("Erro ao buscar os dados da cidade:", erro);
    }
}

// Função acionada ao clicar no botão
function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value;
    buscarCidade(cidade);
}
