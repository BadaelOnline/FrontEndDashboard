<template>
  <div class="content">
    <form>
      <md-card>
        <md-card-header :data-background-color="'green'">
          <h4 class="title">Custome</h4>

          <p class="category">All Custome</p>

          <div class="new_product">
            <router-link :to="`custome/create`"
              ><button>
                <i class="fa fa-plus"></i> &nbsp;&nbsp;New Custome
              </button></router-link
            >
          </div>
        </md-card-header>

        <md-card-content>
          <!-- nav detalis products -->
          <div class="md-layout">
            <div class="md-layout-item md-small-size-100 md-size-20">
              <md-field>
                <label>id</label>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-20">
              <md-field>
                <label>name</label>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-40">
              <md-field>
                <label>Value</label>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-20">
              <md-field>
                <label>Edit</label>
              </md-field>
            </div>
          </div>
          <!-- loop products -->
          <custome
            v-for="items in Custome"
            :key="items.pr"
            :id="items.id"
            :name="items.name"
            :description="items.description"
          />
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>
import { custome } from "@/pages";
import { mapState } from "vuex";
// import { mapState } from "vuex";

export default {
  name: "CustomeFeilds",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  components: {
    custome,
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

<style>
.new_product {
  margin: 5px 0;
}
.new_product button {
  border: none;
  background-color: #4e9952;
  padding: 10px;
  color: #fff;
  border-radius: 5%;
  cursor: pointer;
}
</style>
