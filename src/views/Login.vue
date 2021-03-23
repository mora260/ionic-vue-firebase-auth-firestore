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
import { FirebaseAuthentication } from '@/firebase';
import { useRouter } from 'vue-router';

export default ({
  name: 'Login',
  components: { LoginForm, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    const name = 'Login';
    const router = useRouter();
    const loginAction = (email: string, password: string) => {
      FirebaseAuthentication.signInWithEmailAndPassword(
        email,
        password
      ).then( () => {
        // TODO setup user in vuex store
        router.push({name: 'Tab1'})
      }).catch( err => {
        console.log(err);
      })
    }
    return { router, name, loginAction };
  }
})
</script>