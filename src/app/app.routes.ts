import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotificationPageComponent } from './pages/notification-page/notification-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
    {
        path: 'home',
        component: HomePageComponent,
    },
    {
        path: 'notification',
        component: NotificationPageComponent,
    },
    {
        path: '**',
        component: HomePageComponent,
    },
];
