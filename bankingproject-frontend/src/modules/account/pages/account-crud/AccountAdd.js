import React, { useState } from "react";
import {Modal, Form, Input, InputNumber} from "antd";
import {accountSaveAction} from "../../business/actions/accountAction";
import {useDispatch} from "react-redux";

const AccountAdd = ({ visible, onClose }) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const onOkHandle = () => {
        form.validateFields()
            .then((values) => {
                dispatch(accountSaveAction(values));
                form.resetFields();
                onClose();
            })
            .catch((errorInfo) => {
                console.log("Validation failed:", errorInfo);
            });
    };

    return (
        <Modal
            title="Hesap Ekle"
            visible={visible}
            onOk={onOkHandle}
            onCancel={() => {
                form.resetFields();
                onClose();
            }}
            cancelText={"Vazgeç"}
            okText={"Kaydet"}
        >
            <Form
                form={form}
                layout="vertical"
                initialValues={{}}
            >
                <Form.Item
                    name="number"
                    label="Hesap Numarası"
                    rules={[
                        {
                            required: true,
                            message: "Lütfen hesap numarasını girin!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="name"
                    label="Hesap Adı"
                    rules={[
                        {
                            required: true,
                            message: "Lütfen hesap adını girin!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="balance"
                    label="Bakiye"
                    rules={[
                        {
                            required: true,
                            message: "Lütfen bakiyenizi girin!",
                        },
                    ]}
                >
                    <InputNumber
                        style={{ width: "100%" }}
                        min={0}
                        step={0.01}
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AccountAdd;
