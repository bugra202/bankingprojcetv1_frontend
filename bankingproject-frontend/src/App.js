import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import TokenService from "./TokenService";
import Login from "./Login";
import AccountQuery from "./modules/account/pages/account-search/AccountQuery";
import Logout from "./Logout";
import TransferQuery from "./modules/transfer/pages/transfer-history/TransferQuery";

const { Sider } = Layout;
const { SubMenu } = Menu;

function App() {
    const token = TokenService.getToken();

    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                {token == null ?
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                    :
                    <Layout>
                        <Sider width={200} className="site-layout-background" style={{ position: 'fixed', zIndex: 1, height: '100%', left: 0 }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu key="sub1" title="Account">
                                    <Menu.Item key="1">
                                        <Link to="/search">Sorgula</Link>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title="Transfer">
                                    <Menu.Item key="2">
                                        <Link to="/transfer">Transfer</Link>
                                    </Menu.Item>
                                </SubMenu>
                            </Menu>
                            <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                                <Logout />
                            </div>
                        </Sider>
                        <Layout className="site-layout" style={{ marginLeft: 200 }}>
                            <Routes>
                                <Route path="/search" element={<AccountQuery />} />
                                <Route path="/transfer/*" element={<TransferQuery />} />
                            </Routes>
                        </Layout>
                    </Layout>
                }
            </Layout>
        </Router>
    );
}

export default App;
