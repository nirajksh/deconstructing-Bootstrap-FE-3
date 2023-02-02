import teamsData from "./data.js";
console.log(teamsData);

const teamPillsContainerId = "teams-container";
const teamContentContainerId = "team-content-container";

// TODO 1: Displaying team pills for each team
function displayTeamPills(teamsData) {
  // 1. Get the pill container div
  const pillContainer = document.getElementById(teamPillsContainerId);
  console.log(pillContainer);

  // 2. For each of the team in teams data
  teamsData.forEach((team) => {
    // 2.1 Create team pill, set id for team element
    const teamPill = document.createElement("div");
    teamPill.classList.add("card", "m-2");
    teamPill.innerHTML = `<div id="${team.id}" class="card-body">${team.name}</div>`;
    // console.log(teamPill);

    // 2.2 Append team pill to the pill container div
    pillContainer.append(teamPill);
  });
}

displayTeamPills(teamsData);

const teamPillsContainer = document.getElementById(teamPillsContainerId);

// TODO 2: Event handler to show Carousel with images for selected team
teamPillsContainer.addEventListener("click", (e) => {
  //e.target -> element node where the "click" event is fired from
  //events fired in child, bubbles up to the parent
  // console.log(e.target);
  // 2. On click, create content for selected team
  // 2.1. Get the selected team id
  const selectedElementId = e.target.id;
  // console.log(selectedElementId);

  // 2.2. Get the image links for the selected team
  const selectedTeamData = teamsData.find(
    (team) => team.id === selectedElementId
  );
  // console.log(selectedTeamData);
  const imageLinks = selectedTeamData.images;
  // console.log(imageLinks);

  // 2.3. Get Carousel outer structure
  /*
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  */
  const teamElement = document.getElementById(teamContentContainerId);
  teamElement.innerHTML = `<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
 <div class="carousel-inner" id="carousel-data">
   
 </div>
 <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
   <span class="visually-hidden">Previous</span>
 </button>
 <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
   <span class="carousel-control-next-icon" aria-hidden="true"></span>
   <span class="visually-hidden">Next</span>
 </button>
</div>`;
  console.log(teamElement);

  // 2.4. Overwrite team content container body with Carousel outer structure
  // 2.5. For each image link, append Carousel item to "div.carousel-inner" element
  imageLinks.forEach((imageLink, idx) => {
    /*
      <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    */
    const div = document.createElement("div");
    div.classList.add("carousel-item");
    if (idx === 0) {
      div.classList.add("active");
    }

    div.innerHTML = `<img src="${imageLink}" class="d-block w-100" alt="...">`;

    const innerElement = document.getElementById("carousel-data");
    innerElement.append(div);
  });
  // Set first image as active
});
