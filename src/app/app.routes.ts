import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotificationPageComponent } from './pages/notification-page/notification-page.component';
import { UploadPageComponent } from './pages/upload-page/upload-page.component';
import { TestPageComponent } from './pages/test-page/test-page.component';

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
        path: 'upload',
        component: UploadPageComponent,
    },
    {
        path: 'test',
        component: TestPageComponent,
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
