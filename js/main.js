var productsList = [
    {
        name:"producto 1",
        price:12.45,
        category:"Miscellaneous"
    },
    {
        name:"producto 2",
        price:25.13,
        category:"Vegetables"
    },
    {
        name:"producto 3",
        price:45.00,
        category:"Cloths"
    },
    {
        name:"producto 4",
        price:12500.00,
        category:"Computers"
    },
    {
        name:"producto 5",
        price:15500.00,
        category:"Computers"
    },
    {
        name:"producto 6",
        price:8729.00,
        category:"Computers"
    },{
        name:"producto 7",
        price:150.00,
        category:"Cloths"
    },{
        name:"producto 8",
        price:100.00,
        category:"Miscellaneous"
    },{
        name:"producto 9",
        price:50.00,
        category:"Vegetables"
    },{
        name:"producto 10",
        price:200.00,
        category:"Cloths"
    }
]


const printName = () => {
    for( let i =0;i<productsList.length;i++){
        let name = productsList[i].name
        console.log(name)
    }
}
printName()

const printName2 = () =>{
    productsList.forEach((product,index) => console.log(product.name+" "+index))
}
printName2()


const createLabels = array => {
    let result = [];
    for(i=0;i<array.length;i++){
        let string = `El ${array[i].name} tiene un costo de ${array[i].price}`
        result.push(string)
    }
    return result
}


const createdLabels2 = () => {
    let labelArray = productsList.map( product => `El ${product.name} tiene un costo de ${product.price}`)
return labelArray
}

const filterByCategory = ( array, selectedCategory) => {
    let result = []
    for(i=0;i<array.length;i++){
//      array[i].category === selectedCategory ? result.push(array[i]) : null
        array[i].category === selectedCategory && result.push(array[i])
    }
    return result
}

const filter2 = (array, selectedCategory ) => {
    let result = array.filter(item => item.category === selectedCategory )
    return result
} 