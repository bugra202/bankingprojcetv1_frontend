import React, {useEffect} from 'react';
import {Modal, Table} from 'antd';
import {searchTransferHistory} from "../../business/actions/transferAction";
import {useDispatch, useSelector} from "react-redux";

const TransferHistoryModal = ({ visible, onClose, accountId }) => {
    const dispatch = useDispatch();
    const transactions = useSelector(state => state.transfer.listTransfer);

    useEffect(() => {
        if (visible && accountId) {
           dispatch(searchTransferHistory(accountId));
        }
    }, [visible, accountId]);

    const columns = [
        { title: 'Transfer Numarası', dataIndex: 'id', key: 'id' },
        { title: 'Tarih', dataIndex: 'transactionDate', key: 'transactionDate' },
        { title: 'Tutar', dataIndex: 'amount', key: 'amount' },
        { title: 'Açıklama', dataIndex: 'status', key: 'status' },
    ];

    return (
        <Modal
            visible={visible}
            onCancel={onClose}
            title="Transfer Geçmişi"
        >
            <Table
                dataSource={transactions}
                columns={columns}
                rowKey="id"
                pagination={false}
            />
        </Modal>
    );
};

export default TransferHistoryModal;
