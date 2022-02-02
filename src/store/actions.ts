import { ActionContext } from 'vuex'
import { Login } from "../function/Login"
import { Mutations } from "./mutations"
import { State } from './state'

export enum ActionTypes {
    LOGIN = 'LOGIN',
}

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
    [ActionTypes.LOGIN](
        { commit }: AugmentedActionContext,
        payload: number
    ): Promise<number>
}

export const actions = {
    [ActionTypes.LOGIN]({ commit }, { userID, userPsd }) {
        return Login(userID, userPsd)
            .then(data => {
                const status = data.status;
                const cookie = data.cookie;
                commit('LOGIN_CHECK', { status, cookie });
                return status;
            }).catch(_ => {
                return 3;
            })
    },
}