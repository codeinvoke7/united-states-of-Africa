# Getting Started with United States of Africa Website codebase

Follow the steps highlighted below how to get the application running on your local computer

## Prerequisities

    1. Ensure you have `node` with version >=14 installed. To find out about this, Open a command prompt or terminal and type `node -v`
    2. You have cloned the repo from github
    3. You have a text editor (preferably vscode) installed on your computer

## Steps

    1. Open the project folder with your desire code editor
    2. Open a built in terminal without included with your text editor
    3. To install all dependencies used in the project, type in `npm install` into the open terminal and click enter on your keyboard
    4. To ensure the project is open with rules specific by eslint used in this project, type in `npm run lint` on the terminal
    5. Next, ensure the project files are rightly formatted by typing in `npm run format`
    6. Finally, to start the development server, `npm run start`

At this Point, you should see the application running on a browser window/tab at [http://localhost:5173]
If you encounter any issues while doing any of the above commands, kindly the sections below on the `available scripts` to find for little more insight. If the issue persist, kindly contact `Stephane => @ stephanoir99@gmail.com`

# Getting Started

## Contributing Rules

1. Clone repository
2. Checkout an "all-time" branch using the following format <_your name_>-development (e.g git checkout -b joel-development)

NOTE: All Push and pull requests should be made toward the development branch.

## Making a Commit

Ensure to follow these steps when committing

1. git add .
2. npx lint-staged
3. git commit -m <_message here_>
4. git pull origin development
5. git push

## Opening a Pull request

1. Go to github
2. open a new Pull Request to development

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Checks if files obeys all Eslint set rules properly

### `npm run lint:fix`

This script fixes all possible eslint errors in the project

### `npm run format`

Formats all files using prettier set rules at .prettierrc

### `npm run check:format`

Checks if all files are formatted properly

### `npm run test-all`

Checks if files obeys the Eslint rules and are formatted properly

### Project Structure

`/components` contains global components and atomic or modular components.
```
components
├── guards
│   └── ProtectedRoutes.js
├── layout
│   ├── NavBar
│   │   ├── components
│   │   │   ├── NavItem.js
│   │   │   ├── NavSection.js
│   │   │   └── index.js
│   │   └── index.js
│   └── index.js
├── modules
│   ├── cards
│   │   ├── ItemCard.js
│   │   ├── UserCard.js
│   │   └── index.js
│   └── index.js
├── widgets
│   ├── buttons
│   │   ├── PrimaryButton.js
│   │   ├──SecondaryButton.js
│   │   └── index.js
│   └── index.js
```

Global components like `ProtectedRoutes.js` and NavBar are parent components of all pages in the router. For example, AuthGuard.js wraps around components that need authentication, checks if the user is authenticated, and jumps to the login page if not.

Atomic components like `PrimaryButton.js` are the smallest UI components that will be reused in modules and pages.

Modular components like `UserCard.js` are modules that contain multiple widgets as a component to serve a specific function, which are reused in more than one page.
```
`/pages`

pages
├── Login
│   ├── components
│   │   └── LoginForm.js
│   └── index.js
├── Account
│   ├── components
│   │   ├── AccountSettings.js
│   │   └── AccountDetails.js
│   └── index.js
├── Profile
│   ├── components
│   │   ├── ProfileCover.js
│   │   └── ProfileDetail.js
│   └── index.js
├── Settings
│   ├── components
│   │   ├── AccountSettings.js
│   │   └── NotificationSettings.js
│   └── index.js
```

`/pages` contains pages shown on the website. It should be structured in a similar way as the router to give you a better understanding of how the real website would be browsed. This is also similar to the Next.js approach.

For example, the outer folder `/account` is an entrance on the navbar, which includes two pages profile and settings. Each page folder has an `index.js` (the page itself), and contains modules that made up this page in the `/components` folder.

slices
├── itemSlice.js
└── userSlice.js

Now for the logic side. We are using `Redux Toolkit` which allows us to handle Redux actions and reducers easily in one place called a “slice”. It also comes with many useful middlewares like `createAsyncThunk`.

`/slices` basically contains all the Redux Toolkit slices. You can think of `/slices` as a central place that governs the global state and the specified functions to modify it. Each slice that handles an aspect of the app’s global state should be separated into one file.

utils
├── objDeepCopy.js
└── setAuthToken.js

`/utils` contains files that deal with logic to fulfill a certain function. They are functional pieces commonly used in many places in the project.
