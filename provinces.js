const rows = document.querySelectorAll('tr');

const provinces = [];

rows.forEach(row => {
  const cells = row.querySelectorAll('td');
  
  if (cells.length > 2) {
    const province = cells[2].textContent.trim();
    
    provinces.push(province);
  }
});

console.log(provinces);
