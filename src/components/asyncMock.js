const products = [
        {
            id :1,
            name: "Bloques Imantados",
            price: 8000,
            category: "didacticos",
            img: "./public/../img/imanes.jpg",
            stock: 10,
            description: 'lalalalalala',
        },
        {
            id :2,
            name: "Autito de madera",
            price: 2500,
            category: "autitos",
            img: "./public/../img/autito.jpg",
            stock: 15,
            description: 'lalalalalala',
        },
        {
            id :3,
            name: "Juego de encastre",
            price: 3000,
            category: "didacticos",
            img: "./public/../img/encastre.jpg", 
            stock: 5,
            description: 'lalalalalala',
        }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products)
    }, 2000)
    })
}
export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find (prod => prod.id === id))
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}