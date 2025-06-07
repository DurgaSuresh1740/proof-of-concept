import {Card,Typography,theme,Form,Button,Input} from 'antd';
import { useState } from 'react';
import { loginPageTokens } from './themeConfig';
import { centerItems } from './themeConfig';
import { useNavigate } from 'react-router-dom';
const {Title,Text} = Typography;

const LoginForm = () => {
  const {token} = theme.useToken();
  const[message,setMessage] = useState('')
  const navigate = useNavigate();

  const onFinish=({Username ,Password} : {Username : string ; Password : string})=>{
   if (Username === 'admin' && Password === '1234'){
    setMessage('Login successful');
    navigate('/home');
   }else{
    setMessage('invalid login or password')
   }
  }
  return (
    <div
    style={{
      ...centerItems,
      backgroundColor : token.colorBgLayout,

    }}>
      <Card
      style={{
        width : loginPageTokens.loginCardWidth,
        padding : loginPageTokens.loginCardBg,
        backgroundColor :loginPageTokens.loginCardBg,
        boxShadow : loginPageTokens.loginCardShadow,
        borderRadius : token.borderRadius
      }}
      >
       <Title level={3} style={{textAlign:'center'}}>Login Form</Title> 
       <Form layout='vertical' onFinish={onFinish}>
        <Form.Item label="Username" name="Username" rules={[{required:true}]}>
          <Input/>
        </Form.Item>
         <Form.Item label="Password" name="Password" rules={[{required:true}]}>
          <Input.Password/>
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' block>
            Login
          </Button>
        </Form.Item>
       </Form>
       {
        message && (
         <Text
         style={{textAlign:'center' ,display:'block'}}
         type={message === 'Login successful' ? 'success' : 'danger'}
         >
          { message}
         </Text>
        )
       }
      </Card>
    </div>
  )
}

export default LoginForm
