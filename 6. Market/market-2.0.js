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
const fnRenderList = (products) => {
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
    </tr>
    `;
  });

  // categories = ["All", "Fast Food", "Electronic", "Cloth", "Fruit"];
  // mapping array of categories
  const listCategory = categories.map((category) => {
    return `<option value="${category}">${category}</option>`;
  });

  // Menaruh list product ke dalam element yang memiliki id 'render'
  document.getElementById("render").innerHTML = listProduct.join("");

  document.getElementById("categoryInput").innerHTML = listCategory;
  document.getElementById("categoryFilter").innerHTML = listCategory;
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

// Render produk saat program pertama kali dijalankan
fnRenderList(products);
