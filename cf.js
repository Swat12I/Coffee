// Task 4: Change Background Color
const bgChangeBtn = document.getElementById('bgChangeBtn');
bgChangeBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = '#f5deb3'; // Light wheat color
});

// Task 5: Fetch and Display API Data
const reviewsList = document.getElementById('reviews');
fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then(response => response.json())
    .then(data => {
        data.forEach(review => {
            const li = document.createElement('li');
            li.textContent = review.title;
            reviewsList.appendChild(li);
        });
    });

// Task 6: Form Validation
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert('Thank you for your feedback!');
    } else {
        alert('Please fill out all required fields.');
    }
});
