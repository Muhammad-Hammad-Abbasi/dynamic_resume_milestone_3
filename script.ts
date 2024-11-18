document.getElementById('resume-form')?.addEventListener('submit', function (event) {
  event.preventDefault();

  // Fetch form values
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const degree = (document.getElementById('degree') as HTMLInputElement).value;
  const college = (document.getElementById('college') as HTMLInputElement).value;
  const years = (document.getElementById('years') as HTMLInputElement).value;
  const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
  const company = (document.getElementById('company') as HTMLInputElement).value;
  const jobYears = (document.getElementById('job-years') as HTMLInputElement).value;

  // Handle skills field
  const skillsElement = document.getElementById('skills') as HTMLInputElement;
  const skills = skillsElement && skillsElement.value ? skillsElement.value.split(',') : []; 

  // Profile Image
  const profileImage = (document.getElementById('profile-image') as HTMLInputElement).files?.[0];
  let profileImageURL = 'default.png';
  if (profileImage) {
    profileImageURL = URL.createObjectURL(profileImage); 
  }

  // Generate Resume Content
  const resumeContent = `
    <div style="text-align: center;">
      <img src="${profileImageURL}" alt="Profile Picture" style="width: 120px; height: 120px; border-radius: 50%; margin-bottom: 20px;" />
    </div>
    <h3>${name}</h3>
    <p>Email: ${email} | Phone: ${phone}</p>

    <h4>Education</h4>
    <p><strong>${degree}</strong> - ${college} (${years})</p>

    <h4>Work Experience</h4>
    <p><strong>${jobTitle}</strong> at ${company} (${jobYears})</p>

    <h4>Skills</h4>
    <ul>
      ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
    </ul>
  `;

  // Display Resume
  const resumeContentElement = document.getElementById('resume-content');
  if (resumeContentElement) {
    resumeContentElement.innerHTML = resumeContent;
  } else {
    console.error('Resume content element not found!');
  }
});
