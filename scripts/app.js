fetch('https://jsonplaceholder.typicode.com/comments').then(function (data) {
    //console.log(data);
    return data.json();
}).then(function (objects) {
    var itr = 0;
    var tableData = "";
    while (objects.length > itr) {
        tableData += "<tr>\n        <td>".concat(objects[itr].id, "</td>\n <td>").concat(objects[itr].name, "</td>\n  <td>").concat(objects[itr].email, "</td>\n  \n  \n      </tr>");
        var moiz = document.getElementById('tbody');
        moiz.innerHTML = tableData;
        itr++;
    }

    ;
});
