Rails.application.routes.draw do

  root 'base#index'

  namespace :tutorials do
    get '' => :index
    get 'html' => :html
    get 'angular' => :angular
    get 'css' => :css
    get 'js' => :js
  end

end
