function showSection(sectionId) {
    const sections = document.querySelectorAll('.admin-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function addCourse() {
    const courseTitle = document.getElementById('courseTitle').value;
    const courseMaterials = document.getElementById('courseMaterials').value;

    // Validate input
    if (courseTitle === '') {
        alert('Please enter a course title.');
        return false;
    }

    // Add course to list
    const courseList = document.getElementById('courseList');
    const li = document.createElement('li');
    li.textContent = courseTitle;
    courseList.appendChild(li);

    // Clear form fields
    document.getElementById('courseTitle').value = '';
    document.getElementById('courseMaterials').value = '';

    // Show success message (optional)
    alert('Course added successfully.');

    return false; // Prevent form submission
}

function addStudent() {
    const studentName = document.getElementById('studentName').value;
    const studentEmail = document.getElementById('studentEmail').value;
    const studentPhone = document.getElementById('studentPhone').value;
    const studentClass = document.getElementById('studentClass').value;

    // Validate input
    if (studentName === '' || studentEmail === '' || studentPhone === '' || studentClass === '') {
        alert('Please fill in all fields.');
        return false;
    }

    // Add student to list
    const studentList = document.getElementById('studentList');
    const li = document.createElement('li');
    li.textContent = studentName + ' - ' + studentEmail + ' - ' + studentPhone + ' - ' + studentClass;
    studentList.appendChild(li);

    // Clear form fields
    document.getElementById('studentName').value = '';
    document.getElementById('studentEmail').value = '';
    document.getElementById('studentPhone').value = '';
    document.getElementById('studentClass').value = '';

    // Show success message (optional)
    alert('Student added successfully.');

    return false; // Prevent form submission
}

function addExamQuestion() {
    const examQuestion = document.getElementById('examQuestion').value;

    // Validate input
    if (examQuestion === '') {
        alert('Please enter a question.');
        return false;
    }

    // Add question to list
    const examQuestionList = document.getElementById('examQuestionList');
    const li = document.createElement('li');
    li.textContent = examQuestion;
    examQuestionList.appendChild(li);

    // Clear form field
    document.getElementById('examQuestion').value = '';

    // Show success message (optional)
    alert('Exam question added successfully.');

    return false; // Prevent form submission
}