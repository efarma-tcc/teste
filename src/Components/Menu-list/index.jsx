import { Menu } from "antd";
import { HomeOutlined, DatabaseOutlined, TeamOutlined, ReconciliationOutlined, SettingOutlined } from '@ant-design/icons';
import style from "./index.module.css";
import MenuItem from "antd/es/menu/MenuItem";
import { useState } from 'react';

export default function MenuList() {
    const [current, setCurrent] = useState('home');

    const handleClick = e => {
        setCurrent(e.key);
    };

    return (
        <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            theme={'light'}
            className={style.menuBar}
        >
            <MenuItem key="home" icon={<HomeOutlined />}>
                Home
            </MenuItem>
            <MenuItem key="cadastros" icon={<TeamOutlined />}>
                Cadastros
            </MenuItem>
            <MenuItem key="receitas" icon={<ReconciliationOutlined />}>
                Receitas
            </MenuItem>
            <MenuItem key="estoque" icon={<DatabaseOutlined />}>
                Estoque
            </MenuItem>
            <MenuItem key="configuracoes" icon={<SettingOutlined />}>
                Configurações
            </MenuItem>
        </Menu>
    );
}
