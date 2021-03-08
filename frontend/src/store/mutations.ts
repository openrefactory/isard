import { MutationTree } from 'vuex';
import { State } from './state';

export enum MutationTypes {
  LOAD_LIST_ITEMS = 'LOAD_LIST_ITEMS',
  SET_LOGIN_DATA = 'SET_LOGIN_DATA',
  LOGOUT = 'LOGOUT',
  TOGGLE_MENU = 'TOGGLE_MENU',
  CHANGE_MENU_TYPE = 'CHANGE_MENU_TYPE',
  CHANGE_MENU_COLOR_MODE = 'CHANGE_MENU_COLOR_MODE',
  CHANGE_MENU_OVERLAY_ACTIVE = 'CHANGE_MENU_OVERLAY_ACTIVE',
  CHANGE_MENU_MOBILE_ACTIVE = 'CHANGE_MENU_MOBILE_ACTIVE',
  CHANGE_MENU_STATIC_INACTIVE = 'CHANGE_MENU_STATIC_INACTIVE',
  CHANGE_SECTION = 'CHANGE_SECTION',
  GET_ITEM = 'MutationTypes.GET_ITEM'
}

export type Mutations<S = State> = {
  [MutationTypes.LOAD_LIST_ITEMS](state: S, payload: Types.User[]): void;
  [MutationTypes.SET_LOGIN_DATA](state: S, payload: { token: string }): void;
  [MutationTypes.LOGOUT](state: S, payload: {}): void;
  [MutationTypes.TOGGLE_MENU](state: S, payload: {}): void;
  [MutationTypes.CHANGE_MENU_TYPE](state: S, payload: string): void;
  [MutationTypes.CHANGE_MENU_COLOR_MODE](state: S, payload: string): void;
  [MutationTypes.CHANGE_MENU_OVERLAY_ACTIVE](state: S, payload: boolean): void;
  [MutationTypes.CHANGE_MENU_MOBILE_ACTIVE](state: S, payload: boolean): void;
  [MutationTypes.CHANGE_MENU_STATIC_INACTIVE](state: S, payload: boolean): void;
  [MutationTypes.CHANGE_SECTION](state: S, payload: { section: string }): void;
  [MutationTypes.GET_ITEM](state: S, payload: { item: any }): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.LOAD_LIST_ITEMS](state: State, payload) {
    state.search = payload;
  },
  [MutationTypes.SET_LOGIN_DATA](state: State, payload) {
    state.auth.token = payload.token;
    state.auth.loggedIn = true;
  },
  [MutationTypes.LOGOUT](state: State, payload) {
    state.auth.token = '';
    state.auth.user = {
      userName: '',
      email: '',
      name: '',
      surname1: '',
      surname2: '',
      status: '',
      organizationId: '',
      roles: [],
      lastAttempt: '',
      creationDate: '',
      uuid: '',
      id: '',
      avatar: '',
      profile: ''
    };
    state.auth.loggedIn = false;
  },
  [MutationTypes.TOGGLE_MENU](state: State, payload) {
    state.ui.menu.show = !state.ui.menu.show;
  },
  [MutationTypes.CHANGE_MENU_TYPE](state: State, payload) {
    state.ui.menu.type = payload;
  },
  [MutationTypes.CHANGE_MENU_COLOR_MODE](state: State, payload) {
    state.ui.menu.colorMode = payload;
  },
  [MutationTypes.CHANGE_MENU_OVERLAY_ACTIVE](state: State, payload) {
    state.ui.menu.overlayActive = payload;
  },
  [MutationTypes.CHANGE_MENU_MOBILE_ACTIVE](state: State, payload) {
    state.ui.menu.mobileActive = payload;
  },
  [MutationTypes.CHANGE_MENU_STATIC_INACTIVE](state: State, payload) {
    state.ui.menu.staticInactive = payload;
  },
  [MutationTypes.CHANGE_SECTION](state: State, payload) {
    state.router.section = payload.section;
  },
  [MutationTypes.GET_ITEM](state: State, payload) {
    state.detail = payload;
  }
};
