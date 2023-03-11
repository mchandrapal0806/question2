
Create Form and CRUD.


mayuri1482@tnraocollege.org
Creating a form with validation and performing CRUD operations on local storage involves designing a web form that allows users to enter data, and then storing that data in the browser's local storage. .saved record should be saved in table and from there user should be able to edit and delete re...

To create a form with validation and perform CRUD operations on local storage, you will need to follow these steps:

Design the form: The first step is to design the form that will allow users to enter data. The form should include input fields for all the necessary information, and it should also include validation rules to ensure that the data entered is valid. This can be achieved using HTML, CSS, and JavaScript.

Save data to local storage: Once the user enters data into the form, the data needs to be saved to the browser's local storage. This can be done using JavaScript's localStorage API. You can create a key-value pair in localStorage to store the data.

Display saved records in a table: After the data is saved to local storage, you can retrieve it and display it in a table using JavaScript. You can use the DOM to create a table and append rows to it for each saved record.

Edit and delete records: To allow users to edit or delete records, you can add buttons to each row in the table. Clicking the edit button should populate the form with the data for that record, and clicking the delete button should remove the record from local storage and update the table.

Here's an example code snippet that demonstrates how to implement these steps:

html
Copy code
<!-- HTML form -->
<form id="myForm">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <button type="submit">Submit</button>
</form>

<!-- HTML table to display saved records -->
<table id="myTable">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>

<script>
  const form = document.querySelector('#myForm');
  const tableBody = document.querySelector('#myTable tbody');

  // Load saved records from local storage
  const records = JSON.parse(localStorage.getItem('records')) || [];

  // Function to save record to local storage
  const saveRecord = (record) => {
    records.push(record);
    localStorage.setItem('records', JSON.stringify(records));
  };

  // Function to display records in table
  const displayRecords = () => {
    tableBody.innerHTML = '';
    records.forEach(record => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${record.name}</td>
        <td>${record.email}</td>
        <td>
          <button type="button" class="edit-btn" data-index="${records.indexOf(record)}">Edit</button>
          <button type="button" class="delete-btn" data-index="${records.indexOf(record)}">Delete</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  };

  // Function to populate form with record data
  const populateForm = (index) => {
    const record = records[index];
    form.elements.name.value = record.name;
    form.elements.email.value = record.email;
    form.setAttribute('data-index', index);
  };

  // Function to delete record from local storage and update table
  const deleteRecord = (index) => {
    records.splice(index, 1);
    localStorage.setItem('records', JSON.stringify(records));
    displayRecords();
  };

  // Event listener for form submission
  form.addEventListener('submit', event => {
    event.preventDefault();
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const record = { name, email


