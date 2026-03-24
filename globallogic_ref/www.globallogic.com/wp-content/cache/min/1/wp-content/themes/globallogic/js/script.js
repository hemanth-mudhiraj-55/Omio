jQuery(document).ready(function() {
    if (jQuery('.popup-form-open').length) {
        jQuery(document).on('click', '.popup-form-open', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            var pdfLink = jQuery(this).attr('href');
            var modal = new bootstrap.Modal(document.getElementById('formModal'));
            modal.show();
            jQuery('#popup-pdf-link').attr('href', pdfLink);
            sessionStorage.setItem('pdfLink', pdfLink);
            if (jQuery('.popup-formmodal input[name="UTM_Content__c"]').length) {
                jQuery('.popup-formmodal input[name="UTM_Content__c"]').val(pdfLink)
            }
            jQuery(this).unbind('click');
            return !1
        });
        document.addEventListener('wpcf7mailsent', function(event) {
            location = sessionStorage.getItem('pdfLink');
            window.open(location, '_blank')
        }, !1);
        jQuery('.form-close').on('click', function() {
            jQuery('.popup-formmodal').hide()
        })
    }
    if (jQuery("body.postid-106663").length) {
        jQuery("a.primaryBtn, a.secondaryBtn, a.career_posting_box").attr("target", "_blank")
    }
    if (jQuery("body.insight-research-template #mktoForm_2134 .mktoButton").length > 0) {
        jQuery("body.insight-research-template #mktoForm_2134 .mktoButton").text("Get the report")
    }
    let breadcrumb = jQuery('body.page-template-contruction-projects .breadcrumb-item a').text();
    breadcrumb = breadcrumb.toLowerCase();
    if (breadcrumb.indexOf("thank") !== -1) {
        jQuery('body.page-template-contruction-projects ul.breadcrumb').hide()
    }
    if (jQuery('body').hasClass('page-template-career_search_page')) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                jQuery('.text-center.loader-main').remove();
                jQuery('.spinner-controls').show()
            }, 1000)
        })
    }
    if (jQuery('.java-community-form').length) {
        jQuery("input[name='current_country']").on('click', function() {
            if (jQuery("input[name='current_country']").is(':checked')) {
                var current_country = jQuery(this).val();
                if (current_country == 'Other') {
                    jQuery('.other_country').show()
                } else {
                    jQuery('.other_country').hide()
                }
            }
        });
        jQuery("input[name='current_city']").on('click', function() {
            if (jQuery("input[name='current_city']").is(':checked')) {
                var current_city = jQuery(this).val();
                if (current_city == 'Other') {
                    jQuery('.other_city').show()
                } else {
                    jQuery('.other_city').hide()
                }
            }
        });
        jQuery("input[name='about_event']").on('click', function() {
            if (jQuery("input[name='about_event']").is(':checked')) {
                var about_event = jQuery(this).val();
                if (about_event == 'Other') {
                    jQuery('.other_about_event').show()
                } else {
                    jQuery('.other_about_event').hide()
                }
            }
        })
    }
    if (window.matchMedia("(max-width: 768px)").matches && jQuery('body.postid-93106').length && jQuery('#footer_contact_form').length) {
        jQuery('#footer_contact_form').insertAfter('.medium-centered');
        setTimeout(function() {
            jQuery('.blog-single-sidebar').css("margin-top", "20px")
        }, 100)
    }
    if (jQuery('body.page-id-69326').length) {
        document.addEventListener('wpcf7mailsent', function(event) {
            if ('69310' == event.detail.contactFormId) {
                var thankyou_page = event.detail.inputs[5].value;
                location = thankyou_page
            }
        }, !1)
    }
    if (jQuery('body.page-id-98470').length) {
        document.addEventListener('wpcf7mailsent', function(event) {
            if ('98548' == event.detail.contactFormId) {
                var thankyou_page = event.detail.inputs[7].value;
                location = thankyou_page
            }
        }, !1)
    }
    if (jQuery('body.page-id-87459').length) {
        document.addEventListener('wpcf7mailsent', function(event) {
            if ('89365' == event.detail.contactFormId) {
                var thankyou_page = event.detail.inputs[4].value;
                location = thankyou_page
            }
        }, !1)
    }
    if (jQuery('body.page-id-84937').length) {
        document.addEventListener('wpcf7mailsent', function(event) {
            if ('84943' == event.detail.contactFormId) {
                var thankyou_page = event.detail.inputs[4].value;
                location = thankyou_page
            }
        }, !1)
    }
    if (jQuery('body.page-id-62885').length) {
        document.addEventListener('wpcf7mailsent', function(event) {
            if ('62886' == event.detail.contactFormId) {
                var thankyou_page = event.detail.inputs[4].value;
                location = thankyou_page
            }
        }, !1)
    }
    if (jQuery('body.page-id-79033').length) {
        document.addEventListener('wpcf7mailsent', function(event) {
            if ('82345' == event.detail.contactFormId) {
                var thankyou_page = event.detail.inputs[5].value;
                location = thankyou_page
            }
        }, !1)
    }
    if (jQuery('body.page-id-79798').length) {
        setTimeout(function() {
            jQuery('body.page-id-79798 form#mktoForm_2924 button.mktoButton').attr('id', 'nurture_drug_delivery')
        }, 2000)
    }
    if (jQuery('body.postid-87447 #mktoForm_3140').length) {
        setTimeout(function() {
            jQuery('body.postid-87447 #mktoForm_3140 .mktoFormRow:nth-child(7)').insertAfter('body.postid-87447 #mktoForm_3140 .mktoFormRow:nth-child(5)')
        }, 2000)
    }
    if (jQuery('body.page-id-74632 #mktoForm_3094').length) {
        setTimeout(function() {
            jQuery('#mktoCheckbox_23794_0').on('click', function() {
                jQuery(this).prop('checked')
            })
        }, 2000)
    }
    if (jQuery('.eeajecn1').length) {
        jQuery('.eeajecn1').each(function(e) {
            var a_href = jQuery(this).attr('href');
            var utm_source = getParameterByName('utm_source');
            var utm_medium = getParameterByName('utm_medium');
            var utm_campaign = getParameterByName('utm_campaign');
            if (utm_source) {
                a_href += `?utm_source=${utm_source}`
            }
            if (utm_medium) {
                a_href += `&utm_medium=${utm_medium}`
            }
            if (utm_campaign) {
                a_href += `&utm_campaign=${utm_campaign}`
            }
            jQuery(this).attr('href', a_href)
        })
    }
    if (jQuery('.collapse_section a').length) {
        jQuery('.collapse_section a').each(function(e) {
            var a_href = jQuery(this).attr('href');
            var utm_source = getParameterByName('utm_source');
            var utm_medium = getParameterByName('utm_medium');
            var utm_campaign = getParameterByName('utm_campaign');
            if (utm_source) {
                a_href += `?utm_source=${utm_source}`
            }
            if (utm_medium) {
                a_href += `&utm_medium=${utm_medium}`
            }
            if (utm_campaign) {
                a_href += `&utm_campaign=${utm_campaign}`
            }
            jQuery(this).attr('href', a_href)
        })
    }
    if (window.matchMedia("(max-width: 991px)").matches && jQuery('body.page-id-89093').length) {
        jQuery('h2#vacancies').removeAttr('id');
        jQuery('body.page-id-89093 section.job_by_irc_number div.ux').attr('id', 'vacancies')
    }
    if (jQuery('body.page-id-79019').length) {
        setTimeout(function() {
            let stylesBanner = `display:flex;flex-flow:row;justify-content:flex-end;`;
            document.querySelector('body.eucountries #onetrust-button-group').style = stylesBanner;
            let stylesOrder1 = `order:1;`;
            document.querySelector('body.eucountries #onetrust-button-group #onetrust-reject-all-handler').style = stylesOrder1;
            let stylesOrder2 = `order:2;`;
            document.querySelector('body.eucountries #onetrust-button-group #onetrust-pc-btn-handler').style = stylesOrder2;
            let stylesOrder3 = `order:3;`;
            document.querySelector('body.eucountries #onetrust-button-group #onetrust-accept-btn-handler').style = stylesOrder3
        }, 2500)
    }
    if (jQuery('.footer_block .footer_area ul li.ccpa').length) {
        var menuID = '';
        jQuery('.footer_block .footer_area ul li.ccpa').each(function() {
            var aHref = jQuery(this).find('a').attr('href');
            menuID = jQuery(this).attr('id');
            jQuery(this).find('a').attr('href', 'javascript:void(0);');
            jQuery(this).find('a').on('click', function() {
                console.log('hello321123');
                Cookiebot.renew()
            })
        });
        const isObjectEmpty = (objectName) => {
            return Object.keys(objectName).length === 0
        };
        if (!jQuery('body.page-id-79019').length && !isObjectEmpty(Cookiebot)) {
            setTimeout(function() {
                var geoCountry = Cookiebot.userCountry;
                if (geoCountry && (geoCountry.toUpperCase() == 'US' || geoCountry.toUpperCase() == 'US-06') && menuID != '' && jQuery('li#' + menuID).length) {
                    jQuery('li#' + menuID).show()
                } else {
                    if (menuID != '' && jQuery('li#' + menuID).length) {
                        jQuery('li#' + menuID).hide()
                    }
                }
            }, 2000)
        }
    }
    setTimeout(function() {
        if (jQuery('body.postid-84656 #mktoForm_3098').length) {
            jQuery(document).on('click', 'input[name="GDPR_Consent_of_Processing__c"]', function() {
                if (jQuery(this).is(':checked')) {
                    jQuery('#mktoCheckbox_23838_0, #mktoCheckbox_23838_1, #mktoCheckbox_23838_2').prop('checked', !1)
                }
            });
            jQuery(document).on('click', '#mktoCheckbox_23838_0, #mktoCheckbox_23838_1, #mktoCheckbox_23838_2', function() {
                jQuery('input[name="GDPR_Consent_of_Processing__c"]').prop('checked', !1)
            })
        }
    }, 2000);
    if (jQuery('.toc-body').length) {
        let tocId = "tocid";
        let mtocId = "mtocid";
        let headings;
        let headingIds = [];
        let headingIntersectionData = {};
        let headerObserver;

        function setLinkActive(link) {
            const links = document.querySelectorAll(`#${tocId} a`);
            const mlinks = document.querySelectorAll(`#${mtocId} a`);
            links.forEach((link) => link.classList.remove("active"));
            if (link) {
                link.classList.add("active")
            }
            mlinks.forEach((link) => link.classList.remove("active"));
            if (link) {
                link.classList.add("active")
            }
        }

        function getProperListSection(heading, previousHeading, currentListElement) {
            let listSection = currentListElement;
            if (previousHeading) {
                if (heading.tagName.slice(-1) > previousHeading.tagName.slice(-1)) {
                    let nextSection = document.createElement("ul");
                    listSection.appendChild(nextSection);
                    return nextSection
                } else if (heading.tagName.slice(-1) < previousHeading.tagName.slice(-1)) {
                    let indentationDiff = parseInt(previousHeading.tagName.slice(-1)) - parseInt(heading.tagName.slice(-1));
                    while (indentationDiff > 0) {
                        listSection = listSection.parentElement;
                        indentationDiff--
                    }
                }
            }
            return listSection
        }

        function setIdFromContent(element, appendedId) {
            if (!element.id) {
                element.id = `${element.innerHTML
                        .replace(/:/g, "")
                        .trim()
                        .toLowerCase()
                        .split(" ")
                        .join("-")}-${appendedId}`
            }
        }

        function addNavigationLinkForHeading(heading, currentSectionList) {
            let listItem = document.createElement("li");
            let anchor = document.createElement("a");
            anchor.innerHTML = heading.innerHTML;
            anchor.id = `${heading.id}-link`;
            anchor.href = `#${heading.id}`;
            anchor.onclick = (e) => {
                setTimeout(() => {
                    setLinkActive(anchor)
                })
            };
            listItem.appendChild(anchor);
            currentSectionList.appendChild(listItem)
        }

        function buildTableOfContentsFromHeadings() {
            const mtocElement = document.querySelector(`#${mtocId}`);
            const main = document.querySelector("main");
            if (!main) {
                return
            }
            headings = main.querySelectorAll("h1, h2, h3, h4, h5, h6");
            let previousHeading;
            let currentSectionList = document.createElement("ul");
            mtocElement.appendChild(currentSectionList);
            headings.forEach((heading, index) => {
                currentSectionList = getProperListSection(heading, previousHeading, currentSectionList);
                setIdFromContent(heading, index);
                addNavigationLinkForHeading(heading, currentSectionList);
                headingIds.push(heading.id);
                headingIntersectionData[heading.id] = {
                    y: 0
                };
                previousHeading = heading
            })
        }

        function mbuildTableOfContentsFromHeadings() {
            const tocElement = document.querySelector(`#${tocId}`);
            const main = document.querySelector("main");
            if (!main) {
                return
            }
            headings = main.querySelectorAll("h1, h2, h3, h4, h5, h6");
            let previousHeading;
            let currentSectionList = document.createElement("ul");
            tocElement.appendChild(currentSectionList);
            headings.forEach((heading, index) => {
                currentSectionList = getProperListSection(heading, previousHeading, currentSectionList);
                setIdFromContent(heading, index);
                addNavigationLinkForHeading(heading, currentSectionList);
                headingIds.push(heading.id);
                headingIntersectionData[heading.id] = {
                    y: 0
                };
                previousHeading = heading
            })
        }

        function updateActiveHeadingOnIntersection(entry) {
            const previousY = headingIntersectionData[entry.target.id].y;
            const currentY = entry.boundingClientRect.y;
            const id = `#${entry.target.id}`;
            const link = document.querySelector(id + "-link");
            const index = headingIds.indexOf(entry.target.id);
            if (entry.isIntersecting) {
                if (currentY > previousY && index !== 0) {} else {}
            } else {
                if (currentY > previousY) {
                    const lastLink = document.querySelector(`#${headingIds[index - 1]}-link`);
                    setLinkActive(lastLink)
                } else {}
            }
            headingIntersectionData[entry.target.id].y = currentY
        }

        function observeHeadings() {
            let options = {
                root: document.querySelector("main"),
                threshold: 0.1
            };
            headerObserver = new IntersectionObserver((entries) => entries.forEach(updateActiveHeadingOnIntersection), options);
            Array.from(headings).reverse().forEach((heading) => headerObserver.observe(heading))
        }
        window.addEventListener("load", (event) => {
            const tocElement = document.querySelector(`#${tocId}`);
            const main = document.querySelector("main");
            if (!main) {
                return
            }
            buildTableOfContentsFromHeadings();
            mbuildTableOfContentsFromHeadings();
            if ("IntersectionObserver" in window) {
                observeHeadings()
            }
        });
        window.addEventListener("unload", (event) => {
            headerObserver.disconnect()
        });
        if (window.matchMedia("(max-width: 767px)").matches) {
            jQuery('.toc-sidebar').insertAfter('.toc-body main')
        }
        jQuery("#gotoTOCBtn").click(function() {
            jQuery('html, body').animate({
                scrollTop: jQuery("#toc-body").offset().top - 40
            }, 100)
        });
        jQuery(window).scroll(function() {
            var position = jQuery(window).scrollTop();
            if (position < 640 || position > 15050) {
                jQuery('.toc-is-sticky').hide()
            } else if (position >= 640) {
                jQuery('.toc-is-sticky').show()
            }
        })
    }
});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if (results == null)
        return "";
    else return decodeURIComponent(results[1].replace(/\+/g, " "))
}
jQuery('#hero.careerspage button.btn.btn-primary.find-btn').on("click", function() {
    jQuery('.text-center.search-loader-main').show()
});
jQuery('.only-in-mobile button.btn.btn-primary.find-btn').on("click", function() {
    jQuery('.only-in-mobile .text-center.search-loader-main').show()
});
if (window.matchMedia("(min-width: 767px)").matches && jQuery('.de-3col').length) {
    var heightArr = [];
    var height;
    jQuery(".de-3col").each(function() {
        height = jQuery(this).height();
        heightArr.push(height)
    });
    heightArr.sort(function(a, b) {
        return a - b
    });
    var largestHeight = heightArr[heightArr.length - 1];
    jQuery('.de-3col').height(largestHeight + 'px')
}
jQuery("#by_keyword").blur(function() {
    var by_keyword = document.getElementById("by_keyword").value.replace(/\s/g);
    russianCppSearch(by_keyword)
});
jQuery('#by_keyword').keypress(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode === 13) {
        var by_keyword = document.getElementById("by_keyword").value.replace(/\s/g);
        event.preventDefault();
        russianCppSearch(by_keyword);
        jQuery(this).parent().parent().parent().submit()
    }
});

function russianCppSearch(by_keyword) {
    var langdic = {
        "Russian": /[\u0400-\u04FF]/
    };
    const keys = Object.entries(langdic);
    var upperCaseCheckRegex = /\p{Lu}/u;
    Object.entries(langdic).forEach(([key, value]) => {
        if (by_keyword.includes("++") && by_keyword.length === 3 && value.test(by_keyword) === !0 && key === 'Russian') {
            if (upperCaseCheckRegex.test(by_keyword)) {
                document.getElementById("by_keyword").value = 'C++'
            } else {
                document.getElementById("by_keyword").value = 'c++'
            }
        } else {}
    })
}
jQuery(".toggle-navi").click(function() {
    jQuery("#masthead").toggleClass("open")
});
jQuery(".menu-item-has-children").click(function() {
    jQuery(this).toggleClass("open-submenu")
});
var selectVId = '';
var selectVId1 = '';
var selectVSrc = '';
window.onscroll = function() {};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("gotoTopBtn").style.display = "block"
    } else {
        document.getElementById("gotoTopBtn").style.display = "none"
    }
    var window_top = $(window).scrollTop();
    var top = $('.footer').offset().top;
    top = top - 500;
    if (window_top > top) {
        $(".top").addClass("addedrelative")
    } else {
        $(".top").removeClass("addedrelative")
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
}
jQuery(document).on('click', '#gotoTopBtn', function(e) {
    topFunction()
});

function openCity(evt, cityName) {
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
    evt.currentTarget.className += " active"
}

function goSection() {
    if ($('#go-section').length) {
        try {
            if (document.getElementById('go-section') && jQuery('body.postid-80085').length) {
                $('html, body').animate({
                    scrollTop: $('#go-section').offset().top - 170
                }, 'slow')
            } else {
                $('html, body').animate({
                    scrollTop: $('#go-section').offset().top - 50
                }, 'slow')
            }
        } catch (e) {
            console.log("Error: ", e)
        }
    }
}

function playVideo2(e) {
    jQuery('#myModal-' + selectVId1 + '.videomodal').show();
    jQuery('#myModal-' + selectVId1 + '.videomodal').removeClass("hidepopup");
    jQuery('#myModal-' + selectVId1 + ' .container-video-section').addClass("visible");
    jQuery('.video-section-' + selectVId1 + ' .video-control.js-video-control').removeClass('paused').addClass('playing');
    jQuery('.video-section-' + selectVId1 + ' #vi-video-1-container').attr('data-video-is-playing', !0);
    jQuery('.video-section-' + selectVId1 + ' .video-control.js-video-control').css('opacity', '');
    jQuery('.video-section-' + selectVId1 + ' .video-control.js-video-control.playing').removeClass("video-control-show")
}

function playVideo(e) {
    jQuery('#myModal-' + selectVId + '.videomodal').removeClass("hidepopup");
    jQuery('#myModal-' + selectVId + ' .container-video-section').addClass("visible");
    if (selectVSrc == 'vimeosourcevideo') {
        console.log('vimeo triggered play', selectVId);
        jQuery('#myModal-' + selectVId + ' #vi-banner-video').vimeo('play')
    } else if (selectVSrc == 'youtubesourcevideo') {
        console.log('youtube triggered play', selectVId);
        var dataId = $('.video-section-' + selectVId + ' .video-control.js-video-control').attr("data-videosourec");
        console.log('dataId', dataId, jQuery('#myModal-' + selectVId + ' .embed-container iframe'))
        jQuery('#myModal-' + selectVId + ' .embed-container iframe').attr('src', dataId)
    }
    jQuery('.video-section-' + selectVId + ' .video-control.js-video-control').removeClass('paused').addClass('playing');
    jQuery('.video-section-' + selectVId + ' #vi-video-1-container').attr('data-video-is-playing', !0);
    jQuery('.video-section-' + selectVId + ' .video-control.js-video-control').css('opacity', '');
    jQuery('.video-section-' + selectVId + ' .video-control.js-video-control.playing').removeClass("video-control-show")
}

function pauseVideo(e) {
    jQuery('#myModal-' + selectVId + '.videomodal').addClass("hidepopup");
    if (selectVSrc == 'vimeosourcevideo') {
        console.log('vimeo triggered pause', e);
        jQuery('#myModal-' + selectVId + ' .embed-container iframe').attr('src', "")
    } else if (selectVSrc == 'youtubesourcevideo') {
        console.log('youtube triggered pause', e);
        jQuery('#myModal-' + selectVId + ' .embed-container iframe').attr('src', "")
    }
    jQuery('.video-section-' + selectVId + ' .video-control.js-video-control').removeClass('playing').addClass('paused')
}

function muteAudio() {
    audioStatus = jQuery(".video-section-<?php echo $args['vidid']; ?> #vi-video-1-container").attr('data-audio-volume');
    if (audioStatus == 0) {
        jQuery('.video-section-' + selectVId + ' #vi-video-1-container').attr('data-audio-volume', 1);
        jQuery('#myModal-' + selectVId + ' #vi-banner-video').vimeo("setVolume", 1);
        jQuery('#myModal-' + selectVId + ' .audio-control.js-audio-control').removeClass('muted').addClass('unmuted')
    } else if (audioStatus == 1) {
        jQuery('.video-section-' + selectVId + ' #vi-video-1-container').attr('data-audio-volume', 0);
        jQuery('#myModal-' + selectVId + ' #vi-banner-video').vimeo("setVolume", 0);
        jQuery('#myModal-' + selectVId + ' .audio-control.js-audio-control').removeClass('unmuted').addClass('muted')
    }
}
jQuery(document).ready(function() {
    getInTouch();
    goSection();
    jQuery(document).on('click', '.js-video-control', function(e) {
        selectVSrc = $(this).data('source');
        if (selectVSrc == 'marketo-custom-video') {
            selectVId1 = $(this).data('formid');
            playVideo2(jQuery(this));
            e.preventDefault()
        } else {
            selectVId = $(this).data('vid');
            if (selectVSrc == 'vimeosourcevideo') {
                $("#myModal-" + selectVId + " #vi-banner-video")[0].src = "https://player.vimeo.com/video/" + selectVId + "?autoplay=1&loop=0&title=0&byline=0&portrait=0&background=0"
            } else if (selectVSrc == 'youtubesourcevideo') {
                $("#myModal-" + selectVId + " #ply-video")[0].src = "https://www.youtube.com/embed/" + selectVId + "?rel=0&mute=0&autoplay=1"
            }
            playVideo(jQuery(this));
            e.preventDefault()
        }
    });
    jQuery(".inner .video-play-icon").click(function() {
        jQuery(".dropdown-menu").removeClass("show");
        jQuery(".dropdown-toggles").removeClass("open")
    });
    jQuery('#vi-video-1-container').attr('data-video-is-playing', !1);
    jQuery(document).on('click', '#myModal-' + selectVId + ' .js-audio-control', function(e) {
        muteAudio(jQuery(this));
        e.preventDefault()
    })
});

function getInTouch() {
    jQuery("#page_1 a[href^='#']").click(function(e) {
        e.preventDefault();
        var avalue = $(this).attr("href");
        var h = 0;
        if ($('header nav').length) {
            h = $('header nav')[0].offsetHeight + 50
        }
        if ($(avalue).length) {
            $("body, html").animate({
                scrollTop: $(avalue).offset().top - h
            }, 0)
        }
    });
    $(".hero-image a[href^='#']").click(function(e) {
        var avalue = $(this).attr("href");
        e.preventDefault();
        var h = 0;
        if ($('header nav').length) {
            h = $('header nav')[0].offsetHeight + 50
        }
        var position = $(avalue).offset().top - h;
        $("body, html").animate({
            scrollTop: position
        }, 0)
    });
    $(".img_form_scroll[href^='#']").click(function(e) {
        var avalue = $(this).attr("href");
        e.preventDefault();
        var h = 0;
        if ($('header nav').length) {
            h = $('header nav')[0].offsetHeight + 50
        }
        var position = $(avalue).offset().top - h;
        $("body, html").animate({
            scrollTop: position
        }, 0)
    })
}
if (document.getElementById('plfile-placeholder')) {
    var input = document.getElementById('plfile-placeholder');
    var infoArea = document.getElementById('file-upload-filename');
    input.addEventListener('change', showFileName)
}

function showFileName(event) {
    var input = event.srcElement;
    if (input.files.length >= 1) {
        var fileName = input.files[0].name;
        infoArea.innerHTML = '<span type="reset" id="plpseudoCancel"><i class="fa fa-close"></i></span>' + fileName
    } else {
        infoArea.innerHTML = ''
    }
    setTimeout(function() {
        clearFiles()
    }, 1000)
}

function clearFiles() {
    var cancelButton = document.getElementById("plpseudoCancel");
    cancelButton.onclick = function(event) {
        console.log("Pseudo Cancel button clicked.");
        $("#file-upload").val(null)
    }
}
document.addEventListener("DOMContentLoaded", function() {
    if (jQuery(".threeColSlider").length) {
        const threeColSlider = new Swiper(".threeColSlider", {
            slidesPerView: 1,
            speed: 400,
            spaceBetween: 20,
            autoplay: {
                delay: 3000,
                disableOnInteraction: !1,
                pauseOnMouseEnter: !0,
            },
            navigation: {
                nextEl: ".service-next",
                prevEl: ".service-prev",
            },
            scrollbar: {
                el: ".serviceScroll",
                draggable: !0,
            },
            breakpoints: {
                576: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1400: {
                    slidesPerView: 3,
                },
            },
            on: {
                init: function() {
                    const wrapper = document.querySelector(".threeColSlider .swiper-wrapper");
                    wrapper.style.gap = "unset";
                    wrapper.querySelectorAll(".swiper-slide").forEach((el) => {
                        el.style.flexBasis = "auto"
                    })
                },
            },
        });
        const threeColSlides = document.querySelectorAll('.threeColSlider .swiper-slide');
        threeColSlides.forEach((slide, index) => {
            slide.addEventListener('click', () => {
                const totalSlides = threeColSlider.slides.length;
                const visibleSlides = threeColSlider.params.slidesPerView;
                const middleIndex = Math.floor(visibleSlides / 2);
                let targetIndex = index - middleIndex;
                if (targetIndex < 0)
                    targetIndex = 0;
                threeColSlider.slideTo(targetIndex, 400, !0)
            })
        })
    }
    if (jQuery(".threeBoxSlider").length) {
        const threeBoxSlider = new Swiper(".threeBoxSlider", {
            slidesPerView: 1,
            speed: 400,
            spaceBetween: 20,
            autoplay: {
                delay: 3000,
                disableOnInteraction: !1,
                pauseOnMouseEnter: !0,
            },
            navigation: {
                nextEl: ".service-next",
                prevEl: ".service-prev",
            },
            scrollbar: {
                el: ".serviceScroll",
                draggable: !0,
            },
            breakpoints: {
                576: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1400: {
                    slidesPerView: 3,
                },
            },
            on: {
                init: function() {
                    const wrapper = document.querySelector(".threeBoxSlider .swiper-wrapper");
                    wrapper.style.gap = "unset";
                    wrapper.querySelectorAll(".swiper-slide").forEach((el) => {
                        el.style.flexBasis = "auto"
                    })
                },
            },
        });
        const threeBoxSlides = document.querySelectorAll('.threeBoxSlider .swiper-slide');
        threeBoxSlides.forEach((slide, index) => {
            slide.addEventListener('click', () => {
                const totalSlides = threeBoxSlider.slides.length;
                const visibleSlides = threeBoxSlider.params.slidesPerView;
                const middleIndex = Math.floor(visibleSlides / 2);
                let targetIndex = index - middleIndex;
                if (targetIndex < 0)
                    targetIndex = 0;
                threeBoxSlider.slideTo(targetIndex, 400, !0)
            })
        });
        jQuery(document).on('click', '.js-video-box', function(e) {
            e.preventDefault();
            var selectVSrc = jQuery(this).data('source');
            var selectVId = jQuery(this).data('vid');
            if (selectVSrc == 'vimeosourcevideo') {
                jQuery("#boxModal #vi-banner-video")[0].src = "https://player.vimeo.com/video/" + selectVId + "?autoplay=1&loop=0&title=0&byline=0&portrait=0&background=0";
                jQuery("#boxModal #ply-video").hide();
                jQuery("#boxModal #vi-banner-video").show()
            } else if (selectVSrc == 'youtubesourcevideo') {
                jQuery("#boxModal #ply-video")[0].src = "https://www.youtube.com/embed/" + selectVId + "?rel=0&mute=0&autoplay=1";
                jQuery("#boxModal #vi-banner-video").hide();
                jQuery("#boxModal #ply-video").show()
            }
            jQuery("#boxModal").show();
            jQuery("#boxModal .container-video-section").addClass("visible")
        });
        jQuery('#boxModal .close').on('click', function() {
            jQuery(this).parent().next().find('iframe').attr('src', '')
        });
        jQuery("#boxModal").on('click', function(event) {
            if (event.target === this) {
                var modalInstance = bootstrap.Modal.getInstance(this);
                modalInstance.hide();
                jQuery("#boxModal").find("iframe").attr("src", "")
            }
        });
        if (jQuery("#boxModal").length) {
            jQuery("#boxModal").on('show.bs.modal', function() {
                console.log("Modal opening, stopping slider...");
                if (threeBoxSlider.autoplay) {
                    threeBoxSlider.autoplay.stop()
                }
            });
            jQuery("#boxModal").on('hide.bs.modal', function() {
                console.log("Modal closing, resuming slider...");
                if (threeBoxSlider.autoplay) {
                    threeBoxSlider.autoplay.start()
                }
            })
        }
        setTimeout(function() {
            jQuery('.blog_content h3').matchHeight();
            jQuery('.blog_content p').matchHeight()
        }, 2000)
    }
    if (jQuery('#cookieModal').length) {
        let cookieModal;
        cookieModal = new bootstrap.Modal(document.getElementById('cookieModal'));

        function setCookie(cname, cvalue, exdays) {
            const d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
        }

        function getCookie(cname) {
            let name = cname + "=";
            let ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1)
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length)
                }
            }
            return ""
        }
        window.addEventListener('CookiebotOnDecline', function(e) {
            console.log("declining............");
            cookieBotOptOut("Opt-Out Request Honored", "cookieDeclineShown")
        }, !1);

        function cookieBotOptOut(title, cookieName) {
            if (getCookie(cookieName) !== "") {
                console.log("Modal skipped: " + cookieName + " cookie exists.");
                return
            }
            jQuery('#cookieModal #cookieModalLabel').text('Loading...');
            jQuery('#cookieModal #modal-loader').show();
            if (cookieModal)
                cookieModal.show();
            setCookie(cookieName, 'true', 365);
            setTimeout(function() {
                jQuery('#cookieModal #cookieModalLabel').text(title);
                jQuery('#cookieModal #modal-loader').hide()
            }, 500);
            setTimeout(function() {
                cookieModal.hide()
            }, 5000)
        }
    }
})