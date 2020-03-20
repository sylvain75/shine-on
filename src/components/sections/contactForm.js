import React, { useReducer } from 'react';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const init = state => {
  return { ...state, initialState };
};

const initialState = {
  name: '',
  email: '',
  message: '',
};

function reducer(state, action) {
  return { ...state, [action.type]: action.payload };
}

const ContactForm = props => {
  const [{ name, email, message }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        'g-recaptcha-response': props.isNotRobot,
        name,
        email,
        message,
      }),
    })
      .then(res => {
        console.log('res SUCCESS', res);
        alert('Success!');
      })
      .catch(error => alert(error));

    e.preventDefault();
  };

  const handleChange = e =>
    dispatch({ type: e.target.name, payload: e.target.value });

  return (
    <form
      onSubmit={handleSubmit}
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <p>
        <label>
          Your Name:{' '}
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Your Email:{' '}
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label>
          Message:{' '}
          <textarea name="message" value={message} onChange={handleChange} />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};

export default ContactForm;
