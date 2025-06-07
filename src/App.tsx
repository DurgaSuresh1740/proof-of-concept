import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import { ConfigProvider } from 'antd';
import { customTheme } from './themeConfig';
// import HomePage from "./HomePage";
import { Suspense,lazy } from "react";

const HomePage = lazy(()=> import('./HomePage'))
const App = ()=>{
  return(
    <div >
      
      <ConfigProvider theme={customTheme}>
         <Router>
        <Suspense fallback={<div>Loading.....</div>}>
          <Routes>
            <Route path="/" element={<LoginForm/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route/>
          </Routes>
        </Suspense>
      </Router>
    </ConfigProvider>
    </div>
  )
}

export default App;