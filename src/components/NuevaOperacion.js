import Sidebar from "./Sidebar";

const estiloDiv = {
  display: 'flex',
}

const NuevaOperacion = () => {
  return (
    <div style={ estiloDiv }>
      <Sidebar />
      <form>
        <fieldset>
          <section>
            <h1>Formulario de ingreso</h1>
          </section>
          <section>
              <div>
                <p><label><span>Concepto</span></label></p>
                <input type="text" id="input-0" name="concepto" />
              </div>
              <div>
                <p><label>Fecha de ingreso </label></p>
                <input type="date" id="input-3" name="fecha" />
              </div>
              <div>
                <p><label>Tipo </label></p>
                <select id="input-4" name="tipo">
                  <option value="ingreso">Ingreso</option>
                  <option value="egreso">Egreso</option>
                </select>
              </div>
              <div>
                <p><label>Monto </label></p>
                <input type="number" id="input-2" name="monto" />
              </div>
          </section>
          <section>
            <p>
              <button type="submit">Ingresar</button>
              <button type="submit">Cancelar</button>
            </p>
          </section>
        </fieldset>
      </form>
    </div>
  );
}

export default NuevaOperacion;
