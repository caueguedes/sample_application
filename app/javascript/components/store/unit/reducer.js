import { createSelector } from "@reduxjs/toolkit";
import { unitTypes } from ".";

export const unitsSelector = state => state.unit.units;

export const allUnitsSelector = createSelector(unitsSelector, units => units);

const initialState =  { units: [] }

export function unitsReducer(state =  initialState, action) {
  switch (action.type) {
    case unitTypes.UNITS_REQUEST:
      return { isLoading: true };
    case unitTypes.UNITS_SUCCESS:
      return { units: action.unit };
    case unitTypes.UNITS_FAILURE:
      return {};
    default:
      return state
  }
}