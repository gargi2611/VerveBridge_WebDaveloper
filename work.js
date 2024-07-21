// User features
function enrollCourse() {
    const courseCode = document.getElementById('enrollCourseInput').value;
    const userId = localStorage.getItem('userId');
    const courseId = getCourseIdByCode(courseCode);
    if (courseId) {
        fetch('/api/enrollCourse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId,
                courseId
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(`You have enrolled in course ${courseCode} successfully`);
                document.getElementById('enrollCourseInput').value = '';
            } else {
                alert('Error enrolling in course');
            }
        })
        .catch(error => console.error(error));
    } else {
        alert('Invalid course code');
    }
    return false;
}

function updateProfile() {
    const newName = document.getElementById('newName').value;
    const newEmail = document.getElementById('newEmail').value;
    const newClass = document.getElementById('newClass').value;
    const userId = localStorage.getItem('userId');
    fetch('/api/updateProfile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId,
            name: newName,
            email: newEmail,
            class: newClass
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Your profile has been updated successfully');
            document.getElementById('newName').value = '';
            document.getElementById('newEmail').value = '';
            document.getElementById('newClass').value = '';
        } else {
            alert('Error updating profile');
        }
    })
    .catch(error => console.error(error));
    return false;
}

function changePassword() {
    const oldPassword = document.getElementById('oldPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const userId = localStorage.getItem('userId');
    if (newPassword === confirmPassword) {
        fetch('/api/changePassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId,
                oldPassword,
                newPassword
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Your password has been changed successfully');
                document.getElementById('oldPassword').value = '';
                document.getElementById('newPassword').value = '';
                document.getElementById('confirmPassword').value = '';
            } else {
                alert('Error changing password');
            }
        })
        .catch(error => console.error(error));
    } else {
        alert('New password and confirm password do not match');
    }
    return false;
}

// Admin features
function addCourse() {
    const courseName = document.getElementById('newCourseName').value;
    const courseCode = document.getElementById('newCourseCode').value;
    fetch('/api/addCourse', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: courseName,
            code: courseCode
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(`Course ${courseName} with code ${courseCode} has been added successfully`);
            document.getElementById('newCourseName').value = '';
            document.getElementById('newCourseCode').value = '';
        } else {
            alert('Error adding course');
        }
    })
    .catch(error => console.error(error));
    return false;
}

function addExam() {
    const examName = document.getElementById('newExamName').value;
    const examDate = document.getElementById('newExamDate').value;
    fetch('/api/addExam', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: examName,
            date: examDate
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(`Exam ${examName} on ${examDate} has been added successfully`);
            document.getElementById('newExamName').value = '';
            document.getElementById('newExamDate').value = '';
        } else {
            alert('Error adding exam');
        }
    })
    .catch(error => console.error(error));
    return false;
}

function addUser() {
    const userName = document.getElementById('newUserName').value;
    const userEmail = document.getElementById('newUserEmail').value;
    const userRole = document.getElementById('new').value;
}