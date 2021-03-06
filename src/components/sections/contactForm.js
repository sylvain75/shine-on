import React, { useReducer } from 'react';
import Recaptcha from 'react-google-recaptcha';

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
  const recaptchaRef = React.createRef();

  const handleSubmit = e => {
    const form = e.target;
    const recaptchaValue = recaptchaRef.current.getValue();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        'g-recaptcha-response': recaptchaValue,
        name,
        email,
        message,
      }),
    })
      .then(res => {
        alert('Success!');
      })
      .catch(error => alert(error));

    e.preventDefault();
  };

  const handleChange = e =>
    dispatch({ type: e.target.name, payload: e.target.value });

  return (
    <form
      name="contact-captcha-two"
      method="post"
      data-netlify="true"
      data-netlify-recaptcha="true"
      onSubmit={handleSubmit}
      // data-netlify-honeypot="bot-field"
    >
      <p>
        {/*<input type="hidden" name="form-name" value="contact" />*/}
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
      <Recaptcha
        ref={recaptchaRef}
        sitekey={process.env.GATSBY_RE_CAPTCHA_SITE_KEY}
      />
    </form>
  );
};

export default ContactForm;
