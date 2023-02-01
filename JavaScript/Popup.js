const ProjectInformation = [
  {
    name: 'Tonic',
    title: 'Tonic',
    description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    'featured image': './images/tonic-img-1.png',
    'featured image desk': './images/snaposhot-1-desktop-p.png',
    technologies: ['html', 'css', 'javascript'],
    'link to live version':
            '#/',
    'link to source':
            '#',
    id: 0,
  },
  {
    name: 'Multi-Post Stories',
    title: 'Multi-Post Stories',
    description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    'featured image': './images/tonic-img-1.png',
    'featured image desk': './images/snaposhot-1-desktop-p.png',
    technologies: ['html', 'css', 'javascript'],
    'link to live version':
            '#/',
    'link to source':
            '#',
    id: 1,
  },
  {
    name: 'Tonic',
    title: 'Facebook 360',
    description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    'featured image': './images/tonic-img-1.png',
    'featured image desk': './images/facebook-360-desktop.svg',
    technologies: ['html', 'css', 'javascript'],
    'link to live version':
            '#/',
    'link to source':
            '#',
    id: 2,
  },
  {
    name: 'Multi-Post Stories',
    title: 'Uber Navigation',
    description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    'featured image': './images/tonic-img-1.png',
    'featured image desk': './images/uber-nav-desktop.svg',
    technologies: ['html', 'css', 'javascript'],
    'link to live version':
            '#/',
    'link to source':
            '#',
    id: 3,
  },
];
ProjectInformation.forEach((element, i) => {
  const work = document.querySelector('.card');
  const card = document.createElement('article');
  card.classList = 'card-section';
  if (i === 1) {
    card.setAttribute('id', 'reverce');
  } else if (i === 3) {
    card.setAttribute('id', 'reverce');
  }

  const popupcard = `
    <img src="${ProjectInformation[i]['featured image']}" alt="Snapshot Portfolio" class="tonic-img-mobile">
  <img src="${ProjectInformation[i]['featured image desk']}" alt="Snapshot Portfolio"
      class="tonic-img-desktop">
  <article class="card-section-text">
  <h2 class="project-title-heading text-mobile">${ProjectInformation[i].name}</h2>
  <h2 class="project-title-heading text-desktop">${ProjectInformation[i].title}</h2>
  
      <article class="card-sub-container">
          <h2 class="title-canopy text-mobile">CANOPY</h2>
          <h2 class="title-canopy text-desktop">CANOPY</h2>
          <img src="./images/Counter.png" alt="Counter">
          <h2 class="title-developer text-mobile">Back End Dev</h2>
          <h2 class="title-developer text-desktop">Back End Dev</h2>
          <img src="./images/Counter.png" alt="Counter">
          <h2 class="title-year text-mobile">2015</h2>
          <h2 class="title-year text-desktop">2015</h2>
      </article>
      <p class="desciption-p-mobile text-mobile">
          A daily selection of privately personalized reads; no accounts or sign-ups required.
      </p>
      <p class="desciption-p-mobile text-desktop">
          A daily selection of privately personalized reads; no accounts or sign-ups required.
      </p>
      <ul class="pro-language">
      <li>
      <h1 class="html-1">html</h1>
  </li>
  <li>
  <h1 class="html-1" id="rube-desktop">Rube on rails</h1>
</li>
  <li>
      <h1 class="html-1">css</h1>
  </li>
  <li>
      <h1 class="html-1">Javascript</h1>
  </li>
      </ul>
      <div class="btn-container">
          <button class="btn-see-project" type="button" id="${ProjectInformation[i].id}">
              See project
          </button>
      </div>
  </article>
  `;
  card.innerHTML += popupcard;
  work.appendChild(card);
});
function makePopup(event) {
  const popup = document.createElement('div');
  document.body.append(popup);
  popup.classList.add('pop-up-class');
  // add elements
  const header = document.createElement('div');
  header.classList.add('header-pp');
  const headingtitle = document.createElement('h2');
  headingtitle.classList.add('project-head');
  const projectimg = document.createElement('img');
  projectimg.classList.add('image-pp');
  const positiondiv = document.createElement('div');
  positiondiv.classList.add('position-div-pp');
  const paragraphdescription = document.createElement('p');
  paragraphdescription.classList.add('project-descrip');
  const langbtndiv = document.createElement('div');
  langbtndiv.classList.add('lang-btn-div');
  const proLanguage = document.createElement('ul');
  proLanguage.classList.add('lang-container-pp');
  const projectbtncontainer = document.createElement('div');
  const btnseelive = document.createElement('a');
  const btnseesource = document.createElement('a');
  const closeButton = document.createElement('button');
  closeButton.classList.add('closeButton-class');
  closeButton.id = 'close-button';
  popup.append(
    header,
    headingtitle,
    closeButton,
    projectimg,
    positiondiv,
    paragraphdescription,
    langbtndiv,
    proLanguage,
    projectbtncontainer,
  );
  header.append(headingtitle, closeButton);
  positiondiv.append(paragraphdescription, langbtndiv, proLanguage, projectbtncontainer);
  langbtndiv.append(proLanguage, projectbtncontainer);
  projectbtncontainer.append(btnseelive, btnseesource);

  const projectId = parseInt(event.target.id, 10);
  headingtitle.textContent = ProjectInformation[projectId].name;
  projectimg.src = ProjectInformation[projectId]['featured image'];
  paragraphdescription.textContent = ProjectInformation[projectId].description;

  for (let i = 0; i < ProjectInformation[projectId].technologies.length; i += 1) {
    const projectLi = document.createElement('li');
    projectLi.className = 'languages-pp';
    projectLi.textContent = ProjectInformation[projectId].technologies[i];
    proLanguage.appendChild(projectLi);
  }
  projectbtncontainer.classList.add('btn-container-class-pp');
  btnseelive.href = ProjectInformation[projectId]['link to live version'];
  btnseelive.classList.add('btn-seelive-pp');
  btnseelive.target = '_blank';
  btnseelive.textContent = 'See Live';
  btnseesource.href = ProjectInformation[projectId]['link to source'];
  btnseesource.classList.add('btn-seesource-pp');
  btnseesource.target = '_blank';
  btnseesource.textContent = 'See Source';
  // close button function
  function closeButtonFunction() {
    popup.remove();
  }
  const clickCloseButton = document.getElementById('close-button');
  clickCloseButton.addEventListener('click', closeButtonFunction);
}
// button
const buttonsee = document.querySelectorAll('.btn-see-project');
buttonsee.forEach((btn) => {
  btn.addEventListener('click', makePopup);
});