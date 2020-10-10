## DEPLYOING USING GITHUB

## Go by theses steps:
- 1. Go to https://www.github.com;
- 2. Create a new repository;
- 3. Copy the SSH code from the repository that you just created;
- 4. On the React project, type:
``git remote rm origin``
``git remote add originin "SSHCODE"``
``yarn add gh-pages``

- 5. Change the package.json file and add those parameters:
``"homepage": "https://your-username.github.io/your-repo-name"``
``"scripts": {
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build"
}``

- 6. Run predeploy. It will run the deploy right after it automatically;
``yarn deploy``

- 7. Awesome! Your repo is live and running