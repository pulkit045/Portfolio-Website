var audio = new Audio("assets/sentmessage.mp3");
const contactString =
  "<div class='social'> <a target='_blank' href='tel:+918955840780'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>8955840780</label></div> </a> <a href='mailto:pulkitgupt045@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/pulkit045'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/918955840780'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='s'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/pulkit045'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/pulkit-gupta-07bb85200/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString =
  "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Pulkit Resume.pdf</label></div><a href='assets/Resume_Pulkit Gupta.pdf' download='Pulkit_Gupta.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString =
  "<div class='mapview'><iframe src='https://www.google.com/maps/embed/v1/view?zoom=17&center=26.9207%2C75.8422&key=AIzaSyALDJD4vDj6VuqXlMhT7yQNC65HpAgdIe4' class='map'></iframe></div><label class='add'><address>SR-6, Laxmi Narayan Puri<br>Suraj Pole Gate<br>Jaipur, Rajasthan, INDIA 302003</address>";
function startFunction() {
  setLastSeen();
  waitAndResponce("intro");
}

function setLastSeen() {
  var date = new Date();
  var lastSeen = document.getElementById("lastseen");
  lastSeen.innerText =
    "last seen today at " + date.getHours() + ":" + date.getMinutes();
}
  
function closeFullDP() {
  var x = document.getElementById("fullScreenDP");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function openFullScreenDP() {
  var x = document.getElementById("fullScreenDP");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function isEnter(event) {
  if (event.keyCode == 13) {
    sendMsg();
  }
}

function sendMsg() {
  var input = document.getElementById("inputMSG");
  var ti = input.value;
  if (input.value == "") {
    return;
  }
  var date = new Date();
  var myLI = document.createElement("li");
  var myDiv = document.createElement("div");
  var greendiv = document.createElement("div");
  var dateLabel = document.createElement("label");
  dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
  myDiv.setAttribute("class", "sent");
  greendiv.setAttribute("class", "green");
  dateLabel.setAttribute("class", "dateLabel");
  greendiv.innerText = input.value;
  myDiv.appendChild(greendiv);
  myLI.appendChild(myDiv);
  greendiv.appendChild(dateLabel);
  document.getElementById("listUL").appendChild(myLI);
  var s = document.getElementById("chatting");
  s.scrollTop = s.scrollHeight;
  setTimeout(function () {
    waitAndResponce(ti);
  }, 1500);
  input.value = "";
  playSound();
}

function waitAndResponce(inputText) {
  var lastSeen = document.getElementById("lastseen");

  lastSeen.innerText = "typing...";
  switch (inputText.toLowerCase().trim()) {
    case "intro":
      setTimeout(() => {
        sendTextMessage(
          "Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Pulkit Gupta</a>.</span><br><br>I am a Computer Science student at <span class='bold'>IIIT Lucknow 👨🏻‍💻📚</span><br><br>I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the engineering sphere.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>"
        );
      }, 2000);
      break;
    case "help":
      sendTextMessage(
        "<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>"
      );
      break;
    case "resume":
      sendTextMessage(resumeString);
      break;
    case "skills":
      sendTextMessage(
        "<span class='sk'>I am currently pursuing B.Tech degree in Computer Science & Artificial Intelligence.<br><br>I can comfortably write code in following languages :<br><span class='bold'>C/C++<br>SQL<br>JavaScript</span><br><br>I've experience in following technologies :<span class='bold'><br>ReactJs<br>Express<br>Redux<br>Nodejs<br>MongoDB<br>REST Api</b></span><br><br>Academic Coursework :<br><span class='bold'>Data Structures and Algorithms<br>OOPS<br>Operating System<br>Database Management System</span>"
      );
      break;

    case "education":
      sendTextMessage(
        "I am currently pusuing B.Tech degree in Computer Science & Artificial Intelligence from IIIT Lucknow<br>Passing Year : 2024<br><br>I have completed my High school from SJ Public School<br>Passing Year:2020<br>Result: 94.8%"
      );
      break;

    case "address":
      sendTextMessage(addressString);
      break;
    case "clear":
      clearChat();
      break;
    case "about":
      sendTextMessage(
        "🛠️💻 This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https://instagram.com/pulkit045/'><span class='bold'>Pulkit Gupta</span></a> with ❤️</span>"
      );
      break;
    case "contact":
      sendTextMessage(contactString);
      break;
    case "projects":
      sendTextMessage(
        "You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/pulkit045'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>"
      );
      break;
    case "new":
      sendTextMessage(addressString);
      break;
    default:
      setTimeout(() => {
        sendTextMessage(
          "Hey I couldn't catch you...😢<br>Send 'help' to know more about usage."
        );
      }, 2000);
      break;
  }
}

function clearChat() {
  document.getElementById("listUL").innerHTML = "";
  waitAndResponce("intro");
}

function sendTextMessage(textToSend) {
  setTimeout(setLastSeen, 1000);
  var date = new Date();
  var myLI = document.createElement("li");
  var myDiv = document.createElement("div");
  var greendiv = document.createElement("div");
  var dateLabel = document.createElement("label");
  dateLabel.setAttribute("id", "sentlabel");
  dateLabel.id = "sentlabel";
  dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
  myDiv.setAttribute("class", "received");
  greendiv.setAttribute("class", "grey");
  greendiv.innerHTML = textToSend;
  myDiv.appendChild(greendiv);
  myLI.appendChild(myDiv);
  greendiv.appendChild(dateLabel);
  document.getElementById("listUL").appendChild(myLI);
  var s = document.getElementById("chatting");
  s.scrollTop = s.scrollHeight;
  playSound();
}

function sendResponse() {
  setTimeout(setLastSeen, 1000);
  var date = new Date();
  var myLI = document.createElement("li");
  var myDiv = document.createElement("div");
  var greendiv = document.createElement("div");
  var dateLabel = document.createElement("label");
  dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
  myDiv.setAttribute("class", "received");
  greendiv.setAttribute("class", "grey");
  dateLabel.setAttribute("class", "dateLabel");
  greendiv.innerText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
  myDiv.appendChild(greendiv);
  myLI.appendChild(myDiv);
  greendiv.appendChild(dateLabel);
  document.getElementById("listUL").appendChild(myLI);
  var s = document.getElementById("chatting");
  s.scrollTop = s.scrollHeight;
  playSound();
}

function playSound() {
  audio.play(); 
}
