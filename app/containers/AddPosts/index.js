import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import messages from './messages';

class AddPosts extends Component {
  renderField(field) {
    // add style later for touched
    const {
      meta: { touched, error },
    } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`; // fix the class name later to correspond with style
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  onSubmit(values) {
    console.log('submitted');
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Link to="/">Back To Home</Link>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field label="New Post" name="post" component={this.renderField} />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const error = {};
  if (!values.post) {
    error.post = 'Please enter a post!';
  }
  return error;
}

export default reduxForm({
  validate,
  form: 'AddNewForm',
})(AddPosts);
