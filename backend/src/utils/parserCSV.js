const parseCSV = (csvText) => {
  const lines = csvText.split("\n").filter((line) => line.trim() !== "");
  const dataLines = lines.slice(1);

  const result = [];

  for (const line of dataLines) {
    const columns = line.split(",");
    if (columns.length === 4) {
      const [file, text, number, hex] = columns;
      const trimmedFile = file?.trim();
      const trimmedText = text?.trim();
      const trimmedNumber = number?.trim();
      const trimmedHex = hex?.trim();
      const parsedNumber = Number(trimmedNumber);

      // Validar que los 4 campos existan y number sea un número válido
      if (
        trimmedFile &&
        trimmedText &&
        trimmedNumber &&
        !isNaN(parsedNumber) &&
        trimmedHex
      ) {
        result.push({
          text: trimmedText,
          number: parsedNumber,
          hex: trimmedHex,
        });
      }
    }
  }

  return result;
};

module.exports = { parseCSV };
