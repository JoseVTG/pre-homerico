// variaveis 

let title = document.getElementById('content-title')
let image = document.getElementById('content-image')
let paragraph = document.getElementById('content-paragraph')
let extra_paragraph = document.getElementById('content-paragraph2')
let rodape = document.getElementById('rodape')
let main = document.getElementById('content-main')
let volta = document.getElementById('voltar')
let fas1 = document.getElementById('fase1')
let fas2 = document.getElementById('fase2')
let fas3 = document.getElementById('fase3')
let media = document.getElementById('img-media')
let pequena = document.getElementById('img-pequena')

//funções 

function voltar() {
    volta.style.display = 'none'
    main.style.display = 'none'
    rodape.style.display = 'block'
    fas1.style.display = 'block'
    fas2.style.display = 'block'
    fas3.style.display = 'block'
}


function fase1() {
    volta.style.display = 'block'
    main.style.display = 'block'
    rodape.style.display = 'none'
    fas1.style.display = 'none'
    fas2.style.display = 'block'
    fas3.style.display = 'block'
    pequena.src = '300.png'
    media.srcset = '700px.png'

    title.innerHTML = 'introdução:'
    
    paragraph.innerHTML = 'O período pré-Homérico é uma parte interessante da história antiga da Grécia, antes das histórias famosas escritas por Homero. Durante esse tempo, entre os séculos XII e VIII a.C., muitas coisas estavam acontecendo na Grécia que moldaram como as pessoas viviam.'
    extra_paragraph.innerHTML = `- Mudanças Sociais e Líderes Locais:
    Nessa época, as coisas estavam mudando na Grécia. As pessoas estavam deixando de viver em grupos pequenos e começando a se organizar de maneira mais complexa. As comunidades eram dirigidas por líderes locais, e a escrita ainda não era comum. Isso significa que sabemos menos sobre essa época, porque as histórias eram passadas oralmente.`

   
}

function fase2() {
    volta.style.display = 'block'
    main.style.display = 'block'
    rodape.style.display = 'none'
    fas2.style.display = 'none'
    fas1.style.display = 'block'
    fas3.style.display = 'block'
    media.srcset = '700estru.jpeg'
    pequena.src ='300px.jpeg'

    title.innerHTML = `Civilização Micênia em quedas:`

    paragraph.innerHTML = `- Civilização Micênica em queda:
    Um ponto importante é que a civilização micênica estava diminuindo. Isso era um grupo que vivia na Grécia e nas ilhas e era muito avançado. Mas algo aconteceu, possivelmente invasões ou outras coisas ruins, que fizeram essa civilização enfraquecer e muitas pessoas se mudarem.
    `

    extra_paragraph.innerHTML = `- Vida Cotidiana e Trocas:
    As pessoas naquela época passavam seus dias cultivando a terra, cuidando de animais e também fazendo comércio. Elas viviam principalmente em suas próprias comunidades e também trocavam coisas com outras civilizações ao redor do mar Mediterrâneo.`

    
}

function fase3() {
    volta.style.display = 'block'
    main.style.display = 'block'
    rodape.style.display = 'none'
    fas3.style.display = 'none'
    fas1.style.display = 'block'
    fas2.style.display = 'block'
    media.srcset = 'baia700px.jpeg'
    pequena.src = 'baia400px.webp'

    title.innerHTML = `Deixando um Misterio`

    paragraph.innerHTML = `- Deixando um Mistério:
    O período pré-Homérico é um pedaço da história que nos deixa com algumas perguntas. Não sabemos tudo porque as informações são limitadas. No entanto, as histórias que vieram dessa época moldaram o jeito que os gregos viam o mundo. Elas continuaram a ser importantes mesmo quando o tempo passou e ainda têm influência até hoje.`

    extra_paragraph.innerHTML = `Muitos dos mitos e lendas que se originaram nesse período têm uma influência duradoura na cultura ocidental. Personagens como os deuses gregos e heróis mitológicos têm sido temas recorrentes na literatura, arte e entretenimento até os dias de hoje.`
}