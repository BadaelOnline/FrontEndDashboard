<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-100">
        <CreateCustomeForm data-background-color="green"> </CreateCustomeForm>
      </div>
    </div>
  </div>
</template>

<script>
import { CreateCustomeForm } from "@/pages";

export default {
  name: "NewCustome",
  components: {
    CreateCustomeForm,
  },
};
</script>
