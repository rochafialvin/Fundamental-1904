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

const fnRenderList = (products) => {
  // mapping array of products
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

  // mapping array of categories
  const listCategory = categories.map((category) => {
    return `<option value="${category}">${category}</option>`;
  });

  // Menaruh list product ke dalam element yang memiliki id 'render'
  document.getElementById("render").innerHTML = listProduct.join("");
  document.getElementById("categoryInput").innerHTML = listCategory;
};

const fnInputData = () => {
  // Ambil data dari semua element form
  const name = document.getElementById("nameInput").value;
  const price = document.getElementById("priceInput").value;
  const category = document.getElementById("categoryInput").value;
  const stock = document.getElementById("stockInput").value;

  // Mendapatkan deretan dari method getTime()
  const time = new Date();
  const id = time.getTime();

  // Menambahkan data baru ke array product
  // products.push({ id: id, name:  name, price: price, category : category, stock : stock });
  products.push({ id, name, price, category, stock });

  // Bersihkan form untuk input produk baru
  document.getElementById("nameInput").value = "";
  document.getElementById("priceInput").value = "";
  document.getElementById("stockInput").value = "";

  // Render ulang untuk menampilkan list produk terbaru setelah ditambahkan
  fnRenderList(products);
};

// Render produk saat program pertama kali dijalankan
fnRenderList(products);
