<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-90">
        <EditBrandForm data-background-color="green"> </EditBrandForm>
      </div>
    </div>
  </div>
</template>

<script>
import { EditBrandForm } from "@/pages";

export default {
  name: "editbrand",
  components: {
    EditBrandForm,
  },
};
</script>
