import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { DashboardOutlined, CustomerServiceOutlined, ShoppingCartOutlined, BarcodeOutlined } from '@ant-design/icons';

import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React from 'react';
import { Space, Table, Tag } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));
const nav = [
    [
        'Trang chủ',
        DashboardOutlined,
        ['sản phẩm', 'đơn hàng']
    ],
    [
        'Users',
        UserOutlined,
        ['Show', 'Phân quyền']
    ],
    [
        'Khách hàng',
        CustomerServiceOutlined,
        ['Show', 'Export']
    ],
    [
        'Đơn hàng',
        ShoppingCartOutlined,
        ['Show', 'Export']
    ],
    [
        'Mã giảm giá',
        BarcodeOutlined,
        ['Show', 'Thêm']
    ]
]
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    console.log('-key ', key);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            console.log('-subkey ', subKey);
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});
const myItems = nav.map((item, index) => {
    const key = String(index + 1);
    console.log('key ', key);
    return {
        key: `sub${key}`,
        icon: React.createElement(item[1]),
        label: item[0],
        children: item[2].map((subnav, j) => {
            const subkey = index * item[2].length + j + 1;
            console.log('subkey ', subkey);
            return {
                key: subkey,
                label: subnav,
            };
        }),
    }
});

const { Column, ColumnGroup } = Table;
const data = [
    {
        key: '1',
        firstName: 'John',
        lastName: 'Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        firstName: 'Jim',
        lastName: 'Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];


const App = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
            </Header>
            <Content
                style={{
                    padding: '0 50px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout
                    style={{
                        padding: '24px 0',
                        background: colorBgContainer,
                    }}
                >
                    <Sider
                        style={{
                            background: colorBgContainer,
                        }}
                        width={200}
                    >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{
                                height: '100%',
                            }}
                            // items={items2}
                            items={myItems}
                        />
                    </Sider>
                    <Content
                        style={{
                            padding: '0 24px',
                            minHeight: 280,
                        }}
                    >
                        Content
                        <Table dataSource={data}>
                            <ColumnGroup title="Name">
                                <Column title="First Name" dataIndex="firstName" key="firstName" />
                                <Column title="Last Name" dataIndex="lastName" key="lastName" />
                            </ColumnGroup>
                            <Column title="Age" dataIndex="age" key="age" />
                            <Column title="Address" dataIndex="address" key="address" />
                            <Column
                                title="Tags"
                                dataIndex="tags"
                                key="tags"
                                render={(tags) => (
                                    <>
                                        {tags.map((tag) => (
                                            <Tag color="blue" key={tag}>
                                                {tag}
                                            </Tag>
                                        ))}
                                    </>
                                )}
                            />
                            <Column
                                title="Action"
                                key="action"
                                render={(_, record) => (
                                    <Space size="middle">
                                        <a>Invite {record.lastName}</a>
                                        <a>Delete</a>
                                    </Space>
                                )}
                            />
                        </Table>
                    </Content>
                </Layout>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    );
};
export default App;

