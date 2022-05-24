import React from "react";
import { GuestBookType } from "../types";
import * as FB from "../fb";

export const GET_GUEST_BOOK_START = "GET_GUEST_BOOK_START";
export const GET_GUEST_BOOK_SUCCESS = "GET_GUEST_BOOK_SUCCESS";
export const GET_GUEST_BOOK_FAIL = "GET_GUEST_BOOK_FAIL";

const getGuestBookStart = () => {
  return {
    type: GET_GUEST_BOOK_START,
  };
};

const getGuestBookSuccess = (data: GuestBookType) => {
  return {
    type: GET_GUEST_BOOK_SUCCESS,
    data,
  };
};

const getGuestBookFail = (error: any) => {
  return {
    type: GET_GUEST_BOOK_FAIL,
    error,
  };
};

export const getGuestBookThunk = (): Function => {
  return async (dispatch: React.Dispatch<any>) => {
    try {
      dispatch(getGuestBookStart());

      const q = FB.query(
        FB.collection(FB.db, "GuestBook"),
        FB.orderBy("createdAt", "desc")
      );

      const unsub = FB.onSnapshot(q, (querySnapshot) => {
        let guestBookArr: any = [];

        querySnapshot.forEach((doc) => {
          guestBookArr.push({ ...doc.data(), id: doc.id });
        });

        dispatch(getGuestBookSuccess(guestBookArr));
      });
    } catch (error) {
      dispatch(getGuestBookFail(error));
    }
  };
};

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const reducer = (prev = initialState, action: any) => {
  switch (action.type) {
    case GET_GUEST_BOOK_START:
      return { ...prev, loading: true, error: null };
    case GET_GUEST_BOOK_SUCCESS:
      console.log(action.data);
      return { ...prev, data: action.data, loading: false, error: null };
    case GET_GUEST_BOOK_FAIL:
      return { ...prev, data: [], loading: false, error: action.error };
    default:
      return prev;
  }
};

export default reducer;
