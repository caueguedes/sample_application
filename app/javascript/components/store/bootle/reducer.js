import { createSelector } from "@reduxjs/toolkit";
import { bottleTypes } from ".";

const bottlesSelector = state => state.bottle;

export const allBottlesSelector = createSelector(bottlesSelector, bottle => bottle.bottles);

export const totalPagesSelector = createSelector(bottlesSelector, bottle => bottle.total_pages);

const initialState =  { bottles: [] }

export function bottlesReducer(state =  initialState, action) {
  switch (action.type) {
    case bottleTypes.BOTTLES_REQUEST:
      return { ...state, isLoading: true };
    case bottleTypes.BOTTLES_SUCCESS:
      return { ...state, bottles: action.bottle, total_pages: action.total_pages };
    case bottleTypes.BOTTLES_FAILURE:
      return {};
    default:
      return state
  }
}