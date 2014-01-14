// AddTodoForm 
KanbanList.namespace('addTodoForm');

KanbanList.addTodoForm = (function(){
  function addTodoWithPrefix( prefix, msg ){
    if ( msg == "" ){
      return;
    }

    var prefix_text = "";
    if ( prefix != "" ){
      prefix_text = "[" + prefix + "]";
    }

    addTodoAjax( prefix_text + " " + msg );
  }

  function addTodoAjax(msg) {
    $.ajax({
      type: "POST",
      cache: false,
      url: "tasks",
      data: "msg=" + escapeInvalidChar(msg),
      dataType: "jsonp"
   });
  }

  function escapeInvalidChar(msg){
    var escaped_msg = msg.replace(/&/g,""); 
    escaped_msg = escaped_msg.replace(/'/g,"\""); 
    escaped_msg = escaped_msg.replace(/!/g,"|"); 
    return escaped_msg;
  }

  function addTodoAction(){
    addTodoWithPrefix($('#prefix').val() , sanitize($('#add_todo_form_msg').val()));
    $('#add_todo_form_msg').val('');
    $('#add_todo_form_msg').focus();
 
    $("#add_todo_form_msg").maxlength({
      'feedback' : '.task-chars-left-add-form'
    });
  }
 
  function showTemporarily(speed){
    if ($("#temporarily_column").css("display") == "none"){
      $("#keep_column").removeClass("span6");
      $("#try_column").removeClass("span6");
      $("#keep_column").addClass("span4");
      $("#try_column").addClass("span4");
      if (speed == "fast"){
        $("#temporarily_column").show();
      }else{
        $("#temporarily_column").fadeIn();
      }
      return true;
    }
    return false;
  }

  function hideTemporarily(){
    if ($("#temporarily_column").css("display") != "none"){
      $("#temporarily_column").fadeOut("fast",function(){
        $("#keep_column").removeClass("span4");
        $("#try_column").removeClass("span4");
        $("#keep_column").addClass("span6");
        $("#try_column").addClass("span6");
      });
    }
  }

  function init(){
    $("#add_todo_form_msg").maxlength({
      'feedback' : '.task-chars-left-add-form'
    });

    $("#add_todo_form").submit(function(){
      addTodoAction();
      return false;
    });

    $("#add_todo_button").click(function(){
      addTodoAction();
    });

    $("#show_temporarily").click(function(){
      if (!showTemporarily()){
        hideTemporarily();
      }
    });

    filterTask("");
  }

  return {
    //public
    init: init,
    showTemporarily: showTemporarily,
    hideTemporarily: hideTemporarily
  }
}());

