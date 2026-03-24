(function($, window) {
    var vimeoJqueryAPI = {
        catchMethods: {
            methodreturn: [],
            count: 0
        },
        init: function(d) {
            var vimeoVideo, vimeoAPIurl, data;
            if (!d.originalEvent.origin.match(/vimeo/g)) {
                return
            }
            if (!("data" in d.originalEvent)) {
                return
            }
            data = $.type(d.originalEvent.data) === "string" ? $.parseJSON(d.originalEvent.data) : d.originalEvent.data;
            if (!data) {
                return
            }
            vimeoVideo = this.setPlayerID(data);
            if (vimeoVideo.length) {
                vimeoAPIurl = this.setVimeoAPIurl(vimeoVideo);
                if (data.hasOwnProperty("event"))
                    this.handleEvent(data, vimeoVideo, vimeoAPIurl);
                if (data.hasOwnProperty("method"))
                    this.handleMethod(data, vimeoVideo, vimeoAPIurl)
            }
        },
        setPlayerID: function(d) {
            return $("iframe[src*=" + d.player_id + "]")
        },
        setVimeoAPIurl: function(d) {
            if (d.attr('src').substr(0, 4) !== 'http') {
                return 'https:' + d.attr('src').split('?')[0]
            } else {
                return d.attr('src').split('?')[0]
            }
        },
        handleMethod: function(d, vid, api) {
            this.catchMethods.methodreturn.push(d.value)
        },
        handleEvent: function(d, vid, api) {
            switch (d.event.toLowerCase()) {
                case 'ready':
                    for (var prop in $._data(vid[0], "events")) {
                        if (prop.match(/loadProgress|playProgress|play|pause|finish|seek|cuechange/)) {
                            vid[0].contentWindow.postMessage(JSON.stringify({
                                method: 'addEventListener',
                                value: prop
                            }), api)
                        }
                    }
                    if (vid.data("vimeoAPICall")) {
                        var vdata = vid.data("vimeoAPICall");
                        for (var i = 0; i < vdata.length; i++) {
                            vid[0].contentWindow.postMessage(JSON.stringify(vdata[i].message), vdata[i].api)
                        }
                        vid.removeData("vimeoAPICall")
                    }
                    vid.data("vimeoReady", !0);
                    vid.triggerHandler("ready");
                    break;
                case 'seek':
                    vid.triggerHandler("seek", [d.data]);
                    break;
                case 'loadprogress':
                    vid.triggerHandler("loadProgress", [d.data]);
                    break;
                case 'playprogress':
                    vid.triggerHandler("playProgress", [d.data]);
                    break;
                case 'pause':
                    vid.triggerHandler("pause");
                    break;
                case 'finish':
                    vid.triggerHandler("finish");
                    break;
                case 'play':
                    vid.triggerHandler("play");
                    break;
                case 'cuechange':
                    vid.triggerHandler("cuechange");
                    break
            }
        }
    };
    var loadIframe = $.fn.vimeoLoad = function() {
        var url = $(this).attr('src');
        if (url.match(/player_id/g) === null) {
            var firstSeperator = (url.indexOf('?') === -1 ? '?' : '&');
            var param = $.param({
                "api": 1,
                "player_id": "vvvvimeoVideo-" + Math.floor((Math.random() * 10000000) + 1).toString()
            });
            $(this).attr("src", url + firstSeperator + param)
        }
        return this
    };
    jQuery(document).ready(function() {
        $("iframe[src*='vimeo.com']").each(function() {
            loadIframe.call(this)
        })
    });
    $(window).on("message", function(e) {
        vimeoJqueryAPI.init(e)
    });
    $.vimeo = function(element, option1, option2) {
        var message = {},
            catchMethodLength = vimeoJqueryAPI.catchMethods.methodreturn.length;
        if (typeof option1 === "string")
            message.method = option1;
        if (typeof option2 !== undefined && typeof option2 !== "function")
            message.value = option2;
        if (element.prop("tagName").toLowerCase() === 'iframe' && message.hasOwnProperty("method")) {
            if (element.data("vimeoReady")) {
                element[0].contentWindow.postMessage(JSON.stringify(message), vimeoJqueryAPI.setVimeoAPIurl(element))
            } else {
                var _data = element.data("vimeoAPICall") ? element.data("vimeoAPICall") : [];
                _data.push({
                    message: message,
                    api: vimeoJqueryAPI.setVimeoAPIurl(element)
                });
                element.data("vimeoAPICall", _data)
            }
        }
        if ((option1.toString().substr(0, 3) === "get" || option1.toString() === "paused") && typeof option2 === "function") {
            (function(cml, func, i) {
                var interval = window.setInterval(function() {
                    if (vimeoJqueryAPI.catchMethods.methodreturn.length != cml) {
                        window.clearInterval(interval);
                        func(vimeoJqueryAPI.catchMethods.methodreturn[i])
                    }
                }, 10)
            })(catchMethodLength, option2, vimeoJqueryAPI.catchMethods.count);
            vimeoJqueryAPI.catchMethods.count++
        }
        return element
    };
    $.fn.vimeo = function(option1, option2) {
        return $.vimeo(this, option1, option2)
    }
})(jQuery, window)