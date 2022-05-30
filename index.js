var arrHead = new Array();
var arrValue = new Array();
var table = document.createElement('table');
var string="";
function CreateTable() {
  arrHead = ['ID', 'FName', 'LName','Action'];
  arrValue.push(['1', 'Green', 'Field']);
  arrValue.push(['2', 'Arun', 'Banik']);
  arrValue.push(['3', 'Dewane', 'Paul']);
  arrValue.push(['4', 'Dewane', 'Hash']);
  arrValue.push(['5', 'Banik', 'Hash']);
  table.setAttribute('id', 'empTable');
  var tr = table.insertRow(-1);
  for (var h = 0; h < arrHead.length; h++) {
      var th = document.createElement('th');              // TABLE HEADER.
      th.innerHTML = arrHead[h]+" ";
      tr.appendChild(th);
 
  }        
  for (var c = 0; c <= arrValue.length - 1; c++) {
      tr = table.insertRow(-1);

      for (var j = 0; j <=arrHead.length-1; j++) {
           let a=j;
           var td = document.createElement('td');  
           td = tr.insertCell(-1);
           if(j!=arrHead.length-1){                     
              td.innerHTML = arrValue[c][j]; 
           }
           if(j==arrHead.length-1){
              var button = document.createElement("button");
              button.innerHTML = "action";
              let b=c;
              var body = document.getElementsByTagName("body")[0];
              body.appendChild(button);
              button.addEventListener ("click", function(j) {
                  var s="My Name is "+arrValue[b][1]+" "+arrValue[b][2];
                  alert(s);
              });
            td.appendChild(button);                
          }              
      }            
  } 
  string=""    
  document.body.appendChild(table); 
  var button = document.createElement("button");
  button.innerHTML = "Filter";
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(button);  
  button.addEventListener ("click", function(j) {
    if(string!=""){
      alert('Names that are matched\n'+string);
      string=""
    
  }
  });   
}    
function myFunction() {
  var input, filter, Table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
    for (i = 0; i < arrValue.length; i++) {
        txtValue = arrValue[i][1]+" "+arrValue[i][2];
        txtValue=txtValue.toUpperCase();
       
      if (txtValue.match(filter) ==null) { 
       // delete arrValue[i];
        ;
      } else {
        if(filter!="" && string.includes(txtValue)==0){
        string=string+txtValue+"\n";
        //alert(string);
        }
        alert(txtValue);
        
        
      }
     
  }
}
  
