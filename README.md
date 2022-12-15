# Synapse

## Table of Contents
- [Description](#description)
- [Code Snippet](#code-snippet)
- [Technologies Used](#technologies-used)
- [Installation](#instalation)
- [Collaborators](#Collaborators)

## Description
Synapse is a fullstack application that allows users to form groups and create connections with other users. The application uses mongoDB on the backened to create models and store data.
![image]()
[Click Here]()To Launch the application!

## Code Snippet
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

## Technologies Used
- mongoDB
- React.js
- node.js
- express
- graphQl

## Installation
- mongoose
- graphql
- apollo-client
- react

## Collaborators
- Laura Duffy: [GitHub](https://github.com/duffylaura)
- Morgan Kelly: [GitHub](https://github.com/mkelly3)
- Mai Moua: [GitHub](https://github.com/SkyWalkerMM26)
- Rebecca Overton: [GitHub](https://github.com/overtonr)
