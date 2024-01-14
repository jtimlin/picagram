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
| [As a user, I want to view the "most liked" posts so that I can engage with it.](https://github.com/jindah/picagram/issues/16) | All users should encounter a 'Most Liked' component on all feed pages, highlighting the most liked posts. Each post in this section should be clickable, redirecting the user to the post details page. |  Pass
| [As a user, I want to actively participate in discussions by commenting on posts. Additionally, as a non-registered user, I want to read comments to follow the conversation.](https://github.com/jindah/picagram/issues/17) | Registered users can write and post comments below each post details card. They have the option to edit or delete their own comments. The latest comment is prominently displayed at the top. Both registered and non-registered users can scroll down to find the comment section, where each comment shows the commenter's username, avatar, creation date, and content. |  Pass
| [As a user, I can search each accessible feed to filter the lists of posts.](https://github.com/jindah/picagram/issues/18) | The search bar is prominently positioned at the top of all feed pages, ensuring easy accessibility. It searches relevant fields on each page, such as the publisher name and content, on the feed or home page where all posts exist. |  Pass
| [As a user, I can share posts with others to quickly spread interesting or valuable content.](https://github.com/jindah/picagram/issues/23) | Clicking the "Share" button under a post triggers the opening of a modal. Within the modal, users find options for sharing the post on various platforms. |  Pass

#### **As a Registered User**

| **User Story** | **Acceptance Criteria** | **Pass** |
| --- | --- | :---: |
| [As a registered user, I want to be able to manage my account securely by logging in and out.](https://github.com/jindah/picagram/issues/5) | Enable users to easily access the login link on the landing page's navbar. Once logged in, provide a logout link for enhanced account security. Design and implement a user-friendly login form with error handling for unregistered users. Include a 'Don't have an account yet?' link for new users. Implement a logout link in the navbar for logged-in users. Ensure dynamic updates to navbar links and redirection to the home page upon logout and successful login, respectively.| Pass
|[As a registered user, I want to create and delete my posts effectively within the app.](https://github.com/jindah/picagram/issues/7) | Ensure a visible 'Create Post' button in the navbar for registered users, underlining the importance of posts. The 'Create Post' form allows users to input information and upload files easily. Users can select and reselect image files within the form. Post deletion is available in the post settings dropdown with a confirmation step. Users owning a post can edit it using an options button on their posts, triggering a pre-populated edit post form. |  Pass
| [As a registered user, I want to manage my interaction with other profiles and have a personalized feed, so that I can curate my content experience.](https://github.com/jindah/picagram/issues/10) | Registered users can 'follow' profiles with a button that switches to 'unfollow' upon clicking. 'Follow' increments the user's following count and the profile's follower count, with a visual change. 'Unfollow' decreases counts and alters the button. In the main feed, users locate and navigate to the 'feed' tab to view posts only from users they follow. |  Pass
| [As a registered user, I can click a user's avatar to visit their profile to see their information and posts.](https://github.com/jindah/picagram/issues/12) | The avatars site-wide should be clickable links leading to the relevant profile details page.Every user will have a profile page displaying all relevant information. This includes their profile card and, beneath it, a list of all posts by the user instance. |  Pass
| [As a registered user, I can click a user's avatar to visit their profile to see their information and posts.](https://github.com/jindah/picagram/issues/12) | The avatars site-wide should be clickable links leading to the relevant profile details page.Every user will have a profile page displaying all relevant information. This includes their profile card and, beneath it, a list of all posts by the user instance. |  Pass
| [As a registered user, I want to manage my profile, including viewing, updating, and deleting content and information.](https://github.com/jindah/picagram/issues/13) | Logged-in users easily navigate to their profile page from the navbar link. Owners of profiles and posts see an icon on their content, providing options to update or delete. On their profile page, a visible options menu icon enables users to update profile information and image, with changes reflected upon submission. |  Pass
| [As a registered user, I can view the list of 'Most Followed' accounts so that I can discover popular profiles.](https://github.com/jindah/picagram/issues/14) | A top page is accessible, allowing users to view a list of the most followed accounts. Each profile in the list showcases essential information and follow buttons, providing other users the option to choose from the list and follow the profile instance. |  Pass
| [As a registered user, I can view a list of all posts I have liked so that I can see my favorite posts.](https://github.com/jindah/picagram/issues/15) | Users can effortlessly navigate to the 'liked' feed through a link in the navigation. The feed exclusively displays posts that have been liked by the user. |  Pass
| [As a registered user, I want to be able to read notifications so that I can stay informed about interactions with my posts, such as likes or comments.](https://github.com/jindah/picagram/issues/26) | Users can view new notifications in the notification inbox. They also have the option to mark notifications as read or delete them. |  Pass
| [As a registered user, I want to be able to manage bookmarks so that I can easily access and organize content that I find interesting or important.](https://github.com/jindah/picagram/issues/27) | Users can view a list of bookmarked items. They have the ability to bookmark a post, making it accessible from the bookmarked items list. Furthermore, users can remove a bookmark from an item and navigate to the original content directly from the bookmarked items list. Bookmarked items persist across sessions for user convenience. |  Pass

### Full testing Unauthorized user

#### Navbar 
|**Feature**|**Expected Outcome**|**Testing Performed**|**Pass**|
|--- | --- | --- | :---:
|Logo|Redirects to index.page|Clicked on logo| Pass
|Login|Redirects to the login page|clicked on link "Login"| Pass
|Sign up|Redirects to to the signup page and form|clicked on the link "Sign up"| Pass

#### Posts list
|**Feature**|**Expected Outcome**|**Testing Performed**|**Pass**|
|--- | --- | --- | :---:
|Search|Search result should only contain the post with the specified username or content|Try to search for a post by a specific username or content and verify that the search result only includes that post| Pass
|Like a post|The functionality should prompt the user to log in before they can like the post|Like a post and verify that a popup comes with text to login.| Pass
|Comment on a Post|The functionality should prompt the user to log in before they can comment.|Varify that I can not make a comment and be prompted to login. | Pass
|Like a comment|The functionality should prompt the user to log in before they can like the comment|Like a comment and verify that a popup comes with text to login.| Pass
|Add to Saved Posts|The functionality should prompt the user to log in before they can add post to the Saved Posts|Add a post to Saved Posts and verify that a popup comes with text to login.| Pass

#### Create an account
|**Feature**|**Expected Outcome**|**Testing Performed**|**Pass**|
|--- | --- | --- | :---:
|No match passwords|The account creation should fail, and an error message should be displayed indicating password mismatch.|Provide different passwords.| Pass
|No username|The account creation should fail, and an error message should be displayed indicating a missing username.|Submit the form without entering a username.| Pass
|Submit valid data|The account should be successfully created, and the user should be redirected to the home page.|Submit the form with a valid username and matching passwords.| Pass

#### Log in
|**Feature**|**Expected Outcome**|**Testing Performed**|**Pass**|
|--- | --- | --- | :---:
|No/wrong username|The login should fail, and an error message should be displayed indicating a missing username.|Attempt to log in without entering a username and then the wrong username.| Pass
|No/wrong password|The login should fail, and an error message should be displayed indicating a missing password.|Attempt to log in without entering a password and then the wrong password.| Pass
|Valid username and password|The login should be successful, and the user should be redirected to the home page.|Log in with a valid username and password.| Pass


### Authorized user
#### Navbar
|**Feature**|**Expected Outcome**|**Testing Performed**|**Pass**|
|--- | --- | --- | :---:
|Logo|Redirects to home page|Clicked on logo.| Pass
|Add Post|Redirect to the create a post page|Press the link with the text Add Post| Pass
|Home|The user should remain on the home page or go there if on another page.|Click on the "Home" link in the navbar.| Pass
|Feed|The user should be navigated to the feed page, where only posts from users they follow are displayed.|Click on the "Feed" link in the navbar.| Pass
|Saved Posts |The user should be navigated to the Saved Posts page, where their added posts are displayed.|"Saved Posts" link in the navbar.| Pass
| Notifications | The user should be directed to the Notifications page, displaying their received notifications. | "Notifications " link in the navbar. | Pass
|Avatar|The user should be navigated to the profile page of the logged-in users.|Click on the avatar in the navbar.| Pass
|Logout |The user should be logged out and redirected to the home page.|Click on the "Sign out" link in the navbar.| Pass

#### Post:
|**Feature**|**Expected Outcome**|**Testing Performed**|**Pass**|
|--- | --- | --- | :---:
|No image|The post creation should fail, and an error message should be displayed indicating a missing image.|Try to add a post without an image.| Pass
|Cancel button|The post creation process should be canceled, and the user should be returned to the previous page.|Press the cancel button while adding a post.| Pass
|Add a post|The post should be successfully created, and it should be displayed on the home page.|Fill in all the fields and press the save button while adding a post.| Pass
|Update a post|A valid post update should be saved.|Update one of your own posts by accessing the post detail view, going to the menu, and selecting the update option. Cancel the update process and successfully update a post.| Pass
|Cancel update|Canceling should exit the update process|Cancel the update process by pressing the cancel button| Pass
|Delete Post|The user should first see an alert about deleting, then if pressing the post should be successfully deleted.|Delete one of your own posts by accessing the post detail view, going to the menu, and selecting the delete option.| Pass

#### Comments
|**Feature**|**Expected Outcome**|**Testing Performed**|**Pass**|
|--- | --- | --- | :---:
|Add a comment to another user's post|The comment should be successfully added to the post and the comments counter should increase.|Scroll to the comments field, add a comment, and publish it.| Pass
|Update comment|A valid comment update should be saved.|Update one of your own comments on another user's post by accessing the post detail view, scrolling to the comments field, accessing the menu for your comment, and selecting the update option.| Pass
|Cancel update|Canceling should exit the update process,|Cancel the update process | Pass
|Delete a Comment|First a warning alert should be visible and if the user continues to click the comment should be successfully deleted.|Delete one of your own comments by accessing the comment, accessing the menu, and selecting the delete option.| Pass

#### Home Page
|**Feature**|**Expected Outcome**|**Testing Performed**|**Pass**|
|--- | --- | --- | :---:
|Search|The search functionality should return relevant posts based on the search query.|Search for a post.| Pass
|Like post|The post should be successfully liked, and the like count should increment.|Like a post.| Pass
|Add to Saved Posts|The post should be successfully added to Saved Posts | Bookmark a post.| Pass
|Infinity scroll|The home page should load more posts as the user scrolls down, demonstrating infinite scrolling.|Scroll through the home page.| Pass

#### Feed page
|**Feature**|**Expected Outcome**|**Testing Performed**|**Pass**|
|--- | --- | --- | :---:
|No followers|Page should display the appropriate icon and text to prompt you to follow another user.|Go to the feed page by clicking the link in the navbar| Pass
|Follow|The user should be successfully followed, their posts should appear in the "Feed" page, the users followers count should increase with 1 as will the followers follower count.|Click the follow button on a user.| Pass
|Unfollow|The user should be successfully unfollowed, their posts should not appear in the "Feed" feed anymore. Users followers count should go down by one|Click the follow button on a user.| Pass

#### Saved Posts page
|**Feature**|**Expected Outcome**|**Testing Performed**|**Pass**|
|--- | --- | --- | :---:
|No saved post items|Page should display the appropriate icon and text to prompt you to add posts to the saved posts.|Go to the saved posts page by clicking the link in the navbar| Pass
|Add to Saved Posts|The post should be successfully added to Saved Posts.|Click the bookmark on a post.| Pass
|Remove post|The post should be successfully removed from the Saved Posts.|Click the filled-bookmark on a post.| Pass

#### Notifications page
|**Feature**|**Expected Outcome**|**Testing Performed**|**Pass**|
|--- | --- | --- | :---:
|No notifications|Page should display the appropriate text prompt.|Go to the Notifications by clicking the link in the navbar| Pass
|Clear a Notification|Notification should be successfully removed from the Notifications after a confirmation.|Click the trash-can on a notification.| Pass
| Mark Notification as Read | The notification status should be updated to "read." | Click the "Mark as Read" option on a notification. | Pass

#### Profile page
|**Feature**|**Expected Outcome**|**Testing Performed**|**Pass**|
|--- | --- | --- | :---:
|Go to profile|Users profile page should be displayed.|Click on your avatar to navigate to your profile.| Pass
|Menu|Dropdown list with options to update profile, change username and password will appear.|Click the 3 dots in the upper left corner and go to the "Update Profile" option.| Pass
|Update profile|The profile should be successfully updated, and the changes should be reflected on the profile page.|Update your profile information and press the save button.| Pass
|Cancel update|The profile update process should be canceled, and the user should be returned to the profile page.|Press the cancel button while updating the profile.| Pass
|Change username|The username should be successfully changed, and the updated username should be displayed on the profile page.|Change the username and press the save button.| Pass
|Cancel update|The username change process should be canceled, and the user should be returned to the profile page.|Press the cancel button while changing the username.| Pass
|Change password|The password should be successfully changed, and the user should be prompted to log in again with the new password.|Change the password and press the save button.| Pass
|Cancel update|The password change process should be canceled, and the user should be returned to the profile page.|Press the cancel button while changing the password.| Pass

## Summary
The application demonstrated effective functionality across various features during testing. Both authorized and unauthorized user operations were successfully executed, including basic navigation tasks like logging in and signing up, as well as more complex actions such as adding and deleting posts, managing user following, and manipulating saved posts items.

Key areas such as the navigation bar, posts list, account creation, and login processes for unauthorized users passed all tests. For authorized users, the application efficiently handled tasks on the home page, feed page, saved posts page, notifications, and profile page. The functionalities to add, update, and delete posts and comments were all operational. Additionally, search functionality, liking and unliking posts, and following and unfollowing users worked as expected. This testing phase suggests that the application is reliable, providing a smooth and comprehensive user experience.
