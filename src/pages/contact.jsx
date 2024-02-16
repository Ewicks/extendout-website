import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import Kitchen from '../assets/images/homeimage.jpg'

const SERVICE_ID = "service_vhd24nq";
const TEMPLATE_ID = "template_od1btv7";
const USER_ID = "dwyA3aNUaqZqc51RC";

const App = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    
    <div className="contact">
      <div className="row">
          <div className="col-12 position-relative p-0">
            <div className="overlay-gallery"></div>
            <img
              className="img-fluid gallery-img"
              src={Kitchen}
              alt=""
            />
            <p className="gallery-item-text">Contact Us</p>
          </div>
        </div>
      <div className="row">
        <div className="col my-5 d-flex justify-content-start align-items-center flex-column">

          <Form className="my-5" onSubmit={handleOnSubmit}>
            <div className="form-content">
              <h1 className="pt-5">Get In Touch</h1>
              <small className="mb-5 text-muted">We will get back to you as soon as possible</small>
              <div className="contact-form-border"></div>
              <Form.Field
                id="form-input-control-email"
                control={Input}
                name="user_email"
                placeholder="Email"
                required
                icon="mail"
                iconPosition="left"
                className="my-3"
              />
              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                name="user_name"
                placeholder="Name"
                required
                icon="user circle"
                iconPosition="left"
                className="my3"
              />
              <Form.Field
                id="form-textarea-control-opinion"
                control={TextArea}
                name="user_message"
                placeholder="Message…"
                className="my-3"
                required
              />
              <Button type="submit" color="green" className="btn mb-5">
                Submit
              </Button>

              </div>
            
          </Form>
        </div>
      </div>
    </div>
  );
};

export default App;
