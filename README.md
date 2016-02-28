[![Stories in Ready](https://badge.waffle.io/youngstartupsio/Yeezy-Codes.png?label=ready&title=Ready)](https://waffle.io/youngstartupsio/Yeezy-Codes)
[![Code Climate](https://codeclimate.com/github/youngstartupsio/Yeezy-Codes/badges/gpa.svg)](https://codeclimate.com/github/youngstartupsio/Yeezy-Codes)
[![Issue Count](https://codeclimate.com/github/youngstartupsio/Yeezy-Codes/badges/issue_count.svg)](https://codeclimate.com/github/youngstartupsio/Yeezy-Codes)
[![Inline docs](http://inch-ci.org/github/youngstartupsio/Yeezy-Codes.svg?branch=master)](http://inch-ci.org/github/youngstartupsio/Yeezy-Codes)
Yeezy Codes
==================
Welcome to Yeezy Codes a youngstarups.io inspired project to make coding easier to learn
and understand to new web developers or web developers just trying out a new language!

## Contribution Guide

### Using Rails
#### Installation
After cloning this repo install the latest version of [ruby](https://www.ruby-lang.org/en/downloads/) (2.*). After it is installed open your terminal and check that it works with `$ ruby -v`
change directory to the path of the repo and run `$ bundle install` (if you get fatal errors open an issue or look it up). 
#### Postgresql
This rails project does not use the defualt database because of compatibility with heroku. So you will need to install it on your computer.

#### Almost Done! (Setuping databases and running server)

You will only have to run this command once to create database (databases won't be in sync with other peoples because it is for testing purposes only

use sudo if needed
`rake db:create`

Then run the migration this command will probably have to be ran offten (probably ever pull changing databases)
`rake db:migrate`

When everything is working `rails s` (for linux may have to be in postgres user) to start a local server to view in your browser. Front end devs can now start their work by editing the html files in app/views/<controller> and the styles and javascript in app/assets/ Note please try to use scss to keep things organized however if you do not know coffeescript it would be easier to keep it that way but if you don't it is fine to make a new file for your own javascript (it might be converted to coffeescript to keep things the same and organized)

### Github Guide
Create new branch for features and then do pull request
if you don't know how to do these ask me
Use waffle.io link is (https://waffle.io/youngstartupsio/Yeezy-Codes/join)

### Notes about contributing
#### Yard
This app needs to be very documentation heavy so that we can have people easily understand the goal of each line of code to get them on their way to contributing and so they don't give up quite easily. Also this makes the person think about their code more and make it better themselves! This way they are not coding for themselves, but other people. Also it will make pull requests and branch merges much smoother and efficiant. This is where yard comes into play

Yard is bascially an gerenated website bassed off of comments and documentation so a person can see the connections between controllers methods and parameters and know what to change to make the code better
basically when ever a method, class, module, etc is created above it you comment the basic description of the object and then make several comment lines. If your method is a fancy method (yay for you) put in one of the commet lines @author <Username or name> so that people can contact you and ask questions about it. There are also many other things you can do for yard please check out the docs [here](http://yardoc.org/guides/index.html)

Also there is a yard [cheatsheet](https://gist.github.com/chetan/1827484)

yard is pretty simple to use to generate new documentation do `yard doc`

And then to view the docs do `yard server` and visit the url to see the documentation pretty cool right!!!

#### Final thougts
When a change is made try to push that change with a descriptive comment on what was in the change

DONOT have serveral changes in one commit or have undescriptive comments

Also with big changes make sure to test if it works and have all unrelated changes pushed before pushing the big change

## Resources
1. [learn sass](http://sass-lang.com/guide)
2. [learn coffeescript](http://coffeescript.org) not really used
3. More?...

### Testing
  rake teaspoon to run javascript tests
