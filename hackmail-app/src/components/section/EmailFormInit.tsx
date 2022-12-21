import React, { useState } from "react";

import EmailField from '../common/EmailField';
import FileUpload from '../common/FileUpload';

import { Button, Select, Checkbox, Form, Input, Upload, message } from "antd";
import type { SelectProps } from "antd";

import 'antd/dist/antd.css';

const { TextArea } = Input;

const children: SelectProps['options'] = [];
for (let i = 10; i < 36; i++) {
  children.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

const EmailFormInit: React.FC = () => {
    const [form] = Form.useForm();

    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));


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
          <Form.Item
            label="toEmail"
            name="toEmail"
          >
            <EmailField />
            {/*
            <Select 
              mode="multiple"
              style={{ width: '100%' }}
              optionFilterProp="children"
              placeholder="Yes it is bad"
              tokenSeparators={[';']}
              options={children}
     filterOption = {(input, option) => 
     option!.props.children.toUpperCase().indexOf(input.toUpperCase()) !== -1}
    >
            </Select>
            
            <Select
          mode="multiple"
          placeholder="Inserted are removed"
          value={selectedItems}
          onChange={setSelectedItems}
          style={{ width: '100%' }}
          options={filteredOptions.map(item => ({
            value: item,
            label: item,
        }))}
      />
      */}
          </Form.Item>
            <Form.Item
              label="attachments"
              valuePropName="fileList"
              name="attachments"
              rules={[{ message: 'please work'}]}
            >
                <FileUpload />
            </Form.Item>
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