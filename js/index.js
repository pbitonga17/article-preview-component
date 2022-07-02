'use strict';

const shareBtn = document.querySelector('.share-icon');
const socMed = document.querySelector('.soc-med');

shareBtn.addEventListener('click', () => {
    socMed.classList.toggle('hidden');
});
