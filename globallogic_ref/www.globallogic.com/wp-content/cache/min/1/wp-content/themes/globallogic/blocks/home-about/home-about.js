jQuery(document).ready(function($) {
    const textElement = $('.home_about_head');
    if (textElement && textElement.length) {
        const text = textElement.html();
        textElement.html('');
        $.each(text.split(' '), function(index, word) {
            const span = $('<i>').addClass('word').html(word + ' ');
            textElement.append(span)
        });
        const words = $('.word');
        const wordCount = words.length;
        $(document).on('scroll', function() {
            const scrollPos = $(this).scrollTop();
            const windowHeight = $(window).height();
            const halfWindowHeight = windowHeight / 1.2;
            words.each(function(index) {
                const wordOffset = $(this).offset().top;
                const wordDistanceFromTop = wordOffset - scrollPos;
                if (wordDistanceFromTop < halfWindowHeight) {
                    const wordOpacity = 1;
                    $(this).css('opacity', wordOpacity);
                    $(this).css('transition-delay', (index * 0.05) + 's')
                } else {
                    const wordOpacity = 0.3;
                    $(this).css('opacity', wordOpacity);
                    $(this).css('transition-delay', (index * 0) + 's')
                }
            })
        })
    }
})