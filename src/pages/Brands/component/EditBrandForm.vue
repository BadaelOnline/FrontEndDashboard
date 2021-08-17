<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">edit Brand</h4>

        <p class="category">Complete your profile</p>
      </md-card-header>
      <md-card-content>
        <div>
          <div class="alert" id="alert">
            <span
              class="closebtn"
              onclick="this.parentElement.style.display='none';"
              >&times;</span
            >
            <strong>Danger!</strong> You must fill in all fields.
          </div>
          <div class="alertt" id="alertt">
            <span
              class="closebtn"
              onclick="this.parentElement.style.display='none';"
              >&times;</span
            >
            <strong>Good</strong> "operation accomplished successfully.
          </div>
          <div class="md-layout md-size-100">
            <div class="md-layout-item  md-size-100 div">
              <md-card-header data-background-color="dataBackgroundColor">
                <h4 class="title">Name</h4>
                <md-field
                  class="md-layout-item md-size-100 name"
                  data-background-color="dataBackgroundColor"
                >
                  <md-input
                    class="text"
                    v-model="Brands.brands[1].name"
                  ></md-input>
                  <!-- <md-input
                    class="text"
                    v-else
                    v-model="Brands.brands[0].name"
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
                  </md-field> -->
                </md-field>
              </md-card-header>
            </div>
            <div class="md-layout-item  md-size-100 div">
              <md-card-header data-background-color="dataBackgroundColor">
                <h4 class="title">Description</h4>
                <md-field
                  class="md-layout-item md-size-100 name"
                  data-background-color="dataBackgroundColor"
                >
                  <md-input
                    class="text"
                    v-model="Brands.brands[1].description"
                  ></md-input>
                  <!-- <md-input
                    class="text"
                    v-else
                    v-model="Brands.brands[0].description"
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
                  </md-field> -->
                </md-field>
              </md-card-header>
            </div>
            <div class="md-layout-item md-size-100">
              <UploadImagesBrand> </UploadImagesBrand>
            </div>
          </div>
          <div class="md-layout md-medium-size-100 ">
            <md-button @click="updateBrands()">Update</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import UploadImagesBrand from "./UploadImagesBrand.vue";

export default {
  name: "EditBrandForm",
  components: {
    UploadImagesBrand,
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
      Brands: {
        brands: [
          {
            name: "null",
            description: "null",
            locale: "en",
            language_id: 1,
          },
          {
            name: null,
            description: null,
            locale: "ar",
            language_id: 1,
          },
        ],
        slug: "gfvghf",
        is_active: 1,
        images: [
          {
            image: "https://img.lovepik.com/photo/50015/8348.jpg_wh860.jpg",
            is_cover: 2,
          },
        ],
        lang_id: 1,
      },
    };
  },
  computed: {
    ...mapState({
      BrandID: (state) => state.All.BrandID,
    }),
  },
  mounted() {
    this.$store.dispatch("loadBrand", this.$route.params.id);
  },
  methods: {
    updateBrands() {
      axios.put(`/api/brands/update/${this.BrandID.id}`, this.Brands);
      if (
        this.Brands.brands[1].name == null ||
        this.Brands.brands[1].description == null
      ) {
        document.getElementById("alert").classList.add("block");
        // document.getElementById("alert").scrollTop
        window.scrollTo(0, 20);
      } else {
        document.getElementById("alert").classList.remove("block");
        document.getElementById("alertt").classList.add("block");
        console.log(JSON.stringify(this.Brands));
        this.$router.push({ name: "allBrands" });
      }
    },
    handleChange1(event) {
      localStorage.setItem("lang1", event.target.value);
    },
  },
};
</script>

<style scoped>
.md-layout-item.md-size-33 {
  min-width: 100%;
  max-width: 100%;
  flex: 0 1 33.3333%;
}
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
.md-layout-item.md-size-60 {
  min-width: 60%;
  max-width: 60%;
  flex: 0 1 60%;
  /* padding: 20px; */
  margin: auto;
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
.alertt {
  display: none;
  padding: 20px;
  background-color: #00b618;
  color: white;
}
.block {
  display: flex;
  background-color: red;
}
.req {
  display: none;
  color: red;
  /* margin-top: 30px; */
}
.req1 {
  display: none;
  color: red;
}
.req2 {
  display: none;
  color: red;
}
.lang {
  border: none;
}
.langselect {
  border: none;
  /* border: solid #7c7979; */
  background-color: #d1c9c9;
  border-radius: 3px;
  cursor: pointer;
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
  padding-left: 50%;
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
</style>
