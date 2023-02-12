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
  </div>
);
