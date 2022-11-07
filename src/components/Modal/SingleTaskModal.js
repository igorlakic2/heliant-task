import React from "react";
import "./Modal.css";
import { v4 as uuidv4 } from "uuid";

const SingleTaskModal = ({
  data,
  setData,
  setModalState,
  submitForm,
  title,
  buttonLabel,
}) => {
  var todayDate = new Date().toISOString().slice(0, 10);

  const closeModal = () => {
    setModalState(false);
    setData({
      naziv: "",
      opis: "",
      prioritet: "1",
      rokPredaje: "",
      zavrsen: false,
      id: uuidv4(),
    });
  };

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <h2>{title}</h2>
        </div>
        <div className="modal-body">
          <div className="form-field">
            {/* <label htmlFor="naziv">Naziv:</label> */}
            <span>Naziv</span>
            <input
              type="text"
              maxLength="100"
              id="naziv"
              name="naziv"
              value={data.naziv}
              onChange={(e) => setData({ ...data, naziv: e.target.value })}
            />
          </div>
          <div className="form-field">
            <label htmlFor="rokPredaje">Rok predaje:</label>
            <input
              type="date"
              id="rokPredaje"
              name="rokPredaje"
              min={todayDate}
              value={data.rokPredaje}
              onChange={(e) => setData({ ...data, rokPredaje: e.target.value })}
            />
          </div>
          <div className="form-field">
            <span>Opis:</span>
            <textarea
              id="opis"
              maxLength="100"
              name="opis"
              rows="4"
              // cols="50"
              value={data.opis}
              onChange={(e) => setData({ ...data, opis: e.target.value })}
            ></textarea>
          </div>
          <div className="form-field">
            <span>Prioritet:</span>
            <select
              name="prioritet"
              id="prioritet"
              value={data.prioritet}
              onChange={(e) => setData({ ...data, prioritet: e.target.value })}
            >
              <option value="1">Nizak</option>
              <option value="2">Srednji</option>
              <option value="3">Visok</option>
            </select>
          </div>
          <div className="buttons-container">
            <button className="cancel-button" onClick={closeModal}>
              Odustani
            </button>
            <button className="submit-button" onClick={() => submitForm(data)}>
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTaskModal;
