# nodebb-plugin-facebook
NodeBB Facebook Posts Plugin

My first plugin for NodeBB. Embed's Facebook posts. I like simplicity in forums, this makes it easier to publish content.

Paste this to your 'CUSTOM HEADER' section under Custom HTML & CSS in your Admin ACP under 'Appearance'.

<script>
    var facebookPosts = document.getElementById('#fb-post');
    facebookPosts.innerHTML = '<div class="fb-post" data-href="https://www.facebook.com/$1/posts/$2" data-width="500"></div>';
</script>

Remember to tick Use Custom Header? checkbox then click Save.

This will allow Facebook posts to dynamically update inside posts while browsing threads in NodeBB.


Regards to the NodeBB Developers. What a beautiful forum being developed :-)
