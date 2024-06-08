import { Button, Layout, theme } from 'antd'
import LogoSideBar from '../Logo-side-bar';
import  style from "./index.module.css"
import MenuList from '../Menu-list';

const {Sider} = Layout;

export default function SidebarMenu(){

    return(
            <>
                <Sider 
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