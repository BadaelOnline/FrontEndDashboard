<template>
  <div class="parent">
    <div class="child1">{{ id }}</div>
    <div class="child2">
       <div class="imag">
        <div v-for="im in offer_image" :key="im.pr">
          <img v-if="im.is_cover == 'cover'" :src="`http://edalili.e-dalely.com/public/${im.image}`" />
        </div>
      </div>
    </div>
    <div class="child3">{{ selling_price }}</div>
    <div class="child4">{{ price }}</div>
    <div class="child5">{{ quantity }}</div>
    <div class="child8">
      {{ started_at }}
      <div class="time-to-end">
        <span class="day">{{Day}}</span>
        <span class="hours">{{hours}}</span>
        <span class="minutes">{{minutes}}</span>
        <span class="seconds">{{seconds}}</span>
      </div>
      </div>
    <div class="child9">{{ ended_at }}</div>
    <div
      class="child6"
      v-if="is_active"
      @click="statusOffer(id)"
      style="cursor:pointer;"
    >
      <i
        v-if="is_active == 'Active'"
        :id="`Active${id}`"
        class="fa fa-check"
        style="color: green;padding:10px"
      ></i>
      <i
        v-else
        :id="`NonActive${id}`"
        class="fa fa-times"
        style="color: #f20b07;padding:10px"
      ></i>
    </div>
    <div class="child6" v-else>
      Active key doesnt exist
    </div>
    <div class="child7">
      <div class="delet">
        <router-link
          :to="{ path: `/admin/editOffer/${id}`, params: { id: id } }"
        >
          <button :data-background-color="'blue'">
            <i class="fas fa-edit"></i>
          </button>
        </router-link>
      </div>
      <div
        @click="deletOffer(id)"
        class="delet"
        :class="{ non_active_delete: is_active != 'Active' }"
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
import { mapState } from "vuex";
export default {
  data() {
    return {
      deleted: null,
      Massage_success: "",
      Massage_warning: "",
      Day:0,
      hours:0,  
      minutes:0,
      seconds:0,
    };
  },
  //
  // :section="item.section"
  // :slug="item.slug"
  //
  props: [
    "id",
    "started_at",
    "offer_image",
    "ended_at",
    "is_active",
    "price",
    "selling_price",
    "quantity",

  ],
    computed: {
    ...mapState({
      Offers: (state) => state.All.Offers,
    }),
    },
    mounted(){
  let countDate = new Date(this.ended_at).getTime();
      let counter = setInterval(() => {
        let DateNow = new Date().getTime();
        let DifDate = countDate - DateNow;
        // get time 
       let Da = Math.floor(DifDate / (1000 * 60 * 60 * 24));
       let hou = Math.floor((DifDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ));
       let men = Math.floor((DifDate % (1000 * 60 * 60)) / (1000 * 60 ));
       let sec = Math.floor((DifDate % (1000 * 60 )) / (1000 ));

  this.Day = Da;
  this.hours = hou;
  this.minutes = men < 10? `0${men}`: men;
  this.seconds = sec < 10? `0${sec}`: sec;
        if(DifDate < 0){
      clearInterval(counter);
       this.Day=0;
        this.hours=0;
        this.minutes=0;
        this.seconds=0;
      }
      }, 1000);
     
    },
  methods: {
    
    close() {
      document.getElementById(`m${this.id}`).classList.toggle("cvs");
    },
    deletOffer(i) {
      var self = this;
      if (this.is_active == "Not Active") {
        this.Massage_warning =
          "You cannot delete this item because it has already been deleted. If you want to restore it, click on the status of the item";
        document.getElementById(`m${i}`).classList.toggle("cvs");
      } else {
        var r = confirm(`Are you sure you want to delete Offer id ${i}`);
        if (r == true) {
          document.getElementById(`sp${i}`).classList.toggle("cvs");
          axios
            .put(`/api/offer/trash/${this.id}`)
            .then(function(response) {
              if (response.statusText == "OK") {
                self.Massage_success = "Success Item Delete";
                document.getElementById(`sp${i}`).classList.toggle("cvs");
                document.getElementById(`s${i}`).classList.toggle("cvs");
                setTimeout(() => {
                  document.getElementById(`s${i}`).classList.toggle("cvs");
                }, 3000);
                self.$store.dispatch("loadCategories");
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
                self.Massage_warning = ` error !! Sorry we will work for this error soon `;
                document.getElementById(`m${i}`).classList.toggle("cvs");
              }
            })
            .catch(function(error) {
              if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                // console.log(error.response.headers);
                document.getElementById(`sp${i}`).classList.toggle("cvs");
                self.Massage_warning = ` error !! Sorry we will work for this error soon `;
                document.getElementById(`m${i}`).classList.toggle("cvs");
              }
            });
        }
      }
    },
    statusOffer(i) {
      var self = this;
      if (this.is_active == "Active") {
        this.Massage_warning =
          "Sorry, this active item cannot be restored. Please choose Delete Item on the right side";
        document.getElementById(`m${i}`).classList.toggle("cvs");
      } else {
        let res = confirm(`Are you sure you want to restore Offer id ${i}`);
        if (res) {
          document.getElementById(`sp${i}`).classList.toggle("cvs");
          axios
            .put(`/api/offer/restoretrashed/${this.id}`)
            .then(function(response) {
              if (response.statusText == "OK") {
                document.getElementById(`sp${i}`).classList.toggle("cvs");
                console.log(response.statusText);
                self.Massage_success = "Success Item Restore Delete";
                document.getElementById(`s${i}`).classList.toggle("cvs");
                setTimeout(() => {
                  document.getElementById(`s${i}`).classList.toggle("cvs");
                }, 3000);
                self.$store.dispatch("loadOffers");
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
                // console.log(error.response.status);
                // console.log(error.response.headers);
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
  opacity: 0.9;
  font-weight: bold;
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
  opacity: 0.9;
  font-weight: bold;
}
.cvs {
  visibility: visible !important;
}
.parent .child1 {
  width: 10% !important;
  display: flex;
  text-align: center;
  justify-content: center;
  margin: auto;
}
.parent .child2,
.parent .child3,
.parent .child4,
.parent .child5,
.parent .child6,
.parent .child7,
.parent .child8, 
.parent .child9 {
  width: 20% !important;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: center;
  font-weight: 700;
}
.parent .child8{
  position: relative;
}
.parent .child8 .time-to-end{
  position: absolute;
  top: -26px;
  right: -118px;
  display: flex;
  justify-content: space-between;
}
.parent .child8 .time-to-end span{
  margin: 0 5px;
  opacity: .6; 
  position: relative;
  width: 50px;
}
.time-to-end .day::after{
  content: 'Day';
  position: absolute;
  top: -20px;
  left:50%;
  font-size: 12px;
  transform: translateX(-50%);
}
.time-to-end .hours::after{
  content: 'hours';
  position: absolute;
  top: -20px;
  font-size: 12px;
  transform: translateX(-50%);
  left: 50%;
}
.time-to-end .minutes::after{
  content: 'minutes';
  position: absolute;
  top: -20px;
  font-size: 12px;
  transform: translateX(-50%);
  left: 50%;
}
.time-to-end .seconds::after{
  content: 'seconds';
  position: absolute;
    top: -20px;
  font-size: 12px;
  transform: translateX(-50%);
  left: 50%;
}
.parent .child3 {
  text-decoration-line: line-through;
  opacity: 0.8;
  color: rgb(236, 69, 69);
}
.parent .child7 {
  gap: 10px;
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
