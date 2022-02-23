import Image1 from "../imgs/Item1.jpg"
import Image2 from "../imgs/Item2.jpg"
import Image3 from "../imgs/Item3.jpg"
import Image4 from "../imgs/Item4.jpg"

const clothes = [
    { id: 1, image: Image1, name: "ItemName", desc: "Description", stock: 5, price: 2500},
    { id: 2, image: Image2, name: "ItemName", desc: "Description", stock: 4, price: 1200},
    { id: 3, image: Image3, name: "ItemName", desc: "Description", stock: 5, price: 850},
    { id: 4, image: Image4, name: "ItemName", desc: "Description", stock: 12, price: 990},
    { id: 5, image: Image1, name: "ItemName", desc: "Description", stock: 8, price: 1450},
    { id: 6, image: Image2, name: "ItemName", desc: "Description", stock: 7, price: 1290},
    { id: 7, image: Image3, name: "ItemName", desc: "Description", stock: 3, price: 650},
    { id: 8, image: Image4, name: "ItemName", desc: "Description", stock: 1, price: 2380}
];

export const getFetch = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(clothes)
    },5000)
})