import { createStore, Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';
import { State, state } from './state';
import { Mutations, mutations } from './mutations';
import { Actions, actions } from './actions';

export default createStore({
  state,
  mutations,
  actions,
});