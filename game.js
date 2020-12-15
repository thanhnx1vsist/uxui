const btnStart = document.getElementById("start")
const btn = document.getElementById("nextQ")
const question = document.getElementById("question")
const da1 =document.getElementById("da1")
const da2 =document.getElementById("da2")
const da3 =document.getElementById("da3")
const da4 =document.getElementById("da4")
const game =document.getElementById("game")
var radioBtn0 =document.getElementById("radio0")
var radioBtn1=document.getElementById("radio1")
var radioBtn2 =document.getElementById("radio2")
var radioBtn3 =document.getElementById("radio3")

btnStart.style.display="block";
game.style.display="none";

const qList=[{
    question:"Đây là trang học gì ?",
    ans: ["Tốc chiến","Tốc Hành","Tốc Độ","Tốc Ký"]
},
{
    question:"Làm sao để gõ tốc ký nhanh?",
    ans: ["Thuộc quy tắc","Chăm chỉ","Luyện tập","Cả 3 đáp án trên"]
},
{
    question:"Đâu không phải là một khuyết điểm của tốc ký",
    ans: ["Âm /Cờ/","Âm /Gờ/","Âm /Ngờ/","Âm /Lờ/"]
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
        game.innerHTML="Bạn đã hoàn thành trò chơi với kết quả 2/3"
    } else{
        question.innerHTML=qList[i+1].question;
        da1.innerHTML=qList[i+1].ans[0];
        da2.innerHTML=qList[i+1].ans[1];
        da3.innerHTML=qList[i+1].ans[2];
        da4.innerHTML=qList[i+1].ans[3];
    }
    ///
    i++
    radioBtn0.checked = false;
    radioBtn1.checked = false;
    radioBtn2.checked = false;
    radioBtn3.checked = false;
})
