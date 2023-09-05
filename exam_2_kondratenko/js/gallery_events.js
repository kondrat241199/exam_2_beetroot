let modal = $('.modal');
let imgs = $('.gallery__content');
let modalImg = $('.modal__img')
let closeTarget = $('.modal__close-icon');
let slideBtn = $('#gallery-btn');
let hidenContent = $('.gallery__content-hide')

imgs.on('click', showModal)
closeTarget.on('click', closeModal)
slideBtn.on('click', toggleText)
slideBtn.on('click', seeMore)



function showModal(e) {
    let target = e.target
    if (target.tagName != 'IMG')
        return;
    modalImg.attr("src", target.getAttribute('src'))
    modal.css('display', 'flex')
}

function closeModal() {
    modal.css('display', 'none')
}
function seeMore() {
    hidenContent.slideToggle("slow")
}

function toggleText() {
    if (slideBtn.text() === 'SEE MORE') {
        slideBtn.text('HIDE')
        return;
    }
    slideBtn.text('SEE MORE')
}
