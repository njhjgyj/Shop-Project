var getDetailTag1 = document.querySelectorAll('details');


for (let i = 0; i < getDetailTag1.length; i++) {

    getDetailTag1[i].addEventListener('click', () => {

        for (let j = 0; j < getDetailTag1.length; j++) {

            if (getDetailTag1[i] !== getDetailTag1[j]) {

                getDetailTag1[j].removeAttribute('open');

            };

        };

    });

};