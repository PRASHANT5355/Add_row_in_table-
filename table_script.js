function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var mobile=document.getElementById("mobile_row"+no);
 var email=document.getElementById("email_row"+no);
	
 var name_data=name.innerHTML;
 var mobile_data=mobile.innerHTML;
 var email_data=email.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 mobile.innerHTML="<input type='text' id='mobile_text"+no+"' value='"+mobile_data+"'>";
 email.innerHTML="<input type='text' id='email_text"+no+"' value='"+email_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var mobile_val=document.getElementById("mobile_text"+no).value;
 var age_val=document.getElementById("age_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("mobile_row"+no).innerHTML=mobile_val;
 document.getElementById("email_row"+no).innerHTML=email_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_mobile=document.getElementById("new_mobile").value;
 var new_email=document.getElementById("new_email").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='mobile_row"+table_len+"'>"+new_mobile+"</td><td id='email_row"+table_len+"'>"+new_email+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_mame").value="+1";
 document.getElementById("new_mobile").value="+1";
 document.getElementById("new_email").value="+1";
}