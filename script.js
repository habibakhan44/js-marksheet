function generateMarksheet() {
    const studentName = document.getElementById('studentName').value;
    const studentID = document.getElementById('studentID').value;
    const subjName1 = document.getElementById('subject1').value;
    const subjName2 = document.getElementById('subject2').value;
    const subjName3 = document.getElementById('subject3').value;
    
    const subj1 = parseInt(document.getElementById('marks1').value);
    const subj2 = parseInt(document.getElementById('marks2').value);
    const subj3 = parseInt(document.getElementById('marks3').value);
    
    const totalMarks = 100;
    const totalObtainedMarks = subj1 + subj2 + subj3;
    const totalPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
  
    const output = `
      <h2>Marksheet for ${studentName} (ID: ${studentID})</h2>
      <table>
        <tr>
          <th>Subjects</th>
          <th>Total Marks</th>
          <th>Obtained Marks</th>
          <th>Percentage</th>
        </tr>
        <tr>
          <td>${subjName1}</td>
          <td>${totalMarks}</td>
          <td>${subj1}</td>
          <td>${((subj1 / totalMarks) * 100).toFixed(2)}%</td>
        </tr>
        <tr>
          <td>${subjName2}</td>
          <td>${totalMarks}</td>
          <td>${subj2}</td>
          <td>${((subj2 / totalMarks) * 100).toFixed(2)}%</td>
        </tr>
        <tr>
          <td>${subjName3}</td>
          <td>${totalMarks}</td>
          <td>${subj3}</td>
          <td>${((subj3 / totalMarks) * 100).toFixed(2)}%</td>
        </tr>
        <tr>
          <td><strong>Total</strong></td>
          <td><strong>${totalMarks * 3}</strong></td>
          <td><strong>${totalObtainedMarks}</strong></td>
          <td><strong>${totalPercentage.toFixed(2)}%</strong></td>
        </tr>
      </table>
    `;
  
    document.getElementById('marksheetOutput').innerHTML = output;
  }
  