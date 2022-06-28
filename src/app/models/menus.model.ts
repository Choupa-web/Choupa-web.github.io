export interface MenuItem {
  label: string;
  routerLink: string;
  icon?: string;
}

export const MAINMENU: MenuItem[] = [
  { label: 'Dashboard',
    routerLink: 'dashboard',
    icon: 'faDashboard'
  },
  {
    label: 'Mes activités',
    routerLink: 'activities',
    icon: 'biking'
  }
];
