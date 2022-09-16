let sectCont = document.querySelector('.sectionCard')
// let sectCard1 = document.querySelector('.sectcard1')
let sliderContainer2 = document.getElementById('sliderContainer2')
let rightIcon = document.querySelector('.right_icon')
let leftIcon = document.querySelector('.left_icon')



fetch('././db/videos.json')
.then(resp=>resp.json())
.then(data=>{
    console.log(data);
    data.forEach(data=>{
        sectCont.innerHTML+=`
        <div class="sectionbir_card">
        <video src="${data.video}" controls></video>
    </div>
        
        `
    })
})



fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        data.results.forEach(movie => {
            sliderContainer2.innerHTML += `
        <div class="section1_card">
        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="">
        <p>${movie.title}</p>
        <i class="uil uil-bookmark-full"></i>
        </div>
        `
        })
        let count = 0;
        function slide() {
            for (let i = 0; i < sliderContainer2.children.length; i++) {
                sliderContainer2.children[i].style.transform = `translateX(${-300 * count}px)`
            }
        }
        setInterval(() => {
            if (count < sliderContainer2.children.length - 4) {
                count++;
                slide()
            } else {
                count = 0;
                slide()
            }

        }, 4000)
        leftIcon.addEventListener('click', () => {
            if (count > 0) {
                count--;
                slide();
            } else {
                count = 0;
                slide();
            }
        })

        rightIcon.addEventListener('click', () => {
            if (count < sliderContainer2.children.length - 4) {
                count++;
                slide();
            } else {
                count = 0;
                slide();
            }
        })



    })


