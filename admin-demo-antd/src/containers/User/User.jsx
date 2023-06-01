import MyLayout from "../../components/MyLayout"
import { Space, Table, Tag, Button, Modal, Checkbox, Form, Input, InputNumber, Select } from 'antd';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const { Option } = Select;
let usersStore;
let dispatch;
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
                <a onClick={() => {
                    console.log('delete row', record.key);

                    const findRowByKey = (key) => {
                        for (let i = 0; i < usersStore.listUser.length; i++) {
                            if (usersStore.listUser[i].key == key) return i;
                        }
                    }
                    console.log('findRowByKey ', findRowByKey(record.key));
                    const newData = usersStore.listUser.slice();
                    newData.splice(findRowByKey(record.key), 1);
                    console.log('newdata ', newData);

                    dispatch.users.setListUser(newData);
                }}>Delete</a>
            </Space>
        ),
    },
];

export const UserProfile = () => {
    dispatch = useDispatch();
    usersStore = useSelector((state) => state.users);
    console.log(usersStore.listUser);


    const [isModalOpen, setIsModalOpen] = useState(false);
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
        const newDataTable = usersStore.listUser.concat([{
            key: Math.floor(Math.random() * 1000) + 1,
            name: user.username,
            age: user.userage,
            address: user.Useradress,
            tags: ['nice', 'developer'],
        }])
        console.log('newDataTable', newDataTable);
        dispatch.users.setListUser(newDataTable);
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
                {/* Username */}
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

                {/* Userage */}
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

                {/* Useradress */}
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
                // name="Select"
                >
                    <Space
                        style={{
                            width: '100%',
                        }}
                        direction="vertical"
                    >
                        <Select
                            name="SelectTags"
                            mode="multiple"
                            allowClear
                            style={{
                                width: '100%',
                            }}
                            placeholder="Please select"
                            defaultValue={['nice']}
                            onChange={handleChange}
                        >
                            <Option value="nice" label="nice" />
                            <Option value="developer" label="developer" />
                            <Option value="teacher" label="teacher" />
                            <Option value="cool" label="cool" />
                            <Option value="loser" label="loser" />
                        </Select>

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
        <Table columns={columns} dataSource={usersStore.listUser} />;
    </div>
}

export const UserDecentralization = () => {
    return <div>
        UserDecentralization
    </div>
}