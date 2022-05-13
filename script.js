
let api = {
    data: [
        {
            title: 'Дознаватель',
            year: 2022,
            country: 'Великобритания',
            img: 'img/dozn.png'
        },
        {
            title: 'Голубоглазый',
            year: 2021,
            country: 'Канада',
            img: 'img/blue.png'
        }
    ]
};

let innerHtml = '';
api.data.forEach(function (item) {
    let outerDiv = document.createElement('div');
    outerDiv.classList.add('col-3');
    let divCard = document.createElement('div');
    divCard.classList.add('card');
    divCard.style.width = '12rem';
    let image = document.createElement('img');
    image.src = item.img;
    image.classList.add ('card-img-top');
    divCard.append (image);
    //divCard.classList.add ('card-text');
    divCard.append (item.title + '\n' + item.year + item.country );
    let button = document.createElement ('button');
    button.style.height = '50px';
    button.append ('Смотреть');
    divCard.append (button);
    outerDiv.append(divCard);
    document.getElementById('main_wrapper').append(outerDiv);



   // innerHtml = innerHtml + '<div class="col-3"><div class="card my-4" style="width: 12rem;"><img src="'+item.img+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title"></h5>' +
   //     '<p class="card-text"> <b>'+item.title+'</b><br> '+item.year+' '+item.country+', Фантастика</p>' +
   //     '<a href="#" class="btn btn-primary">Смотреть</a>' +
   //     '</div>' +
   //     '</div>' +
   //     '</div>'
});
//document.getElementById('main_wrapper').innerHTML = innerHtml;

// let serials = [
//     {'name': 'Чикатило'},
//     {'name': 'Чикаго'},
// ];
// let search = document.getElementById('search');
// search.addEventListener('input', function () {
//     //this = search
//     let query = this.value.toLowerCase(); //чика
//     const data = new FormData();
//     data.append('q', query);
//     //fetch('http://d7mxgn3kr8v4.net/engine/ajax/search.php?q='+encodeURIComponent(query), {
//     fetch('http://d7mxgn3kr8v4.net/engine/ajax/search.php', {
//         method: 'POST',
//         body: data,
//         mode: 'no-cors'
//     })
//         .then(function (response) {
//             return response.text();
//         })
//         .then(function (data) {
//             console.log(data);
//         });
//     // serials.forEach(function (item) {
//     //     if (item.name.toLowerCase().includes(query)) {
//     //         console.log(item.name);
//     //     }
//     // })
// });

// fetch(that.getAttribute('formaction'), {
//     headers: {
//         'X-CSRF-TOKEN': document.querySelector('[name="csrf_token"]').content
//     },
//     method: 'POST',
//     body: new FormData(document.getElementById('product'))
// })
//     .then(response => {
//         return response.json()
//         //window.location.reload();
//     })
//     .then(data => {
//         console.log(data);
//         if (data.status === true) {
//             window.location.href = data.url;
//         }
//     });