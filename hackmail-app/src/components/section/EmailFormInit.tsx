import React, { useState } from "react";
//import { Form } from "../common/Form";
import { Field } from "../common/Field";
//import Button from "../common/Button";

import { Button, Checkbox, Form, Input, Upload, message } from "antd";
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const EmailFormInit: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Success:', values);
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
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
            <Form.Item
              label="toEmail"
              name="toEmail"
              rules={[{ required: true, message: 'please work'}]}
            >
                <Input />
            </Form.Item>
            <Form.Item
              label="attachments"
              valuePropName="fileList"
              name="attachments"
              rules={[{ required: true, message: 'please work'}]}
            >
                <Upload listType="picture-card">
                    <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8}}>Upload</div>
                    </div>
                </Upload>
            </Form.Item>
            <Form.Item
              label="body"
              name="body"
              rules={[{message: 'please work'}]}
            >
                <TextArea rows={4} />
                <br />
                <br />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Submit
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