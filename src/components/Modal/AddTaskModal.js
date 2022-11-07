import React from "react";
import "./Modal.css";

const AddTaskModal = ({ data, setData, setModalState, addTask }) => {
  var todayDate = new Date().toISOString().slice(0, 10);

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={() => setModalState(false)}>
            &times;
          </span>
          <h2>Modal Header</h2>
        </div>
        <div className="modal-body">
          <form>
            <label htmlFor="naziv">Naziv:</label>
            <br />
            <input
              type="text"
              maxLength="100"
              id="naziv"
              name="naziv"
              value={data.naziv}
              onChange={(e) => setData({ ...data, naziv: e.target.value })}
            />
            <br />
            <br />
            <label htmlFor="rokPredaje">Rok predaje:</label>
            <input
              type="date"
              id="rokPredaje"
              name="rokPredaje"
              min={todayDate}
              onChange={(e) => setData({ ...data, rokPredaje: e.target.value })}
            />
            <p>
              <label htmlFor="opis">Opis:</label>
            </p>
            <textarea
              id="opis"
              maxLength="100"
              name="opis"
              rows="4"
              cols="50"
              value={data.opis}
              onChange={(e) => setData({ ...data, opis: e.target.value })}
            ></textarea>
            <br />
            <br />
            <br />
            <label htmlFor="prioritet">Prioritet:</label>
            <select
              name="prioritet"
              id="prioritet"
              value={data.prioritet}
              onChange={(e) => setData({ ...data, prioritet: e.target.value })}
            >
              <option value="Nizak">Nizak</option>
              <option value="Srednji">Srednji</option>
              <option value="Visok">Visok</option>
            </select>
            <br />
            <br />
            <input type="submit" value="Submit" />
            <button onClick={addTask}>Dodaj zadatak</button>
          </form>
        </div>
        <div className="modal-footer">
          <h3>Modal Footer</h3>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
