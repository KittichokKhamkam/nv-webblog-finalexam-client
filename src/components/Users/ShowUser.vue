<template>
  <div>
    <h1>Show User</h1>
    <p>model: {{ speaker.model }}</p>
      <p>brand: {{ speaker.brand }}</p>
      <p>watt: {{ speaker.watt }}</p>
      <p>power_input: {{ speaker.power_input }}</p>
  </div>
</template>
<script>
import UserService from "@/services/UserService";

export default {
  data() {
    return {
      speaker: null
    };
  },
  async created() {
    let userId = this.$route.params.speakerId;
    this.user = (await UserService.show(speakerId)).data
    console.log(this.speakerId)
  }
};
</script>
<style scoped></style>
