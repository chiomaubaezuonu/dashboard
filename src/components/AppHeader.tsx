import { Badge, Image, Space, Typography } from 'antd'
import { MailOutlined, BellFilled } from "@ant-design/icons"
import React from 'react'

const AppHeader = () => {
    return (
        <div className='header'>
            <Image width={60} src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=626&ext=jpg&ga=GA1.1.748510803.1701480015&semt=ais" alt='logo'></Image>
            <Typography.Title>Oma's Dashboard</Typography.Title>
            <Space>
                <Badge count={10} dot>
                    <MailOutlined style={{ fontSize: 24 }} />
                </Badge>
                <Badge count={20}>
                    <BellFilled style={{ fontSize: 24 }} />
                </Badge>
            </Space>
        </div>
    )
}

export default AppHeader