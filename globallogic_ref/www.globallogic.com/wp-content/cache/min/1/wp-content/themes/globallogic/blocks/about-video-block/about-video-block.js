function setMuteTo1(url) {
    let urlObj = new URL(url);
    let muteParam = urlObj.searchParams.get('mute');
    if (muteParam === '0' || muteParam === null) {
        urlObj.searchParams.set('mute', '1')
    }
    return urlObj.toString()
}(function() {
    const aboutVideoBlock = document.querySelector(".about_video_block");
    const aboutVideo = document.querySelector(".about_video_area");
    if (!aboutVideo || !aboutVideoBlock) {
        console.error("Element not found in the DOM");
        return
    }
    let videoStarted = !1;
    let videoClosed = !1;
    let videoIframe = document.querySelector(".about_video_block iframe");
    let videoSrc = videoIframe.src + (videoIframe.src.includes('?') ? '&' : '?') + 'autoplay=1';
    let videoSrcMute = videoSrc + '&mute=1';
    videoIframe.src = "";
    let videoTimer = !1;

    function onScroll() {
        const rect = aboutVideoBlock.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isInView = rect.top <= windowHeight * .75 && rect.bottom >= 0;
        if (isInView && !videoStarted && !videoClosed) {
            clearTimeout(videoTimer);
            videoIframe.src = videoSrc;
            aboutVideoBlock.classList.add("visibleVideo");
            videoStarted = !0
        } else if (!isInView && videoStarted && !videoClosed) {
            aboutVideoBlock.classList.remove("visibleVideo");
            videoStarted = !1;
            videoTimer = setTimeout(function() {
                videoIframe.src = ''
            }, 100)
        }
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    const playVideo = document.querySelector("#play_video");
    const closeVideo = document.querySelector("#close_video");
    playVideo.addEventListener("click", function() {
        aboutVideoBlock.classList.add("visibleVideo");
        videoIframe.src = setMuteTo1(videoSrc)
    });
    closeVideo.addEventListener("click", function() {
        aboutVideoBlock.classList.remove("visibleVideo");
        videoStarted = !1;
        videoPlayed = !1;
        videoClosed = !0;
        setTimeout(function() {
            videoIframe.src = ''
        }, 100)
    });
    $(document).ready(function() {
        $(document).on('keyup', function(event) {
            if (event.key == "Escape") {
                aboutVideoBlock.classList.remove("visibleVideo");
                videoStarted = !1;
                videoPlayed = !1;
                videoClosed = !0;
                setTimeout(function() {
                    videoIframe.src = ''
                }, 100)
            }
        })
    })
})()