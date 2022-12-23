import * as React from "react";
import { Form } from "../common/Form";
import { Field } from "../common/Field";
import Button from "../common/Button";

import EmailField from "../common/EmailField";

export const EmailForm: React.FC = () => {
  return (
    <Form
      action="http://localhost:4351/api/contactus" /* TODO: add action*/
      render={() => (
        <React.Fragment>
          <div className="alert alert-info" role="alert">
            Enter the information below and we'll get back to you as soon as we
            can.
          </div>

          <EmailField></EmailField>

          <Field id="emailTo" label="emailTo: " />
          <Field id="emailFrom" label="emailFrom: " />
          {/*<Button link="TODO">Attachments</Button>*/}
          <Field
            id="reason"
            label="Reason"
            editor="dropdown"
            options={["", "Marketing", "Support", "Feedback", "Jobs"]}
          />
          <Field id="emailBody" label="emailBody" editor="multilinetextbox" />
        </React.Fragment>
      )}
    />
  );
};

export default EmailForm;
