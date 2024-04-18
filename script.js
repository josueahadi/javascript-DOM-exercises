function changeAllArticleColors() {
    const articles = document.querySelectorAll('#products article');
    for (article of articles) {
        article.classList.add('sale');
        console.log(article.outerHTML);
    }
    
}
changeAllArticleColors();