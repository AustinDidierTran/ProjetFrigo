document.addEventListener('WebComponentsReady', function () {
    document.querySelector('template[is="dom-bind"]').selected = 0;

    if(gapi && gapi.auth2 && gapi.auth2.getAuthInstance().currentUser.get()){
        
        var user = gapi.auth2.getAuthInstance().currentUser.get();
        console.log(user);
        
        $("#bienvenuePage").css('display','none');
        $("#homePage").css('display','block');
    }else{
        console.log("no user signed in");
        $("#bienvenuePage").css('display','block');
        $("#homePage").css('display','none');
    }
});


$('google-signin').bind('google-signin-aware-success', function(){
    $("#bienvenuePage").css('display','none');
    $("#homePage").css('display','block');
})

$('google-signin').bind('google-signed-out', function(){
    $("#bienvenuePage").css('display','block');
    $("#homePage").css('display','none');
})
