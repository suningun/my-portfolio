const skill = [
  { image: "assets/images/html-5.png", title: "HTML" },
  { image: "assets/images/css-3.png", title: "CSS" },
  { image: "assets/images/js.png", title: "JavaScript" },
  { image: "assets/images/java.png", title: "Java" },
  { image: "assets/images/python.png", title: "Python" },
  { image: "assets/images/github.png", title: "Github" },
];

let content = "";
for (let i = 0; i < skill.length; i++) {
  content += `
        <div class="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mb-4">
        <div class="card" style="height: 100px; width: 100px; overflow: hidden;">
            <div class="card-body text-center d-flex flex-column align-items-center justify-content-center p-2">
            <div class="img-container mb-2">
                <img src="${skill[i].image}" width="50" height="50" alt="${skill[i].title}" style="max-width: 100%; height: auto;">
            </div>
            <p class="fs-6 mb-0">${skill[i].title}</p>
            </div>
        </div>
        </div>`;
}

document.getElementById("skill").innerHTML = content;

const education = [
  {
    image: "assets/images/aupp.png",
    major: "Bachelor of Science In Software Development",
    institution: "American University Of Phnom Penh | AUPP",
    date: "2025-2029",
  },
  {
    image: "assets/images/soc.png",
    major: "Coding Program",
    institution: "Sisters Of Code",
    date: "2021-2025",
  },
  {
    image: "assets/images/crp.jpg",
    major: "Grade 7-12",
    institution: "Chamrouen Phal High School",
    date: "2018-2024",
  },
];
let educationContent = "";
for (let i = 0; i < education.length; i++) {
  educationContent += `<div class="container-fluid mb-4 row shadow-sm mx-auto" style="width: 80%; height: auto;">
                            <div class="col-md-4 mb-md-0 text-center mx-auto"><img class="rounded-circle" src="${education[i].image}" width="150" height="150" style="max-width: 100%; height: auto;"></div>

                            <div class="col-md-8 mb-md-0 py-4 g-2">
                                <h4>${education[i].major}</h4>
                                <p>${education[i].institution}</p>
                                <h5>${education[i].date}</h5>
                            </div>
                        </div>`;
}
document.getElementById("education").innerHTML = educationContent;
