const dataLoader = async (isLoaded) => {
    const res = await fetch(' https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const allData = data.data.tools;
    displayData(allData, isLoaded)
    // console.log(data.data);
}
const cartContainer = document.getElementById('card-container');
const displayData = (allData, isLoaded) => {
    if(allData.length > 6 && !isLoaded){
        allData = allData.slice(0, 6)
    }
    cartContainer.innerHTML = '';
    allData.forEach(data =>{
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
                  <button onclick='detailInfo("${data.id}")' class="btn btn-primary">SEE DETAILS</button>
                </div>
                  </div>
                </div>
    `;
    cartContainer.appendChild(div);
})    
};
// show more button  function//
const showMorebtn = document.getElementById('show-more-btn');
function showMore () {
    dataLoader(true);
    showMorebtn.classList.add('hidden');
}
const detailInfo = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    const dataId= await res.json();
    displayDetails(dataId)
    // console.log(dataId.data);
    }
    // show details information //
    const displayDetails = (dataId) =>{
        console.log(dataId.data.features[1].feature_name);
        const detailContainer = document.getElementById('details-container');
        detailContainer.innerHTML = `
        <img src="${dataId.data.image_link}" alt="see details">
        <h3 class="font-bold text-2xl">${dataId?.data?.tool_name}</h3>
        <h3 class="font-semibold text-lg">${dataId?.data?.description}</h3>
        <h2 class="card-title">Features</h2>
                  <p>1.${dataId.data.features[1].feature_name}</p>
                  <p>2.${dataId.data.features[2].feature_name}</p>
                  <p>3.${dataId.data.features[3].feature_name}</p>
                  
                  
                  
        `

        details_modal.showModal()
    }
dataLoader(false);