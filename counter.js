const happyUsersCount = document.getElementById("happy-users");
const issuesSolvedCount = document.getElementById("issues-solved");
const goodReviewsCount = document.getElementById("good-reviews");
const caseStudiesCount = document.getElementById("case-studies");
const ordersReceivedCount = document.getElementById("orders-received");
const startAnimation = document.getElementById("startAnimateNum");

let i = 0;

const animate = (value, target) => {
    const COUNT = 10;
    const TIME = 1000;
    let currentCount = 0;
    const iterationValue = value / (COUNT - 1);
    let counter = setInterval(() => {
        currentCount++;
            target.innerHTML = Math.floor(iterationValue * currentCount);
        if(currentCount >= COUNT) {
            clearInterval(counter);
            target.innerHTML = value;
        }  
    }, TIME / COUNT)
}

animate(231, happyUsersCount);
animate(385, issuesSolvedCount);
animate(159, goodReviewsCount);
animate(127, caseStudiesCount);
animate(211, ordersReceivedCount);


/* start animation on scroll */
const scrollOffset = 100;

const elementIsSeenNow = (elem, scrollOffset = 0) => {
    const elementOnTop = elem.getBoundingClientRect().top;
    return (elementOnTop <= (window.innerHeight || document.documentElement.clientHeight) - scrollOffset);
};

window.addEventListener('scroll', () => {

  });

const video = document.getElementById("video");

video.addEventListener("mouseover", () => video.setAttribute("controls", "true"));
video.addEventListener("mouseout", () => video.removeAttribute("controls", "true"));