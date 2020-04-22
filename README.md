# codingbat-scrapper

This is a small scrapping script to get all challenges from a beginners coding challenge website called [www.codingbat.com](www.codingbat.com). If your chosen programming language you want to practice is python or java you will have a better experience on the website itself.

If you want to practice with any other programming language, or you would prefer to have an offline reference you can use this script.

It will leave you with either a commented javascript file or markdown files for each section.

How to use

Clone repository

In the main folder run

```javascript
npm install
```

Change the main `app.js` method `init()` to pass an argument to the option chosen, either `js` or `md` for javascript or markdown respectively then run:

```
node app.js
```

The script will create the files in a folder called output. Happy coding.