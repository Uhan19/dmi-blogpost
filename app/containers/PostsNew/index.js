import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import messages from './messages';

class PostsNew extends Component {
  renderField(field) {
    // add style later for touched
    const {
      meta: { touched, error },
    } = field;
    return (
      <div>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Link to="/">Back To Home</Link>
        <form>
          <Field label="New Post" name="post" component={this.renderField} />
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.posts) {
    errors.title = 'Please enter a post!';
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm',
})(connect(null)(PostsNew));
