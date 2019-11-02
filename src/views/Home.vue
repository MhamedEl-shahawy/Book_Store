<template>
  <main class="home">
   <div class="container" >
   <Browse/>
   <div class="grid">
     <div  class="book-card"  v-for="book in books" :key="book">
         <div   class="book-card__cover">
            <router-link :to="'book/'+book.id"> <img :src="book.volumeInfo.imageLinks['thumbnail']" class="book-card__img" /></router-link>           
          </div>
         <div>
             <div class="book-card__title">
               <p>{{book.volumeInfo.title}}</p>    
               <p>By : {{book.volumeInfo.authors[0]}}</p> 
                <star-rating :star-size="20"   @rating-selected="rating = $event" :rating="book.volumeInfo.averageRating"></star-rating>

                 
             </div>
         </div>
     </div>
   </div>
   </div>


  </main>
</template>

<script>
// @ is an alias to /src
import Browse from "@/components/Browse.vue";

export default {
  name: 'home',
  components:{
      Browse
  },
  data(){
     return{
      books:null,
      rating: 2,
        
     
     }
  },
  created: function(){
          this.fetchProducts();
   },   
  methods:{
   fetchProducts(){     
   {     
              this.$http.get("https://www.googleapis.com/books/v1/volumes?q=art&fbclid=IwAR04LtnrUf2UFErs-AzMqlPf5iVF__TONFp-NYcK4bWgkf-v3uk9eLr7Ouc").then((response) => {
              this.books =response.data.items;
            });   
          }
          },
            
    }
}
</script>
<style scoped>
.home{
  width:82%;
  height:100%;
  overflow:hidden;
  margin-left:18%;
  background-color:#fff;
}
.container {
  width:100%;
  height:100%;
}
.grid{
  display:grid;
  grid-template-columns:repeat(5,1fr);
  grid-gap:10px;
  color:#2A2A2A;
  padding:1em;
  
}
.book-card{
	height:400px;
}


.book-card__cover{
	height:75%;

}
img
{
  width: 100%;
  max-height:97%;
  border-radius:8px;
}
.book-card__title{
	height:25%;
}
.book-card__title p:first-of-type{
	font-size:1em;
}
.book-card__title p:last-of-type{
    color:#3A3A3A;
}
p{
  width:100%;
}
</style>