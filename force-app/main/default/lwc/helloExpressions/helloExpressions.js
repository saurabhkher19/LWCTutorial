import { LightningElement } from "lwc";

export default class HelloExpressions extends LightningElement {
  firstName = "";
  lastName = "";
  showData = false;

  handleChange(event) {
    const field = event.target.name;
    if (field === "firstName") {
      this.firstName = event.target.value;
    }
    if (field === "lastName") {
      this.lastName = event.target.value;
    }
  }

  handleShowDetails(event) {
    this.showData = event.target.checked;
  }

  get upperCasedFullName() {
    return `${this.firstName} ${this.lastName}`.toUpperCase();
  }
}
