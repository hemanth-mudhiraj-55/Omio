jQuery(document).ready(function() {
    const $askAIHeader = document.querySelector('.ask-ai-header');
    if ($askAIHeader) {
        const $queHeading = document.querySelector('.question-heading');
        const $subHeading = document.querySelector('.sub-heading');
        const $queryTags = document.querySelector('.query-tags');
        jQuery.ajax({
            url: aiscript_ajax_object.ajaxurl,
            type: "post",
            dataType: "json",
            data: {
                action: "get_ai_que_ans",
                current_url: window.location.href
            },
            success: function(response) {
                if (response.status == 'success') {
                    console.log('Genie API Success:', response);
                    $queHeading.innerHTML = `<strong>${response.heading}</strong>`;
                    $subHeading.innerHTML = response.sub_heading;
                    const questions = response.questions;
                    let questionsItems = '';
                    if (Array.isArray(questions) && questions.length > 0) {
                        for (let i = 0; i < questions.length; i++) {
                            questionsItems += `<a class="query-tag">${questions[i]}</a>`
                        }
                    }
                    $queryTags.innerHTML = questionsItems
                } else {
                    console.error('Genie API Error:', response.msg || 'An unknown error occurred.')
                }
            },
            error: function(xhr, status, error) {
                console.error('Genie Network Error:', error);
                console.log('Status:', status)
            }
        });
        const $askAITitle = document.querySelector('.ask-ai-title');
        const $aiInput = document.getElementById('aiQueryInput');
        const $aiBtn = document.getElementById('aiQueryBtn');
        const $aiTyping = document.querySelector('.ask-ai-typing');
        const $askAILoading = document.querySelector('.ask-ai-loading');
        const $dotsLoader = document.querySelector('.dots-loader');
        const $aiLoader = document.getElementById('aiLoader');
        const $queryTag = document.querySelectorAll('.query-tag');
        const $askAIMessages = document.querySelector('.ask-ai-messages');
        const $askAIMessage = document.querySelector('.ask-ai-message');
        $askAIHeader.addEventListener('click', function() {
            this.closest('.ask-ai-container').classList.toggle('collapsed');
            $aiInput.focus();
            if (this.closest('.ask-ai-container').classList.contains('collapsed')) {
                $askAITitle.innerText = 'How can I help you?';
                $askAIHeader.style.backgroundColor = '#fff'
            } else {
                $askAITitle.innerText = 'Ask AI';
                $askAIHeader.style.backgroundColor = '#f2f3f6'
            }
        });
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('query-tag')) {
                $aiInput.value = e.target.textContent;
                $aiBtn.click()
            }
        });
        let typingTimer;
        const doneTypingInterval = 1000;
        $aiInput.addEventListener('input', function(event) {
            $aiTyping.textContent = 'Typing...';
            clearTimeout(typingTimer);
            typingTimer = setTimeout(function() {
                $aiTyping.textContent = ''
            }, doneTypingInterval);
            autoResizeInput()
        });

        function autoResizeInput() {
            $aiInput.style.height = "auto";
            $aiInput.style.height = Math.min($aiInput.scrollHeight, 120) + "px";
            const inputValue = $aiInput.value;
            const inputLength = inputValue.split('\n').length;
            const lineHeight = parseInt(getComputedStyle($aiInput).lineHeight, 10);
            const linesCount = Math.floor($aiInput.scrollHeight / lineHeight);
            const mediaQuery = window.matchMedia('(max-width: 767px)');
            if (inputLength === 1) {
                $aiBtn.style.right = "25px";
                $aiBtn.style.top = "25px"
            }
            if (inputLength === 1 && linesCount > 2) {
                console.log("A line break exists in the text!");
                $aiInput.classList.add('input-border-radius');
                if (mediaQuery.matches) {
                    $aiBtn.style.right = "25px";
                    $aiBtn.style.top = "30px"
                } else {
                    $aiBtn.style.right = "35px";
                    $aiBtn.style.top = "50px"
                }
            }
            if (inputLength > 1) {
                if (mediaQuery.matches) {
                    $aiBtn.style.right = "25px";
                    $aiBtn.style.top = "25px"
                } else {
                    $aiBtn.style.right = "35px";
                    $aiBtn.style.top = "50px"
                }
            }
            if (inputLength > 2) {
                $aiInput.classList.add('input-border-radius');
                if (mediaQuery.matches) {
                    $aiBtn.style.right = "25px";
                    $aiBtn.style.top = "50px"
                }
            }
            if (inputLength < 3 && linesCount < 3) {
                $aiInput.style.borderRadius = "100px";
                $aiInput.classList.remove('input-border-radius')
            }
        }

        function cleanString(keywordsStr) {
            const regex1 = /<[^>]*>/g;
            let keywords = keywordsStr.replace(regex1, '');
            const regex2 = /["'\\\/|{}`~@#$%^&*\(\)_<>]/g;
            keywords = keywords.replace(regex2, '');
            return keywords.trim()
        }
        $aiInput.addEventListener('keydown', function(event) {
            if (event.key === "Enter") {
                if (event.shiftKey) {
                    autoResizeInput()
                } else {
                    event.preventDefault();
                    const aiQueryInput = $aiInput.value.replace(/\n/g, "<br>");
                    if (aiQueryInput.trim()) {
                        getAiQueryResult(aiQueryInput);
                        $askAIMessage.insertAdjacentHTML('beforeend', `<div class="ask-ai-msg user-msg">${cleanString(aiQueryInput)}</div>`)
                    }
                }
            }
        });
        $aiBtn.addEventListener('click', () => {
            const aiQueryInput = $aiInput.value.replace(/\n/g, "<br>");
            if (aiQueryInput.trim()) {
                getAiQueryResult(aiQueryInput);
                $askAIMessage.insertAdjacentHTML('beforeend', `<div class="ask-ai-msg user-msg">${cleanString(aiQueryInput)}</div>`)
            }
        });

        function formatLastUrlPart(url) {
            if (!url || typeof url !== "string")
                return url;
            const parts = url.trim().split('/').filter(Boolean);
            let lastPart = parts.pop();
            if (!lastPart)
                return url;
            if (/^[.,]+$/.test(lastPart) && parts.length > 0) {
                lastPart = parts.pop()
            }
            if (url.includes("google.com/maps")) {
                lastPart = lastPart.replace(/\+/g, " ");
                lastPart = decodeURIComponent(lastPart)
            }
            const cleaned = lastPart.replace(/[-_]/g, ' ');
            const formatted = cleaned.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            return formatted
        }

        function linkify(text) {
            const urlRegex = /(https?:\/\/[^\s()]+|www\.[^\s()]+)/g;
            return text.replace(urlRegex, function(url) {
                let href = url;
                if (!href.startsWith("http")) {
                    href = "http://" + href
                }
                return `<a href="${href}" target="_blank"><span class="ask-ai-link"><i class="bi bi-link-45deg"></i>${formatLastUrlPart(url)}</span></a>`
            })
        }

        function generateRandomId(length = 8) {
            const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * chars.length);
                result += chars[randomIndex]
            }
            return result
        }

        function getAiQueryResult(aiQueryInput, hasRetried = !1) {
            let queryResult = '';
            let summaryText = '';
            let summaryMarkedHtml = '';
            let sourcesItems = '';
            let followUpQuestions = '';
            let vacanciesItems = '';
            let aiContent = '';
            let baseSpeed = 5;
            let randId = generateRandomId();
            jQuery.ajax({
                type: "post",
                dataType: "json",
                url: aiscript_ajax_object.ajaxurl,
                data: {
                    aiQueryInput: cleanString(aiQueryInput),
                    action: 'get_ai_query_result'
                },
                beforeSend: function() {
                    $aiInput.disabled = !0;
                    $aiBtn.disabled = !0;
                    $aiInput.value = '';
                    $aiInput.style.height = "68px";
                    $aiBtn.style.right = "25px";
                    $aiBtn.style.top = "25px";
                    $aiLoader.style.display = "block";
                    $askAILoading.textContent = "Please wait...";
                    jQuery(".ask-ai-messages").animate({
                        scrollTop: jQuery(".ask-ai-messages")[0].scrollHeight
                    }, 500)
                },
                success: function(data) {
                    console.log(data);
                    if (data.status == 'success') {
                        $aiLoader.style.display = "none";
                        $askAILoading.textContent = '';
                        let sources = data.sources;
                        let related_queries = data.related_queries;
                        let vacancies = data.vacancies;
                        if (data.answer) {
                            summaryText = linkify(data.answer);
                            if (Array.isArray(sources) && sources.length > 0) {
                                sourcesItems += `<p class="mt-3"><strong>Sources:</strong></p><ul>`;
                                for (let i = 0; i < sources.length; i++) {
                                    let sourceURL = sources[i];
                                    let title = formatLastUrlPart(sourceURL);
                                    sourcesItems += `<li><a href="${sourceURL}" target="_blank"><span class="ask-ai-link"><i class="bi bi-link-45deg"></i>${title}</span></a></li>`
                                }
                                sourcesItems += `</ul>`
                            }
                            if (Array.isArray(related_queries) && related_queries.length > 0) {
                                followUpQuestions += `<p class="mt-3"><strong>You may be interested in:</strong></p><div class="query-tags py-1">`;
                                for (let i = 0; i < related_queries.length; i++) {
                                    followUpQuestions += `<a class="query-tag">${related_queries[i]}</a>`
                                }
                                followUpQuestions += `</div>`
                            }
                            if (Array.isArray(vacancies) && vacancies.length > 0) {
                                vacanciesItems += `<p class="mt-3"><strong>Vacancies:</strong></p><ul>`;
                                for (let i = 0; i < vacancies.length; i++) {
                                    vacanciesItems += `<li><a href="${vacancies[i].gl_website_job_url}" target="_blank"><span class="ask-ai-link"><i class="bi bi-link-45deg"></i>${vacancies[i].designation}</span></a></li>`
                                }
                                vacanciesItems += `</ul>`
                            }
                            aiContent = summaryText + sourcesItems + followUpQuestions;
                            aiContent = aiContent.replace(/<\/?p>/g, '').replace(/[\[\]]/g, '');
                            summaryMarkedHtml = marked.parse(aiContent);
                            queryResult += `<div class="ask-ai-msg ai-msg">
                                                    <div class="ai-avatar">
                                                        <img src="${aiscript_ajax_object.siteurl}/wp-content/themes/globallogic/images/aiglyph.svg" width="25" height="25" alt="AI Icon" />
                                                    </div>
                                                    <div class="ai-content" id="summary-${randId}">`;
                            queryResult += aiContent;
                            queryResult += `</div>`;
                            queryResult += `</div>`;
                            $askAIMessage.insertAdjacentHTML('beforeend', queryResult);
                            const summaryOutput = document.getElementById(`summary-${randId}`);
                            typeText(summaryOutput, summaryMarkedHtml, baseSpeed)
                        }
                    } else {
                        if (!hasRetried) {
                            console.log("In success, but if PHP code send fail Retrying once...");
                            setTimeout(function() {
                                console.log("Executed after 1 second");
                                getAiQueryResult(aiQueryInput, !0)
                            }, 2000)
                        } else {
                            $aiLoader.style.display = "none";
                            $askAILoading.innerHTML = `<p style="color:#f9643d;font-size:14px;">${data.msg}</p>`
                        }
                        $aiInput.disabled = !1;
                        $aiBtn.disabled = !1;
                        $aiInput.focus()
                    }
                },
                error: function(xhr, status, error) {
                    console.warn("AJAX Xhr: ", xhr);
                    console.warn("AJAX Status: ", xhr.status);
                    console.warn("AJAX Error: ", error);
                    const errMsg = "My apologies, I'm experiencing some technical difficulties on my end. We're working to fix it. Please try again soon.";
                    if (!hasRetried) {
                        console.log("Retrying once...");
                        setTimeout(function() {
                            getAiQueryResult(aiQueryInput, !0)
                        }, 2000)
                    } else {
                        $dotsLoader.style.display = "none";
                        $askAILoading.innerHTML = `<p style="color:#f9643d;font-size:14px;">${errMsg}</p>`;
                        console.log("Error (" + xhr.status + "): " + error)
                    }
                    $aiInput.disabled = !1;
                    $aiBtn.disabled = !1;
                    $aiInput.focus()
                }
            })
        }

        function typeText(element, html, baseSpeed = 20) {
            const $aiInput = document.getElementById('aiQueryInput');
            const $aiBtn = document.getElementById('aiQueryBtn');
            $aiInput.disabled = !0;
            $aiBtn.disabled = !0;
            element.innerHTML = '';
            let index = 0;
            let tempHtml = '';

            function type() {
                document.querySelector('.ai-avatar img').style.width = '25px !important';
                if (index < html.length) {
                    const currentChar = html[index];
                    if (currentChar === '<') {
                        const tagEnd = html.indexOf('>', index);
                        const fullTag = html.slice(index, tagEnd + 1);
                        tempHtml += fullTag;
                        index = tagEnd
                    } else {
                        tempHtml += currentChar
                    }
                    element.innerHTML = tempHtml;
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "end"
                    });
                    index++;
                    setTimeout(type, baseSpeed)
                } else {
                    Prism.highlightAll();
                    $aiInput.disabled = !1;
                    $aiBtn.disabled = !1
                }
            }
            type()
        }
    }
})