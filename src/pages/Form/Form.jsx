import React, { useState,useEffect } from "react";
import Header from "../../components/Header/Header";
import "./sstyleForm.scss";

export default function Form({ cartItems, updateCart }) {
  const styles = {
    color: "red",
    fontSize: "16px",
  };
  const stylesforItems={
    width:"70px",
    height:"70px"
  }
  const [allItems, setAllItems] = useState([]);
  useEffect(() => {
    setAllItems((prevItems) => [...cartItems]);
    console.log(cartItems);
  }, [cartItems]);
  useEffect(() => {
    console.log(allItems);
  }, [allItems, setAllItems]);
  // const getAmount=(cartItems)=>{
  //   const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  //   return totalPrice;
  // }
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    country: "",
    email: "",
    city: "",
    address: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    surname: "",
    phone: "",
    country: "",
    email: "",
    city: "",
    address: "",
  });
  const validateForm = () => {
    let isValid = true;

    const newFormErrors = {
      name: "",
      surname: "",
      phone: "",
      country: "",
      email: "",
      city: "",
      address: "",
    };
    const nameRegex = /^[a-zA-Zа-яА-Я]+$/;
    const surnameRegex = /^[a-zA-Zа-яА-Я]+$/;
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const countryRegex = /^[a-zA-Zа-яА-Я\s-]+$/;
    const cityRegex = /^[a-zA-Zа-яА-Я\s-]+$/;
    const addressRegex = /^[a-zA-Zа-яА-Я0-9\s-.,#]+$/;

    if (!formData.name.trim()) {
      newFormErrors.name = "The 'Name' field is required.";
      isValid = false;
    } else if (!nameRegex.test(formData.name)) {
      newFormErrors.name = "The 'Name' field must contain only letters.";
      isValid = false;
    }

    // Валидация фамилии (surname)
    if (!formData.surname.trim()) {
      newFormErrors.surname = "The 'Last Name' field is required.";
      isValid = false;
    } else if (!surnameRegex.test(formData.surname)) {
      newFormErrors.surname = "The 'Last Name' field must contain only letters.";
      isValid = false;
    }

    // Валидация номера телефона (phone)
    if (!formData.phone.trim()) {
      newFormErrors.phone = "The 'Phone' field is required.";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newFormErrors.phone = "The 'Phone' field must contain 10 digits.";
      isValid = false;
    }

    // Валидация страны (country)
    if (!formData.country.trim()) {
      newFormErrors.country = "The 'Country' field is required.";
      isValid = false;
    } else if (!countryRegex.test(formData.country)) {
      newFormErrors.country = "This field must be in the correct format";
    }

    // Валидация электронной почты (email)
    if (!formData.email.trim()) {
      newFormErrors.email = "The 'Email' field is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newFormErrors.email =
        "The 'Email' field must be in the format example@example.com.";
      isValid = false;
    }

    // Валидация города (city)
    if (!formData.city.trim()) {
      newFormErrors.city = "The 'City' field is required.";
      isValid = false;
    } else if (!cityRegex.test(formData.city)) {
      newFormErrors.city = "It must be in the correct format";
    }

    // Валидация адреса (address)
    if (!formData.address.trim()) {
      newFormErrors.address = "The 'Address' field is required.";
      isValid = false;
    } else if (!addressRegex.test(formData.address)) {
      newFormErrors.address = "This field must be in the correct form";
    }
    setFormErrors(newFormErrors);
    return isValid;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: "",
      surname: "",
      phone: "",
      country: "",
      email: "",
      city: "",
      address: "",
    };
    let URL = "https://jsonplaceholder.typicode.com/posts/1";
    if(validateForm()){
      fetch(URL, {
      method:"POST",
      body:JSON.stringify(formData)
    })
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data);
    })
    .catch((error)=>{
      console.log(error);
    })
    console.log("Данные формы:", formData);
    window.location.replace("/payForm");
    }
    
  };

  return (
    <>
      <Header />
      <main className="mainContent">
        <h1>Checkout</h1>
        <div  className="cart-items">
        {allItems.map((item) => {
          console.log(item);
          return (
            <div  key={item.id} className="cart-item">
              <img style={stylesforItems} src={item.image} alt="error" />
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>  
          );
          
        })}
        {/* <Link to="/form" className={cartItems.length === 0 ? "disabled" : ""}>
          <button disabled={cartItems.lenght === 0} className="orderButt">
            Make an order
          </button>
        </Link> */}
        {/* <p>{getAmount()}$</p> */}
        <div>
    </div>
      </div>
        <form className="form" method="POST" action="/api" onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="name"
              className="name"
              placeholder="name"
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && (
              <span style={styles} className="error">
                {formErrors.name}
              </span>
            )}
          </label>
          <label>
            <input
              type="text"
              name="surname"
              className="surname"
              placeholder="surname"
              value={formData.surname}
              onChange={handleChange}
            />
            {formErrors.surname && (
              <span style={styles} className="error">
                {formErrors.surname}
              </span>
            )}
          </label>
          <label>
            <input
              type="phone"
              name="phone"
              className="phone"
              placeholder="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {formErrors.phone && (
              <span style={styles} className="error">
                {formErrors.phone}
              </span>
            )}
          </label>
          <label>
            <input
              type="text"
              name="country"
              className="country"
              placeholder="country"
              value={formData.country}
              onChange={handleChange}
            />
            {formErrors.country && (
              <span style={styles} className="error">
                {formErrors.country}
              </span>
            )}
          </label>
          <label>
            <input
              type="text"
              name="email"
              className="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <span style={styles} className="error">
                {formErrors.email}
              </span>
            )}
          </label>
          <label>
            <input
              type="text"
              name="city"
              className="city"
              placeholder="city"
              value={formData.city}
              onChange={handleChange}
            />
            {formErrors.city && (
              <span style={styles} className="error">
                {formErrors.city}
              </span>
            )}
          </label>
          <label>
            <input
              type="text"
              name="address"
              className="address"
              placeholder="address"
              value={formData.address}
              onChange={handleChange}
            />
            {formErrors.address && (
              <span style={styles} className="error">
                {formErrors.address}
              </span>
            )}
          </label>
          <button className="cont" type="submit">
            continue
          </button>
        </form>
      </main>
    </>
  );
}
