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
import PropTypes from 'prop-types';
import _ from 'lodash';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectPosts,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H1 from 'components/H1';
import H3 from 'components/H3';
import Ul from 'components/Ul';
import Li from 'components/Li';
import Center from 'components/Center';
import StyledLink from './StyledLink';
import { loadPosts } from '../App/actions';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';

export class HomePage extends PureComponent {
  componentDidMount() {
    this.props.onSubmit();
  }

  renderPosts() {
    return _.map(this.props.posts, (post) => (
      <li key={post._id}>{post.post}</li>
    ));
  }

  render() {
    return (
      <div>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <Center>
          <StyledLink to="/posts/new">Add a Post</StyledLink>
        </Center>
        <H3>Posts</H3>
        <Ul>{this.renderPosts()}</Ul>
      </div>
    );
  }
}

HomePage.propTypes = {
  onSubmit: PropTypes.func,
  posts: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

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
