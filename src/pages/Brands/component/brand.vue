<template>
  <div class="parent">
    <div class="child1">{{ id }}</div>
    <div class="child2">
      <div class="imag">
        <img :src="image" />
      </div>
    </div>
    <div class="child3">{{ name }}</div>
    <div class="child5">{{ description }}</div>
    <div class="child6" @click="statusBrand(id)" style="cursor:pointer;">
      <i
        v-if="is_active == true"
        :id="`Active${id}`"
        class="fa fa-check"
        style="color: green;"
      ></i>
      <i
        v-else
        :id="`NonActive${id}`"
        class="fa fa-times"
        style="color: #f20b07;"
      ></i>
    </div>
    <!-- <div class="child6" v-else>
      Active key doesnt exist
    </div> -->
    <div class="child7">
      <router-link :to="{ path: `brand/update/${id}`, params: { id: id } }">
        <button :data-background-color="'blue'">
          <i class="fas fa-edit"></i>
        </button>
      </router-link>
      <div
        @click="deletBrand(id)"
        class="delet"
        :class="{ non_active_delete: !is_active }"
      >
        <i class="fa fa-trash"></i>
      </div>
    </div>

    <div :id="`s${id}`" class="alert alert-success" role="alert">
      {{ Massage_success }} .
    </div>
    <svg
      :id="`sp${id}`"
      class="spinner"
      width="65px"
      height="65px"
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        class="path"
        fill="none"
        stroke-width="6"
        stroke-linecap="round"
        cx="33"
        cy="33"
        r="30"
      ></circle>
    </svg>
    <div
      :id="`m${id}`"
      class="alert alert-danger alert-dismissible fade show"
      role="alert"
      @click="close()"
      style="cursor:pointer"
    >
      {{ Massage_warning }} .
      <!-- <button
        type="button"
        class="btn-close"
        @click="close()"
        aria-label="Close"
      ></button> -->
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "brands",
  data() {
    return {
      deleted: null,
      Massage_success: "",
      Massage_warning: "",
    };
  },
  props: ["id", "name", "image", "is_active", "description"],
  methods: {
    close() {
      document.getElementById(`m${this.id}`).classList.toggle("cvs");
    },
    deletBrand(i) {
      var self = this;
      if (this.is_active == false) {
        this.Massage_warning =
          "You cannot delete this item because it has already been deleted. If you want to restore it, click on the status of the item";
        document.getElementById(`m${i}`).classList.toggle("cvs");
      } else {
        var r = confirm(`Are you sure you want to delete Brand id ${i}`);
        if (r == true) {
          document.getElementById(`sp${i}`).classList.toggle("cvs");
          axios
            .put(`/api/brands/trash/${this.id}`)
            .then(function(response) {
              if (response.statusText == "OK") {
                self.Massage_success = "Success Item Delete";
                document.getElementById(`sp${i}`).classList.toggle("cvs");
                document.getElementById(`s${i}`).classList.toggle("cvs");
                setTimeout(() => {
                  document.getElementById(`s${i}`).classList.toggle("cvs");
                }, 3000);
                self.$store.dispatch("loadBrands");
                setTimeout(() => {
                  document
                    .getElementById(`NonActive${i}`)
                    .classList.add("anim");
                }, 3000);
                setTimeout(() => {
                  document
                    .getElementById(`NonActive${i}`)
                    .classList.remove("anim");
                }, 7500);
              } else {
                document.getElementById(`sp${i}`).classList.toggle("cvs");
                this.Massage_warning = ` error !! Sorry we will work for this error soon `;
                document.getElementById(`m${i}`).classList.toggle("cvs");
              }
            })
            .catch(function(error) {
              if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                // console.log(error.response.headers);
                document.getElementById(`sp${i}`).classList.toggle("cvs");
                this.Massage_warning = ` error !! Sorry we will work for this error soon `;
                document.getElementById(`m${i}`).classList.toggle("cvs");
              }
            });
        }
      }
    },
    statusBrand(i) {
      var self = this;
      if (this.is_active == true) {
        this.Massage_warning =
          "Sorry, this active item cannot be restored. Please choose Delete Item on the right side";
        document.getElementById(`m${i}`).classList.toggle("cvs");
      } else {
        let res = confirm(`Are you sure you want to restore Brand id ${i}`);
        if (res) {
          document.getElementById(`sp${i}`).classList.toggle("cvs");
          axios
            .put(`/api/brands/restoreTrashed/${this.id}`)
            .then(function(response) {
              if (response.statusText == "OK") {
                document.getElementById(`sp${i}`).classList.toggle("cvs");
                console.log(response.statusText);
                self.Massage_success = "Success Item Restore Delete";
                document.getElementById(`s${i}`).classList.toggle("cvs");
                setTimeout(() => {
                  document.getElementById(`s${i}`).classList.toggle("cvs");
                }, 3000);
                self.$store.dispatch("loadBrands");
                setTimeout(() => {
                  document.getElementById(`Active${i}`).classList.add("anim");
                }, 3000);
                setTimeout(() => {
                  document
                    .getElementById(`Active${i}`)
                    .classList.remove("anim");
                }, 7500);
              }
            })
            .catch(function(error) {
              if (error.response) {
                console.log(error.response.data);
                document.getElementById(`sp${i}`).classList.toggle("cvs");
                self.Massage_warning = error.response.data.message;
                document.getElementById(`m${i}`).classList.toggle("cvs");
              }
            });
        }
      }
      //
    },
  },
};
</script>
<style scoped>
.anim {
  animation: mymove 1.5s infinite;
  border-radius: 50%;
}
@keyframes mymove {
  50% {
    background-color: darkgreen;
    color: #fff;
    box-shadow: 2px 2px 20px darkgreen;
  }
}
.parent {
  display: flex;
  justify-content: space-around;
  position: relative;
  width: 100%;
  border-bottom: 10px solid #eee;
}
.alert-danger {
  position: absolute !important;
  width: 100%;
  height: 100%;
  visibility: hidden;
  display: flex;
  justify-content: center;
  font-size: 20px;
  align-items: center;
}
.alert-success {
  visibility: hidden;
  position: absolute !important;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  font-size: 20px;
}
.cvs {
  visibility: visible !important;
}

.parent .child5,
.parent .child8 {
  width: 20% !important;
  display: block;
  justify-content: center;
  text-align: center;
  margin: auto;
  opacity: 0.7;
}
.parent .child8 {
  border: 1px #36bdca solid;
  background: #fefefe;
  overflow-y: auto;
  overflow-x: hidden;
  height: 80px;
  scrollbar-color: #6969dd #e0e0e0;
  scrollbar-width: thin;
}
.parent .child8::-webkit-scrollbar {
  width: 10px;
}

.parent .child8::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 100px;
}
.parent .child8::-webkit-scrollbar-thumb {
  border-radius: 100px;
  background-image: linear-gradient(180deg, #36bdca 0%, #708ad4 99%);
  box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
}
.parent .child6 {
  width: 30% !important;
  display: flex;
  justify-content: center;
  margin: auto;
  opacity: 0.7;
}
.parent .child2 {
  width: 30% !important;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
.parent .child1 {
  font-weight: 700;
}
.parent .child1,
.parent .child3,
.parent .child4 {
  width: 20% !important;
  display: flex;
  justify-content: center;
  margin: auto;
  opacity: 0.7;
}
.parent .child3 {
  font-weight: 600;
}
.parent .child7 {
  width: 20% !important;
  display: flex;
  justify-content: center;
  margin: auto;
}
.parent .child7 button {
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 5px;
}
.parent .child2 .imag {
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: auto;
  border-radius: 3px;
}
.parent .child2 .imag img {
  width: 95%;
  height: 95%;
  align-items: center;
  border-radius: 0;
  border-radius: 3px;
}
.delet {
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
  justify-content: center;
  border-radius: 5px;
  margin-top: 8px;
  background-color: #e8403c !important;
  color: #fff;
}
.non_active_delete {
  background-color: #ddd !important;
  cursor: default !important;
}
</style>
<style lang="scss" scoped>
$offset: 187;
$duration: 1.4s;

.spinner {
  animation: rotator $duration linear infinite;
  position: absolute;
  z-index: 50;
  visibility: hidden;
}
.spin-hide {
  display: none;
}
@keyframes rotator {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(270deg);
  }
}

.path {
  stroke-dasharray: $offset;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: dash $duration ease-in-out infinite,
    colors ($duration * 4) ease-in-out infinite;
}

@keyframes colors {
  0% {
    stroke: #4285f4;
  }
  25% {
    stroke: #de3e35;
  }
  50% {
    stroke: #f7c223;
  }
  75% {
    stroke: #1b9a59;
  }
  100% {
    stroke: #4285f4;
  }
}

@keyframes dash {
  0% {
    stroke-dashoffset: $offset;
  }
  50% {
    stroke-dashoffset: $offset/4;
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: $offset;
    transform: rotate(450deg);
  }
}
</style>
