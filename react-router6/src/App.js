import React, { Children, useState } from 'react';
import { Menu, Layout, Button, theme, ConfigProvider } from 'antd';
import { Outlet } from 'react-router';
import { useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  WarningOutlined
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
},{
  key: "/alarm",
  icon: <WarningOutlined />,
  label: "Alarm"
},{
  key: "/history",
  icon: <HomeOutlined />,
  label: "history"
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
          className='collapsed-button'
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
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
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
          className='content-container'> 
          <Outlet />
        </Content>
      </Layout>
    </Layout>
    </ConfigProvider>
  );
}

export default App;
