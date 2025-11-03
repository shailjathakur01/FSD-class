<!DOCTYPE html>
<html>
<head>
  <title>College Timetable</title>
  <style>
    table, th, td {
      border: 2px solid black;
      border-collapse: collapse;
      padding: 8px;
      text-align: center;
    }
    th { background-color: #f2f2f2; }
  </style>
</head>
<body>

<h2>College Timetable</h2>
<table id="timetable"></table>

<script>
  // Timetable data
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const subjects = [
    ["Math", "Physics", "DBMS", "Break", "TOC"],
    ["OS", "Math", "DBMS", "Break", "DAA"],
    ["DAA", "Physics", "OS", "Break", "DBMS"],
    ["TOC", "Math", "DAA", "Break", "OS"],
    ["DBMS", "Physics", "TOC", "Break", "Sports"]
  ];

  // Create table
  const table = document.getElementById("timetable");

  // Header row
  let header = "<tr><th>Day</th><th>9–10</th><th>10–11</th><th>11–12</th><th>12–1</th><th>1–2</th></tr>";
  table.innerHTML = header;

  // Fill rows using JS
  for (let i = 0; i < days.length; i++) {
    let row = `<tr><td>${days[i]}</td>`;
    for (let j = 0; j < subjects[i].length; j++) {
      row += `<td>${subjects[i][j]}</td>`;
    }
    row += "</tr>";
    table.innerHTML += row;
  }
</script>

</body>
</html>
