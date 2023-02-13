// class User{

//     constructor(name,lastNmae,age,year){
//         this.name = name;
//         this.lastNmae =lastNmae ;
//         this.age=age;
//         this.year=year;
//     }

//     get_fullName(){
//         return this.name+''+this.lastNmae

//     }
// }
// var user1 = new User('Muhammad','Akhmadov')

// console.log(user1.get_fullName());

// class Maktab {
//   maktab = {
//     name: "",
//     location: "",
//     direktor: "",
//   };

//   constructor(name, location, direktor) {
//     this.maktab.name = name;
//     this.maktab.location = location;
//     this.maktab.direktor = direktor;
//   }
// }
// class Teacher extends Maktab {
//   treacher = {
//     t_name: "",
//     t_last_name: "",
//     age: "",
//     subject: "",
//   };

//   constructor(t_name, t_last_name, age, subject, name, location, direktor) {
//     super(name, location, direktor)
//     this.treacher.t_name = t_name;
//     this.treacher.t_last_name = t_last_name;
//     this.treacher.age = age;
//     this.treacher.subject = subject;
//   }
// }
// class Student extends Teacher {
//   student = {
//     s_name: "",
//     s_last_name: "",
//     s_age: "",
//   };

//   constructor(
//     s_name,
//     s_last_name,
//     s_age,
//     t_name,
//     t_last_name,
//     age,
//     subject,
//     name,
//     location,
//     direktor
//   ) {
//     super(t_name, t_last_name, age, subject, name, location, direktor);
//     this.student.s_name = s_name;
//     this.student.s_last_name = s_last_name;
//     this.student.s_age = s_age;
//   }
// }

// let bola = new Student('Muhammad','Akhmadov',20,"Dilshod",'Murtazoyev',23,'Frontend Dev','WEPRO','Marhabo','Shakhzod aka');
// console.log(bola);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


// img 
import img1 from "./img/Логотип.png";
import img2 from "./img/image 1.png";
import img3 from "./img/image 2.png";
import img4 from "./img/image 3.png";
import img5 from "./img/image 4.png";
import img6 from "./img/image 5.png";
import img7 from "./img/image 6.png";
import img8 from "./img/image 7.png";
import img2a from "./img/image 2a.png";








const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container">
    <div className="navbar">
      <div className="navbar_logo">
        <div className="logo">
          <img src={img1} alt="#" />
        </div>
        <div className="icons">
          <i class="bx bxl-vk"></i>
          <i class="bx bxl-instagram"></i>
          <i class="bx bxl-facebook"></i>
          <i class="bx bxl-twitter"></i>
        </div>
      </div>
      <div className="navbar_menu">
        <ul>
          <li> Афиша </li>
          <li> Медиа </li>
          <li> Фильмы </li>
          <li> Актёры </li>
          <li> Новости</li>
          <li> Подборки </li>
          <li> Категории</li>
        </ul>
      </div>
      <div className="navbar_buttons">
        <button>
          <i class="bx bx-search"></i>
        </button>
        <button>Войти</button>
      </div>
    </div>
      <div className="title">
        <div className="title_left">
          <h1>Сейчас в кино</h1>
          <div className="tt_line"></div>
        </div>                  
        <div className="title_right">
          <ul>
            <li>Все</li>
            <li>Боевики</li>
            <li>Приключения</li>
            <li>Комедии</li>
            <li>Фантастика</li>
            <li>Триллеры</li>
            <li>Драма</li>
          </ul>
        </div>
      </div>
      <div className="album">
        <div className="card">
          <div className="card_top">
            <img src={img2} alt="$"/>
          </div>
          <div className="card_text">
            <h3>Побег из Претории</h3>
            <p>Триллер</p>
          </div>
        </div>
        <div className="card">
          <div className="card_top">
            <img src={img2a} alt="$"/>
          </div>
          <div className="card_text">
            <h3>Джокер</h3>
            <p>Триллер, драма, криминал</p>
          </div>
        </div>
        <div className="card">
          <div className="card_top">
            <img src={img3} alt="$"/>
          </div>
          <div className="card_text">
            <h3>Звёздные войны: Скайуокер. Восход</h3>
            <p>Фантастика, фэнтези, боевик, приключения</p>
          </div>
        </div>
        <div className="card">
          <div className="card_top">
            <img src={img4} alt="$"/>
          </div>
          <div className="card_text">
            <h3>Джентльмены</h3>
            <p>Боевик, комедия, криминал</p>
          </div>
        </div>
      </div>
        <div className="bottom_album">
        <div className="card">
          <div className="card_top">
            <img src={img5} alt="$"/>
          </div>
          <div className="card_text">
            <h3>Ford против Ferrari</h3>
            <p>Биография, спорт, драма, боевик</p>
          </div>
        </div>
        <div className="card">
          <div className="card_top">
            <img src={img6} alt="$"/>
          </div>
          <div className="card_text">
            <h3>3022</h3>
            <p>Фантастика, триллер</p>
          </div>
        </div>
        <div className="card">
          <div className="card_top">
            <img src={img7} alt="$"/>
          </div>
          <div className="card_text">
            <h3>Хищные птицы: Потрясающая история Харли Квинн</h3>
            <p>Боевик, криминал, комедия</p>
          </div>
        </div>
        <div className="card">
          <div className="card_top">
            <img src={img8} alt="$"/>
          </div>
          <div className="card_text">
            <h3>Плохие парни навсегда</h3>
            <p>Боевик, комедия, криминал</p>
          </div>
        </div>
        </div>
  </div>
);
