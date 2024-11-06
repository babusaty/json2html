// json2html.js

export default function json2html(data) {
    // Start the table HTML string
    let html = '<table data-user="kollegesatyam04@gmail.com">';
  
    // Table Header
    html += '<thead><tr>';
    
    // Add column headers dynamically based on object keys (assumes all objects have the same keys)
    if (data.length > 0) {
      Object.keys(data[0]).forEach(key => {
        html += <th>${key}</th>;
      });
    }
  
    html += '</tr></thead>';
  
    // Table Body
    html += '<tbody>';
  
    // Iterate over each row of data
    data.forEach(row => {
      html += '<tr>';
      
      // Iterate over each column in the row and add a cell
      Object.keys(row).forEach(key => {
        html += <td>${row[key]}</td>;
      });
  
      html += '</tr>';
    });
  
    // End the table
    html += '</tbody></table>';
  
    // Return the HTML string
    return html;
  }