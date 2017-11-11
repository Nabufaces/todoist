import Main from './Main';

const routeConfig = [
    {   path: '/',
        component: Main,
        // indexRoute: { component: Dashboard },
        // childRoutes: [
        //     { path: 'about', component: About },
        //     { path: 'inbox',
        //         component: Inbox,
        //         childRoutes: [
        //             { path: '/messages/:id', component: Message },
        //             { path: 'messages/:id',
        //                 onEnter: function (nextState, replaceState) {
        //                     replaceState(null, '/messages/' + nextState.params.id)
        //                 }
        //             }
        //         ]
        //     }
        // ]
    }
]