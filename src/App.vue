<template>
  <div id="app">
    <div id="nav">
        <div class="side">
        <div class="red_book">
          <a href="#">+ Add A Book</a>
        </div>
        <div class="navigation">
        <ul>
          
          <li class="active"><router-link to="/now"><a href="#">Now Reading</a></router-link></li>
          <li><router-link to="/"><a href="#">Browse</a></router-link></li>
          <li><router-link to="/buy"><a href="#">Buy Books</a></router-link></li>
          <li><router-link to="/favourite"><a href="#">Favourite Books</a></router-link></li>
          <li><router-link to="/wish"><a href="#">Wishlist</a></router-link></li>
          <li><router-link to="/history"><a href="#">History</a></router-link></li>
         </ul> 
        </div>
        <div class="filter">
          <ul>
            <li><a href="#"> Must Read Titles</a></li>  
            <li><a href="#"> Best Of List</a></li>   
            <li><a href="#"> Classic Novels</a></li>   
            <li><a href="#"> Non Fiction</a></li>    
          </ul>
        </div>
        </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
   background:#dff9fb;
  
}
#app{
   width:100%;
   height:100%;
   overflow-x:hidden;
   font-family: 'Open Sans', sans-serif;
   position:relative;
}
.side{
   width:18%;
   background:#2C3A47;
   height:100vh;
   position:fixed;
   padding-top:2em;
}
.red_book{
   width:100%;
   text-align:center;
   padding-top:2em;
}
.red_book a{
   background:#F17958;
   color:#fff;
   padding:0.5em 1.2em;
   text-decoration:none;
   border-radius:5px;
   font-size:1.3em;
}
.navigation, .filter{
   width:100%;
   margin-top:2em;
   
}
.navigation  li, .filter li{
   width:100%;
   padding-left:1.3em;
   margin-bottom:0.8em;
}
.navigation  li a{
   text-decoration:none;
   color:#7f8c8d;
   font-wight:bold;
}
.active{
   background:#3498db;
   padding-top:1em;
   padding-bottom:1em;
}
.navigation .active a{
  color:#fff; 

}
.filter a{
position:relative;
   text-decoration:none;
   color:#7f8c8d;
   padding-left:1em;
}
.filter li a:before{
content:"";
position:absolute;
  
   border-radius:100%;
   width:7px;
   height:7px;
   left:0;
   top:48%;
}
.filter ul li:nth-child(1)  a:before{
     background:#c0392b;
}
.filter ul li:nth-child(2)  a:before{
     background:#f1c40f;
}
.filter ul li:nth-child(3)  a:before{
     background:#3498db;
}
.filter ul li:nth-child(4)  a:before{
     background:#6c5ce7;
}
</style>
