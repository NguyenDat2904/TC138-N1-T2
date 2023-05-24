const newProducts = [
  {
    name: "Chuối sấy",
    price: "36000",
    priceOld: "39.000 đ",
    discount: "-8%",
    img: "/asset/img/spmoi/chuoi-say.jpg",
  },
  {
    name: "Khoai lang tím sấy",
    price: "50000",
    priceOld: "56.000 đ",
    discount: "-11%",
    img: "/asset/img/spmoi/khoai-lang-tim.jpg",
  },
  {
    name: "Dâu tây sấy",
    price: "1400000",
    priceOld: "1.440.000 đ",
    discount: "-3%",
    img: "/asset/img/spmoi/dau-tay-say2.jpg",
  },
  {
    name: "Táo Rockit - Nhập khẩu",
    price: "115000",
    priceOld: "",
    discount: "",
    img: "/asset/img/spmoi/rockit-apple.jpg",
  },
  {
    name: "Bắp cải xoăn",
    price: "25000",
    priceOld: "",
    discount: "",
    img: "/asset/img/spmoi/bap-cai-xoan.jpg",
  },
  {
    name: "Dưa hấu",
    price: "15000",
    priceOld: "20.000 đ",
    discount: "-25%",
    img: "/asset/img/spmoi/duahau.jpg",
  },
  {
    name: "Óc chó vị caramel Nutty hũ 150g",
    price: "85000",
    priceOld: "90.000 đ",
    discount: "-6%",
    img: "/asset/img/spmoi/occho.jpg",
  },
  {
    name: "Hạt điều rang muối Thành Việt hủ 170g",
    price: "76000",
    priceOld: "80.000 đ",
    discount: "-5%",
    img: "/asset/img/spmoi/hatdieu.jpg",
  },
  {
    name: "Hạt mắc ca Thành Việt hộp 400g",
    price: "170000",
    priceOld: "",
    discount: "",
    img: "/asset/img/spmoi/mackai.jpg",
  },
];
const ngucocProduct = [
  {
    name: "Óc chó vị caramel Nutty hũ 150g",
    price: "85000",
    priceOld: "90.000 đ",
    discount: "-6%",
    img: "/asset/img/ngucoc/occho.jpg",
  },
  {
    name: "Hạt điều rang muối Thành Việt hủ 170g",
    price: "76000",
    priceOld: "80.000 đ",
    discount: "-5%",
    img: "/asset/img/ngucoc/hatdieu.jpg",
  },
  {
    name: "Hạt mắc ca Thành Việt hộp 400g",
    price: "170000",
    priceOld: "",
    discount: "",
    img: "/asset/img/ngucoc/mackai.jpg",
  },
  {
    name: "Ngũ cốc dinh dưỡng VinaCafe B'fast bịch 500g",
    price: "60000",
    priceOld: "100.000 đ",
    discount: "-40%",
    img: "/asset/img/ngucoc/nguccoc.jpg",
  },
];
const raucuProduct = [
  {
    name: "Bắp ngọt Lambweston 1kg",
    price: "165000",
    priceOld: "",
    discount: "",
    img: "/asset/img/phobien/raucu/bapngot.png",
  },
  {
    name: "DƯA CHUỘT NGÂM DẤM 190G",
    price: "218000",
    priceOld: "230.000 đ",
    discount: "-5%",
    img: "/asset/img/phobien/raucu/duachuot.png",
  },
  {
    name: "Chuối sấy",
    price: "360000",
    priceOld: "39.000 đ",
    discount: "-8%",
    img: "/asset/img/phobien/raucu/chuoi-say.jpg",
  },
  {
    name: "Táo xay nhuyễn Vitabio 90g bó",
    price: "35000",
    priceOld: "",
    discount: "",
    img: "/asset/img/phobien/raucu/taoxay.jpg",
  },
  {
    name: "Khoai lang tím sấy",
    price: "50000",
    priceOld: "56.000 đ",
    discount: "-11%",
    img: "/asset/img/phobien/raucu/khoai-lang-tim.jpg",
  },
  {
    name: "Dâu tây sấy",
    price: "1400000",
    priceOld: "1.440.000 đ",
    discount: "-3%",
    img: "/asset/img/spmoi/dau-tay-say2.jpg",
  },
  {
    name: "Táo Rockit - Nhập khẩu",
    price: "115000",
    priceOld: "",
    discount: "",
    img: "/asset/img/spmoi/rockit-apple.jpg",
  },
  {
    name: "Cải bó xôi Ardo 450g",
    price: "350000",
    priceOld: "",
    discount: "",
    img: "/asset/img/phobien/raucu/boxoi.jpg",
  },
];
const haisanProduct = [
  {
    name: "Cụm Chân Cua King Crab Đông Lạnh",
    price: "1045000",
    priceOld: "1.450.000 đ",
    discount: "-28%",
    img: "/asset/img/phobien/haisan/cuaking.jpg",
  },
  {
    name: "Tôm hùm tươi sống Canada",
    price: "1050000",
    priceOld: "1.360.000 đ",
    discount: "-23%",
    img: "/asset/img/phobien/haisan/tumhum.jpg",
  },
  {
    name: "Tôm thẻ hữu cơ",
    price: "160000",
    priceOld: "",
    discount: "",
    img: "/asset/img/phobien/haisan/tom-the-huu-co.jpg",
  },
  {
    name: "Tôm sắt biển",
    price: "280000",
    priceOld: "",
    discount: "",
    img: "/asset/img/phobien/haisan/tom-sat-bien.jpg",
  },
  {
    name: "Tôm hùm - Crawfish",
    price: "300000",
    priceOld: "360.000 đ",
    discount: "-17%",
    img: "/asset/img/phobien/haisan/tumhumcar.jpg",
  },
  {
    name: "Tôm he",
    price: "420000",
    priceOld: "",
    discount: "",
    img: "/asset/img/phobien/haisan/tom-he.jpg",
  },
  {
    name: "Tôm tít sống",
    price: "807500",
    priceOld: "850.000 đ",
    discount: "-5%",
    img: "/asset/img/phobien/haisan/tom-tich-1.jpg",
  },
  {
    name: "Tôm càng xanh",
    price: "520000",
    priceOld: "",
    discount: "",
    img: "/asset/img/phobien/haisan/tom-cang-xanh-a-1.jpg",
  },
];
const donglanhProduct = [
  {
    name: "Cụm Chân Cua King Crab Đông Lạnh",
    price: "1045000",
    priceOld: "1.450.000 đ",
    discount: "-28%",
    img: "/asset/img/phobien/haisan/cuaking.jpg",
  },
  {
    name: "Tôm sắt biển",
    price: "280000",
    priceOld: "",
    discount: "",
    img: "/asset/img/phobien/haisan/tom-sat-bien.jpg",
  },
  {
    name: "Tôm Hùm Bông",
    price: "980000",
    priceOld: "",
    discount: "",
    img: "/asset/img/phobien/donglanh/tom-hum-bong-1.jpg",
  },
  {
    name: "Cá Hồi Nguyên Con Tươi",
    price: "2100000",
    priceOld: "",
    discount: "",
    img: "/asset/img/phobien/donglanh/ca-hoi-nguyen-con-3.jpg",
  },
  {
    name: "Xương Cá Hồi",
    price: "18000",
    priceOld: "",
    discount: "",
    img: "/asset/img/phobien/donglanh/xuong-ca-hoi-1.jpg",
  },
  {
    name: "Cá Hồi Phi Lê Đông Lạnh",
    price: "195000",
    priceOld: "",
    discount: "",
    img: "/asset/img/phobien/donglanh/ca-hoi-phi-le-dong-lanh.png",
  },
  {
    name: "Thịt Càng Ghẹ",
    price: "390000",
    priceOld: "",
    discount: "",
    img: "/asset/img/phobien/donglanh/thitcangghe.png",
  },
  {
    name: "Tôm hùm - Crawfish",
    price: "300000",
    priceOld: "360.000 đ",
    discount: "",
    img: "/asset/img/phobien/haisan/tumhumcar.jpg",
  },
];
const shushiProduct = [
  {
    name: "Sushi 9B",
    price: "245000",
    priceOld: "270.000 đ",
    discount: "-9%",
    img: "/asset/img/phobien/shushi/9B.png",
  },
  {
    name: "Sushi Mix 4B",
    price: "145500",
    priceOld: "160.000 đ",
    discount: "-9%",
    img: "/asset/img/phobien/shushi/4b.png",
  },
  {
    name: "Sashimi Cá Hồi",
    price: "254000",
    priceOld: "270.000 đ",
    discount: "-6%",
    img: "/asset/img/phobien/shushi/sushicahoi.png",
  },
  {
    name: "Sushi Mix 10A",
    price: "247500",
    priceOld: "275.000 đ",
    discount: "-10%",
    img: "/asset/img/phobien/shushi/10A.png",
  },
  {
    name: "Combo Sashimi 6B",
    price: "585000",
    priceOld: "650.000 đ",
    discount: "-10%",
    img: "/asset/img/phobien/shushi/6B.png",
  },
];
const thicaProduct = [
  {
    name: "Phi Lê heo Mangalica",
    price: "340000",
    priceOld: "",
    discount: "",
    img: "/asset/img/phobien/thitca/1.jpg",
  },
  {
    name: "Sườn BBQ heo Canada",
    price: "350000",
    priceOld: "",
    discount: "",
    img: "/asset/img/phobien/thitca/2.jpg",
  },
  {
    name: "Đùi vịt góc tư tươi",
    price: "68000",
    priceOld: "71.000 đ",
    discount: "-4%",
    img: "/asset/img/phobien/thitca/3.jpg",
  },
  {
    name: "Ức vịt tươi (kg)",
    price: "250000",
    priceOld: "",
    discount: "",
    img: "/asset/img/phobien/thitca/4.jpg",
  },
  {
    name: "Vịt tươi nguyên con (kg)",
    price: "65000",
    priceOld: "",
    discount: "",
    img: "/asset/img/phobien/thitca/5.jpg",
  },
  {
    name: "Trứng gà non",
    price: "145000",
    priceOld: "",
    discount: "",
    img: "/asset/img/phobien/thitca/6.jpg",
  },
  {
    name: "Gà thả vườn (gà tam hoàng)",
    price: "58000",
    priceOld: "63.000 đ",
    discount: "",
    img: "/asset/img/phobien/thitca/7.jpg",
  },
  {
    name: "Ức gà phi lê",
    price: "60000",
    priceOld: "",
    discount: "",
    img: "/asset/img/phobien/thitca/8.jpg",
  },
];

function eventUser() {
  // USER
  let userEl = document.querySelector(".user_profile");
  let userItem = document.querySelector(".user_item");
  userEl.addEventListener("click", (e) => {
    e.preventDefault();
    userItem.classList.toggle("active");
  });

  // GIOI THIEU
  let interPage = document.querySelector("#interduce_page");
  let homePage = document.querySelector("#home_page");
  let signupPage = document.querySelector("#signup_page");
  let signinPage = document.querySelector("#signin_page");
  let interDuce = document.querySelector(".interducePage");
  interDuce.addEventListener("click", () => {
    homePage.classList.add("active");
    interPage.classList.add("active");
    signupPage.classList.remove("active");
    signinPage.classList.remove("active");
  });

  // Home Page
  let home_page = document.querySelector(".homePage");
  home_page.addEventListener("click", () => {
    homePage.classList.remove("active");
    interPage.classList.remove("active");
    signupPage.classList.remove("active");
    signinPage.classList.remove("active");
  });

  // Signin
  let signIn = document.querySelector(".sign_in");
  signIn.addEventListener("click", () => {
    signinPage.classList.remove("active");
    interPage.classList.remove("active");
    homePage.classList.add("active");
    signupPage.classList.add("active");
  });
  // Sigup
  let signUn = document.querySelector(".sign_up");
  signUn.addEventListener("click", () => {
    signupPage.classList.remove("active");
    signinPage.classList.add("active");
    interPage.classList.remove("active");
    homePage.classList.add("active");
  });
}
// Render product new
function renderNew() {
  let outputNew = "";
  let repeatBox = document.querySelectorAll(".repeat-box");
  for (let i = 0; i < repeatBox.length; i++) {
    let size = 3;
    const subArrs = [];
    for (let j = 0; j < newProducts.length; j += size) {
      const subArr = newProducts.slice(j, j + size);
      subArrs.push(subArr);
    }
    const html = subArrs[i]
      .map((item) => {
        let a = +item.price;
        let formatA = priceToString(a);
        return /*html*/ `
        <article class="newpro"> 
          <div class="box_img">
            <img class="img_prod" src= ${item.img} alt="">
            <div class="box_discount div_empty">${item.discount}</div>
          </div>
              <div class="box_infor">
                <h3 class="hover_green name_prod">${item.name}</h3>
                <div class="box_star">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>                              
                </div>
                <div class="box_cart">
                  <div class="box_money text_small price_prod">
                    ${formatA}
                    </div>
                    <span>${item.priceOld}</span>
              <i class="fa-solid fa-cart-plus btn_cart"></i>
            </div>
          </div>
        </article>
      `;
      })
      .join("");
    outputNew = html;
    repeatBox[i].innerHTML = outputNew;
  }
}
// Render popalur theo chủ để
function itemPopalur() {
  let btnList = document.querySelectorAll(".popalur_item");
  btnList.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      btnList.forEach(function (item) {
        item.classList.remove("active");
      });
      if (item.textContent === "Rau củ quả") {
        item.classList.add("active");
        renderPopalur(raucuProduct);
      } else if (item.textContent === "Bột, Ngũ cốc") {
        item.classList.add("active");
        renderPopalur(ngucocProduct);
      } else if (item.textContent === "Hải sản") {
        item.classList.add("active");
        renderPopalur(haisanProduct);
      } else if (item.textContent === "Thực phẩm đông lạnh") {
        item.classList.add("active");
        renderPopalur(donglanhProduct);
      } else if (item.textContent === "Su shi & Sashimi Deli") {
        item.classList.add("active");
        renderPopalur(shushiProduct);
      } else {
        item.classList.add("active");
        renderPopalur(thicaProduct);
      }
    });
  });
}

// Render product popalur
function renderPopalur(arrPopalur) {
  let productPopalur = document.querySelector(".product_popalur");
  let html = arrPopalur
    .map((item) => {
      let a = +item.price;
      let formatA = priceToString(a);
      return /*html*/ `
      <div class="col col-6 col-lg-3 py-2">
          <div class="card card_popalur d-flex flex-column align-items-center">
            <div class="card-img poplaur_img">
              <img src=${item.img} class="img_prod" alt="..." />
              <div class="box_discount div_empty">${item.discount}</div>
            </div>
                <div class="card-body w-100">
                    <h5 class="card-title popalur_title hover_green name_prod">${item.name}</h5>
                    <div class="box_star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="cart-money box_cart">
                        <p class="card-text price_prod">${formatA}</p>
                        <span>${item.priceOld}</span>
                        <i class="fa-solid fa-basket-shopping btn_cart"></i>
                    </div>
                </div>
            </div>
          </div> 
    `;
    })
    .join("");
  productPopalur.innerHTML = html;
}

function renderSelling() {
  let sellingProduct = document.querySelector(".sell_carousel");
  let html = newProducts
    .map((item) => {
      let a = +item.price;
      let formatA = priceToString(a);
      return /*html*/ `
                                          <div class="col">
                                        <div class="card sell_card">
                                            <div class="card-img sell_img">
                                                <img src=${item.img} class="img_prod" alt="..." />
                                                <div class="box_discount div_empty">${item.discount}</div>
                                            </div>
                                            <div class="card-body sell_list-body">
                                                <h5 class=" sell_title name_prod">${item.name}</h5>
                                                <div class="box_star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                                <div class="box_cart d-flex align-items-center ">
                                                    <p class="box_money sell_text price_prod">${formatA}</p>
                                                    <span>${item.priceOld}</span>
                                                </div>
                                                <div class="sell_line"></div>
                                                <p class="sell_status">Còn hàng</p>
                                                <div class="box_cart">
                                                  <button class="btn_cart sell_btn dmc_btn price_prod">
                                                    <i class="fa-solid fa-cart-plus"></i>
                                                    <span>Thêm giỏ hàng</span>
                                                </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    `;
    })
    .join("");
  sellingProduct.innerHTML = html;
}
// SlideShow Selling

function slideSell() {
  let carousel = document.querySelector(".sell_carousel");

  carousel.addEventListener("mousemove", dragging);
}

// String to VND
function priceToString(number) {
  let numberString = number.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return numberString;
}

// Thêm sản phẩm vào giỏ hàng
function addCart() {
  let btnCart = document.querySelectorAll(".btn_cart");

  btnCart.forEach((item) => {
    item.addEventListener("click", () => {
      renderCart(item);
    });
  });
}
// Tạo list lưu giỏ hàng
let cartItems = [];
function renderCart(button) {
  let product = button.parentElement.parentElement;
  let productImg = product.parentElement;
  let nameProduct = product.querySelector(".name_prod").innerHTML;
  let imgProduct = productImg.querySelector(".img_prod").src;
  let priceProduct = product.querySelector(".price_prod").innerHTML;
  // Check có chưa
  let existingItem = cartItems.find((item) => {
    return item.name === nameProduct;
  });
  if (existingItem) {
    existingItem.quantity++;
  } else {
    let newItem = {
      name: nameProduct,
      price: priceProduct,
      img: imgProduct,
      quantity: 1,
    };
    cartItems.push(newItem);
  }
  cartForm(cartItems);
}
// Render khi có list giỏ hàng
function cartForm(cartItems) {
  let total = 0;
  let numberCart = document.querySelector(".posi");
  let formCart = document.querySelector(".total_product");
  let renderProd = cartItems
    .map((item, index) => {
      numberCart.innerHTML = index + 1;
      let b = parseFloat(item.price.replace(/\./g, "").replace("₫", ""));
      let c = b * item.quantity;
      let formatC = priceToString(c);
      total += c;
      return /*html*/ `
          <article class="boder_bottom buy_product">
          <div class="box_img">
           <img src= ${item.img} alt="">
                                  </div>
                                  <div class="box_infor">
                                      <div class="buy_title d-flex justify-content-between">
                                          <h3 class="hover_green cart_name">${item.name}</h3>
                                          <i class="fa-solid fa-xmark hover_green btn_close"></i>
                                      </div>
                                      <div class="box_cart">
                                          <div class="box_money text_small box_total">
                                              ${formatC} 
                                            </div>
                                            <div class="user_card-number d-inline-block ms-2">${item.quantity}</div>
                                      </div>
                                  </div>
                              </article>
  `;
    })
    .join("");

  formCart.innerHTML = renderProd;
  let totalEnd = priceToString(total);
  let totalMoney = document.querySelector(".user_total-money span");
  totalMoney.innerHTML = totalEnd;
  removeCart(cartItems);
}
// Xóa sản phẩm trong giỏ hàng
function removeCart(cartItems) {
  if (cartItems.length > 0) {
    let btnClose = document.querySelectorAll(".btn_close");
    btnClose.forEach((item) => {
      item.addEventListener("click", () => {
        let product = item.parentElement.parentElement;
        let productName = product.querySelector(".cart_name").innerHTML;
        const productIndex = cartItems.findIndex(
          (product) => product.name === productName
        );
        if (productIndex !== 1) {
          cartItems.splice(productIndex, 1);
          cartForm(cartItems);
        }
      });
    });
  }
}
function start() {
  eventUser();
  renderPopalur(ngucocProduct);
  itemPopalur();
  renderSelling();
  // slideSell();
  renderNew();
  addCart();
}
start();
// Hung
const loginForm = document.getElementById("login");
const errorEl = document.querySelector(".errorMsg");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const emailEl = loginForm.email;
  const emaill = emailEl.value;
  const relexEmail = /^\w{4,}@\w+\.\w+$/;
  if (emaill === " ") {
    errorEl.innerHTML = "Vui lòng không để chống thông tin";
    emailEl.classList.add("errorborder");
  } else if (emaill.length < 8) {
    errorEl.innerHTML = "Email phải có ít nhất 8 ký tự.Ví dụ : infor@gmail.com";
    emailEl.classList.add("errorborder");
  } else if (relexEmail.test(emaill) === false) {
    errorEl.innerHTML =
      "Vui lòng điền đúng định dạng Email. Ví dụ: infor@gmail.com";
    emailEl.classList.add("errorborder");
  } else {
    errorEl.innerHTML = "";
    emailEl.classList.remove("errorborder");
  }
});
