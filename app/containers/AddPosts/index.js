import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form/immutable';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectInput } from './selectors';
import { createPosts } from './actions';
// import { changeInput } from './actions';
import Input from './Input';
import reducer from './reducer';
import saga from './saga';
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
        <Input
          className="form-control"
          placeholder="type message here"
          type="text"
          {...field.input}
        />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPosts(values, () => {
      this.props.history.push('/');
    });
    console.log('clicked');
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
  validate, // same as validate: validate
  form: 'AddNewPosts', // value has to be unique
})(connect(null, { createPosts })(AddPosts));

// export function mapDispatchToProps(dispatch) {
//   return {
//     onChangeInput: (evt) => dispatch(changeInput(evt.target.value)),
//     onSubmitForm: () => {
//       dispatch(createPosts());
//     },
//   };
// }

// const mapStateToProps = createStructuredSelector({
//   input: makeSelectInput(),
// });

// const withConnect = connect(mapStateToProps, mapDispatchToProps);

// const withReducer = injectReducer({ key: 'addPost', reducer });
// const withSaga = injectSaga({ key: 'addPost', saga });

// export default compose(withReducer, withSaga, withConnect)(AddPosts);
