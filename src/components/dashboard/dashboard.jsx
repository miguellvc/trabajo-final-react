import React, { Component } from "react";

export class Dashboard extends Component {
  render() {
    return (
      <div className="container
       row">
        <div className="col-8">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Sitio Turístico</th>
                <th scope="col">Localidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-4">
            <form action="">
                <div className="mb-3">
                    <label  className="form-label">Nombre sitio</label>
                    <input type="input" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Localidad</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="row mb-3">
                
                    <div className="col-6">
                        <label  className="form-label">Latitud</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>

                    <div className="col-6">
                            <label  className="form-label">Longitud</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                </div>
                <div className="accordion mb-3" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <label  className="form-label">Título</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                                        </div>
                                        <div className="col-6">
                                            <label  className="form-label">U.R.L.</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                                        </div>
                                        <div className="col-12">
                                        <label  className="form-label">Descripción</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-6">
                                            <label  className="form-label">Título</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                                        </div>
                                        <div className="col-6">
                                            <label  className="form-label">U.R.L.</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                                        </div>
                                        <div className="col-12">
                                        <label  className="form-label">Descripción</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-6">
                                            <label  className="form-label">Título</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                                        </div>
                                        <div className="col-6">
                                            <label  className="form-label">U.R.L.</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                                        </div>
                                        <div className="col-12">
                                        <label  className="form-label">Descripción</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Descripción</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
            </form>
        </div>
      </div>
    );
  }
}
