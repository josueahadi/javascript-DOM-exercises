// function changeAllArticleColors() {
//     const articles = document.querySelectorAll('#products article');
//     for (article of articles) {
//         article.classList.add('sale');
//         console.log(article.outerHTML);
//     }
    
// }
// changeAllArticleColors();


function attachBuyEvents() {
    const buttons = document.querySelectorAll('#products button');
    
    for (let button of buttons) {
        button.addEventListener('click', function(event){
            //console.log('BUY!')
            this.parentElement.classList.toggle('sale')
            console.log(this.parentElement.getAttribute('data-id'))
        });
    }

    // const articles = document.querySelectorAll('#products article');

    // for (let article of articles) {
    //     article.addEventListener('click', function(){
    //         console.log(this.getAttribute('data-id'));
    //     });
    // }
}

attachBuyEvents();