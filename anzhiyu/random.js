var posts=["2023/06/19/07-eventloop/","2023/06/28/08-movie/","2023/07/11/10-websocket/","2023/07/01/09-passValue/","2023/07/18/11-swiper/","2023/08/01/12-leju/","2023/08/16/14-uni-admin/","2023/10/16/15-lowcode1/","2023/10/16/16-lowcode2/","2023/10/24/17-colFixed/","2023/10/25/18-print/","2023/11/07/19-product/","2023/11/15/20-leecode1/","2023/06/03/article02/","2023/05/15/article01/","2023/12/05/21-components/","2023/06/05/article03-1/","2023/06/05/article03/","2023/06/09/article04/","2023/06/13/article05/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};