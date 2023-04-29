const documentHtml = document,
productNameInput = documentHtml.getElementById("productName"),
productPriceInput = documentHtml.getElementById("productPrice"),
productCategoryInput = documentHtml.getElementById("productCategory"),
productDescInput = documentHtml.getElementById("productDesc"),
tbody = documentHtml.getElementById("tbody"),
button1 = documentHtml.querySelector(".btn1"),
button2 = documentHtml.querySelector(".btn2"),
button3 = documentHtml.querySelector(".btn3"),
searchInput = documentHtml.getElementById("searchInput")
console.log(button3);


searchInput.oninput =function (){
searchData()
}


let proArray = [];
if (localStorage.getItem("products") != null) {
  proArray = JSON.parse(localStorage.getItem("products"));
  displayProducts(proArray)
}

function addProduct() {
  var product = {
    proName: productNameInput.value,
    proPrice: productPriceInput.value,
    proCategory: productCategoryInput.value,
    proDesc: productDescInput.value,
  }
  proArray.push(product)
  localStorage.setItem("products", JSON.stringify(proArray))
  displayProducts(proArray)
  clear()
}

button1.onclick = addProduct;

function displayProducts() {
  let cartoons = ``;
  term = searchInput.value.toLowerCase()
  for (let i = 0; i < proArray.length; i++) {
    if(proArray[i].proName.toLowerCase().includes(term)){
      cartoons += `<tr>
      <td>${proArray[i].proName.toLowerCase().replaceAll(term,`<span class="bg-warning">${term}</span>`)}</td>
      <td>${proArray[i].proPrice}</td>
      <td>${proArray[i].proCategory}</td>
      <td>${proArray[i].proDesc}</td>
      <td><button onclick=updatePro(${i}) class="btn btn-warning btn-sm">UPDATE</button></td>
      <td><button onclick=deletePro(${i}) class="btn btn-danger btn-sm">DELETE</button></td>
    </tr>`
    }

  }
  tbody.innerHTML = cartoons;
}

function clear() {
  productNameInput.value = ``;
  productPriceInput.value = ``;
  productCategoryInput.value = ``;
  productDescInput.value = ``;
}

button2.onclick = clear;

function deletePro(index) {
  proArray.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(proArray))
  displayProducts();
}

function updatePro(para) {
  productNameInput.value = proArray[para].proName;
  productPriceInput.value = proArray[para].proPrice;
  productCategoryInput.value = proArray[para].proCategory;
  productDescInput.value = proArray[para].proDesc;
  deletePro(para)
}

function clearAll() {
  clear()
  proArray = [];
  displayProducts()
}

button3.onclick = clearAll;


function searchData(){
  displayProducts()
}
























































































































































// let productNameInput = document.getElementById("productName");
// let productPriceInput = document.getElementById("productPrice");
// let productCategoryInput = document.getElementById("productCategory");
// let productDescInput = document.getElementById("productDesc");
// let button1 = document.getElementById("btn1");
// let button2 = document.getElementById("btn2");
// let button3 = document.getElementById("btn3");
// let tbody = document.getElementById("tbody");

// let proArray = [];

// if (localStorage.getItem("products") != null) {
//   proArray = JSON.parse(localStorage.getItem("products"));
//   displayProducts(proArray);
// }

// function addProduct() {
//   var product = {
//     proName: productNameInput.value,
//     proPrice: productPriceInput.value,
//     proCategory: productCategoryInput.value,
//     proDesc: productDescInput.value,
//   }
//   proArray.push(product)
//   localStorage.setItem("products", JSON.stringify(proArray))
//   displayProducts(proArray)
//   clear()
// }

// button1.onclick = addProduct;

// function displayProducts(array) {
//   var cartoons = ``;
//   for (var i = 0; i < array.length; i++) {
//     cartoons += `<tr>
//   <td>${array[i].proName}</td>
//   <td>${array[i].proPrice}</td>
//   <td>${array[i].proCategory}</td>
//   <td>${array[i].proDesc}</td>
//   <td><button onclick=updatePro(${i}) class="btn btn-outline-warning btn-sm">UPDATE</button></td>
//   <td><button onclick=deletePro(${i}) class="btn btn-outline-danger btn-sm">DELETE</button></td>
// </tr>`
//   }
//   tbody.innerHTML = cartoons;
// }

// function clear() {
//   productNameInput.value = ``;
//   productPriceInput.value = ``;
//   productCategoryInput.value = ``;
//   productDescInput.value = ``;
// }
// button2.onclick = clear;


// function deletePro(index) {
//   proArray.splice(index, 1)
//   localStorage.setItem("products", JSON.stringify(proArray));
//   displayProducts(proArray)
// }

// function updatePro(place) {
//   productNameInput.value = proArray[place].proName
//   productPriceInput.value = proArray[place].proPrice
//   productCategoryInput.value = proArray[place].proCategory
//   productDescInput.value = proArray[place].proDesc
//   deletePro(place)
//   displayProducts(proArray)
// }


// function clearAll() {
//   clear()
//   proArray = [];
//   displayProducts(proArray);
//   localStorage.setItem("products", JSON.stringify(proArray));
// }

// button3.onclick = clearAll;

// function searching(word) {
//   var box = [];
//   for (var i = 0; i < proArray.length; i++) {
//     if (proArray[i].proName.toLowerCase().includes(word.toLowerCase())) {
//       box.push(proArray[i])
//       displayProducts(box)
//     } 
//   }
// }