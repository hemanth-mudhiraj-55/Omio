document.addEventListener('DOMContentLoaded', function() {
    var myBtn = document.getElementById('myBtn');
    if (myBtn) {
        myBtn.addEventListener('click', function doThings() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0
        })
    }
    var share_copy_link = document.getElementById('share_copy_link');
    if (share_copy_link) {
        share_copy_link.addEventListener('click', function doThings() {
            var $temp = $("<input>");
            var $url = $(location).attr('href');
            $("body").append($temp);
            $temp.val($url).select();
            document.execCommand("copy");
            $temp.remove();
            $("#share_copy_link p").show();
            setTimeout(function() {
                $("#share_copy_link p").hide()
            }, 2000)
        })
    }
    var mshare_copy_link = document.getElementById('mshare_copy_link');
    if (mshare_copy_link) {
        mshare_copy_link.addEventListener('click', function doThings() {
            var $temp = $("<input>");
            var $url = $(location).attr('href');
            $("body").append($temp);
            $temp.val($url).select();
            document.execCommand("copy");
            $temp.remove();
            $("#mshare_copy_link p").show();
            setTimeout(function() {
                $("#mshare_copy_link p").hide()
            }, 2000)
        })
    }
    var share_email = document.getElementById('share_email');
    if (share_email) {
        share_email.addEventListener('click', function doThings() {
            var title = document.getElementsByTagName("title")[0].innerHTML;
            window.open('mailto:?subject=' + decodeURIComponent(title).replace('&', '%26') + '&body=' + decodeURIComponent(window.location.href), '_blank')
        })
    }
    var mshare_email = document.getElementById('mshare_email');
    if (mshare_email) {
        mshare_email.addEventListener('click', function doThings() {
            var title = document.getElementsByTagName("title")[0].innerHTML;
            window.open('mailto:?subject=' + decodeURIComponent(title).replace('&', '%26') + '&body=' + decodeURIComponent(window.location.href), '_blank')
        })
    }
    var share_linkdin = document.getElementById('share_linkdin');
    if (share_linkdin) {
        share_linkdin.addEventListener('click', function doThings() {
            var title = document.getElementsByTagName("title")[0].innerHTML;
            var url = window.location.href;
            heateorSssPopup('http://www.linkedin.com/shareArticle?mini=true&url=' + decodeURIComponent(window.location.href) + "+&title=" + document.getElementsByTagName("title")[0].innerHTML)
        })
    }
    var mshare_linkdin = document.getElementById('mshare_linkdin');
    if (mshare_linkdin) {
        mshare_linkdin.addEventListener('click', function doThings() {
            var title = document.getElementsByTagName("title")[0].innerHTML;
            var url = window.location.href;
            heateorSssPopup('http://www.linkedin.com/shareArticle?mini=true&url=' + decodeURIComponent(window.location.href) + "+&title=" + document.getElementsByTagName("title")[0].innerHTML)
        })
    }
    var share_twitter = document.getElementById('share_twitter');
    if (share_twitter) {
        share_twitter.addEventListener('click', function doThings() {
            var title = document.getElementsByTagName("title")[0].innerHTML;
            var maintitle = title.split("|");
            heateorSssPopup('http://twitter.com/intent/tweet?text=' + maintitle[0] + '&url=' + decodeURIComponent(window.location.href))
        })
    }
    var mshare_twitter = document.getElementById('mshare_twitter');
    if (mshare_twitter) {
        mshare_twitter.addEventListener('click', function doThings() {
            var title = document.getElementsByTagName("title")[0].innerHTML;
            var maintitle = title.split("|");
            heateorSssPopup('http://twitter.com/intent/tweet?text=' + maintitle[0] + '&url=' + decodeURIComponent(window.location.href))
        })
    }
    var share_facebook = document.getElementById('share_facebook');
    if (share_facebook) {
        share_facebook.addEventListener('click', function doThings() {
            heateorSssPopup('https://www.facebook.com/sharer/sharer.php?u=' + decodeURIComponent(window.location.href))
        })
    }
    var mshare_facebook = document.getElementById('mshare_facebook');
    if (mshare_facebook) {
        mshare_facebook.addEventListener('click', function doThings() {
            heateorSssPopup('https://www.facebook.com/sharer/sharer.php?u=' + decodeURIComponent(window.location.href))
        })
    }
    var buttons = document.getElementsByClassName('tablinks');
    if (buttons) {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function() {
                console.log('tab_click');
                var cityName = $(this).data('click');
                var i, tabcontent, tablinks;
                tabcontent = document.getElementsByClassName("tabcontent");
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none"
                }
                tablinks = document.getElementsByClassName("tablinks");
                for (i = 0; i < tablinks.length; i++) {
                    tablinks[i].className = tablinks[i].className.replace(" active", "")
                }
                document.getElementById(cityName).style.display = "block";
                $(this).addClass("active");
                $('#' + cityName).addClass("active")
            })
        }
    }
    var tablink = document.getElementsByClassName('tablink');
    if (tablink) {
        for (var i = 0; i < tablink.length; i++) {
            tablink[i].addEventListener('click', function() {
                console.log('according');
                var cityName = $(this).data('click');
                $(this).addClass('active').siblings().removeClass('active');
                $('#' + cityName).addClass('active').siblings().removeClass('active')
            })
        }
    }
    var buttonsq = document.getElementsByClassName('cookie_clear');
    if (buttonsq) {
        for (var i = 0; i < buttonsq.length; i++) {
            buttonsq[i].addEventListener('click', function() {
                console.log('cookie');
                Cookiebot.renew()
            })
        }
    }
    var cats_insight = document.getElementsByClassName('filterBox');
    if (cats_insight) {
        for (var i = 0; i < cats_insight.length; i++) {
            cats_insight[i].addEventListener('click', function() {
                console.log('cat_click');
                console.log(cats_insight);
                document.getElementById("categoryMobile").innerHTML = '';
                document.getElementById("industryMobile").innerHTML = '';
                let catArray = [],
                    indArray = [];
                $('input[name="selectedCatMobile[]"]:checked').each(function() {
                    catArray.push($(this).val())
                });
                $('input[name="selectedIndusMobile[]"]:checked').each(function() {
                    indArray.push($(this).val())
                });
                for (var i = 0; i <= catArray.length; i++) {
                    if (catArray.length > 0) {
                        var nod = document.createElement("Div");
                        var imgindnod = document.createElement("Img");
                        imgindnod.setAttribute("src", "/wp-content/themes/GLTheme/images/remove_white.png");
                        imgindnod.setAttribute("class", "removeTag");
                        if (typeof(catArray[i]) != "undefined") {
                            nod.setAttribute("class", catArray[i].replace(/ +/g, ""));
                            var textnod = document.createTextNode(catArray[i]);
                            nod.appendChild(textnod);
                            nod.appendChild(imgindnod);
                            document.getElementById("categorynumber").innerHTML = catArray.length;
                            document.getElementById("categoryMobile").appendChild(nod)
                        }
                    }
                }
                for (var i = 0; i <= indArray.length; i++) {
                    if (indArray.length > 0) {
                        let nod = document.createElement("Div");
                        let imgindnod = document.createElement("Img");
                        imgindnod.setAttribute("src", "/wp-content/themes/GLTheme/images/remove_white.png");
                        imgindnod.setAttribute("class", "removeTag");
                        if (typeof(indArray[i]) != "undefined") {
                            nod.setAttribute("class", indArray[i].replace(/ +/g, ""));
                            var textnod = document.createTextNode(indArray[i]);
                            nod.appendChild(textnod);
                            nod.appendChild(imgindnod);
                            document.getElementById("industrynumber").innerHTML = indArray.length;
                            document.getElementById("industryMobile").appendChild(nod)
                        }
                    }
                }
            })
        }
    }
    var buttons = document.getElementsByClassName('tablinka');
    if (buttons) {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function() {
                console.log('insighttab_click');
                var cityName = $(this).data('click');
                console.log(cityName);
                var i, tabcontent, tablinks;
                tabcontent = document.getElementsByClassName("tabcontents");
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none"
                }
                tablinks = document.getElementsByClassName("tablinks");
                for (i = 0; i < tablinks.length; i++) {}
                document.getElementById(cityName).style.display = "block"
            })
        }
    }
});
if (typeof heateorSssPopup != 'function') {
    function heateorSssPopup(e) {
        window.open(e, "popUpWindow", "height=400,width=600,left=400,top=100,resizable,scrollbars,toolbar=0,personalbar=0,menubar=no,location=no,directories=no,status")
    }
}
jQuery(document).on('click', '.removeTag', function(e) {
    console.log('removeTag');
    var classname = jQuery(this).parent().attr('class');
    jQuery('.' + classname).remove();
    jQuery('#' + classname).prop("checked", !1);
    catcount = jQuery('#categoryMobile div').length;
    document.getElementById("categorynumber").innerHTML = catcount;
    inscount = jQuery('#industryMobile div').length;
    document.getElementById("industrynumber").innerHTML = inscount
})