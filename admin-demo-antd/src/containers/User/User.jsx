import MyLayout from "../../components/MyLayout"
import { Space, Table, Tag, Button, Modal, Checkbox, Form, Input, InputNumber, Select } from 'antd';
import { useState } from "react";
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];
const listOptions = ['nice', 'developer', 'teacher', 'cool', 'loser']
const options = [];
for (let i = 0; i < listOptions.length; i++) {
    options.push({
        label: listOptions[i],
        value: listOptions[i]
    })
}
// const options = [];
// for (let i = 10; i < 36; i++) {
//     options.push({
//         label: i.toString(36) + i,
//         value: i.toString(36) + i,
//     });
// }

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
export const UserProfile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataTable, setDataTable] = useState(data);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (user) => {
        console.log('Success:', user);
        const newDataTable = dataTable.concat([{
            key: Math.floor(Math.random() * 1000) + 1,
            name: user.username,
            age: user.userage,
            address: user.Useradress,
            tags: ['nice', 'developer'],
        }])
        console.log('newDataTable', newDataTable);
        setDataTable(newDataTable);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // for leslect tag
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return <div>
        <Button type="primary" onClick={showModal}>
            Add user
        </Button>
        <Modal title="Add user" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>

            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Userage"
                    name="userage"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your userage!',
                        },
                    ]}
                >
                    <Input />
                    {/* <InputNumber /> */}
                </Form.Item>

                <Form.Item
                    label="Useradress"
                    name="Useradress"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your useradress!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="SelectTags"
                    name="SelectTags"
                >
                    <Space
                        style={{
                            width: '100%',
                        }}
                        direction="vertical"
                    >
                        <Select
                            // name="SelectTags"
                            mode="multiple"
                            allowClear
                            style={{
                                width: '100%',
                            }}
                            placeholder="Please select"
                            defaultValue={['nice']}
                            onChange={handleChange}
                            options={options}
                        />
                        {/* <Select
                            mode="multiple"
                            disabled
                            style={{
                                width: '100%',
                            }}
                            placeholder="Please select"
                            defaultValue={['a10', 'c12']}
                            onChange={handleChange}
                            options={options}
                        /> */}
                    </Space>
                    {/* <Input /> */}
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
        <Table columns={columns} dataSource={dataTable} />;
    </div>
}

export const UserDecentralization = () => {
    return <div>
        UserDecentralization
    </div>
}