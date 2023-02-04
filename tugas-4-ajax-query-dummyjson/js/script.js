//      Menampilkan Seluruh Data / Get Data

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
            '<table class="table mt-4"><thead><tr><th scope="col"class="table-light">Id</th><th scope="col" class="table-light">Title</th><th scope="col" class="table-light">Description</th><th scope="col" class="table-light">Category</th><th>Update</th><th>Delete</th></tr></thead><tbody>';
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
                                    <td><button type="button" class="btn btn-danger text-white" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                        <path 
                                        d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                                        />
                                    </svg>
                                    </button></td>
          </tr>`
          });
          out += '</tbody></table>';
          $("#tampil").html(out);
      }
  });
});

$(document).ready(function () {
    function getData() {
      let url = "https://dummyjson.com/products";
        $.ajax({
            type: "get",
            url: url,
            dataType: "json",
            success: function (response) {
                console.log(response);
                let out =
                '<table class="table mt-4"><thead><tr><th scope="col"class="table-light">Id</th><th scope="col" class="table-light">Title</th><th scope="col" class="table-light">Description</th><th scope="col" class="table-light">Category</th><th>Update</th><th>Delete</th></tr></thead><tbody>';
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
                                    <td><button type="button" class="btn btn-danger text-white" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                        <path 
                                        d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                                        />
                                    </svg>
                                    </button></td>
                                </tr>`;
                  });
                  out += "</tbody></table>";
                  $("#tampil").html(out);
            }
        });
    }
    getData();
});


//      Menampilkan Seluruh Data Sesuai Kategori / Filter Kategori

$(".cproduct").click(function (e) {
  e.preventDefault();
  let kategori = document.getElementById("select").value;
  console.log(kategori);

  if (kategori === "smartphones") {
    let url = "https://dummyjson.com/products/category/smartphones";
    $.ajax({
      type: "get",
      url: url,
      dataType: "json",
      success: function (response) {
        console.log(response.products);
        let out =
        '<table class="table mt-4"><thead><tr><th scope="col"class="table-light">Id</th><th scope="col" class="table-light">Title</th><th scope="col" class="table-light">Description</th><th scope="col" class="table-light">Category</th><th>Update</th><th>Delete</th></tr></thead><tbody>';
        $.each(response.products, function (key, val) {
          out += `<tr>
                        <th scope="row">${val.id}</th>
                        <td>${val.title}</td>
                        <td>${val.description}</td>
                        <td>${val.category}</td>
                        <td>${val.category}</td>
                        <td><button type="button" class="btn btn-success text-white" data-bs-toggle="modal" data-bs-target="#exampleModal4" onclick="ubah(${val.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                        </svg>
                        </button></td>
                        <td><button type="button" class="btn btn-danger text-white" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                            <path 
                            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                            />
                        </svg>
                        </button></td>
                    </tr>`;
        });
        out += "</tbody></table>";
        $("#tampil").html(out);
      },
    });
  }

  if (kategori === "laptops") {
    let url = "https://dummyjson.com/products/search?q=Laptop";
    $.ajax({
      type: "get",
      url: url,
      dataType: "json",
      success: function (response) {
        console.log(response.products);
        let out =
        '<table class="table mt-4"><thead><tr><th scope="col"class="table-light">Id</th><th scope="col" class="table-light">Title</th><th scope="col" class="table-light">Description</th><th scope="col" class="table-light">Category</th><th>Update</th><th>Delete</th></tr></thead><tbody>';
        $.each(response.products, function (key, val) {
          out += `<tr>
                        <th scope="row">${val.id}</th>
                        <td>${val.title}</td>
                        <td>${val.description}</td>
                        <td>${val.category}</td>
                        <td>${val.category}</td>
                        <td>${val.category}</td>
                        <td><button type="button" class="btn btn-success text-white" data-bs-toggle="modal" data-bs-target="#exampleModal4" onclick="ubah(${val.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                        </svg>
                        </button></td>
                        <td><button type="button" class="btn btn-danger text-white" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                            <path 
                            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                            />
                        </svg>
                        </button></td>
                    </tr>`;
        });
        out += "</tbody></table>";
        $("#tampil").html(out);
      },
    });
  }

  if (kategori === "fragrances") {
    let url = "https://dummyjson.com/products/category/fragrances";
    $.ajax({
      type: "get",
      url: url,
      dataType: "json",
      success: function (response) {
        console.log(response.products);
        let out =
        '<table class="table mt-4"><thead><tr><th scope="col"class="table-light">Id</th><th scope="col" class="table-light">Title</th><th scope="col" class="table-light">Description</th><th scope="col" class="table-light">Category</th><th>Update</th><th>Delete</th></tr></thead><tbody>';
        $.each(response.products, function (key, val) {
          out += `<tr>
                        <th scope="row">${val.id}</th>
                        <td>${val.title}</td>
                        <td>${val.description}</td>
                        <td>${val.category}</td>
                        <td>${val.category}</td>
                        <td>${val.category}</td>
                        <td><button type="button" class="btn btn-success text-white" data-bs-toggle="modal" data-bs-target="#exampleModal4" onclick="ubah(${val.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                        </svg>
                        </button></td>
                        <td><button type="button" class="btn btn-danger text-white" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                            <path 
                            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                            />
                        </svg>
                        </button></td>
                    </tr>`;
        });
        out += "</tbody></table>";
        $("#tampil").html(out);
      },
    });
  }

  if (kategori === "skincare") {
    let url = "https://dummyjson.com/products/category/skincare";
    $.ajax({
      type: "get",
      url: url,
      dataType: "json",
      success: function (response) {
        console.log(response.products);
        let out =
        '<table class="table mt-4"><thead><tr><th scope="col"class="table-light">Id</th><th scope="col" class="table-light">Title</th><th scope="col" class="table-light">Description</th><th scope="col" class="table-light">Category</th><th>Update</th><th>Delete</th></tr></thead><tbody>';
        $.each(response.products, function (key, val) {
          out += `<tr>
                        <th scope="row">${val.id}</th>
                        <td>${val.title}</td>
                        <td>${val.description}</td>
                        <td>${val.category}</td>
                        <td>${val.category}</td>
                        <td><button type="button" class="btn btn-success text-white" data-bs-toggle="modal" data-bs-target="#exampleModal4" onclick="ubah(${val.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                        </svg>
                        </button></td>
                        <td><button type="button" class="btn btn-danger text-white" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                            <path 
                            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                            />
                        </svg>
                        </button></td>
                    </tr>`;
        });
        out += "</tbody></table>";
        $("#tampil").html(out);
      },
    });
  }

  if (kategori === "groceries") {
    let url = "https://dummyjson.com/products/category/groceries";
    $.ajax({
      type: "get",
      url: url,
      dataType: "json",
      success: function (response) {
        console.log(response.products);
        let out =
        '<table class="table mt-4"><thead><tr><th scope="col"class="table-light">Id</th><th scope="col" class="table-light">Title</th><th scope="col" class="table-light">Description</th><th scope="col" class="table-light">Category</th><th>Update</th><th>Delete</th></tr></thead><tbody>';
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
                        <td><button type="button" class="btn btn-danger text-white" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                            <path 
                            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                            />
                        </svg>
                        </button></td>
                    </tr>`;
        });
        out += "</tbody></table>";
        $("#tampil").html(out);
      },
    });
  }

  if (kategori === "home-decoration") {
    let url = "https://dummyjson.com/products/category/home-decoration";
    $.ajax({
      type: "get",
      url: url,
      dataType: "json",
      success: function (response) {
        console.log(response.products);
        let out =
        '<table class="table mt-4"><thead><tr><th scope="col"class="table-light">Id</th><th scope="col" class="table-light">Title</th><th scope="col" class="table-light">Description</th><th scope="col" class="table-light">Category</th><th>Update</th><th>Delete</th></tr></thead><tbody>';
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
                        <td><button type="button" class="btn btn-danger text-white" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                            <path 
                            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                            />
                        </svg>
                        </button></td>
                    </tr>`;
        });
        out += "</tbody></table>";
        $("#tampil").html(out);
      },
    });
  }
});


//      Memilih Produk Sesuai Dengan Yang Kita Pilih

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


//  Menambahkan Produk Dalam Data / Input Data / Add Produk

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


//      Mengubah Data / Update Data Produk

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
