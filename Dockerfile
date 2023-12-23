FROM node:18.18.0

WORKDIR /home

COPY package*.json ./
RUN npm install 
RUN npx playwright install
RUN npx playwright install-deps

COPY . .

EXPOSE  3000

CMD ["npm","start"]