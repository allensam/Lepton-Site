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
##### Mac OS 
[Downlaod](http://postgresapp.com/)

Then move to `/Aplications` and double click

Next you need to set up the path (if you don't want to use the GUI)
For standard terminal add the folling to `~/.bash_profile`
```sh
export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/<INSTALLED_VERSION>/bin
```
For fish shell in `config.fish` use
```sh
set PATH /Applications/Postgres.app/Contents/Versions/<INSTALLED_VERSION>/bin $PATH
```
Use `$ psql -h localhost` to start the database then you are ready for the next step!

##### Linux (Debian Based)
First make sure everything is up to date
`sudo apt-get upgrade`

then install postgres and depencies

`sudo apt-get install postgresql postgresql-contrib libpq-dev`

Create a database user

`sudo -u postgres createuser -s pguser`

Set password for user (optional)




When bundle install works run `$ rails s` to start a local server to view in your browser. Front end devs can now start their work by editing the html files in app/views/<controller> and the styles and javascript in app/assets/ Note please try to use scss to keep things organized however if you do not know coffeescript it would be easier to keep it that way but if you don't it is fine to make a new file for your own javascript (it might be converted to coffeescript to keep things the same and organized)

### Github Guide

  1. Fork the repo to your GitHub account
  2. Clone the forked repo to your local machine
  3. Assuming you already have the repo in your local pc:
  4. `git remote add upstream https://github.com/youngstartupsio/Yeezy-Codes.git`
  5. `git fetch upstream`
  6. `git checkout -b <New Feature branch with your changes>`
  7. Change files as you want
  8. `git add -A`
  9. `git commit -m "A nice message describing what you changed"`
  10. `git checkout <Branch you want to contribute>`
  12. `git pull upstream <Branch you want to contribute>`
  13. `git merge <New Feature branch with your changes>`
  14. `git push origin <Branch you want to contribute>`
  15. Go to your GitHub account, select the branch you changed, in this case,
  `<Branch you want to contribute>`, and click open a new PR button.

Repeat from steps 5 - 15 over and over until we have the best product ever.

### Updating the whole fork

  1. `git pull upstream`

### Updating your fork for a specific branch

  1. `git pull upstream <Specific branch>`
  2. `git checkout <Specific branch>`

### Notes about contributing 
When a change is made try to push that change with a descriptive comment on what was in the change

DONOT have serveral changes in one commit or have undescriptive comments

Also with big changes make sure to test if it works and have all unrelated changes pushed before pushing the big change

## Resources
1. [learn sass](http://sass-lang.com/guide)
2. [learn coffeescript](http://coffeescript.org)
3. More?...

## Deployment
No information yet
