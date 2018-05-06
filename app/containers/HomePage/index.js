/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PureComponent } from 'react';
import _ from 'lodash';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectPosts,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { loadPosts } from '../App/actions';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';

export class HomePage extends PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onSubmit();
  }

  renderPosts() {
    return _.map(this.props.posts, (post) => <li>test</li>);
  }

  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Link to="/posts/new">Add a Post</Link>
        <h3>Posts</h3>
        <ul>{this.renderPosts()}</ul>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onSubmit: () => {
      dispatch(loadPosts());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
