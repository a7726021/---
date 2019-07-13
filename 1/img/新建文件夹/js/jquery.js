(function() {

    //老师。新年快乐！

    function Google() {
        this.init()
    }
    Google.prototype = {
        prototype: Google,

        //初始化
        init: function() {
            this.Tab();
            this.app_tab();
            this.app();
            this.find_cha()
        },

        //侧边栏Tab切换
        Tab: function() {

            //实现侧边栏里的tab切换效果
            $("#tab").on("click", "li", function() {

                //当点击li的时候 相对应下标页面显示  其他页面隐藏
                $("#tab1 div").eq($(this).index()).show().siblings().hide()

                //当点击li的时候 相对应下标高亮
                $(this).css("active").siblings().removeClass("active")
            })

            //侧边栏隐藏方法 点击侧边栏实现侧边栏的收起
            $("#guan").click(function() {
                $("#left").animate({
                    right: "-300px"
                }, 1000, () => {
                    $("#jia").css("display", "block")
                })
            })

            //侧边栏显示方法 实现点击左上角的+号实现侧边栏的展开
            $("#jia").click(function() {
                $("#left").animate({
                    right: "0"
                }, 1000, () => {
                    $("#jia").css("display", "none")
                })
            })

            //点击侧边栏里的icon可以添加到轮播图中
            $(".bpp").click(function() {
                $(".lunbo:nth-of-type(4)").show().siblings().hide()
                $(".lunbo:nth-of-type(4)").append($(this).clone())
            })
        },

        // 因背景透明 故让其他页面隐藏
        app: function() {
            $(".lunbo:first-child").show().siblings().hide()
        },

        //实现下方的icon轮播效果
        app_tab: function() {
            $("#dian").on("click", "li", function() {
                $(this).addClass("gaoliang").siblings().removeClass("gaoliang");
                $(".lunbo").eq($(this).index()).show().siblings().hide()
            })
        },

        //轮播图中的icon可以出现x，
        find_cha: function() {
            $(".app").click(function() {
                $(this).css("position", "relative");
                $(this).find("span").show().css("display", "block");
                // $(this).find(".cha").parent().remove()
            })
            this.app_remove_true()
        },
        //点击x号删除对应的icon
        app_remove_true: function() {
            $(".cha").click(function() {
                $(this).parent().remove()
            })
        }

    }
    window.google = function() {
        new Google()
    }
})()