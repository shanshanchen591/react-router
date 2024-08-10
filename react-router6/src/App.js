import React, { Children, useState, useEffect } from 'react';
import { Menu, Layout, Button, theme, ConfigProvider } from 'antd';
import { Outlet } from 'react-router';
import { useNavigate, useLocation } from "react-router-dom";
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
    key: "/system/user",
    icon: <UserOutlined />,
    label: "User",
  }, {
    key: "/system/network",
    icon: <SettingOutlined />,
    label: "Network",
  }]
}, {
  key: "/alarm",
  icon: <WarningOutlined />,
  label: "Alarm"
}, {
  key: "/history",
  icon: <HomeOutlined />,
  label: "History"
}
];
function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [pathName, setPathName] = useState("/");
  const navigate = useNavigate();
  const location = useLocation();

  const clickMenuItem = (e) => {
    navigate(e.key);
    setPathName(e.key);
  }

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    setPathName(location.pathname);
  }, [location.pathname])

  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <Layout className="layout-container">
        <Header style={{ padding: 0 }}>
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
              defaultSelectedKeys={["/"]}
              items={items}
              mode={"inline"}
              selectedKeys={[pathName]}
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
