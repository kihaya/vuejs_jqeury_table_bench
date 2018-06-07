window.addEventListener("DOMContentLoaded", function () {

  var table_data = createTableData();

  $("thead").append("<tr></tr>");
  for (var i = 0; i < table_data.length; ++i) {
    $("tr").append("<th>" + table_data[i][0] + "</th>"); // わざわざ毎度DOMを操作しにいく
  }

  $("tbody").append('<tr id="body_row' + i + '"></tr>')
  for (var i = 0; table_data.length > i; ++i) {
    $("tbody").append('<tr id="body_row' + i + '"></tr>');
    for (var j = 0; table_data.length > j; ++j) {
      var elm = "<td>" + table_data[i][j] + "</td>";
      $("tr#body_row" + i).append(elm);
    }
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function createTableData() {
    const N = 1000;
    var table_data = []
    var row = [];

    for (var j = 0; j < N; ++j) {
      row.push(getRandomInt(10));
    }
    for (var i = 0; i < N; ++i) {
      table_data.push(row)
    }
    return table_data;
  }

})