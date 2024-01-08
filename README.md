# Picagram

![Picagram](README_images/responsive.png)

## Introduction

Picagram is a social sharing app designed to provide users with a refined and ad-free experience, reminiscent of Instagram. As a response to the challenges faced by users on existing platforms, Picagram aims to create a space free from intrusive advertising and unwanted bot interactions, focusing solely on genuine social connections and content sharing.

### Live Site

Explore the live site on [Heroku](#).

### Project Stack

Picagram is built using:

Frontend:
React, React-Bootstrap, JSX, CSS, HTML, and axios for handling API requests.

Backend:
Django REST framework with Python.

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
    -   [UX](#ux-user-experience-design)
        -   [User Stories](#user-stories)
            -   [Site Admin](#site-admin)
            -   [User](#user)
            -   [Registered User](#registered-user)
        -   [Wireframe](#wireframe)
        -   [Information Architecture](#information-architecture)
        -   [Visual Design](#visual-design)
            -   [Color Scheme](#color-scheme)
            -   [Fonts](#fonts)
            -   [Icons](#icons)
            -   [Logo](#logo)
    -   [Database ERD](#database-erd)
    -   [Development](#deployment)
        -   [Agile Design](#agile-design)
            -   [Github Issues](#github-issues)
                -   [Templates](#templates)
                    -   [User Story Template](#user-story-template)
                    -   [Bug Report](#bug-report)
                    -   [Feature Request](#feature-request)
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
            -   [Liked Page](#liked-page)
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
        -   [InfiniteScroll.js](#infinitescrolljs)
        -   [Loader.js](#loaderjs)
        -   [Avatar.js](#avatarjs)
        -   [MoreModal.js](#morenmodaljs)
        -   [ShareModal.js](#sharemodal.js)
        -   [Post.js](#postjs)
        -   [Comment.js](#commentjs)
        -   [NavBar.js](#navbarjs)
    -   [Contexts/ Hooks](#contexts-hooks)
        -   [CurrentUserContext.js](#currentusercontextjs)
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
        -   [Tutorials](#tutorials)

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

**Owner Goals**
+ Create an inclusive and vibrant social platform where users from diverse backgrounds can:
- Share their daily lives, activities, and interests.
- Connect with others who appreciate and engage with their content.
- Foster a sense of community through mutual appreciation and connection.
