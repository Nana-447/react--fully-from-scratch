<h1 align="center"><b>Installation Guide for Windows</b></h1>

- [Install VS Code](https://code.visualstudio.com/download)
- Install VS Code extensions if you want (JavaScript lint, etc)
- [Install Node JS last stable version](https://nodejs.org/en/download/)
- [You can install Yarn if you want to. It's a batter package manager in my opinion. Created by Facebook to make things simpler](https://classic.yarnpkg.com/en/docs/install/#windows-stable)

# NPM VS. YARN commands
- Install dependencies from package.json: npm install == yarn;
- Install a package and add to package.json: npm install package --save == yarn add package
- Install a devDependency to package.json: npm install package --save-dev == yarn add package --dev
- Remove a dependency from package.json: npm uninstall package --save == yarn remove package
- Upgrade a package to its latest version: npm update --save == yarn upgrade
- Install a package globally: npm install package -g == yarn global add package