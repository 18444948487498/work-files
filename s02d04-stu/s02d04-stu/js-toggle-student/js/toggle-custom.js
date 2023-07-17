function pourcoffe(x){
    x.classList.toggle("bi-cup-hot")
}


function showhide(){
    let x = document.getElementById('hidden')
    if(x.style.display === 'block'){
        x.style.display = 'none'
    }else{
        x.style.display = 'block'
    }
}


function swapcontent(){
    let x = document.getElementById('text')
    if(x.innerHTML === 'good morning'){
        x.innerHTML = 'good evening'
    }else{
        x.innerHTML = 'good morning'
    }
}


function addclass(){
    let a = document.getElementById('mytext')
    a.classList.toggle('mystyle')
}