import React from "react";
import { Row, Input, Form, Card, Button } from "antd";
import { useDispatch } from "react-redux";
import { registerAction } from "./modules/account/business/actions/TokenAction";

function Register() {
    const dispatch = useDispatch();

    const registerButton = (values) => {
        dispatch(registerAction(values));
    };

    return (
        <>
            <Card title="Kayıt Ol" style={{ margin: "auto", marginTop: 150, maxWidth: 400 }}>
                <Form onFinish={registerButton}>
                    <p>
                        <Row>
                            <Form.Item
                                name="username"
                                label="Kullanıcı Adı"
                                rules={[{ required: true, message: "Kullanıcı Adı Yazınız" }]}
                            >
                                <Input placeholder="username" style={{ maxWidth: 150, marginRight: 5 }} />
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item
                                name="password"
                                label="Şifre"
                                rules={[
                                    { required: true, message: "Şifre Yazınız" },
                                    { min: 10, max: 128, message: "Şifre 10 ile 128 karakter arasında olmalıdır" },
                                    {
                                        pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*.,]).{10,128}$/,
                                        message: "Şifre en az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir (!@#$%^&*.,)"
                                    }
                                ]}
                            >
                                <Input type="password" placeholder="password" style={{ maxWidth: 150, marginRight: 5 }} />
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    { required: true, message: "Email Yazınız" },
                                    { type: 'email', message: "Geçerli bir email adresi giriniz" }
                                ]}
                            >
                                <Input placeholder="email" style={{ maxWidth: 150, marginRight: 5 }} />
                            </Form.Item>
                        </Row>
                        <Row>
                            <Button htmlType="submit" ghost type="primary">Kayıt Ol</Button>
                        </Row>
                    </p>
                </Form>
            </Card>
        </>
    );
}

export default Register;
