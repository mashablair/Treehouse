// this is a native feature but it's not yet supported well by browsers (only latest Chrome at the moment). Polyfill is available already.  The advantage of using this native <dialog> element is much better accessibility: if set up as modal, it will make everything else inaccessible until user submits input.  So no need for library or framework to create functionality -- we can use .show() or .showModal() native methods

(function() {
   
  var openDialog = document.getElementById('openDialog');
  var openModalDialog = document.getElementById('openModalDialog');
  var dialogWindow = document.getElementById('dialogWindow');
  
  openDialog.addEventListener('click', function() {
    dialogWindow.show();
  });
  
  openModalDialog.addEventListener('click', function() {
    dialogWindow.showModal();
  });
  
  
})();
