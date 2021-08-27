
import React from 'react';
import { Layout } from 'antd';
import './App.css';
import Forecast from './components/Forecast.js'

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', color: 'white' }}>Natalie's Weather Channel</Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Forecast></Forecast>
        </Content>
        <Footer>Pug Landia™️</Footer>
      </Layout>

    </div>
  );
}

export default App;
