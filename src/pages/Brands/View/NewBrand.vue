<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-90">
        <NewBrandForm data-background-color="green"> </NewBrandForm>
      </div>
    </div>
  </div>
</template>

<script>
import { NewBrandForm } from "@/pages";

export default {
  name: "newbrand",
  components: {
    NewBrandForm,
  },
};
</script>
