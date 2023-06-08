import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import "./sstylePayForm.scss";

export default function PayForm() {
  const styles = {
    color: "red",
    fontSize: "16px",
  };

  const [cardData, setCardData] = useState({
    cardNumber: "",
    mouth: "",
    year:"",
    cvvCode: "",
  });

  const [errors, setErrors] = useState({
    cardNumber: "",
    mouth: "",
    year:"",
    cvvCode: "",
  });

  const validateForm = () => {
    let isValid = true;

    const newErrors = {
      cardNumber: "",
      mouth: "",
      year:"",
      cvvCode: "",
    };

    // Валидация номера карты
    if (!cardData.cardNumber.trim()) {
      newErrors.cardNumber = "Поле 'Номер карты' обязательно для заполнения.";
      isValid = false;
    } else if (!cardData.cardNumber.match(/^\d{16}$/)) {
      newErrors.cardNumber = "Неверный формат номера карты.";
      isValid = false;
    }

    // Валидация срока истечения карты (MM/YY)
    if(!cardData.mouth.trim()){
      newErrors.mouth="Поле должно быть заполненым";
      isValid=false;
    }else if(!cardData.mouth.match(/^(0[1-9]|1[0-2])\/[0-9]{2}$/)){
      newErrors.mouth="Неверный формат срока истечения карты (MM/YY)."
    }
    if(!cardData.year.trim()){
      newErrors.year="Поле должно быть заполненым";
      isValid=false;
    }else if(!cardData.year.match(/^(0[1-9]|1[0-2])\/[0-9]{2}$/)){
      newErrors.year="Неверный формат срока истечения карты (MM/YY)."
    }

    // Валидация CVV кода
    if (!cardData.cvvCode.trim()) {
      newErrors.cvvCode = "Поле 'CVV код' обязательно для заполнения.";
      isValid = false;
    } else if (!cardData.cvvCode.match(/^\d{3}$/)) {
      newErrors.cvvCode = "Неверный формат CVV кода.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCardData((prevCardData) => ({
      ...prevCardData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      alert("Ваш заказ оплачен")
      console.log("Данные формы:", cardData);
    }
  };

  return (
    <>
      <Header />
      <main className="mainContent">
        <h1 className="pp">Payment</h1>
        <div className="block">
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                maxLength="16"
                pattern="\d+"
                placeholder="number card"
                name="cardNumber"
                className="fieldCard"
                value={cardData.cardNumber}
                onChange={handleInputChange}
              />
              {errors.cardNumber && (
                <span style={styles} className="error">
                  {errors.cardNumber}
                </span>
              )}
            </label>
            <div className="between_space">
              <div className="mouth_year">
                <label>
                  <input
                    type="text"
                    placeholder="month"
                    name="mouth"
                    className="second_row"
                    maxLength="2"
                    value={cardData.expirationDate}
                    onChange={handleInputChange}
                  />
                  /
                  <input
                    type="text"
                    placeholder="year"
                    name="year"
                    maxLength="4"
                    className="second_row"
                    value={cardData.expirationDate}
                    onChange={handleInputChange}
                  />
                  {errors.expirationDate && (
                    <span style={styles} className="error">
                      {errors.expirationDate}
                    </span>
                  )}
                </label>
              </div>
              <label>
                <input
                  type="password"
                  pattern="\d+"
                  maxLength="3"
                  placeholder="CVV"
                  className="second_row"
                  name="cvvCode"
                  value={cardData.cvvCode}
                  onChange={handleInputChange}
                />
                {errors.cvvCode && (
                  <span style={styles} className="error">
                    {errors.cvvCode}
                  </span>
                )}
              </label>
            </div>
            <div className="flex_button">
              <button className="pay_button" type="submit">
                <p>Pay</p>
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
