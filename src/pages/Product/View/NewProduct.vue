<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-90">
        <CreateProductForm data-background-color="green"> </CreateProductForm>
      </div>
    </div>
  </div>
</template>

<script>
import { CreateProductForm } from "@/pages";

export default {
  name: "NewProduct",
  components: {
    CreateProductForm,
  },
};
</script>
