var showBienvenue = function(){
    $("#bienvenuePage").css('display','block');
    $("#homePage").css('display','none');
}

var showHome = function(){
    $("#bienvenuePage").css('display','none');
    $("#homePage").css('display','block');
}

document.addEventListener('WebComponentsReady', function () {
    var template = document.querySelector('template[is="dom-bind"]');
    
    template.selected = 0;
    
    template.status = 'Not granted';
    template.offlineCode = 'No offline login.';
    template.userName = 'N/A';
    template.handleSignIn = function(response) {
        showHome();
        console.log("signed in");
        this.status = 'Signin granted';
        // console.log('[Aware] Signin Response', response);
        this.userName = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getName();
    };
    template.handleOffline = function(response) {
        console.log("Handle offline");
      this.offlineCode = response.detail.code;
    };
    template.handleSignOut = function(response) {
        showBienvenue();
        console.log("Handle sign out");
      this.status = 'Signed out';
      // console.log('[Aware] Signout Response', response);
      this.userName = 'N/A';
    };
    template.disconnect = function() {
        showBienvenue();
        console.log("Disconnect");
      var b = document.querySelector('google-signin');
      var currentUser = gapi.auth2.getAuthInstance().currentUser.get();
      if (currentUser) {
        currentUser.disconnect();
      }
      gapi.auth2.getAuthInstance().signOut();
    };
    
    if(gapi && gapi.auth2 && gapi.auth2.getAuthInstance().currentUser.get()){
        
        var user = gapi.auth2.getAuthInstance().currentUser.get();
        console.log(user);
        
        showHome();
    }else{
        showBienvenue();
    }
    
});

showBienvenue();

/*
$('google-signin').bind('google-signin-aware-success', function(){
    $("#bienvenuePage").css('display','none');
    $("#homePage").css('display','block');
})

$('google-signin').bind('google-signed-out', function(){
    $("#bienvenuePage").css('display','block');
    $("#homePage").css('display','none');
})
*/