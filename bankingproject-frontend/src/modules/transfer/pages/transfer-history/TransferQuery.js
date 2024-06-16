
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import MoneyTransfer from '../money-transfer/MoneyTransfer';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

const TransferQuery = () => {
    const location = useLocation();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[location.pathname]}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <SubMenu key="sub1" title="Transfer">
                        <Menu.Item key="/transfer/money">
                            <Link to="/transfer/money">Money Transfer</Link>
                        </Menu.Item>
                        {/*<Menu.Item key="/transfer/history">*/}
                        {/*    <Link to="/transfer/history">Transfer History</Link>*/}
                        {/*</Menu.Item>*/}
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
                    <Routes>
                        <Route path="/money" element={<MoneyTransfer />} />
                       {/*// <Route path="/history" element={<TransferHistory />} />*/}
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
};

export default TransferQuery;
