import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form/immutable';
import { connect } from 'react-redux';
import H1 from 'components/H1';
import { createPosts } from './actions';
import Form from './Form';
import Input from './Input';
import ErrorDiv from './Error';
import Button from './Button';
import CancelLink from './Cancel';
import messages from './messages';

class AddPosts extends Component {
  onSubmit(values) {
    this.props.createPosts(values, () => {
      this.props.history.push('/');
    });
  }

  renderField(field) {
    // add style later for touched
    const {
      meta: { touched, error },
    } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`; // fix the class name later to correspond with style
    return (
      <div className={className}>
        <label>{field.label}</label>
        <Input
          className="form-control"
          placeholder="type message here"
          type="text"
          {...field.input}
        />
        <ErrorDiv className="text-help">{touched ? error : ''}</ErrorDiv>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field name="post" component={this.renderField} />
          <Button type="submit">submit</Button>
          <CancelLink to="/">Cancel</CancelLink>
        </Form>
      </div>
    );
  }
}

AddPosts.propTypes = {
  createPosts: PropTypes.func,
  handleSubmit: PropTypes.func,
  history: PropTypes.object,
};

function validate(values) {
  const error = {};
  if (!values.post) {
    error.post = 'Please enter a post!';
  }
  return error;
}

export default reduxForm({
  validate, // same as validate: validate
  form: 'AddNewPosts', // value has to be unique
})(connect(null, { createPosts })(AddPosts));
