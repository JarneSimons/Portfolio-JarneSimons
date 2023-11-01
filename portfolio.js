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
        intervalId = setInterval(displaySkill, 2000); // Change skills every 3 seconds
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
