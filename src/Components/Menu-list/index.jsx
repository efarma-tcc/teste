import { Menu } from "antd";
import { HomeOutlined, DatabaseOutlined, TeamOutlined, ReconciliationOutlined, SettingOutlined } from '@ant-design/icons';
import style from "./index.module.css";
import MenuItem from "antd/es/menu/MenuItem";
import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

export default function MenuList() {
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname.slice(1) || 'home'); // Initial selection based on pathname

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  useEffect(() => {
    setCurrent(location.pathname.slice(1) || 'home'); // Update selection on route change
  }, [location]);

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      theme={'light'}
      className={style.menuBar}
    >
      <MenuItem key="home" className={style.textsidebar} icon={<HomeOutlined />}>
        <Link to="/home">Home</Link>
      </MenuItem>
      <MenuItem key="cadastros" icon={<TeamOutlined />}>
        <Link to="/cadastros">Cadastros</Link>
      </MenuItem>
      <MenuItem key="receitas" icon={<ReconciliationOutlined />}>
        <Link to="/receitas">Receitas</Link>
      </MenuItem>
      <MenuItem key="estoque" icon={<DatabaseOutlined />}>
      <Link to="/estoque">Estoque</Link>
      </MenuItem>
      <MenuItem key="configuracoes" icon={<SettingOutlined />}>
        Configurações
      </MenuItem>
      <MenuItem key="sair" icon={<SettingOutlined />}>
        Sair
      </MenuItem>
    </Menu>
  );
}