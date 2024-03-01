const dataLoader = async () => {
    const res = await fetch(' https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const allData = data.data.tools;
    displayData(allData)
    // console.log(data.data);
}
const displayData = (allData) => {
    allData.forEach(data =>{
        console.log(data);
    const cartContainer = document.getElementById('card-container');
    const div = document.createElement('div');
    div.classList = `card card-compact w-96 bg-gray-400 shadow-xl`;
    div.innerHTML = `
    <figure><img src="${data.image}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">Features</h2>
                  <p>1.${data.features[0]}</p>
                  <p>2.${data.features[1]}</p>
                  <p>3.${data.features[2]}</p>
                  <hr>
                  <div>
                  <h3 class="text-[25px] font-semibold my-2">${data.name}</h3>
                  <p>Published date:${data.published_in}</p>
                  <div class="card-actions justify-end">
                  <button class="btn btn-primary">SEE DETAILS</button>
                </div>
                  </div>
                </div>
    `;
    cartContainer.appendChild(div);
    })    
}
dataLoader();