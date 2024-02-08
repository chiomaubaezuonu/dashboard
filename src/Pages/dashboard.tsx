import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons'
import { Card, Space, Statistic, Typography } from 'antd'
import React from 'react'

const Dashboard = () => {
    return (
        <div>
            <Typography.Title level={4}>Dashboard
                <Space direction='horizontal'>
                    <Card>
                        <Space direction='horizontal'>
                            <DashboardCard icon={ShoppingCartOutlined} title={"Orders"} value={2000} />
                            <DashboardCard icon={ShoppingOutlined} title={"Inventory"} value={2500} />
                            <DashboardCard icon={UserOutlined} title={"Customers"} value={3800} />
                            <DashboardCard icon={DollarCircleOutlined} title={"Revenue"} value={2000000} />
                        </Space>
                    </Card>
                </Space>
            </Typography.Title>
        </div>
    )
}

function DashboardCard({ title, value, icon }: any) {
    return (
        <Card>
            <ShoppingCartOutlined />
            {icon}
            <Statistic title={title}  value={value} />
        </Card>
    )
}
export default Dashboard