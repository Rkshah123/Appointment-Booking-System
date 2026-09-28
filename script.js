const bookingForm = document.getElementById('bookingForm');
const usersList = document.getElementById('usersList');

bookingForm.addEventListener('submit', async (event) => {

    event.preventDefault();

    const user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        appointmentDate: document.getElementById('appointmentDate').value,
        appointmentTime: document.getElementById('appointmentTime').value
    };

    const response = await fetch('/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    const data = await response.json();

    alert(data.message);

    bookingForm.reset();

    getUsers();
});

const getUsers = async () => {

    const response = await fetch('/users');

    const users = await response.json();

    usersList.innerHTML = '';

    users.forEach((user) => {

        const userDiv = document.createElement('div');

        userDiv.className = 'user';

        userDiv.innerHTML = `
            <strong>Name:</strong> ${user.name}<br>
            <strong>Email:</strong> ${user.email}<br>
            <strong>Phone:</strong> ${user.phone}<br>
            <strong>Date:</strong> ${user.appointmentDate}<br>
            <strong>Time:</strong> ${user.appointmentTime}<br>

            <button class="delete-btn" onclick="deleteUser(${user.id})">
                Delete
            </button>
        `;

        usersList.appendChild(userDiv);
    });
};

const deleteUser = async (id) => {

    const response = await fetch(`/users/${id}`, {
        method: 'DELETE'
    });

    const data = await response.json();

    alert(data.message);

    getUsers();
};

getUsers();