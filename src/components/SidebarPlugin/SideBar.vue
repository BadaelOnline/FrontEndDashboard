<template>
  <div
    class="sidebar"
    :data-color="sidebarItemColor"
    :data-image="sidebarBackgroundImage"
    :style="sidebarStyle"
  >
    <div class="logo">
      <a href="#" class="simple-text logo-mini">
        <img src="../../../public/img/Group.png" height="50" />
      </a>

      <a
        href="http://front.e-dalely.com"
        target="_blank"
        class="simple-text logo-normal"
      >
        E _ daliliy
      </a>
    </div>
    <!-- <div class="customer-select cu5">
      <h5>choose server</h5>
      <select v-model="server" @change="handleserver($event)">
        <option value="edalily">edalily</option>
        <option value="admin">admin</option>
      </select>
    </div> -->
    <div class="sidebar-wrapper">
      <slot name="content"></slot>
      <md-list class="nav">
        <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
        <slot>
          <sidebar-link
            v-for="(link, index) in sidebarLinks"
            :key="link.name + index"
            :to="link.path"
            :link="link"
          >
          </sidebar-link>
        </slot>
      </md-list>
    </div>
  </div>
</template>
<script>
import SidebarLink from "./SidebarLink.vue";

export default {
  data() {
    // const server = localStorage.getItem("server") || "edalily";
    return {
      // server: server,
    };
  },
  components: {
    SidebarLink,
  },
  props: {
    title: {
      type: String,
      default: "Vue MD",
    },
    sidebarBackgroundImage: {
      type: String,
      default: require("@/assets/img/sidebar-2.jpg"),
    },
    imgLogo: {
      type: String,
      default: require("@/assets/img/vue-logo.png"),
    },
    sidebarItemColor: {
      type: String,
      default: "green",
      validator: (value) => {
        let acceptedValues = ["", "purple", "blue", "green", "orange", "red"];
        return acceptedValues.indexOf(value) !== -1;
      },
    },
    sidebarLinks: {
      type: Array,
      default: () => [],
    },
    autoClose: {
      type: Boolean,
      default: true,
    },
  },
  provide() {
    return {
      autoClose: this.autoClose,
    };
  },
  computed: {
    sidebarStyle() {
      return {
        backgroundImage: `url(${this.sidebarBackgroundImage})`,
      };
    },
  },
  methods: {
    handleserver(event) {
      localStorage.setItem("server", event.target.value);
      window.location.reload();
    },
  },
};
</script>
<style>
@media screen and (min-width: 991px) {
  .nav-mobile-menu {
    display: none;
  }
}
.sidebar {
  overflow: hidden;
}
.cu5 {
  position: fixed;
  z-index: 10;
}
</style>
