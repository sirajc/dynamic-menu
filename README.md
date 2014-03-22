## Dynamic Menu

Dynamic Menu is powerful [AngularJS](http://angularjs.org) directive for navigation built using [Bootstrap](http://getbootstrap.com).

## Quick start

Open console/command prompt at location where you have `index.html` file of your angular app.
Clone dynamic-menu repository using following command

SSH : `git clone git@github.com:c-siraj/dynamic-menu.git dynamic-menu`

HTTPS: `git clone https://github.com/c-siraj/dynamic-menu.git dynamic-menu`

### What comes in package

All the files are included in one directory, in future this may be grouped logically

```
bootstrap/
├── dynamic-menu/
│   ├── dynamic-menu.js // All things Angular
│   ├── dynamic-menu.html // Template used by directive
│   ├── dynamic-menu.css // Styles for menu
│   └── dynamic-menu.json // Sample JSON for menu
```

## Pre requisites
Your angular app must have all the required libraries available. if not present, you can use `bower` to install the same.

`angular`, `angular-resource`, `bootstrap` are required for `dynamic-menu`. `jquery` is dependency for `bootstrap`; `angular-route` will be used by your angualar app


## Usage
Include the required css and scripts in your `index.html` file of AngularJS App
```html
<head>
.....
<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css" />
<link rel="stylesheet" href="dynamic-menu/dynamic-menu.css" />
.....
</head>
<body ng-app="dynamicMenuApp">
	.....
	.....
	<script src="bower_components/jquery/dist/jquery.js"></script>
	<script src="bower_components/angular/angular.js"></script>
	<script src="bower_components/bootstrap/dist/js/bootstrap.js"></script>
	<script src="bower_components/angular-route/angular-route.js"></script>
	<script src="bower_components/angular-resource/angular-resource.js"></script>
	<script src="dynamic-menu/dynamic-menu.js"></script>
</body>
```	

Include the `navigation-bar` directive provided by Dynamic Menu
```html
<div data-ng-controller="DynamicMenuController" navigation-bar navigation-detail="navigationDetail"></div>
<div ng-view ></div>
```

**Notice that navigation-bar directive is placed out of ng-view**, hence you don't have to include this directive in every partial/view you have in your app.
*Will later upload a sample `index.html` file for reference*

Run the angular app, and you will see the menus right away. Edit `dynamic-menu.json` file as per your requirement, refresh and see the menu you want

## Menu based on REST service
Write a REST api on you server, which will provide the JSON required by menu.
Edit `DynamicMenuFactory` in `dyanmic-menu.js` to point to REST api of your server.
Refresh and see that menus are now REST api based.

**Note: You must not change the JSON structure**

## TODO
- Test, Test and Test
- Drop down menu as provided by bootstrap
- Brand Logo
- Icon based menu item

## Copyright and license

	The MIT License

	Copyright (c) 2014 Sirajuddin Choudhary

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
