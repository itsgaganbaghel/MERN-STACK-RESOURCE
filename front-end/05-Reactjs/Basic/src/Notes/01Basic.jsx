/*
* Notes

? Introduction of react js 
react is a js library that is used to create the UI of the website 
it follows flux architecture - one direction flow of data 
it works on a declaretive approach - u need to just tell the final sate or end state 
react is all about component 
react js divide whole website into components
components : it is a piece of code that are used in the making of website 
It follow the single page application approach  : there is a single page , the changes will occur in the same pages 
In this, we can provide or change the dynamic values 

? who create react js 
it is created by jorden in 2009 , he is a senior software engginer in facebook 

? why react js created 
It was created because solving or fixing the problem of real time chnages in the website 
and react done or resolve this problem by using state and props 

? advantages 
readability 
accessability 
reusability
maintainability 
DRY - Do not reapet yourself 

? SetUP of react js 
npm create vite@latest < projectname >
cd projectname
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Add the paths to all of your template files in your tailwind.config.js file.

 @type {import('tailwindcss').Config} 
export default {
    content: [
      "./index.html",
      "./src/** /*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }


  Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
  
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

 npm run dev

 ? Folder Structure 
 package.son -> maintain the record of all dependance, logic etc 
 package-lock.son -> maintain the detailed record of all dependance, logic etc 
 main.js -> it is the first file that executed i.e, entery or starting point of the website
 node-modules -> this is folder that contain all dependences and logic and third party modules

src - app.jsx - first file that execute
index.js ko replace karti hai app component se jo main.jsx me ha 

npm start command run karne se userfriendly code browser friendly code me convert kardeta hai 

*/