jQuery( document ).ready( function( $ ) {
	
  // Let's assume the trigger is a link in div with ID #new-popup-trigger
  $( "#new-popup-trigger a" ).click(function() {
    // Replace XXX1 with the post id of the current popup
    $( "#elementor-popup-modal-XXX1 .dialog-close-button" ).click();
    // Replace XXX2 with the post id of the new popup
    elementorProFrontend.modules.popup.showPopup( { id: XXX2 } );
  });
  
} );
