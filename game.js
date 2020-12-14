const btnStart = document.getElementById("start")
const btn = document.getElementById("nextQ")
const question = document.getElementById("question")
const da1 =document.getElementById("da1")
const da2 =document.getElementById("da2")
const da3 =document.getElementById("da3")
const da4 =document.getElementById("da4")
const game =document.getElementById("game")

btnStart.style.display="block";
game.style.display="none";

const qList=[{
    question:"m may tuoi?",
    ans: [1,2,3,4]
},
{
    question:"cu m bn cm?",
    ans: [10,20,30,40]
},
{
    question:"Tuan Dep Trai?",
    ans: ["okee","okee","Okee","Okeokeoke"]
}
]

btnStart.addEventListener('click',()=>{
    btnStart.style.display="none";
    game.style.display="block";

})

let i=0;
da1.innerHTML=qList[i].ans[0];
da2.innerHTML=qList[i].ans[1];
da3.innerHTML=qList[i].ans[2];
da4.innerHTML=qList[i].ans[3];
question.innerHTML=qList[i].question;
btn.addEventListener('click',()=>{
    if(i>qList.length-2){
        game.innerHTML="10d ve cho"
    } else{
        question.innerHTML=qList[i+1].question;
        da1.innerHTML=qList[i+1].ans[0];
        da2.innerHTML=qList[i+1].ans[1];
        da3.innerHTML=qList[i+1].ans[2];
        da4.innerHTML=qList[i+1].ans[3];
    }
    ///
    i++
})
