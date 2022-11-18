export type UserState = {
  users: any[];
  loading: boolean;
  error: null | string;
}

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};

export enum UserActionType {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USER_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USER_ERROR"
}

export type FetchUserAction = {
  type: UserActionType.FETCH_USERS
}

export type FetchUserSuccessAction = {
  type: UserActionType.FETCH_USERS_SUCCESS
  payload: any[]
}

export type FetchUserErrorAction = {
  type: UserActionType.FETCH_USERS_ERROR
  payload: string
}

export type UserAction = FetchUserAction | FetchUserSuccessAction
  | FetchUserErrorAction