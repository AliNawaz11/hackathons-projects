//Listing Element

document.getElementById(`resumeForm`)?.addEventListener('submit',function(event){

    event.preventDefault();



const nameElement=document.getElementById('name') as HTMLInputElement;
const emailElement=document.getElementById('email') as HTMLInputElement;
const phoneElement=document.getElementById('phone') as HTMLInputElement;
const educationElement=document.getElementById('education')  as HTMLInputElement;
const experienceElement=document.getElementById('experience')  as HTMLInputElement;
const skillsElement=document.getElementById('skills')  as HTMLInputElement;

//

const usernameElement=document.getElementById("username")as HTMLInputElement;








if(nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement){

    const name=nameElement.value;
    const email=emailElement.value;
    const phone=phoneElement.value;
    const education=educationElement.value;
    const experience=experienceElement.value;
    const skills=skillsElement.value;

    const username=usernameElement.value;
const uniquepath=`resumes/${username.replace(/\s+/g, '')}_cv.html`

// create resume output
const resumeOutput=`
<h2>Resume</h2>
<p><b>Name:</b> <span id="edit-name" class="editable"> ${name} </span> </p>
<p><b>Email:</b> <span id="edit-email" class="editable"> ${email} </span> </p>
<p><b>Phone:</b> <span id="edit-phone" class="editable"> ${phone} </span> </p>

<h3>Education</h3>
<p id="edit-education" class="editable">${education}</p>

<h3>Experience</h3>
<p id="edit-experience" class="editable">${experience}</p>

<h3>Skills</h3>
<p id="edit-skills" class="editable">${skills}</p>`;


const downloadLink=document.createElement('a')
downloadLink.href='data:text/html;charset=utf-8,' +encodeURIComponent(resumeOutput)
downloadLink.download=uniquepath;
downloadLink.textContent='Download  Latest Resume';







const resumeOutputElement = document.getElementById('resumeOutput')
if(resumeOutputElement){
    resumeOutputElement.innerHTML=resumeOutput;

resumeOutputElement.appendChild(downloadLink)





makeEditable();
}
}
else{
    console.error("One or More output elements are missing")
}

});




function makeEditable(){
    const editableElements=document.querySelectorAll('.editable');
    editableElements.forEach(element=>{
        element.addEventListener('click', function(){
            const currentElement = element as HTMLElement;
            const currentValue=currentElement.textContent || "";


            // Replace content
            if(currentElement.tagName === "P" || currentElement.tagName === "SPAN"){
                const input = document.createElement('input')
                input.type = 'text'
                input.value =currentValue
                input.classList.add('editing-input')


currentElement.style.display ='none'
currentElement.parentNode?.insertBefore(input,currentElement)
input.focus()




            }
        })
    })
}