const newProducts = [
  {
    name: "Chuối sấy",
    price: "36000",
    priceOld: "39.000 đ",
    discount: "-8%",
    img: "picter/img/spmoi/chuoi-say.jpg",
  },
  {
    name: "Khoai lang tím sấy",
    price: "50000",
    priceOld: "56.000 đ",
    discount: "-11%",
    img: "picter/img/spmoi/khoai-lang-tim.jpg",
  },
  {
    name: "Dâu tây sấy",
    price: "1400000",
    priceOld: "1.440.000 đ",
    discount: "-3%",
    img: "picter/img/spmoi/dau-tay-say2.jpg",
  },
  {
    name: "Táo Rockit - Nhập khẩu",
    price: "115000",
    priceOld: "",
    discount: "",
    img: "picter/img/spmoi/rockit-apple.jpg",
  },
  {
    name: "Bắp cải xoăn",
    price: "25000",
    priceOld: "",
    discount: "",
    img: "picter/img/spmoi/bap-cai-xoan.jpg",
  },
  {
    name: "Dưa hấu",
    price: "15000",
    priceOld: "20.000 đ",
    discount: "-25%",
    img: "picter/img/spmoi/duahau.jpg",
  },
  {
    name: "Óc chó vị caramel Nutty hũ 150g",
    price: "85000",
    priceOld: "90.000 đ",
    discount: "-6%",
    img: "picter/img/spmoi/occho.jpg",
  },
  {
    name: "Hạt điều rang muối Thành Việt hủ 170g",
    price: "76000",
    priceOld: "80.000 đ",
    discount: "-5%",
    img: "picter/img/spmoi/hatdieu.jpg",
  },
  {
    name: "Hạt mắc ca Thành Việt hộp 400g",
    price: "170000",
    priceOld: "",
    discount: "",
    img: "picter/img/spmoi/mackai.jpg",
  },
];
const ngucocProduct = [
  {
    name: "Óc chó vị caramel Nutty hũ 150g",
    price: "85000",
    priceOld: "90.000 đ",
    discount: "-6%",
    img: "picter/img/ngucoc/occho.jpg",
  },
  {
    name: "Hạt điều rang muối Thành Việt hủ 170g",
    price: "76000",
    priceOld: "80.000 đ",
    discount: "-5%",
    img: "picter/img/ngucoc/hatdieu.jpg",
  },
  {
    name: "Hạt mắc ca Thành Việt hộp 400g",
    price: "170000",
    priceOld: "",
    discount: "",
    img: "picter/img/ngucoc/mackai.jpg",
  },
  {
    name: "Ngũ cốc dinh dưỡng VinaCafe B'fast bịch 500g",
    price: "60000",
    priceOld: "100.000 đ",
    discount: "-40%",
    img: "picter/img/ngucoc/nguccoc.jpg",
  },
];
const raucuProduct = [
  {
    name: "Bắp ngọt Lambweston 1kg",
    price: "165000",
    priceOld: "",
    discount: "",
    img: "picter/img/phobien/raucu/bapngot.png",
  },
  {
    name: "DƯA CHUỘT NGÂM DẤM 190G",
    price: "218000",
    priceOld: "230.000 đ",
    discount: "-5%",
    img: "picter/img/phobien/raucu/duachuot.png",
  },
  {
    name: "Chuối sấy",
    price: "360000",
    priceOld: "39.000 đ",
    discount: "-8%",
    img: "picter/img/phobien/raucu/chuoi-say.jpg",
  },
  {
    name: "Táo xay nhuyễn Vitabio 90g bó",
    price: "35000",
    priceOld: "",
    discount: "",
    img: "picter/img/phobien/raucu/taoxay.jpg",
  },
  {
    name: "Khoai lang tím sấy",
    price: "50000",
    priceOld: "56.000 đ",
    discount: "-11%",
    img: "picter/img/phobien/raucu/khoai-lang-tim.jpg",
  },
  {
    name: "Dâu tây sấy",
    price: "1400000",
    priceOld: "1.440.000 đ",
    discount: "-3%",
    img: "picter/img/spmoi/dau-tay-say2.jpg",
  },
  {
    name: "Táo Rockit - Nhập khẩu",
    price: "115000",
    priceOld: "",
    discount: "",
    img: "picter/img/spmoi/rockit-apple.jpg",
  },
  {
    name: "Cải bó xôi Ardo 450g",
    price: "350000",
    priceOld: "",
    discount: "",
    img: "picter/img/phobien/raucu/boxoi.jpg",
  },
];
const haisanProduct = [
  {
    name: "Cụm Chân Cua King Crab Đông Lạnh",
    price: "1045000",
    priceOld: "1.450.000 đ",
    discount: "-28%",
    img: "picter/img/phobien/haisan/cuaking.jpg",
  },
  {
    name: "Tôm hùm tươi sống Canada",
    price: "1050000",
    priceOld: "1.360.000 đ",
    discount: "-23%",
    img: "picter/img/phobien/haisan/tumhum.jpg",
  },
  {
    name: "Tôm thẻ hữu cơ",
    price: "160000",
    priceOld: "",
    discount: "",
    img: "picter/img/phobien/haisan/tom-the-huu-co.jpg",
  },
  {
    name: "Tôm sắt biển",
    price: "280000",
    priceOld: "",
    discount: "",
    img: "picter/img/phobien/haisan/tom-sat-bien.jpg",
  },
  {
    name: "Tôm hùm - Crawfish",
    price: "300000",
    priceOld: "360.000 đ",
    discount: "-17%",
    img: "picter/img/phobien/haisan/tumhumcar.jpg",
  },
  {
    name: "Tôm he",
    price: "420000",
    priceOld: "",
    discount: "",
    img: "picter/img/phobien/haisan/tom-he.jpg",
  },
  {
    name: "Tôm tít sống",
    price: "807500",
    priceOld: "850.000 đ",
    discount: "-5%",
    img: "picter/img/phobien/haisan/tom-tich-1.jpg",
  },
  {
    name: "Tôm càng xanh",
    price: "520000",
    priceOld: "",
    discount: "",
    img: "picter/img/phobien/haisan/tom-cang-xanh-a-1.jpg",
  },
];
const donglanhProduct = [
  {
    name: "Cụm Chân Cua King Crab Đông Lạnh",
    price: "1045000",
    priceOld: "1.450.000 đ",
    discount: "-28%",
    img: "picter/img/phobien/haisan/cuaking.jpg",
  },
  {
    name: "Tôm sắt biển",
    price: "280000",
    priceOld: "",
    discount: "",
    img: "picter/img/phobien/haisan/tom-sat-bien.jpg",
  },
  {
    name: "Tôm Hùm Bông",
    price: "980000",
    priceOld: "",
    discount: "",
    img: "picter/img/phobien/donglanh/tom-hum-bong-1.jpg",
  },
  {
    name: "Cá Hồi Nguyên Con Tươi",
    price: "2100000",
    priceOld: "",
    discount: "",
    img: "picter/img/phobien/donglanh/ca-hoi-nguyen-con-3.jpg",
  },
  {
    name: "Xương Cá Hồi",
    price: "18000",
    priceOld: "",
    discount: "",
    img: "picter/img/phobien/donglanh/xuong-ca-hoi-1.jpg",
  },
  {
    name: "Cá Hồi Phi Lê Đông Lạnh",
    price: "195000",
    priceOld: "",
    discount: "",
    img: "picter/img/phobien/donglanh/ca-hoi-phi-le-dong-lanh.png",
  },
  {
    name: "Thịt Càng Ghẹ",
    price: "390000",
    priceOld: "",
    discount: "",
    img: "picter/img/phobien/donglanh/thitcangghe.png",
  },
  {
    name: "Tôm hùm - Crawfish",
    price: "300000",
    priceOld: "360.000 đ",
    discount: "",
    img: "picter/img/phobien/haisan/tumhumcar.jpg",
  },
];
const shushiProduct = [
  {
    name: "Sushi 9B",
    price: "245000",
    priceOld: "270.000 đ",
    discount: "-9%",
    img: "picter/img/phobien/shushi/9B.png",
  },
  {
    name: "Sushi Mix 4B",
    price: "145500",
    priceOld: "160.000 đ",
    discount: "-9%",
    img: "picter/img/phobien/shushi/4b.png",
  },
  {
    name: "Sashimi Cá Hồi",
    price: "254000",
    priceOld: "270.000 đ",
    discount: "-6%",
    img: "picter/img/phobien/shushi/sushicahoi.png",
  },
  {
    name: "Sushi Mix 10A",
    price: "247500",
    priceOld: "275.000 đ",
    discount: "-10%",
    img: "picter/img/phobien/shushi/10A.png",
  },
  {
    name: "Combo Sashimi 6B",
    price: "585000",
    priceOld: "650.000 đ",
    discount: "-10%",
    img: "picter/img/phobien/shushi/6B.png",
  },
];
const thicaProduct = [
  {
    name: "Phi Lê heo Mangalica",
    price: "340000",
    priceOld: "",
    discount: "",
    img: "picter/img/phobien/thitca/1.jpg",
  },
  {
    name: "Sườn BBQ heo Canada",
    price: "350000",
    priceOld: "",
    discount: "",
    img: "picter/img/phobien/thitca/2.jpg",
  },
  {
    name: "Đùi vịt góc tư tươi",
    price: "68000",
    priceOld: "71.000 đ",
    discount: "-4%",
    img: "picter/img/phobien/thitca/3.jpg",
  },
  {
    name: "Ức vịt tươi (kg)",
    price: "250000",
    priceOld: "",
    discount: "",
    img: "picter/img/phobien/thitca/4.jpg",
  },
  {
    name: "Vịt tươi nguyên con (kg)",
    price: "65000",
    priceOld: "",
    discount: "",
    img: "picter/img/phobien/thitca/5.jpg",
  },
  {
    name: "Trứng gà non",
    price: "145000",
    priceOld: "",
    discount: "",
    img: "picter/img/phobien/thitca/6.jpg",
  },
  {
    name: "Gà thả vườn (gà tam hoàng)",
    price: "58000",
    priceOld: "63.000 đ",
    discount: "",
    img: "picter/img/phobien/thitca/7.jpg",
  },
  {
    name: "Ức gà phi lê",
    price: "60000",
    priceOld: "",
    discount: "",
    img: "picter/img/phobien/thitca/8.jpg",
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
  let homePage = document.querySelector("#home_page");
  let interPage = document.querySelector("#interduce_page");
  let contactPage = document.querySelector("#contact_page");
  let healthyPage = document.querySelector("#healthy_page");
  let signupPage = document.querySelector("#signup_page");
  let signinPage = document.querySelector("#signin_page");
  // gioi thieu
  let interDuce = document.querySelector(".interducePage");
  interDuce.addEventListener("click", () => {
    homePage.classList.add("active");
    interPage.classList.add("active");
    contactPage.classList.remove("active");
    signupPage.classList.remove("active");
    signinPage.classList.remove("active");
    healthyPage.classList.remove("active");
  });

  // Home Page
  let home_page = document.querySelector(".homePage");
  home_page.addEventListener("click", () => {
    homePage.classList.remove("active");
    interPage.classList.remove("active");
    signupPage.classList.remove("active");
    signinPage.classList.remove("active");
    contactPage.classList.remove("active");
    healthyPage.classList.remove("active");
  });

  // Lien He
  let contactBtn = document.querySelector(".contactPage");
  contactBtn.addEventListener("click", () => {
    contactPage.classList.add("active");
    homePage.classList.add("active");
    interPage.classList.remove("active");
    signupPage.classList.remove("active");
    signinPage.classList.remove("active");
    healthyPage.classList.remove("active");
  });
  // Song khoe
  let healthyBtn = document.querySelector(".healthyPage");
  healthyBtn.addEventListener("click", () => {
    healthyPage.classList.add("active");
    homePage.classList.add("active");
    interPage.classList.remove("active");
    signupPage.classList.remove("active");
    signinPage.classList.remove("active");
    contactPage.classList.remove("active");
  });

  // Signin
  let signIn = document.querySelector(".sign_in");
  signIn.addEventListener("click", () => {
    signupPage.classList.remove("active");
    interPage.classList.remove("active");
    homePage.classList.add("active");
    signinPage.classList.add("active");
    contactPage.classList.remove("active");
    healthyPage.classList.remove("active");
  });
  // Sigup
  let signUn = document.querySelector(".sign_up");
  signUn.addEventListener("click", () => {
    signinPage.classList.remove("active");
    signupPage.classList.add("active");
    interPage.classList.remove("active");
    homePage.classList.add("active");
    contactPage.classList.remove("active");
    healthyPage.classList.remove("active");
  });
}

function fixedScrol() {
  window.addEventListener("scroll", () => {
    let cardActive = document.querySelector(".user_card-scroll");
    if (window.scrollY > 80) {
      cardActive.classList.add("active");
    } else {
      cardActive.classList.remove("active");
    }
  });
}
function menuMobile() {
  let menuBar = document.querySelector(".btn_menu");
  let btncloseMenu = document.querySelector(".nav_mobile-btn");
  menuBar.addEventListener("click", () => {
    let navBarMobile = document.querySelector(".nav_mobile");
    navBarMobile.classList.add("active");
  });
  btncloseMenu.addEventListener("click", () => {
    let navBarMobile = document.querySelector(".nav_mobile");
    navBarMobile.classList.remove("active");
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
                        <button class="btn_cart"  type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    <i class="fa-solid fa-basket-shopping"></i>
                        </button>
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
      <div class="col col-12 col-sm-6 col-md-4 col-lg-3 py-2">
          <div class="card card_popalur d-flex flex-column align-items-center papolur_hover">
            <div class="card-img poplaur_img">
              <img src=${item.img} class="img_prod" alt="..." />
              <div class="box_discount div_empty">${item.discount}</div>
              <div class="popalur_box-icon">
                <i class="fa-solid fa-shuffle popalur_icon"></i>
                <i class="fa-regular fa-heart popalur_icon"></i>
                <i class="fa-regular fa-eye popalur_icon"></i>
              </div>
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
                        <!-- Box model -->
                        <button class="btn_cart"  type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                          <i class="fa-solid fa-basket-shopping"></i>
                        </button>
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                              <div class="modal-content model_box">
                                <div class="modal-header">
                                  <h1 class="modal-title model_title" id="staticBackdropLabel">Thêm vào giỏ hàng thành công</h1>
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn_buy-model btn_buy-more" data-bs-dismiss="modal">Mua thêm</button>
                                  <button type="button" class="btn_buy-model btn_buy-cart">Giỏ hàng</button>
                                </div>
                              </div>
                            </div>
                          </div>
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
                                          <div class="col col-12 col-sm-6 col-md-4">
                                        <div class="card sell_card papolur_hover">
                                            <div class="card-img sell_img poplaur_img">
                                                <img src=${item.img} class="img_prod " alt="..." />
                                                <div class="box_discount div_empty">${item.discount}</div>
                                                <div class="popalur_box-icon">
                                                  <i class="fa-solid fa-shuffle popalur_icon"></i>
                                                  <i class="fa-regular fa-heart popalur_icon"></i>
                                                  <i class="fa-regular fa-eye popalur_icon"></i>
                                                </div>
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
                                                  <button class="btn_cart sell_btn dmc_btn price_prod w-100" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                    <i class="fa-solid fa-cart-plus"></i>
                                                    <span>Thêm giỏ hàng</span>
                                                </button>
                                                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                      <div class="modal-dialog">
                                                        <div class="modal-content model_box">
                                                          <div class="modal-header">
                                                            <h1 class="modal-title model_title" id="staticBackdropLabel">Thêm vào giỏ hàng thành công</h1>
                                                          </div>
                                                          <div class="modal-footer">
                                                            <button type="button" class="btn_buy-model btn_buy-more" data-bs-dismiss="modal">Mua thêm</button>
                                                            <button type="button" class="btn_buy-model btn_buy-cart">Giỏ hàng</button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
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
  let cartCount = -1;
  let total = 0;
  let numberCart = document.querySelectorAll(".posi");
  let formCart = document.querySelectorAll(".total_product");
  let renderProd = cartItems
    .map((item) => {
      cartCount++;
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
  numberCart.forEach((item) => {
    if (cartItems.length < 1) {
      item.innerHTML = `0`;
    } else {
      item.innerHTML = cartCount++;
    }
  });
  formCart.forEach((item) => {
    item.innerHTML = renderProd;
  });
  let totalEnd = priceToString(total);
  let totalMoney = document.querySelectorAll(".user_total-money span");
  totalMoney.forEach((item) => {
    item.innerHTML = totalEnd;
  });
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
        const productIndex = cartItems.findIndex((prod) => {
          return prod.name === productName;
        });
        if (productIndex >= 0) {
          cartItems.splice(productIndex, 1);
          cartForm(cartItems);
        }
      });
    });
  }
}

// validate form đăng ký
function validateSignup() {
  const tosignUp_page = document.querySelector(".signUp_page");
  const p_get = document.querySelectorAll(".poot");
  tosignUp_page.addEventListener("submit", function (e) {
    e.preventDefault();
    const fullNameEl = tosignUp_page.fullname;
    const fullName = fullNameEl.value;
    if (fullName === "") {
      p_get[0].innerHTML = "Bạn vui lòng nhập đầy đủ họ và tên!";
    } else {
      p_get[0].innerHTML = "";
    }
    const phoneEl = tosignUp_page.phoneNumber;
    const phone = phoneEl.value;
    if (phone === "") {
      p_get[1].innerHTML = "Bạn vui lòng nhập số điện thoại!";
    } else if (isNaN() === true) {
      p_get[1].innerHTML = "Vui lòng nhập số!";
    } else if (phone.length !== 9) {
      p_get[1].innerHTML = "Số của bạn bị sai vui lòng nhập lại!";
    } else {
      p_get[1].innerHTML = "";
    }
    const toaddress = tosignUp_page.address;
    const toadd = toaddress.value;
    if (toadd === "") {
      p_get[2].innerHTML = " Vui lòng nhập địa chỉ!";
    } else {
      p_get[2].ỉnnerHTML = "";
    }
    const fullEmailEl = tosignUp_page.fullemail;
    const fullEmail = fullEmailEl.value;
    const relexfullEmail = /^\w{4,}@\w+\.\w+$/;
    if (fullEmail === " ") {
      p_get[3].innerHTML = "Vui lòng nhập email";
    } else if (fullEmail.length < 8) {
      p_get[3].innerHTML =
        "Email phải có ít nhất 8 ký tự.Ví dụ : infor@gmail.com";
    } else if (relexfullEmail.test(fullEmail) === false) {
      p_get[3].innerHTML =
        "Vui lòng điền đúng định dạng Email. Ví dụ: infor@gmail.com";
    } else {
      p_get[3].innerHTML = "";
    }
    const touserNameEl = tosignUp_page.userName;
    const touserName = touserNameEl.value;
    if (touserName === "") {
      p_get[4].innerHTML = "Vui lòng nhập tên truy cập!";
    } else {
      p_get[4].innerHTML = "";
    }
    const topasswordEl = tosignUp_page.password;
    const topassword = topasswordEl.value;
    if (topassword === "") {
      p_get[5].innerHTML = "Vui lòng nhập mật khẩu!";
    } else if (topassword.length < 5) {
      p_get[5].innerHTML = "Bảo mật kém vui lòng nhập mật khẩu dài hơn!";
    } else {
      p_get[5].innerHTML = "";
    }
    const toconfirmPasswordEl = tosignUp_page.confirmPassword;
    const toconfirmPassword = toconfirmPasswordEl.value;
    if (toconfirmPassword === "") {
      p_get[6].innerHTML = "Vui lòng xác nhận mật khẩu!";
    } else if (toconfirmPassword !== topassword) {
      p_get[6].innerHTML = "Xác nhận không đúng vui lòng nhập lại!";
    } else {
      p_get[6].innerHTML = "";
    }
  });
}
// Hung
function validateContact() {
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
      errorEl.innerHTML =
        "Email phải có ít nhất 8 ký tự.Ví dụ : infor@gmail.com";
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
}

function validateContactOne() {
  const enterInformationWrongEl = document.querySelector(
    ".enterInformationWrong"
  );
  const wrongEl = document.querySelectorAll(".wrong");
  enterInformationWrongEl.addEventListener("submit", function (rong) {
    rong.preventDefault();
    const fullEnterNameEl = enterInformationWrongEl.namexl;
    const fullEnterName = fullEnterNameEl.value;
    if (fullEnterName === "") {
      wrongEl[0].innerHTML = "Bạn vui lòng nhập đầy đủ họ và tên!";
    } else {
      wrongEl[0].innerHTML = "";
    }
    const fullEnterEmailEl = enterInformationWrongEl.emailxl;
    const fullEnterEmail = fullEnterEmailEl.value;
    const relexfullEnterEmail = /^\w{4,}@\w+\.\w+$/;
    if (fullEnterEmail === " ") {
      wrongEl[1].innerHTML = "Vui lòng nhập email";
    } else if (fullEnterEmail.length < 8) {
      wrongEl[1].innerHTML =
        "Email phải có ít nhất 8 ký tự.Ví dụ : infor@gmail.com";
    } else if (relexfullEnterEmail.test(fullEnterEmail) === false) {
      wrongEl[1].innerHTML =
        "Vui lòng điền đúng định dạng Email. Ví dụ: infor@gmail.com";
    } else {
      wrongEl[1].innerHTML = "";
    }

    const enterphoneEl = enterInformationWrongEl.numberxl;
    const enterphone = enterphoneEl.value;
    if (enterphone === "") {
      wrongEl[2].innerHTML = "Bạn vui lòng nhập số điện thoại!";
    } else if (isNaN() === true) {
      wrongEl[2].innerHTML = "Vui lòng nhập số!";
    } else if (enterphone.length !== 9) {
      wrongEl[2].innerHTML = "Số của bạn bị sai vui lòng nhập lại!";
    } else {
      wrongEl[2].innerHTML = "";
    }
    const toEnteraddress = enterInformationWrongEl.addressxl;
    const toEnteradd = toEnteraddress.value;
    if (toEnteradd === "") {
      wrongEl[3].innerHTML = " Vui lòng nhập địa chỉ!";
    } else {
      wrongEl[3].ỉnnerHTML = "";
    }
    const totextareaxlEl = enterInformationWrongEl.textareaxl;
    const totextareaxl = totextareaxlEl.value;
    if (totextareaxl === "") {
      wrongEl[4].innerHTML = "Vui lòng nhập nội dung";
    } else {
      wrongEl[4].innerHTML = "";
    }
  });
}

function start() {
  eventUser();
  fixedScrol();
  menuMobile();
  renderPopalur(ngucocProduct);
  itemPopalur();
  renderSelling();
  renderNew();
  addCart();
  validateContact();
  validateContactOne();
  validateSignup();
}
start();

// Khuyen mai
const swipe = document.getElementById("swipe");
const buttonLeft = document.getElementById("button-1");
const buttonRight = document.getElementById("button-2");
const length = 5;

let index = -2;
let translateX = index * 205;
swipe.style.transform = `translate3d(${translateX}px, 0px, 0px)`;
buttonLeft.addEventListener("click", function () {
  index = index === 0 ? -length + 1 : index + 1;
  translateX = index * 405;
  swipe.style.transform = `translate3d(${translateX}px, 0px, 0px)`;
});

buttonRight.addEventListener("click", function () {
  index = index === -length - 1 ? -2 : index - 1;
  translateX = index * 405;
  swipe.style.transform = `translate3d(${translateX}px, 0px, 0px)`;
});
