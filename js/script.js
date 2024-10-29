const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const grid =document.getElementById("grid-card")
const generateMemberCard = (name, role, email, img) => {
  return `
    <div class="card mb-3 h-200 bg-dark text-white " style="max-width: 500px ;">
      <div class="row  g-5" >
      <div class="col-md-4">
        <img src="./${img}" class="img-fluid rounded-start" alt="img male 1">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${role}</p>
    <p class="card-text"><small class="text-body-secondary">${email}</small></p>
        </div>
      </div>
    </div>
  </div>
 </div>`
};
let cardsHtml = ``;

teamMembers.forEach((member) => {
  const { name, role, email, img } = member;
  const memberCardHtml = generateMemberCard(name, role, email, img);
  cardsHtml += memberCardHtml;
});

grid.innerHTML = cardsHtml;





