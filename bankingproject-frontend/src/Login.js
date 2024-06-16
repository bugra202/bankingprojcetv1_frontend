import React, { useState } from "react";
import { Row, Input, Form, Card, Button, Alert } from "antd";
import { useDispatch } from "react-redux";
import { loginAction } from "./modules/account/business/actions/TokenAction";
import Register from "./Register"; // Import the Register component

function Login() {
    const [isRegister, setIsRegister] = useState(false); // State to toggle between login and register
    const dispatch = useDispatch();

    const loginButton = (values) => {
        dispatch(loginAction(values));
    };

    return (
        <>
            <Card title={isRegister ? "Kayıt Ol" : "Kullanıcı Girişi"}
                  style={{ margin: "auto", marginTop: 150, maxWidth: 400 }}>
                {isRegister ? (
                    <Register />
                ) : (
                    <Form onFinish={loginButton}>
                        <p>
                            <Row>
                                <Form.Item
                                    name={"email"}
                                    label={"Email"}
                                    rules={[{ required: true, message: "Mail Adresinizi Yazınız" }]}
                                >
                                    <Input placeholder="email" style={{ maxWidth: 150, marginRight: 5 }} />
                                </Form.Item>
                            </Row>
                            <Row>
                                <Form.Item
                                    name={"password"}
                                    label={"Şifre"}
                                    rules={[{ required: true, message: "Şifre Yazınız" }]}
                                >
                                    <Input type="password" placeholder="password" style={{ maxWidth: 150, marginRight: 5 }} />
                                </Form.Item>
                            </Row>
                            <Row>
                                <Button htmlType="submit" ghost type={"primary"}>Giriş</Button>
                            </Row>
                        </p>
                    </Form>
                )}
                <Row>
                    <Button onClick={() => setIsRegister(!isRegister)} type="link">
                        {isRegister ? "Giriş Yap" : "Kayıt Ol"}
                    </Button>
                </Row>
            </Card>
        </>
    );
}

export default Login;
