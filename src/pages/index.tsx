import type { NextPage } from 'next'
import Head from 'next/head'
import "antd/dist/antd.css";
import { Provider } from 'react-redux'
import store from '../store';
import Home from '../components/Home'

declare global {
  interface Window { 
    ethereum: any; 
    web3:any; 
  }
}

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MedIPFS</title>
        <meta name="description" content="Secure Lab Report Sharing" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Provider store={store}>
        <Home></Home>
      </Provider>
    </div>
  )
}


export default Index
