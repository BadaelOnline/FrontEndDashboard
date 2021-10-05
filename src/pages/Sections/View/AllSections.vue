<template>
  <div class="content">
    <form>
      <md-card>
        <div class="title_form">
          <h4>Sections Tabel</h4>
          <router-link :to="`/admin/section/create`"
            ><md-button class="md-accent" :data-background-color="'blue'">
              New Sections</md-button
            ></router-link
          >
        </div>
        <hr style="color: #fff;opacity: 0.5;" />

        <div class="table" v-if="sections.length > 0">
          <div class="nav_tabel">
            <div class="child1">
              <div class="child">
                <span>ID</span>
              </div>
            </div>
            <div class="child2">
              <div class="child">
                <span>Img</span>
              </div>
            </div>
            <div class="child3">
              <div class="child">
                <span>Name</span>
              </div>
              <input
                type="input"
                class="search"
                name="search"
                id="name"
                v-model="searchName"
                placeholder="Name"
                autofocus
                required
              />
            </div>
   
            <div class="child6">
              <div class="child">
                <span>Status</span>
              </div>
              <select v-model="selectedFilter">
                <option value="all" selected>All</option>
                <option value="active">Active</option>
                <option value="notActive">Not Active</option>
              </select>
            </div>
            <div class="child7">
              <div class="child">
                <span>Action</span>
              </div>
            </div>
          </div>

          <Section
            v-for="item in filtered"
            :key="item.pr"
            :id="item.id"
            :name="item.name"
            :category="item.category"
            :product="item.product"
            :image="item.image"
            :is_active="item.is_active"
            style="margin: 10px 0"
          >
          </Section>
 <nav v-if="filtered.length > 0">
  <ul class="pagination" style="justify-content: center;margin-top: 30px;">
    <li class="page-item" :class="{ disabled : page == 1}" @click="Previous">
      <span class="page-link">Previous</span>
    </li>
    
    <li class="page-item" :class="{ active : page == pag}"  v-show="pag == page || pag == ( parseInt(page )+2) || pag == ( parseInt(page)+1) || pag == ( parseInt(page)-1)"
    v-for="pag in total_page" :key="pag">
        <span class="page-link" @click="getPage(pag)"> {{pag}}</span>
    </li>
   <span style="display: grid;align-content: center;">
        <span style="color: #9d1c9b;font-weight: bold; "> /  total : {{total_page}}</span>
    </span>
    <li class="page-item" @click="Next">
      <span class="page-link">Next</span>
    </li>
  </ul>
</nav>
      <div class="unavaible_category" v-else>
         
          <div class="unavaible">
            <h2>No Items Founded</h2>
          </div>
        </div>
        </div>
        <div class="unavaible_category" v-else>
          <router-link :to="`/admin/section/create`"
            ><md-button class="md-accent" :data-background-color="'blue'">
              New Sections</md-button
            ></router-link
          >
          <div class="unavaible">
            <h2>Ops... Sections doesnt exist yet.</h2>
          </div>
        </div>
      </md-card>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Section from "../component/Section.vue";
const page = window.localStorage.getItem("page") || 1;
export default {
  name: "section",
  data() {
    return {
      page: page,
      searchID: "",
      searchName: "",
      searchSection: "",
      selectedFilter: "",
    };
  },
  components: { Section },
  methods: {
    getPage(i) {
      localStorage.setItem("page", i);
      this.$store.dispatch("loadCategories");
      window.location.reload();
    },
     Next(){
            localStorage.setItem("page", parseInt(this.page)+1);
             window.location.reload();
        },
       Previous(){
           if(localStorage.getItem("page") > 1){
            localStorage.setItem("page",parseInt(this.page)-1);
             window.location.reload();
           }

        },
  },
  computed: {
    ...mapState({
      sections: (state) => state.All.sections,
       total_page: (state) => state.All.total_page,
    }),

    filtered() {
      if (this.searchName != "") {
        return this.sections.filter((el) => {
          var regex = new RegExp(this.searchName, "i");
          return el.name.match(regex);
        });
      }
      // if (this.searchSection != "") {
      //   return this.Categories.filter((el) => {
      //     var regex = new RegExp(this.searchSection, "i");
      //     return el.section.name.match(regex);
      //   });
      // }
      if (this.selectedFilter == "notActive") {
        return this.sections.filter((el) => {
          return el.is_active == "Not Active";
        });
      } else if (this.selectedFilter == "active") {
        return this.sections.filter((el) => {
          return el.is_active == "Active";
        });
      } else {
        return this.sections;
      }
    },
  },
  mounted() {
    this.$store.dispatch("loadSections");
  },
};
</script>

<style scoped>
/* .paginate {
  width: 40%;
  margin: auto;
  display: flex;
  gap: 10px;
  justify-content: center;
}
.paginate span {
  cursor: pointer;
  border: solid 3px #36bdca;
  background-color: #36bdca;
} */
.pagenation {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.page {
  padding: 5px;
  width: 25px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #efefee;
}
.page_active {
  background-color: #16bbd0;
  padding: 5px;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;
}
.title_form {
  display: flex;
  justify-content: center;
  gap: 60%;
}
@media (max-width: 600px) {
  .title_form {
    gap: 20%;
  }
}
.title_form h4 {
  padding: 10px;
  opacity: 0.9;
}
.title_lang {
  display: flex;
  padding-left: 20px;
}
.title_lang h4 {
  padding: 10px;
  opacity: 0.7;
  font-size: 16px;
  position: relative;
  cursor: pointer;
}
.nav_tabel {
  display: flex;
  margin: 20px 0;
}
.nav_tabel .child1,
.nav_tabel .child2,
.nav_tabel .child3,
.nav_tabel .child4,
.nav_tabel .child5,
.nav_tabel .child6,
.nav_tabel .child7,
.nav_tabel .child8 {
  height: 7em;
  align-items: center;
  text-align: center;
  color: #fff;
}
.nav_tabel .child1 .child,
.nav_tabel .child2 .child,
.nav_tabel .child3 .child,
.nav_tabel .child4 .child,
.nav_tabel .child5 .child,
.nav_tabel .child6 .child,
.nav_tabel .child7 .child,
.nav_tabel .child8 .child {
  background-color: #36bdca;
  height: 3em;
  font-weight: 900;
  margin: 10px 0;
}
.nav_tabel .child1 .child span,
.nav_tabel .child2 .child span,
.nav_tabel .child3 .child span,
.nav_tabel .child4 .child span,
.nav_tabel .child5 .child span,
.nav_tabel .child6 .child span,
.nav_tabel .child7 .child span,
.nav_tabel .child8 .child span {
  margin: auto;
  align-items: center;
}
main {
  margin: 20px 0;
}
.search {
  width: 70px;
  height: 2em;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 13px;
  background-color: white;
  background-image: url("../../../../public/img/search.png");
  background-position: 5px 5px;
  background-size: 15px;
  background-repeat: no-repeat;
  align-items: center;
  padding: 12px 20px 12px 30px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}
.search:focus {
  width: 100%;
  border: 1px solid #36bdca;
}
.nav_tabel .child6 select {
  width: 50%;
  height: 2.5em;
  font-size: 13px;
  margin: auto;
  align-items: center;
  border: none;
  color: gray;
  border: 1px solid rgb(199, 196, 196);
  background-color: #fff;
}
.nav_tabel .child6 select option {
  font-size: 13px;
  margin: auto;
}
.nav_tabel .child5,
.nav_tabel .child8 {
  width: 20% !important;
  justify-content: center;
  position: relative;
}
.nav_tabel .child6 {
  width: 30% !important;
  justify-content: center;
  position: relative;
}
.nav_tabel .child2 {
  width: 30% !important;
  justify-content: center;
}
.nav_tabel .child1,
.nav_tabel .child3,
.nav_tabel .child4 {
  width: 20% !important;
}
.nav_tabel .child7 {
  width: 20% !important;
}
/* .nav_tabel .child6::before {
  content: "(click to restore)";
  opacity: 0.6;
  font-size: 13px;
  position: absolute;
  bottom: -15px;
} */
.search {
}
.new_product {
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  gap: 60%;
  justify-content: center;
  align-items: center;
}
.unavaible_category {
  background-color: #ecf0f1;
  height: auto;
  width: 100%;
  margin: auto;
}
.unavaible {
  margin: 50px auto;
  width: 90%;
  text-align: center;
  height: 300px;
}
.unavaible_product h2 {
  font-size: 3em;
  color: gray;
}
/*  */
li.ivu-page-next.ivu-page-disabled {
  background-color: #000;
}
li.ivu-page-prev {
  background-color: #000;
}
 .nav_tabel .child6 .child::before {
  content: "(click to restore)";
  opacity: 0.7;
  font-size: 13px;
  position: absolute;
  bottom: 45px;
  width: 200px;
  left: 30px;
} 
</style>

<style lang="scss" scoped>
.md-field {
  max-width: 300px;
}
</style>
