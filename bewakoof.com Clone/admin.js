const ordersData = JSON.parse(localStorage.getItem("address")) || [];
const paymentsData = JSON.parse(localStorage.getItem("payments")) || [];
const showData = document.querySelector("table");
appendOrders(ordersData);
function appendOrders(ordersData) {
    for (let i = 0; i < ordersData.length; i++) {
      const tableRow = document.createElement("tr");
      for (let key in ordersData[i]) {
        const tableData = document.createElement("td");
        tableData.innerText = ordersData[i][key];
        tableRow.append(tableData);
      }
      const totalAmt = document.createElement('td');
      totalAmt.innerText = paymentsData[i].total;
      tableRow.append(totalAmt);
      showData.append(tableRow);
    }
}
