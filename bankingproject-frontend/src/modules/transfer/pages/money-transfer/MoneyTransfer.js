import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { searchAccount } from "../../../account/business/actions/accountAction";
import { moneyTransferAction } from "../../business/actions/transferAction";

const { Option } = Select;

const MoneyTransfer = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const accounts = useSelector(state => state.account.listAccount);

    useEffect(() => {
        dispatch(searchAccount());
    }, [dispatch]);

    const onFinish = (values) => {
        const fromAccount = accounts.find(account => account.id === values.from);
        const toAccount = accounts.find(account => account.id === values.to);

        const transferData = {
            fromId: fromAccount.id,
            toId: toAccount.id,
            amount: values.amount
        };

        dispatch(moneyTransferAction(transferData));
        form.resetFields();
    };

    return (
        <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
                name="from"
                label="From Account"
                rules={[{ required: true, message: 'Please select the from account!' }]}
            >
                <Select placeholder="Select From Account">
                    {accounts.map(account => (
                        <Option key={account.id} value={account.id}>
                            {account.number}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                name="to"
                label="To Account"
                rules={[{ required: true, message: 'Please select the to account!' }]}
            >
                <Select placeholder="Select To Account">
                    {accounts.map(account => (
                        <Option key={account.id} value={account.id}>
                            {account.number}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                name="amount"
                label="Amount"
                rules={[{ required: true, message: 'Please input the amount!' }]}
            >
                <Input type="number" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Transfer
                </Button>
            </Form.Item>
        </Form>
    );
};

export default MoneyTransfer;
