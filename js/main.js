let logo = document.getElementById("logo")
let cardRow = document.getElementById("cardRow")
// let Search = document.getElementById("Search")
let Categories = document.getElementById("Categories")
let CategoriesRow = document.getElementById("CategoriesRow")
let Area = document.getElementById("Area")
let Ingredients = document.getElementById("Ingredients")
let ContactUs = document.getElementById("ContactUs")
let asidebtn = document.querySelector('.asidebtn')
let side = document.querySelector('.aside')
let loading = document.querySelector('.loader')
let form2 = document.getElementById("form2")
let nameInput = document.getElementById("nameInput")
let emailInput = document.getElementById("emailInput")
let phoneInput = document.getElementById("phoneInput")
let ageInput = document.getElementById("ageInput")
let passwordInput = document.getElementById("passwordInput")
let rePasswordInput = document.getElementById("rePasswordInput")

// nav bar section 
asidebtn.addEventListener('click', (e) => {
    side.classList.toggle('active')

    if (asidebtn.classList.contains('open-close-icon')) {
        asidebtn.classList.replace('open-close-icon', 'fa-xmark')

    } else {
        asidebtn.classList.replace('fa-xmark', 'open-close-icon')

    }
})
//  first enter face api  section 
async function enterFace() {
    let api = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
    let res = await api.json();
    arr = res.meals
    display(arr)
    console.log(res);
}
enterFace()
function display(arr) {
    loading.classList.remove('d-none')
    loading.classList.add('d-block')

    let temp = ``
    for (let i = 0; i < arr.length; i++) {
        temp += `<div class="col-3 g-3" onclick=(getTitleApi(${arr[i].idMeal}))>
        <div class="all position-relative ">
        <img src="${arr[i].strMealThumb}" alt="" class="w-100 rounded-3">
        <div class="layar text-center py-5">
            <h2>${arr[i].strMeal}</h2>
        </div>
    </div>
    </div>`;
    }
    document.getElementById("cardRow").innerHTML = temp
    setTimeout(() => {
        loading.classList.remove('d-block')
        loading.classList.add('d-none')
    }, 2500);

}
// Search display  sections
async function getMealsSearchName(name, div) {
    let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    let res = await api.json();

    console.log(res.meals);
    displaySearchMeals(res.meals, div)
}
// !!!!!!!!!!!!!! MealsSearchLetter section 
async function getMealsSearchLetter(letter, div) {
    let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
    let res = await api.json();

    console.log(res.meals);
    displaySearchMeals(res.meals, div)
}
function SearchDisplay(arr) {
    document.getElementById("cardRow").innerHTML =
        `
    <div class="col-6">
    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search by name"id="nameInput" aria-label="Search">
    </form>
</div>
<div class="col-6">
    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search by first letter"id="letterInput"  aria-label="Search" maxLength="1">
    </form>
</div>
<div class="row searchMeals"></div>
`;

    let nameInput = document.getElementById('nameInput');
    let letterInput = document.getElementById('letterInput');
    let searchMeals = document.querySelector('#cardRow .searchMeals');

    nameInput.addEventListener('input', (e) => {
        getMealsSearchName(nameInput.value, searchMeals)
    })
    letterInput.addEventListener('input', (e) => {
        getMealsSearchLetter(letterInput.value, searchMeals)
    })

}
//   displaySearchMeals   section
function displaySearchMeals(arr, div) {
    loading.classList.remove('d-none')
    loading.classList.add('d-block')

    let box = ''
    for (let i = 0; i < arr.length; i++) {
        box += `<div class="col-3 g-3" onclick=(getTitleApi(${arr[i].idMeal}))>
        <div class="all position-relative ">
        <img src="${arr[i].strMealThumb}" alt="" class="w-100 rounded-3">
        <div class="layar text-center py-5">
            <h2>${arr[i].strMeal}</h2>
        </div>
    </div>
    </div>`;

        div.innerHTML = box
        setTimeout(() => {
            loading.classList.remove('d-block')
            loading.classList.add('d-none')
        }, 2500);
    }
}
// Category display
async function getCategory() {

    let api2 = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    let res2 = await api2.json();
    arr2 = res2.categories
    displayCategory(arr2)
    console.log(res2);
}

//   MealsCategory  section api 
async function getMealsCategory(cat) {

    let api4 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
    let res4 = await api4.json();
    arr4 = res4.meals

    console.log(arr4);
    display(arr4)
}
//   display Category  section
function displayCategory(arr2) {
    loading.classList.remove('d-none')
    loading.classList.add('d-block')


    let temp2 = ``
    // arr2.map(cat=> {
    //     console.log(cat);
    // })
    for (let i = 0; i < arr2.length; i++) {
        temp2 += `<div class="col-3 text-center g-3" onclick=(getMealsCategory("${arr2[i].strCategory}"))>
        <div class="all position-relative ">
            <img src="${arr2[i].strCategoryThumb}" alt="" class="w-100 rounded-3">
            <div class="layar text-center ">
                <h2>${arr2[i].strCategory}</h2>
                <p>${arr2[i].strCategoryDescription.slice(0, 50)}</p>
            </div>
        </div>
    </div>`
    }
    document.getElementById("cardRow").innerHTML = temp2
    setTimeout(() => {
        loading.classList.remove('d-block')
        loading.classList.add('d-none')
    }, 2500);
}
//  Area section api 
async function AreaApi() {
    let api3 = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    let res3 = await api3.json()
    arr3 = res3.meals
    getArea(arr3)
    console.log(res3);
}
// area display section 
function getArea(arr3) {
    loading.classList.remove('d-none')
    loading.classList.add('d-block')

    let temp3 = ``
    for (let i = 0; i < arr3.length; i++) {
        temp3 += `<div class="col-3 g-5 text-center rounded-4 p-3" id="area">
        <i class="fa-solid fa-house-laptop fa-4x text-white io"></i>
        <h2 class="text-white">${arr3[i].strArea}</h2>
    </div>`
    } document.getElementById("cardRow").innerHTML = temp3
    setTimeout(() => {
        loading.classList.add('d-none')
    }, 2500);

}
//  Ingredients  section api 
async function IngredientsApi() {
    let api4 = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
    let res4 = await api4.json();
    arr4 = res4.meals
    getIngredients(arr4)
    console.log(res4);
}
//  Ingredients display section 
function getIngredients(arr4) {
    loading.classList.remove('d-none')
    loading.classList.add('d-block')

    let temp4 = ``
    let newarr = arr4.slice(0, 20);

    for (let i = 0; i < newarr.length; i++) {
        let desc = "";

        if (newarr[i].strDescription.length > 100) {
            desc = newarr[i].strDescription.slice(0, 100);
        } else {
            desc = newarr[i].strDescription
        }
        temp4 += `<div id="int" class="col-3 text-white g-5 text-center p-3 rounded-4 bg-dark" onclick=(IngredientsData("${newarr[i].strIngredient}"))>
        <i class="fa-solid fa-drumstick-bite fa-3x"></i>
        <h1>${newarr[i].strIngredient}</h1>
        <p>${desc}</p>
    </div>`
    } document.getElementById("cardRow").innerHTML = temp4
    setTimeout(() => {
        loading.classList.remove('d-block')
        loading.classList.add('d-none')
    }, 2500);
}
// ! contact and regex section 
function getContact() {

    document.getElementById("cardRow").innerHTML = `
    <div class="container">
            <div class="row g-4" id="contact">
                <div class="col-6">
                    <form class="d-flex" role="search"  id="form2">
                        <input data-input="name" id="nameInput" class="form-control me-2" type="search" placeholder="enter your name "
                            aria-label="Search" required>
                    </form>
                </div>
                <div class="col-6">
                    <form class="d-flex" role="search"  id="form2">
                        <input data-input="email" id="emailInput" class="form-control me-2" type="email" placeholder="enter your email"
                            aria-label="Search" required>
                    </form>
                </div>
                <div class="col-6">
                    <form class="d-flex" role="search"  id="form2">
                        <input data-input="phone" id="phoneInput" class="form-control me-2" type="phone" placeholder="Search by phone"
                            aria-label="Search" required>
                    </form>
                </div>
                <div class="col-6">
                    <form class="d-flex" role="search"  id="form2">
                        <input data-input="age" id="ageInput" class="form-control me-2" type="Number" placeholder="Search by agy" aria-label="Search" required>
                    </form>
                </div>
                <div class="col-6">
                    <form class="d-flex" role="search"  id="form2">
                        <input data-input="pass" id="passwordInput" class="form-control me-2" type="password" placeholder="Search by password"
                            aria-label="Search" required>
                    </form>
                </div>
                <div class="col-6">
                    <form class="d-flex" role="search"  id="form2">
                        <input data-input="repass" id="rePasswordInput" class="form-control me-2" type="password" placeholder="re password" aria-label="Search" required>
                    </form>
                </div>
                <div class="col-12 text-center">
                    <button type="enter" class="btn btn-primary">submit</button>
                </div>
            </div>
        </div>
    
    
    
    `

    let inputs = Array.from(document.querySelectorAll('#contact .form-control'));
    inputs.map(inp=> {
        inp.addEventListener('input',(e)=> {
            if (inp.dataset.input == "name") {
                let name = inp.value;
                let regex = /^[a-z]{1,}/;
                let result = name.match(regex);
                if (result) {
                    inp.style.color = "green"
                } else {
                    
                    inp.style.color = "red"
                }
            }
            // * email regex
            else if (inp.dataset.input == "email") {
                let email = inp.value;
                let regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
                let result = email.match(regex);
                if (result) {
                    inp.style.color = "green"
                } else {
                    
                    inp.style.color = "red"
                }
            }
            // * phone regex
            else if (inp.dataset.input == "phone") {
                let phone = inp.value;
                let regex = /^\d{10,11}$/;
                let result = phone.match(regex);
                if (result) {
                    inp.style.color = "green"
                } else {
                    
                    inp.style.color = "red"
                }
            }
            // * age regex
            else if (inp.dataset.input == "age") {
                let age = inp.value;
                let result = age >= 0;
                if (result) {
                    inp.style.color = "green"
                } else {
                    
                    inp.style.color = "red"
                }

            }
            // * pass regex
            else if (inp.dataset.input == "pass") {
                let pass = inp.value;
                let regex = /^(?=.[0-9])(?=.[a-zA-Z])([a-zA-Z0-9]+){8,}$/;
                let result = pass.match(regex);
                if (result) {
                    inp.style.color = "green"
                } else {
                    
                    inp.style.color = "red"
                }
            }
            // * repass regex
            else if (inp.dataset.input == "repass") {
                // * check if repassword == the password //
                let result = false;
                inps.map((inpt) => {
                    if (inpt.dataset.input == "pass") {
                        result = true ? inpt.value == inp.value : false;
                    }
                });
                if (result) {
                    inp.style.color = "green"
                } else {
                    
                    inp.style.color = "red"
                }
            }
        })
    })
    

}
//  all betels section
async function getTitleApi(btngan) {
                let api5 = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${btngan}`)
                let res5 = await api5.json()
                arr5 = res5.meals
                displayTitle(arr5)
            }
function displayTitle(arr5) {
                loading.classList.remove('d-none')
                loading.classList.add('d-block')

                console.log(arr5);
                let meal = arr5[0];
                document.getElementById("cardRow").innerHTML = `<div class="col-4 text-white">
    <img class="w-100 rounded-4" src="${meal.strMealThumb}" alt="###">
    <h1>${meal.strMeal} </h1>
</div>
<div class="col-8 text-white p-3">
    <h3>Instructions</h3>
    <p>${meal.strInstructions}</p>
    <h3>Area :${meal.strArea}</h3>
    <h3>Category  :${meal.strCategory}</h3>
    <h3>Recipes :</h3>
    <ul class=" list-unstyled d-flex g-3 flex-wrap">
        <li class="alert alert-info m-2 p-1"  >${meal.strIngredient1}</li >
        <li class="alert alert-info m-2 p-1"   >${meal.strIngredient2}</li >
        <li class="alert alert-info m-2 p-1"   >${meal.strIngredient3}</li >
        <li class="alert alert-info m-2 p-1"   >${meal.strIngredient4}</li >
        <li class="alert alert-info m-2 p-1"   >${meal.strIngredient5}</li >
        <li class="alert alert-info m-2 p-1"   >${meal.strIngredient6}</li >
        <li class="alert alert-info m-2 p-1"   >${meal.strIngredient7}</li >
        <li class="alert alert-info m-2 p-1"    >${meal.strIngredient8}</li >
        <li class="alert alert-info m-2 p-1"   >${meal.strIngredient9}</li >
        <li class="alert alert-info m-2 p-1"  > ${meal.strIngredient10}</li >
        <li class="alert alert-info m-2 p-1"   > ${meal.strIngredient11}</li >
        <li class="alert alert-info m-2 p-1"  > ${meal.strIngredient12}</li >
        <li class="alert alert-info m-2 p-1"  > ${meal.strIngredient13}</li >
        <li class="alert alert-info m-2 p-1"  > ${meal.strIngredient14}</li >
        <li class="alert alert-info m-2 p-1"   > ${meal.strIngredient15}</li >
        <li class="alert alert-info m-2 p-1"   > ${meal.strIngredient16}</li >
        <li class="alert alert-info m-2 p-1"  > ${meal.strIngredient17}</li >
        <li class="alert alert-info m-2 p-1"  > ${meal.strIngredient18}</li >
        <li class="alert alert-info m-2 p-1"  > ${meal.strIngredient19}</li >
        <li class="alert alert-info m-2 p-1"  > ${meal.strIngredient20}</li>
        
    </ul>
    <h3>Tags :</h3>
    <ul class="d-flex list-unstyled d-flex g-3 flex-wrap">
        <li class="text-black rounded-3 bg-light m-2 p-1"  >${meal.strTags}</li>
        <li class="text-black rounded-3 bg-light m-2 p-1"  >${meal.strTags}</li>
    </ul>
    <a target="_blank" class="btn btn-danger" href="${meal.strYoutube}" role="button">YouTube</a>
    <a target="_blank" class="btn btn-info" href="${meal.strSource}" role="button">source</a>
</div>
    
    
    `
                document.getElementById("cardRow").innerHTML = temp6
                setTimeout(() => {
                    loading.classList.remove('d-block')
                    loading.classList.add('d-none')
                }, 2500);
            }
// IngredientsApi detilse 
async function IngredientsData(ingrd) {
                let api6 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrd}`)
                let res6 = await api6.json()
                arr6 = res6.meals;
                displayIngredients(arr6)
            }
//  display Ingredients on click 
function displayIngredients(arr6) {
                loading.classList.remove('d-none')
                loading.classList.add('d-block')
                console.log(arr6);
                let temp6 = ``
                for (let i = 0; i < arr6.length; i++) {
                    temp6 += `<div class="col-3 g-3 " onclick=(getTitleApi(${arr6[i].idMeal}))>
        <div class="all position-relative ">
        <img src="${arr6[i].strMealThumb}" alt="" class="w-100 rounded-3">
        <div class="layar text-center py-5">
            <h2>${arr6[i].strMeal}</h2>
        </div>
    </div>
    </div>`
                }
                document.getElementById("cardRow").innerHTML = temp6
                setTimeout(() => {
                    loading.classList.remove('d-block')
                    loading.classList.add('d-none')
                }, 2500);
            }
