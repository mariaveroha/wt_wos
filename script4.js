for (let i = 0; i<3;i++) { 
        let button = document.querySelectorAll ('.button')
        button[i].addEventListener ('click', function (){ 
            alert ('you clicked')
        } 
        )
}