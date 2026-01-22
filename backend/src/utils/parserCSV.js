const parseCSV = (csvText) => {
  const lines = csvText.split('\n').filter((line) => line.trim() !== '')
  const dataLines = lines.slice(1)

  const result = []

  for (const line of dataLines) {
    const columns = line.split(',')
    if (columns.length === 4) {
      const [file, text, number, hex] = columns
      if (file && text && number && hex) {
        result.push({
          text: text.trim(),
          number: Number(number.trim()),
          hex: hex.trim()
        })
      }
    }
  }

  return result
}

module.exports = { parseCSV }
