FROM node:18-alpine
RUN npm install -g nodemon

WORKDIR /app

COPY . .

RUN npm install


EXPOSE 5000

# Use script specified in package,json
CMD ["node", "server"]