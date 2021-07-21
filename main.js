menu_list_array = ["Veg Margherita Pizza","Cheese pizza","Pineapple pizza","Paneer tikka pizza"
                    ];

function getmenu(){
var htmldata;
//Complete the code
htmldata="<ol class='menu_list'>"
menu_list_array.sort();
for(var i=0; i<menu_list_array.length; i++){
    htmldata=htmldata+ '<li>' + menu_list_array[i] +  '</li>'

}
htmldata=htmldata+ "</ol>"
document.getElementById("display_menu").innerHTML=htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='card'>"
for(var i=0; i<menu_list_array.length; i++){
    htmldata=htmldata+ '<div class="card">' + '<img src="images/pizzaImg.png">' +menu_list_array[i]+ '</div>'

}
htmldata=htmldata+'</section>'
document.getElementById("display_menu").innerHTML=htmldata;
//Complete the code

}

function add_top(){
//Complete the code
var item=document.getElementById("add_item").value;
menu_list_array.push("item");
add_item();
}