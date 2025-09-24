const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if (isSafari) document.documentElement.classList.add('is-safari');
