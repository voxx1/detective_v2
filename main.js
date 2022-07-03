function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn);
    } else {
        document.attachEvent('onreadystatechange', function () {
            if (document.readyState != 'loading')
                fn();
        });
    }
}


function themeScripts() {

    function fadeOut(el) {
        el.style.opacity = 1;

        (function fade() {
            if ((el.style.opacity -= .1) < 0) {
                el.style.display = 'none';
            } else {
                requestAnimationFrame(fade);
            }
        })();
    }

    function fadeIn(el, display) {
        el.style.opacity = 0;
        el.style.display = display || 'block';

        (function fade() {
            var val = parseFloat(el.style.opacity);
            if (!((val += .1) > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    }

    // baguetteBox.run('.gallery');
    var lightbox1 = GLightbox({
        selector: '.lightbox1',
        loop: true,
        autoplayVideos: true,
    });
    var lightbox2 = GLightbox({
        selector: '.lightbox2',
        loop: true,
        autoplayVideos: true,
    });
    var lightbox3 = GLightbox({
        selector: '.lightbox3',
        loop: true,
        autoplayVideos: true,
    });
    var lightbox4 = GLightbox({
        selector: '.lightbox4',
        loop: true,
        autoplayVideos: true,
        plyr: {
            config: {
                muted: true,
            }
        }
    });
    var lightbox5 = GLightbox({
        selector: '.lightbox5',
        loop: true,
        autoplayVideos: true,
    });
    var lightbox6 = GLightbox({
        selector: '.lightbox6',
        loop: true,
        autoplayVideos: true,
    });
    var lightbox7 = GLightbox({
        selector: '.lightbox7',
        loop: true,
        autoplayVideos: true,
    });
    var lightbox8 = GLightbox({
        selector: '.lightbox8',
        loop: true,
        autoplayVideos: true,
    });

    // slider
    if (document.querySelector('.main-slider')) {

        var slider = tns({
            container: '.main-slider__slides',
            autoplay: true,
            autoplayTimeout: 3500,
            nav: true,
            controls: false,
            autoplayButtonOutput: false,
            mouseDrag: true,
        });
    
    }

    // responsive menu
    document.querySelector('.site-hamburger').onclick = function (event) {

        event.currentTarget.classList.toggle('site-hamburger--opened');

        if (event.currentTarget.classList.contains('site-hamburger--opened')) {
            event.currentTarget.setAttribute('aria-expanded', 'true');
        } else {
            event.currentTarget.setAttribute('aria-expanded', 'false');
        }

        document.querySelector('.site-menu').classList.toggle('site-menu--collapse');
    };

    // close mobile menu after menu item click
    function closeMenu() {
        document.querySelector('.site-hamburger').classList.remove('site-hamburger--opened');
        document.querySelector('.site-hamburger').setAttribute('aria-expanded', 'false');
        document.querySelector('.site-menu').classList.add('site-menu--collapse');
    }
    if (window.innerWidth < 768) {
        var menuElements = document.querySelectorAll('.site-menu__item');
        for (var i = 0; menuElements.length > i; i++) {
            menuElements[i].addEventListener('click', closeMenu);
        }
    }



    var scroll0 = new SmoothScroll('.scroll0', {
        easing: 'easeInOutQuint'
    });
    var scroll1 = new SmoothScroll('.scroll1', {
        easing: 'easeInOutQuint',
        offset: 100
    });
    var scroll2 = new SmoothScroll('.scroll2', {
        easing: 'easeInOutQuint',
        offset: 100
    });
    var scroll3 = new SmoothScroll('.scroll3', {
        easing: 'easeInOutQuint',
        offset: 100
    });
    var scroll4 = new SmoothScroll('.scroll4', {
        easing: 'easeInOutQuint'
    });
    var scroll5 = new SmoothScroll('.scroll5', {
        easing: 'easeInOutQuint',
        offset: 150
    });







    // cookies init
    new CookiesEuBanner(function () {
        // Your code here
    }, true);

    if (document.getElementById('cookies-eu-accept')) {
        document.getElementById('cookies-eu-accept').onclick = function () {
            this.parentNode.classList.add('cookies-info--hide');
        };
    }


    // fixed search and form 
    if (document.querySelector('.fixed-form')) {

        document.querySelector('.fixed-form').onmouseover = function () {
            this.classList.add('fixed-form-hover');
            // fadeIn(document.querySelector('.closeFixedForm'));            
        };
        document.querySelector('.fixed-form').onmouseleave = function () {
            this.classList.remove('fixed-form-hover');
            // fadeOut(document.querySelector('.closeFixedForm'));               
        };

        document.querySelector('.fixed-form__icon').ontouchstart = function () {
            document.querySelector('.fixed-form').classList.add('fixed-form-hover');
        };

        document.querySelector('.fixed-form__icon').ontouchend = function () {
            document.querySelector('.fixed-form').classList.remove('fixed-form-hover');
        };

    }



    // modal window
    if (document.querySelector('[data-toggle="modal"]')) {

        var modalButton = document.querySelectorAll('[data-toggle="modal"]');
        var closeButton = document.querySelectorAll('.modal__close');
        var assignedId;
        var modal;

        function toggleModal() {
            modal.classList.toggle('modal--show');
        }

        function windowOnClick(event) {
            if (event.target === modal) {
                toggleModal();
            }
        }

        for (var i = 0; modalButton.length > i; i++) {
            modalButton[i].onclick = function () {
                assignedId = this.getAttribute('data-for');
                modal = document.getElementById(assignedId);
            };
            modalButton[i].addEventListener('click', toggleModal);

        }

        for (i = 0; closeButton.length > i; i++) {
            closeButton[i].addEventListener('click', toggleModal);
        }

        window.addEventListener('click', windowOnClick);

    }


    var animateHTML = function () {
        var elems;
        var windowHeight;

        function init() {
            elems = document.querySelectorAll('.hidden');
            windowHeight = window.innerHeight;
            addEventHandlers();
            checkPosition();
        }

        function addEventHandlers() {
            window.addEventListener('scroll', checkPosition);
            window.addEventListener('resize', init);
        }


        function delay(element) {

            if (element.classList.contains('animate') && element.hasAttribute('data-delay')) {

                setTimeout(function () {
                    element.className = element.className.replace(
                        'hidden',
                        'fade-in'
                    );
                }, element.getAttribute('data-delay'), true);

            } else if (element.classList.contains('animate-bottom') && element.hasAttribute('data-delay')) {

                setTimeout(function () {
                    element.className = element.className.replace(
                        'hidden',
                        'fade-bottom'
                    );
                }, element.getAttribute('data-delay'), true);

            } else if (element.classList.contains('animate-left') && element.hasAttribute('data-delay')) {

                setTimeout(function () {
                    element.className = element.className.replace(
                        'hidden',
                        'fade-left'
                    );
                }, element.getAttribute('data-delay'), true);

            } else if (element.classList.contains('animate-right') && element.hasAttribute('data-delay')) {

                setTimeout(function () {
                    element.className = element.className.replace(
                        'hidden',
                        'fade-right'
                    );
                }, element.getAttribute('data-delay'), true);

            } else if (element.classList.contains('animate')) {
                element.className = element.className.replace(
                    'hidden',
                    'fade-in'
                );
            } else if (element.classList.contains('animate-bottom')) {
                element.className = element.className.replace(
                    'hidden',
                    'fade-bottom'
                );
            } else if (element.classList.contains('animate-left')) {
                element.className = element.className.replace(
                    'hidden',
                    'fade-left'
                );
            } else if (element.classList.contains('animate-right')) {
                element.className = element.className.replace(
                    'hidden',
                    'fade-right'
                );
            }

        }

        function checkPosition() {
            for (var i = 0; i < elems.length; i++) {
                var positionFromTop = elems[i].getBoundingClientRect().top;
                if (positionFromTop - windowHeight <= 0) {
                    delay(elems[i]);
                }
            }
        }

        return {
            init: init
        };
    };

    animateHTML().init();


    // form sender
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        var re = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
        return re.test(phone);
    }

    var serialize = function (form) {
        var serialized = [];
        for (var i = 0; i < form.elements.length; i++) {
            var field = form.elements[i];
            // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
            if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;
            // If a multi-select, get all selections
            if (field.type === 'select-multiple') {
                for (var n = 0; n < field.options.length; n++) {
                    if (!field.options[n].selected) continue;
                    serialized.push(encodeURIComponent(field.name) + '=' + encodeURIComponent(field.options[n].value));
                }
            }
            // Convert field data to a query string
            else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
                serialized.push(encodeURIComponent(field.name) + '=' + encodeURIComponent(field.value));
            }
        }
        return serialized.join('&');
    };

    function isEmptyOrSpaces(str) {
        return str === null || str.match(/^ *$/) !== null;
    }


    var errorDiv = document.querySelector('.info-error');
    var errorDiv2 = document.querySelector('.info-error2');


    document.getElementById('formSubmit').addEventListener('click', function (e) {

        e.preventDefault();

        var checkbox1 = document.getElementById('formcheckbox1');
        var checkbox2 = document.getElementById('formcheckbox2');

        var email = document.getElementById('formemail');
        var emailValue = email.value;

        var phone = document.getElementById('formtel');
        var phoneValue = phone.value;

        var name = document.getElementById('formname');
        var nameValue = name.value;


        //reset chebkoxes focus style
        checkbox1.nextElementSibling.classList.remove('focus');
        checkbox2.nextElementSibling.classList.remove('focus');


        if (isEmptyOrSpaces(phoneValue) && isEmptyOrSpaces(emailValue)) {

            if (isEmptyOrSpaces(nameValue)) {
                errorDiv.innerHTML = '<br>Uzupełnij pole imię i nazwisko.<br>';
                name.focus();
                return;
            } else if (isEmptyOrSpaces(emailValue)) {
                errorDiv.innerHTML = 'Uzupełnij pole email.';
                email.focus();
                return;
            }


        } else if (!isEmptyOrSpaces(emailValue) && !isEmptyOrSpaces(phoneValue)) {

            if (isEmptyOrSpaces(nameValue)) {
                errorDiv.innerHTML = 'Uzupełnij pole imię i nazwisko.';
                name.focus();
                return;
            } else if (!validatePhone(phoneValue)) {
                errorDiv.innerHTML = 'Numer telefonu jest nie poprawny.';
                phone.focus();
                return;
            } else if (isEmptyOrSpaces(emailValue)) {
                errorDiv.innerHTML = 'Uzupełnij pole email.';
                email.focus();
                return;
            } else if (!validateEmail(emailValue)) {
                errorDiv.innerHTML = 'Adres e-mail jest nie poprawny.';
                email.focus();
                return;
            } else if (!checkbox1.checked) {
                errorDiv.innerHTML = 'Wyraź zgodę na przetwarzanie danych osobowych.<br>';
                checkbox1.nextElementSibling.classList.add('focus');
                return;
            }

        } else if (!isEmptyOrSpaces(emailValue)) {

            if (isEmptyOrSpaces(nameValue)) {
                errorDiv.innerHTML = 'Uzupełnij pole imię i nazwisko.';
                name.focus();
                return;
            } else if (isEmptyOrSpaces(emailValue)) {
                errorDiv.innerHTML = 'Uzupełnij pole email.';
                email.focus();
                return;
            } else if (!validateEmail(emailValue)) {
                errorDiv.innerHTML = 'Adres e-mail jest nie poprawny.';
                email.focus();
                return;
            } else if (!checkbox1.checked) {
                errorDiv.innerHTML = 'Wyraź zgodę na przetwarzanie danych osobowych.<br>';
                checkbox1.nextElementSibling.classList.add('focus');
                return;
            }

        } else if (!isEmptyOrSpaces(phoneValue)) {

            if (isEmptyOrSpaces(nameValue)) {
                errorDiv.innerHTML = 'Uzupełnij pole imię i nazwisko.';
                name.focus();
                return;
            } else if (!validatePhone(phoneValue)) {
                errorDiv.innerHTML = 'Numer telefonu jest nie poprawny.';
                phone.focus();
                return;
            } else if (isEmptyOrSpaces(emailValue)) {
                errorDiv.innerHTML = 'Uzupełnij pole email.';
                email.focus();
                return;
            } else if (!validateEmail(emailValue)) {
                errorDiv.innerHTML = 'Adres e-mail jest nie poprawny.';
                email.focus();
                return;
            } else if (!checkbox1.checked) {
                errorDiv.innerHTML = 'Wyraź zgodę na przetwarzanie danych osobowych.<br>';
                checkbox1.nextElementSibling.classList.add('focus');
                return;
            }

        }



        checkbox1.nextElementSibling.classList.remove('focus');
        checkbox2.nextElementSibling.classList.remove('focus');


        var contactForm = document.querySelector('#contactForm');
        var data = serialize(contactForm);

        var request = new XMLHttpRequest();
        request.open('POST', './formsubmit.php', true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.send(data);


        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    errorDiv.innerHTML = '<span>Wiadomość została wysłana</span>';
                    setTimeout(function () {
                        contactForm.reset();
                    }, 800);
                } else {
                    errorDiv.innerHTML = 'Wystąpił błąd. Wiadomość nie została wysłana';
                    console.log('Error: ' + request.status);
                }
            }
        };


    }, false);



    document.getElementById('formSubmit2').addEventListener('click', function (e) {

        e.preventDefault();

        var checkbox1 = document.getElementById('formcheckbox3');
        var checkbox2 = document.getElementById('formcheckbox4');

        var email = document.getElementById('formemail2');
        var emailValue = email.value;

        var phone = document.getElementById('formtel2');
        var phoneValue = phone.value;

        var name = document.getElementById('formname2');
        var nameValue = name.value;


        //reset chebkoxes focus style
        checkbox1.nextElementSibling.classList.remove('focus');
        checkbox2.nextElementSibling.classList.remove('focus');


        if (isEmptyOrSpaces(phoneValue) && isEmptyOrSpaces(emailValue)) {

            if (isEmptyOrSpaces(nameValue)) {
                errorDiv2.innerHTML = 'Uzupełnij pole imię i nazwisko.';
                name.focus();
                return;
            } else if (isEmptyOrSpaces(emailValue)) {
                errorDiv2.innerHTML = 'Uzupełnij pole email.';
                email.focus();
                return;
            }

        } else if (!isEmptyOrSpaces(emailValue) && !isEmptyOrSpaces(phoneValue)) {

            if (isEmptyOrSpaces(nameValue)) {
                errorDiv2.innerHTML = 'Uzupełnij pole imię i nazwisko.';
                name.focus();
                return;
            } else if (!validatePhone(phoneValue)) {
                errorDiv2.innerHTML = 'Numer telefonu jest nie poprawny.';
                phone.focus();
                return;
            } else if (isEmptyOrSpaces(emailValue)) {
                errorDiv2.innerHTML = 'Uzupełnij pole email.';
                email.focus();
                return;
            } else if (!validateEmail(emailValue)) {
                errorDiv2.innerHTML = 'Adres e-mail jest nie poprawny.';
                email.focus();
                return;
            } else if (!checkbox1.checked) {
                errorDiv2.innerHTML = 'Wyraź zgodę na przetwarzanie danych osobowych.<br>';
                checkbox1.nextElementSibling.classList.add('focus');
                return;
            }

        } else if (!isEmptyOrSpaces(emailValue)) {

            if (isEmptyOrSpaces(nameValue)) {
                errorDiv2.innerHTML = 'Uzupełnij pole imię i nazwisko.';
                name.focus();
                return;
            } else if (isEmptyOrSpaces(emailValue)) {
                errorDiv2.innerHTML = 'Uzupełnij pole email.';
                email.focus();
                return;
            } else if (!validateEmail(emailValue)) {
                errorDiv2.innerHTML = 'Adres e-mail jest nie poprawny.';
                email.focus();
                return;
            } else if (!checkbox1.checked) {
                errorDiv2.innerHTML = 'Wyraź zgodę na przetwarzanie danych osobowych.<br>';
                checkbox1.nextElementSibling.classList.add('focus');
                return;
            }

        } else if (!isEmptyOrSpaces(phoneValue)) {

            if (isEmptyOrSpaces(nameValue)) {
                errorDiv2.innerHTML = 'Uzupełnij pole imię i nazwisko.';
                name.focus();
                return;
            } else if (!validatePhone(phoneValue)) {
                errorDiv2.innerHTML = 'Numer telefonu jest nie poprawny.';
                phone.focus();
                return;
            } else if (isEmptyOrSpaces(emailValue)) {
                errorDiv2.innerHTML = 'Uzupełnij pole email.';
                email.focus();
                return;
            } else if (!validateEmail(emailValue)) {
                errorDiv2.innerHTML = 'Adres e-mail jest nie poprawny.';
                email.focus();
                return;
            } else if (!checkbox1.checked) {
                errorDiv2.innerHTML = 'Wyraź zgodę na przetwarzanie danych osobowych.<br>';
                checkbox1.nextElementSibling.classList.add('focus');
                return;
            }

        }



        checkbox1.nextElementSibling.classList.remove('focus');
        checkbox2.nextElementSibling.classList.remove('focus');


        var contactForm = document.querySelector('#contactForm2');
        var data = serialize(contactForm);

        var request = new XMLHttpRequest();
        request.open('POST', './formsubmit2.php', true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.send(data);


        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    errorDiv2.innerHTML = '<span>Wiadomość została wysłana</span>';
                    setTimeout(function () {
                        contactForm.reset();
                    }, 800);
                } else {
                    errorDiv2.innerHTML = 'Wystąpił błąd. Wiadomość nie została wysłana';
                    console.log('Error: ' + request.status);
                }
            }
        };


    }, false);



}

ready(themeScripts);
