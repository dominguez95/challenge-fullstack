const { expect } = require("chai");
const { parseCSV } = require("../src/utils/parserCSV");

describe("parseCSV", () => {
  it("debería parsear correctamente un CSV válido", () => {
    const csvText = `file,text,number,hex
test.csv,Hello,123,abc123
test.csv,World,456,def456`;

    const result = parseCSV(csvText);

    expect(result).to.be.an("array");
    expect(result).to.have.lengthOf(2);
    expect(result[0]).to.deep.equal({
      text: "Hello",
      number: 123,
      hex: "abc123",
    });
  });

  it("debería retornar array vacío si el CSV está vacío", () => {
    const csvText = "";
    const result = parseCSV(csvText);

    expect(result).to.be.an("array");
    expect(result).to.have.lengthOf(0);
  });

  it("debería ignorar líneas con columnas incompletas", () => {
    const csvText = `file,text,number,hex
test.csv,Hello,123
test.csv,World,456,def456`;

    const result = parseCSV(csvText);

    expect(result).to.have.lengthOf(1);
  });
});
