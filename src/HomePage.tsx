import { useNavigate } from 'react-router-dom';
import { Layout, Typography, theme, Menu, Dropdown, Avatar, Space } from 'antd';
import {
  HomeOutlined,
  PhoneOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const HomePage = () => {
  const { token } = theme.useToken();
  const username = 'admin';
  const navigate = useNavigate();
  const handlelogout = ()=>{
    navigate("/")
  }
  const profileMenu = (
    <Menu>
      <Menu.Item key="username" icon={<UserOutlined />}>
        Username: {username}
      </Menu.Item>
      <Menu.Item key="reset" icon={<SettingOutlined />}>
        Reset Password
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handlelogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        minWidth:'100vw',
        boxSizing: 'border-box',
         overflowX: 'hidden',
      }}
    >
      <Header
        style={{
          backgroundColor: token.colorPrimary,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 24px',
          height: 64,
          flexShrink: 0,
        }}
      >
        <Space size="large" style={{ color: '#fff' }}>
          <Space>
            <HomeOutlined style={{ fontSize: '18px' }} />
            <span>Home</span>
          </Space>
          <Space>
            <PhoneOutlined style={{ fontSize: '18px' }} />
            <span>Contact Info</span>
          </Space>
        </Space>

        <Dropdown overlay={profileMenu} placement="bottomRight" trigger={['click']}>
          <Avatar
            size="large"
            icon={<UserOutlined />}
            style={{ cursor: 'pointer', backgroundColor: '#87d068' }}
          />
        </Dropdown>
      </Header>

      <Content
        style={{
          flexGrow: 1,
          padding: 24,
          backgroundColor: '#fff',
        //   margin: '24px',
          borderRadius: token.borderRadius,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        //   overflowY: 'auto',
        }}
      >
        <Title level={2}>Welcome to the Home Page!</Title>
        <p>This content area stretches to fill space between header and footer.</p>
      </Content>

      <Footer
        style={{
          textAlign: 'center',
          backgroundColor: token.colorBgLayout,
          height: 48,
          lineHeight: '48px',
          flexShrink: 0,
        }}
      >
        ©2025 My App. All rights reserved.
      </Footer>
    </Layout>
  );
};

export default HomePage;
