const itemEl = document.querySelectorAll('li.item');
console.log('Number of categories:' , itemEl.length);

itemEl.forEach((title) => {
    console.log('Category:' , title.querySelector('h2').textContent);
    console.log('Elements:' , title.querySelectorAll('li').length);
});