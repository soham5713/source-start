document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    runInAnimations();

    const name = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `name=${name}&password=${password}`
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response received:', data);
        setTimeout(() => {
            alert(data.message);
        }, 1500); // Adjust timing to match your animation duration
    })
    .catch(error => console.error('Error:', error)); // Log any errors
});

document.getElementById('signout').addEventListener('click', runOutAnimations);

function runInAnimations() {
    const leftBox = document.getElementById('leftBox');
    const slantedLine = document.getElementById('slantedLine');
    const welcomeText = document.getElementById('welcomeText');
    leftBox.classList.remove('run-right-left');
    slantedLine.classList.remove('run-cool-box');
    welcomeText.classList.remove('run-left-right');
    leftBox.classList.remove('run-right-left-reverse');
    slantedLine.classList.remove('run-cool-box-reverse');
    welcomeText.classList.remove('run-left-right-reverse');
    void leftBox.offsetWidth;
    void slantedLine.offsetWidth;
    void welcomeText.offsetWidth;
    leftBox.classList.add('run-right-left');
    slantedLine.classList.add('run-cool-box');
    welcomeText.classList.add('run-left-right');

    // Call the alert after a delay to match the animation duration
    setTimeout(() => {
        alert('Data saved!');
    }, 1500); // Adjust this timing to match your animation duration
}

function runOutAnimations() {
    const leftBox = document.getElementById('leftBox');
    const slantedLine = document.getElementById('slantedLine');
    const welcomeText = document.getElementById('welcomeText');
    leftBox.classList.add('run-right-left-reverse');
    slantedLine.classList.add('run-cool-box-reverse');
    welcomeText.classList.add('run-left-right-reverse');
}
