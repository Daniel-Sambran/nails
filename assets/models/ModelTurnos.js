import model from "./Model.js";

export default class ModelTurnos extends model {
  constructor(parameters) {}
  async getHorarios(fecha) {
    let response = await this.postData(
      `./api_rest/controllers/turnos_controller.php`,
      fecha
    );
    return response;
  }
}
