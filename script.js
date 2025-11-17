document.addEventListener("DOMContentLoaded", function(){
  const resultDiv = document.getElementById("resultDisplay");
  const studentData = JSON.parse(localStorage.getItem("studentData"));

  if(!studentData){
    resultDiv.innerHTML = "Please fill the student details quiz!";
    return;
  }

  let course = "";
  let profession = "";
  let college = "";
  let scholarship = "";

  const { name, group, percentage, interest, income, caste } = studentData;

  if(group === "science"){
    if(interest === "computers") {
      course = "B.Tech, Computer Science / B.Sc IT";
      profession = "Software Engineer, Web developor, Data Analyst";
    } else if(interest === "biology"){
      course = "MBBS / BDS / B.Pharm";
      profession = "Doctor, Surgeon, Pharmacist";
    } else {
      course = "B.Sc General / Diploma in Engineering";
      profession = "Lab Technician, lab assistant,Technical Assistant";
    }
  }
  else if(group === "commerce"){
    if(interest === "business"){
      course = "B.Com, BBA, CA";
      profession = "Accountant, CMA, company secretary, Business Analyst";
    } else {
      course = "B.Com (General), Banking Courses";
      profession = "Banking Staff, Clerk, teacher, manager";
    }
  }
  else if(group === "arts"){
    if(interest === "arts"){
      course = "BA English / Journalism / Fine Arts";
      profession = "Journalist, Designer";
    } else {
      course = "BA History / Sociology";
      profession = "Teacher, Civil Services Aspirant, VAO, clerk";
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
  else if(percentage >= 60) college = "Good Private Colleges (SRM, PSG, Krishnammal,Hindustan)";
  else college = "Local Arts/Science Colleges or Polytechnic Colleges";

  resultDiv.innerHTML = `
    <strong>Student name:</strong> ${name} <br><br>
    <strong>Suggested course:</strong> ${course} <br>
    <strong>Profession:</strong> ${profession} <br>
    <strong>Suggested college:</strong> ${college} <br>
    <strong>Availability of Scholarship:</strong> ${scholarship}
  `;
});
