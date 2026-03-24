const questions = document.querySelectorAll('.faq_set .question');
questions.forEach((question) => {
    question.addEventListener('click', function() {
        const isActive = this.classList.contains('active');
        questions.forEach(q => {
            q.classList.remove('active');
            q.nextElementSibling.style.maxHeight = null
        });
        if (!isActive) {
            this.classList.add('active');
            const answer = this.nextElementSibling;
            answer.style.maxHeight = answer.scrollHeight + 'px'
        }
    })
})