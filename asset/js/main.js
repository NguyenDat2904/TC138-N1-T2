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
        let formatA = a.toLocaleString("vi-VN", {
          style: "currency",
          currency: "VND",
        });
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

function addCart() {
  let btnCart = document.querySelectorAll(".btn_cart");

  btnCart.forEach((item) => {
    item.addEventListener("click", () => {
      renderCart(item);
    });
  });
}
let cartItems = [];
function renderCart(button) {
  let total = 0;
  let formCart = document.querySelector(".total_product");
  let numberCart = document.querySelector(".posi");
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
  let renderProd = cartItems
    .map((item, index) => {
      numberCart.innerHTML = index + 1;
      let b = parseFloat(item.price.replace(/\./g, "").replace("₫", ""));
      let c = b * item.quantity;
      let formatC = c.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
      total += c;
      return /*html*/ `
          <article class="boder_bottom buy_product">
          <div class="box_img">
           <img src= ${item.img} alt="">
                                  </div>
                                  <div class="box_infor">
                                      <div class="buy_title d-flex justify-content-between">
                                          <h3 class="hover_green">${item.name}</h3>
                                          <i class="fa-solid fa-xmark hover_green"></i>
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
  let totalEnd = total.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  let totalMoney = document.querySelector(".user_total-money span");
  totalMoney.innerHTML = totalEnd;
}
function start() {
  eventUser();
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
