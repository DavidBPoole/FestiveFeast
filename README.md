<img width="510" alt="Screenshot 2023-10-06 at 9 54 14 PM" src="https://github.com/DavidBPoole/FestiveFeast/assets/127453405/c9fb3863-f9d8-439f-acf5-5075aee5f412">

# Festive Feast [![Netlify Status](https://api.netlify.com/api/v1/badges/6a486635-27ab-4dce-902f-a183c257f856/deploy-status)](https://app.netlify.com/sites/davidbpoole-festive-feast/deploys)

# Overview
This application aims to alleviate the stress and scheduling headaches experienced around holiday and family events consolidating relevant information, such as dates, location, items, supplies, food, participant contact information and responsibilities for enhanced tracking and organization all at the user's fingertips at a glance.

# Process Flow
[Wireframes](https://www.figma.com/file/VHsj9bnFvcFg1xLE9zR2Tl/Festive-Feast?type=design&mode=design&t=mTGoGDEbH4vCEz0x-0)

#Project Board
[View Project Board](https://github.com/users/DavidBPoole/projects/2)

# Deployed Project Demo
[View Demo](https://davidbpoole-festive-feast.netlify.app/)

# User Description
- a user of this application is someone who desires an easier way to track, organize and view relevant information for an event at a glance saving them time by not having to track down communications buried in text threads, voicemails, he said/she said conversations or having to discuss with various individuals repeatedly details about an event.
- anyone who has a busy schedule
- anyone who likes time management
- anyone who prefers a better way to organize holidays and family events
- anyone who does not want to track down individuals or commitments

# Features
- Authenticated registration/sign-in
- Home user profile page
- Public Events page
- Public Supplies page
- Private User Items Page
- Event creation/edit/delete
- Supply creation/edit/delete
- Search Bar
- Event Participants Table

# Project Images
<img width="882" alt="Sign In" src="https://github.com/DavidBPoole/FestiveFeast/assets/127453405/ddb44fc8-136a-4f1f-851a-07288b136764">
<img width="1385" alt="Welcome Page" src="https://github.com/DavidBPoole/FestiveFeast/assets/127453405/290f66e9-bf89-49ce-adca-af3f9531d0d5">
<img width="1343" alt="Events" src="https://github.com/DavidBPoole/FestiveFeast/assets/127453405/b9b8d44e-b8fd-4ce1-b395-d35c6f3dd906">
<img width="1426" alt="Event Information" src="https://github.com/DavidBPoole/FestiveFeast/assets/127453405/8a1d80be-1bc8-456d-b49e-3102db8f3095">
<img width="1128" alt="Supplies" src="https://github.com/DavidBPoole/FestiveFeast/assets/127453405/1b6033bc-4af8-46cf-b4c4-8c2d7419f419">
<img width="1367" alt="Supply Information" src="https://github.com/DavidBPoole/FestiveFeast/assets/127453405/7c0d96ed-787b-4b61-b913-7cd08818dbc7">
<img width="1356" alt="Search Results" src="https://github.com/DavidBPoole/FestiveFeast/assets/127453405/1c6be797-d0ab-423c-94ca-b4f5f3afdf71">
<img width="1375" alt="Profile" src="https://github.com/DavidBPoole/FestiveFeast/assets/127453405/b53d37a9-b987-459c-b0b0-e1d933dafa54">

# Contributors
[David Poole](https://github.com/DavidBPoole)

# Tech Stacks
ReactJS
NextJS
JS6
CSS3
HTML5
Firebase
Bootstrap
Figma

****************************************************************************
Setup & Instructions
# React/Next.js Template

[See Live Demo of this Template](https://drt-next-js-template.netlify.app/)

## Topics
- [Get Started](#get-started)
- [Starting the Project](#starting-the-project)
- [Using axios](#using-axios)
- [Deploying on Netlify](#deploying-on-netlify)
___
## Getting Started
### Use Template
#### 1. To get started, click the GREEN "Use this Template" button at the top of the repo
<img width="915" alt="Screen Shot 2022-07-06 at 12 54 01 PM" src="https://user-images.githubusercontent.com/29741570/177612998-4aac9237-5a1e-4f13-8ae0-468587521564.png">

#### 2. Make sure YOUR github account is selected in the dropdown and name your project
<img width="763" alt="Screen Shot 2022-07-06 at 12 54 48 PM" src="https://user-images.githubusercontent.com/29741570/177613126-dd38f678-7553-4f27-8a4a-75680f14d71e.png">

#### 3. Clone your new repo to your local machine
#### 4. Go to the **NEXT** section

## Starting the Project
1. Create a Firebase project and set up authentication. Use [these videos](https://vimeo.com/showcase/codetracker-firebase) as a refresher if needed.
1. Create a `.env` file at the root of the project
1. Copy/Paste the contents of the `.env.sample` file to your newly created `.env` file.
1. Copy over all of your Firebase values into the `.env` file.
1. Open the `package.json` file and change the `name` property to the name of your application, and `author` to  your name.
1. From your command line, be in the root directory and run `npm install` OR `npm i` for short.
1. Next, run `npm run prepare`. This command sets up husky to track eslint errors on commit that will make your deploy fail on Netlify.
1. To start your application, run `npm run dev`. THIS IS THE COMMAND YOU WILL USE TO RUN YOUR DEVELOPMENT SERVER FROM NOW ON.
1. Open [http://localhost:3000](http://localhost:3000) with your browser.

### If you see this, you are set to go!
<img width="450" alt="Screen Shot 2022-07-06 at 1 07 27 PM" src="https://user-images.githubusercontent.com/29741570/177615077-9b6a75bc-0260-4d29-bb88-bd95a3140687.png">


You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

**NOTES:** 
- If you see the following error, you did not follow all the setup steps correctly and failed to add your Firebase creds. Go back and do that NOW.

<img width="1043" alt="Screen Shot 2022-07-06 at 11 18 45 AM" src="https://user-images.githubusercontent.com/29741570/177612501-c2628f18-4bbd-4de9-aae6-27ffba1172d6.png">

### Deploying on Netlify
Netlify will automatically detect your project and prepopulate the settings, but should something go wrong and it does not, here are the commands:

- Build Command: `npm run build`
- Publish directory: `.next`

#### Additional Steps to Take on Netlify
- Add Environmental Variables
    - Any Enviromental variables you are using in your `.env` file should be added to Netlify. 
        - Go to Site settings > Build & deploy > Environment > Environment variables and the keys and values there.

- Update Firebase URL Settings
    - In Firebase under Authentication select sign in methods, scroll to Authorized domains. Add your Netlify URL.
        
## Learn More about Next.js
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
