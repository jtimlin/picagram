# PICAGRAM Testing

[Go back to README.md](../README.md)

## User Story Testing



## Automated Testing

The logic of the most important features of the application have been tested with automated tests using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

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

### CSS Validation
[W3C Jigsaw](https://jigsaw.w3.org/css-validator/) is a tool provided by the World Wide Web Consortium (W3C) that allows you to validate and check the correctness of your CSS code. It helps ensure that your web pages comply with the standards set by the W3C, promoting interoperability and accessibility. I have tested by adding each page to the validator.

| **Tested** | **Result** | **View Result** | **Pass** |
--- | --- | --- | :---:
|Landingpage| No errors | - | Pass

Although the validator returned some error messages, these are due to external libraries and frameworks that are known to be reliable and widely used. The custom code written for this project has been thoroughly checked and does not contain any important errors or issues.


https://jigsaw.w3.org/css-validator/

### JSX Validation
In the development process of Picagram, I have utilized [ESLint](https://eslint.org/), a powerful static code analysis tool, to ensure high code quality and adherence to coding standards. ESLint not only helps catch potential errors, but it also enforces consistent code style and promotes best practices. This ensures that our codebase is well-maintained, easier to understand, and facilitates collaboration with other developers.

| **Tested** | **Result** | **View Result** | **Pass** |
--- | --- | --- | :---:
|Eslint during development|No errors|-|Pass


## Manual Testing

- All API endpoints were manually tested with the browsable API interface provided by Django Rest Framework for development.
- The API is working as expected.

## PEP 8 Linter

All python code written for the project passes through the PEP 8 [python linter](https://pep8ci.herokuapp.com/) by Code Institute with no issues.

## Google Chrome Lighthouse

| **Performance** | **Accessibility** | **Best Practice** | **SEO** | **Pass** |
--- | --- | --- | --- | :---:
|68/100| 88/100 | 95/100 | 100/100 | Pass |

#### Performance 68
Poor performance due to images loading from Cloudinary. Image sizes have been limited, but the optimization can be improved.

#### Accessibility 88
Lighthouse thinks some text colors are too dark, but that is intentional for certain texts. For example, copyright text should not draw too much attention.


## Performing tests on various devices 
The website was tested on the following devices:
| **Tested** | **Reported issues** | **Pass** |
--- | --- | :---:
|Various desktops|None| Pass
|Samsung Galaxy Note | None | Pass
|Apple iPhone 12 | Can't login| X

In addition, the website was tested using Google Chrome Developer Tools Device Toggeling option for all available device options.
