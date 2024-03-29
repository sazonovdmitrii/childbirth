## Front-end

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

### Scripts

`yarn start`
Start webpack-dev-server w/o ssr.

`yarn build`
Build new bundle.

`yarn ssr:start`
Start nodejs server with ssr.(PRODUCTION)

### Stack

-   [React.js](https://github.com/facebook/react)
-   [React Apollo](https://github.com/apollographql/react-apollo)
-   [React Router](https://github.com/ReactTraining/react-router)
-   [Koa](https://github.com/koajs/koa)

### env

```sh
GRAPHQL=http://localhost/graphql/
DATABASE=dbhost
DB_USER=user
DB_PASSWORD=password
DB_NAME=dbname
```

### production startup

1. `yarn global add @babel/core @babel/node pm2`
2. in this folder `pm2 start`
3. go drink beer

### how to use pm2

-   `pm2 start` - start server with config from `ecosystem.config.js`
-   `pm2 l` - show all process
-   `pm2 logs` - show logs
-   `pm2 monit` - launch dashboard with monitoring and logs
-   `pm2 reload all` - restart servers(for example after rebuild server(`yarn build`))
-   `pm2 flush` - empty all application logs

### skeleton

http://danilowoz.com/create-content-loader/
