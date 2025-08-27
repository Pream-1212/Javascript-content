document.getElementById("downloadPdf").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.text("Furniture Company - Suppliers Report", 14, 20);

  //This uses the jsPDF-AutoTable plugin to:
  // This uses the jsPDF-AutoTable plugin to:
  // Automatically parse the HTML table with ID suppliersTable
  // Render it into the PDF

  doc.autoTable({
    html: "#suppliersTable", //This tells autoTable to grab the HTML table element with ID suppliersTable.
    //It converts the entire table — headers and rows — into a styled table in the PDF.
    startY: 30, //Sets the vertical starting position (Y-coordinate) of the table in the PDF.
    styles: { fontSize: 8 },
    headStyles: { fillColor: [0, 119, 204] },
  });

  doc.save("Suppliers_Report.pdf");
});

document.getElementById("downloadExcel").addEventListener("click", () => {
  const table = document.getElementById("suppliersTable");

  const wb = XLSX.utils.book_new(); //A workbook is like the entire Excel file, which can contain multiple sheets.
  const ws = XLSX.utils.table_to_sheet(table); //Converts the HTML table (suppliersTable) into an Excel worksheet (ws = worksheet).// Each <tr> becomes a row, and each <td>/<th> becomes a cell in Excel.

  XLSX.utils.book_append_sheet(wb, ws, "Suppliers"); //Adds the worksheet (ws) into the workbook (wb).  //Names the sheet "Suppliers" inside the Excel file.
  //You can add multiple sheets this way if needed.

  XLSX.writeFile(wb, "Suppliers_Report.xlsx");
}); //Creates a real Excel file from the workbook and downloads it to the user’s computer.
