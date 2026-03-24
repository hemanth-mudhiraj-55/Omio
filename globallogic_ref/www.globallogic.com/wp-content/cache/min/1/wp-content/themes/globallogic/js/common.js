document.addEventListener("scroll", function() {
    const header = document.querySelector('.header_block');
    if (window.scrollY > 100) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
});
$(window).on('load', function() {
    $(".preloader").fadeOut(function() {})
});
$(document).ready(function() {
    $("#mobile_menu_btn").click(function() {
        $(".header_block").toggleClass("enlarge");
        if ($("body").css("overflow-y") === "hidden") {
            $("body").css("overflow-y", "auto")
        } else {
            $("body").css("overflow-y", "hidden")
        }
    });
    var videoIframe = jQuery('.popup_video iframe');
    videoSrc = videoIframe.attr("src");
    videoSrc = videoIframe.attr("src") || "";
    videoSrc = videoSrc + (videoSrc.includes('?') ? '&' : '?') + 'autoplay=1';
    videoIframe.attr('src', "");

    function pauseVideo(e) {
        var videoIframe = jQuery('.popup_video iframe');
        videoSrc = videoIframe.attr("src");
        jQuery('.popup_video').addClass("hidepopup");
        console.log('youtube triggered pause', e);
        videoIframe.attr('src', "");
        jQuery('.popup_video').removeClass('playing').addClass('paused')
    }
    $(".video_btn").click(function() {
        $(".popup_wrap").toggleClass("open");
        $("body").css("overflowY", "hidden");
        $(".popup_close").toggleClass("toggle");
        var videoIframe = jQuery('.popup_video iframe');
        if (videoSrc) {
            videoIframe.attr('autoplay', 1);
            videoIframe.attr('src', videoSrc);
            jQuery('.popup_video').removeClass('hidepopup');
            jQuery('.popup_video').removeClass('paused').addClass('playing')
        }
    });
    $(".popup_close").click(function() {
        $(".popup_wrap").removeClass("open");
        $(".popup_close").removeClass("toggle");
        $("body").css("overflow-y", "auto");
        pauseVideo()
    });
    $("#popup_overlay").click(function() {
        $(".popup_wrap").removeClass("open");
        $(".popup_close").removeClass("toggle");
        $("body").css("overflow-y", "auto");
        pauseVideo()
    });
    $(document).on('keyup', function(event) {
        if (event.key === "Escape") {
            $(".popup_wrap").removeClass("open");
            $(".popup_close").removeClass("toggle");
            $("body").css("overflow-y", "auto");
            pauseVideo()
        }
    })
});
window.addEventListener("pageshow", () => {
    initializeInputClasses()
});

function initializeInputClasses() {
    const inputs = document.querySelectorAll(".data-box");
    const labels = document.querySelectorAll(".field_box label");
    labels.forEach((label) => {
        const labelOuter = label.parentElement;
        label.addEventListener("click", () => {
            labelOuter.classList.add("focused")
        })
    });
    document.addEventListener("click", (event) => {
        labels.forEach((label) => {
            const labelOuter = label.parentElement;
            if (!labelOuter.contains(event.target)) {
                labelOuter.classList.remove("focused")
            }
        })
    });
    inputs.forEach((input) => {
        const inputOuter = input.parentElement;
        if (input.value ? .trim()) {
            inputOuter.classList.add("has-content")
        } else {
            inputOuter.classList.remove("has-content")
        }
        input.addEventListener("input", () => {
            if (input.value.trim()) {
                inputOuter.classList.add("has-content")
            } else {
                inputOuter.classList.remove("has-content")
            }
        });
        input.addEventListener("focus", () => {
            inputOuter.classList.add("focused")
        });
        input.addEventListener("click", () => {
            inputOuter.classList.add("focused")
        });
        input.addEventListener("blur", () => {
            inputOuter.classList.remove("focused");
            if (!input.value.trim()) {
                inputOuter.classList.remove("has-content")
            }
        })
    })
}
const jobCountrySelect = document.getElementById('jobCountry');
if (jobCountrySelect) {
    jobCountrySelect.addEventListener('change', function() {
        const fieldBox = this.closest('.field_box');
        if (this.value.trim() !== '') {
            fieldBox.classList.add('has-content')
        } else {
            fieldBox.classList.remove('has-content')
        }
    })
}
const dropdownToggle = document.querySelector('.jobCountry');
if (dropdownToggle) {
    dropdownToggle.addEventListener('click', function() {
        const fieldBox = this.closest('.field_box');
        fieldBox.classList.add('focused')
    });
    dropdownToggle.addEventListener('blur', function() {
        const fieldBox = this.closest('.field_box');
        fieldBox.classList.remove('focused')
    })
}
$(document).ready(function() {
    function toggleBorder() {
        if ($('.link_required').is(':visible') || ($('#file_error').is(':visible') && $('#file_error').text().trim()) || ($('#linkedin_error').is(':visible') && $('#linkedin_error').text().trim())) {
            $('.custom_file_field').addClass('error-border')
        } else {
            $('.custom_file_field').removeClass('error-border')
        }
    }

    function observeElement(target) {
        if (target) {
            new MutationObserver(toggleBorder).observe(target, {
                attributes: !0,
                childList: !0,
                subtree: !0,
                characterData: !0
            })
        }
    }
    toggleBorder();
    observeElement(document.querySelector('.link_required'));
    observeElement(document.querySelector('#file_error'));
    observeElement(document.querySelector('#linkedin_error'))
});

function disableLinks() {
    var links = document.querySelectorAll(".inactiveLink");
    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault()
        });
        link.addEventListener("focus", function(event) {
            event.preventDefault()
        });
        link.style.pointerEvents = "none";
        link.style.color = "gray";
        link.style.cursor = "default"
    })
}
document.addEventListener("DOMContentLoaded", () => {
    initializeInputClasses();
    disableLinks()
});
document.querySelectorAll(".nav_drop-button").forEach(function(button) {
    button.addEventListener("click", function() {
        var parentDiv = button.parentElement;
        if (parentDiv.classList.contains("active")) {
            parentDiv.classList.remove("active")
        } else {
            document.querySelectorAll(".nav_drop-button").forEach(function(otherButton) {
                otherButton.parentElement.classList.remove("active")
            });
            parentDiv.classList.add("active")
        }
    })
});
const swiperControl = document.querySelector(".swiper_control");
if (swiperControl) {
    const prevButton = swiperControl.querySelector(".swiper-button-prev");
    const nextButton = swiperControl.querySelector(".swiper-button-next");
    if (prevButton && nextButton) {
        if (prevButton.classList.contains("swiper-button-disabled") && nextButton.classList.contains("swiper-button-disabled")) {
            swiperControl.style.display = "none"
        }
    }
}
const insightSwiper = new Swiper(".homeInsightSlider", {
    slidesPerView: "1",
    speed: 400,
    spaceBetween: 0,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: !0,
    },
    breakpoints: {
        578: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: "auto",
        },
    },
});
$(function() {
    $(".loadBtn").click(function() {
        $(this).toggleClass("clicked")
    })
});
if (typeof AOS !== "undefined") {
    AOS.init()
}