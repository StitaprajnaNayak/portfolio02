const dayNight=document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark")

})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }

})
// ===============navbar============>>>
const list=document.querySelector(".list");
const navList= list.querySelectorAll('li');
totalNavList=navList.length,
allSection=document.querySelectorAll('.section'),
totalSection=allSection.length;
for(let i=0 ;i< totalNavList;i++){
    const a=navList[i].querySelector('a');
    a.addEventListener("click",function(){
        removeBackSection();
        for(let j=0;j<totalNavList;j++){
            if (navList[j].querySelector('a').classList.contains('active')){
                addBackSection(j);
                // allSection[j].classList.add('back-section')
            }
            navList[j].querySelector('a').classList.remove('active')
        }
        this.classList.add('active');;
        showSection(this);
    })
}
function showSection(element){
    for(let i=0;i<totalSection;i++)
    {
        allSection[i].classList.remove("active");
    }
    const target=element.getAttribute('href').split('#')[1];
    document.querySelector("#"+target).classList.add('active')
}
function removeBackSection(){
    for (let i=0;i<totalSection;i++){
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num){
    allSection[num].classList.remove("back-section");
}
function updateNav(element){
    for(let i=0;i< totalNavList;i++){
        navList[i].querySelector('a').classList.remove('active')
        const target=element.getAttribute('href').split('#')[1];
        if(target === navList[i].querySelector('a').getAttribute('href').split('#')[1]){
            navList[i].querySelector('a').classList.remove('active'); 
        }
    }
}
document.querySelector('.hire-me').addEventListener('click',function(){
    const sectionIndex=this.getAttribute("data-section-index");
    // console.log(sectionIndex)
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
