document.getElementById('submit-case').addEventListener('click', () => {
    const title = document.getElementById('case-title').value;
    const description = document.getElementById('case-description').value;

    // Simulate sending data to the backend and getting a response
    const newCase = { title, description };

    // Display the newly added case
    displayCase(newCase);

    // Clear input fields
    document.getElementById('case-title').value = '';
    document.getElementById('case-description').value = '';
});

function displayCase(caseData) {
    const caseElement = document.createElement('div');
    caseElement.className = 'case';
    caseElement.innerHTML = `
        <h3>${caseData.title}</h3>
        <p>${caseData.description}</p>
    `;
    document.getElementById('cases-list').appendChild(caseElement);
}
