document.addEventListener("DOMContentLoaded", function(){
  const resultDiv = document.getElementById("resultDisplay");
  const studentData = JSON.parse(localStorage.getItem("studentData"));

  if(!studentData){
    resultDiv.innerHTML = "தயவுசெய்து முதலில் quiz பூர்த்தி செய்யவும்!";
    return;
  }

  let course = "";
  let profession = "";
  let college = "";
  let scholarship = "";

  const { name, group, percentage, interest, income, caste } = studentData;

  if(group === "science"){
    if(interest === "computers") {
      course = "B.Tech Computer Science / B.Sc IT";
      profession = "Software Engineer, Data Analyst";
    } else if(interest === "biology"){
      course = "MBBS / BDS / B.Pharm";
      profession = "Doctor, Pharmacist";
    } else {
      course = "B.Sc General / Diploma in Engineering";
      profession = "Lab Technician, Technical Assistant";
    }
  }
  else if(group === "commerce"){
    if(interest === "business"){
      course = "B.Com, BBA, CA";
      profession = "Accountant, Business Analyst";
    } else {
      course = "B.Com (General), Banking Courses";
      profession = "Banking Staff, Clerk";
    }
  }
  else if(group === "arts"){
    if(interest === "arts"){
      course = "BA English / Journalism / Fine Arts";
      profession = "Journalist, Designer";
    } else {
      course = "BA History / Sociology";
      profession = "Teacher, Civil Services Aspirant";
    }
  }

  // Scholarship calculation
  if(income === "low" || caste === "sc" || caste === "st"){
    scholarship = "Government Full Scholarship (100%)";
  } else if(income === "medium" || caste === "obc"){
    scholarship = "Partial Scholarship (50%)";
  } else {
    scholarship = "Private Scholarship options available (20%)";
  }

  // College suggestion
  if(percentage >= 80) college = "Top Government Colleges (Anna University, Loyola, Madras Medical)";
  else if(percentage >= 60) college = "Good Private Colleges (SRM, PSG, Hindustan)";
  else college = "Local Arts/Science Colleges or Polytechnic Colleges";

  resultDiv.innerHTML = `
    <strong>மாணவர் பெயர்:</strong> ${name} <br><br>
    <strong>பரிந்துரைக்கப்பட்ட பாடநெறி:</strong> ${course} <br>
    <strong>தொழில் வாய்ப்பு:</strong> ${profession} <br>
    <strong>பரிந்துரைக்கப்பட்ட கல்லூரிகள்:</strong> ${college} <br>
    <strong>Scholarship வாய்ப்பு:</strong> ${scholarship}
  `;
});
