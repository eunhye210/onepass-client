function csvFileToArray(csvOutput) {
  const csvArray = [];

  const csvHeader = csvOutput.slice(0, csvOutput.indexOf("\n")).split(",");
  const csvRows = csvOutput.slice(csvOutput.indexOf("\n") + 1).split("\n");

  csvRows.forEach((row) => {
    const values = row.split(",");

    if (values.includes("")) {
      return;
    }

    const obj = csvHeader.reduce((object, header, index) => {
      object[header] = values[index];
      return object;
    }, {});

    csvArray.push(obj);
  });

  return csvArray;
}

export default csvFileToArray;
