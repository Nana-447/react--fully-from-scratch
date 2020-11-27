# HEROKU DEPLOY

## STEP BY STEP
1. Create an account on (Heroku)[https://signup.heroku.com/];
2. Log In on Heroku after creating the account;
3. Heroku provides a Dashboard interface and a console interface too, so you can pick whatever you want;
4. Download and Install the Heroku [CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install);
5. Pretty easy Installation on Windows. Just keep clicking: Next >> Next >> Next;
6. Verify the Installation running this on the command line: ``heroku --version``;
7. Log Out via console: ``heroku logout``;
8. Log In via console: ``heroku login``;
9. Hit any button, then... the command line will open the browser to authenticate it;
10. Log In using the browser and check if the command line accepted it;
11. Heroku works similary as a GitHub repo. You pretty much have to commit code using GIT commands (but there are specific heroku commands);
12. Create a Heroku Project: ``heroku create crwn-joaolessa --buildpack https://github.com/mars/create-react-app-buildpack.git`` (this will be available as: www.heroku.crwn-live.com);
13. BuildPack is a specific configuration and deploys our React as a static website;
14. Static website is the best way to host React Projects;
15. We now need to push our chances to the master: ``git push heroku master``
16. The BuildPack is building and optimizing our React Project;
17. My project returned with an error: "App not compatible with buildpack" / The push failed;

## EXTRA - FIREBASE WITH HEROKU
1. Copy the Heroku URL (https://crwn-joaolessa.heroku.com/);
2. Open the Firebase Dashboard and go to >> Authentication >> (Sign In Method)[https://console.firebase.google.com/u/0/project/crwn-db--lessa/authentication/providers];
3. Click on Add Domain on the Section;
4. Paste the Heroku URL;

## EXTRA - GITHUG MASTER WITH HEROKU
https://devcenter.heroku.com/articles/github-integration