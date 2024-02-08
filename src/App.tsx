import { Button, Space } from 'antd'
import React from 'react'
import "./App.css"
import AppHeader from './components/AppHeader'
import SideMenu from './components/SideMenu'
import PageContent from './components/PageContent'
import AppFooter from './components/AppFooter'

const Home = () => {
  return (
    <div className='app'>
      <AppHeader />
      <Space className='sidemenuAndPageContent'>
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </Space>
      <AppFooter />

    </div>
  )
}

export default Home