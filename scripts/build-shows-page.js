const showData = [
  {
    title1: "date",
    title2: "venue",
    title3: "location",
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
    button: "Buy Tickets",
  },
  {
    title1: "date",
    title2: "venue",
    title3: "location",
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
    button: "Buy Tickets",
  },
  {
    title1: "date",
    title2: "venue",
    title3: "location",
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
    button: "Buy Tickets",
  },
  {
    title1: "date",
    title2: "venue",
    title3: "location",
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
    button: "Buy Tickets",
  },
  {
    title1: "date",
    title2: "venue",
    title3: "location",
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
    button: "Buy Tickets",
  },
  {
    title1: "date",
    title2: "venue",
    title3: "location",
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
    button: "Buy Tickets",
  },
];

const showList = document.getElementById("schedule__list");
function createEntry(show) {
  const showItem = document.createElement("li");
  showItem.classList.add("schedule__item");

  const showBox = document.createElement("div");
  showBox.classList.add("schedule__info");

  const showDate = document.createElement("p");
  showDate.innerText = show.title1;
  showDate.classList.add("schedule__main");

  const showDay = document.createElement("p");
  showDay.innerText = show.date;
  showDay.classList.add("schedule__secondary");
  showDay.classList.add("schedule__secondary--bold");

  const showVenue = document.createElement("p");
  showVenue.innerText = show.title2;
  showVenue.classList.add("schedule__main");

  const showPlace = document.createElement("p");
  showPlace.innerText = show.venue;
  showPlace.classList.add("schedule__secondary");

  const showLocation = document.createElement("p");
  showLocation.innerText = show.title3;
  showLocation.classList.add("schedule__main");

  const showCity = document.createElement("p");
  showCity.innerText = show.location;
  showCity.classList.add("schedule__secondary");

  const showButton = document.createElement("button");
  showButton.innerText = show.button;
  showButton.classList.add("schedule__btn");

  showBox.appendChild(showDate);
  showBox.appendChild(showDay);
  showBox.appendChild(showVenue);
  showBox.appendChild(showPlace);
  showBox.appendChild(showLocation);
  showBox.appendChild(showCity);
  showBox.appendChild(showButton);

  showItem.appendChild(showBox);
  showList.appendChild(showItem);
}

function displayEntries() {
  showList.innerText = "";
  for (let i = 0; i < showData.length; i++) {
    createEntry(showData[i]);
  }
}

displayEntries();

const paragraphs = document.querySelectorAll(".schedule__item");

function paragraphClick(event) {
  paragraphs.forEach((paragraphs) => {
    paragraphs.classList.remove("selected");
  });

  event.currentTarget.classList.add("selected");
}

paragraphs.forEach((paragraphs) => {
  paragraphs.addEventListener("click", paragraphClick);
});
