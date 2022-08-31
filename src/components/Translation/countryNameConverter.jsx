export const countryConverter = async (country) => {

    const fetchApi = async () => {
      try {
        const url = `https://pkgstore.datahub.io/core/country-list/data_json/data/8c458f2d15d9f2119654b29ede6e45b8/data_json.json`
        const res = await fetch(url)
        const data = await res.json()
        // console.log(data)
        return data
      } catch (error) {
        // console.log(error)
      }
    }

    const suka = async () => {
      const data = await fetchApi()
      const filtered = data.filter(cpuntries => cpuntries.Name === country)
      const countryCode = filtered[0].Code
      const regionNames = new Intl.DisplayNames(
        ['de'], {type: 'region'}
      );
      const countryInGerman = regionNames.of(countryCode)
      console.log(countryInGerman)
      return countryInGerman
    }

    suka()

  // fetchApi().then((data) => {
  //   const filtered = data.filter(cpuntries => cpuntries.Name === country)
  //   const countryCode = filtered[0].Code
  //   const regionNames = new Intl.DisplayNames(
  //     ['de'], {type: 'region'}
  //   );
  //   const countryInGerman = regionNames.of(countryCode)
  //   console.log(countryInGerman)
  // })

}
