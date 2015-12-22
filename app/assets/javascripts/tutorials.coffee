# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

font_size_editor = Editor.new("font_size_editor", "markdown");

# changes all the editors font sizes not finished
#
# @param size [int] the inputed font size see index of tutorials
# @author Sam Allen
changeFontSize = (size) =>
  document.getElementByClassName().style.fontSize=size;
