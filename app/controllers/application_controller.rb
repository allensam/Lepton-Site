# Controller for all views do not use unless code is used on all views otherwise
# Use inheritance or extend another Controller
#
#
class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

end
