<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-90">
        <EditProductForm data-background-color="green"> </EditProductForm>
      </div>
    </div>
  </div>
</template>

<script>
import { EditProductForm } from "@/pages";

export default {
  name: "EditProduct",
  components: {
    EditProductForm,
  },
};
</script>
