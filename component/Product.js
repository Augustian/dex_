import React from 'react';
import { render } from '@testing-library/react';
import { Link, Redirect, Route } from "react-router-dom";

class Produc extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const id = this.props.id;
        return (
            <div className="center-block">
                <div className="central">
                    <Link className="back" to={"/"}>Вернуться</Link>
                    <hr className="line"></hr>
                    <img className="image" src={this.props.type.car[id].url_title} width="270" />
                    <h2 className="title">{this.props.type.car[id].title}</h2>
                    <p className="disc">{this.props.type.car[id].discr}</p>
                    <h4>Цвет авто</h4>
                    <select className="drop">

                    {this.props.type.car[id].color.map(el => (
                        <option value={el}>{el}</option>
                        ))}

                    </select>
                    <h4>Год выпуска</h4>
                    <p className="p">{this.props.type.car[id].year}</p>
                    <h4>Тип топлива</h4>
                    <p className="p">{this.props.type.car[id].fuel}</p>
                    <h4>Стоимость</h4>
                    <p style={{ fontFamily: "Robot", fontStyle: "normal", fontWeight: 300, fontSize: "22px", lineHeight: "26px" }}>{this.props.type.car[id].price} ₽</p>
                    <button>Беру!!!!</button>
                </div>

                {this.props.type.type == false && <Redirect to={"/"}/>}
            </div>
        );
    }
}
export default Produc; 