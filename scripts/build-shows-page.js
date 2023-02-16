const showData = [
    {
       title1: "date" ,
       title2: "venue",
       title3: "location",
       date: "Mon Sept 06 2021",
       venue: "Ronald Lane",
       location: "San Francisco, CA",
       button: "Buy Tickets",
    },
    {
        title1: "date" ,
        title2: "venue",
        title3: "location",
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA",
        button: "Buy Tickets",
     },
     {
        title1: "date" ,
        title2: "venue",
        title3: "location",
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA",
        button: "Buy Tickets",
     },
     {
        title1: "date" ,
        title2: "venue",
        title3: "location",
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
        button: "Buy Tickets",
     },
     {
        title1: "date" ,
        title2: "venue",
        title3: "location",
        date: "Fri Nov 26 2021",
        venue: "Ronald Lane",
        location: "Moscow Center",
        button: "Buy Tickets",
     },
     {
        title1: "date" ,
        title2: "venue",
        title3: "location",
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA",
        button: "Buy Tickets",
     },
];

const showList = document.getElementById("schedule__list");
for(let i = 0; i < showData.length; i++){
    //console.log(showData[i]); 
    const showItem = document.createElement("li");
    showItem.classList.add("schedule__item"); 
    
}