# mapsmapsmaps
An application to search and save addresses. Built with Vue, Express, and MongoDB. A demonstration project. 

## Project setup

Git clone project into your repository.

Create a .env file and fill in key value pairs according to .env.development.

```
npm install
```

### Compiles and hot-reloads for development

#### Create dist folder with index.html to initialize app
```
npm run build
```

#### To run Vue
```
npm run serve
```
#### To run Express
```
npm run start
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Hosted URL 
https://sleepy-chamber-28831.herokuapp.com/

### Bugs 
Currently, the heroku app does not save or display addresses. This is due to a CORS issue with Heroku and MongoDB Atlas. 

### Future Features
1. Fix connection between Mongo and Heroku.
2. Implement Google Places autocomplete so users can search place names.
3. Make recent and saved favourite places as anchor links for a quick research.

