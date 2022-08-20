const nav_btn = document.querySelector('.menu-btn');
const right = document.querySelector('.right');
const slideLink = document.querySelectorAll('.slide-link');
const activeCustomize = document.querySelector('.Customize');
const activeImg = document.querySelector('.active-img');
const customizeHeader = document.querySelector('.customize-header');
const customizeParagraph = document.querySelector('.customize-paragraph');
const scrollUp = document.querySelector('.top-arrow');
nav_btn.addEventListener('click', () => {

right.classList.toggle("slide-in");

})

scrollUp.addEventListener('click',() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})




slideLink.forEach(link => link.addEventListener('click' , (e) => {
    e.preventDefault();
}))

slideLink[0].addEventListener('click', () => {
    activeImg.style.backgroundImage = 'url(../images/025.webp)';

    customizeHeader.innerText = 'Customize your drink';

    customizeParagraph.innerText = 'Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.'

} )


slideLink[1].addEventListener('click', () => {
    activeImg.style.backgroundImage = 'url(../images/050.webp)';

    customizeHeader.innerText = 'Brewed hot coffee, bakery item or hot tea';

    customizeParagraph.innerText = 'Pair coffee cake or an almond croissant with your fresh cup of hot brew.'

} )

slideLink[2].addEventListener('click', () => {
    activeImg.style.backgroundImage = 'url(../images/150.webp)';

    customizeHeader.innerText = 'Handcrafted drink, hot breakfast or parfait';

    customizeParagraph.innerText = 'Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink.'

} )

slideLink[3].addEventListener('click', () => {
    activeImg.style.backgroundImage = 'url(../images/250.webp)';

    customizeHeader.innerText = 'Salad, sandwich or protein box';

    customizeParagraph.innerText = 'Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box.'

} )

slideLink[4].addEventListener('click', () => {
    activeImg.style.backgroundImage = 'url(../images/500.webp)';

    customizeHeader.innerText = 'Select merchandise or at-home coffee';

    customizeParagraph.innerText = 'Take home a signature cup, a bag of coffee or your choice of select coffee accessories.'

} )




