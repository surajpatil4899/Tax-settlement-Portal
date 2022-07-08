function addRow(tableID) {
  var table = document.getElementById(tableID);
  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);
  //Column 1
  var cell1 = row.insertCell(0);
  var element1 = document.createElement("input");
    element1.type = "button";
    var element2 = document.createElement("input");
    element2.type = "button";
    var btnName = "button" + (rowCount + 3);
    
     
    var element0 = document.createElement("input");
    element0.type = "text";
    cell1.appendChild(element0);
    


    element1.name = btnName;
    element2.name = btnName;
    element1.setAttribute("value", "Delete"); // or element1.value = "button";
    element2.setAttribute("value", "Add");

    element1.onclick = function () {
        removeRow(btnName);
    };


    element2.onclick = function () {
        if (document.getElementById(tableID).rows.length + 1 > 30) {
          alert("More than 30 rows cant be added");
          return;
        }
       addRow(tableID);
     };

    cell1.append(element2);
  cell1.appendChild(element1);
  //Column 2
  var cell2 = row.insertCell(1);
  cell2.innerHTML = rowCount;
  //Column 3
  var cell3 = row.insertCell(2);
  var element3 = document.createElement("input");
  element3.type = "text";
  cell3.appendChild(element3);
}

function removeRow(btnName) {
    try {
        var table = document.getElementById('tableData');
        var rowCount = table.rows.length;
        for (var i = 0; i < rowCount; i++) {
            var row = table.rows[i];
            var rowObj = row.cells[0].childNodes[0];
            if (rowObj.name == btnName) {
                table.deleteRow(i);
                rowCount--;
            }
        }
    }
    catch (e) {
        alert(e);
    }       
}
