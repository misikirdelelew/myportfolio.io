const projectInfo = [
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
projectInfo.forEach((element, i) => {
    const work = document.querySelector('.card');
    const card = document.createElement('article');
    card.classList = 'card-section';
    if (i === 1) {
        card.setAttribute('id', 'reverce');
    } else if (i === 3) {
        card.setAttribute('id', 'reverce');
    }

    const popupcard = `
    <img src="${projectInfo[i]['featured image']}" alt="Snapshot Portfolio" class="tonic-img-mobile">
  <img src="${projectInfo[i]['featured image desk']}" alt="Snapshot Portfolio"
      class="tonic-img-desktop">
  <article class="card-section-text">
  <h2 class="project-title-heading text-mobile">${projectInfo[i].name}</h2>
  <h2 class="project-title-heading text-desktop">${projectInfo[i].title}</h2>
  
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
          <button class="btn-see-project" type="button" id="${projectInfo[i].id}">
              See project
          </button>
      </div>
  </article>
  
  `;
    card.innerHTML += popupcard;
    work.appendChild(card);
});
function makeDiv(event) {
    const popup = document.createElement('div');
    document.body.append(popup);
    popup.classList.add('pop-up-class');

    // add elements
    const header = document.createElement('div');
    header.classList.add('header-pp');
    const projecthead = document.createElement('h2');
    projecthead.classList.add('project-head');
    const projectimg = document.createElement('img');
    projectimg.classList.add('image-pp');
    const positiondiv = document.createElement('div');
    positiondiv.classList.add('position-div-pp');
    const projectdescrip = document.createElement('p');
    projectdescrip.classList.add('project-descrip');
    const langbtndiv = document.createElement('div');
    langbtndiv.classList.add('lang-btn-div');
    const projecttech = document.createElement('ul');
    projecttech.classList.add('lang-container-pp');
    const projectbtncontainer = document.createElement('div');
    const btnseelive = document.createElement('a');
    const btnseesource = document.createElement('a');
    const closeButton = document.createElement('button');
    closeButton.classList.add('closeButton-class');
    closeButton.id = 'close-button';

    // append elements inside the div
    popup.append(
        header,
        projecthead,
        closeButton,
        projectimg,
        positiondiv,
        projectdescrip,
        langbtndiv,
        projecttech,
        projectbtncontainer,
    );
    header.append(projecthead, closeButton);
    positiondiv.append(projectdescrip, langbtndiv, projecttech, projectbtncontainer);
    langbtndiv.append(projecttech, projectbtncontainer);
    projectbtncontainer.append(btnseelive, btnseesource);

    // add content to the elements of div
    const projectId = parseInt(event.target.id, 10);
    projecthead.textContent = projectInfo[projectId].name;
    projectimg.src = projectInfo[projectId]['featured image'];
    projectdescrip.textContent = projectInfo[projectId].description;

    for (let i = 0; i < projectInfo[projectId].technologies.length; i += 1) {
        const projectLi = document.createElement('li');
        projectLi.className = 'languages-pp';
        projectLi.textContent = projectInfo[projectId].technologies[i];
        projecttech.appendChild(projectLi);
    }

    projectbtncontainer.classList.add('btn-container-class-pp');
    btnseelive.href = projectInfo[projectId]['link to live version'];
    btnseelive.classList.add('btn-seelive-pp');
    btnseelive.target = '_blank';
    btnseelive.textContent = 'See Live';
    btnseesource.href = projectInfo[projectId]['link to source'];
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
    btn.addEventListener('click', makeDiv);
});