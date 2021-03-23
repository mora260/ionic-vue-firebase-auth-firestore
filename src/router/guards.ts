import {FirebaseAuthentication} from '@/firebase';
import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';

export const authGuard = ( to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  // check if user is logged in. If logged in, continue. Else, return to login screen.
  const unsubscribe = FirebaseAuthentication.onAuthStateChanged( user => {
    if (user) {
      // If already logged in, and tries to go to Login, redirect to Tab1
      if (to.name === 'Login') {
        next({name: 'Tab1'})
      } else {
        next();
      }
      unsubscribe();
    } else {
      // If not logged in, and going to Login, ok. If not, redirect to Login.
      if (to.name === 'Login') {
        next();
      } else {
        next({name: 'Login'})
      }
      unsubscribe();
    }
  });  
}