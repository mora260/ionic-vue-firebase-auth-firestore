<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Not Found</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Not Found</ion-title>
        </ion-toolbar>
      </ion-header>
      <Container :name="name"/>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import Container from '@/components/Container.vue';

export default  {
  name: 'NotFound',
  components: { Container, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  mounted() {
    console.log('Not found')
  },
  data() {
    return {
      name: '404 - Page Not Found'
    }
  }
}
</script>