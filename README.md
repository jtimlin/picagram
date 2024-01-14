# Picagram

![Picagram](readme_images/responsive.png)

## Introduction

Code Institute Advanced Frontend React Project.

Picagram is a social sharing app designed to provide users with a refined and ad-free experience, reminiscent of Instagram. As a response to the challenges faced by users on existing platforms, Picagram aims to create a space free from intrusive advertising and unwanted bot interactions, focusing solely on genuine social connections and content sharing.

### Live Site

Explore the live site on [Heroku](https://picagram-ac5efc799683.herokuapp.com/).

### Project Stack

Picagram is built using:

Frontend:
React, React-Bootstrap, JSX, CSS, HTML, and axios for handling API requests.

Backend:
Django REST framework with Python.

## Frontend commits

The frontend of this app was developed quite a bit in its own repository before combining the frontend and backend together. Those commits can be found at: [picagram-frontend](https://github.com/jindah/picagram-frontend)

## Getting Started

To get started with the Picagram app, follow these steps to clone the GitHub repository locally and set up other dependencies:

[Deployment](#deployment)

## Contents

-   [Picagram](#picagram)
    -   [Intro](#intro)
        -   [Live Site](#live-site)
        -   [Project Stack](#project-stack)
        -   [Getting Started](#get-started)
    -   [Design Thinking](#design-thinking)
        -   [Problem ID](#problem-id)
        -   [Problem Statement](#problem-statement)
        -   [Site Goals](#site-goals)
    -   [UX](#ux-user-experience-design)
        -   [User Stories](#user-stories)
            -   [Site Admin](#site-admin)
            -   [User](#user)
            -   [Registered User](#registered-user)
        -   [Wireframe](#wireframe)
        -   [Visual Design](#visual-design)
            -   [Color Scheme](#color-scheme)
            -   [Fonts](#fonts)
            -   [Icons](#icons)
            -   [Logo](#logo)
    -   [Database](#database)
    -   [Development](#deployment)
        -   [Agile Design](#agile-design)
            -   [Github Issues](#github-issues)
                -   [Template](#template)
                -   [Labels](#labels)
            -   [Product Backlog](#product-backlog)
            -   [Iterations](#iterations)
                -   [Backend Iteration](#backend-iteration)
            -   [Kanban Board](#kanban-board)
    -   [Features](#features)
        -   [Current Features](#current-features)
            -   [Landing Page](#landing-page)
            -   [Sign Up Form](#sign-up-form)
            -   [Login Form](#login-form)
            -   [Navbar](#navbar)
            -   [Header](#header)
            -   [Feed Page](#feed-page)
            -   [Saved Posts](#saved-posts)
            -   [Notifications](#notifications)
            -   [Search Bar](#search-bar)
            -   [Create Post](#create-post-form)
            -   [Edit Post](#edit-post-form)
            -   [Delete Objects](#delete-objects)
            -   [Post Details Page](#post-details-page)
                -   [Likes](#liking)
                -   [Comments](#commenting)
            -   [Profile Page](#profile-page)
                -   [Follow](#follow)
            -   [Update Profile](#update-profile)
        -   [CRUD Functionality](#crud-functionality)
        -   [Future Features](#future-features)
        -   [Reusable Components](#reusable-components)
    -   [Contexts/ Hooks](#contexts-hooks)
        -   [CurrentUserContext.js](#currentusercontextjs)
        -   [ProfileDataContext.js](#profiledatacontextjs)
        -   [useRedirectUser.js](#useredirectuserjs)
    -   [Libraries/ Dependencies](#libraries-and-dependencies)
    -   [Testing](testing.md)
    -   [Bugs](#bugs)
        -   [Resolved Bugs](#resolved-bugs)
        -   [Unresolved Bugs](#unresolved-bugs)
    -   [Deployment](#deployment)
        -   [Github Cloning](#github-cloning)
        -   [Heroku Deployment](#heroku-deployment)
    -   [Credits](#credits)
        -   [Tools](#tools)
        -   [Resources](#resources)


## Design Thinking

### Problem ID

---

Instagram users often encounter issues with the presence of bots and the overwhelming intrusion of advertising on the platform. These challenges can diminish the overall user experience, leading many to seek alternatives that prioritize genuine interactions and content sharing. Picagram steps in to fill this gap, offering users a platform that values their time and attention.

### Problem Statement

---

"As a user frustrated by the increasing presence of bots and intrusive advertising on Instagram, I am in search of a platform that provides a similar, if not better, social experience without these drawbacks. Picagram emerges as a solution, prioritizing authenticity by eliminating ads and minimizing the interference of bots, ensuring users can enjoy social sharing without distractions."

### Site Goals

---

**User Goals**
- Share moments and updates through visually appealing posts.
- Connect with like-minded individuals on the platform.
- Express creativity and individuality through posts and interactions.

**Owner Goals - Create an inclusive and vibrant social platform where users from diverse backgrounds can:**
- Share their daily lives, activities, and interests.
- Connect with others who appreciate and engage with their content.
- Foster a sense of community through mutual appreciation and connection.

[⏫ contents](#contents)

## UX / User Experience Design

### User Stories

---

#### Site Admin / Developer
- 1. As a site admin, I can control all site content so that I can keep site content safe for all users [User Story 1](https://github.com/jindah/picagram/issues/1)

- 3. As the developer, I want to deploy the backend to Heroku so that it is accessible and functional on the web. [User Story 3](https://github.com/jindah/picagram/issues/3)

#### User 

- 2. As a user, I want to be able to securely access my account and protected resources using JWT authentication. [User Story 2](https://github.com/jindah/picagram/issues/2)

- 4. As a user, I can effortlessly navigate through the site so that my overall experience is frustration-free. [User Story 4](https://github.com/jindah/picagram/issues/4)

- 6. As a user, I can sign in or sign up for an account so that I can enjoy the benefits of a registered user. [User Story 6](https://github.com/jindah/picagram/issues/6)

- 8. As a user, I want to be able to select a post, read its content, and engage with it by commenting and liking. [User Story 8](https://github.com/jindah/picagram/issues/8)

- 11. As a user, I want to view a list of all posts to have an overview of posts and easily select one to view more closely. [User Story 11](https://github.com/jindah/picagram/issues/11)

- 17. As a user, I want to actively participate in discussions by commenting on posts. Additionally, as a non-registered user, I want to read comments to follow the conversation. [User Story 17](https://github.com/jindah/picagram/issues/17)

- 18. As a user, I can search each accessible feed to filter the lists of posts. [User Story 18](https://github.com/jindah/picagram/issues/18)

- 23. As a user, I can share posts with others to quickly spread interesting or valuable content. [User Story 23](https://github.com/jindah/picagram/issues/23)

#### Registered User

- 5. As a registered user, I want to be able to manage my account securely by logging in and out. [User Story 5](https://github.com/jindah/picagram/issues/5)

- 7. As a registered user, I want to create and delete my posts effectively within the app. [User Story 7](https://github.com/jindah/picagram/issues/7)

- 10. As a registered user, I want to manage my interaction with other profiles and have a personalized feed, so that I can curate my content experience. [User Story 10](https://github.com/jindah/picagram/issues/10)

- 12. As a registered user, I can click a user's avatar to visit their profile to see their information and posts. [User Story 12](https://github.com/jindah/picagram/issues/12)

- 13. As a registered user, I want to manage my profile, including viewing, updating, and deleting content and information. [User Story 13](https://github.com/jindah/picagram/issues/13)

- 14. As a registered user, I can view the list of 'Most Followed' accounts so that I can discover popular profiles. [User Story 14](https://github.com/jindah/picagram/issues/14)

- 15. As a registered user, I can view a list of all posts I have liked so that I can see my favorite posts. [User Story 15](https://github.com/jindah/picagram/issues/15)

- 26. As a registered user, I want to be able to read notifications so that I can stay informed about interactions with my posts, such as likes or comments. [User Story 26](https://github.com/jindah/picagram/issues/26)

- 27. As a registered user, I want to be able to manage bookmarks so that I can easily access and organize content that I find interesting or important. [User Story 27](https://github.com/jindah/picagram/issues/27)

[⏫ contents](#contents)

### Wireframe

---

To aid in the design of the UI a wireframe was created.

![Wireframe](readme_images/ux/wireframe_desktop.png)
![Wireframe Mobile](readme_images/ux/wireframe_mobile.png)

[⏫ contents](#contents)

### Visual Design

---

#### Color Scheme

The main colors used throughout the site were:

![Background Color](https://img.shields.io/badge/Background_Color-%23000-%23000)<br />
The background color of the site is a deep black (#000), providing a sleek and modern backdrop for the content. This color choice is often associated with elegance and sophistication, enhancing the visual appeal of the platform.

![Content Borders](https://img.shields.io/badge/Content_Borders-%23202020-%23202020)<br />
The border color for the content section is a slightly lighter shade of black (#202020), creating a subtle separation between different sections. This helps in defining the structure of the content and maintaining a clean layout.

![Content Text Color](https://img.shields.io/badge/Content_Text_Color-%23707070-%23707070)<br />
The main text color used in the content area is a muted gray (#707070). This choice ensures readability while complementing the dark background. The gray color adds a softer touch to the overall design.

![Hyperlinks](https://img.shields.io/badge/Hyperlinks-%23555555-%23555555)<br />
The color for hyperlinks is a dark gray (#555555), providing a clear visual cue for clickable elements. This color maintains a balance between visibility and coherence with the overall color scheme.

![Copyright](https://img.shields.io/badge/Copyright-%23444444-%23444444)<br />
The color for copyright text is a dark gray (#444444). This choice maintains a professional appearance for copyright information while aligning with the overall color palette.

![Icons](https://img.shields.io/badge/Icons-%23bebebe-%23bebebe)<br />
Icon Color (#bebebe): Icons are styled with a light gray color (#bebebe). This subtle hue ensures that icons are distinguishable while maintaining a cohesive look with the rest of the design.

![Button and icons hover](https://img.shields.io/badge/Buttons_and_icons_hover-%23df8600-%23df8600)<br />
The background color of the buttons is a warm orange (#df8600), adding a vibrant and attention-grabbing element to the buttons, making them stand out against the darker background. This color choice is associated with energy and enthusiasm, contributing to a positive and engaging user experience.

Additionally, when an icon is hovered over, it transforms to the same warm orange (#df8600). This change in color provides visual feedback, indicating interactivity and adding a vibrant and engaging element to the user interface.

#### Fonts

The fonts chosen for the project were imported from [Google Fonts](https://fonts.google.com/). The primary font used throughout the site is 'Roboto'. Roboto is a versatile sans-serif font known for its readability and adaptability. Whether applied to headings, subheadings, or body text, Roboto maintains clarity and simplicity.

#### Icons

Icons were used throughout the site to assist the user in clarifying different
actions and elements. They are a simple yet very efficient way to convey a
message to the user. I used the [Font Awesome](https://fontawesome.com/)
library.

#### Logo

The logo for the Picagram app features a unique design created using the 'Grand Hotel' font and an icon from Font Awesome named 'fa-camera-retro'. The 'Grand Hotel' font adds a touch of elegance and style to the text, while the camera-retro icon conveys the essence of photography and visual content sharing. The combination creates a distinctive and visually appealing logo that reflects the app's focus on capturing and sharing moments.

![Logo](readme_images/ux/logo.png)

[⏫ contents](#contents)

## Database

### Models:

#### Bookmark:
This model captures bookmarks to a post. It is linked to the User, Post, and Comment models. It also records the time when each like event was created.

#### Notifications: 
The notifications model is designed to automatically generate notifications when users engage in certain actions such as liking, commenting, or adding a post. These notifications aim to keep users informed about relevant activities within the platform. The system utilizes signals to trigger the creation of notifications, enhancing the user experience by providing real-time updates and ensuring users stay informed about interactions on the platform.

#### Comments: 
This model represents comments made by users. It is associated with the User model (as the owner of the comment) and the Post model. In addition to the content of the comment, it keeps track of the times when each comment was created and last updated.

#### Followers: 
This model maintains the follower-following relationships between users. It is related to the User model twice, once for the owner of the follow (the follower) and once for the followed user. A timestamp of each follow event is also stored.

#### Likes: 
This model captures the likes given by users to a post. It is linked to the User, Post, and Comment models. It also records the time when each like event was created.

#### Posts: 
This model represents the posts made by users. It is related to the User model as the owner of the post. It keeps track of the times when each post was created and last updated, along with the content of the post including the title, image, and location information.

#### Profiles: 
User model with profile information such as their name, profile image, and other personal details. It also keeps timestamps of when each profile was created and last updated. 

Each of these models serves a unique purpose and together they support a range of features in your application, from user registration and social networking to content creation and curation.


### Languages
- Python

### Frameworks
- Django REST framework: A high-level Python web framework used for building the API.

### Database
- ElephantSQL: ElephantSQL is a PostgreSQL database as a service. It is used as the database for the project, providing a reliable and scalable storage solution for the application's data.

### Supporting Libraries and Packages
- cloudinary, django-cloudinary-storage: Used for managing the storage and delivery of images through Cloudinary, a cloud-based service.
- dj-database-url: Utility to help you load your database into your dictionary from the DATABASE_URL environment variable.
- dj-rest-auth, Django-allauth, djangorestframework-simplejwt, PyJWT, oauthlib, requests-oauthlib, python3-openid: These libraries are used for managing user authentication, providing support for JWT tokens, OAuth and OpenID.
- Django, djangorestframework, django-filter: These are core components of the Django web framework, used for building the backend of the Travel Tickr application.
- gunicorn: A Python WSGI HTTP server for UNIX, used in deploying the application.
- Pillow: An imaging library in Python, allowing support for opening, manipulating, and saving many different image file formats.
- psycopg2: PostgreSQL adapter for Python, enabling Python to connect to the PostgreSQL database.
- sqlparse: A non-validating SQL parser module for Python, it provides support for parsing, splitting and formatting SQL statements.

## Database ERD

An entity relationship diagram was created to assist in the visualization of the
database structure. This visualization was important to clarify what data would
be needed in order to provide the functionality desired within the application.
Below is an image of the Created ERD with the relationships between models.

![Picagram API ERD](readme_images/api-erd.png)

## Testing
All tests for the Picagram have been passed, demonstrating its readiness for deployment and public use. See [full testing documentation](testing.md).


[⏫ contents](#contents)

## Development

### Agile Design

---

Given the scope and diverse features of the Picagram project, adopting an Agile methodology was crucial. The project was bifurcated into frontend and backend components, adding to its intricacy. Managing a project of this magnitude might lead to overlooking or leaving tasks incomplete. With an Agile approach, we could identify key components essential for building the MVP and break them down into more manageable tasks. Each component underwent manual testing to verify its functionality before progressing to the next task. This methodology encourages regular reflection on the project's progress.

#### Github Issues

---

#### Template

Prior to the build process, issue template were created:

-   [User Story](https://github.com/jindah/picagram/blob/main/.github/ISSUE_TEMPLATE/frontend-custom-template.md)

#### Labels

At the beginning of the build after creating the issues, labels also needed to
be created. The first labels created were to assign each template with a front
or backend label, this helped to clearly separate tasks between the two project
repositories. The repository labels:

-   frontend
-   backend

Next prioritising labels were created to define the importance of using the
'MoSCoW' principle, and separate the issues into groups. The labels were used
when assessing each iteration, meaning they were not static from the beginning,
they were reassigned when necessary to adjust the level of importance of the
user story, throughout each iteration in the overall project. The 4 prioritising
labels were:

-   Must Have
-   Should Have
-   Could Have
-   Wont have

To compliment the build process and reach the project MVP within the timeframe,
other labels were created. All bug reports were naturally labeled with 'bug' and
feature requests with the corresponding label. The labels were:

-   Bug
-   Enhancement

#### User Story Template

The first template created was the user story template. Every user story
includes **Acceptance Criteria** and **Tasks**. The purpose of the user story
was to begin the building process and help decide what features would be
potentially included.

-   **Acceptance Criteria**: The acceptance criteria for a user story give a
    clear indication of what the expected outcome for the user is, it contains
    no technical information with regards to completing the user story. However,
    is clearly states what a user would expect in response.

-   **Tasks**: Once the user story was created and the acceptance criteria were
    assigned, the next step was to break it down into smaller tasks, all of
    which were achievable in a day or less. I created the tasks as a checkable
    list, making it visually clear, whilst developing the project, what the next
    step was.

#### Bug Report

Bug reports were made through the issues template, and developers shared information about solving the problems and providing solutions by commenting on them.

[⏫ contents](#contents)

#### Product Backlog

---

When creating new issues, bug reports, or feature requests they were added
directly to the
[Picagram Backlog](https://github.com/users/jindah/projects/5).
Once added to the product backlog it would be assigned the above-mentioned
labels. Throughout the build as iterations were created, issues would be would
be taken from the product backlog and into the relevant iteration, reassigning
the labels according to the specific iteration priorities.

#### Iterations

---

In order to help manage the workload of the project, iterations were implemented
using GitHub milestones to further breakdown the production and provide
incremental delivery.

Working in iterations maintains a steady pace of work and keeps momentum
throughout production. This is due to the constant assessment of progress.

[Project Iterations](https://github.com/jindah/picagram/milestones)

#### Backend Iteration

As the project consisted of two parts a front and backend I felt it was
necessary to include a backend iteration, as the backend would ultimately enable
the front-end functionality.

#### Kanban Board

---

Before starting the production a Kanban board was created using Github Projects.

The board was separated into 6 columns:

-   **Tasks:** the entire product backlog _(all issues)_.
-   **In Progress:** This is actively being worked on.
-   **Bugs:** all issues with bugs found during the testing or development
    stage.
-   **Fixed bugs** Resolved bugs.
-   **Done:** all completed issues.
-   **Future Features** If there wasnt enough time.

During the production the kanban board was constantly revised with issues moving
between columns, this was the main reference point for the development process
and daily tasks. Simply dragging an issue into the 'Done' column marked it as
closed, however, when possible I would close an issue from the terminal using
the `close #<issue number>` command from inside a commit message. This would
automatically move the issue into the 'Done' column.

[Picagram Kanban Board](https://github.com/users/jindah/projects/5)

[⏫ contents](#contents)

## Features

### Current Features

---

### Landing Page

Upon visiting the site, users are greeted with a straightforward navbar offering options such as home, login, and signup. A header provides concise information, encouraging non-registered users to sign up. Below, a feed displays all posts from the site, accompanied by the 'User Suggestions' component, offering non-registered users the opportunity to navigate the site and access information.

![Landing Page Desktop](readme_images/features/home/landing-page.png)


[⏫ contents](#contents)

### Sign Up Form

The sign-up registration form is simple, making it easy for unregistered users
to sign-up with just a username and password confirmation. If a registered user
finds themselves on the signup form there is also a login form link at the
bottom to make navigate to the correct form easily.

![Sign Up Form](readme_images/features/home/sign-up-form.png)

[⏫ contents](#contents)

### Login Form

Very similar to the signup form is the login form, registered users are able to
login into their account quickly via a simple username and password combination.
For non-registered users, there is a small link to navigate to the correct
sign-up form if they have navigated to the wrong page.

![Login Form](readme_images/features/home/login-form.png)

[⏫ contents](#contents)

### Navbar

The navbar found at the left side of the site contains user-related links to parts of
the site. For unregistered and logged-out users the navbar holds links to home,
login, and signup forms. When a registered user is logged in the navbar switches
to contain links to Home, Feed, Add Post, Sign Out and Profile page. It is fully responsive from desktop to mobile collapsing down as the screen size gets smaller. The links in the nav have an active 'className'
set to enable better site navigation for a user and finally the site logo is a
clickable link to the home page.

<details>
<summary>Logged Out Nav Screenshots</summary>

![Logged Out Nav Desktop](readme_images/features/nav/logged-out-desk.png)


</details>
<details>
<summary>Logged In Nav Screenshots</summary>

![Logged In Nav Desktop](readme_images/features/nav/logged-in-desk.png)


</details>

[⏫ contents](#contents)

### Home Feed

The feed is where all site content lives. This feed acts also as the
landing page feed, enabling users to search around all site content, from here
users are able to discover each other's profiles and posts. The posts are listed
by the date of creation. All feeds use infinite scroll technology in order to
create a better user experience by loading posts only when needed.

![Home Feed](readme_images/features/feeds/home.png)

[⏫ contents](#contents)

### Feed Page

This feed is only available to logged-in users and contains, all the posts, from
all profiles they follow. Again using infintie scroll and listed by created
date, in descending order. If a user is new or they haven't followed any profiles
a message appears telling the user to 'get started by following other profiles'

!['Feed' (following) Feed](readme_images/features/feeds/feed.png)

[⏫ contents](#contents)

### Saved Posts

Much like the feed described above this feed is only available to logged-in
users. It displays all posts a user has saved. Again if a user is new or they
haven't saved any posts yet a message appears telling the user to 'you havent saved any posts'.
Underneath the post users kan find a bookmark button that changes color when user bookmarks a post.

![Saved Posts](readme_images/features/feeds/saved.png)

[⏫ contents](#contents)

### Notifications

Accessible to logged-in users, our Notification system keeps you updated on key activities. Receive instant alerts for new followers, stay in the loop with connections' latest posts, and get notified about likes on your own posts. The user-friendly interface allows easy management, with customizable settings for a personalized experience. Visual cues help quickly identify notification types.

![Notifications](readme_images/features/feeds/notifications.png)

[⏫ contents](#contents)

### Search Bar

The search bar can be found above all feeds when a user is logged in. A user can
use the search bar to filter feed results, if there are no posts found using
this search filter a message is displayed.

![Search Bar](readme_images/features/feeds/search-bar.png)

[⏫ contents](#contents)

### Create Post Form

A logged-in user can create a post using the "Add Post" button located in the navbar. Clicking on this button directs the user to the post creation form, where they can input content and upload an image. Both the image and content fields are mandatory for submitting a valid form. Upon successful submission, the user is redirected to the post details page for the newly created post.

![Create Post Form Desktop](readme_images/features/crud/create.png)

[⏫ contents](#contents)

### Edit Post Form

If a user is the owner of a post object, they will notice an additional settings button on the post, marked with a spanner icon for easy identification. Clicking on this button reveals the option to edit the post. Selecting the edit option redirects the user to the edit post form, which mirrors the create post form but is pre-filled with the existing post details. In this form, the user can make updates to the post details.

![Settings Button](readme_images/features/crud/post-settings.png)
![Edit Post Form](readme_images/features/crud/edit-post.png)

[⏫ contents](#contents)

### Delete Objects

If a user owns a Post, they will find an additional settings button on the post, distinguished by a spanner icon. Clicking this button displays the option to edit the post. Upon selecting the edit option, the user is directed to the edit post form, which is similar to the create post form but pre-populated with the necessary post details. Here, the user can update the post details.

If users own the comment, they see an 'X' icon next to their own comments, enabling them to delete their comment directly with confirmation.

![Delete Confirmation Modal](readme_images/features/crud/modal.png)
![Settings Modal Delete](readme_images/features/crud/delete-option.png)

[⏫ contents](#contents)

### Post Details Page

When a user clicks on a post in the feed, they are redirected to the post details page for that specific post. Here, users can view the post in full size, accompanied by a comments section below. If there are existing comments, users can read them. If a user is logged in, they have the option to interact with the post by liking it and leaving comments.

-   #### Liking

    On every post, a user will find a like button in the form of a 'heart'
    icon. If the user is logged in they can click the button to like a post,
    naturally, the icon changes in response to this action, and clicking the
    button again will unlike the post. These actions in turn increment and
    decrement the like count accordingly.

-   #### Commenting

    In addition to the liking button, there is a comments icon displaying the
    number of comments next to it. If the user scrolls down they will be
    presented with a comment form. Here the user can write a comment in order to
    join the conversation of the post, by simply clicking the 'comment' button.
    Once posted the user will be able to see their comment listed below the post
    in order of most recent first. A user has the ability to delete the comment
    if they wish.

[⏫ contents](#contents)

### Profile Page

Users have the ability to explore other users' profiles across the site by clicking on avatars or personal information displayed on posts. Each user's profile page features a profile card that showcases personal information they have added to their profile. This information may encompass:

-   profile image
-   joined date
-   name
-   bio

_This information can be added via the settings menu, more on this [here](#update-profile)._

Beneath the profile card is a feed of all posts created by the user in
descending order of date of creation.

![Profile Page Desktop](readme_images/features/profile/profile-page.png)


-   #### Follow

    If a user is on a profile which is not their own, they can find an
    additional 'Follow' button. When clicking this button four things happen:

    1. the users following count increases by one
    2. the profiles follower count increases by one
    3. the follow button switches to an unfollow button
    4. the following profile posts are added to the 'Feed' feed.

    Of course, clicking the button again will simply reverse these effects.

### Update Profile

To boost their profile visibility, users can update it by adding or modifying information. Simply go to the profile, click the settings spanner, and choose edit to access the update profile form, where additional details, including the profile image, can be added or updated.

![Update Profile Form Desktop](readme_images/features/profile/update-form.png)


### Account Credentials

For username or password updates, users can use the settings menu on the profile page. Username validation prevents reuse, and passwords must match and meet length requirements.

![Update Credentials Form](readme_images/features/profile/credentials.png)

[⏫ contents](#contents)

### CRUD Functionality

---

Picagram features full Create, Read, Update, Delete functionality, for
registered users, within the UI shown above in
[current features](#current-features).

-   #### Create:

    Users can create posts, comments, likes and follows.

-   #### Read:

    Both registered and unregistered users have complete read functionality
    across posts, profiles, and comments.

-   #### Update:

    Posts, profiles, and comments can be updated within the UI.

-   #### Delete:
    All user-owned objects can be deleted with the UI. Including, posts, comments
    likes and follows.

[⏫ contents](#contents)

### Future Features

---

Picagram's initial release met its MVP goals within the planned timeframe. Future versions will introduce additional features, both short and long-term, to enhance the platform. Some upcoming features include:

-   #### Reels

    Explore a new way to share short, engaging videos with the Picagram community.

-   #### Enhanced Direct Messaging

    Enjoy improved communication with multimedia sharing and advanced messaging features.

-   #### Event Integration

    Stay connected by integrating events seamlessly into your Picagram experience.

These features aim to provide a richer and more dynamic user experience on Picagram.

[⏫ contents](#contents)

## Reusable Components

Dividing the UI into smaller React components boosts maintainability and efficiency. It enables focused development, component reusability, and easier issue resolution without affecting other parts. This approach results in a cleaner codebase and efficient production. Examples of reused components are provided below.

### `Asset.js`

This component, Asset.js, is responsible for enhancing user experience with images. It incorporates a spinner for loading and includes general styling improvements to optimize the visual presentation of images throughout the application.

### `Avatar.js`

The Avatar.js component is a key element in Picagram, acting as a clickable link to user profiles and adding a distinctive round styling to avatars. This attention to detail enhances both navigation and visual appeal, contributing to a cohesive design and an improved user experience.

### `MoreModal.js`

MoreModal introduces a modal feature designed to provide users with convenient access to various settings. It proves particularly useful when interacting with posts or managing profile-related configurations, enhancing user control and customization.

### `NavBar.js`

This component dynamically adjusts its appearance based on the user's login status. When logged in, it displays personalized features, while for logged-out users, authentication and registration options are presented. This responsive design ensures an optimal and streamlined navigation experience.

### `NotFound.js`

When users encounter a non-existent page, NotFound.js comes into play as a fundamental component, displaying a user-friendly 404 page. This component contributes to the overall user experience by guiding users gracefully through unexpected situations.

### `ShareModal.js`

The ShareModal.js component facilitates content sharing by providing users with a convenient way to share content across various platforms.

### `ConfirmationModal.js`

The "ConfirmationModal.js" component is a key element for confirming deletions of comments and posts, ensuring that users don't delete their comments or posts by accident.

[⏫ contents](#contents)

## Contexts/ Hooks

### `CurrentUserContext.js`

The CurrentUserContext was taken from the Code Institute Moments React
walkthrough project. It is used for handling the current user's information.
`CurrentUserContext` is used to share the current user data in different
components. There's also the `SetCurrentUserContext` which is used to provide a
function to update the current user data.

Additionally, there are the Axios interceptors which handle token refreshing.
When making requests using `axiosReq` it checks if the token needs refreshing
and automatically refreshes it when needed.

### `ProfileDataContext.js`

The ProfileDataContext was taken from the Code Institute Moments React
walkthrough project.

The ProfileDataContext.js file manages and shares profile-related data, including page profiles and popular profiles, along with functions for following and unfollowing profiles. It utilizes React context to facilitate efficient data sharing across components.

### `useRedirectUser.js`

A custom React hook, taken from Code Institute Moments React walkthrough
project, which handles redirection based on the user's authentication status.
The logic means that by simply adding a line of code you can redirect
unauthenticated users away from parts of the site. For example, a logged-out user
shouldn't be able to access a create post form.

[⏫ contents](#contents)

## Libraries and Dependencies

- [react-bootstrap](https://react-bootstrap-v4.netlify.app/): Chosen for its ubiquity, Bootstrap expedites development and simplifies responsive design in Picagram. The library and extensive documentation provide valuable resources.

- [react-router](https://reactrouter.com/en/main): Manages navigation in React applications, creating a dynamic and seamless user experience. Components like `<Route>` in `App.js` define and manage component routes.

- [react-router-dom](https://reactrouter.com/en/main): Crucial for navigation and routing in Picagram, enabling basic routing for navbar and header links. Transforms the app into a Single Page Application (SPA) for an enhanced user experience.

- [axios](https://axios-http.com/): A JavaScript library simplifying HTTP requests, crucial for fetching and posting data in Picagram.

- [infinite-scroll](https://www.npmjs.com/package/react-infinite-scroll-component): Enhances Picagram with infinite scrolling, creating a smoother user experience by detecting scroll events and loading data at the page's bottom.

- [jwt-decode](https://www.npmjs.com/package/jwt-decode): A JavaScript library decoding JSON Web Tokens (JWT) in web applications.

- [react-responsive](https://www.npmjs.com/package/react-responsive): Facilitates responsive design by allowing components to render based on device characteristics.

- [react-share](https://www.npmjs.com/package/react-share): Provides easy-to-use components for sharing content on various platforms, enhancing social interaction within Picagram.

[⏫ Contents](#contents)

## Bugs

To view a list of all bug reports for the project both resolved and unresolved
got to
[Picagram Kanban](https://github.com/users/jindah/projects/5).

### Resolved Bugs

-   #### [BUG: React wont start #19](https://github.com/jindah/picagram/issues/19)
-   #### [BUG: Posting doesnt post #21](https://github.com/jindah/picagram/issues/21)
-   #### [BUG: Comment section not updating #22](https://github.com/jindah/picagram/issues/22)
-   #### [BUG: Console warning about button as a descendant of button #25](https://github.com/jindah/picagram/issues/25)
-   #### [BUG: Notifications page logs out user #28](https://github.com/jindah/picagram/issues/28)

### Unresolved Bugs

Due to time constraints, there is an unresolved bug that, while not directly impacting the overall functionality of the application, is non-essential for the MVP.

-   #### [BUG: Sticky Navbar Not Maintaining Stickiness on Smaller Screens #24](https://github.com/jindah/picagram/issues/24)

## Deployment

### Github Cloning

---

Fork or clone this project from its
[GitHub repository](https://github.com/jindah/picagram), follow the
steps below:

**1. Navigate to the Picagram repository, and click the green 'code'
button.**

**2. Once clicked, within the dropdown, fork or clone this project, here we will
clone using the url.**

**3. In your local IDE open your Git terminal**

**4. Change your working directory to your preferred location.**

**5. Next type the following command, the 'copied URL' is the URL taken form the
Github repo.**

    git clone https://github.com/jindah/picagram

**6. Hit Enter to create the cloned repository.**

[⏫ contents](#contents)

### Heroku Deployment

---

The application was deployed using Heroku. Heroku simplifies the deployment
process. With a few commands, you can deploy your application without the need
to configure servers, networking, or infrastructure.

In order to deploy Picagram to Heroku I followed these 8 steps:

**1. Navigate to the Heroku dashboard. Click "New" and select "Create new
app".**

**2. Create an app name and select a region closest to you.**

**3. Navigate to the 'Deploy' tab.**

**4. Scroll to the 'Deployment Methods' section and select 'Connect to
GitHub'.**

**5. Once connected to GitHub, search for the repository in the 'Connect to
GitHub' section, and click 'Connect'.**

**6. I chose to enable 'Automatic Deploys'. In order to do so click the 'Enable
Automatic Deploys' button.**

**7. For manual deployment use the 'Manual Deploy' section by clicking 'Deploy
Branch'.**

**8. Click 'View' at the bottom of the 'Manual Deploy' section to view the
deployed project.**

[⏫ contents](#contents)

## Credits

### Tools

---

-   To create the ERD diagram and Wireframes - [Lucid Chart](https://lucid.app/)

-   Default profile icon -
    [Flaticon](https://www.flaticon.com/)

-   Favicon creator - [Favicon.io](https://favicon.io/)

-   To check responsivity across multiple devices -
    [Am I Responsive](https://ui.dev/amiresponsive?url=https://craftltd-6c672c6a814e.herokuapp.com/)

-   Post and profile images for mock data:

    -   [Unsplash](https://unsplash.com/)

-   Icons used throughout the site - [Font Awesome](https://fontawesome.com/)

-   Font styles - [Google Fonts](https://fonts.google.com/)

### Resources

---

-   The initial setup and the basic structure of the application are based on the instructions from the [Code Institute       Moments](https://github.com/Code-Institute-Solutions/moments) walkthrough project. Most of the code from the walkthrough project has been customized and adapted to this project. I also added additional features not covered by the walkthrough project, such as Notifications and Bookmarking posts.

    -   Current user context hook (`src/contexts/CurrentUserContext.js`)
    -   The use of axios interceptors to refresh tokens
        (`src/api/axiosDefaults.js`)
    -   Redirect users based on authentication (`src/hooks/useRedirectUser.js`)
    -   Form validation alerts (_site wide, example:_
        `src/pages/forms/LoginForm.js`)

-   Using useRef over useState to avoid 401 errors from onChange rerender

-   Infinite Scroll -
    [Npm react-infinite-scroll Docs](https://www.npmjs.com/package/react-infinite-scroll-component)

-   React responsive to define smaller screen sizes for different navbars [react-responsive](https://www.npmjs.com/package/react-responsive)

-   React Share for ShareModal [react-share](https://www.npmjs.com/package/react-share)

-   Inspiration and code from [sonic-explorers](https://github.com/nacht-falter/sonic-explorers) to Notifications.

**The below Docs were used extensively throughout the project build:**

-   [React Docs](https://react.dev/reference/react)
-   [React Router Docs](https://v5.reactrouter.com/web/api/Hooks/usehistory)
-   [React Router Bootstrap Docs](https://www.npmjs.com/package/react-router-bootstrap)
-   [React Bootstrap 5 Docs](https://react-bootstrap.netlify.app/)

### Acknowledgements

- I would like to thank my Code Institute mentor Martina Terlevic for support and constructive advice.
- I would like to thank the Code Institute tutors for their support.

[⏫ contents](#contents)

[⏩ Testing.md](testing.md)