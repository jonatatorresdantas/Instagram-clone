let imagem = document.getElementById("troca-imagem");

function trocarImagem(){
    if (imagem.style.opacity === "0") {
        imagem.style.opacity = "1"; // Torna a imagem visível
    } else {
        imagem.style.opacity = "0"; // Torna a imagem invisível
    }
}



setInterval(() => {
        trocarImagem(); // Chama a função para esconder a imagem
} , 3000); // Troca a imagem a cada 3 segundos 