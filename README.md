# Angular microfrontend portal

Web portal for seamlessly combining multiple angular microfrontends within a single page using single signon. Each
of the angular applications is created and managed by Angular CLI.

It uses the [single-spa framework](https://single-spa.js.org) to pull this miracle off, which means that you can even 
add React, Vue, or other frameworks as additional microfrontends.

This example only uses Angular applications.

See: [Building single-spa applications which use Angular](https://github.com/CanopyTax/single-spa-angular).

## Installation

```sh
$ git clone ... 
$ cd ...
$ chmod +x *.sh
```

Note that the developer experience for this project will be improved as time goes on: [issue #41](https://github.com/CanopyTax/single-spa-angular/issues/41)

After cloning the repo, run the following commands in a terminal from inside of the cloned project:

```sh
$ ./build-all.sh
```

## Start

```sh
$ ./run.sh
$ npx light-server -s . --historyindex '/index.html' -o
```

If you want set up a watcher so that you don't have to wait for an entire rebuild everytime you make a code change, run `ng build --watch` in whichever application(s) that you are working on.

## Frontend

```
$ cd frontend
$ npm run build:single-spa
$ docker-compose build
$ docker-compose up -d
```

Ensure it is accessible.

```
$ wget http://localhost:4201/frontend/main.js
```

## References

The following links should help you understand better how all of this works.

* [single-spa.js.org](https://single-spa.js.org)
* [single-spa-portal-example](https://gitlab.com/TheMcMurder/single-spa-portal-example)
* [single-spa-angular](https://github.com/CanopyTax/single-spa-angular)
* [coexisting-angular-frontends](https://github.com/joeldenning/coexisting-angular-microfrontends)
