function calcularImpacto() {
    // Pega o valor selecionado no <select>
    const praticaSelecionada = document.getElementById('pratica').value;
    const resultadoDiv = document.getElementById('resultado');
    const textoResultado = document.getElementById('texto-resultado');
    
    let mensagem = "";

    // Define a mensagem com base na escolha
    if (praticaSelecionada === "drones") {
        mensagem = "🌱 <strong>Economia de água e insumos:</strong> O uso de tecnologia de precisão reduz em até <strong>30%</strong> o desperdício de água e defensivos agrícolas, mantendo o solo mais saudável.";
    } else if (praticaSelecionada === "plantio") {
        mensagem = "🚜 <strong>Proteção do Solo:</strong> O plantio direto evita a erosão do solo, retém mais umidade e armazena mais carbono na terra, ajudando a combater o aquecimento global.";
    } else if (praticaSelecionada === "solar") {
        mensagem = "☀️ <strong>Sustentabilidade Energética:</strong> Reduz as emissões de CO2 da fazenda a quase zero na produção de energia e gera uma economia de até <strong>95%</strong> na conta de luz do produtor.";
    }

    // Mostra o texto e exibe a caixinha na tela
    textoResultado.innerHTML = mensagem;
    resultadoDiv.style.display = "block";
}