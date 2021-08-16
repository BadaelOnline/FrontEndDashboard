<template>
  <div class="content">
    <form>
      <md-card>
        <md-card-header :data-background-color="'green'">
          <h4 class="title">loadSections</h4>

          <p class="category">All your Sections</p>

          <div class="new_product">
            <router-link :to="`newsection`"
              ><button>
                <i class="fa fa-plus"></i> &nbsp;&nbsp;New Section
              </button></router-link
            >
          </div>
        </md-card-header>

        <md-card-content>
          <!-- nav detalis products -->
          <div class="md-layout">
            <div class="md-layout-item md-small-size-100 md-size-10">
              <md-field>
                <label>Id</label>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-20">
              <md-field>
                <label>Img</label>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-20">
              <md-field>
                <label>Name</label>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-20">
              <md-field>
                <label>Action</label>
              </md-field>
            </div>
          </div>
          <!-- loop products -->
          <Section
            v-for="items in sections"
            :key="items.pr"
            :id="items.id"
            :name="items.name"
            :image="items.image"
            style="margin: 10px 0"
          >
          </Section>
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Section from "../component/Section.vue";
export default {
  name: "allSection",
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
