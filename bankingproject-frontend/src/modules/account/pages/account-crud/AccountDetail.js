import React, {useState} from 'react';
import {Modal, Button, Descriptions} from 'antd';
import TransferHistoryModal from '../../../transfer/pages/transfer-history/TransferHistoryModal';

const AccountDetails = ({visible, onClose, account}) => {
    const [historyModalVisible, setHistoryModalVisible] = useState(false);

    const handleViewHistory = () => {
        setHistoryModalVisible(true);
    };

    const handleHistoryModalClose = () => {
        setHistoryModalVisible(false);
    };

    return (
        <>
            <Modal
                title="Hesap Detayları"
                visible={visible}
                onCancel={onClose}
                footer={null}
            >
                <div>
                    <p><strong>Hesap Numarası:</strong> {account.number}</p>
                    <p><strong>Hesap Adı:</strong> {account.name}</p>
                    <p><strong>Bakiye:</strong> {account.balance}</p>
                </div>
                <Button type="primary" onClick={handleViewHistory}>
                    View History
                </Button>
            </Modal>
            <TransferHistoryModal
                visible={historyModalVisible}
                onClose={handleHistoryModalClose}
                accountId={account.id}
            />
        </>
    );
};

export default AccountDetails;
