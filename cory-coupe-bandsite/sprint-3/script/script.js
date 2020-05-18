// main page comment section//

//axios get + sort comments
const commentsURL = `https://project-1-api.herokuapp.com/comments?api_key=cory`;
let axiosGet = () => {
  axios
    .get(`https://project-1-api.herokuapp.com/comments?api_key=cory`)
    .then((response) => {
      console.log(response.data);
      let comments = response.data;
      function sortArray(array) {
        let sortedComments = array
          .slice()
          .sort((a, b) => b.timestamp - a.timestamp);
        return sortedComments;
      }
      displayComment(sortArray(comments));
    });
};
axiosGet();

// time stamp conversion function
function timeConversion(timestamp) {
  const commentTime = timestamp;
  const timePassed = Date.now() - commentTime;
  let ago = Math.floor(timePassed / 1000);
  let part = 0;
  if (ago < 2) {
    return "a moment ago";
  }
  if (ago < 5) {
    return "moments ago";
  }
  if (ago < 60) {
    return ago + "seconds ago";
  }
  if (ago < 120) {
    return "a minute ago";
  }
  if (ago < 3600) {
    while (ago >= 60) {
      ago -= 60;
      part += 1;
    }
    return part + " minutes ago";
  }
  if (ago < 7200) {
    return "an hour ago";
  }
  if (ago < 86400) {
    while (ago >= 3600) {
      ago -= 3600;
      part += 1;
    }
    return part + " hours ago";
  }
  if (ago < 172800) {
    return "a day ago";
  }
  if (ago < 604800) {
    while (ago >= 172800) {
      ago -= 172800;
      part += 1;
    }
    return part + " days ago";
  }
  if (ago < 1209600) {
    return "a week ago";
  }
  if (ago < 2592000) {
    while (ago >= 604800) {
      ago -= 604800;
      part += 1;
    }
    return part + " weeks ago";
  }
  if (ago < 5184000) {
    return "a month ago";
  }
  if (ago < 31536000) {
    while (ago >= 2592000) {
      ago -= 2592000;
      part += 1;
    }
    return part + " months ago";
  }
  if (ago < 1419120000) {
    // 45 years, approximately the epoch
    return "more than year ago";
  }
  return "never";
}

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
    axios({
      method: "post",
      url: commentsURL,
      data: {
        name: submitName,
        comment: submitText,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((newcomment) => {
      console.log(newcomment.data);
      axiosGet();
    });
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
    commentsTime.innerText = timeConversion(array[i].timestamp);
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
}
