import { division } from "./division.js"

const nodeInputOne = document.querySelector(".inputOne");
const nodeInputTwo = document.querySelector(".inputTwo");
const nodeBtn = document.querySelector(".btn");



nodeBtn.addEventListener("click", ()=>{
    console.log(division(nodeInputOne.value, nodeInputTwo.value));
});