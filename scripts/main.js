requirejs(['utils'], function (utils) {
    const sum = utils.sum(1, 2);
    const span = document.querySelector('.js-sum');

    if (span) span.innerText = sum;
});