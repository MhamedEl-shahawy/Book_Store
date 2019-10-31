<template>
  <div id="app">
    <div id="nav">
        <div class="side">
          ss
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
#app{
   width:100%;
   overflow-x:hidden;
   font-family: 'Open Sans', sans-serif;
   position:relative;
}
.side{
  position:fixed;
   width:20%;
   background:#f00;
   height:100%;
}
</style>
