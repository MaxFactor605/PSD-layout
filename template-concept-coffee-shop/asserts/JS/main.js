function changeReview(event, numb){
    let scroll = document.body.scrollTop
    console.log(document.body.scrollTop)
    currentReview = document.querySelector('.testimonials__review.active')
    currentReview.className = 'testimonials__review'
    currentBut = document.querySelector('.testimonials__element.active')
    currentBut.className = 'testimonials__element'
    review = document.querySelector(`#${numb}`)
    review.className += ' active'
    event.currentTarget.parentNode.className += ' active'
    document.body.scrollTop = scroll
} 

for (let but of document.querySelectorAll('.testimonials__link')){
    setInterval(but.click(), 5000)
}
