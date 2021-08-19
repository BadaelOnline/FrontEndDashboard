<template>
  <div class="content">
    <form>
<md-card>
     <div class="title_form"><h4>Category Form</h4></div> 
     <hr style="color: #fff;opacity: 0.5;" />
      <div  class="title_lang">
        <h4 id="title_lang1" class="act" @click="actlang()">English(EN)</h4>
         <h4 id="title_lang2" @click="actlang()">Arabic - العربية(AR)</h4>
        </div> 
        <hr style="color: #fff;opacity: 0.5;" />
                <md-card-content>
           <div class="content">
    <div class="md-layout">
     
        <NewCategoriesForm data-background-color="green"> </NewCategoriesForm>
    
    </div>
  </div>
        </md-card-content>
        </md-card>
      <md-card>
 <div class="title_form"><h4>Category Tabel</h4></div> 
     <hr style="color: #fff;opacity: 0.5;" />

    <div class="nav_tabel">
      <div class="child1"><H4>Category Id</H4></div>
      <div class="child2"><H4>Img</H4></div>
      <div class="child3"><H4>Name</H4></div>
      <div class="child4"><H4>Section</H4></div>
      <div class="child5"><H4>Status</H4></div>
      <div class="child6"><H4>Action</H4></div>
    </div>

  
          
          <!-- <md-table-empty-state
            md-label="No users found"
            :md-description="
              `No user found for this '${search}' query. Try a different search term or create a new user.`
            "
          >
          </md-table-empty-state> -->
          <!-- loop products -->
          <Categories
            v-for="item in Categories"
            :key="item.pr"
            :id="item.id"
            :name="item.name"
            :image="item.image"
            :section_id="item.section_id"
            :is_active="item.is_active"
            :category_images="item.category_images"
            style="margin: 10px 0"
          >
          </Categories>
      
      </md-card>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Categories from "../component/Categories.vue";
import { NewCategoriesForm } from "@/pages";
const toLower = (text) => {
  return text.toString().toLowerCase();
};

const searchByName = (items, term) => {
  if (term) {
    return items.filter((name) => toLower(name).includes(toLower(term)));
  }

  return items;
};
export default {
  data() {
    return {
      search: null,
      searched: [],
    };
  },
  components: { Categories,NewCategoriesForm },
  name: "AllCategories",
  computed: {
    ...mapState({
      Categories: (state) => state.All.Categories,
      sections: (state) => state.All.sections,
    }),
  },
  mounted() {
    this.$store.dispatch("loadCategories");
    this.$store.dispatch("loadSections");
  },
  methods: {
    newUser() {
      window.alert("Noop");
    },
    searchOnTable() {
      this.searched = searchByName(this.Categories, this.search);
    },
    actlang(){
    var en =  document.getElementById('title_lang1');
    var ar =  document.getElementById('title_lang2');
    en.classList.toggle("act");
    ar.classList.toggle("act");
    }
  },
  created() {
    this.searched = this.Categories;
  },

  
};
</script>

<style scoped>
/* start alaa */
.title_form{
  display: flex;
}
.title_form h4{
  padding: 10px;
  opacity: .9;
}
.title_lang{
  display: flex;
  padding-left: 20px;
}
.title_lang h4{
  padding: 10px;
  opacity: .7;
  font-size: 16px;
  position: relative;
  cursor: pointer;
}
.act{
  color: #0040ff;
}
.act::before{
position: absolute;
bottom: 0;
right: 0;
left: 0;
z-index: 1;
-webkit-transition: border .3s cubic-bezier(.4,0,.2,1),opacity .3s cubic-bezier(.4,0,.2,1),-webkit-transform 0s cubic-bezier(.4,0,.2,1) .3s;
transition: border .3s cubic-bezier(.4,0,.2,1),opacity .3s cubic-bezier(.4,0,.2,1),-webkit-transform 0s cubic-bezier(.4,0,.2,1) .3s;
transition: border .3s cubic-bezier(.4,0,.2,1),opacity .3s cubic-bezier(.4,0,.2,1),transform 0s cubic-bezier(.4,0,.2,1) .3s;
transition: border .3s cubic-bezier(.4,0,.2,1),opacity .3s cubic-bezier(.4,0,.2,1),transform 0s cubic-bezier(.4,0,.2,1) .3s,-webkit-transform 0s cubic-bezier(.4,0,.2,1) .3s;
will-change: border,opacity,transform;
content: " ";
background-color: #377dff;
width: 100%;
height: 3px;
}
.nav_tabel{
  display: flex;
  justify-content: space-around;
}

.nav_tabel .child1,.nav_tabel .child4,.nav_tabel .child5{
 width: 10%!important;
   display: flex;
  justify-content: center;
}

.nav_tabel .child2{
 width: 30%!important;
  display: flex;
  justify-content: center;
}
.nav_tabel .child3{
   width: 20%!important;
  display: flex;
  justify-content: center;
}
.nav_tabel .child6{
 width: 30% !important;
  display: flex;
  justify-content: center;
}

/* end alaa */
.new_product {
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  gap: 60%;
  justify-content: center;
  align-items: center;
}
</style>

<style lang="scss" scoped>
.md-field {
  max-width: 300px;
}
</style>
