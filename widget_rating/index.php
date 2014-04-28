<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>rating star</title>
        <style>
            .stars i {
                display: inline-block;
                width: 28px;
                height: 28px;
                background: url(http://s12.mogujie.cn/pic/130902/3x51_kqywun2kkfbhgwsugfjeg5sckzsew_28x28.png) no-repeat;
                cursor: pointer;
            }
            .stars .selected,
            .stars .active {
                background: url(http://s6.mogujie.cn/pic/130902/3x51_kqyukmckkfbhgv2ugfjeg5sckzsew_28x28.png) no-repeat;
            }
        </style>
    </head>
    <body>
        <p class="stars">
            <i data-rating-value="1" data-rating-txt="1" class="selected"></i>
            <i data-rating-value="2" data-rating-txt="2" class="cur selected"></i>
            <i data-rating-value="3" data-rating-txt="3"></i>
            <i data-rating-value="4" data-rating-txt="4"></i>
            <i data-rating-value="5" data-rating-txt="5"></i>
            <span class="score"></span>
        </p>

        <p class="stars">
            <i data-rating-value="1" data-rating-txt="1" class="cur selected"></i>
            <i data-rating-value="2" data-rating-txt="2"></i>
            <i data-rating-value="3" data-rating-txt="3"></i>
            <i data-rating-value="4" data-rating-txt="4"></i>
            <i data-rating-value="5" data-rating-txt="5"></i>
            <span class="score"></span>
        </p>


        <script type="text/javascript" charset="utf-8" src="http://ajax.microsoft.com/ajax/jquery/jquery-1.7.2.min.js"></script>
        <script>
            $(document).ready(function(){
                $('.stars').rating();
            });
        </script>
    </body>
</html>
