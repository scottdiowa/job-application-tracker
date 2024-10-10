// Function to add a job application
function addApplication() {
    const company = document.getElementById('company').value;
    const position = document.getElementById('position').value;
    const dateApplied = document.getElementById('dateApplied').value;
    const status = document.getElementById('status').value;

    const applicationData = {
        company,
        position,
        dateApplied,
        status
    };

    fetch('http://192.168.0.94:4000/application', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(applicationData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to save application');
        }
        return response.json();
    })
    .then(data => {
        toastr.success('Application added successfully!');
        appendApplicationToTable(applicationData);
        resetForm();
    })
    .catch(error => {
        console.error('Error adding application:', error);
        toastr.error('Failed to add application. Check server connection.');
    });
}

// Function to append new application to the table
function appendApplicationToTable(application) {
    const tableBody = document.querySelector('#applicationsTable tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${application.company}</td>
        <td>${application.position}</td>
        <td>${application.dateApplied}</td>
        <td>${application.status}</td>
        <td><button onclick="editApplication(this)">Edit</button></td>
    `;

    tableBody.appendChild(newRow);
}

// Function to reset the form
function resetForm() {
    document.getElementById('jobApplicationForm').reset();
}

// Function to search company info (dummy function for now)
function searchCompanyInfo() {
    // You can implement an actual API search call here
    toastr.info('Company search functionality is not implemented yet.');
}

// Function to save company info (dummy function)
function saveCompanyInfo() {
    const companyName = document.getElementById('companyNameInfo').value;
    const website = document.getElementById('websiteInfo').value;
    const industry = document.getElementById('industryInfo').value;

    const companyData = {
        companyName,
        website,
        industry
    };

    fetch('http://192.168.0.94:4000/companies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(companyData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to save company info');
        }
        return response.json();
    })
    .then(() => {
        toastr.success('Company information saved successfully!');
    })
    .catch(error => {
        console.error('Error saving company info:', error);
        toastr.error('Failed to save company info. Check server connection.');
    });
}

// Function to edit an existing application
function editApplication(button) {
    toastr.info('Edit functionality is not implemented yet.');
}
