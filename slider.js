const reviews = [
    {
        id: 1,
        name: "Jude Thorn",
        job: "Designer",
        img: "img/testimonial-1.jpg",
        text: "It's been so fun to work with Pavo, I've managed to integrate it properly into my business flow and it's great"
    },
    {
        id: 2,
        name: "Roy Smith",
        job: "Developer",
        img: "img/testimonial-2.jpg",
        text: "We were so focused on launching as many campaigns as possible that we've forgotten to target our loyal customers"
    },
    {
        id: 3,
        name: "Marsha Singer",
        job: "Marketer",
        img: "img/testimonial-3.jpg",
        text: "I've been searching for a tool like Pavo for so long. I love the reports it generates and the amazing high accuracy"
    },
    {
        id: 4,
        name: "Tim Shaw",
        job: "Designer",
        img: "img/testimonial-4.jpg",
        text: "We've been waiting for a powerful piece of software that can help businesses manage their marketing projects"
    },
    {
        id: 5,
        name: "Lindsay Spice",
        job: "Marketer",
        img: "img/testimonial-5.jpg",
        text: "Searching for a great prototyping and layout design app was difficult but thankfully I found app suite quickly"
    },
    {
        id: 6,
        name: "Ann Blake",
        job: "Developer",
        img: "img/testimonial-6.jpg",
        text: "The app support team is amazing. They've helped me with some issues and I am so grateful to the entire team"
    }
];

// select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const feedback = document.getElementById("feedback-info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// set starting item

let currentItem = 0;

// loading start item

window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);
    });

// show person based on items

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    feedback.textContent = item.text;
}

// show next showPerson
nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson();
  });

  // show previous person
prevBtn.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length -1;
    }
    showPerson();
  });