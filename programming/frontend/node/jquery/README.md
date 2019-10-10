## Description

Setup project using node Bootstrap and Sass and jQuery.

#### Add jQuery CDN in index.html

Inside head element add the following script

```
<script
  src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
  integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8="
  crossorigin="anonymous"></script>
  ```
  
#### Sass installation

Install Sass using npm by running:

```
npm install -g sass
```

#### Bootstrap and dev-server installation

Install Bootstrap and dev-server using npm by running:

```
npm i bootstrap dev-server
```

#### Sass usage

Then sass executable is used to compile .sass and .scss files to .css files:

```
sass --no-source-map style.scss style.css
```

#### Usage

Serve it with  dev-server by running:

```
$ ./node_modules/.bin/dev-server 
```
