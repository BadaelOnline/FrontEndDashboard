<template>
  <div class="content">
    <form>
      <md-card>
        <md-card-header>
          <h4 class="title">Categories</h4>

          <p class="category">All your Categories</p>

          <div class="new_product">
            <router-link :to="`category/create`"
              ><md-button :data-background-color="'blue'" class="md-primary"
                ><i class="fa fa-plus" style="margin: 0 10px;"></i>New
                Categories</md-button
              >
              <!-- <button>
                <i class="fa fa-plus"></i> &nbsp;&nbsp;New Categories
              </button> -->
            </router-link>
            <!-- <md-field md-clearable class="md-toolbar-section-end">
              <md-input
                placeholder="Search by name..."
                v-model="search"
                @input="searchOnTable"
              />
            </md-field> -->
            <md-field md-clearable class="md-toolbar-section-end">
              <md-input placeholder="Search by name..." />
            </md-field>
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
            <div class="md-layout-item md-small-size-100 md-size-10">
              <md-field>
                <label>Section</label>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-10">
              <md-field>
                <label>Status</label>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-20">
              <md-field>
                <label>Action</label>
              </md-field>
            </div>
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
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Categories from "../component/Categories.vue";
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
  components: { Categories },
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
  },
  created() {
    this.searched = this.Categories;
  },
};
</script>

<style scoped>
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
