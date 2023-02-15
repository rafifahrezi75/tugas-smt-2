//      Menampilkan Seluruh Data / Get Data
$(document).ready(function () {
  $(".all").click(function (e) {
    e.preventDefault();
    let url = "https://dummyjson.com/products";
    $.ajax({
      type: "get",
      url: url,
      dataType: "json",
      success: function (response) {
        console.log(response.products);
        let out =
          '<table class="table mt-4"><thead><tr><th scope="col"class="table-light">Id</th><th scope="col" class="table-light">Title</th><th scope="col" class="table-light">Description</th><th class="table-light">Update</th><th scope="col"class="table-light">Buy</th></tr></thead><tbody>';
        $.each(response.products, function (key, val) {
          out += `<tr>
          <th scope="row">${val.id}</th>
          <td>${val.title}</td>
          <td>${val.description}</td>
          <td><button type="button" class="btn btn-success text-white" data-bs-toggle="modal" data-bs-target="#exampleModal4" onclick="ubah(${val.id})">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
          </svg>
          </button></td>
          <td><button type="button" class="btn btn-secondary text-white" onclick="cart(${val.id})">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg>
          </button></td>
          </button></td>
          </tr>`;
        });
        out += "</tbody></table>";
        $("#tampil").html(out);
      },
    });
  });
});


//  Show Cart Id

function cart(id) {
  let url = "https://dummyjson.com/products/" + id;
  $.ajax({
      type: "get",
      url: url,
      dataType: "json",
      success: function (response) {
          let out = "<h2 class='mt-2'>Cart</h2>"
          out += '<table class="table"><thead><tr><th scope="col">ID</th><th scope="col">Order By</th><th scope="col">Product</th><th scope="col">Price</th><th scope="col">Amount</th><th scope="col">Checkout</th></tr></thead><tbody>';
          out += `<tr>
                  <th scope="row">${response.id}</th>
                  <td id="order"></td>
                  <td>${response.title}</td>
                  <td>$ ${response.price}</td>
                  <td><input type="number" class="small" id="jumlah"></td>
                  <td><button class="btn btn-success ms-2" onclick="checkout('${response.id}','${response.price}','${response.title}')">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart ms-1 me-1 mb-1" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </svg>
                  </button></td>
              </tr>`;
          out += '</tbody></table>';
          $("#cart").html(out);
      }
  });
}

//      Order By

var idplgn = "";
var nama = "";
var alamat = "";
function cartP(idpelanggan) {
    let url = "http://localhost/tugas-5-php-ajax-query-dummyjson/php/cart/selectwhere.php/?id=" + idpelanggan;
    $.ajax({
        type: "get",
        url: url,
        dataType: "JSON",
        success: function (response) {
            let out = response.pelanggan;
            $("#order").html(out);
            idplgn = response.idpelanggan;
            nama = response.pelanggan;
            alamat = response.alamat;
        }
    });
}


//      Checkout

function checkout(idbarang, harga, barang) {
  let order = 0;
  let idorder = order++;
  let jumlah = $("#jumlah").val();
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

  $.ajax({
      type: "post",
      url: "http://localhost/tugas-5-php-ajax-query-dummyjson/php/cart/addtocart.php",
      data: JSON.stringify(data),
      success: function (response) {
          window.location.href = "http://127.0.0.1:5500/";
          alert(response);
      }
  });
}


// $(document).ready(function () {
//     function getData() {
//       let url = "https://dummyjson.com/products";
//       $.ajax({
//             type: "get",
//             url: url,
//             dataType: "json",
//             success: function (response) {
//               console.log(response);
//               let out =
//                 '<table class="table mt-4"><thead><tr><th scope="col"class="table-light">Id</th><th scope="col" class="table-light">Title</th><th scope="col" class="table-light">Description</th><th scope="col" class="table-light">Category</th><th class="table-light">Update</th></tr></thead><tbody>';
//               $.each(response.products, function (key, val) {
//                 out += `<tr>
//                 <th scope="row">${val.id}</th>
//                 <td>${val.title}</td>
//                 <td>${val.description}</td>
//                 <td>${val.category}</td>
//                 <td><button type="button" class="btn btn-success text-white" data-bs-toggle="modal" data-bs-target="#exampleModal4" onclick="ubah(${val.id})">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
//                     <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
//                     <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
//                   </svg>
//                   </button></td>
//               </tr>`;
//               });
//             out += "</tbody></table>";
//             $("#tampil").html(out);
//             }
//         });
//     }
//     getData();
// });


//      Menampilkan Seluruh Data Sesuai Kategori / Filter Kategori
$(document).ready(function () {
  $(".cproduct").click(function (e) {
    e.preventDefault();
    let link = "";
    let kategori = document.getElementById("select").value;
    if (kategori === "smartphones") {
      link = "smartphones";
    }
    if (kategori === "laptops") {
      link = "laptops";
    }
    if (kategori === "fragrances") {
      link = "fragrances";
    }
    if (kategori === "skincare") {
      link = "skincare";
    }
    if (kategori === "groceries") {
      link = "groceries";
    }
    if (kategori === "home-decoration") {
      link = "home-decoration";
    }
    let url = "https://dummyjson.com/products/category/" + link;
    $.ajax({
      type: "get",
      url: url,
      dataType: "json",
      success: function (response) {
        console.log(response.products);
        let out =
          '<table class="table mt-4"><thead><tr><th scope="col"class="table-light">Id</th><th scope="col" class="table-light">Title</th><th scope="col" class="table-light">Description</th><th scope="col" class="table-light">Category</th><th class="table-light">Update</th></tr></thead><tbody>';
        $.each(response.products, function (key, val) {
          out += `<tr>
                    <th scope="row">${val.id}</th>
                    <td>${val.title}</td>
                    <td>${val.description}</td>
                    <td>${val.category}</td>
                    <td><button type="button" class="btn btn-success text-white" data-bs-toggle="modal" data-bs-target="#exampleModal4" onclick="ubah(${val.id})">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                      </svg>
                    </button></td>
                  </tr>`
        });
        out += '</tbody></table>';
        $("#tampil").html(out);
      }
    });
  });
});


//      Memilih Produk Sesuai Dengan Yang Kita Pilih

$(document).ready(function () {
  $(".nproduct").click(function (e) {
    e.preventDefault();

    let id = document.getElementById("id").value;
    let url = "https://dummyjson.com/products/" + id;
    $.ajax({
      type: "get",
      url: url,
      dataType: "json",
      success: function (response) {
        console.log(response);
        let out =
          '<table class="table mt-4"><thead><tr><th scope="col"class="table-light">Id</th><th scope="col" class="table-light">Title</th><th scope="col" class="table-light">Description</th><th scope="col" class="table-light">Category</th></tr></thead><tbody>';
        out += `<tr>
              <th scope="row">${response.id}</th>
              <td>${response.title}</td>
              <td>${response.description}</td>
              <td>${response.category}</td>
          </tr>`;
        out += "</tbody></table>";
        $("#tampil").html(out);
      },
    });
  });
});


//  Menambahkan Produk Dalam Data / Input Data / Add Produk

$(document).ready(function () {
  $(".addp").click(function (e) {
    e.preventDefault();
    let url = "https://dummyjson.com/products/add";
    let produk = $("#title").val();
    let deskripsi = $("#description").val();
    let kategori = $("#category").val();

    let data = {
      title: produk,
      description: deskripsi,
      category: kategori
    };

    $.ajax({
      type: "POST",
      url: url,
      body: data,
      success: function (response) {
        console.log(data);
      }
    });
  });
});


//      Mengubah Data / Update Data Produk

$(document).ready(function () {
  $(".upp").click(function (e) {
    e.preventDefault();
    let id = $("#idproduct").val();
    let data = {
      id: $("#idproduct").val(),
      produk: $("#products").val(),
      deskripsi: $("#descriptions").val()
    };
    let link = "https://dummyjson.com/products/" + id;

    $.ajax({
      type: "patch",
      url: link,
      body: data,
      success: function (response) {
        console.log(data);
      }
    });
  });
});

//      Menampilkan Data Yang Akan Di Update Data / Show Update Produk

function ubah(idubah) {
  let url = "https://dummyjson.com/products/" + idubah;
  $.ajax({
    type: "get",
    url: url,
    data: "json",
    success: function (response) {
      $(".np").val(response.title);
      $(".dp").val(response.description);
      $(".idp").val(response.id);
    }
  });
}


//      Menghapus Data / Delete Data

$(document).ready(function () {
  $(".delp").click(function (e) {
    e.preventDefault();

    let id = document.getElementById("iddel").value;
    let url = "https://dummyjson.com/products/" + id;

    $.ajax({
      type: "DELETE",
      url: url,
      data: id,
      success: function (response) {
        console.log("Product Id " + id + " Telah Dihapus !");
      }
    });
  });
});


//      All Pelanggan

$(document).ready(function () {
  $(".plgn").click(function (e) {
    e.preventDefault();
    // console.log("tes");

    $.ajax({
      type: "get",
      url: "http://localhost/tugas-5-php-ajax-query-dummyjson/php/pelanggan/select.php",
      dataType: "json",
      success: function (response) {
        console.log(response);
        let no = 1;
        let out =
          '<table class="table mt-4"><thead><tr><th scope="col"class="table-light">No</th><th scope="col" class="table-light">Pelanggan</th><th scope="col" class="table-light">Alamat</th><th scope="col" class="table-light">Telp</th><th class="table-light">Update</th><th class="table-light">Delete</th><th scope="col"class="table-light">Order</th></tr></thead><tbody>';
        $.each(response, function (key, val) {
          out += `<tr>
              <th scope="row">${no++}</th>
              <td>${val.pelanggan}</td>
              <td>${val.alamat}</td>
              <td>${val.telp}</td>
              <td><button type="button" class="btn btn-success text-white" data-bs-toggle="modal" data-bs-target="#exampleModal7" onclick="update(${val.idpelanggan})">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                </svg>
              </button></td>
              <td><button type="button" class="btn btn-danger text-white" onclick="hapus(${val.idpelanggan})">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3 mb-1" viewBox="0 0 16 16">
                <path 
                d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                />
                </svg>
              </button></td>
              <td><button type="button" class="btn btn-dark text-white" onclick="cartP(${val.idpelanggan})">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-check mb-1" viewBox="0 0 16 16">
                <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
              </button></td>
          </tr>`
        });
        out += "</tbody></table>";
        $("#tampil").html(out);
      }
    });
  });
});


//      Add Pelanggan

$(document).ready(function () {
  $('.addplgn').click(function (e) {
    e.preventDefault();

    let data = {
      pelanggan: $("#nama").val(),
      alamat: $("#alamat").val(),
      telp: $("#telp").val()
    };
    $.ajax({
      type: "post",
      url: "http://localhost/tugas-5-php-ajax-query-dummyjson/php/pelanggan/insert.php",
      data: JSON.stringify(data),
      success: function (response) {
        console.log(response);
        alert(response);
        window.location.href = "http://127.0.0.1:5500/";
      }
    });
  });
});


//      Show Update Pelanggan

function update(idpelanggan) {
  console.log(idpelanggan);
  let data = {
    idpelanggan: idpelanggan
  };

  $.ajax({
    type: "post",
    url: "http://localhost/tugas-5-php-ajax-query-dummyjson/php/pelanggan/selectupdate.php",
    data: JSON.stringify(data),
    success: function (response) {
      let data = JSON.parse(response);

      console.log(data);
      $(".npelanggan").val(data.pelanggan);
      $(".alamatpel").val(data.alamat);
      $(".telppel").val(data.telp);
      $(".idpel").val(data.idpelanggan);
    }
  });
}


//      Update Pelanggan

$(document).ready(function () {
  $(".updatepel").click(function (e) {
    e.preventDefault();
    let dataPelanggan = {
      idpelanggan: $("#idpelang").val(),
      pelanggan: $("#pelanggans").val(),
      alamat: $("#alamats").val(),
      telp: $("#telps").val()
    }

    $.ajax({
      type: "post",
      url: "http://localhost/tugas-5-php-ajax-query-dummyjson/php/pelanggan/update.php",
      data: JSON.stringify(dataPelanggan),
      success: function (response) {
        window.location.href = "http://127.0.0.1:5500/";
        alert(response);
      }
    });
  });
});


//      Delete Pelanggan

function hapus(idpelanggan) {
  console.log(idpelanggan);
  let data = {
    idpelanggan: idpelanggan
  };
  $.ajax({
    type: "post",
    url: "http://localhost/tugas-5-php-ajax-query-dummyjson/php/pelanggan/delete.php",
    data: JSON.stringify(data),
    cahce: false,
    success: function (response) {
      window.location.href = "http://127.0.0.1:5500/";
      alert(response);
    }
  });
}