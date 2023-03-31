const countries = [
    {
      code: 'us',
      name: 'United States',
      states: [
        { code: 'ny', name: 'New York', cities: ['New York City', 'Buffalo'] },
        { code: 'ca', name: 'California', cities: ['Los Angeles', 'San Francisco'] },
        { code: 'tx', name: 'Texas', cities: ['Houston', 'Austin'] }
      ]
    },
    {
      code: 'ca',
      name: 'Canada',
      states: [
        { code: 'on', name: 'Ontario', cities: ['Toronto', 'Ottawa'] },
        { code: 'qc', name: 'Quebec', cities: ['Montreal', 'Quebec City'] },
        { code: 'bc', name: 'British Columbia', cities: ['Vancouver', 'Victoria'] }
      ]
    }
  ];

  const countrySelect = document.getElementById('country-select');
  const stateSelect = document.getElementById('state-select');
  const citySelect = document.getElementById('city-select');
  const tableBody = document.querySelector('#selected-values tbody');

  
  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country.code;
    option.textContent = country.name;
    countrySelect.appendChild(option);
  });

  
  countrySelect.addEventListener('change', event => {
    
    stateSelect.innerHTML = '<option value="">Select a state</option>';
    citySelect.innerHTML = '<option value="">Select a city</option>';

   
    stateSelect.disabled = true;
    citySelect.disabled = true;

    
    stateSelect.disabled = false;

    
    const selectedCountry = countries.find(country => country.code === event.target.value);
    selectedCountry.states.forEach(state => {
      const option = document.createElement('option');
      option.value = state.code;
      option.textContent = state.name;
      stateSelect.appendChild(option);
    });
  });

  
  stateSelect.addEventListener('change', event => {
    
    citySelect.innerHTML = '<option value="">Select a city</option>';

    
    citySelect.disabled = true;

    
    citySelect.disabled = false;

    
    const selectedCountry = countries.find(country => country.code === countrySelect.value);
const selectedState = selectedCountry.states.find(state => state.code === event.target.value);
selectedState.cities.forEach(city => {
const option = document.createElement('option');
option.value = city;
option.textContent = city;
citySelect.appendChild(option);
});
});

citySelect.addEventListener('change', event => {

const selectedCountry = countries.find(country => country.code === countrySelect.value);
const selectedState = selectedCountry.states.find(state => state.code === stateSelect.value);
const selectedCity = selectedState.cities.find(city => city === event.target.value);

const row = tableBody.insertRow();
row.insertCell().textContent = selectedCountry.name;
row.insertCell().textContent = selectedState.name;
row.insertCell().textContent = selectedCity;
});




