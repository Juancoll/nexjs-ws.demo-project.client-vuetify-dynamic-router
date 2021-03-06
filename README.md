# vuetify-app
## Description
Generic template or Demo with
- Vuetify as material components library 
- lateral drawer with 2 levels of items
- app bar links
- notification system
- status bar
- Multi language with i18n
- unified event system
- centralized environment variables
- Separate Files (*.ts, *.scss,  *.html or *.pug) or *.vue for Components and Views
- @nexjs-ws (websocket) Api for nestjs server
- Http Api for nestjs server
- Dynamic Router based on generic Authentification for User and Roles
   - 3 types of authentification implemented

| auth | description |
|--|--|
| @nexjs-ws authentification | use only web sockets |
| local authentification | using login and password and cookies |
| jwt authentification   | using token to authenticate in Bearer Authentification name|


| options  | descriptions  |
|--|--|
| with login based on user roles |  require login and each role has its own router views   |
| with login for any roles   |  require login and all roles have same router views  |
| no login   |  unique  router views |

## File System
| folder | descriptions |
|--|--|
| @types | typescrit shims or other typescript definition files |
| assets | no-code file required in app 
| lib | all library codes - 


## Commands
``` powershell
npm install         # Project setup
npm run serve       # Compiles and hot-reloads for development
npm run build       # Compiles and minifies for production
npm run lint        # Lints and fixes files
npm run ws:update   # update websocket client api from nestjs server project 
                    # required @nexjs/wsclient packace installed
npm run http:update # update http      client api from nestjs  server project 
                    # required axios package installed
```


## Router configuration 
### In src/router
- index.ts: define routes strategy creating the router 
- create custom routes files (you can follow the current nomenclature)

| folder | routes |
|-- |-- |
| src/router/ | create defaultRoutes.ts or anyRoleRoutes.ts or loginRoutes.ts or unavailableRoutes.ts  |
| src/router/roles/ | create commonRoutes.ts and [role]Routes.ts foeach role |


### branches (routes group) strategy

``` javascript

// BranchRoutes must contains the vue routes and the startup path to begin o fallback.
export interface IBranch {
    routes: RouteConfig[];
    startup: string;
}

// Brances struture for router
export interface IBranches {
    default?: IBranch;
    authenticate?: {
        login?: IBranch;
        anyRole?: IBranch;
        commonForRoles?: RouteConfig[];
        unavailableRole?: IBranch,
        roles?: { [key: string]: IBranch };
    };
}

// Logic
let currentUserRole = "";

if (!useLogin) {
        return default
} else {
    if (!isAuthenticate) {
        return login;
    } else {
        if (!this.useRoles) {
            return anyRole
        } else {
            if (!contains(currentUser)) {
                return unavailableRole;
            } else {
                return roles[role]
            }
        }
    }
}
```

# Creation
- vue create [app] 
- update all packages
- reinstall packages
- add vuetify complement (use vue ui)
- add i18n complement (use vue ui)