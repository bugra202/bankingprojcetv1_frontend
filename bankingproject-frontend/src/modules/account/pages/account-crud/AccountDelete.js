import React from "react";
import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {deleteAccountAction, searchAccount} from "../../business/actions/accountAction";

const { confirm } = Modal;

const AccountDelete = ({ visible, onClose, selectedAccounts }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        selectedAccounts.forEach(account => {
            dispatch(deleteAccountAction(account.id));
        });
        onClose();
    };

    const showDeleteConfirm = () => {
        confirm({
            title: 'Hesapları Sil',
            icon: <ExclamationCircleOutlined />,
            content: `Seçili hesapları silmek istediğinize emin misiniz?`,
            okText: 'Sil',
            okType: 'danger',
            cancelText: 'Vazgeç',
            onOk() {
                handleDelete();
            },
            onCancel() {
                onClose();
            },
        });
    };

    return (
        <Modal
            title="Hesap Sil"
            visible={visible}
            onCancel={onClose}
            footer={[
                <Button key="cancel" onClick={onClose}>
                    Vazgeç
                </Button>,
                <Button key="delete" type="primary" danger onClick={showDeleteConfirm}>
                    Sil
                </Button>,
            ]}
        >
            {selectedAccounts.map(account => (
                <p key={account.number}>Hesap numarası: {account.number}, Hesap adı: {account.name}</p>
            ))}
        </Modal>
    );
};

export default AccountDelete;
