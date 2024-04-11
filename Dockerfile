FROM node:20-alpine as DEV

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

CMD ["npm", "run", "dev"]

FROM DEV as PROD

RUN npm run build

FROM nginx:alpine

COPY --from=PROD /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=PROD /app/dist .

ENTRYPOINT ["nginx", "-g", "daemon off;"]


