import React from "react";
import { Button, Flex, Form, Grid, Input, Layout, Typography, theme, ConfigProvider, Image, message } from "antd";
import { useNavigate } from "react-router-dom";
import { LockOutlined, PhoneOutlined } from "@ant-design/icons";
import { API_URL } from "../../lib";
import intro from "../../assets/intro.mp4"
import img from "../../assets/logo.png"
const { useToken } = theme

const Signin: React.FC = () => {
    const { token } = useToken();
    const screens = Grid.useBreakpoint();
    const navigate = useNavigate();

    const onFinish = async (values: any) => {
        const response = await fetch(`${API_URL}/users/verify/admin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values),
            credentials: 'include'
        })
        console.log(response)
        const data = await response.json();
        data.status === "fail" ? message.error(data.message) : navigate('/')
    };

    return (
        <Layout style={{ margin: -8 }}>
            <Flex>
                <ConfigProvider
                    theme={{
                        algorithm: theme.darkAlgorithm,

                    }}
                >
                    <Layout>

                        <section
                            style={{
                                alignItems: "center",
                                display: "flex",
                                width: screens.sm ? "70vh" : "auto",
                                height: screens.sm ? "100vh" : "auto",
                                padding: screens.md ? `${token.sizeXXL}px 0px` : "0px",
                            }}
                        >

                            <div
                                style={{
                                    margin: "0 auto",
                                    padding: screens.md ? `${token.paddingXL}px` : `${token.paddingXL}px ${token.padding}px`,
                                    width: "400px",
                                }}
                            >
                                <div style={{ textAlign: "center", marginBottom: token.marginXL }}>
                                    <Image preview={false} width={55} src={img} />
                                    <Typography.Title style={{ fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3 }}>
                                        Log In
                                    </Typography.Title>
                                    <Typography.Text style={{ color: 'white' }}>
                                        Welcome back !
                                    </Typography.Text>
                                    <Typography.Text style={{ color: 'white' }}>
                                        <br />Please enter your details below to
                                        sign in.
                                    </Typography.Text>
                                </div>
                                <Form
                                    name="signin"
                                    onFinish={onFinish}
                                    layout="vertical"
                                    requiredMark="optional"
                                >

                                    <Form.Item
                                        name="phone"
                                    // rules={[
                                    //     {
                                    //         type: "number",
                                    //         required: true,
                                    //         message: "Please input your Mobile Number!",
                                    //     },
                                    // ]}
                                    >
                                        <Input prefix={<PhoneOutlined />} placeholder="Phone" />
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input your Password!",
                                            },
                                        ]}
                                    >
                                        <Input.Password
                                            prefix={<LockOutlined />}
                                            type="password"
                                            placeholder="Password"
                                        />
                                    </Form.Item>
                                    <Form.Item style={{ marginBottom: "0px" }}>
                                        <Button block type="primary" htmlType="submit">
                                            Sign in
                                        </Button>
                                        <div style={{ marginTop: token.marginLG, display: 'flex', justifyContent: 'space-evenly' }}>
                                            <Typography.Text style={{ color: 'white' }}>
                                                Forgetten your Password?  {" "}
                                            </Typography.Text>
                                            <Typography.Link onClick={() => message.info('Request Sended wait for Few Minutes!')}>Send Request</Typography.Link>
                                        </div>
                                    </Form.Item>
                                </Form>
                            </div>
                        </section>
                    </Layout>
                    <Layout style={{ overflow: 'hidden' }}>
                        {/* <Image preview={false} height={"100vh"} src="https://image.made-in-china.com/44f3j00mtuhDzEIOocq/Yog-Motorcycle-Spare-Part-Front-Fender-for-Bizz-200gy.webp" />*/}
                        <video style={{ width: screens.sm ? "177.5vh" : "auto", }} autoPlay loop muted>
                            <source src={intro} type="video/mp4"></source>
                        </video>
                    </Layout>
                </ConfigProvider>
            </Flex>
        </Layout >
    );
}

export default Signin