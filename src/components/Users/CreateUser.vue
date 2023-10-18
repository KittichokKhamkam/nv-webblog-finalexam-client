<template>
  <div>
    <h1>Create speaker</h1>
    <form v-on:submit.prevent="createspeaker">
      <p>model: <input type="text" v-model="speaker.model" /></p>
      <p>brand: <input type="text" v-model="speaker.brand" /></p>
      <p>watt: <input type="text" v-model="speaker.watt" /></p>
      <p>power_input: <input type="text" v-model="speaker.power_input" /></p>
      <p><button type="submit">create user</button></p>
    </form>
    <hr />
    <div>
      <p>model: {{ speaker.model }}</p>
      <p>brand: {{ speaker.brand }}</p>
      <p>watt: {{ speaker.watt }}</p>
      <p>power_input: {{ speaker.power_input }}</p>
    </div>
  </div>
</template>
<script>
import UsersService from "@/services/UserService";

export default {
  data() {
    return {
       Speaker: {
        "model": "STOCKWELL II",
    "brand": "Marshal",
    "watt": "5.0",
    "power_input": 220,
    "status": "not continue",
    "type": "portable"
      }
    };
  },
  methods: {
    async createUser() {
      try {
        await UsersService.post(this.user);
        this.$router.push({
          name: "Speakers"
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style scoped></style>
