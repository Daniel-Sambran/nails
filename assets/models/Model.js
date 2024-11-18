export default class Model {
  constructor(initModalState) {
    this.modalState = initModalState;
  }

  get modalState() {
    return this._modelState;
  }

  set modalState(value) {
    this._modelState = value;
  }

  get data() {
    return this._data;
  }
  set data(value) {
    this._data = value;
  }

  async getData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(async (response) => {
          let json = "";
          // console.log(response);
          if (response != "") {
            json = await response.json();
          }
          // console.log(json);
          return json;
        })
        .then((data) => {
          this._data = data;
          resolve(data);
        })
        .catch((error) => {
          console.log("Catch: " + error.message);
          console.log("Catch: " + error);
          reject();
        });
    });
  }

  async postData(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          this._data = data;
          resolve(data);
        })
        .catch((e) => {
          console.log("catch");
          console.log(e);
          reject();
        });
    });
  }
}
