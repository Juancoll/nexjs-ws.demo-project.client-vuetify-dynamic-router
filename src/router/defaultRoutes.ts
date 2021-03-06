import { IRouteMetadata } from '@/lib/router';

import HomeView from '@/views/Home.vue';
import AboutView from '@/views/About.vue';
import FeaturesView from '@/views/Features.vue';

import WSConnectionView from '@/views/websockets/WSConnection.vue';
import WSContractAuth from '@/views/websockets/WSContractAuth.vue';
import WSContractBase from '@/views/websockets/WSContractBase.vue';
import WSContractCredentials from '@/views/websockets/WSContractCredentials.vue';

import HttpConnectionView from '@/views/http/HttpConnection.vue';
import HttpDefaultView from '@/views/http/HttpDefault.vue';
import HttpTestApiView from '@/views/http/HttpTest.vue';

import { RouteConfig } from 'vue-router';

export const routes: RouteConfig[] = [
    {
        path: '/default',
        name: 'default',
        component: HomeView,
        meta: {
            showInToolbar: true,
            showInDrawer: true,
            icon: 'mdi-home',
            iconColor: 'primary',
            title: 'Home',
            subtitle: 'default branch - home',
        } as IRouteMetadata,
    },
    {
        path: '/default/about',
        name: 'default-about',
        component: AboutView,
        meta: {
            showInToolbar: true,
            showInDrawer: true,
            icon: 'mdi-information',
            iconColor: 'primary',
            title: 'About',
            subtitle: 'default branch - About',
        } as IRouteMetadata,
    },
    {
        path: '/default/features',
        name: 'default-features',
        component: FeaturesView,
        meta: {
            showInToolbar: true,
            showInDrawer: true,
            icon: 'mdi-power-plug',
            iconColor: 'primary',
            title: 'Features',
            subtitle: 'some usefull features',
        } as IRouteMetadata,
    },
    {
        path: '/default/ws',
        name: 'default-ws',
        component: WSConnectionView,
        meta: {
            showInToolbar: true,
            showInDrawer: true,
            icon: 'mdi-flash',
            iconColor: 'primary',
            title: 'Websockets',
            subtitle: 'WS Connection',
        } as IRouteMetadata,
        children: [
            {
                path: '/default/ws/contracts/Base',
                name: 'default-ws-contracts-base',
                component: WSContractBase,
                meta: {
                    showInToolbar: false,
                    showInDrawer: true,
                    icon: 'mdi-file-document',
                    iconColor: 'secondary',
                    title: 'Contract Base',
                    subtitle: 'basics features',
                    parent: 'default-ws',
                } as IRouteMetadata,
            },
            {
                path: '/default/ws/contracts/auth',
                name: 'default-ws-contracts-auth',
                component: WSContractAuth,
                meta: {
                    showInToolbar: false,
                    showInDrawer: true,
                    icon: 'mdi-file-document',
                    iconColor: 'secondary',
                    title: 'Contract Auth',
                    subtitle: 'Require Authentication',
                    parent: 'default-ws',
                } as IRouteMetadata,
            },
            {
                path: '/default/ws/contracts/credentials',
                name: 'default-ws-contracts-credentials',
                component: WSContractCredentials,
                meta: {
                    showInToolbar: false,
                    showInDrawer: true,
                    icon: 'mdi-file-document',
                    iconColor: 'secondary',
                    title: 'Contract Credentials',
                    subtitle: 'Require Credentials',
                    parent: 'default-ws',
                } as IRouteMetadata,
            },
        ],
    },
    {
        path: '/default/http',
        name: 'default-http',
        component: HttpConnectionView,
        meta: {
            showInToolbar: true,
            showInDrawer: true,
            icon: 'mdi-flash',
            iconColor: 'primary',
            title: 'Http',
            subtitle: 'Http Connection',
        } as IRouteMetadata,
        children: [
            {
                path: '/default/http/default',
                name: 'default-http-default',
                component: HttpDefaultView,
                meta: {
                    showInToolbar: false,
                    showInDrawer: true,
                    icon: 'mdi-file-document',
                    iconColor: 'secondary',
                    title: 'Http Default Api',
                    subtitle: 'http api\'s',
                    parent: 'default-http',
                } as IRouteMetadata,
            },
            {
                path: '/default/http/test',
                name: 'default-http-test',
                component: HttpTestApiView,
                meta: {
                    showInToolbar: false,
                    showInDrawer: true,
                    icon: 'mdi-file-document',
                    iconColor: 'secondary',
                    title: 'Http Test Api',
                    subtitle: 'http api\'s',
                    parent: 'default-http',
                } as IRouteMetadata,
            },
        ]
    }
];
