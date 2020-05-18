// Start of Shows DOM//
// weekday array //
// var weekday = new Array(7);
// weekday[0] = "Sun";
// weekday[1] = "Mon";
// weekday[2] = "Tue";
// weekday[3] = "Wed";
// weekday[4] = "Thu";
// weekday[5] = "Fri";
// weekday[6] = "Sat";

// // months array//
// var months = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sept",
//   "Oct",
//   "Nov",
//   "Dec",
// ];

// axios function
const showsURL = `https://project-1-api.herokuapp.com/showdates?api_key=cory`;
let axiosGet = () => {
  axios.get(`${showsURL}`).then((response) => {
    console.log(response.data);
    let shows = response.data;
    function sortArray(array) {
      let sortedShows = array.slice().sort((a, b) => b.date - a.date);
      return sortedShows;
    }
    ticketDom(sortArray(shows));
  });
};
axiosGet();
// shows page. Ticket section//
let tickets = [
  {
    date: new Date("18 Jul 2019"),
    venue: "Pier 3 East",
    location: "San Fanciso, CA",
  },
  {
    date: new Date("17 Dec 2018"),
    venue: "Ronald Lane",
    location: "San Fanciso, CA",
  },
  {
    date: new Date("22 Jul 2019"),
    venue: "View Longue",
    location: "San Fanciso, CA",
  },
  {
    date: new Date("12 Aug 2019"),
    venue: "Hyatt Loungue",
    location: "San Fanciso, CA",
  },
  {
    date: new Date("5 Sep 2019"),
    venue: "Moscow Center",
    location: "San Fanciso, CA",
  },
  {
    date: new Date("11 Aug 2019"),
    venue: "Pres Club",
    location: "San Fanciso, CA",
  },
];
//global  variables used for query selectors//
const ticketsList = document.querySelector(".tickets__card-container");

//function for displaying tickets//
function ticketDom(array) {
  ticketsList.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    let ticketsDiv = document.createElement("div");
    ticketsDiv.classList.add("tickets__card");

    let ticketsDateName = document.createElement("h4");
    ticketsDateName.innerText = "DATE";
    ticketsDateName.classList.add("tickets__card-title-mobile");

    let ticketsDate = document.createElement("p");
    let ticketActualDate = array[i].date;
    ticketsDate.innerText = ticketActualDate;
    ticketsDate.classList.add(
      "tickets__card--text",
      "tickets__card--text-bold"
    );

    let ticketsVenueName = document.createElement("h4");
    ticketsVenueName.innerText = "VENUE";
    ticketsVenueName.classList.add("tickets__card-title-mobile");

    let ticketsVenue = document.createElement("p");
    ticketsVenue.innerText = array[i].place;
    ticketsVenue.classList.add("tickets__card--text");

    let ticketsLocationName = document.createElement("h4");
    ticketsLocationName.innerText = "LOCATION";
    ticketsLocationName.classList.add("tickets__card-title-mobile");

    let ticketsLocation = document.createElement("p");
    ticketsLocation.innerText = array[i].location;
    ticketsLocation.classList.add("tickets__card--text");

    let ticketsButtonContainer = document.createElement("div");
    ticketsButtonContainer.classList.add("tickets__card-button-container");

    let ticketsButton = document.createElement("a");
    ticketsButton.innerText = "BUY TICKETS";
    ticketsButton.classList.add("tickets__card-button");
    ticketsButton.href = "http://example.com";

    ticketsDiv.appendChild(ticketsDateName);
    ticketsDiv.appendChild(ticketsDate);
    ticketsDiv.appendChild(ticketsVenueName);
    ticketsDiv.appendChild(ticketsVenue);
    ticketsDiv.appendChild(ticketsLocationName);
    ticketsDiv.appendChild(ticketsLocation);
    ticketsButtonContainer.appendChild(ticketsButton);
    ticketsDiv.appendChild(ticketsButtonContainer);
    ticketsList.appendChild(ticketsDiv);
  }
}
