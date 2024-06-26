var posts=["2024/06/25/Linux启程/","2024/06/25/hello-world/","2024/06/26/hexo项目常用指令/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };