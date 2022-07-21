import React from "react";

const Contact = () => {
  return (
    <section>
      <form
        method="post"
        name="contact v1"
        data-netlify="true"
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact v1" />
        <div>
          <label htmlFor="first-name">
            First name
            <input type="text" name="first-name" />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email
            <input type="email" name="email" />
          </label>
        </div>
        <div>
          <label htmlFor="">
            any Comments?
            <textarea name="comments"></textarea>
          </label>
        </div>
        <button type="submit">Submit the result</button>
      </form>
    </section>
  );
};

export default Contact;
