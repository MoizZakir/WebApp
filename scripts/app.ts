fetch('https://jsonplaceholder.typicode.com/comments').then(function (data) {
    //console.log(data);
    return data.json();
}).then(function (objects) {
    
    var itr = 0;
    var tableData = "";
    while (objects.length > itr) {
        
   
        tableData=`<tr>
        <td>${objects[itr].id}</td>
        <td>${objects[itr].name}</td>
        <td>${objects[itr].email}</td>
       
        </tr>`;
     var moiz=document.getElementById('tbody') as HTMLBodyElement
     moiz.innerHTML=tableData;
         itr++;
    }
    ;
});
