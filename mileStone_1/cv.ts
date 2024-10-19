const importbutton=document.getElementById('button') as HTMLButtonElement

const skill=document.getElementById('skills') as HTMLElement

importbutton.addEventListener('click' ,()=>{
    if(skill.style.display === "none"){
        skill.style.display ="block"
    }
    else{
skill.style.display="none"
    }
});