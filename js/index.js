const fragment = document.createDocumentFragment()
const barraBusqueda = document.getElementById('buscador')
const btnLetras = document.getElementById('letras')
const pais = document.querySelector('#pais').content
const paises = document.querySelector('#paises')
const abrir = document.getElementById('menu')
const aside = document.getElementById('busc')
const modal = document.querySelector('#modal')
const cerrar = document.querySelector('.cerrar')
const modalC = document.querySelector('.modalcontenido')
const mod = document.querySelector('.modal2')
const obtainId = document.getElementById('paises')
const America = document.getElementById('America')
const Africa = document.getElementById('Africa')
const Asia = document.getElementById('Asia')
const Europa = document.getElementById('Europa')
const Oceania = document.getElementById('Oceania')
const paisInfo = document.querySelector('#msPais').content


let TodosLosPaises = []


document.addEventListener('DOMContentLoaded', () => {
    loadPaises()
})

const loadPaises = () => {
    const options = {
        method: 'GET',
	    headers: {
            'X-RapidAPI-Key': 'aece92988cmshc945ee7e8d1f723p1807a9jsn1daea7bdb972',
		    'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
	}
};

fetch('https://country-facts.p.rapidapi.com/all', options)
	.then(response => response.json())
	.then(response => {
        TodosLosPaises = response
        ponerPaises(TodosLosPaises)
        console.log('Paises', TodosLosPaises)
    })
	.catch(err => console.error(err));
}

const ponerPaises = (nombre) => {
    paises.innerHTML = ''
    nombre.forEach((resultao) => {
        pais.querySelector('img').setAttribute('src', resultao.flag)
        pais.querySelector('.imgMuestra').setAttribute('id', resultao.cca2)
        pais.querySelector('.nombrePais').setAttribute('id', resultao.cca2)
        pais.querySelector('.nombrePais').textContent = resultao.translations.spa.common
        const clone = pais.cloneNode(true)
        fragment.appendChild(clone)
    })
    paises.appendChild(fragment)
}

barraBusqueda.addEventListener('keyup', () => {
    let bus = barraBusqueda.value.toLowerCase()
    let expre = new RegExp (`${bus},*`, 'i')
    let arre = TodosLosPaises.filter(pais => expre.test(pais.translations.spa.common))
    paises.innerHTML = ''
    ponerPaises(arre);
})

btnLetras.addEventListener ('click', e => {
    if(e.target.className == 'btn'){
        obtId(e.target.id)       
    }
    e.preventDefault()
})

const obtId = (id) => {
    const letra = id
    const PaisesA = TodosLosPaises.filter(pais=>(pais.translations.spa.common[0]) === letra )
    paises.innerHTML = ''
    ponerPaises(PaisesA)
}

abrir.addEventListener('click', () => {
    aside.classList.toggle('desplegar')
})

America.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'aece92988cmshc945ee7e8d1f723p1807a9jsn1daea7bdb972',
            'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
        }
    };
    
    fetch('https://country-facts.p.rapidapi.com/region/america', options)
        .then(response => response.json())
        .then(response => {
            TodosLosPaises = response
            ponerPaises(TodosLosPaises)
        } )

})

Africa.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'aece92988cmshc945ee7e8d1f723p1807a9jsn1daea7bdb972',
            'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
        }
    };
    
    fetch('https://country-facts.p.rapidapi.com/region/africa', options)
        .then(response => response.json())
        .then(response => {
            TodosLosPaises = response
            ponerPaises(TodosLosPaises)
        } )

})

Asia.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'aece92988cmshc945ee7e8d1f723p1807a9jsn1daea7bdb972',
            'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
        }
    };
    
    fetch('https://country-facts.p.rapidapi.com/region/asia', options)
        .then(response => response.json())
        .then(response => {
            TodosLosPaises = response
            ponerPaises(TodosLosPaises)
        } )

})

Europa.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'aece92988cmshc945ee7e8d1f723p1807a9jsn1daea7bdb972',
            'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
        }
    };
    
    fetch('https://country-facts.p.rapidapi.com/region/europe', options)
        .then(response => response.json())
        .then(response => {
            TodosLosPaises = response
            ponerPaises(TodosLosPaises)
        } )

})

Oceania.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'aece92988cmshc945ee7e8d1f723p1807a9jsn1daea7bdb972',
            'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
        }
    };
    
    fetch('https://country-facts.p.rapidapi.com/region/oceania', options)
        .then(response => response.json())
        .then(response => {
            TodosLosPaises = response
            ponerPaises(TodosLosPaises)
        } )

})

const infoPaises = (nombre) => {
    modal.innerHTML = ''
    nombre.forEach((resultao) => {
        paisInfo.querySelector('img').setAttribute('src', resultao.flag)
        paisInfo.querySelector('.nombrePopular').textContent = resultao.translations.spa.common
        paisInfo.querySelector('.nombreOficialSpa').textContent = resultao.translations.spa.official
        paisInfo.querySelector('.nombreOficial').textContent = resultao.name.official
        paisInfo.querySelector('.capital').textContent = resultao.capital[0]
        paisInfo.querySelector('.region').textContent = resultao.region
        paisInfo.querySelector('.subreg').textContent = resultao.subregion
        paisInfo.querySelector('.Poblacion').textContent = resultao.population
        paisInfo.querySelector('.area').textContent = resultao.area
        paisInfo.querySelector('.lat').textContent = resultao.latlng[0]
        paisInfo.querySelector('.long').textContent = resultao.latlng[1]
        paisInfo.querySelector('.codigollamada').textContent = resultao.callingCodes[0]
        paisInfo.querySelector('.cca2').textContent = resultao.cca2
        paisInfo.querySelector('.cca3').textContent = resultao.cca3
        paisInfo.querySelector('.ccn3').textContent = resultao.ccn3
        paisInfo.querySelector('.cioc').textContent = resultao.cioc
        paisInfo.querySelector('.tld').textContent = resultao.tld[0]
        const clone = paisInfo.cloneNode(true)
        fragment.appendChild(clone)
    })
    modal.appendChild(fragment)

}

obtainId.addEventListener ('click', e => {
    if(e.target.className == 'nombrePais' || e.target.className == 'imgMuestra'){
        otraFunc(e.target.id)
        modalC.style.visibility = 'visible'  
        mod.classList.toggle('cerrar-modal')

    }
    e.preventDefault()
    
})

const otraFunc = (id) => {
    const letra = id
    const Paisesinfo = TodosLosPaises.filter(pais=>(pais.cca2) === letra )
    console.log(Paisesinfo)
    infoPaises(Paisesinfo)
    
}

cerrar.addEventListener('click', () => {
    mod.classList.toggle('cerrar-modal')
    modalC.style.visibility = 'hidden' 

})
