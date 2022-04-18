/*总结
简单搭了个上中下布局
待完成：导航条（样式需要深究） 面包屑（需考虑实际的跳转情况）

*/
import logo from './logo.svg';
import './App.css';
import { Layout} from 'antd';
import './style.css'

function App() {
  const {Header, Content, Footer} = Layout;
  return (
      <Layout>
        <Header className='head'>header</Header>
        <Layout className='layout'>
          <Header className='subhead'>Home/List/App</Header>
          <Content className='content'>Content</Content>
          <Footer className='footer'>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
  );
}

export default App;
