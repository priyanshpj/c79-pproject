var m_l_a=["Chicken Tandoori Pizza", "Veg Supreme Pizza", "Paneer Tikka Pizza", "Deluxe Veggie Pizza", "Veg Extravaganda Pizza"];
function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    m_l_a.sort();
    for(var i=0; i<m_l_a.length;i++){
        htmldata=htmldata+'<li>'+ m_l_a[i]+'</li>'
    }
     htmldata=htmldata+"</ol>";
     document.getElementById("display_menu").innerHTML=htmldata;
}
function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    m_l_a.push(item);
    m_l_a.sort();
    htmldata="<section class='cards'>"
    for(var i=0; i<m_l_a.length;i++){
        htmldata=htmldata+"<div class='card'>"+'<img src="images/pizzaImg.png">'+m_l_a[i]+'</div>' 
    } 
     htmldata=htmldata+'</section>'
     document.getElementById("display_addedmenu").innerHTML=htmldata;
}