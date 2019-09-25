FROM node:10-alpine as node
WORKDIR /app
COPY . .
RUN npm install
ARG env=prod
RUN npm run build:single-spa

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=node /app/dist /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/nginx.conf

COPY ./bin/entrypoint.sh /
RUN chmod +x entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
