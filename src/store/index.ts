import userModule from './modules/user';
import { createStore } from 'vuex'

const store = createStore({
  modules: {
    user: userModule
  }
});
 
export default store;