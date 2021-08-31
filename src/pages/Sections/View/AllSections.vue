<template>
  <div class="content">
  
    <form>
      <md-card>
        <div class="title_form">
          <h4>Section Tabel</h4>
          <router-link :to="`/admin/section/create`"
            ><md-button class="md-accent" :data-background-color="'blue'">
              New Section</md-button
            ></router-link
          >
        </div>
        <hr style="color: #fff;opacity: 0.5;" />

        <div class="table" v-if="sections.length > 0">
          <div class="nav_tabel">
            <div class="child1">Section Id</div>
            <div class="child2">Img</div>
            <div class="child3">Name</div>      
            <div class="child6">Status</div>
            <div class="child7">Action</div>
          </div>

           <Section
            v-for="items in sections"
            :key="items.pr"
            :id="items.id"
            :name="items.name"
            :image="items.image"
            style="margin: 10px 0"
          >
          </Section>
        </div>
        <div class="unavaible_category" v-else>
            <router-link :to="`/admin/section/create`"
            ><md-button class="md-accent" :data-background-color="'blue'">
              New Section</md-button
            ></router-link
          >
          <div class="unavaible">
            <h2>Ops... Section doesnt exist yet.</h2>
          </div>
        </div>
      </md-card>
    </form>
  </div>
   

</template>

<script>
import { mapState } from "vuex";
import Section from "../component/Section.vue";
export default {
  name: "AllSection",
  components: { Section },
  computed: {
    ...mapState({
      sections: (state) => state.All.sections,
    }),
  },
  mounted() {
    this.$store.dispatch("loadSections");
  },
};
</script>
<style scoped>
.title_form {
  display: flex;
  justify-content: center;
  gap: 60%;
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
  justify-content: space-around;
  background-color: #36bdca;
  height: 4em;
  align-items: center;
  opacity: 0.8;
}
.nav_tabel .child1,
.nav_tabel .child2,
.nav_tabel .child3,
.nav_tabel .child6,
.nav_tabel .child7 {
  font-weight: 900;
}
@media (max-width: 800px) {
  .nav_tabel {
    /* display: block; */
    width: 120%;
  }
  .table {
    overflow: scroll;
    height: 600px;
  }
  .content {
    height: 20%;
  }
  .nav_tabel .child1,
  .nav_tabel .child2,
  .nav_tabel .child3,
  .nav_tabel .child6,
  .nav_tabel .child7 {
    width: 10%;
    font-size: 15px;
  }
}
@media (max-width: 600px) {
  .nav_tabel {
    /* display: block; */
    width: 150%;
  }
}
@media (max-width: 300px) {
  .nav_tabel {
    /* display: block; */
    width: 180%;
  }
}
.nav_tabel .child6 {
  width: 20% !important;
  display: flex;
  justify-content: center;
  position: relative;
}
.nav_tabel .child6::before {
content: '(restore unvalible )';
opacity: .6;
font-size: 13px;
position: absolute;
bottom: -15px;  
}

.nav_tabel .child2 {
  width: 30% !important;
  display: flex;
  justify-content: center;
}
.nav_tabel .child1,
.nav_tabel .child3 {
  width: 20% !important;
  display: flex;
  justify-content: center;
}
.nav_tabel .child7 {
  width: 20% !important;
  display: flex;
  justify-content: center;
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
</style>

<style lang="scss" scoped>
.md-field {
  max-width: 300px;
}
</style>