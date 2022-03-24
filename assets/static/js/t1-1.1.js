const UNDERLINE_LINK_ANIMATION_DURATION = 400;
const SCROLL_ANIMATION_DURATION = 1000;

$(document).ready(function() {
    menuItemSelect();
    landingEffects();
    timeline();
    initializeMaintainersEffects();
    initializeBlog();
});

function menuItemSelect() {
    var is_mobile = false; //initiate as false
    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) is_mobile = true;

    let url = window.location.pathname;
    $('.nav-item a').each(function(index, el) {
        let element = $(el);
        let elementUrl = element.attr('href');
        if(elementUrl === '/') {
            if(elementUrl === url) {
                element.addClass("selected");
            }
        } else if(url.indexOf(elementUrl) > -1) {
            element.addClass("selected");
        }

        if(elementUrl.charAt(0) === '#') {
            element.removeClass("selected");
            element.click(function() {
                $('html, body').stop().animate({
                    scrollTop: $('' + elementUrl).offset().top
                }, SCROLL_ANIMATION_DURATION);
                closeNavbar();
            }).bind('click touchstart', function (e) {
                if(is_mobile) {
                    element.find('.nav-link-underline').stop().animate({width: '0'}, UNDERLINE_LINK_ANIMATION_DURATION);
                    e.stopPropagation();
                }
            });
        }

        if(!is_mobile && !element.hasClass('selected')) {
            element.mouseenter(function () {
                element.find('.nav-link-underline').stop().animate({width: '100%'}, UNDERLINE_LINK_ANIMATION_DURATION);
            }).mouseleave(function () {
                element.find('.nav-link-underline').stop().animate({width: '0'}, UNDERLINE_LINK_ANIMATION_DURATION);
            })
        }

        if(elementUrl.charAt(0) !== '#') {
            element.click(function(){
                closeNavbar();
            }).bind('click touchstart', function (e) {
                if(is_mobile) {
                    element.find('.nav-link-underline').stop().animate({width: '0'}, UNDERLINE_LINK_ANIMATION_DURATION);
                    e.stopPropagation();
                }
            });
        }
    });

    let closeNavbar = function() {
        if(is_mobile) {
            $('.navbar-toggler').click();
        }
    };

    let lastScrollTop = 0;
    let direction = '';
    let windowElement = $(window);
    let hidden = false;
    windowElement.bind('scroll', function(event) {
        if($(event.target).closest('.timeline').length === 0) {
            let currentScrollTop = windowElement.scrollTop();
            let directionChanged = (direction === 'up' && currentScrollTop > lastScrollTop) || (direction === 'down' && currentScrollTop < lastScrollTop);
            if(directionChanged) {
                direction = currentScrollTop > lastScrollTop? 'down': 'up'
                if(direction === 'up') {
                    if(is_mobile) {
                        $('.header-container').stop().fadeIn(200);
                    } else {
                        $('.header-container').stop().fadeTo(200, 1);
                    }
                    hidden = false;
                }
                if(direction === 'down' && currentScrollTop > 0) {
                    if(is_mobile) {
                        $('.header-container').stop().fadeOut(200);
                    } else {
                        $('.header-container').stop().fadeTo(200, 0);
                    }
                    hidden = true;
                }
            }
            lastScrollTop = currentScrollTop;
            direction = !direction? 'up': direction;
        }
    });

    if(!is_mobile) {
        $('.header-container').mouseenter(function () {
            $('.header-container').stop().fadeTo(200, 1);
        }).mouseleave(function () {
            if (hidden) {
                $('.header-container').stop().fadeTo(200, 0);
            }
        });
    }
}

function landingEffects() {
    let title = $('.page-template-landing .section-summary .description');
    if(title.length) {
        title.fadeIn(2000);
    }
}

function timeline() {
    if($('.section-timeline').length) {

        let timelineElement = $('.timeline');

        timelineElement.flumen({center: false});

        let timelinePeriod = $('.timeline-period-boundary');
        let timelinePeriodWidth = $(timelinePeriod[0]).outerWidth(true);
        let duration = timelinePeriodWidth * 20;
        let documentWidth = $(document).width();
        let positionThreshold = 0.7 * documentWidth;


        let cycleTimeline = function() {
            let initialPosition = timelineElement.scrollLeft();
            let shiftPosition = initialPosition - timelinePeriodWidth;

            if(shiftPosition > positionThreshold) {
                initialPosition = shiftPosition;
            }

            timelineElement.stop().scrollLeft(initialPosition);
            timelineElement.animate({scrollLeft: initialPosition + timelinePeriodWidth}, {duration: duration, easing: 'linear', complete: function() {
                    timelineElement.stop().scrollLeft(initialPosition);
                    cycleTimeline();
                }});
        };

        let cycleTimelineTimeout;
        timelineElement.mouseover(function () {
            timelineElement.stop();
            clearTimeout(cycleTimelineTimeout);
            cycleTimelineTimeout = null;
        }).mouseleave(function() {
            cycleTimeline();
        }).unbind('click touchstart').bind('click touchstart', function () {
            timelineElement.stop();
            clearTimeout(cycleTimelineTimeout);
            cycleTimelineTimeout = null;
        }).unbind('click touchend').bind('click touchend', function () {
            if(cycleTimelineTimeout === null) {
                scrollStop();
            }
        }).unbind('click').bind('click', function () {
            timelineElement.stop();
            clearTimeout(cycleTimelineTimeout);
            cycleTimelineTimeout = null;
        }).mousewheel(function() {
            timelineElement.stop();
            clearTimeout(cycleTimelineTimeout);
            cycleTimelineTimeout = setTimeout(cycleTimeline, 20);
        });

        $(window).resize(function() {
            timelinePeriodWidth = $(timelinePeriod[0]).outerWidth(true);
            duration = timelinePeriodWidth * 20;
            documentWidth = $(document).width();
            positionThreshold = 0.7 * documentWidth
            cycleTimeline();
        });

        /*!
         * Run a callback function after scrolling has stopped
         * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
         * @param  {Function} callback The function to run after scrolling
         */
        var scrollStop = function () {
            // Setup scrolling variable
            var isScrolling;

            // Listen for scroll events
            timelineElement.bind('scroll', function (event) {

                // Clear our timeout throughout the scroll
                clearTimeout(isScrolling);

                // Set a timeout to run after scrolling ends
                isScrolling = setTimeout(function() {
                    // Run the callback
                    cycleTimeline();
                }, 500);

            });
        };

        cycleTimeline();
    }
}

function initializeMaintainersEffects() {
    let typewriterElement = $('.section-team .title .typewriter');
    if(typewriterElement.length) {
        let text = typewriterElement.html();

        let spans = '<span>' + text.split('').join('</span><span>') + '</span>';
        typewriterElement.html(spans);
        typewriterElement.removeClass('graphene-hidden');

        let letterElement = typewriterElement.find('span');

        let index = 0;
        let appendText = function() {
            $(letterElement[index++]).addClass('graphene-blue');
            if(index < letterElement.length) {
                setTimeout(appendText, 100);
            } else {
                $('.section-team .horizontal-line span').stop().fadeIn();
            }
        }
        setTimeout(appendText, 100);
    }
}

function initializeBlog() {
    const NUMBER_BLOG_POSTS_TO_SHOW = 3;
    let sectionBlogElement = $('.section-blog');
    if(sectionBlogElement.length > 0) {
        $.ajax({
            dataType: "xml",
            method: 'GET',
            url: grapheneBlogFeedUrl,
            success: function(data) {
                let blogPosts = $(data).find("item");
                let count = blogPosts.length < NUMBER_BLOG_POSTS_TO_SHOW? blogPosts.length: NUMBER_BLOG_POSTS_TO_SHOW;

                for(let i = 0; i < count; i++) {
                    let blogPost = $(blogPosts[i]);

                    let publishDate = new Date(blogPost.find("pubDate").text());

                    let blogPostElement = $('#blog-post-' + i);

                    blogPostElement.find('.blog-post-link').attr('href', blogPost.find("link").text());

                    let publishDateFormatted = publishDate.toLocaleDateString('en-US', { day: '2-digit' }) + ". " + publishDate.toLocaleDateString('en-US', { month: 'short' });
                    blogPostElement.find('.blog-post-date').html(publishDateFormatted);
                    blogPostElement.find('.blog-post-title').html(blogPost.find("title").text());

                    let description = blogPost.find("description").text();
                    blogPostElement.find('.blog-post-description').html(description.length > 200? description.substr(0, 200) + ' ...': description);

                    blogPostElement.removeClass('graphene-hidden');
                }
                $('.section-blog').removeClass('graphene-hidden');
            }
        });
    }
    $('.section-blog .blog-post-link').each(function(index, el) {
        let element = $(el);

        element.mouseenter(function () {
            element.find('.blog-post-read-more-underline').stop().animate({width: '100%'}, {duration: UNDERLINE_LINK_ANIMATION_DURATION, start: function() {element.find('.blog-post-read-more span').removeClass('graphene-blue')}});
        }).mouseleave(function () {
            element.find('.blog-post-read-more-underline').stop().animate({width: '0'}, {duration: UNDERLINE_LINK_ANIMATION_DURATION, complete: function() {element.find('.blog-post-read-more span').addClass('graphene-blue')}});
        })
    });
}
