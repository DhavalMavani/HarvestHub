# HarvestHub

## Description

HarvestHub is a feature-rich ecommerce store built with the MERN stack, incorporating third-party APIs. This platform facilitates three main flows:

1. Buyers browse the store categories, products and brands
2. Sellers or Merchants manage their own brand component
3. Admins manage and control the entire store components 

### Features:

- **Backend:**
  - Node.js provides the backend environment.
  - Express middleware handles requests and routes.
  - Mongoose schemas model the application data.

- **Frontend:**
  - React is used for displaying UI components.
  - Redux manages the application's state.
  - Redux Thunk middleware handles asynchronous redux actions.

- **Interactive Chatbot:**
  - OpenAI’s Text-Davinci-003 engine powers a Natural Language Customer Support Chatbot.
  - Seamlessly integrated with Siri on iPhone using a custom-built API.

- **User Authentication:**
  - Users can securely authenticate on the platform.
  - PassportJS is used for authentication in my application

- **Real-time Customer Support:**
  - WebSocket technology enables real-time customer support.
 
- **Product Reviews:**
  - Users have the ability to provide and view product reviews.



## High Level Architecture Diagram
![image](https://github.com/DhavalMavani/HarvestHub/assets/61201815/d042a547-fb61-4b01-84ca-9c98ed95c8ce)

## User Flow Diagram
<img width="325" alt="image" src="https://github.com/DhavalMavani/HarvestHub/assets/61201815/4f4bd018-6d5c-4471-92a4-5a6bc36f54c7">


## GPT3 ARCHITECTURE
<img height="700" alt="image" src="https://github.com/DhavalMavani/HarvestHub/assets/61201815/2f0d3cb7-a4cd-44dc-861a-5151ca8dce96">

For a detailed view and interactive exploration of the GPT3 Architecture, you can also check [this Lucidchart link](https://lucid.app/lucidchart/899ec248-5223-47d3-88e7-61a6b4f3ce6b/edit?invitationId=inv_53178f5b-7304-4075-b5c1-cc243aef3caf).



## Database Seed

* The seed command will create an admin user in the database
* The email and password are passed with the command as arguments
* Like below command, replace brackets with email and password. 
* For more information, see code [here](https://github.com/DhavalMavani/HarvestHub/blob/main/HarvestHub/server/utils/seed.js)

```
npm run seed:db [email: dhavl@gmail.com] [password: abc123] // This is just an example.
```

## Install

Some basic Git commands are:

```
$ git clone https://github.com/DhavalMavani/HarvestHub.git
$ cd HarvestHub
$ npm install
```

## Setup

```
 Create .env file that include:

  * MONGO_URI & JWT_SECRET
  * PORT & BASE_SERVER_URL & BASE_API_URL & BASE_CLIENT_URL
  * MAILCHIMP_KEY & MAILCHIMP_LIST_KEY => Mailchimp configuration
  * MAILGUN_KEY & MAILGUN_DOMAIN & MAILGUN_EMAIL_SENDER => Mailgun configuration
  * GOOGLE_CLIENT_ID & GOOGLE_CLIENT_SECRET & GOOGLE_CALLBACK_URL => Google Auth configuration
  * FACEBOOK_CLIENT_ID & FACEBOOK_CLIENT_SECRET & FACEBOOK_CALLBACK_URL => Facebook Auth configuration
  * AWS_ACCESS_KEY_ID & AWS_SECRET_ACCESS_KEY & AWS_REGION & AWS_BUCKET_NAME => AWS configuration
```

## Start development

```
$ npm run dev
```

## Simple build for production

```
$ npm run build
```

## Run build for production

```
$ npm start
```


## Languages & tools

- [Node](https://nodejs.org/en/)

- [Express](https://expressjs.com/)

- [Mongoose](https://mongoosejs.com/)

- [React](https://reactjs.org/)

- [Webpack](https://webpack.js.org/)



