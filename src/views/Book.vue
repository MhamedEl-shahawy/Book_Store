<template>
  <main class="book">
   <div class="container">
      <div class="info">
         <img :src="books.volumeInfo.imageLinks.small" />
         <div class="description">
         <h3>{{books.volumeInfo.title}}</h3>
         <h5><span>By </span>{{books.volumeInfo.authors[0]}}</h5>
         <p>{{this.books.volumeInfo.description}}</p>
         </div> 
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'book',
  data(){
     return{
      books:null,
      id:this.$route.params.id,  
     
     }
  },
  created: function(){
          this.fetchProducts(this.id);
   },   
  methods:{
   fetchProducts(id){     
   {     
              this.$http.get(`https://www.googleapis.com/books/v1/volumes/${id}`).then((response) => {
              this.books =response.data;
            });   
          }
          },
            
    }
}
</script>
<style scoped>
.book{
   width:82%;
   height:100%;
     margin-left:18%;
 padding:1em;
  overflow:hidden;
}
.container{
   width:100%;
   height:100%;

}
.info{
  width:100%;
  display:grid;
  grid-template-columns:1fr 3fr;
  grid-gap:20px; 
  background:#fff;
  padding:2em; 
  border-radius:5px;

}
img{
   max-width:100%;
   box-shadow: 0px 0px 21px -8px rgba(0,0,0,0.75);

}
h3,h5{
    padding-bottom:0.5em;
}
h3{
   font-size:2em;
}
h5{
   color:#D31145;
   font-size:1.2em;
} 
p,span{
   color:#CDCDD3;
   font-size:1.2em;
   margin-top:1.3em;
}
</style>