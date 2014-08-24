'use strict';
require.config({
    paths: {
        global: 'modules/global'
    }
});

require(['global'], function (global) {

    global.init();

    // window.showPeopleDetail = function(pHref){
    //     console.log(pHref);
    // };

    $.ajax({
        url: 'json/people.json',
        type: 'get',
        success: function (data) {
            var html = "";
            var template = Handlebars.compile($("#peopleThumbnail").html());
            var count = 0;
            for(var i=0; i<data.length; i++){
                if(count == 0)
                    html += '<div class="about-slide-row">';
                html += template(data[i]);
                count += 1;
                if(count == 6){
                    html += '</div>';
                    count = 0;
                }
            }
            $(".peopleGallery").html(html);
        }
    });

});