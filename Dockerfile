FROM node:18
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npx prisma generate
CMD ["npm", "start"]