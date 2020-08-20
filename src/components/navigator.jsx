import React, { useState } from 'react'
import {Menu} from 'antd'

export default function Navigator() {
    const [current, setCurrent] = useState('about');
    const handleClick = (e) => {
        setCurrent(e.key)
    }

    return <div>
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="about">
            Navigation One
            </Menu.Item>
        </Menu>
    </div>
}