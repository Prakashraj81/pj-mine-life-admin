import {
  IconLayoutDashboard, IconTicket, IconUsersGroup, IconAtom, IconAddressBook, IconArticle, IconHelpOctagon, IconBuildingCommunity
} from '@tabler/icons-react';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: false,
    subheader: 'Home',
  },
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/',
  },  
  {
    id: uniqueId(),
    title: 'Users',
    icon: IconUsersGroup,
    href: '/pages/users',
  },  
  {
    id: uniqueId(),
    title: 'Consultations',
    icon: IconAtom,
    href: '/pages/consultation',
  },  
  {
    id: uniqueId(),
    title: 'Contact Us',
    icon: IconAddressBook,
    href: '/pages/contact-us',
  },  
  //Heading
  {
    navlabel: false,
    subheader: 'Contents management',
  },
  {
    id: uniqueId(),
    title: 'Blog',
    icon: IconArticle,
    href: '/pages/blog',
  },
  {
    id: uniqueId(),
    title: 'FAQ',
    icon: IconHelpOctagon,
    href: '/pages/faq',
  },
  {
    id: uniqueId(),
    title: 'Company Info',
    icon: IconBuildingCommunity,
    href: '/pages/company-information',
  },
  //Heading
  {
    navlabel: true,
    subheader: 'Support ticket',
  },
  {
    id: uniqueId(),
    title: 'Ticket',
    icon: IconTicket,
    href: '/pages/tickets',
  },
];

export default Menuitems;
