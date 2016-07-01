// Searchbar Handler

$(function(){
    var searchField = $('#query');
    var icon = $('#search-btn');

    // Focus Event Handler
    $(searchField).on('focus', function(){
      $(this).animate({
        width:'100%'
      },400);
      $(icon).animate({
        right:'10px'
      },400);

    });

    //Blur Event Handler
    $(searchField).on('blur', function(){
      if(searchField.val() == ""){
        $(searchField).animate({
          width:'45%'
        },400, function(){});
        $(icon).animate({
          right:'360px'
        },400, function(){});
      }

    });


})

    function search(){
    // Clear results
      $('#results').html("");
      $('#buttons').html("");

    // Get Form Input
    q = $('#query').val();

    // Run GET Request on API
    $.get(
      "https://www.googleapis.com/youtube/v3/search", {
        part: 'snippet, id',
        q: q,
        type: 'video',
        key: 'AIzaSyAl2U88OLb7wsm3qKj4bBPjEb0KlgKdP_M'},

        function(data){
          var nextPageToken = data.nextPageToke;
          var prevPageToken = data.prevPageToke;

          console.log(data);

          // $.each(data.items){
          //
          // }
        }
    );
    }
