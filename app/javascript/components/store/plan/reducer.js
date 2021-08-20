import { createSelector } from "@reduxjs/toolkit";
import { planTypes } from ".";

export const plansSelector = state => state.plan.plans;

export const allPlansSelector = createSelector(plansSelector, plans => plans);

const initialState =  { plans: [] }

export function plansReducer(state =  initialState, action) {
  switch (action.type) {
    case planTypes.PLANS_REQUEST:
      return { isLoading: true };
    case planTypes.PLANS_SUCCESS:
      return { plans: action.plan };
    case planTypes.PLANS_FAILURE:
      return {};
    default:
      return state
  }
}