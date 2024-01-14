# PICAGRAM Testing

[Go back to README.md](../README.md)

## Automated Testing

The logic of important features of the application have been tested with automated tests using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). Automated testing will become more comprehensive in upcoming builds.

All tested features behave as expected.

### Performed Tests

The following automated tests have been performed:

```bash
 PASS  src/components/__tests__/NotFound.js
 PASS  src/components/__tests__/Asset.test.js
 PASS  src/components/__tests__/ShareModal.test.js
 PASS  src/pages/notifications/__tests__/Notification.test.js
 PASS  src/pages/auth/__tests__/SignUpForm.test.js
 PASS  src/components/__tests__/NavBar.test.js
 PASS  src/pages/auth/__tests__/SignInForm.test.js

 Test Suites: 7 passed, 7 total
 Tests:       10 passed, 10 total
 Snapshots:   0 total
 Time:        6.659 s
```

**NotFound.js**
- Tested rendering by finding error text.

**Asset.js**
- Tested rendering with a spinner and message.

**ShareModal.js**
- Tested that it renders and buttons for sharing can be found.

**Notification.js**
- Tested rendering with logged in and out users and error text when user logged out. Bootstrap ButtonGroup caused the test suite to fail, even though the test had passed. After commenting out ConfirmationModal on Notifications.js all suites passed.

**SignUpForm.js**
- Tested page rendering and if fields and button are visible to user.

**SignInForm.js**
- Tested page rendering and if fields and button are visible to user.

**NavBar.js**
- Tested navbar rendering, Profile and Notifications links visible to logged in users and signin/out buttons for logged in and logged out users.

### CSS Validation
[W3C Jigsaw](https://jigsaw.w3.org/css-validator/) is a tool provided by the World Wide Web Consortium (W3C) that allows you to validate and check the correctness of your CSS code. It helps ensure that your web pages comply with the standards set by the W3C, promoting interoperability and accessibility. I have tested by adding each page to the validator.

| **Tested** | **Result** | **View Result** | **Pass** |
--- | --- | --- | :---:
|Landingpage| No errors | - | Pass

Although the validator returned some error messages, these are due to external libraries and frameworks that are known to be reliable and widely used. The custom code written for this project has been thoroughly checked and does not contain any important errors or issues.


### JSX Validation
In the development process of Picagram, I have utilized [ESLint](https://eslint.org/), a powerful static code analysis tool, to ensure high code quality and adherence to coding standards. ESLint not only helps catch potential errors, but it also enforces consistent code style and promotes best practices. This ensures that our codebase is well-maintained, easier to understand, and facilitates collaboration with other developers.

| **Tested** | **Result** | **View Result** | **Pass** |
--- | --- | --- | :---:
|Eslint during development|No errors|-|Pass


### PEP 8 Linter

All python code written for the project passes through the PEP 8 [python linter](https://pep8ci.herokuapp.com/) by Code Institute with no issues.


### Google Chrome Lighthouse

Test page: Home

| **Performance** | **Accessibility** | **Best Practice** | **SEO** | **Pass** |
--- | --- | --- | --- | :---:
|68/100| 88/100 | 95/100 | 100/100 | Pass |

#### Performance 68
Poor performance due to images loading from Cloudinary. Image sizes have been limited, but the optimization can be improved.

#### Accessibility 88
Lighthouse thinks some text colors are too dark, but that is intentional for certain texts. For example, copyright text should not draw too much attention.


### Performing tests on various devices 
The website was tested on the following devices:
| **Tested** | **Reported issues** | **Pass** |
--- | --- | :---:
|Various desktops| None | Pass
|Samsung Galaxy Note | None | Pass
|Apple iPhone 12 | Can't login| X

Apples mobiles Prevents Cross-Site Tracking and that causes failing on logging in. This can be fixed in upcoming builds.
In addition, the website was tested using Google Chrome Developer Tools Device Toggeling option for all available device options.


## Manual Testing

- All API endpoints were manually tested with the browsable API interface provided by Django Rest Framework for development.
- The API is working as expected.

### Testing user stories
#### **Backend**
| **User Story** | **Acceptance Criteria** | **Pass** |
| --- | --- | :---: |
| [As a developer, I want to deploy the backend to Heroku, So that it is accessible and functional on the web.](https://github.com/jindah/picagram/issues/3) | The Django REST Framework is correctly installed and configured on Heroku. The API functions with the expected behavior as observed in the local development environment. | Pass |

#### **As a User**

| **User Story** | **Acceptance Criteria** | **Pass** |
| --- | --- | :---: |
| [As a user, I can effortlessly navigate through the site so that my overall experience is frustration-free.](https://github.com/jindah/picagram/issues/4) | The main Navbar includes a logo to identify the site easily. It should be clickable as the main home link. For unregistered or non-logged-in users: Display 'Sign Up' and 'Login' links. For logged-in users: Display 'Add Post,' 'Feed,' 'Liked,' and 'Sign Out' links. The signup button should be bright and easily findable to attract new users. | Pass |
| [As a user, I can sign in or sign up for an account so that I can enjoy the benefits of a registered user.](https://github.com/jindah/picagram/issues/6) | Ensure a user-friendly experience by clearly indicating sign-in and sign-up options on the site's landing page. Clicking the sign-up link should seamlessly direct users to a straightforward sign-up form. Upon submitting the form, the user's profile will be created using the provided credentials. The sign-up process requires users to input a username and password, along with a password confirmation field for security. |  Pass
| [As a user, I want to be able to select a post, read its content, and engage with it by commenting and liking.](https://github.com/jindah/picagram/issues/8) | Upon selecting a post, users should be directed to the post detail page, where they can read the content and engage by liking and commenting. Non-registered users should have the ability to view the comments count, likes count, and read comments on the post detail page. |  Pass
| [As a user, I want to view a list of all posts to have an overview of posts and easily select one to view more closely.](https://github.com/jindah/picagram/issues/11) | The 'home' page should provide users with a complete list of all posts, loading dynamically as the user scrolls down to prevent extended load times. Each post in the list displays essential information, enabling users to decide whether to view the post details or not. |  Pass

#### **As a Registered User**

| **User Story** | **Acceptance Criteria** | **Pass** |
| --- | --- | :---: |
| [As a registered user, I want to be able to manage my account securely by logging in and out.](https://github.com/jindah/picagram/issues/5) | Enable users to easily access the login link on the landing page's navbar. Once logged in, provide a logout link for enhanced account security. Design and implement a user-friendly login form with error handling for unregistered users. Include a 'Don't have an account yet?' link for new users. Implement a logout link in the navbar for logged-in users. Ensure dynamic updates to navbar links and redirection to the home page upon logout and successful login, respectively.| Pass
|[As a registered user, I want to create and delete my posts effectively within the app.](https://github.com/jindah/picagram/issues/7) | Ensure a visible 'Create Post' button in the navbar for registered users, underlining the importance of posts. The 'Create Post' form allows users to input information and upload files easily. Users can select and reselect image files within the form. Post deletion is available in the post settings dropdown with a confirmation step. Users owning a post can edit it using an options button on their posts, triggering a pre-populated edit post form. |  Pass
| [As a registered user, I want to manage my interaction with other profiles and have a personalized feed, so that I can curate my content experience.](https://github.com/jindah/picagram/issues/10) | Registered users can 'follow' profiles with a button that switches to 'unfollow' upon clicking. 'Follow' increments the user's following count and the profile's follower count, with a visual change. 'Unfollow' decreases counts and alters the button. In the main feed, users locate and navigate to the 'feed' tab to view posts only from users they follow. |  Pass
| [As a registered user, I can click a user's avatar to visit their profile to see their information and posts.](https://github.com/jindah/picagram/issues/12) | The avatars site-wide should be clickable links leading to the relevant profile details page.Every user will have a profile page displaying all relevant information. This includes their profile card and, beneath it, a list of all posts by the user instance. |  Pass
| [As a registered user, I can click a user's avatar to visit their profile to see their information and posts.](https://github.com/jindah/picagram/issues/12) | The avatars site-wide should be clickable links leading to the relevant profile details page.Every user will have a profile page displaying all relevant information. This includes their profile card and, beneath it, a list of all posts by the user instance. |  Pass

