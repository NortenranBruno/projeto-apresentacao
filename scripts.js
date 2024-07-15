
const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')

function formatcurrency(value) {
    const newValue = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    return newValue
}

function showAll(productsArray) {

    let MyLi = ''

    productsArray.forEach((product) => {
        MyLi += `
   
    <li>
        <img src=${product.src}>
        <p>${product.name}</p>
        <p class="item-price">R$ ${formatcurrency(product.price)}</p>
    </li>
      `
    })


    list.innerHTML = MyLi

}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({

        name: product.name,
        price: product.price * 0.9, //dar 10%de desconto
        vegan: product.vegan,
        src: product.src


    }))


    //spread operator ...
    showAll(newPrices)
}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `  
        <li>                
        <p>O valor total dos itens é R$ ${formatcurrency(totalValue)}</p>
    </li> 
`


}


function filterAllItems() {
    const filterjustvegan = menuOptions.filter((product) => product.vegan)

    showAll(filterjustvegan)
}

// função anomina na frente ()=>
buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)


