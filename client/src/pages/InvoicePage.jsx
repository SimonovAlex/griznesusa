import React, {useState} from "react";
import {saveAs} from 'file-saver';
import axios from 'axios';

const getCurrentDate = () => {
    const today = new Date();
    const dd = today.getDate() >= 10 ? today.getDate() : '0' + today.getDate();

    let mm = today.getMonth() >= 9 ? today.getMonth()+1 : '0' + (today.getMonth()+1);
    const yyyy = today.getFullYear();


    return `${dd}/${mm}/${yyyy}`;
};

export const InvoicePage = () => {
    const [form, setForm] = useState({invoiceDate: getCurrentDate(), apartment: ''});
    const [loading, setLoading] = useState(false);

    const changeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const submitHandler = async e => {
        e.stopPropagation();
        e.preventDefault();
        if(!form.auction){
            return window.M.toast({html: 'Шаблон не выбран!'})
        }else{
            try {
                setLoading(true);
                const data = await axios({
                    method: 'post',
                    url: '/api/invoice',
                    responseType: 'blob',
                    data: {...form}
                });
                const pdfBlob = await new Blob([data.data], { type: 'application/pdf' });
                saveAs(pdfBlob, `${form.name}|${form.invoiceDate}.pdf`);
                setLoading(false)
            } catch (e) {
                console.log(e)
            }
        }
    };
    return (
        <div className="row">
            <form onSubmit={e => submitHandler(e)}>
                <div className="col s6 offset-s3">
                    <div className="input-field display-flex">
                        <p>
                            <label>
                                <input name="auction" type="radio" value="G&G" onChange={changeHandler}/>
                                <span>G&G</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="auction" type="radio" value="IAAI" onChange={changeHandler}/>
                                <span>IAAI</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="auction" type="radio" value="Copart" onChange={changeHandler}/>
                                <span>Copart</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="auction" type="radio" value="W8" onChange={changeHandler}/>
                                <span>W8 shipping</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="auction" type="radio" value="familyGreat" onChange={changeHandler}/>
                                <span>Family Great</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="auction" type="radio" value="seaway" onChange={changeHandler}/>
                                <span>Seaway</span>
                            </label>
                        </p>
                    </div>
                    <div className="input-field">
                        <input
                            placeholder="Фамилия и имя через пробел"
                            type="text"
                            name="name"
                            onChange={changeHandler}
                            className="validate"
                            pattern="[A-Za-z\D]*?\s[A-Za-z\D]*?[A-Za-z\D]*"
                            required
                        />
                        <label htmlFor="name">Имя и Фамилия</label>

                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input
                                placeholder="Латинские"
                                type="text"
                                name="country"
                                onChange={changeHandler}
                                className="validate"
                                pattern="^[a-zA-Z0-9\D]+$"
                                required
                            />
                            <label htmlFor="country">Страна</label>
                        </div>
                        <div className="input-field col s6">
                            <input
                                placeholder="Латинские"
                                type="text"
                                name="city"
                                className="validate"
                                onChange={changeHandler}
                                pattern="^[a-zA-Z0-9\D]+$"
                                required
                            />
                            <label htmlFor="city">Город</label>
                        </div>
                    </div>
                    <div className="input-field">
                        <input
                            placeholder="Латинские и цифры"
                            type="text"
                            name="street"
                            className="validate"
                            onChange={changeHandler}
                            pattern="[A-Za-z0-9 \D]*"
                            required
                        />
                        <label htmlFor="street">Улица</label>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input
                                placeholder="Латинские и цифры"
                                type="text"
                                name="home"
                                className="validate"
                                onChange={changeHandler}
                                pattern="^[a-zA-Z0-9\D]+$"
                                required
                            />
                            <label htmlFor="home">Дом</label>
                        </div>
                        <div className="input-field col s6">
                            <input
                                placeholder="необязательно"
                                type="number"
                                name="apartment"
                                onChange={changeHandler}
                            />
                            <label htmlFor="apartment">Квартира</label>
                        </div>
                    </div>
                    {/*<div className="input-field display-flex">*/}
                    {/*    <p>*/}
                    {/*        <label>*/}
                    {/*            <input name="auto" type="radio"/>*/}
                    {/*            <span>автомобиль</span>*/}
                    {/*        </label>*/}
                    {/*    </p>*/}
                    {/*    <p>*/}
                    {/*        <label>*/}
                    {/*            <input name="auto" type="radio"/>*/}
                    {/*            <span>доставка</span>*/}
                    {/*        </label>*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                    <div className="input-field">
                        <input
                            placeholder="Буквы и цифры"
                            type="text"
                            name="invoiceNumber"
                            className="validate"
                            onChange={changeHandler}
                            required
                        />
                        <label htmlFor="invoiceNumber">Номер инвойса</label>
                    </div>
                    <div className="input-field">
                        <input
                            placeholder="dd/mm/yyyy"
                            type="text"
                            name="invoiceDate"
                            className="validate"
                            pattern="[0-9]{2,2}/[0-9]{2,2}/[0-9]{4,4}"
                            value={form.invoiceDate}
                            onChange={changeHandler}
                        />
                        <label htmlFor="invoiceDate">Дата инвойса</label>
                    </div>
                    <div className="input-field">
                        <input
                            placeholder="Цифры"
                            type="text"
                            name="MemberBuyer"
                            className="validate"
                            onChange={changeHandler}
                            pattern="[0-9\-]{1,}"
                            required
                        />
                        <label htmlFor="Member/Buyer">Member/Buyer</label>
                    </div>
                    <div className="input-field">
                        <input
                            placeholder="Буквы и цифры"
                            type="text"
                            name="YMM"
                            className="validate"
                            onChange={changeHandler}
                            pattern="^[a-zA-Z0-9\D]+$"
                            required
                        />
                        <label htmlFor="Y/M/M">Год, марка, модель</label>
                    </div>
                    <div className="input-field">
                        <input
                            placeholder="8 цифр"
                            type="text"
                            name="lotNumber"
                            className="validate"
                            onChange={changeHandler}
                            pattern="[0-9]{8,8}"
                            minLength={8}
                            maxLength={8}
                            required
                        />
                        <label htmlFor="lotNumber">Номер лота</label>
                    </div>
                    <div className="input-field">
                        <input
                            placeholder="17 букв и цифр"
                            type="text"
                            name="vinCode"
                            className="validate"
                            onChange={changeHandler}
                            pattern="^[a-zA-Z0-9]+$"
                            minLength={17}
                            maxLength={17}
                            required
                        />
                        <label htmlFor="vinCode">VIN-код</label>
                    </div>
                    <div className="input-field">
                        <input
                            placeholder="0.00"
                            type="text"
                            name="total"
                            className="validate"
                            onChange={changeHandler}
                            pattern="\d+(\.\d{2})?"
                            required
                        />
                        <label htmlFor="total">Сумма</label>
                    </div>
                    <button
                        className="btn grey lighten-1 white-text"
                        type="submit"
                        disabled={loading}
                    >
                        Скачать pdf
                    </button>
                    {loading? (
                        <div className="progress">
                            <div className="indeterminate"/>
                        </div>
                    ) : null}
                </div>
            </form>
        </div>

    )
};

