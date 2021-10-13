let item = document.querySelector('.item');
let limit = 25;
let pageCount = 1;
let postCount = 1;

const getData = () => {
    for(let i=0;i<=limit;i++){
        var p1 = document.createElement('p');
        p1.innerText = `Masai Student ${postCount++}`
        item.appendChild(p1);
    }
}

getData();

const showData = () => {
    setTimeout(()=>{
        pageCount++;
        getData()
    },600)
}

window.addEventListener('scroll', () => {
    const {scrollHeight, scrollTop, clientHeight} = document.documentElement;

    if(scrollTop + clientHeight >= scrollHeight){
        showData();
    }
}); 