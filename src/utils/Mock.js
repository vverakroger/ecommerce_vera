const clothes = [
    {id:1,image:'../../imgs/Item1.png',name: "ItemName",desc: "Description"},
    {id:2,image:'../../imgs/Item2.png',name: "ItemName",desc: "Description"},
    {id:3,image:'../../imgs/Item3.png',name: "ItemName",desc: "Description"},
    {id:4,image:'../../imgs/Item4.png',name: "ItemName",desc: "Description"},
    {id:5,image:'../../imgs/Item1.png',name: "ItemName",desc: "Description"},
    {id:6,image:'../../imgs/Item2.png',name: "ItemName",desc: "Description"},
    {id:7,image:'../../imgs/Item3.png',name: "ItemName",desc: "Description"},
    {id:8,image:'../../imgs/Item4.png',name: "ItemName",desc: "Description"}
];

export const getFetch = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(clothes)
    },5000)
})