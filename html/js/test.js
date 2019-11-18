function getint(i) {
  return 2 * i;
}


function getPersons() {
  var testobj;
  console.log('getPerson() function is already runed..');
  var tbodyHtml = '';
  $.getJSON("static/personArray.json", function (data) {
    testobj=data;
    console.log('data\n' + data);
    console.log('JSON.stringify(data)\n' + JSON.stringify(data));
    console.log(typeof (data));
    console.log(typeof (JSON.stringify(data)));
    var jsonArr = JSON.parse(JSON.stringify(data));
    console.log(typeof (jsonArr));
    console.log('jsonArr\n' + jsonArr);
    $.each(jsonArr, function () {
      tbodyHtml += '<tr>';
      tbodyHtml += '<td>' + this.name + '</td>';
      tbodyHtml += '<td>' + this.birthday + '</td>';
      tbodyHtml += '<td>' + this.nationnality + '</td>';
      tbodyHtml += '<td>' + this.deadday + '</td>';
      tbodyHtml += '</tr>';
    });
  });
  console.log(testobj);
  return tbodyHtml;
}
