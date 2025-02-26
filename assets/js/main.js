import fetchData from './api.js';

(async () => {
    const profileData = await fetchData();
    
    const profileName = document.querySelector('#name');
    const profileLevel = document.querySelector('#level');
    const profileCity = document.querySelector('#city');
    const peofilePhone = document.querySelector('#phone');
    const profileEmail = document.querySelector('#email');

    profileName.textContent = profileData.name;
    profileLevel.textContent = profileData.level;
    profileCity.textContent = profileData.city;
    peofilePhone.textContent = profileData.phone;
    profileEmail.textContent = profileData.email;

})()
