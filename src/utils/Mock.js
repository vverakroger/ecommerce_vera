import Image1 from "../imgs/Item1.png"
import Image2 from "../imgs/Item2.png"
import Image3 from "../imgs/Item3.png"
import Image4 from "../imgs/Item4.png"

const clothes = [
    { id: 1, image: Image1, name: "ItemName", desc: "Description" },
    { id: 2, image: Image2, name: "ItemName", desc: "Description" },
    { id: 3, image: Image3, name: "ItemName", desc: "Description" },
    { id: 4, image: Image4, name: "ItemName", desc: "Description" },
];

export const getFetch = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(clothes)
    },5000)
})