///////////////
/* Init Value*/
///////////////
const products = [
  {
    id: 1579581080923,
    category: "Fast Food",
    name: "Noodle",
    price: 3500,
    stock: 9,
  },
  {
    id: 1579581081130,
    category: "Electronic",
    name: "Headphone",
    price: 430000,
    stock: 8,
  },
  {
    id: 1579581081342,
    category: "Cloth",
    name: "Hoodie",
    price: 30000,
    stock: 7,
  },
  {
    id: 1579581081577,
    category: "Fruit",
    name: "Apple",
    price: 10000,
    stock: 8,
  },
];

const categories = ["All", "Fast Food", "Electronic", "Cloth", "Fruit"];

/////////////////
/* Render List */
////////////////
const fnRenderList = (products, isFilter = true) => {
  // mapping array of products
  const listProduct = products.map((product) => {
    // product = {
    //   id: 1579581081130,
    //   category: "Electronic",
    //   name: "Headphone",
    //   price: 430000,
    //   stock: 8,
    // }

    /*
      <tr>
        <td>1579581081130</td>
        <td>Electronic</td>
        <td>Headphone</td>
        <td>430000</td>
        <td>8</td>
      </tr>
    
    */
    return `
    <tr>
      <td>${product.id}</td>
      <td>${product.category}</td>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>${product.stock}</td>
      <td><input type="button" value="Delete" onclick="fnDelete(${product.id})" /></td>
    </tr>
    `;
  });
  // Menaruh list product ke dalam element yang memiliki id 'render'
  document.getElementById("render").innerHTML = listProduct.join("");

  if (!isFilter) {
    // mapping array of categories
    const listCategory = categories.map((category) => {
      return `<option value="${category}">${category}</option>`;
    });

    document.getElementById("categoryInput").innerHTML = listCategory;
    document.getElementById("categoryFilter").innerHTML = listCategory;
  }
};

const fnRenderFilter = (products) => {
  const listProduct = products.map((product) => {
    return `
    <tr>
      <td>${product.id}</td>
      <td>${product.category}</td>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>${product.stock}</td>
    </tr>
    `;
  });

  document.getElementById("render").innerHTML = listProduct.join("");
};

////////////////
/* Input Data */
////////////////
const fnInputData = () => {
  // Ambil data dari semua element form
  const name = document.getElementById("nameInput").value;
  const price = parseInt(document.getElementById("priceInput").value);
  const category = document.getElementById("categoryInput").value;
  const stock = parseInt(document.getElementById("stockInput").value);

  // Mendapatkan deretan dari method getTime()
  const time = new Date();
  const id = time.getTime();

  // Menambahkan data baru ke array product
  // products.push({ id: id, name:  name, price: price, category : category, stock : stock });
  products.push({ id, name, price, category, stock });
  console.log(products);

  // Bersihkan form untuk input produk baru
  document.getElementById("nameInput").value = "";
  document.getElementById("priceInput").value = "";
  document.getElementById("stockInput").value = "";

  // Render ulang untuk menampilkan list produk terbaru setelah ditambahkan
  fnRenderList(products);
};

////////////////
/* Delete Data */
////////////////

const fnDelete = (selectedId) => {
  alert(`${selectedId}`);
};

/////////////////
/* Filter Name */
////////////////

const fnFilterName = () => {
  // keyword = "H"
  const keyword = document.getElementById("nameFilter").value;

  const filterResult = products.filter((product) => {
    // Hoodie includes h ? true
    const keywordLowerCase = keyword.toLowerCase();
    const nameLowerCase = product.name.toLowerCase();
    return nameLowerCase.includes(keywordLowerCase);
  });

  fnRenderList(filterResult);
};

//////////////////
/* Filter Price */
/////////////////
const fnFilterPrice = () => {
  const min = parseInt(document.getElementById("min").value); // NaN
  const max = parseInt(document.getElementById("max").value); // NaN

  const filterResult = products.filter((product) => {
    if (min && max) {
      return product.price >= min && product.price <= max;
    } else if (min) {
      return product.price >= min;
    } else if (max) {
      return product.price <= max;
    } else {
      return true;
    }
  });

  fnRenderList(filterResult);
};

/////////////////////
/* Filter Category */
/////////////////////

const fnFilterCategory = () => {
  const selectedCategory = document.getElementById("categoryFilter").value;

  // selectedCategory = "Fast Food"
  let filterResult = products; // undefined
  if (selectedCategory != "All") {
    filterResult = products.filter((product) => {
      return product.category == selectedCategory;
    });
  }

  // fnRenderList(products)
  fnRenderList(filterResult);
};

//////////////////
/* Reset Filter */
//////////////////

const fnResetFilter = () => {
  fnRenderList(products, false);
};

// Render produk saat program pertama kali dijalankan
fnRenderList(products, false);
