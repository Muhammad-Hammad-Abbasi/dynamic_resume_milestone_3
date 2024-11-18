var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Personal info
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    // Education
    var degree = document.getElementById('degree').value;
    var college = document.getElementById('college').value;
    var years = document.getElementById('years').value;
    // Work experience
    var jobTitle = document.getElementById('job-title').value;
    var company = document.getElementById('company').value;
    var jobYears = document.getElementById('job-years').value;
    // Skills
    var skills = document.getElementById('skills').value.split(',');
    // Profile Image
    var profileImage = (_a = document.getElementById('profile-image').files) === null || _a === void 0 ? void 0 : _a[0];
    // If image is uploaded, convert it to a URL
    var imageURL = profileImage ? URL.createObjectURL(profileImage) : 'default-image.jpg';
    // Generating the resume
    var resumeContent = "\n      <div style=\"text-align: center;\">\n        <img src=\"".concat(imageURL, "\" alt=\"Profile Picture\" />\n      </div>\n      <h3>").concat(name, "</h3>\n      <p>Email: ").concat(email, " | Phone: ").concat(phone, "</p>\n  \n      <h4>Education</h4>\n      <p><strong>").concat(degree, "</strong> - ").concat(college, " (").concat(years, ")</p>\n  \n      <h4>Work Experience</h4>\n      <p><strong>").concat(jobTitle, "</strong> at ").concat(company, " (").concat(jobYears, ")</p>\n  \n      <h4>Skills</h4>\n      <ul>\n        ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n      </ul>\n    ");
    // Display resume
    document.getElementById('resume-content').innerHTML = resumeContent;
});
