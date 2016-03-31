# WORK IN PROGRESS

# angular-balance-text
AngularJS Wrapper for [jQuery balance-text](https://github.com/adobe-webplatform/balance-text) for implementing balancing of wrapping text in a web page

[![npm version](https://badge.fury.io/js/angular-balance-text.svg)](https://badge.fury.io/js/angular-balance-text)
[![Bower version](https://badge.fury.io/bo/angular-balance-text.svg)](https://badge.fury.io/bo/angular-balance-text)

## Installation

1. Install via either [bower](http://bower.io/), [npm](https://www.npmjs.com/) or downloaded files:
    1. via bower: `bower install --save angular-balance-text`
    2. via npm: `npm install --save angular-balance-text`
    3. via [downloaded files](https://github.com/JohnnyTheTank/angular-balance-text/zipball/master)
2. Add `jtt_balance_text` to your application's module dependencies.
3. Include dependencies and angular-balance-text in your HTML.
    1. When using bower
    ```html
    <!-- dependencies -->
    <script src="bower_components/jquery/dist/jquery.min.js"></script>
    <script src="bower_components/angular/angular.min.js"></script>
    <script src="bower_components/balance-text/jquery.balancetext.min.js"></script>

    <!-- angular-balance-text -->
    <script src="node_modules/angular-balance-text/dist/angular-balance-text.min.js"></script>
    ```
    2. When using npm
    ```html
    <!-- dependencies -->
    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="node_modules/angular/angular.min.js"></script>
    <script src="node_modules/balance-text/jquery.balancetext.min.js"></script>

    <!-- angular-balance-text -->
    <script src="node_modules/angular-balance-text/dist/angular-balance-text.min.js"></script>
    ```

    3. When using downloaded files
    ```html
    <!-- dependencies -->
    <script src="YOUR_PATH/jquery.min.js"></script>
    <script src="YOUR_PATH/angular.min.js"></script>
    <script src="YOUR_PATH/jquery.balancetext.min.js"></script>

    <!-- angular-balance-text -->
    <script src="YOUR_PATH/angular-balance-text.min.js"></script>
    ```

## Usage

Angular event to manually re-balance all triggered elements use `angular-balance-text.refresh`

**Read the docs of jQuery balance-text [jQuery balance-text](https://github.com/adobe-webplatform/balance-text)**


