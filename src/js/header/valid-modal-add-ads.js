console.log('привет, я тут1')


const form = document.getElementById('form');
console.log('привет, я тут 2', form);

const nameId = document.getElementById('nameBill');
console.log('привет, я тут 3', nameId);

const subjectId = document.getElementById('form-description');
console.log('привет, я тут 4', subjectId);
const selectCategoria = document.getElementById('category');
const priceId = document.getElementById('price');
const phoneId = document.getElementById('telefon');



const photoId = document.getElementById('photo');



form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
    /*uploadFileS(file);*/

})

/*FOTO 1
const formImageS = document.getElementById('upload-photoS');
const formPreviewS = document.getElementById('formPreviewS');


formImageS.addEventListener('change', () => {
    uploadFileS(formImageS.files[0]);
});

function uploadFileS(file) {
    if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
        alert('Разрешени только изображения .jpeg, .png, .gif');
        formImageS.value = '';
        return
    }
    if (file.size > 2 * 1024 * 1024) {
        alert('Файл должен быть менее 2 МБ');
        return;
    }
    const reader = new FileReader();
    reader.onload = function (e) {
        formPreviewS.innerHTML = `<img src = "${e.target.result}" alt="Фото" >`;
    };
    reader.onerror = function (e) {
        alert('Ошибка');
    };
    reader.readAsDataURL(file);
}
*/



function checkInputs() {



    const nameIdValue = nameId.value.trim();
    const subjectIdValue = subjectId.value.trim();
    /*const photoIdValue = photoId.value;*/
    const selectCategoriaValue = selectCategoria.value.trim();
    const priceIdValue = priceId.value;

    const phoneIdValue = phoneId.value.trim();

    console.log('priceIdValue', priceIdValue);


    /* назва товара*/
    if (nameIdValue === '') {
        nameId.classList.add('error');
        const nameSmall = document.querySelector('#name-small');
        nameSmall.innerHTML = ('Уведіть назву товару')

    } else {
        nameId.classList.add('success');
        nameId.classList.remove('error');
        const nameSmall = document.querySelector('#name-small');
        nameSmall.innerHTML = ('')
    }


    /**ОПИС ТОВАРУ */

    if (subjectIdValue === '') {
        subjectId.classList.add('error');
        const texttarea = document.querySelector('#small-textarea');
        texttarea.innerHTML = ('Заповніть поле texttarea');


    } else {
        subjectId.classList.add('success');
        subjectId.classList.remove('error');
        const texttarea = document.querySelector('#small-textarea');
        texttarea.innerHTML = ('');
    }




    /*Категорія товару*/

    if (selectCategoriaValue === '') {
        selectCategoria.classList.add('error');
        const selector = document.querySelector('#small-option');
        selector.innerHTML = ('Виберіть одну з пропонованих  категорій товару')

    } else {
        selectCategoria.classList.add('success');
        selectCategoria.classList.remove('error');
        const selector = document.querySelector('#small-option');
        selector.innerHTML = ('');
    }





    /*Ціна*/
    if (priceIdValue === '') {
        priceId.classList.add('error');
        const priceSmall = document.querySelector('#small-price');
        priceSmall.innerHTML = ('Введіть ціну на товар в грн в форматі 0.00')
    } else {
        priceId.classList.add('success');
        priceId.classList.remove('error');
        const priceSmall = document.querySelector('#small-price');
        priceSmall.innerHTML = ('');
    }





    /*Телефон*/
    if (phoneIdValue === '') {
        phoneId.classList.add('error');
        const phoneSmall = document.querySelector('#small-tel');
        phoneSmall.innerHTML = ('Введіть номер телефону в форматі +380')


    } else {
        phoneId.classList.add('success');
        phoneId.classList.remove('error');
        const phoneSmall = document.querySelector('#small-tel');
        phoneSmall.innerHTML = ('');
    }






};  