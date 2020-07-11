import React, { useState } from 'react';
import logo from './icon.png';
import './App.css';
import Product from "./component/Product";
import AllItems from "./component/AllItems"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";

let searth = null;

class App extends React.Component {


    constructor(props) {
        super(props);
        this.l = "";
        this.p = "";
        this.name = "";
        this.price = "";
        this.disc = "";

        this.name = "";
        this.last = "";
        this.mail = "";
        this.pass = "";
        this.npass = "";

        this.searth = "";
        this.edit_title = "";
        this.edit_price = "";
        this.edit_discr = "";

        this.handleImageChange = this.handleImageChange.bind(this);
    }

    state = {
        file: "",
        imagePreviewUrl: "",
        type: false,
        sorttype: 0,
        searth: false,
        indexedit: 0,
        car: [
          {
            id: 1,
            title: "BMW 7 серия VI (G11/G12) Рестайлинг",
            url_title: "https://avatars.mds.yandex.net/get-autoru-vos/2174324/204d142a47b025b25a27a8fb42e3f6a8/1200x900n",
            price: "15062000",
            fuel: "бензин",
            year: "2015",
            color: ["Чёрный", "Белый", "Серый", "Синий", "Красный"], 
            discr: "BMW — автомобили серии представительского класса. Начиная с 1977 года было выпущено шесть поколений этой серии. В 2015 году в Женевском автосалоне компания BMW представила новую BMW 7 в кузове G11. Основными конкурентами BMW 7 являются автомобили Mercedes-Benz S-класс, Audi A8, Lexus LS и Jaguar XJ",
            date: "9.7.2020",
        },
        {
            id: 2,
            title: "Renault Arkana",
            url_title: "https://cdn.group.renault.com/ren/ru/arkana/des-elements-07-6.jpg.ximg.large.webp/1580940657801.webp",
            price: "1089000",
            fuel: "бензин",
            year: "2019",
            color: ["Красный металлик", "Темно-серый металлик", "Серебристый металлик", "Коричневый металлик"], 
            discr: "Cозданный на стыке двух концепций — стремительного купе и практичного кроссовера — Renault ARKANA представляет собой совершенно уникальный автомобиль, комфортный в городе и одновременно готовый к приключениям за его пределами.",
            date: "1.5.2020",
        },
        {
            id: 3,
            title: "Renault Arkana",
            url_title: "https://cdn.group.renault.com/ren/ru/arkana/des-elements-07-6.jpg.ximg.large.webp/1580940657801.webp",
            price: "1109000",
            fuel: "бензин",
            year: "2019",
            color: ["Красный металлик", "Темно-серый металлик", "Серебристый металлик", "Коричневый металлик"], 
            discr: "Cозданный на стыке двух концепций — стремительного купе и практичного кроссовера — Renault ARKANA представляет собой совершенно уникальный автомобиль, комфортный в городе и одновременно готовый к приключениям за его пределами.",
            date: "1.5.2020",
        },
        ],
        user: [
            {
                name: "admin",
                lastname: "admin",
                mail: "admin",
                pass: "admin",
            },
        ],
      };

      Click = (e) => {
        e.preventDefault();

        const users = this.state.user;
        let us = null;
        for(var i = 0; i < this.state.user.length; i++){
            if(users[i].mail === this.l.value && users[i].pass == this.p.value){
                
                us = users[i];
            }
        }
        if(us != null){
            this.setState({ type: true });
        }
        else
        {
            alert("Не правильный логин или пароль");
        }
    }

    Reg = (e) => {
        e.preventDefault();

        if(this.name.value != "" && this.last.value != "" && this.mail.value != "" && this.pass.value != "" && this.npass.value != ""){
            if(this.pass.value == this.npass.value){
                const users = this.state.user;
                users.push({
                    name: this.name.value,
                    lastname: this.last.value,
                    mail: this.mail.value,
                    pass: this.pass.value,
                });
                alert("Успешная регистрация");
            }else{
                alert("Пароли не совподают");
            }
        }
        else
        {
            alert("Вы не заполнили все поля!!!");
        }
    }

    Invis = (e) => {
        e.preventDefault();

        var password = document.getElementById("password");
        var iconbut = document.getElementById("icon");

        if(password.type == "text"){
            password.type = "password";
            iconbut.innerHTML = "visibility";
        }else{
            password.type = "text";
            iconbut.innerHTML = "visibility_off";
        }
    }

        handleDeleteElement = (id) => {
            this.setState(prevState => ({
                car: prevState.car.filter(el => el.id != id),
            }));
            alert("Товар успешно удалён");
        };



        handleImageChange(e) {
            e.preventDefault();
        
            let reader = new FileReader();
            let file = e.target.files[0];
            reader.onloadend = () => {
              this.setState({
                file: file,
                imagePreviewUrl: reader.result
              });
            }
        
            reader.readAsDataURL(file)
          }


          AddItem = (event)=>{
            event.preventDefault();
            const list = this.state.car;
            const now = new Date();
            const date = now.getDate() + "." + now.getMonth() + "." + now.getFullYear();

        if(this.name.value != "" && this.price.value != "" && this.state.imagePreviewUrl != ""){
            list.push({
                id: list.length+1,
                title: this.name.value,
                url_title: this.state.imagePreviewUrl,
                price: this.price.value,
                fuel: "----",
                year: "----",
                color: [], 
                discr: this.disc.value,
                date: date,
            });
        
            this.setState({
                car: list
            })

            alert("Добавлено");
        }else{
            alert("Вы не заполнили все поля");
        }

        }


        SaveEdit = (e, id)=>{
            e.preventDefault();
            let list = this.state.car;
            const now = new Date();
            const date = now.getDate() + "." + now.getMonth() + "." + now.getFullYear();

            if(this.name.value != "" && this.price.value != "" && this.state.imagePreviewUrl != ""){
                list[id].title = this.edit_title.value;
                list[id].url_title = this.state.imagePreviewUrl;
                list[id].price = this.edit_price.value;
                list[id].fuel = "----";
                list[id].year = "----";
                list[id].color = []; 
                list[id].discr = this.edit_discr.value;
                list[id].date = date;
    
                this.setState({
                    car: list
                })
                alert("Изменено");
            }else{
                alert("Вы не заполнили все поля");
            }
        }
        EditItem = (id)=>{
            let list = this.state.car;
            this.setState({
                edit_title: list[id].title,
                edit_price: list[id].price,
                edit_discr: list[id].discr,
                indexedit: id
            });
        }

        SortingTitle = (e) =>{
            e.preventDefault();
            if(this.state.sorttype == 0)
            {
                this.setState({sorttype: 1});
                var down = document.getElementById("sortic");
                down.innerText = "keyboard_arrow_up"
            }
            else
            {
                var down = document.getElementById("sortic");
                down.innerText = "keyboard_arrow_down"
                this.setState({sorttype: 0});
            }
        }

        SortingPrice = (e) =>{
            e.preventDefault();
            if(this.state.sorttype == 0 || this.state.sorttype == 1 || this.state.sorttype == 3)
            {
                this.setState({sorttype: 2});
                var down = document.getElementById("sorticp");
                down.innerText = "keyboard_arrow_up"
            }else{
                this.setState({sorttype: 3});
                var down = document.getElementById("sorticp");
                down.innerText = "keyboard_arrow_down"
            }
        }

        SortingData = (e) =>{
            e.preventDefault();
            if(this.state.sorttype == 5 || this.state.sorttype == 3 || this.state.sorttype == 2 || this.state.sorttype == 1 || this.state.sorttype == 0)
            {
                this.setState({sorttype: 4});
                var down = document.getElementById("sorticd");
                down.innerText = "keyboard_arrow_up"
            }else{
                this.setState({sorttype: 5});
                var down = document.getElementById("sorticd");
                down.innerText = "keyboard_arrow_down"
            }
        }

        Searth = (e) =>{
            e.preventDefault();
            let list = this.state.car;
            if(this.searth.value != null && this.searth.value != ""){
                this.setState({searth: true});
                searth = list.filter(el => el.title == this.searth.value);
            }
            else{
                this.setState({searth: false});
            }
        }

    render() {
        let sorting = null;

        if(!this.state.searth){
            searth = this.state.car;
        }

        switch(this.state.sorttype){
                case 0:
                    sorting = searth.sort(function(a, b){
                    if(a.title < b.title) { return -1; }
                    if(a.title > b.title) { return 1; }
                    return 0;})
                break;
                case 1:
                        sorting = searth.sort(function(a, b){
                        if(a.title < b.title) { return 1; }
                        if(a.title > b.title) { return -1; }
                        return 0;})
                    break;
                    case 2:
                            sorting = searth.sort(function(a, b){
                            return a.price - b.price;})
                        break;
                        case 3:
                                sorting = searth.sort(function(a, b){
                                return b.price - a.price;})
                            break;
                            case 4:
                                    sorting = searth.sort(function(a, b){
                                    if(a.date < b.date) { return 1; }
                                    if(a.date > b.date) { return -1; }
                                    return 0;})
                                break;
                                case 5:
                                        sorting = searth.sort(function(a, b){
                                        if(a.date < b.date) { return -1; }
                                        if(a.date > b.date) { return 1; }
                                        return 0;})
                                    break;
        }

        return (
            <Router>
                <div className="conteiner" >
                    <Switch >
                        {this.state.car.map((i, index) =>(
                            <Route path={'/car-' + index} render={() => <Product type={this.state} id={index} />}/>
                        ))}
                        <Route exact path="/list-prop">

                        </Route>
                        <Route exact path="/list" >
                            <Link className="p1" to="/list">Листинг товаров</Link>{/*<Link className="p2">Листинг проперти</Link>*/}
                            <div className="center-block">
                            <input className="searth" placeholder="Строгий поиск автомобилей" ref={ref => this.searth = ref}/><button className="searthbutton" onClick={(e) => {this.Searth(e)}} >Искать</button><Link className="buton" to="/add">Добавть товар</Link>
                                <div className="bar">
                                        <a onClick={(e)=>{this.SortingTitle(e)}} style={{gridColumn: 1}}><span style={{float: "left", marginTop: "-3px"}} id={"sortic"} class="material-icons"></span>Перечень товаров</a>
                                        <a onClick={(e)=>{this.SortingPrice(e)}} tyle={{gridColumn: 2}}><span style={{float: "left", marginTop: "-3px"}} id={"sorticp"} class="material-icons"></span>Стоимость</a>
                                        <a onClick={(e)=>{this.SortingData(e)}} tyle={{gridColumn: 3}}><span style={{float: "left", marginTop: "-3px"}} id={"sorticd"} class="material-icons"></span>Дата изменения</a>
                                        <p tyle={{gridColumn: 4}}>Управление</p>
                                    </div>
                                <div className="central">
                                        {sorting.map((el, index) => (
                                            <div className="slot-car">
                                                <Link className="link" to={"/car-" + index}>{el.title}</Link>
                                                <p className="sprice">{el.price} ₽</p>
                                                <p className="sdate">{el.date}</p>
                                                <Link className="edit" to="/edit" key={index} onClick={() => { this.EditItem(index) }}>(Ред.)</Link>
                                                <a className="delete" href="#" key={el.id} onClick={() => { this.handleDeleteElement(el.id) }}>Удалить</a>
                                            </div>
                                        ))}
                                </div>
                            </div>
                            {this.state.type == false && <Redirect to={"/"}/>}
                        </Route>
                        <Route exact path="/" >
                            <div className="login">
                                <h2>Вход</h2>
                                <p className="tl">Логин</p>
                                <input className="log" type={"text"} placeholder="Введите логин" ref={ref => this.l = ref} />
                                <p className="tp">Пароль</p>
                                <div className="pass">
                                    <input id={"password"} style={{width: "100%", height: "100%"}} type={"password"} placeholder="Введите пароль" ref={ref => this.p = ref} />
                                    <button onClick={this.Invis}><i id={"icon"} class="material-icons">visibility</i></button>
                                </div>
                                <button className="enter" onClick={this.Click} >Войти</button>
                                <Link to="/reg">Зарегистрироваться</Link>
                                {this.state.type == true && <Redirect to="/list" />}
                            </div>
                        </Route>
                        <Route exact path="/reg" >
                            <div className="login">
                                <h2>Регистрация</h2>
                                <p className="tl">Имя</p>
                                <input className="log" type={"text"} placeholder="Введите имя" ref={ref => this.name = ref} />
                                <p className="tl">Фамилия</p>
                                <input className="log" type={"text"} placeholder="Введите фамилию" ref={ref => this.last = ref} />
                                <p className="tl">E-mail</p>
                                <input className="log" type={"email"} placeholder="Введите e-mail" ref={ref => this.mail = ref} />
                                <p className="tl">Пароль</p>
                                <input className="log" type={"password"} placeholder="Введите пароль" ref={ref => this.pass = ref} />
                                <p className="tp">Повторите пароль</p>
                                <input className="log" type={"password"} placeholder="Введите еще раз пароль" ref={ref => this.npass = ref} />
                                <button className="enter" style={{width: "180px"}} onClick={this.Reg} >Зарегистрироваться</button>
                                <Link to="/">Вернуться</Link>
                            </div>
                        </Route>
                        <Route exact path="/add">
                            <div className="center-block">
                                <form onSubmit={this.AddItem}>
                                    <button id="save-add" type="submit">Сохранить</button>
                                    <Link to="/list" className="back-add">Вернуться</Link>
                                    <div className="add-title">
                                        <h4 style={{marginLeft: "100px"}}>Добавление товара</h4>
                                    </div>
                                    <p>Название товара<span style={{color: "red"}}>*</span></p>
                                    <input className="inp" type="text" name="name" ref={ref => this.name = ref} placeholder="Mercedes S550 4matic"/>
                                    <p>Стоимость товара<span style={{color: "red"}}>*</span></p>
                                    <input className="inp" type="number" name="price" ref={ref => this.price = ref} placeholder="113 000"/>
                                    <p>Избражение<span style={{color: "red"}}>*</span></p>
                                    <input onChange={this.handleImageChange} type="file" name="photo" accept="image/*,image/jpeg"/>
                                    <p>Описание</p>
                                    <textarea className="inp" ref={ref => this.disc = ref} placeholder="Описание"/>
                                </form>
                            </div>
                            {this.state.type == false && <Redirect to={"/"}/>}
                        </Route>
                        <Route exact path="/edit">
                            <div className="center-block">
                                <form onSubmit={(e)=>{this.SaveEdit(e, this.state.indexedit)}}>
                                    <button id="save-add" type="submit">Сохранить</button>
                                    <Link to="/list" className="back-add">Вернуться</Link>
                                    <div className="add-title">
                                        <h4 style={{marginLeft: "100px"}}>Редактирование товара</h4>
                                    </div>
                                    <p>Название товара<span style={{color: "red"}}>*</span></p>
                                    <input className="inp" type="text" name="name" ref={ref => this.edit_title = ref} placeholder="Mercedes S550 4matic" defaultValue={this.state.edit_title}/>
                                    <p>Стоимость товара<span style={{color: "red"}}>*</span></p>
                                    <input className="inp" type="number" name="price" ref={ref => this.edit_price = ref} placeholder="113 000" defaultValue={this.state.edit_price}/>
                                    <p>Избражение<span style={{color: "red"}}>*</span></p>
                                    <input onChange={this.handleImageChange} type="file" name="photo" accept="image/*,image/jpeg"/>
                                    <p>Описание</p>
                                    <textarea className="inp" ref={ref => this.edit_discr = ref} placeholder="Описание" defaultValue={this.state.edit_discr}/>
                                </form>
                            </div>
                            {this.state.type == false && <Redirect to={"/"}/>}
                        </Route>
                    </Switch >
                </div>
            </Router>
        );
    }
}

export default App;