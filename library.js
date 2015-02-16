(function(module) {
    "use strict";

    var FacebookEmbed = {},
        embed = '<script><!-- FB.XFBML.parse(facebookPosts);//--></script><div class="fb-post" data-href="https://www.facebook.com/$1/posts/$2" data-width="500"></div>';
	var embedcode = /<a href="(?:https?:\/\/)?(?:www\.)?(?:facebook\.com)\/(.+)?(?:\/posts\/)(.+)">.+<\/a>/g;

    FacebookEmbed.parse = function(data, callback) {
        if (!data || !data.postData || !data.postData.content) {
            return callback(null, data);
        }
        if (data.postData.content.match(embedcode)) {
            data.postData.content = data.postData.content.replace(embedcode, embed);
        }
        callback(null, data);

    };

    module.exports = FacebookEmbed;
}(module));
