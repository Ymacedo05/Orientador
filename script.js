let texto = document.getElementById('texto')

let consultar = document.getElementById('consultar')
consultar.addEventListener('click', () => {geral('consultar')})

let reset = document.getElementById('reset')
reset.addEventListener('click', () => { geral('reset')})

let circulo = document.getElementById('circulo')


function geral(x) {



    if (x == 'consultar') {

        circulo.className = 'circ'

        let frases = ['Acredito que sim!','Acredito que não', 'Com toda certeza, sim!', 'Com toda certeza, não!', 'Não tenho certeza...']

        let numero = Math.round(Math.random() * 4)

        

        setTimeout( () => {

            texto.value = frases[numero]
        }, 1000)



        setTimeout( () => {circulo.className = ''
    }, 1000)


    } else if(x == 'reset') {
        texto.value = ''
    }

    



    /* for(var c = 0; c < frases.length; c++) {

    } */
}