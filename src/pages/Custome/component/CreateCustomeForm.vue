<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">New Custome</h4>

        <p class="category">Complete your profile</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Name</label>
              <md-input v-model="stores.store[1].title"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-button data-background-color="green" @click="postStore()"
              >Add</md-button
            >
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  name: "CreateStoreForm",
  components: {},
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      stores: {
        store: [
          {
            local: "ar",
            title: "باسل",
          },
          {
            local: "en",
            title: null,
          },
          {
            local: "fr",
            title: "basel",
          },
        ],
        loc_id: "1",
        country_id: "1",
        gov_id: "1",
        city_id: "1",
        street_id: "1",
        offer_id: "1",
        socialMedia_id: "1",
        followers_id: "1",
        is_active: 1,
        is_approved: 1,
        delivery: 1,
        edalilyPoint: "edalilyPoint",
        rating: "rating",
        workingHours: "workingHours",
        logo: "mobiles",
      },
    };
  },
  postStore() {
    axios.post("/api/stores/create", this.stores);

    console.log(JSON.stringify(this.stores));
  },
  computed: {
    ...mapState({
      Custome: (state) => state.All.Custome,
    }),
  },
  mounted() {
    this.$store.dispatch("loadCustome");
  },
};
</script>
