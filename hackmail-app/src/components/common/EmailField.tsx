import * as React from "react";
import { Select } from 'antd';
import type { SelectProps } from "antd";
import sponsoremails from "../../data/sponsoremails.json";
import { listenerCount } from "process";
import 'antd/dist/antd.css';
import { APIErrorCode, ClientErrorCode, isNotionClientError } from "@notionhq/client";

import { Client } from "@notionhq/client";

// connect to notion
const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
})

// connect to database
const DatabaseId = process.env.NOTION_DATABASE_ID; // sponsors
// query database function
const DataGet = async () => {
  try {
    const { results } = await notion.databases.query({
      database_id: DatabaseId!,
    })
    const res = results.map((page) => {
      return { //info to get
        pageId: page.id,
        company: page.properties["Company"],
        name: page.properties["Name"],
        email: page.properties["Email"],
        status: page.properties["PH IV 2023"]
      };
    });
    return res;
  } catch (error) {
    console.error(error);
  }
}


/*
try {
  const sponsors = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "Column",
    },
  })
} catch (error: unknown) {
  if (isNotionClientError(error)) {
    switch (error.code) {
      case ClientErrorCode.RequestTimeout:
        // sad
        break
      case APIErrorCode.ObjectNotFound:
        // very sad
        break
      case APIErrorCode.Unauthorized:
        // expected currently
        break
      default:
        // uh oh
    }
  }
}
*/


// database code
const url = "https://api.notion.com"

//const { Option } = Select;

//edit children to 
const children: SelectProps['options'] = [];
/*
sponsoremails.map((email) => {
  children.push({
    value: email.company_id.toString(36),
    label: email.company_name.toString(),
  });
  //children.push(<Option key={email.company_id}>{email.contact_email}</Option>);
})
*/

for (let i = 10; i < 36; i++) {
  children.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

const handleChange = (value : string) => {
  console.log(`selected ${value}`);
}

const CreateChildren = () => {
  DataGet().then()
}

DataGet().then()

const EmailField: React.FC = () => {
  return (
  <Select 
    mode="multiple"
    style={{ width: '100%' }}
    optionFilterProp="children"
    placeholder="Yes it is bad"
    onChange={handleChange}
    tokenSeparators={[',']}
    options={children}
    //filterOption = {(input, option) => 
    //  option!.props.children.toUpperCase().indexOf(input.toUpperCase()) !== -1}
    >
  </Select>
  )
};

export default EmailField;