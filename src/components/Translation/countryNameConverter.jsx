// export const countryNameToGerman = (country) => {
//   const url = `https://pkgstore.datahub.io/core/country-list/data_json/data/8c458f2d15d9f2119654b29ede6e45b8/data_json.json`
//   fetch(url)
//     .then((res) => {
//       return res.json()
//     })
//     .then((data) => {
//       const filtered = data.filter(cpuntries => cpuntries.Name === country)
//       const countryCode = filtered[0].Code
//       const regionNames = new Intl.DisplayNames(
//         ['de'], {type: 'region'}
//       );
//       const countryInGerman = regionNames.of(countryCode)
//       console.log(countryInGerman)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// }
