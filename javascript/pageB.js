function pageB(element,pageComplete){
	var $carousel = element.find("#carousel");
	var carousel = new Carousel($carousel,{
		imgUrls:[
			"http://img.mukewang.com/5662e29a0001905a14410901.png",
		    "http://img.mukewang.com/5662e2960001f16314410901.png",
		    "http://img.mukewang.com/5662e26f00010dea14410901.png"
		]
	});
	var i = 0;
	$("button").on("click",function(){
		carousel.run(i++,function(){
			carousel.playViseo()
		})
		// $("#carousel").show();
		
	})
	//女孩
	var $girl = element.find(".girl");
	var animationEnd = "animationend webkitAnimationEnd"
	var girlAction = {
		//起立
		standUp:function(){
			var dfd = $.Deferred();
			setTimeout(function(){
				$girl.addClass("girl-standUp");
			},200)
			//抛书
			setTimeout(function(){
				$girl.addClass("girl-throwBook");
				dfd.resolve()
			},500)
			return dfd;
		},
		//走路
		walk:function(callback){
			var dfd = $.Deferred();
			//小女孩走路
			$girl.addClass("girl-walk");
			$girl.transition({
			        "left": "4.5rem"
			},4000,"linear", function() {
			        dfd.resolve()
			 })
			 return dfd;
			},
			stopWalk:function(){
				$girl.addClass("walk-stop")
				.removeClass("girl-standUp")
				.removeClass("girl-walk")
				.removeClass("girl-throwBook")
				.addClass("girl-stand")
			},
			//选择
			choose:function(callback){
				$girl.addClass("girl-choose")
				.removeClass("walk-stop");

				$girl.one(animationEnd,function(){
					callback();
				})
				
			},
			//泪奔
			weepWalk:function(callback){
				$girl.addClass("girl-weep");
				$girl.transition({
					"left":"7rem"
				},1000,"linear",function(){
					$girl.addClass("walk-stop").removeClass("girl-weep")
					callback();
				})
			},
			//拥抱		
			hug:function(){
				$girl.addClass("girl-hug").addClass("walk-run")
			}
	}
	girlAction
		.standUp()
		.then(function(){
			return girlAction.walk();
		})
		.then(function(){
			return girlAction.stopWalk();

		})
		// .then(function(){
		// 	var i = 0;
		// 	$("button").on("click",function(){
		// 		carousel.run(i++)
		// 	})
		// })
		.then(function(){
		    //选择
		    return girlAction.choose(function() {
		        //继续走路
		        return girlAction.weepWalk(function() {
		            //拥抱
		           return  girlAction.hug();
		        })
		    })

		})
	//男孩
	var $boy = element.find(".christmas-boy");
	var animationEnd = "animationend webkitAnimationEnd"
	var boyAction = {
		walk:function(){
			var dfd = $.Deferred();
            $boy.addClass("boy-walk");
            $boy.transition({
                "right":"4.5rem"
            },4000,"linear",function(){
                dfd.resolve()
            });
            return dfd;
		},
		stopWalk:function(){
			$boy.removeClass("boy-walk");
			$boy.addClass("boy-stand");
		},
		runWalk:function(){
			$boy.addClass(walk-run);
		},
		unwrap:function(){
			var dfd = $.Deferred();
			$boy.addClass("boy-unwrap");
			$boy.removeClass("boy-stand");
			$boy.one(animationEnd,function(){
				dfd.resolve();
			})
			return dfd;
		},
		strip:function(count){
			$boy.addClass("boy-strip-"+count).removeClass("boy-unwrap");
		},
		hug:function(){
			$boy.addClass("boy-hug").one(animationEnd,function(){
				$(".christmas-boy-head").show()
			})
		}
	}
	boyAction.walk()
		.then(function(){
			boyAction.stopWalk();
		})
		.then(function(){
			return boyAction.unwrap();
		})
		.then(function(){
			setTimeout(function(){
				boyAction.strip(1)
			},1000)
			setTimeout(function(){
				boyAction.strip(2)
			},2000)
			setTimeout(function(){
				boyAction.strip(3)
			},3000)
			setTimeout(function(){
				boyAction.hug();
			},4000)
		})
}
