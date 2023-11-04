const skills = ["PHP", "HTML", "CSS", "Javascript", "Figma", "Illustrator"]; // Replace with your skills
let currentSkillIndex = 0;
    const sliderBoxes = document.querySelectorAll('.sliderBox');
    const secondBox = document.querySelector('.secondBox');
    let intervalId;

    function displaySkill() {
        sliderBoxes.forEach((box, index) => {
            box.textContent = skills[(currentSkillIndex + index) % skills.length];
        });
        currentSkillIndex = (currentSkillIndex + 1) % skills.length;
    }

    function startInterval() {
        intervalId = setInterval(displaySkill, 1500); // Change skills every 3 seconds
    }

    function stopInterval() {
        clearInterval(intervalId); // Clear the interval
        secondBox.innerHTML = skills.join("<br>");
    }

    displaySkill(); // Call the function initially
    startInterval(); // Start the interval

    secondBox.addEventListener('mouseenter', stopInterval); // Clear the interval on mouse enter
    secondBox.addEventListener('mouseleave', () => {
        displaySkill();
        startInterval(); // Restart the interval on mouse leave
    });



// function toggleMenu() {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const links = document.querySelector('.links');
//     let isMenuOpen = false;
    
//     menuToggle.addEventListener('click', function() {
//         console.log('clicked');
//         isMenuOpen = !isMenuOpen;
//         if (isMenuOpen) {
//             menuToggle.innerHTML = '✕'; // Unicode character for a cross
//             links.classList.add('active');
//         } else {
//             menuToggle.innerHTML = '☰'; // Unicode character for a hamburger
//             links.classList.remove('active');
//         }
//     });
// }


function toggleMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const links = document.querySelector('.links');
    let isMenuOpen = false;

    console.log('clicked');
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        menuToggle.innerHTML = '✕'; // Unicode character for a cross
        links.classList.add('active');
    } else {
        menuToggle.innerHTML = '☰'; // Unicode character for a hamburger
        links.classList.remove('active');
    }
}

// Attach the event listener outside the toggleMenu function
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', toggleMenu);