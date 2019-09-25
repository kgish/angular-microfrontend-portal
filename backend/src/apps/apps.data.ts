import { IApp } from './apps.model';

export const APPS: IApp[] = [
  {
    id: '1001',
    name: 'API Dashboard',
    module: 'api-dashboard',
    description: 'This is a really interesting application where you can do alot of cool stuff',
    avatar: 'dashboard',
    link: '/api-dashboard',
    url: 'http://localhost:4201/frontend/main.js',
    roles: ['admin', 'support', 'operator', 'user']
  },
  {
    id: '1002',
    name: 'Address Service',
    module: 'address-service',
    description: 'This is another really interesting application where you can do even more cool stuff',
    avatar: 'store',
    link: '/address-service',
    url: 'http://localhost:4202/frontend/main.js',
    roles: ['admin', 'support', 'operator', 'user']
  },
  {
    id: '1003',
    name: 'File Transfer',
    module: 'file-transfer',
    description: 'Upload and download important files and share with your family and friends',
    avatar: 'cloud_download',
    link: '/file-transfer',
    url: 'http://localhost:4203/frontend/main.js',
    roles: ['admin', 'support', 'operator', 'user']
  },
  {
    id: '1004',
    name: 'Consumer Admin',
    module: 'consumer-admin',
    description: 'Identity management which allows you to create new consumers, edit and delete them',
    avatar: 'people',
    link: '/consumer-admin',
    url: 'http://localhost:4204/frontend/main.js',
    roles: ['admin', 'support']
  },
  {
    id: '1005',
    name: 'Subscriber Info',
    module: 'subscriber-info',
    description: 'Access the central platform where you can easily enter all necessary information for your customer',
    avatar: 'event_note',
    link: '/subscriber-info',
    url: 'http://localhost:4205/frontend/main.js',
    roles: ['admin', 'support', 'operator']
  },
  {
    id: '1006',
    name: 'ENUM Data',
    module: 'enum-data',
    description: 'Technology linking telephony with the Internet allowing providers to share IP access information of with other providers',
    avatar: 'record_voice_over',
    link: '/enum-data',
    url: 'http://localhost:4206/frontend/main.js',
    roles: ['admin', 'support', 'operator']
  },
  {
    id: '1007',
    name: 'Contract Admin',
    module: 'contract-admin',
    description: 'Customer resource management tool linking contracts and other information for reporting and billing purposes',
    avatar: 'folder_shared',
    link: '/contract-admin',
    url: 'http://localhost:4207/frontend/main.js',
    roles: ['admin', 'support']
  },
  {
    id: '1008',
    name: 'Mailman Service',
    module: 'mailman-service',
    description: 'Advanced dashboard interface to the mail subscriptions and listings for customers',
    avatar: 'contact_mail',
    link: '/mailman-service',
    url: 'http://localhost:4208/frontend/main.js',
    roles: ['admin', 'support']
  }
];
