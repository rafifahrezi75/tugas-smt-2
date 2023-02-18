let tampil = document.querySelector("#tampil");
let cart = document.querySelector("#cart");
let no = 1;

//          All Product

function allProduct() {
    axios.get("https://dummyjson.com/products").then(function (response){
        let produk = response.data.products;
        console.log(produk);
        let out = '<table class="table mt-4 "><thead class="table-light"><tr><th>No</th><th>Title</th><th>Description</th><th>Update</th><th>Delete</th><th>Buy</th></tr></thead><tbody>';
        produk.forEach(el => {
            out += `<tr>
                    <td>${el.id}</td>
                    <td>${el.title}</td>
                    <td>${el.description}</td>
                    <td><button type="button" class="btn btn-success text-white" data-bs-toggle="modal" data-bs-target="#exampleModal4" onclick="showUbah(${el.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                        </svg>
                    </button></td>
                    <td><button type="button" class="btn btn-danger text-white" onclick="hapusProduct(${el.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3 mb-1" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                        </svg>
                    </button></td>
                    <td><button type="button" class="btn btn-secondary text-white" onclick="cartProduct(${el.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                    </button></td>
            </tr>`;
        });
        out += '</tbody></table>';
        tampil.innerHTML = out;
    })
}

//          Cart Product

function cartProduct(idproduct) {
    axios.get("https://dummyjson.com/products/" + idproduct).then(function (response){
        let product = response.data;
        let out = '<table class="table mt-4"><thead class="table-light"><tr><th>Id</th><th>Order By</th><th>Title</th><th>Description</th><th>Amount</th><th>Checkout</th></tr></thead><tbody>';
        out += `<tr>
                    <td>${product.id}</td>
                    <td id="order"></td>
                    <td>${product.title}</td>
                    <td>${product.price}</td>
                    <td><input type="number" class="small" id="jumlah"></td>
                    <td><button class="btn btn-success ms-2" onclick="checkout('${product.id}','${product.price}','${product.title}')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart ms-1 me-1 mb-1" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                    </button></td>
            </tr>`;
        out += '</tbody></table>';
        cart.innerHTML = out;
    })
}

//          Order By

var idplgn = "";
var nama = "";
var alamat = "";
function orderBy(idpelanggan) {
    let data = {
        id : idpelanggan
    };
    axios.get("http://localhost/tugas-5-php-ajax-query-dummyjson/php/cart/selectwhere.php/?id=" + idpelanggan, JSON.stringify(data)).then(function (response){
        let out = response.data.pelanggan;
            order.innerHTML = out;
            idplgn = response.data.idpelanggan;
            nama = response.data.pelanggan;
            alamat = response.data.alamat;
    })
}

//          Checkout

function checkout(idbarang, harga, barang) {
    let order = 0;
    let idorder = order++;
    let jumlah = document.getElementById("jumlah").value;
    let data = {
        idorder: idorder,
        idbarang: idbarang,
        jumlah: jumlah,
        harga: harga,
        barang: barang,
        idpelanggan: idplgn,
        pelanggan: nama,
        alamat: alamat
    };
    axios.post("http://localhost/tugas-5-php-ajax-query-dummyjson/php/cart/addtocart.php", JSON.stringify(data)).then(function (response){
        console.log(data);
        alert(response.data);
    })
    window.location.href = "http://127.0.0.1:5500/";
}

//          Search Product With Id

function productid() {
    let idproduct = document.getElementById("idproduct").value;
    axios.get("https://dummyjson.com/products/" + idproduct).then(function (response){
        console.log(response.data);
        let product = response.data;
        let out = '<table class="table mt-4"><thead class="table-light"><tr><th>Id</th><th>Title</th><th>Description</th></tr></thead><tbody>';
        out += `<tr>
                    <td>${product.id}</td>
                    <td>${product.title}</td>
                    <td>${product.description}</td>
            </tr>`;
        out += '</tbody></table>';
        tampil.innerHTML = out;
    })
}

//          Search With Category

function productCategory() {
    let kategori = document.getElementById("category").value;
    axios.get("https://dummyjson.com/products/category/" + kategori).then(function (response){
        let product = response.data.products;
        console.log(product);
        let out = '<table class="table mt-4"><thead class="table-light"><tr><th>Id</th><th>Title</th><th>Description</th></tr></thead><tbody>';
        product.forEach(el => {
            out += `<tr>
                    <td>${el.id}</td>
                    <td>${el.title}</td>
                    <td>${el.description}</td>
            </tr>`;
        })
        out += '</tbody></table>';
        tampil.innerHTML = out;
    })
}

//          Add Product

function addProduct() {
    let data = {
        title : document.getElementById("title").value,
        description : document.getElementById("description").value,
        category : document.getElementById("productcategory").value
    };
    axios.post("https://dummyjson.com/products/add", JSON.stringify(data)).then(function (response) {
        console.log(data);
        alert("Data Sudah Di Simpan !");
    })
    allProduct();
}

//          Show Update Product

function showUbah(idubah) {
    axios.get("https://dummyjson.com/products/" + idubah).then(function (response){ 
        document.getElementById('idproducts').value = response.data.id;
        document.getElementById('products').value = response.data.title;
        document.getElementById('descriptions').value = response.data.description;
    })
}

//      Update Product

function updateProduct() {
    let idupdate = document.getElementById("idproducts").value;
    let data = {
        idproduct : document.getElementById("idproducts").value,
        product : document.getElementById("products").value,
        description : document.getElementById("descriptions").value
    };
    axios.put("https://dummyjson.com/products/" + idupdate, JSON.stringify(data)).then(function (response){
        console.log(data);
        alert("Data Berhasil Di Update !");
    })
}

//          Delete Product

function hapusProduct(idproduct) {
    let data = {
        id : idproduct
    }
    axios.delete("https://dummyjson.com/products/" + idproduct, JSON.stringify(data)).then(function (response){
        console.log("Product Id " + idproduct + " Telah Di Hapus !");
        alert("Product Id " + idproduct + " Telah Di Hapus !");
    })
}

//          All Pelanggan

function allPelanggan() {
    axios.get("http://localhost/tugas-5-php-ajax-query-dummyjson/php/pelanggan/select.php").then(function (response) {
        let pelanggan = response.data;
        console.log(pelanggan);
        let out = '<table class="table mt-4"><thead class="table-light"><tr><th>No</th><th>Pelanggan</th><th>Alamat</th><th>Telp</th><th>Update</th><th>Delete</th><th>Order</th></tr></thead><tbody>';
        pelanggan.forEach(el => {
            out += `<tr>
                    <td>${no++}</td>
                    <td>${el.pelanggan}</td>
                    <td>${el.alamat}</td>
                    <td>${el.telp}</td>
                    <td><button type="button" class="btn btn-success text-white" data-bs-toggle="modal" data-bs-target="#exampleModal7" onclick="showUpdate(${el.idpelanggan})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                        </svg>
                    </button></td>
                    <td><button type="button" class="btn btn-danger text-white" onclick="hapusPelanggan(${el.idpelanggan})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3 mb-1" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                        </svg>
                    </button></td>
                    <td><button type="button" class="btn btn-dark text-white" onclick="orderBy(${el.idpelanggan})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-check mb-1" viewBox="0 0 16 16">
                            <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                    </button></td>
            </tr>`;
        });
        out += '</tbody></table>';
        tampil.innerHTML = out;
    })
}

//          Add Pelanggan

function addPelanggan() {
    let data = {
        pelanggan : document.getElementById("nama").value,
        alamat : document.getElementById("alamat").value,
        telp : document.getElementById("telp").value
    };
    console.log(data);
    axios.post("http://localhost/tugas-5-php-ajax-query-dummyjson/php/pelanggan/insert.php", JSON.stringify(data)).then(function (response){
        console.log(response.data);
        alert(response.data);
    })
    allpelanggan();
}

//      Show Update

function showUpdate(idpelanggan) {
    let data = {
        idpelanggan : idpelanggan
    }
    axios.post("http://localhost/tugas-5-php-ajax-query-dummyjson/php/pelanggan/selectupdate.php", JSON.stringify(data)).then(function (response){
        console.log(response);
        document.getElementById('idpelang').value = response.data.idpelanggan;
        document.getElementById('pelanggans').value = response.data.pelanggan;
        document.getElementById('alamats').value = response.data.alamat;
        document.getElementById('telps').value = response.data.telp;
    })
}

//          Update Pelanggan

function updatePelanggan() {
    let data = {
        idpelanggan : document.getElementById("idpelang").value,
        pelanggan : document.getElementById("pelanggans").value,
        alamat : document.getElementById("alamats").value,
        telp : document.getElementById("telps").value
    };
    axios.post("http://localhost/tugas-5-php-ajax-query-dummyjson/php/pelanggan/update.php", JSON.stringify(data)).then(function (response){
        console.log(response.data);
        alert(response.data);
    })
    allPelanggan();
}

//          Delete Pelanggan

function hapusPelanggan(idpelanggan) {
    let data = {
        idpelanggan : idpelanggan
    }
    console.log(data);
    axios.post("http://localhost/tugas-5-php-ajax-query-dummyjson/php/pelanggan/delete.php", JSON.stringify(data)).then( function (response){
        console.log(response.data);
        alert(response.data);
    })
    allPelanggan();
}
