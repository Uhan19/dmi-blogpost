import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectInput = () =>
  createSelector(selectHome, (homeState) => homeState.get('input'));

export { selectHome, makeSelectInput };
