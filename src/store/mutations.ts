import { MutationTree } from 'vuex'
import { State } from "./state";
export enum MutationTypes {
    LOGIN_CHECK = 'LOGIN_CHECK'
}

export type Mutations<S = State> = {
    [MutationTypes.LOGIN_CHECK](state: S, { status, cookie }): void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.LOGIN_CHECK](state, { status, cookie }) {
        if (status == 0) {
            state.isLogin = true;
            state.loginStatus = 0;
            state.cookie = cookie;
        } else {
            state.loginStatus = status;
        }
    }
}