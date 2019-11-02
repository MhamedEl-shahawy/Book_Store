<template>
  <div class="browse">
    <div class="page_title">
      <h2>Browse Available Books</h2>
    </div>
    <div class="search">
      <div class="filter_links">    
          <a class="active" href="#">All Books</a>
          <a href="#">Most Recent</a>
          <a href="#">Most Popular</a>
          <a href="#">Free Books</a>
      </div>
      <div class="search_input">
       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'browse',

}
</script >

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.browse{
position:relative;
   width:100%;
   height:120px;
   background-color:#EEF1F8;
   border-bottom:1px solid #dfe4ea;
}
.page_title{
  padding:1em;
  color:#535c68;
  width:100%;

}
.search {
  width:100%;
  padding:0.8em 1em;
  border-top:1px solid #dfe4ea;

}
.search .filter_links{
	width:70%;
}
.search  .filter_links a{
  text-decoration:none;
  margin-right:0.5em;
  font-size:0.9em;
  color:#95afc0;
}
.search .filter_links  .active{
  color:#fff;
  background:#95afc0;
  padding:0.4em 1em;
  border-radius:50px;
	
}

</style>