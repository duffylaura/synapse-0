# Synapse

## Description 

Synapse is an interactive MERN stack single-page application. Synapse offers a totally new way to visualize your branching, neuron-like, social networks! Synapse offers users a page to "define" themselves (Profile) and then the ability to make groups and see their connections (Network). 

This web application uses React with Bootstrap for the Front End, GraphQl with a Node.js and Express.js server, MongoDB/Mongoose for the database, JWT authentication, and is deployed on Heroku. The relational database has CRUD functions/routes. 

Enjoy playing around with Synapse and get your friends and colleagues to join too! You don't know who you know until you use Synapse!

## Deployed Link 

Some kinks are still be worked out with the site, but you can see the built web application [here](https://synapase-version1.herokuapp.com/). 

## Table of Contents
- [Description](#description)
- [Deployed Link](#deployed-link)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Code Snippet](#code-snippet)
- [Challenges](#challenges)
- [How to Contribute](#how-to-contribute)

## Installation 

Please log onto [https://synapase-version1.herokuapp.com/](https://synapase-version1.herokuapp.com/) in your browser! 

To run on your local host, 
* `git clone` the repo. 
*  Open your terminal
* `cd` into Synapse-0 folder
* `npm install` 
* `npm run seed`
* `npm run build`
* `npm run develop` 

## Usage
* Click on the Sign Up button on the landing page to make an accout 
* You should then be directed to your new Profile page 
* Define yourself! Be aware that everything on Synapse is public! This is how you define yourself to potential career connections!
* Make a group! 
* Checkout your network! 
* Click on other connections within your network to see their profiles and their network! 

## Credits
* Laura Duffy: [GitHub](https://github.com/duffylaura)
* Morgan Kelly: [GitHub](https://github.com/mkelly3)
* Mai Moua: [GitHub](https://github.com/SkyWalkerMM26)
* Rebecca Overton: [GitHub](https://github.com/overtonr)

Third party credits: 
* [Mermaid NPM](https://www.npmjs.com/package/mermaid)
* [PDF-embed](https://developer.adobe.com/document-services/apis/pdf-embed/)

## Code Snippet
Here is an example of how we used React to incorporate the JavaScript logic behind our login in feature within the same file that outputs what the user sees, i.e. the JSX (which looks like HTML). 

```
const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);
  const [errorMessage] = useState('');
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const {name, value} = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleFormSubmit = async (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      AuthService.login(data.addUser.token);
      //set form stat back to nothing
      setFormState ({
        username: '',
        email: '',
        password: '',
      });
    } catch (e) {
      console.error(e);
    }
  };
```

## Challenges
This web application is this development team's first attempt at a collaborative MERN-stack single-page application. We are still experiencing issues with connecting our front-end and back-end but we believe in the vision and concept! 

Right now we are at a stuck point in this repo where we are unsure why the backend and front end won't connect. 
* We have tried recreating this project using Mongoose and Restful Routes [in this repository](https://github.com/duffylaura/synapse-restful-routes). In this repo, we have hit a stuck point also with connecting front end and backend. 
* We have also recreated this repo using Sequelize and Handlebars [in this repository](https://github.com/duffylaura/synapse-2). This attempted worked better at first and we were able to [deploy on Heroku](https://synapse-2.herokuapp.com/). But, are currently experiencing bugs with our POST routes for login and sign up. 

There is a pattern of having a disconnect between our front end and back end. If you are checking out this repo (or the others) and see anything that contribute, please reach out! Details are in the "How to Contribute" section below. 

## How to Contribute
Please email Laura Duffy at LauraDuffy700@gmail.com. 

