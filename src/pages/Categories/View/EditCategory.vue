<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-90">
        <EditCategoriesForm data-background-color="green"> </EditCategoriesForm>
      </div>
    </div>
  </div>
</template>

<script>
import { EditCategoriesForm } from "@/pages";

export default {
  name: "EditCategory",
  components: {
    EditCategoriesForm,
  },
};
</script>
