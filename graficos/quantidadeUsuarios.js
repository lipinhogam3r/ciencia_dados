async function quantidadeUsuarios() {
    const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/trabalho/trabalho-tipos-de-ocupacao.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDosPostos = Object.keys(dados)
    const quantidadeTrabalhadors = Object.values(dados)


    const data = [
        {
            x: nomeDosPosto,
            y: quantidadeTrabalhadors,
            type: 'bar'
        }
    ]

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('grafico-container').appendChild(grafico)
    Plotly.newPlot(grafico, data)

}

quantidadeUsuarios()
