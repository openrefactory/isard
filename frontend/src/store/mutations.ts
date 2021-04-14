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
  CHANGE_MENU_STATIC_ACTIVE = 'CHANGE_MENU_STATIC_INACTIVE',
  SET_NAVIGATION_DATA = 'SET_NAVIGATION_DATA',
  LOAD_ITEM = 'LOAD_ITEM',
  ACTIVATE_EDIT_MODE = 'ACTIVATE_EDIT_MODE',
  END_EDIT_MODE = 'END_EDIT_MODE',
  ACTIVATE_CREATE_MODE = 'ACTIVATE_CREATE_MODE',
  END_CREATE_MODE = 'END_CREATE_MODE',
  START_LOADING = 'START_LOADING',
  STOP_LOADING = 'STOP_LOADING',
  CHANGE_DESKTOP_STATE = 'CHANGE_DESKTOP_STATE'
}

export type Mutations<S = State> = {
  [MutationTypes.LOAD_LIST_ITEMS](state: S, payload: Types.User[]): void;
  [MutationTypes.SET_LOGIN_DATA](
    state: S,
    payload: { token: string; userId: string }
  ): void;
  [MutationTypes.LOGOUT](state: S, payload: {}): void;
  [MutationTypes.TOGGLE_MENU](state: S, payload: {}): void;
  [MutationTypes.CHANGE_MENU_TYPE](state: S, payload: string): void;
  [MutationTypes.CHANGE_MENU_COLOR_MODE](state: S, payload: string): void;
  [MutationTypes.CHANGE_MENU_OVERLAY_ACTIVE](state: S, payload: boolean): void;
  [MutationTypes.CHANGE_MENU_MOBILE_ACTIVE](state: S, payload: boolean): void;
  [MutationTypes.CHANGE_MENU_STATIC_ACTIVE](state: S, payload: boolean): void;
  [MutationTypes.SET_NAVIGATION_DATA](
    state: S,
    payload: { routeName: string; section: string }
  ): void;
  [MutationTypes.LOAD_ITEM](state: S, payload: { item: any }): void;
  [MutationTypes.ACTIVATE_EDIT_MODE](state: S, payload: {}): void;
  [MutationTypes.END_EDIT_MODE](state: S, payload: {}): void;
  [MutationTypes.ACTIVATE_CREATE_MODE](state: S, payload: {}): void;
  [MutationTypes.END_CREATE_MODE](state: S, payload: {}): void;
  [MutationTypes.START_LOADING](state: S, payload: {}): void;
  [MutationTypes.STOP_LOADING](state: S, payload: {}): void;
  [MutationTypes.CHANGE_DESKTOP_STATE](
    state: S,
    payload: { uuid: string; state: string }
  ): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.LOAD_LIST_ITEMS](state: State, payload) {
    state.search = payload;
  },
  [MutationTypes.SET_LOGIN_DATA](state: State, payload) {
    state.auth.token = payload.token;
    state.auth.loggedIn = true;
    state.auth.user.id = payload.userId;
  },
  [MutationTypes.LOGOUT](state: State, payload) {
    state.auth.token = '';
    state.auth.user = {
      // userName: '',
      email: '',
      name: '',
      surname1: '',
      surname2: '',
      state: '',
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
  [MutationTypes.CHANGE_MENU_STATIC_ACTIVE](state: State, payload) {
    state.ui.menu.staticActive = payload;
  },
  [MutationTypes.SET_NAVIGATION_DATA](state: State, payload) {
    state.router.routeName = payload.routeName;
    state.router.section = payload.section;
  },
  [MutationTypes.LOAD_ITEM](state: State, payload) {
    state.detail = payload;
  },
  [MutationTypes.ACTIVATE_EDIT_MODE](state: State, payload) {
    state.ui.editMode = true;
  },
  [MutationTypes.END_EDIT_MODE](state: State) {
    state.ui.editMode = false;
  },
  [MutationTypes.ACTIVATE_CREATE_MODE](state: State, payload) {
    state.ui.createMode = true;
  },
  [MutationTypes.END_CREATE_MODE](state: State) {
    state.ui.createMode = false;
  },

  [MutationTypes.START_LOADING](state: State) {
    state.ui.isLoading = true;
  },

  [MutationTypes.STOP_LOADING](state: State) {
    state.ui.isLoading = false;
  },
  [MutationTypes.CHANGE_DESKTOP_STATE](state: State, payload) {
    // const item = state.search.find((item) => item.uuid === payload.uuid);
    state.search.find((item) => item.uuid === payload.uuid).state =
      payload.state;
  }
};
