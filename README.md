# nodebb-plugin-facebook
NodeBB Facebook Posts Plugin

My first plugin for NodeBB. Adds simplicity to publishing Facebook content.

Step 1:
Paste this in your NodeBB theme's header template directly after the ``<body>`` property. 
You can simply edit /node_modules/nodebb-theme-lavender/templates/header.tpl (vanilla theme would also work)

For example put this code underneath the ``<body>`` this should look like:
```
<body>
<div id="fb-root"></div>
	<script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0"; fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));</script>
```

Step 2:
Paste this to your 'CUSTOM HEADER' section under Custom HTML & CSS in your Admin ACP under 'Appearance':
```
<script>
    var facebookPosts = document.getElementById('#fb-post');
    facebookPosts.innerHTML = '<div class="fb-post" data-href="https://www.facebook.com/$1/posts/$2" data-width="500"></div>';
</script>
```
Remember to tick Use Custom Header? check box then click Save. Reboot NodeBB

Step 3:
Making Facebook posts embed (note will not work with photo posts, will add this later)

![alt tag](https://github.com/highkick05/nodebb-plugin-facebook/blob/master/facebook-plugin.jpg)

Right click and 'Copy Link Addess' and paste into post and you're done. Recheck the steps if it does not work.


