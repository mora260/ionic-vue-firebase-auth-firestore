import { FirebaseFirestore, FirebaseAuthentication } from "@/firebase";

interface UserStore {
  uid: string;
  profile: Record<string, any>;
}

const state = () => ({
  uid: '',
  profile: {}
});
 
const getters = {
  getUserId(state: UserStore) {
    return state.uid;
  },
  getProfile(state: UserStore) {
    return state.profile;
  }
};
 
const actions = {
  subscribeToUser( { dispatch }: any) {
    FirebaseAuthentication.onAuthStateChanged( (user) => {
      if (user) {
        // authenticated user found, load data into vuex
        dispatch('setUserId', {uid: user.uid})
      }
    })
  },
  setUserId( { commit, dispatch }: any, payload: any) {
    commit('setUserId', payload.uid);
    dispatch('fetchUserProfile')
  },
  async logInUser( { commit }: any, payload: any) {
    return FirebaseAuthentication.signInWithEmailAndPassword(payload.email, payload.password).then( userCred => {
      const uid = userCred.user?.uid;
      if (uid) {
        commit('setUserId', uid)
        return true;
      } else {
        return false;
      }
    }).catch( err => {
      console.log(`Could not login user. Error: ${err}`)
      return false;
    })
  },
  async fetchUserProfile({ state, commit }: any) {
    FirebaseFirestore.doc(`users/${state.uid}`).get().then( snap => {
      const data = snap.data();
      commit('setUserProfile', data)
    }).catch( err => {
      console.log(`Could not fetch user profile. Error: ${err}`)
    })
  }
};
 
const mutations = {
  setUserId(state: UserStore, uid: string) {
    state.uid = uid
  },
  setUserProfile(state: UserStore, payload: Record<string, any>) {
    state.profile = payload;
  }
};
 
export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}