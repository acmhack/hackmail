import * as React from "react";
import { Select } from 'antd';
import sponsoremails from "../../data/sponsoremails.json";
import { listenerCount } from "process";

import 'antd/dist/antd.css';

const { Option } = Select;

//edit children to 
const children: React.ReactNode[] = [];

sponsoremails.map((email) => {
  children.push(<Option key={email.company_id}>{email.contact_email}</Option>);
})

const handleChange = (value : string) => {
  console.log(`selected ${value}`);
}

const EmailField: React.FC = () => (
  <Select 
    mode="multiple"
    style={{ width: '100%' }}
    optionFilterProp="children"
    placeholder="Yes it is bad"
    onChange={handleChange}
    tokenSeparators={[';']}
    filterOption = {(input, option) => 
      option!.props.children.toUpperCase().indexOf(input.toUpperCase()) !== -1}
    >
      {children}
  </Select>
);

export default EmailField;