# Tech Blog

![badge](https://img.shields.io/badge/license-MIT-blue)

## Table-of-Contents

- [Description](#description)
- [UserStory](#user-story)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Features](#features)
- [Questions](#questions)

## [Description](#table-of-contents)

The application contained within is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## [Usage](#table-of-contents)

Run commands listed in Installation.

For more information on how to add screenshots for examples, visit the following website:

[Mark Down Tutorial](https://agea.github.io/tutorial.md/)

[Heroku deployed application](https://smartest-book.herokuapp.com/)

## [User Story](#table-of-contents)

AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions.

### Acceptance Criteria

GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

## [Installation](#table-of-contents)

- Clone this repository to use this application on local machine.

- To install necessary dependencies, run the following command :

npm i

npm run seed

- The application will be invoked with the following command: This will start localhost server on PORT 3001.
  npm start

- Open browser and type http://localhost:3001/ to run this application on your local machine.

## Technologies

This app uses the following technologies:

- [Express](https://www.npmjs.com/package/express)
- [express-session](https://www.npmjs.com/package/express-session)
- [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
- [mySQL2](https://www.npmjs.com/package/mysql2)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [handlebars](https://handlebarsjs.com/)
- [bcryt](https://www.npmjs.com/package/bcrypt)

## [License](#table-of-contents)

The application is covered under the following license:
[MIT](https://choosealicense.com/licenses/MIT)

## [Contributing](#table-of-contents)

Thank you for your interest in helping out; however, I will not be accepting contributions from third parties.

## [Features](#table-of-contents)

- Used 'Express.js' to build server

- Application is deployed on heroku : Heroku is a container-based cloud Platform as a Service (PaaS). Developers use Heroku to deploy, manage, and scale modern apps.

## [Questions](#table-of-contents)

Please contact me using the following links:

[GitHub](https://github.com/nkirti28)

[Email: nalawade.kirti@gmail.com](mailto:nalawade.kirti@gmail.com)
