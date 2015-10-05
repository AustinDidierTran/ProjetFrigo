console.log("Frigo.js");

$("paper-tab").on("click", function(event){
    console.log("paper tab has been clicked", event.target.attributes);
})

document.addEventListener('WebComponentsReady', function () {
    var selected = document.querySelector('template[is="dom-bind"]');
    selected.selected = 0;
    
});