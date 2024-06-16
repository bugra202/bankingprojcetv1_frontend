import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { clearReloadAction, searchAccount } from "../../business/actions/accountAction";
import { Link } from 'react-router-dom';

const AccountSearchDatagrid = ({ onRowSelect, onAccountSelect }) => {
    const dispatch = useDispatch();
    const accountList = useSelector(state => state.account.listAccount);
    const reloadAccount = useSelector(state => state.account.reloadAccount);
    const filters = useSelector(state => state.account.filters);

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    useEffect(() => {
        if (reloadAccount) {
            dispatch(clearReloadAction());
            dispatch(searchAccount(filters));
        }
    }, [reloadAccount]);

    const onChange = (selectedRowKeys, selectedRows) => {
        setSelectedRowKeys(selectedRowKeys);
        onRowSelect(selectedRows);
    };

    const columns = [
        {
            title: 'Hesap Numarası',
            dataIndex: 'number',
            key: 'number',
            render: (text, record) => (
                <Link to="#" onClick={() => onAccountSelect(record)}>
                    {text}
                </Link>
            ),
        },
        {
            title: 'Hesap Adı',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Bakiye',
            dataIndex: 'balance',
            key: 'balance',
        },
    ];

    return (
        <div>
            <Table
                rowSelection={{
                    type: 'checkbox',
                    onChange: onChange,
                    selectedRowKeys: selectedRowKeys,
                }}
                dataSource={accountList.map(account => ({ ...account, key: account.number }))}
                columns={columns}
            />
        </div>
    );
};

export default AccountSearchDatagrid;
