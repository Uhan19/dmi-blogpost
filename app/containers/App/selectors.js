import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectLocation = () =>
  createSelector(selectRoute, (routeState) =>
    routeState.get('location').toJS()
  );

const makeSelectLoading = () =>
  createSelector(selectGlobal, (globalState) => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, (globalState) => globalState.get('error'));

const makeSelectPosts = () =>
  createSelector(selectGlobal, (globalState) => globalState.getIn('posts'));

const makeSelectInput = () =>
  createSelector(selectGlobal, (globalState) => globalState.getIn('input'));

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectPosts,
  makeSelectInput,
  makeSelectLocation,
};
