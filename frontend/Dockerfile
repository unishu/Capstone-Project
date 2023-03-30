FROM node:18-alpine
RUN npm install -g nodemon

WORKDIR /app

COPY . .

RUN npm install
RUN npm install serve --location=global
RUN npm ci
RUN npm run build


EXPOSE 3000

# Use script specified in package,json
CMD ["npm", "start"]