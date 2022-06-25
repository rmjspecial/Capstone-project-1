const hamburgerBtn = document.querySelector('.hamburger');
const crossBtn = document.querySelector('.cross-icon');
const navLinks = document.querySelectorAll('.navLink');
const djData = [
  {
    hidden: false,
    photo: 'image/food1.png',
    alt: 'fruit salad Photo',
    name: 'fruit salad',
    foodtype: 'special delicacy',
    description: 'This food has a well nutrient that will norish your body and makes you live healthy and stronger.',
  },

  {
    hidden: false,
    photo: 'image/food7.png',
    alt: 'jam Photo',
    name: 'jam and pepperoni',
    foodtype: 'special delicacy',
    description: 'This food has a well nutrient that will norish your body and makes you live healthy and stronger.',
  },

  {
    hidden: true,
    photo: 'image/food9.png',
    alt: 'Dimitri Vegas & Like Mike lastfm Photo',
    name: 'Dimitri Vegas & Like Mike',
    foodtype: 'special delicacy',
    description: 'This food has a well nutrient that will norish your body and makes you live healthy and stronger.',
  },

  {
    hidden: true,
    photo: 'image/food4.png',
    alt: 'beef Photo',
    name: 'beef dish',
    foodtype: 'special delicacy',
    description: 'This food has a well nutrient that will norish your body and makes you live healthy and stronger.',
  },

  {
    hidden: true,
    photo: 'image/food1.png',
    alt: 'sauce photo',
    name: 'sauce',
    foodtype: 'special delicacy',
    description: 'This food has a well nutrient that will norish your body and makes you live healthy and stronger.',
  },

  {
    hidden: true,
    photo: 'image/food5.png',
    alt: 'fish sauce Photo',
    name: 'fish sauce',
    foodtype: 'special delicacy',
    description: 'This food has a well nutrient that will norish your body and makes you live healthy and stronger.',
  },

];

function menuToggle() {
  document.querySelector('.mobile-nav').classList.toggle('active');
  document.querySelector('.hamburger').classList.toggle('hide');
}

hamburgerBtn.addEventListener('click', menuToggle);
crossBtn.addEventListener('click', menuToggle);

navLinks.forEach((navItem) => {
  navItem.addEventListener('click', menuToggle);
});

function loadFeaturedSpeakers(arr) {
  arr.forEach((each) => {
    const speaker = document.createElement('div');
    speaker.className = 'menu flex';
    const speakerImg = document.createElement('img');
    speakerImg.setAttribute('src', each.photo);
    speakerImg.setAttribute('alt', each.alt);
    speaker.appendChild(speakerImg);
    const speakerInfo = document.createElement('div');
    speakerInfo.className = 'menuInfo flex';
    const speakerName = document.createElement('h2');
    speakerName.textContent = each.name;
    speakerInfo.appendChild(speakerName);
    const speakerRank = document.createElement('span');
    speakerRank.textContent = each.occupation;
    speakerInfo.appendChild(speakerRank);
    const separator = document.createElement('hr');
    speakerInfo.appendChild(separator);
    const speakerPara = document.createElement('p');
    speakerPara.textContent = each.description;
    speakerInfo.appendChild(speakerPara);
    speaker.appendChild(speakerInfo);
    document.querySelector('.menus-wrapper').appendChild(speaker);
  });
}

function renderSpeakers() {
  document.querySelector('.menus-wrapper').innerHTML = '';
  if (visualViewport.width > 768) {
    loadFeaturedSpeakers(djData);
  } else loadFeaturedSpeakers(djData.filter((dj) => dj.hidden === false));
}

renderSpeakers();
window.addEventListener('resize', renderSpeakers);

document.getElementById('moreBtn').addEventListener('click', (e) => {
  loadFeaturedSpeakers(djData.filter((dj) => dj.hidden === true));
  e.target.remove();
});