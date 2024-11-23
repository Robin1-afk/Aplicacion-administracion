// assets
import { PieChartOutlined , TeamOutlined, SnippetsOutlined } from '@ant-design/icons';

// icons
const icons = {
  PieChartOutlined , TeamOutlined, SnippetsOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'Dashboard',
      title: 'Panel',
      type: 'item',
      url: '/Dashboard',
      icon: icons.PieChartOutlined ,
      breadcrumbs: false
    },
    {//Colaboradores
      id: 'OtraPagina',
      title: 'Colaboradores',
      type: 'item',
      url: '/OtraPagina',
      icon: icons.TeamOutlined,
      breadcrumbs: false
    },
    {//Negocios
      id: 'Negocios',
      title: 'Negocios',
      type: 'item',
      url: '/Negocios',
      icon: icons.SnippetsOutlined,
      breadcrumbs: false
    }
    
  ]
};

export default dashboard;
