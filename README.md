<!DOCTYPE html>
<html>
<head></head>
<body>
    <h1>JavaScript Starter Pack for Ubuntu</h1>
    <h3>Instalation Instructions:</h3>
    <ol>
    <li>Update package manager: "sudo apt-get update"</li>
    <li>Install node with: "sudo apt-get install nodejs"</li>
    <li>Install npm with: "sudo apt-get install npm"</li>
    <li>Update npm with: "sudo npm install npm@latest-g"</li>
    <li>Update node with: "sudo npm node update"</li>
    <li>Install editorconfig plugin for text editor to maintaing code format settings</li>
    <li>Instal nsp to check for package vulnerabilities with: "sudo npm install -g nsp"</li>
    <li>Check with "nsp check" command</li>
        <li></li>
    </ol>
    <h2>Run project with:</h2>
    <ul>
    <li>"node buildScripts/srcServer.js"</li>
    </ul>
    <h2>Share project using LocalTunnel</h2>
    <h3>Instructions:</h3>
    <ol>
    <li>Build project by running: "node buildScripts/srcServer.js"</li>
    <li>Then in another terminal run: "lt --port 3000" replace 3000 with whatever port you specified in the serServer.js file and you will get a url to share the project.</li>
    </ol>
</body>
</html>
