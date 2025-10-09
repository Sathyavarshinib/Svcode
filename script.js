document.getElementById("careerForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const group = document.getElementById("group").value;
  const percentage = parseFloat(document.getElementById("percentage").value);
  const resultOutput = document.getElementById("resultOutput");

  let suggestion = "";

  if (group === "science") {
    if (percentage >= 80) suggestion = "Engineering, MBBS, B.Sc, B.Tech போன்ற உயர்கல்வி துறைகள்.";
    else if (percentage >= 60) suggestion = "B.Sc (Computer Science / Physics / Chemistry) அல்லது Nursing போன்ற துறைகள்.";
    else suggestion = "Diploma courses அல்லது Paramedical courses பரிந்துரை செய்யப்படுகிறது.";
  } else if (group === "commerce") {
    if (percentage >= 80) suggestion = "CA, B.Com, BBA, Economics போன்ற துறைகள்.";
    else if (percentage >= 60) suggestion = "B.Com (General), Accounting, Digital Marketing.";
    else suggestion = "Diploma in Banking, Retail Management போன்ற குறுகிய கால கோர்ஸ்கள்.";
  } else if (group === "arts") {
    if (percentage >= 80) suggestion = "BA English, Journalism, Psychology, Fine Arts போன்ற துறைகள்.";
    else if (percentage >= 60) suggestion = "B.A (Tamil, History, Sociology) அல்லது Teacher Training.";
    else suggestion = "Diploma in Multimedia, Animation, or Event Management.";
  } else {
    suggestion = "தயவுசெய்து உங்கள் Group தேர்வு செய்யவும்.";
  }

  resultOutput.innerHTML = `
    <strong>${name}</strong> அவர்களுக்கு பரிந்துரை:<br>
    <em>${suggestion}</em>
  `;
});
