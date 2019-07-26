<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>首页</title>
<link rel="stylesheet" type="text/css" href="css/index.css">
<script type="text/javascript" src="js/jquery-1.12.4.js"></script>
<script type="text/javascript" src="js/index.js"></script>
</head>
<body>
	<div class="header">
    	<div class="header-bar">
			<span class="welcome"><span>游客</span>您好，欢迎来到在线书城</span>
			<span class="welcome-login">
				<span>请&nbsp;</span>
				<div class="logreg">
					<a href="#">登录</a> |
					<a href="#">注册</a>
				</div>
			</span>
			<div class="shopping-car">
				<div class="shoppint-car-icon"></div>
				<a href="#">购物车</a>&nbsp;&nbsp;&nbsp;
			</div>
			<a href="#">我的书城</a>
		</div>
    </div>
    <div class="findbar">
    	<div class="findbox">
            <form>
            	<input type="text" placeholder="请输入图书名称或者作者" />
           		<button type="submit">搜 索</button>
            </form>
        </div>
    </div>
    <div class="content">
    	<div class="content-top">
        	<a href="#"><img class="images" src="images/body-top.jpg"/></a>
        </div>
        <div class="content-body">
        	<div class="bleft">
        		<div class="top-name">
                	图书分类
                </div>
                <div class="items">
                	<div class="item">
                		<div class="item-name">
                			特色分类
                		</div>
                		<div class=""></div>
                	</div>
                	<div class="item item-cul" id="item-cul">
                		<div class="item-name">
                			文学艺术
                		</div>
                		<div class="item-con">
	                		<a class="c-a" href="#">文学</a>
	                		<a class="c-a" href="#">传记</a>
	                		<a class="c-a" href="#">艺术</a>
	                		<a class="last-a" href="#">摄影</a>
	                	</div>
	                	<div class="item-body" id="item-body">
	                		<div class="ibo ib">
	                			<div class="ib-a"><a href="#">文学</a></div>
	                			<div></div>
	                		</div>
	                		<div class="ibt ib">
	                			<div class="ib-a"><a href="#">传记</a></div>
	                			<div></div>
	                		</div>
	                		<div class="ibth ib">
	                			<div class="ib-a"><a href="#">艺术</a></div>
	                			<div></div>
	                		</div>
	                		<div class="ibf ib">
	                			<div class="ib-a"><a href="#">摄影</a></div>
	                			<div></div>
	                		</div>
	                	</div>
                	</div>
                	<div class="item">
                		<div class="item-name">
                			小说
                		</div>
                	</div>
                	<div class="item">
                		<div class="item-name">
                			童书
                		</div>
                	</div>
                	<div class="item">
                		<div class="item-name">
                			人文社科
                		</div>
                	</div>
                	<div class="item">
                		<div class="item-name">
                			科技
                		</div>
                	</div>
                	<div class="item">
                		<div class="item-name">
                			教育
                		</div>
                	</div>
                </div>
                    
            </div>
            <div class="bcenter">
            	<div class="bc-top">
        			<a href="#"><img id ="bc-top-images" class="bc-top-images" src="images/index-1.jpg"/></a>
        			<div class="top-bar" id="top-bar">
        				<span class="hover"></span>
        				<span></span>
        				<span></span>
        			</div>
        		</div>
        		<div class="bbody">
        			<div class="bnbook"><span>新</span></div>
        			<div class="bnline"><span>书上架</span></div>
        			<div class="newBook">
        				<div class="newBook-one">
        					<a href="#"><img class="newBook-pic" src="images/book1.jpg"></a>
        					<a href="#" class="aname">新定位</a>
        					<div class="price">&nbsp;&nbsp;原价&nbsp;&nbsp;<span>￥59</span></div>
        					<div class="vipprice">&nbsp;VIP价&nbsp;<span>￥41.12</span></div>
        				</div>
        				<div class="newBook-one">
        					<a href="#"><img class="newBook-pic" src="images/book2.jpg"></a>
        					<a href="#" class="aname">新定位</a>
        					<div class="price">&nbsp;&nbsp;原价&nbsp;&nbsp;<span>￥59</span></div>
        					<div class="vipprice">&nbsp;VIP价&nbsp;<span>￥41.12</span></div>
        				</div>
        				<div class="newBook-one">
        					<a href="#"><img class="newBook-pic" src="images/book3.jpg"></a>
        					<a href="#" class="aname">新定位</a>
        					<div class="price">&nbsp;&nbsp;原价&nbsp;&nbsp;<span>￥59</span></div>
        					<div class="vipprice">&nbsp;VIP价&nbsp;<span>￥41.12</span></div>
        				</div>
        				<div class="newBook-one">
        					<a href="#"><img class="newBook-pic" src="images/book4.jpg"></a>
        					<a href="#" class="aname">新定位</a>
        					<div class="price">&nbsp;&nbsp;原价&nbsp;&nbsp;<span>￥59</span></div>
        					<div class="vipprice">&nbsp;VIP价&nbsp;<span>￥41.12</span></div>
        				</div>
        			</div>
        		</div>
            </div>
            
        </div>
        <div class="content-foot">
        	<div class="cfl">
        		<div class="cfl-top">
	        		<div class="cflbook"><span>独</span></div>
	        		<div class="cflline"><span>家特供</span></div>
	        		<div class="cfl_items">
	        			<a href="#"><div class="cfl_item" id="cfl_item1">主打</div></a>
	        			<a href="#"><div class="cfl_item" id="cfl_item2">文艺</div></a>
	        			<a href="#"><div class="cfl_item" id="cfl_item3">小说</div></a>
	        			<a href="#"><div class="cfl_item" id="cfl_item4">青春励志</div></a>
	        			<a href="#"><div class="cfl_item" id="cfl_item5">生活</div></a>
	        			<a href="#"><div class="cfl_item" id="cfl_item6">社科</div></a>
	        			<a href="#"><div class="cfl_item" id="cfl_item7">教育</div></a>
	        			<div class="cflline2"></div>
	        		</div>
        		</div>
        	</div>
	        <div class="cfr">
	        	
	        </div>
        </div>
    </div>
    
    <div class="footer">
   		<div class="foot-img-show">
    		<div class="img"></div>
   		</div>
   		<div class="foot-bar">
        	<div class="bar-con">南华线上书城&nbsp;&nbsp;&nbsp;2019-2022&nbsp;&nbsp;&nbsp;YC68C @版权所有</div>
    	</div>
    </div>
</body>
</html>