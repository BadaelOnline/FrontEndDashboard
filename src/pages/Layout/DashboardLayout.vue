<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">

    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <mobile-menu slot="content"></mobile-menu>
      <md-menu
        class="lang"
        md-size="medium"
        :md-offset-x="127"
        :md-offset-y="-36"
      >
        <!-- <md-button md-menu-trigger notifications
          >Languages
      
          <select class="cu_1" v-model="lang" @change="handleChange($event)">
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select>
        </md-button> -->

        <!-- <md-menu-content> -->

        <!-- </md-menu-content> -->
      </md-menu>
      <sidebar-link to="/admin/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/admin/products">
        <md-icon>person</md-icon>
        <p>Products</p>
      </sidebar-link>
      <sidebar-link to="/admin/stores">
        <md-icon>person</md-icon>
        <p>Stores</p>
      </sidebar-link>
      <sidebar-link to="/admin/categories">
        <md-icon>person</md-icon>
        <p>Categories</p>
      </sidebar-link>
      <sidebar-link to="/admin/brands">
        <md-icon>person</md-icon>
        <p>Brands</p>
      </sidebar-link>
      <sidebar-link to="/admin/sections">
        <md-icon>person</md-icon>
        <p>Section</p>
      </sidebar-link>
      <sidebar-link to="/admin/doctors" class="disable">
        <md-icon>person</md-icon>
        <p>Doctors</p>
      </sidebar-link>
      <sidebar-link to="/admin/restaurants" class="disable">
        <md-icon>person</md-icon>
        <p>Restaurant</p>
      </sidebar-link>
      <sidebar-link to="/admin/offers">
        <md-icon>person</md-icon>
        <p>Offers</p>
      </sidebar-link>
      <sidebar-link to="/admin/customefeilds">
        <md-icon>person</md-icon>
        <p>Custome Feilds</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <fixed-plugin
        :color.sync="sidebarBackground"
        :image.sync="sidebarBackgroundImage"
      >
      </fixed-plugin>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
import FixedPlugin from "./Extra/FixedPlugin.vue";

export default {
  data() {
    const lang = localStorage.getItem("lang") || "en";
    return {
      lang: lang,
      sidebarBackground: "blue",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg"),
    };
  },
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    FixedPlugin,
  },
  methods: {
    // handleChange(event) {
    //   localStorage.setItem("lang", event.target.value);
    //   window.location.reload();
    // },
  },
};
</script>

<style scoped>
.disable[data-v-6253ecfd] {
  cursor: default;
  pointer-events: none;
  opacity: 0.3;
}
.lang {
  padding-left: 20px;
}
select {
  border: none;
  background-color: #9d9596;
  color: white;
  padding-left: 20px;
  appearance: none;
  cursor: pointer;
  width: 90px;
}
.md-button .md-button-content {
  cursor: none;
}
</style>
