import { Router } from 'vue-router';

export interface State {
  search: any[];
  auth: Auth;
  ui: Ui;
  router: RouterState;
  detail?: any;
}

export interface Ui {
  createMode: boolean;
  editMode: boolean;
  isLoading: boolean;
  menu: {
    show: boolean;
    type: string;
    colorMode: string;
    staticActive: boolean;
    overlayActive: boolean;
    mobileActive: boolean;
  };
}

export interface Auth {
  user: Types.User;
  token: string;
  loggedIn: boolean;
}

export interface RouterState {
  layout: string;
  section: string;
  queryParams: string[];
  routeName: string;
}

export const state: State = {
  search: [],
  auth: {
    user: {
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
    },
    token: '',
    loggedIn: false
  },
  ui: {
    createMode: false,
    editMode: false,
    isLoading: false,
    menu: {
      show: true,
      type: 'static',
      colorMode: 'dark',
      staticActive: false,
      overlayActive: false,
      mobileActive: false
    }
  },
  router: {
    layout: '',
    section: '',
    queryParams: [],
    routeName: ''
  }
};
