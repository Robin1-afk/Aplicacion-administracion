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
      id: 'dashboard',
      title: 'Panel',
      type: 'item',
      url: '/dashboard/default',
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
    {//Pedidos
      id: 'Pedidos',
      title: 'Pedidos',
      type: 'item',
      url: '/Pedidos',
      icon: icons.SnippetsOutlined,
      breadcrumbs: false
    }
    
  ]
};

export default dashboard;
