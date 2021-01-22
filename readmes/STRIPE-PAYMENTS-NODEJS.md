# STRIPE PAYMENTS DOCUMENTATION

## DEFINITION
- It is JS library that handles online and international payments;

## STRIPE.COM: DOCS, API AND OFFICIAL WEBSITE
https://stripe.com/

## MAKE A FREE ACCOUNT BEFORE KEEP GOING ON
https://dashboard.stripe.com/register

## STEPS TO INTEGRATE WITH THE SYSTEM
1. Create a free account;
2. Confirm your email;
3. Get your [API Key](https://dashboard.stripe.com/test/apikeys);
4. Get the "Publishable key" before (only to call the ready elements to the page);
5. Install the library: ``yarn add react-stripe-checkout``;
6. Create the component and use it;
7. Use this fake credit card numbers: 
    - Number: 4242 4242 4242 4242;
    - Exp: 01/20;
    - CW: 123;

## BACKEND STRIPE: FULL INSTALLATION AND CONFIGURATION
- [Repository Used for Reference](https://github.com/ZhangMYihua/lesson-31);
1. Access the Stripe Dashboard, where the API Keys are located(https://dashboard.stripe.com/test/apikeys);
2. Get the Secret Key to use on our BackEnd application;
- If you let this Secret Key exposed, people can steal or do some shit with that;
- The truth is: you cannot hide anything from BackEnd;
- So we would need to this API Key on the BackEnd;
- We are going to hide the Secret Key on the BackEnd;

## NODE.JS: We're going to write this BackEnd using Node.JS;
- Basically Node.JS is a way of using JavaScript on the BackEnd;
- Node JS [official docs](https://nodejs.org/pt-br/docs/)

- Create your node API files;
- Copy the secret key API from Strapi and paste on a file called ".env" at the root folder;

- Our .env file is added to the .gitignore file, so it will never be commited;
- Or else, <b>secretkey was added to .gitignore</b>;

## PAYMENT FLOW
<img src="https://raw.githubusercontent.com/jvlessa/React--Zero-To-Mastery/master/readmes/media/paymentFlow
.jpg">

## AFTER PAYMENT
- Access this URL to check:
https://dashboard.stripe.com/test/payments?status%5B%5D=successful