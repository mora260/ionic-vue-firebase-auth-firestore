<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <ExploreContainer name="Tab 1 page" />

      <ion-button expand="block" color="dark" @click="logOut"> Log Out </ion-button>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { FirebaseAuthentication } from '@/firebase';
import { useRouter } from 'vue-router';

export default  {
  name: 'Tab1',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton },
  setup() {
    const router = useRouter();
    const logOut = () => {
      FirebaseAuthentication.signOut().then(
        () => {
          router.push({name: 'Login'});
        }
      )
    }
    return {router, logOut}
  }
}
</script>