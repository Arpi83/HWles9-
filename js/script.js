table = document.getElementById('table'); 
table.setAttribute('border', 1);  

tr = document.createElement("TR"); 
th = document.createElement("Th"); 
th.appendChild(document.createTextNode('Time')); 
tr.appendChild(th); 

th = document.createElement("Th");
th.appendChild(document.createTextNode('Topic')); 
tr.appendChild(th); 

table.appendChild(tr); 

tr = document.createElement("TR"); 
td = document.createElement("TD"); 
td.appendChild(document.createTextNode('18:00-20:30'));  
tr.appendChild(td); 

td = document.createElement("TD"); 
td.appendChild(document.createTextNode('Registration'));
tr.appendChild(td); 

table.appendChild(tr); 

tr = document.createElement("TR"); 
td = document.createElement("TD"); 
td.appendChild(document.createTextNode('20:30-23:00')); 
tr.appendChild(td); 

td = document.createElement("TD"); 
td.appendChild(document.createTextNode('Keynote')); 
tr.appendChild(td); 
table.appendChild(tr); 
 