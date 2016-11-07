// function changePage(element,effect,callback){
// 	element
// 	.addClass(effect)
// 	.one("animationend webkitAnimationEnd",function(){
// 		callback && callback();
// 	})
// }
// var Christmas = function(){
// 	var $pageA = $(".page-a");
// 	var $pageB = $(".page-b");
// 	var $pageC = $(".page-c");
// 	var observer = new Observer();
// 	new pageA(function(){
// 		observer.publish("completeA");
// 	})
// 	observer.subscribe("pageB",function(){
// 		new pageB(function(){
// 			observer.publish("completeB");
// 		})
// 	})
// 	observer.subscribe("pageC",function(){
// 		new pageC()
// 	})
// 	observer.subscribe("completeA",function(){
// 		changePage($pageA,"effect-out",function(){
// 			observer.publish("pageB");
// 		})
// 	})
// 	observer.subscribe("completeB",function(){
// 		changePage($pageC,"effect-in",function(){
// 			observer.publish("pageC");
// 		})
// 	})
// };
// function HTML5Audio(url,loop){
// 	var audio = new Audio(url);
// 	audio.autoplay = true;
// 	audio.loop = loop||false;
// 	audio.play();
// 	return{
// 		end:function(callback){
// 			audio.addEventListener('ended',function(){
// 				callback()
// 			},false);
// 		}
// 	}
// }
// $(function(){
// 	$("#music-end").click(function(){
// 		var audio1=HTML5Audio("music/scene.mp3")
// 		audio1.end(function(){
// 			alert("音乐结束")
// 		})
// 	})
// 	$("#music-play").click(function(){
// 		HTML5Audio("music/circulation.mp3",true)
// 	})
// 	$("button").click(function(){
// 		Christmas()
// 	})
// })

//         var $pageB = $(".page-b");
    
//     //构建第一个场景页面对象
//     new pageB($pageB);
//         var $pageC = $(".page-c");
    
//     //构建第一个场景页面对象
    // new pageC($pageC);
//     function pageA(callback){
// 	setTimeout(function(){
// 		callback()
// 	},2000)
// 	function pageB(callback){
// 		setTimeout(function(){
// 			callback()
// 		},1000)
// 		function pageC(callback){
// 			setTimeout(function(){
// 				callback()
// 			},500)
// 		}
// 	}
// };
//  var Christmas = function() {
//     //页面容器元素
//     var $pageA = $(".page-a");
    
//     //构建第一个场景页面对象
//     new pageA($pageA);
// };

// var Christmas = function() {
//     //页面容器元素
//     var $pageB = $(".page-b");
    
//     //构建第一个场景页面对象
//     new pageB($pageB);
// };  
// var Christmas = function() {
//     //页面容器元素
//     var $pageC = $(".page-c");
    
//     //构建第一个场景页面对象
//     new pageC($pageC);
// }; 


// $(function() {
//     $("button").click(function(){
//         //圣诞主题效果，开始
//         Christmas()


//     })

// })
/**
 * 慕课网特制
 * 圣诞主题效果
 * @type {Object}
 */

/**
 * 切换页面
 * 模拟镜头效果
 * @return {[type]} [description]
 */
function changePage(element, effect, callback) {
    element
        .addClass(effect)
        .one("animationend webkitAnimationEnd", function() {
            callback && callback();
        })
}


/**
 * 中间调用
 */
var Christmas = function() {
    //页面容器元素
    var $pageA = $(".page-a");
    var $pageB = $(".page-b");
    var $pageC = $(".page-c");

    //观察者
    var observer = new Observer();

    //A场景页面
    new pageA(function() {
        observer.publish("completeA");
    })
    //进入B场景
    observer.subscribe("pageB", function() {
        new pageB(function() {
            observer.publish("completeB");
        })
    })
    //进入C场景
    observer.subscribe("pageC", function() {
        new pageC()
    })


    //页面A-B场景切换
    observer.subscribe("completeA", function() {
        changePage($pageA, "effect-out", function() {
            observer.publish("pageB");
        })
    })
    //页面B-C场景切换
    
        observer.subscribe("completeB", function() {
        changePage($pageC, "effect-in", function() {
            observer.publish("pageC");
        })
    })

};




$(function() {
    $("button").click(function(){
        //圣诞主题效果，开始
        Christmas()
    })
})