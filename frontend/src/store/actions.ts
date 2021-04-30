import { ActionContext, ActionTree } from 'vuex';
import { MutationTypes, Mutations } from './mutations';
import LoginService from '@/service/LoginService';
import SearchService from '@/service/SearchService';
import UserService from '@/service/UserService';
import { State } from './state';
import router from '@/router';
import { store } from '.';
import { sections } from '@/config/sections';
import { DEFAULT_PAGE, ROUTE_CREATE, ROUTE_SEARCH } from '@/config/constants';
import { remove, setCookie } from 'tiny-cookie';
import ConnectionService from '@/service/ConnectionService';

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>;

/* Action Enum*/
export enum ActionTypes {
  DO_LOCAL_LOGIN = 'DO_LOCAL_LOGIN',
  DO_LOGOUT = 'DO_LOGOUT',
  REFRESH_CLIENT_TOKEN = 'REFRESH_CLIENT_TOKEN',
  REFRESH_TOKEN_FROM_SESSION = 'REFRESH_TOKEN_FROM_SESSION',
  SET_NAVIGATION_DATA = 'SET_NAVIGATION_DATA',
  NAVIGATE = 'NAVIGATE',
  DO_SEARCH = 'DO_SEARCH',
  GO_SEARCH = 'GO_SEARCH',
  NAVIGATE_CREATE = 'NAVIGATE_CREATE',
  GO_CREATE_MODE = 'GO_CREATE_MODE',
  NAVIGATE_DETAIL = 'NAVIGATE_DETAIL',
  GET_ITEM = 'GET_ITEM',
  TOGGLE_MENU = 'TOGGLE_MENU',
  CHANGE_MENU_TYPE = 'CHANGE_MENU_TYPE',
  CHANGE_MENU_COLOR_MODE = 'CHANGE_MENU_COLOR_MODE',
  CHANGE_MENU_OVERLAY_ACTIVE = 'CHANGE_MENU_OVERLAY_ACTIVE',
  CHANGE_MENU_MOBILE_ACTIVE = 'CHANGE_MENU_MOBILE_ACTIVE',
  CHANGE_MENU_STATIC_ACTIVE = 'CHANGE_MENU_STATIC_ACTIVE',
  ACTIVATE_EDIT_MODE = 'ACTIVATE_EDIT_MODE',
  END_EDIT_MODE = 'END_EDIT_MODE',
  ACTIVATE_CREATE_MODE = 'ACTIVATE_CREATE_MODE',
  END_CREATE_MODE = 'END_CREATE_MODE',
  SAVE_ITEM = 'SAVE_ITEM',
  SAVE_NEW_ITEM = 'SAVE_NEW_ITEM',
  START_LOADING = 'START_LOADING',
  STOP_LOADING = 'STOP_LOADING',
  START_DESKTOP = 'START_DESKTOP',
  CHANGE_DESKTOP_STATE = 'CHANGE_DESKTOP_STATE',
  SAVE_USER_DATA = 'SAVE_USER_DATA',
  GET_USER_DATA = 'GET_USER_DATA'
}

/* Action Types*/
export interface Actions {
  [ActionTypes.DO_LOCAL_LOGIN](
    { commit }: AugmentedActionContext,
    payload: { usr: string; psw: string; entity: string }
  ): void;

  [ActionTypes.REFRESH_TOKEN_FROM_SESSION](
    { commit }: AugmentedActionContext,
    payload: { token: string; userId: string }
  ): void;

  [ActionTypes.DO_LOGOUT](
    { commit }: AugmentedActionContext,
    payload: {}
  ): void;

  [ActionTypes.DO_SEARCH](
    { commit }: AugmentedActionContext,
    payload: {
      queryParams: string[];
      size: number;
      start: number;
      section?: string;
    }
  ): void;

  [ActionTypes.REFRESH_CLIENT_TOKEN](
    { commit }: AugmentedActionContext,
    payload: {
      token: string;
      userId: string;
    }
  ): void;

  [ActionTypes.SET_NAVIGATION_DATA](
    { commit }: AugmentedActionContext,
    payload: {
      section: string;
      url: string;
      queryParams: string[];
      editmode: boolean;
      params: string[];
      routeName: string;
    }
  ): void;

  [ActionTypes.NAVIGATE](
    { commit }: AugmentedActionContext,
    payload: {
      section: string;
      params: any;
      routeName: string;
      url: string;
      queryParams: string[];
      editMode: boolean;
    }
  ): void;

  [ActionTypes.GO_SEARCH](
    { commit }: AugmentedActionContext,
    payload: {
      section: string;
      url: string;
      queryParams: string[];
      editmode: boolean;
    }
  ): void;

  [ActionTypes.NAVIGATE_DETAIL](
    { commit }: AugmentedActionContext,
    payload: {
      section: string; // TODO: retrieve inside action?
      params: { id: any };
    }
  ): void;

  [ActionTypes.GET_ITEM](
    { commit }: AugmentedActionContext,
    payload: {
      section: string; // TODO: retrieve inside action?
      params: any;
    }
  ): void;

  [ActionTypes.NAVIGATE_CREATE](
    { commit }: AugmentedActionContext,
    payload: {}
  ): void;

  [ActionTypes.GO_CREATE_MODE](
    { commit }: AugmentedActionContext,
    payload: { section: string }
  ): void;

  [ActionTypes.TOGGLE_MENU](
    { commit }: AugmentedActionContext,
    payload: {}
  ): void;

  [ActionTypes.CHANGE_MENU_TYPE](
    { commit }: AugmentedActionContext,
    payload: string
  ): void;

  [ActionTypes.CHANGE_MENU_COLOR_MODE](
    { commit }: AugmentedActionContext,
    payload: string
  ): void;

  [ActionTypes.CHANGE_MENU_OVERLAY_ACTIVE](
    { commit }: AugmentedActionContext,
    payload: boolean
  ): void;

  [ActionTypes.CHANGE_MENU_MOBILE_ACTIVE](
    { commit }: AugmentedActionContext,
    payload: boolean
  ): void;

  [ActionTypes.CHANGE_MENU_STATIC_ACTIVE](
    { commit }: AugmentedActionContext,
    payload: boolean
  ): void;

  [ActionTypes.ACTIVATE_EDIT_MODE](
    { commit }: AugmentedActionContext,
    payload: {}
  ): void;

  [ActionTypes.END_EDIT_MODE](
    { commit }: AugmentedActionContext,
    payload: {}
  ): void;

  [ActionTypes.ACTIVATE_CREATE_MODE](
    { commit }: AugmentedActionContext,
    payload: {}
  ): void;

  [ActionTypes.END_CREATE_MODE](
    { commit }: AugmentedActionContext,
    payload: {}
  ): void;

  [ActionTypes.SAVE_ITEM](
    { commit }: AugmentedActionContext,
    payload: {
      persistenceObject: any;
    }
  ): void;

  [ActionTypes.SAVE_NEW_ITEM](
    { commit }: AugmentedActionContext,
    payload: {
      persistenceObject: any;
    }
  ): void;

  [ActionTypes.START_LOADING](
    { commit }: AugmentedActionContext,
    payload: {}
  ): void;

  [ActionTypes.STOP_LOADING](
    { commit }: AugmentedActionContext,
    payload: {}
  ): void;

  [ActionTypes.START_DESKTOP](
    { commit }: AugmentedActionContext,
    payload: {
      params: { id: any };
    }
  ): void;

  [ActionTypes.CHANGE_DESKTOP_STATE](
    { commit }: AugmentedActionContext,
    payload: { uuid: string; state: string }
  ): void;

  [ActionTypes.SAVE_USER_DATA](
    { commit }: AugmentedActionContext,
    payload: Types.User
  ): void;

  [ActionTypes.GET_USER_DATA](
    { commit }: AugmentedActionContext,
    payload: { uuid: string }
  ): void;
}

/****** ACTIONS ****/
export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.DO_LOCAL_LOGIN]({ commit }, payload) {
    await LoginService.doLogin(
      payload.usr,
      payload.psw,
      'local',
      payload.entity
    ).then((response: any): any => {
      const payload = {
        token: response.login.token,
        userId: response.login.id
      };

      store.dispatch(ActionTypes.REFRESH_CLIENT_TOKEN, payload);
      store.dispatch(ActionTypes.GET_USER_DATA, { uuid: payload.userId });
      router.push({ name: DEFAULT_PAGE, params: { section: 'users' } });
    });
  },

  async [ActionTypes.REFRESH_TOKEN_FROM_SESSION]({ commit }, payload) {
    await ConnectionService.setClientHasura(payload.token);
    store.dispatch(ActionTypes.GET_USER_DATA, { uuid: payload.userId });
    commit(MutationTypes.SET_LOGIN_DATA, payload);
  },

  async [ActionTypes.DO_LOGOUT]({ commit }, payload) {
    await ConnectionService.setClientBackend();
    remove('token');
    commit(MutationTypes.LOGOUT, payload);
    router.push({ name: 'login' });
  },

  [ActionTypes.REFRESH_CLIENT_TOKEN]({ commit }, payload) {
    ConnectionService.setClientHasura(payload.token);
    setCookie('token', payload.token, { expires: '1h' });
    setCookie('userId', payload.userId, { expires: '1h' });
    commit(MutationTypes.SET_LOGIN_DATA, payload);
  },

  async [ActionTypes.DO_SEARCH]({ commit, getters }, payload) {
    const section: string = getters.section ? getters.section : payload.section;
    const query: string =
      sections[section] && sections[section].config?.query.search;
    await SearchService.listSearch(
      query,
      payload.queryParams,
      payload.size,
      payload.start
    ).then((response: any): any => {
      const sectionConfig = sections[section];

      commit(
        MutationTypes.LOAD_LIST_ITEMS,
        sectionConfig.search?.cleaner.parse(
          response[sectionConfig.search.apiSegment]
        )
      );

      store.dispatch(ActionTypes.STOP_LOADING, payload);
    });
  },

  [ActionTypes.NAVIGATE_DETAIL]({ commit, getters }, payload) {
    const section: string = payload.section;

    store.dispatch(ActionTypes.GET_ITEM, payload).then(() => {
      router.push({ name: 'detail', params: { ...payload.params, section } });
    });
  },

  async [ActionTypes.GET_ITEM]({ commit, getters }, payload) {
    const section: string = getters.section ? getters.section : payload.section;
    const query: string = sections[section].config?.query.detail;

    store.dispatch(ActionTypes.START_LOADING, payload);
    await SearchService.detailSearch(query, payload.params).then(
      (response: any): any => {
        const dataItem =
          (response && response[Object.keys(response)[0]][0]) || {};
        commit(MutationTypes.LOAD_ITEM, dataItem);
        store.dispatch(ActionTypes.STOP_LOADING, payload);
      }
    );
  },

  async [ActionTypes.SAVE_ITEM]({ commit, getters }, payload) {
    const section: string = getters.section;
    const mutation: string = sections[section].config?.query.update || '';
    const persistenceObject: any = payload.persistenceObject;

    store.dispatch(ActionTypes.START_LOADING, payload);
    await ConnectionService.executeMutation(mutation, persistenceObject)
      .then(() => {
        router.push({ name: ROUTE_SEARCH, params: { section } });
      })
      .catch(() => {
        // catch errors
      });
  },

  async [ActionTypes.SAVE_NEW_ITEM]({ commit, getters }, payload) {
    console.log('***** SAVE_NEW_ITEM ******');
    const section: string = getters.section;
    const mutation: string = sections[section].config?.query.create || '';
    const persistenceObject: any = payload.persistenceObject;

    store.dispatch(ActionTypes.START_LOADING, payload);
    await ConnectionService.executeMutation(mutation, persistenceObject)
      .then(() => {
        router.push({ name: ROUTE_SEARCH, params: { section } });
      })
      .catch(() => {
        // catch errors
      });
  },

  [ActionTypes.GO_SEARCH]({ commit }, payload) {
    router.push({ name: payload.section });
  },

  [ActionTypes.NAVIGATE_CREATE]({ commit, getters }, payload) {
    const section: string = getters.section;
    store.dispatch(ActionTypes.GO_CREATE_MODE, { section });
    router.push({ name: ROUTE_CREATE, params: { section } });
  },

  [ActionTypes.GO_CREATE_MODE]({ commit, getters }, payload) {
    const section: string = getters.section
      ? getters.section
      : payload.section || '';
    const defaults: any = sections[section].config?.defaultValues;

    store.dispatch(ActionTypes.ACTIVATE_CREATE_MODE, {});
    commit(MutationTypes.LOAD_ITEM, defaults);
  },

  [ActionTypes.SET_NAVIGATION_DATA]({ commit }, payload) {
    const { section, params, queryParams, url, routeName } = payload;

    commit(MutationTypes.SET_NAVIGATION_DATA, {
      routeName,
      section
    });
  },

  async [ActionTypes.START_DESKTOP]({ commit, getters }, payload) {
    const id: string = payload.params.id;

    store.dispatch(ActionTypes.START_LOADING, payload);

    const mutation = `mutation MyMutation {
      desktopStart(id: "${id}") {
        recordId
      }
    }`;

    await ConnectionService.executeMutation(mutation)
      .then(() => {
        store.dispatch(ActionTypes.STOP_LOADING);
        const payload = { uuid: id, state: 'started' };
        store.dispatch(ActionTypes.CHANGE_DESKTOP_STATE, payload);
      })
      .catch(() => {
        store.dispatch(ActionTypes.STOP_LOADING, payload);
      });
  },

  [ActionTypes.CHANGE_DESKTOP_STATE]({ commit }, payload) {
    commit(MutationTypes.CHANGE_DESKTOP_STATE, payload);
  },

  [ActionTypes.NAVIGATE]({ commit }, payload) {
    const { section, params, queryParams, editMode, url, routeName } = payload;
    commit(MutationTypes.SET_NAVIGATION_DATA, { routeName, section });

    router.push({ name: routeName, params });
  },

  [ActionTypes.TOGGLE_MENU]({ commit }) {
    commit(MutationTypes.TOGGLE_MENU, {});
  },

  [ActionTypes.CHANGE_MENU_TYPE]({ commit }, payload: string) {
    commit(MutationTypes.CHANGE_MENU_TYPE, payload);
  },

  [ActionTypes.CHANGE_MENU_COLOR_MODE]({ commit }, payload: string) {
    commit(MutationTypes.CHANGE_MENU_COLOR_MODE, payload);
  },

  [ActionTypes.CHANGE_MENU_OVERLAY_ACTIVE]({ commit }, payload: boolean) {
    commit(MutationTypes.CHANGE_MENU_OVERLAY_ACTIVE, payload);
  },

  [ActionTypes.CHANGE_MENU_MOBILE_ACTIVE]({ commit }, payload: boolean) {
    commit(MutationTypes.CHANGE_MENU_MOBILE_ACTIVE, payload);
  },

  [ActionTypes.CHANGE_MENU_STATIC_ACTIVE]({ commit }, payload: boolean) {
    commit(MutationTypes.CHANGE_MENU_STATIC_ACTIVE, payload);
  },

  [ActionTypes.ACTIVATE_EDIT_MODE]({ commit }) {
    commit(MutationTypes.ACTIVATE_EDIT_MODE, {});
  },

  [ActionTypes.END_EDIT_MODE]({ commit }, payload: boolean) {
    commit(MutationTypes.END_EDIT_MODE, payload);
  },

  [ActionTypes.ACTIVATE_CREATE_MODE]({ commit }) {
    commit(MutationTypes.ACTIVATE_CREATE_MODE, {});
  },

  [ActionTypes.END_CREATE_MODE]({ commit }, payload: boolean) {
    commit(MutationTypes.END_CREATE_MODE, payload);
  },

  [ActionTypes.START_LOADING]({ commit }, payload: boolean) {
    commit(MutationTypes.START_LOADING, payload);
  },

  [ActionTypes.STOP_LOADING]({ commit }, payload: boolean) {
    commit(MutationTypes.STOP_LOADING, payload);
  },

  [ActionTypes.SAVE_USER_DATA]({ commit }, payload: Types.User) {
    commit(MutationTypes.SAVE_USER_DATA, payload);
  },

  async [ActionTypes.GET_USER_DATA]({ commit }, payload) {
    await UserService.getUser(payload).then((response: any): any => {
      const dataItem =
        (response && response[Object.keys(response)[0]][0]) || {};
      store.dispatch(ActionTypes.SAVE_USER_DATA, dataItem);
    });
  }
};
