<template>
  <form class="login-form">
    <ion-item lines="full">
      <ion-label position="floating">Email</ion-label>
      <ion-input v-model="email" type="text" required></ion-input>
    </ion-item>
    <ion-item lines="full">
      <ion-label position="floating">Password</ion-label>
      <ion-input v-model="password" type="password" required></ion-input>
    </ion-item>
    <ion-button expand="block" color="app-red" @click="executeLogin(email, password)" > Log In</ion-button>
  </form>
</template>

<script lang="ts">
import { IonLabel, IonInput, IonButton, IonItem } from '@ionic/vue';

export default {
  name: 'LoginForm',
  components: { IonLabel, IonInput, IonButton, IonItem},
  props: {
    executeLogin: Function
  },
  setup() {
    const email = '';
    const password = '';
    return {email, password}
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  text-align: center;
  margin: auto;
  width: 80%;
  
  ion-button {
    margin-top: 2rem;
  }
}
</style>