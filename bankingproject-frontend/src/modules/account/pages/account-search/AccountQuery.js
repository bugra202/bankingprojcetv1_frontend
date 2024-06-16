import React, { useState } from "react";
import { Layout, Menu, Space, Dropdown, Button, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import AccountSearchCriteria from "./AccountSearchCriteria";
import AccountSearchDatagrid from "./AccountSearchDatagrid";
import AccountAdd from "../account-crud/AccountAdd";
import AccountUpdate from "../account-crud/AccountUpdate";
import AccountDelete from "../account-crud/AccountDelete";
import AccountDetails from "../account-crud/AccountDetail";

const { Header, Content, Footer } = Layout;

const AccountQuery = () => {
    const [isAddModalVisible, setAddModalVisible] = useState(false);
    const [isUpdateModalVisible, setUpdateModalVisible] = useState(false);
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const [isDetailsModalVisible, setDetailsModalVisible] = useState(false);
    const [selectedAccounts, setSelectedAccounts] = useState([]);
    const [selectedAccount, setSelectedAccount] = useState(null);

    const openAddModal = () => {
        setAddModalVisible(true);
    };

    const closeAddModal = () => {
        setAddModalVisible(false);
    };

    const openUpdateModal = () => {
        if (selectedAccounts.length !== 1) {
            message.warn("Lütfen güncellemek için sadece bir hesap seçin.");
            return;
        }
        setUpdateModalVisible(true);
    };

    const closeUpdateModal = () => {
        setUpdateModalVisible(false);
        setSelectedAccounts([]);
    };

    const openDeleteModal = () => {
        if (selectedAccounts.length !== 1) {
            message.warn("Lütfen silmek için en az bir hesap seçin.");
            return;
        }
        setDeleteModalVisible(true);
    };

    const closeDeleteModal = () => {
        setDeleteModalVisible(false);
        setSelectedAccounts([]);
    };

    const openDetailsModal = (account) => {
        setSelectedAccount(account);
        setDetailsModalVisible(true);
    };

    const closeDetailsModal = () => {
        setDetailsModalVisible(false);
        setSelectedAccount(null);
    };

    const handleRowSelect = (accounts) => {
        setSelectedAccounts(accounts);
    };

    const menuItems = [
        { key: "0", title: "Hesap Ekle", onClick: openAddModal },
        { key: "1", title: "Hesap Sil", onClick: openDeleteModal, disabled: selectedAccounts.length !== 1 },
        { key: "2", title: "Hesap Güncelle", onClick: openUpdateModal, disabled: selectedAccounts.length !== 1 },
    ];

    const menu = (
        <Menu>
            {menuItems.map(item => (
                <Menu.Item key={item.key} onClick={item.onClick} disabled={item.disabled}>
                    {item.title}
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header className="site-layout-background" style={{ padding: 0, width: 'calc(100% - 200px)', position: 'fixed', top: 0, zIndex: 1, right: 0 }}>
                    <Space style={{ float: 'right', marginRight: 20 }}>
                        <Dropdown overlay={menu}>
                            <Button type="primary">
                                Hesap İşlemleri <DownOutlined />
                            </Button>
                        </Dropdown>
                    </Space>
                </Header>
                <Content style={{ marginTop: 64, padding: '24px 24px 0', overflow: 'initial' }}>
                    <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                        <AccountSearchCriteria/>
                        <AccountSearchDatagrid onRowSelect={handleRowSelect} onAccountSelect={openDetailsModal} />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design Layout Example</Footer>
            </Layout>
            <AccountAdd visible={isAddModalVisible} onClose={closeAddModal} />
            {selectedAccounts.length === 1 && (
                <AccountUpdate
                    visible={isUpdateModalVisible}
                    onClose={closeUpdateModal}
                    selectedAccount={selectedAccounts[0]}
                />
            )}
            {selectedAccounts.length === 1 && (
                <AccountDelete
                    visible={isDeleteModalVisible}
                    onClose={closeDeleteModal}
                    selectedAccounts={selectedAccounts}
                />
            )}
            {selectedAccount && (
                <AccountDetails
                    visible={isDetailsModalVisible}
                    onClose={closeDetailsModal}
                    account={selectedAccount}
                />
            )}
        </Layout>
    );
};

export default AccountQuery;
