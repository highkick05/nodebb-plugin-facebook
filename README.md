# nodebb-plugin-facebook
NodeBB Facebook Posts Plugin

My first plugin for NodeBB. Adds simplicity to publishing Facebook content.

Step 1:
After installing plugin. Paste this in your NodeBB theme's header template directly after the ``<body>`` property. 
You can simply edit /node_modules/nodebb-theme-lavender/templates/header.tpl (needs to be the theme you are using)

For example put this code underneath the ``<body>`` this should look like:
```
<body>
<div id="fb-root"></div>
	<script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0"; fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));</script>
```
Save file. Reload/Restart NodeBB.

Step 2:
Paste this to your 'CUSTOM HEADER' section under Custom HTML & CSS in your Admin ACP under 'Appearance':
```
<script>
$(document).on('ready', function(){
    FB.XFBML.parse(document.getElementById('#fb-post'));
});
$(window).on('action:ajaxify.end', function(){
    FB.XFBML.parse(document.getElementById('#fb-post'));
});
$(window).on('action:posts.loaded', function(){
    FB.XFBML.parse(document.getElementById('#fb-post'));
});
</script>
```
Remember to tick Use Custom Header? check box then click Save. 

Step 3:
Making Facebook posts embed (note will not work with photo posts, will add this later)

![alt tag](https://github.com/highkick05/nodebb-plugin-facebook/blob/master/facebook-plugin.jpg)

Right click on Facebook post time and 'Copy Link Addess' and paste in post and you're done. Recheck the steps if it does not work.

*TODO: OK there is a small bug in masonry and widgets in 0.6.* but it appears to work on 0.7.0 branch*


