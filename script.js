
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


