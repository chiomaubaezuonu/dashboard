import {Typography} from "antd"
import React from 'react'

const AppFooter = () => {
  return (
    <div className='footer'>
        <Typography.Link href="tel:+09079773314">09070773314</Typography.Link>
        <Typography.Link href="https:///www.google.com">Privacy Policy</Typography.Link>
        <Typography.Link href="https:///www.google.com">Terms of use</Typography.Link>
    </div>
  )
}

export default AppFooter