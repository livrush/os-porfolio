/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        $('#all-contents').css('border','#f2f2f2 solid 15px').css('border-radius','50px').css('background','#f2f2f2');
        $('main').css('background','none');
        $('nav').css('background','#00D78B').css('border-radius','35px').css('padding','15px 20px 15px 20px');
        $('.content').css('background','#ffe399').css('border-radius','35px').css('padding','15px').css('margin-right','0px');
        $('#section-bio').css('background','#f2f2f2').css('border-radius','20px').css('padding','10px');
        $('#section-quotes').css('background','#00D78B').css('border-radius','20px').css('padding','10px');
        $('#section-quotes h3').css('color','white');
        $('#quotes').css('color','#ffe399');
        $('#billy-image').css('height','200px');
        
        var flipImage = function(image, imageSource) {
            // imageSource should be an array of direct links
            for(var i = 0; i < imageSource.length; i++) {
                if(image.attr('src') === imageSource[imageSource.length - 1]) {
                    return image.attr("src", imageSource[0]);
                }
                else if(image.attr('src') === imageSource[i]) {
                    return image.attr("src", imageSource[i + 1]);
                }
            }
        };
        
        var topRated = data.discography.topRated;
        
        for(var i = 0; i < topRated.length; i++) {
            $("#list-top-rated").append($('<li>').append(topRated[i].title).addClass('topList')
                .addClass(topRated[i].art)
            );
        }
        
        $('#sidebar').append($('<section id="section-recordings"></section>'));
        
        $('#section-recordings').append($('<ul id="list-recordings"></ul>'));
        
        var recordings = data.discography.recordings;
        
        var recordList = _.map(recordings, function(album) {
            // console.log(album.title.slice(6))
            const url = album.art;
            console.log(url)
           let $results = $('<li>').attr('class', 'recording').addClass(url);
           $results.append($('<div>').attr('class', 'title').text("Title: " + album.title));
           $results.append($('<div>').attr('class', 'artist').text("Artist: " + album.artist));
           $results.append($('<div>').attr('class', 'release').text("Release: " + album.release));
           $results.append($('<div>').attr('class', 'year').text("Year: " + album.year));
           return $results;
        });
        
        $('#list-top-rated').prepend($('<img>').attr('src',topRated[0].art).attr("id","topRatedImg").addClass('image').css("margin-bottom","15px"));
        
        $('#list-recordings').append(recordList).css('line-height','20px');
        
        $('#section-recordings').prepend($('<img>').attr('src',recordings[0].art).attr("id","albumImg").addClass('image'));
        
        var $imgArray = data.images.billy;
        
        $('#image-billy').click(function() {
            flipImage($('#image-billy'), $imgArray);
        });
            
        $('.topList').click(function() {
            console.log(this.classList[1])
            $('#topRatedImg').attr('src',this.classList[1])
        });
            
        $('.recording').click(function() {
            console.log(this.classList[1])
            $('#albumImg').attr('src',this.classList[1])
        });
        
        var createTable = function(people){
            var createRow = function(person){
                var $row = $("<tr>");
                var $description = $("<td>").text(person.desc);
                var $type = $("<td>").text(person.type);
                $row.append($description);
                $row.append($type);
                return $row;
            };
            var $table = $("<table>");
            var $rows = people.map(createRow);
            $table.append($rows);
            return $table;
        };
        
        $('<h3>').attr('id','rider').text("Rider").appendTo(".content")
        createTable(data.rider).css("margin","auto").css("margin-top","15px").appendTo(".content");
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


