import React, {useEffect} from "react";
import {Form, Input, Modal} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {accountUpdateAction} from "../../business/actions/accountAction";

const AccountUpdate = ({ visible, onClose, selectedAccount }) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        if (visible && selectedAccount) {
            form.setFieldsValue({
                number: selectedAccount.number,
                name: selectedAccount.name,
                balance: selectedAccount.balance,
            });
        }
    }, [visible, selectedAccount, form]);

    const onOkHandle = () => {
        form.validateFields()
            .then((values) => {
                const updatedAccount = {
                    ...selectedAccount,
                    ...values,
                };
                dispatch(accountUpdateAction(updatedAccount, updatedAccount.id));
                form.resetFields();
                onClose(); // Modal'ı kapat
            })
            .catch((errorInfo) => {
                console.log("Validation failed:", errorInfo);
            });
    };

    const handleCancel = () => {
        form.resetFields();
        onClose();
    };

    return (
        <Modal
            title="Hesap Güncelle"
            visible={visible}
            onOk={onOkHandle}
            onCancel={handleCancel}
            cancelText="Vazgeç"
            okText="Güncelle"
        >
            <Form
                form={form}
                layout="vertical"
                initialValues={{
                    number: selectedAccount?.number || "",
                    name: selectedAccount?.name || "",
                    balance: selectedAccount?.balance || "",
                }}
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
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AccountUpdate;
