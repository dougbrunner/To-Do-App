// Problem: when I click on the button, nothing happens
// Solution: use jQuery to make the to do list interactive

// When the add button is clicked, append an item to the incomplete-tasks
$('.addTask').click(function(){
	var $input = $(this).prev().val();
	var $li = $('<li>');
	var $inputCheckbox = $('<input type="checkbox">');
    var $label = $('<label>');
    var $inputText = $('<input type="text">');
    var $buttonEdit = $('<button class="edit">');
    var $buttonDelete = $('<button class="delete">');

    $label.text($input);
    $inputText.val($input);
    $buttonEdit.text('Edit');
    $buttonDelete.text("Delete");

    if($input != ""){
		$('#incomplete-tasks').append($li);
		$('#incomplete-tasks li:last-child').append($inputCheckbox);
		$('#incomplete-tasks li:last-child').append($label);
		$('#incomplete-tasks li:last-child').append($inputText);
		$('#incomplete-tasks li:last-child').append($buttonEdit);
		$('#incomplete-tasks li:last-child').append($buttonDelete);

		$(this).prev().val('');
		$('span').hide();
	} else {
		$('span').show();
	}
});


// When checkbox is checked, add item to the completed-tasks
// When checkbox is unchecked, add item to the incomplete tasks
$(document).on("click" , "input[type=checkbox]", function(){
	var $input = $(this);
	var $listItem = $(this).parent();
	if($input.prop("checked")){
		$($listItem).appendTo('#completed-tasks');
	} else {
		$($listItem).appendTo('#incomplete-tasks');
	}
});


// When edit is clicked, toggle "editMode" on the <li>
$(document).on('click' , ".edit" , function(){
	var $listItem = $(this).parent();
	var $button = $(this);
	var $input = $(this).prev();
	var $label = $(this).prev().prev();
	
	if($listItem.hasClass("editMode")){
		$listItem.removeClass("editMode");
		$button.text("Edit");
		if($input.val() == ""){
			$label.text($label.text());
		} else{
			$label.text($input.val());
		}
	} else {
		$listItem.addClass("editMode");
		$button.text("Save");
	}
});

// When delete is clicked, remove <li> from the app
$(document).on("click" , ".delete" , function(){
	$(this).parent().remove();
});




// When the add button is clicked, append an item to the incomplete-tasks
// $('.addTask').hover(
// 	function(){
// 	    var $input = $(this).prev().val();
// 	    if($input != ""){
// 			$('span').hide();
// 		} else {
// 			$('span').show();
// 	}}, function(){
// 		$('span').delay(800).slideUp(300);
// 		}
// );













