import "../styles/pagar.scss";
import { useState } from "react";
function Pagar() {
  const [valor, setValor] = useState({
    card_number1: "",
    card_number2: "",
    card_number3: "",
    card_number4: "",
    card_holder: "",
    mes: "",
    year: "",
    cvv: "",
    clase: "",
  });
  const months = [
    {
      title: "01",
      value: "01",
    },
    {
      title: "02",
      value: "02",
    },
    {
      title: "03",
      value: "03",
    },
    {
      title: "04",
      value: "04",
    },
    {
      title: "05",
      value: "05",
    },
    {
      title: "06",
      value: "06",
    },
    {
      title: "07",
      value: "07",
    },
    {
      title: "08",
      value: "08",
    },
    {
      title: "09",
      value: "09",
    },
    {
      title: "10",
      value: "10",
    },
    {
      title: "11",
      value: "11",
    },
    {
      title: "12",
      value: "12",
    },
  ];
  const years = [
    {
      title: "2016",
      value: "2016",
    },
    {
      title: "2017",
      value: "2017",
    },
    {
      title: "2018",
      value: "2018",
    },
    {
      title: "2019",
      value: "2019",
    },
    {
      title: "2020",
      value: "2020",
    },
    {
      title: "2021",
      value: "2021",
    },
    {
      title: "2022",
      value: "2022",
    },
    {
      title: "2023",
      value: "2023",
    },
    {
      title: "2024",
      value: "2024",
    },
    {
      title: "2025",
      value: "2025",
    },
  ];
  function handleSubmit(e) {
    e.preventDefault();
    alert("La operación fue exitosa !!!");
  }
  return (
    <div className="container_pagar">
      <div className={`card js_card ${valor.clase}`}>
        <div className="card__front">
          <div className="container-chip-visa">
            <div className="chip"></div>
            <div>
              <i className="fab fa-cc-visa"></i>
            </div>
          </div>
          <div className="container-numbers">
            <div className="numbers js_textn1">{valor.card_number1}</div>
            <div className="numbers js_textn2">{valor.card_number2}</div>
            <div className="numbers js_textn3">{valor.card_number3}</div>
            <div className="numbers js_textn4">{valor.card_number4}</div>
          </div>
          <div className="container-holder-date">
            <div>
              <h3>CARD HOLDER</h3>
              <div className="values js_holder_text">{valor.card_holder}</div>
            </div>
            <div>
              <h3>EXPIRES</h3>
              <div className="expires">
                <div className="values js_expires_text_day">{valor.mes}</div>
                <div className="values js_expires_text_year">{`/ ${valor.year}`}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card__back js_card_back">
          <div className="color"></div>
          <div className="container-cvv">
            <h3>CVV</h3>
            <div className="Cvv js_cvv_text">{valor.cvv}</div>
          </div>
          <div>
            <i className="fab fa-cc-visa"></i>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>CARD NUMBER</h2>
        <div className="inputs_cardNumber">
          <input
            type="text"
            pattern="[0-9]*"
            onChange={(evt) => {
              evt.target.validity.valid &&
                setValor((state) => ({
                  ...state,
                  card_number1: evt.target.value,
                }));
            }}
            value={valor.card_number1}
            maxLength="4"
          />
          <input
            type="text"
            pattern="[0-9]*"
            onChange={(evt) => {
              evt.target.validity.valid &&
                setValor((state) => ({
                  ...state,
                  card_number2: evt.target.value,
                }));
            }}
            value={valor.card_number2}
            maxLength="4"
          />
          <input
            type="text"
            pattern="[0-9]*"
            onChange={(evt) => {
              evt.target.validity.valid &&
                setValor((state) => ({
                  ...state,
                  card_number3: evt.target.value,
                }));
            }}
            value={valor.card_number3}
            maxLength="4"
          />
          <input
            type="text"
            pattern="[0-9]*"
            onChange={(evt) => {
              evt.target.validity.valid &&
                setValor((state) => ({
                  ...state,
                  card_number4: evt.target.value,
                }));
            }}
            value={valor.card_number4}
            maxLength="4"
          />
        </div>
        <h2>CARD HOLDER</h2>
        <div className="inputs_cardHolder">
          <input
            type="text"
            className="input_holder js_holder"
            value={valor.card_holder}
            onChange={(e) => {
              setValor((state) => ({
                ...state,
                card_holder: e.target.value,
              }));
            }}
          />
        </div>
        <div className="container-date-cvv">
          <div>
            <h2>EXPIRATION DATE</h2>
            <select
              name="day-date"
              id="day-date"
              value={valor.mes}
              onChange={(e) => {
                setValor((state) => ({
                  ...state,
                  mes: e.target.value,
                }));
              }}
            >
              {months.map((month) => (
                <option>{month.title}</option>
              ))}
            </select>
            <select
              name="year-date"
              id="year-date"
              value={valor.year}
              onChange={(e) => {
                setValor((state) => ({
                  ...state,
                  year: e.target.value,
                }));
              }}
            >
              {years.map((year) => (
                <option>{year.title}</option>
              ))}
            </select>
          </div>
          <div>
            <h2>CVV</h2>
            <input
              type="number"
              className="js_cvv"
              maxlength="3"
              value={valor.cvv}
              onChange={(e) => {
                setValor((state) => ({
                  ...state,
                  cvv: e.target.value,
                }));
              }}
              onFocus={() => {
                setValor((state) => ({
                  ...state,
                  clase: "cvv",
                }));
              }}
              onBlur={() => {
                setValor((state) => ({
                  ...state,
                  clase: "",
                }));
              }}
            />
          </div>
        </div>
        <button>Comprar</button>
      </form>
    </div>
  );
}
export { Pagar };
