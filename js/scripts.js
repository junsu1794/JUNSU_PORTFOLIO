window.addEventListener('DOMContentLoaded', event => {

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );

    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// 모든 fade-in 클래스를 가진 요소를 선택합니다.
const fadeIns = document.querySelectorAll('.fade-in');

// 스크롤 이벤트를 감지하는 함수를 정의합니다.
function checkFadeIns() {
    fadeIns.forEach(fadeIn => {
        const fadeInPosition = fadeIn.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // section이 화면에 나타날 때 fade-in-visible 클래스를 추가합니다.
        if (fadeInPosition < windowHeight - 100) {
            fadeIn.classList.add('fade-in-visible');
        }
    });
}

// 스크롤 이벤트 리스너를 등록합니다.
window.addEventListener('scroll', checkFadeIns);
window.addEventListener('load', checkFadeIns); // 페이지 로드 시에도 체크합니다.
