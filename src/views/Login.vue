<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Login</ion-title>
        </ion-toolbar>
      </ion-header>
      <LoginForm :executeLogin="loginAction"/>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import LoginForm from '@/components/LoginForm.vue';
import { useRouter } from 'vue-router';

import {defineComponent} from 'vue'
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'Login',
  components: { LoginForm, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    const name = 'Login';
    const router = useRouter();
    return { router, name };
  },
  methods: {
    async loginAction(payload: {email: string; password: string}) {
      const loginResult = await this.logInUser(payload);
      if ( loginResult ) {
        this.router.push({name: 'Tab1'})
      }
    },
    ...mapActions('user', {logInUser: 'logInUser'})
  }
})
</script>