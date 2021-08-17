<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/admin/allproducts">
        <md-icon>person</md-icon>
        <p>All Products</p>
      </sidebar-link>
      <sidebar-link to="/admin/allstores">
        <md-icon>person</md-icon>
        <p>All Stores</p>
      </sidebar-link>
      <sidebar-link to="/admin/allcategories">
        <md-icon>person</md-icon>
        <p>All Categories</p>
      </sidebar-link>
      <sidebar-link to="/admin/allbrands">
        <md-icon>person</md-icon>
        <p>All Brands</p>
      </sidebar-link>
      <sidebar-link to="/admin/allsection">
        <md-icon>person</md-icon>
        <p>All Section</p>
      </sidebar-link>
      <sidebar-link to="/admin/alldoctors" class="disable">
        <md-icon>person</md-icon>
        <p>All Doctors</p>
      </sidebar-link>
      <sidebar-link to="/admin/allrestaurant" class="disable">
        <md-icon>person</md-icon>
        <p>All Restaurant</p>
      </sidebar-link>
      <sidebar-link to="/admin/alloffers">
        <md-icon>person</md-icon>
        <p>All Offers</p>
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
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    FixedPlugin,
  },
  data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg"),
    };
  },
};
</script>

<style scoped>
.disable {
  color: rgb(100, 98, 98);
}
</style>
