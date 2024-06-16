import React from "react";
import { Form, Input, Button, Row, Col, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { searchAccount } from "../../business/actions/accountAction";

const AccountSearchCriteria = () => {
  const formRef = React.createRef();
  const dispatch = useDispatch();

  return (
      <Form
          ref={formRef}
          layout="vertical"
          onFinish={(values) => {
            let dto = {
              ...values,
            };
            dispatch(searchAccount(dto));
          }}
          style={{ margin: "0", padding: '24px', background: '#fff', borderRadius: '8px', width: '100%', height: '100%' }}
      >
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item name="number" label="Hesap Numarası">
              <Input placeholder="Hesap numarası girin" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item name="name" label="Hesap Adı">
              <Input placeholder="Hesap adı girin" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: "right" }}>
            <Space>
              <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
                Ara
              </Button>
              <Button htmlType="reset" title="reset">
                Sıfırla
              </Button>
            </Space>
          </Col>
        </Row>
      </Form>
  );
};

export default AccountSearchCriteria;
