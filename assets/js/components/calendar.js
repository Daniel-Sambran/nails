import ModelTurnos from "../../models/ModelTurnos.js";

const modelTurnos = new ModelTurnos();
let dataParams;
export default class Calendar {
  constructor(parameters) {
    dataParams = parameters;
  }
  async init() {
    let response = await modelTurnos.getHorarios();
    console.log(response);
  }
}
