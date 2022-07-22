import React from "react";

const FormContact = () => {
  return (
    <div className="contact">
      <form name="contact" method="post" data-netlify="true" onSubmit="submit">
        <input type="hidden" name="form-name" value="contact" />
        <label for="name">Your Name: </label>
        <input type="text" name="name" />
        <label for="email">Your Email: </label>
        <input type="email" name="email" />
        <label for="message">Message: </label>
        <textarea name="message"></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default FormContact;
