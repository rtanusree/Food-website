let foods=[
    {name:"Chowmin",image:"https://loveincorporated.blob.core.windows.net/contentimages/gallery/a466a0a4-d9b2-43c9-8c40-edff10e02eb9-spagbol_Italy.jpg",price:"Rs 300",detail:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis commodi labore culpa velit rerum ullam maiores amet nobis harum quos praesentium consectetur pariatur ex vero, placeat minus debitis veniam officiis."},
    {name:"Pizza",image:"https://qph.cf2.quoracdn.net/main-qimg-33256d17708b38395ab3baebce986285-lq",price:"Rs 450",detail:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis commodi labore culpa velit rerum ullam maiores amet nobis harum quos praesentium consectetur pariatur ex vero, placeat minus debitis veniam officiis."},
    {name:"Tandoori",image:"https://static.toiimg.com/photo/65489383.cms",price:"Rs 100",detail:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis commodi labore culpa velit rerum ullam maiores amet nobis harum quos praesentium consectetur pariatur ex vero, placeat minus debitis veniam officiis."},
    {name:"Chop",image:"https://shellzero.files.wordpress.com/2012/05/delicious-food-yum-favim-com-183557.jpg",price:"Rs 250",detail:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis commodi labore culpa velit rerum ullam maiores amet nobis harum quos praesentium consectetur pariatur ex vero, placeat minus debitis veniam officiis."}
]
let clutter="";
let food=document.querySelector(".food")
foods.forEach(function(food,index){
    clutter+=
    clutter=`<div class="box">
    <img src="${food.image}">
    <h3>${food.name}</h3>
    <p>${food.price}</p>
    <button id="${index}"class="dikhaao">dikhaao</button>
</div>`
})
food.innerHTML=clutter;
let number=0;
let section=document.querySelector("section")
let section1=document.querySelector("section1")
let section2=document.querySelector("section2")
let section3=document.querySelector("section3")
let section4=document.querySelector("section4")
let section6=document.querySelector("section6")
let section5=document.querySelector("section5")
let header=document.querySelector("header")
let bigimage=document.querySelector(".bigimage")
let bigdetails=document.querySelector(".bigdetails")
let bigprice=document.querySelector(".bigprice")
let bigtitle=document.querySelector(".bigtitle")
let back = document.querySelector(".back")
let laao=document.querySelector(".laao")
let input=document.querySelectorAll("input")
food.addEventListener("click",(event)=>{
     if(event.target.className=="dikhaao"){
        number=Number(event.target.id)
        section.style.display="none";
        section1.style.display="none";
        section2.style.display="block";
        section3.style.display="none";
        section4.style.display="none";
        section5.style.display="none";
        section6.style.display="none";
        header.style.display="none";
        bigimage.src=`${foods[number].image}`
        bigtitle.innerText=`${foods[number].name}`
        bigdetails.innerText=`${foods[number].detail}`
        bigprice.innerText=`${foods[number].price}`

     }
})
laao.addEventListener("click",()=>{
    if(input[0].value==""){
        alert("fill the form")
   }else{
    input.forEach(function(inputs){
        laao.innerText="la liya";
        inputs.value=""
})
alert("booking is done")
   }
})
back.addEventListener("click",()=>{
    section.style.display="block";
    section1.style.display="block";
    section2.style.display="none";
    section3.style.display="block";
    section4.style.display="block";
    section5.style.display="block";
    section6.style.display="block";
    header.style.display="block";
    laao.innerText="laao"
});
