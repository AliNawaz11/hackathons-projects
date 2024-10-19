//Listing Element
var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    //
    var usernameElement = document.getElementById("username");
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        var uniquepath = "resumes/".concat(username.replace(/\s+/g, ''), "_cv.html");
        // create resume output
        var resumeOutput = "\n<h2>Resume</h2>\n<p><b>Name:</b> <span id=\"edit-name\" class=\"editable\"> ".concat(name_1, " </span> </p>\n<p><b>Email:</b> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span> </p>\n<p><b>Phone:</b> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span> </p>\n\n<h3>Education</h3>\n<p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n<h3>Experience</h3>\n<p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>");
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquepath;
        downloadLink.textContent = 'Download Your Latest Resume';
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
            makeEditable();
        }
    }
    else {
        console.error("One or More output elements are missing");
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // Replace content
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                var input = document.createElement('input');
                input.type = 'text';
                input.value = currentValue;
                input.classList.add('editing-input');
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}
