
async function nameData(event) {
    try {
      
        let element = document.getElementById('search').value;
        
        // let value = element.value;
        //console.log(element);

        let data = await fetch(`https://api.openbrewerydb.org/breweries?by_city=${element}&per_page=6`);
        let res = await data.json();

        //let breweryTypeElement = document.getElementById('brewery_type');
        // if (breweryTypeElement) {
        //   let breweryType = breweryTypeElement.value;
        // //   if (breweryType !== 'all') {
        // //     res = res.filter((item) => item.brewery_type === breweryType);
        // //   }
        // }

        //console.log(res);
        document.querySelector('.data_area').innerHTML = '';

        res.forEach((i) => {
            let contentdiv = document.createElement('div');
            contentdiv.setAttribute('class', 'content-parent');
            contentdiv.innerHTML = `
              <p class="items">Name : ${i.name}</p>
              <p class="items">Type : ${i.brewery_type}</p>
              <p class="items">Address : ${i.street}</p>
              <p class="items" >Website : ${i.website_url}</p>
              <p class="items">Phone : ${i.phone}</p>
              <p class="items">City : ${i.city}</p>
            `;
            document.querySelector('.data_area').append(contentdiv);
            //console.log(i.state);
        });


    } catch (err) {
        console.log(err);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('search').addEventListener('click', nameData);
});

function reset() {
    document.getElementById('search').value = '';
    // let breweryTypeElement = document.getElementById('brewery_type');
    // if (breweryTypeElement) {
    //     breweryTypeElement.selectedIndex = 0;
    // }
    document.querySelector('.data_area').innerHTML = '';
}