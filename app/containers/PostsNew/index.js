import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default class PostsNew extends Component {
  render() {
    return (
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    );
  }
}
