import React, { useState } from "react";

import EmailField from '../common/EmailField';
import FileUpload from '../common/FileUpload';

import { Button, Checkbox, Form, Input, Upload, message } from "antd";

import 'antd/dist/antd.css';

const { TextArea } = Input;

const EmailFormInit: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log(values);
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    }

    return (
        <Form
          name="test"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          layout="horizontal"
          autoComplete="off"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          form={form}>
          {/*
            <Form.Item
              label="toEmail"
              name="toEmail"
              rules={[{ required: true, message: 'please work'}]}
            >
                <EmailField />
            </Form.Item>
    
            <Form.Item
              label="attachments"
              valuePropName="fileList"
              name="attachments"
              rules={[{ message: 'please work'}]}
            >
                <FileUpload />
            </Form.Item>
    */}
            <Form.Item
              label="body"
              name="body"
            >
                <TextArea rows={4} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Send Job
                </Button>
            </Form.Item>
        </Form>


    /*    
    <Form
      action="http://localhost:4351/api/contactus" // TODO: add action
      render={() => (
        <React.Fragment>
          <div className="alert alert-info" role="alert">
            Enter the information below and we'll get back to you as soon as we
            can.
          </div>

          <Field id="emailTo" label="emailTo: " />
          <Field id="emailFrom" label="emailFrom: " />
          {/*<Button link="TODO">Attachments</Button>*//*}
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
    */
  );
};

export default EmailFormInit;