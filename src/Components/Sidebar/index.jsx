import { Button, Layout, theme } from 'antd'
import LogoSideBar from '../Logo-side-bar';
import  style from "./index.module.css"
import MenuList from '../Menu-list';
import { useState } from 'react';
import { RiMenuFold2Line, RiMenuUnfold2Line } from 'react-icons/ri';

const {Sider} = Layout;

export default function SidebarMenu(){

    const [collapsed, setCollapsed] = useState(false)

    return(
            <>
                <Sider 
                    collapsed={collapsed} 
                    theme={'light'} 
                    className={style.sidebar}
                    trigger={null}
                    >
                    <LogoSideBar path="src\Assets\redux.png" theme="ligth"/>
                   
                    <MenuList darkTheme={'ligth'} />

                </Sider>
            </>
        )
}