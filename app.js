let nav = document.querySelector('nav');
let logo = document.getElementById('navbar-logo');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 20) {
        nav.classList.add('bg-black');
        logo.classList.add('logo-upper-scroll');
    } else {
        nav.classList.remove('bg-black');
        logo.classList.remove('logo-upper-scroll');
    }
})


// stagger items
gsap.fromTo('.accordion-item', { autoAlpha: 0, scale: 0.9 }, { duration: 1, autoAlpha: 1, scale: 1, ease: Power1.easeInOut, stagger: .05 });

// function open and close accordion itens
const accordionItems = document.querySelectorAll(".accordion-item")
accordionItems.forEach(itemAccordion => {
    // accordion content
    const accordionTitle = itemAccordion.querySelector(".title")
    const accordionContent = itemAccordion.querySelector(".content")
    const accordionArrow = itemAccordion.querySelector(".arrow")

    // on click title
    accordionTitle.addEventListener("click", event => {
        // prevent click
        event.preventDefault()

        // check if accordion item is open
        if (!itemAccordion.classList.contains("-active")) {
            // close others accordions
            const accordionItemsActive = document.querySelectorAll(".accordion-item.-active")
            accordionItemsActive.forEach(itemAccordionActive => {
                const accordionContent = itemAccordionActive.querySelector(".content")
                const accordionArrow = itemAccordionActive.querySelector(".arrow")

                // remove active class accordion item
                itemAccordionActive.classList.remove("-active")

                // close content
                gsap.to(accordionContent, {
                    duration: .5,
                    height: 0,
                    display: "none",
                    autoAlpha: 0,
                    ease: "expo.inOut"
                })

                // rotate arrow
                gsap.to(accordionArrow, {
                    duration: .5,
                    autoAlpha: 0,
                    y: -10,
                    ease: "back.in",
                    onComplete: function() {
                        gsap.set(accordionArrow, { rotation: 0 })
                    }
                })
                gsap.to(accordionArrow, { duration: .5, autoAlpha: 1, y: 0, ease: "back.out", delay: .5 })
            })

            // add active class accordion item
            itemAccordion.classList.add("-active")

            // open content 
            gsap.set(accordionContent, { height: "auto", display: "block", autoAlpha: 1 })
            gsap.from(accordionContent, { duration: .5, height: 0, display: "none", autoAlpha: 0, ease: "expo.inOut" })

            // rotate arrow
            gsap.to(accordionArrow, {
                duration: .5,
                autoAlpha: 0,
                y: 10,
                ease: "back.in",
                onComplete: function() {
                    gsap.set(accordionArrow, { rotation: 180 })
                }
            })
            gsap.to(accordionArrow, { duration: .5, autoAlpha: 1, y: 0, ease: "back.out", delay: .5 })

        } else {
            // remove active class accordion item
            itemAccordion.classList.remove("-active")

            // close content
            gsap.to(accordionContent, { duration: .5, height: 0, display: "none", autoAlpha: 0, ease: "expo.inOut" })

            // rotate arrow
            gsap.to(accordionArrow, {
                duration: .5,
                autoAlpha: 0,
                y: -10,
                ease: "back.in",
                onComplete: function() {
                    gsap.set(accordionArrow, { rotation: 0 })
                }
            })
            gsap.to(accordionArrow, { duration: .5, autoAlpha: 1, y: 0, ease: "back.out", delay: .5 })
        }
    })
})


AOS.init();


function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn);
    } else {
        document.attachEvent('onreadystatechange', function() {
            if (document.readyState != 'loading')
                fn();
        });
    }
}


function themeScripts() {


    // form sender
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        var re = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
        return re.test(phone);
    }

    var serialize = function(form) {
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


    document.getElementById('formSubmit').addEventListener('click', function(e) {

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


        var contactForm = document.querySelector('#contactForm');
        var data = serialize(contactForm);

        var request = new XMLHttpRequest();
        request.open('POST', './formsubmit.php', true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.send(data);


        request.onreadystatechange = function() {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    errorDiv.innerHTML = '<span>Wiadomość została wysłana</span>';
                    setTimeout(function() {
                        contactForm.reset();
                    }, 800);
                } else {
                    errorDiv.innerHTML = 'Wystąpił błąd. Wiadomość nie została wysłana';
                    console.log('Error: ' + request.status);
                }
            }
        };


    }, false);



}

ready(themeScripts);