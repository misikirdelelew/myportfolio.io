const Project = [
  {
    id: 0,
    imgURL: './assets/Snapshoot-Portfolio-4.png',
    heading: 'Multi-Post Stories',
    topListpart: ['CANOPY', 'Back End', '2015'],
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries,',
    ProgrammListpart: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 1,
    imgURL: './assets/Snapshoot-Portfolio.png',
    heading: 'Facebook 360',
    topListpart: ['FACEBOOK', 'Back End', '2015'],
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries,',
    ProgrammListpart: ['HTML', 'CSS', 'JavaScript', 'Ruby on rails'],
  },
  {
    id: 2,
    imgURL: './assets/Snapshoot-Portfolio-1.png',
    heading: 'Uber Navigations',
    topListpart: ['UBER', 'Back End', '2015'],
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries,',
    ProgrammListpart: ['HTML', 'CSS', 'JavaScript', 'Ruby on rails'],
  },
  {
    id: 3,
    imgURL: './assets/Snapshoot-Portfolio-2.png',
    heading: 'Multi-Post Stories',
    topListpart: ['CANOPY', 'Back End', '2015'],
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries,',
    ProgrammListpart: ['HTML', 'CSS', 'JavaScript', 'Ruby on rails'],
  },
  {
    id: 4,
    imgURL: './assets/Snapshoot-Portfolio-3.png',
    heading: 'Multi-Post Stories',
    topListpart: ['FACEBOOK', 'FULL Stack Dev', '2015'],
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries,',
    ProgrammListpart: ['HTML', 'CSS', 'JavaScript', 'Ruby on rails'],
  },
];

const closePopup = document.querySelector('#main-pop-head > span');
const PopUp = document.querySelector('#main-pop');
const cards = document.querySelectorAll('.card a');

closePopup.addEventListener('click', () => {
  PopUp.classList.toggle('hidden');
});

const makPopuppart = ({
  imgURL, heading, topListpart, text, ProgrammListpart,
}) => {
  const pHead = document.querySelector('#main-pop-head > h2');
  const P1List = document.querySelectorAll('#main-pop ul > li');
  const PImg = document.querySelector('#pop-image > img');
  const PText = document.querySelector('#detail-pop > p');
  const P2List = document.querySelector('#detail-pop menu');

  pHead.innerHTML = heading;
  PText.innerHTML = text;
  PImg.src = imgURL;
  P1List.forEach((ele, i) => { ele.innerHTML = topListpart[i]; });
  P2List.innerHTML = '';
  ProgrammListpart.forEach((ele) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = ele;
    P2List.appendChild(listItem);
  });
  PopUp.classList.toggle('hidden');
};

cards.forEach((ele, i) => {
  ele.addEventListener('click', () => {
    makPopuppart(Project[i]);
  });
});
