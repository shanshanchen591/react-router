import React, { Children, useState } from 'react';
import { Menu, Layout, Button, theme, ConfigProvider } from 'antd';
import { Outlet } from 'react-router';
import { useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import darkTheme from './theme';
import "./App.css"


const { Header, Sider, Content } = Layout;
const items = [{
  key: "/",
  icon: <HomeOutlined />,
  label: "Dashboard"
}, {
  key: "/system",
  icon: <SettingOutlined />,
  label: "Config",
  children: [{
    key: "/system/User",
    icon: <UserOutlined />,
    label: "User",
  }]
}
];
function App() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const clickMenuItem = (e) => {
    navigate(e.key);
  }

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <ConfigProvider theme={{algorithm: theme.darkAlgorithm }}>
    <Layout className="layout-container">
      <Header style={{ padding: 0}}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
            color: "white"
          }}
        />
        React Router V6 + Antd
      </Header>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu
            defaultSelectedKeys={['/']}
            items={items}
            mode={"inline"}
            onClick={clickMenuItem} />
        </Sider>
        <Content style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}> 
          <Outlet />
        </Content>
      </Layout>
    </Layout>
    </ConfigProvider>
  );
}

export default App;
