// main page comment section//
// hardcoded comments//
let comments = [
  {
    name: "Michael Lyons",
    timestamp: new Date("12/18/2018"),
    comment:
      "They BLEW the ROOF off at their last show, once everyone started ﬁguring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
  },
  {
    name: "Gary Wong",
    timestamp: new Date("12/12/2018"),
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
  },
  {
    name: "Theodore Duncan",
    timestamp: new Date("11/15/2018"),
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s deﬁnitely my favorite ever!",
  },
];
//DOM variables for event listener + functions//
const commentsList = document.querySelector(".new-comments__list");
const commentsForm = document.querySelector(".form");

// event listener//
commentsForm.addEventListener("submit", submitComment);

// submit a event functionality behind the event listener
function submitComment(event) {
  event.preventDefault();
  let submitName = event.target.formName.value;
  let submitText = event.target.formComment.value;

  if (submitName !== "" && submitText !== "") {
    comments.unshift({
      name: submitName,
      timestamp: new Date(),
      comment: submitText,
    });
    let commentsSorted = comments.sort(function (a, b) {
      return b.timestamp - a.timestamp;
    });
    console.log(commentsSorted);
    displayComment(commentsSorted);
  } else {
    alert("Please add your name and a comment");
  }
}

//turns comments array into actual elements//
function displayComment(array) {
  commentsList.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    let commentsLi = document.createElement("li");
    commentsLi.classList.add("new-comments__card");
    let commentsImage = document.createElement("div");
    commentsImage.classList.add("new-comments__image");

    let commentsDivText = document.createElement("div");
    commentsDivText.classList.add("new-comments__text-area");

    let commentsDivTitle = document.createElement("div");
    commentsDivTitle.classList.add("new-comments__text-title-area");

    let commentsName = document.createElement("h2");
    commentsName.innerText = array[i].name;
    commentsName.classList.add("new-comments__name");

    let commentsTime = document.createElement("h3");
    let dateDay = array[i].timestamp.getDate();
    let dateMonth = array[i].timestamp.getMonth() + 1;
    let dateYear = array[i].timestamp.getFullYear();
    let actualDate = `${dateMonth}-${dateDay}-${dateYear}`;
    commentsTime.innerText = actualDate;
    commentsTime.classList.add("new-comments__time");

    let commentsText = document.createElement("p");
    commentsText.innerText = array[i].comment;
    commentsText.classList.add("new-comments__comment");

    commentsDivTitle.appendChild(commentsName);
    commentsDivTitle.appendChild(commentsTime);

    commentsDivText.appendChild(commentsDivTitle);
    commentsDivText.appendChild(commentsText);

    commentsLi.appendChild(commentsImage);
    commentsLi.appendChild(commentsDivText);
    commentsList.appendChild(commentsLi);
  }
  console.log(comments);
}

// init, puts starting comments into the HTML//
displayComment(comments);

var lesson = "Hi, my name is";

function capitalizeWords(str) {
  var str1 = str.replace(/(\s+)([A - Z])/g, (x, y) => {
    return y.toUpperCase();
  });
  return str1;
  console.log(str1);
}
capitalizeWords(lesson);
