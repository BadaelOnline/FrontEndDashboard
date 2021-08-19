<template>
  
        <div class="parent">
          <div class="child_1">
                <md-field
                  class="md-layout-item md-size-80 "
                  data-background-color="dataBackgroundColor"
                >
                  <label for="name">Name</label>
                  <md-input
                    class="text"
                 
                  ></md-input>
                  
                </md-field>
              
                
                <md-field
                  class="md-layout-item md-size-80 "
                  data-background-color="dataBackgroundColor"
                >
                  <label for="name">section id</label>
                  <md-input
                    class="text"
                 
                  ></md-input>
                  
                </md-field>
              
                 
                <md-field
                  class="md-layout-item md-size-80 "
                  data-background-color="dataBackgroundColor"
                >
                  <label for="name">parent id</label>
                  <md-input
                    class="text"
                 
                  ></md-input>
                  
                </md-field>
                </div>
          <!-- <div class="alert" id="alert">
            <span
              class="closebtn"
              onclick="this.parentElement.style.display='none';"
              >&times;</span
            >
             <strong>One or more fields have an error!</strong>
            please check and try again...this fields is require
          </div> 
            <div>One or more fields have an error!</div>
            <div>
              <span>this fields is require!</span>
            </div>
            <p>please check and try again</p>
          </div>
          <div class="alertt" id="alertt">
         
            <strong>Category New successfully</strong>
          </div>
           
          <div class="md-layout md-size-60">
            <div class="md-layout-item md-size-60">
              <div class="md-layout-item  md-size-100 div">
               
           
                <md-field class="md-layout md-size-100 name">
                  <label for="name">Name</label>
                  <md-input
                    id="name"
                    v-if="lang1 == 'ar'"
                    class="text"
                    v-model="categories.category[1].name"
                  ></md-input>
                  <md-input
                    class="text"
                    v-else-if="lang1 == 'en'"
                    v-model="categories.category[0].name"
                  ></md-input>
                  <md-field class="md-layout md-size-50 lang">
                    <select
                      class="langselect"
                      v-model="lang1"
                      @change="handleChange1($event)"
                    >
                      <option label="lang" disabled>lang</option>
                      <option value="en">EN</option>
                      <option value="ar">AR</option>
                    </select>
                  </md-field>
                </md-field>
             
              </div>
              <div class="md-layout-item  md-size-100 div">
             
                <md-field class="md-layout-item  md-size-100 select">
                  <label for="font">Section</label>
             
                  <md-select
                    class="md-layout-item md-size-90"
                    v-model="categories.section_id"
                    name="font"
                    id="font"
                    md-dense
                  >
                    <md-option
                      class="text"
                      v-for="item in sections"
                      :key="item.id"
                      :value="item.id"
                      >{{ item.name }}</md-option
                    >
                  </md-select>
                </md-field>
          
              </div>
              <div class="md-layout-item md-size-100 div">
       
                <md-field class="md-layout-item  md-size-100 select">
                  <label class="title" for="font">Categories Parent</label>
                  <md-select
                    class="md-layout-item md-size-80"
                    v-model="categories.parent_id"
                    name="font"
                    id="font"
                    md-dense
                  >
                    <md-option
                      class="text"
                      v-for="category in Categories"
                      :key="category.id"
                      :value="category.id"
                      >{{ category.name }}</md-option
                    >
                  </md-select>
                </md-field>
          
              </div>
            </div>
          
        </div> -->
      <div class="child_4">
              <UploadImagesCategory> </UploadImagesCategory>
               <md-button :data-background-color="'blue'" @click="postCategory()"
              >Add</md-button
            >
            </div>
       
          
  </div>
  
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import UploadImagesCategory from "./UploadImagesCategory.vue";
export default {
  name: "NewCategoryForm",
  components: {
    UploadImagesCategory,
  },
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    let lang1 = window.localStorage.getItem("lang1");
    return {
      lang1: lang1,
      categories: {
        category: [
          {
            name: null,
            local: "en",
            language_id: 1,
          },
          {
            name: null,
            local: "ar",
            language_id: 1,
          },
        ],
        is_active: 1,
        slug: "hbjhk",
        parent_id: null,
        images: [
          {
            image: "https://img.lovepik.com/photo/50015/8348.jpg_wh860.jpg",
            is_cover: 1,
          },
        ],
        section_id: null,
        lang_id: 1,
        created_at: null,
        updated_at: null,
      },
    };
  },
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
    handleChange1(event) {
      localStorage.setItem("lang1", event.target.value);
    },
    postCategory() {
      axios.post("/api/categories/create", this.categories);
      if (
        this.categories.category[0].name == null ||
        this.categories.category[1].name == null ||
        this.categories.section_id == null ||
        this.categories.parent_id == null
      ) {
        document.getElementById("alert").classList.add("block");
        window.scrollTo(0, 20);
      } else {
        setTimeout(function() {
          console.log(JSON.stringify(this.categories));
          document.getElementById("alert").classList.remove("block");
          document.getElementById("alertt").classList.add("block1");
          this.$router.push({ name: "allCategories" });
        }, 1000);
        // document.getElementById("alertt").classList.remove("block1");
      }
    },
  },
};
</script>

<style scoped>
/* start alaa */
.parent{
  display: flex;
  width: 100%;
}
.parent .child_1{
width: 100%;
height: 100px;
}
.md-field{
 border: 1px solid #d0cece;
}
.md-field label{
  padding-left: 10px;
}
.parent .child_4{
width:100%;
}
/* end alaa */
.md-steppers-navigation {
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
  display: flex;
  gap: 10px;
  margin: 20px auto;
}
.div {
  min-width: 100%;
  max-width: 100%;
  margin-left: 0 !important;
  flex: 1 1 100%;
  margin: 40px;
}

.md-menu.md-select {
  display: flex;
  flex: 1;
  overflow: auto;
}
.alert {
  display: none;
  padding: 20px;
  transition: all 0.5s;
  border: 0;
  margin: 20px;
  gap: 20px;
  border-radius: 0;
  position: relative;
  padding: 20px 15px;
  line-height: 20px;
  margin-bottom: 20px;
  background-color: red;
  color: #ffffff;
  border-radius: 3px;
  -webkit-box-shadow: 0 12px 20px -10px rgb(153 153 153 / 28%),
    0 4px 20px 0px rgb(0 0 0 / 12%), 0 7px 8px -5px rgb(153 153 153 / 20%);
  box-shadow: 0 12px 20px -10px rgb(153 153 153 / 28%),
    0 4px 20px 0px rgb(0 0 0 / 12%), 0 7px 8px -5px rgb(153 153 153 / 20%);
}
.lang {
  border: none;
}
.langselect {
  border: none;
  background-color: #d1c9c9;
  border-radius: 3px;
  height: 20px;
  cursor: pointer;
  margin-left: 50%;
  margin-top: 10px;
}
.name {
  width: 100%;
  max-height: 20px;
  min-height: 48px;
  margin: 4px 0 24px;
  padding-top: 16px;
  display: flex;
  position: relative;
  font-family: inherit;
}
.lang {
  max-height: 30px;
  min-height: 30px;
  margin: auto;
  padding: 0;
}
.text {
  text-align: center;
}
.md-card .title {
  margin-top: 0;
  text-align: start;
  margin-bottom: 5px;
  padding-left: 10px;
}

.md-card .md-card-header {
  /* background-color: rgb(118, 145, 146); */
  background-color: #1abbd7;
}


.new {
  text-align: center;
}

.alert div {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
}
.alertt {
  display: none;
  padding: 20px;
  background-color: #00b618;
  color: white;
}
.block {
  display: block;
  text-align: center;
  position: fixed;
  margin: auto;
  background-color: rgb(112, 13, 13);
  z-index: 1000;
  color: #000;
  width: 40%;
  font-size: 18px;
}
.block1 {
  display: block;
  text-align: center;
  position: fixed;
  margin: auto;
  background-color: rgb(12, 99, 33);
  z-index: 1000;
  color: #000;
  width: 40%;
  font-size: 18px;
}
.closebtn {
  background-color: #fff;
  width: 20px;
}
.alert div:first-of-type {
  animation: showup 7s infinite;
}

.alert div:last-of-type {
  width: 0px;
  animation: reveal 7s infinite;
}

.alert div:last-of-type span {
  margin-left: -355px;
  animation: slidein 7s infinite;
}

@keyframes showup {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes slidein {
  0% {
    margin-left: -800px;
  }
  20% {
    margin-left: -800px;
  }
  35% {
    margin-left: 0px;
  }
  100% {
    margin-left: 0px;
  }
}

@keyframes reveal {
  0% {
    opacity: 0;
    width: 0px;
  }
  20% {
    opacity: 1;
    width: 0px;
  }
  30% {
    width: 355px;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    width: 355px;
  }
}

.alert p {
  font-size: 12px;
  color: #999;
  /* margin-top: 200px; */
}
</style>
