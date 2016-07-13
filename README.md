Jasmine Debugging Demo
======================

How to use webstorm to debug jasmine specs, especially with the es6 javascript code.

```
npm install
```

Then use your webstorm to open this project, set some break points, then you can single debug in webstorm by running `run-specs.js` directly in debugging mode. 

Notice
------

1. You must upgrade webstorm to latest version(2016.02) to make it run successfully. [Download link](https://www.jetbrains.com/webstorm/download/).

2. We can't use `import` and `export` keywords in JavaScript, since they are not working easily without `babel`, instead, we should use `require()` and `module.exports`.
