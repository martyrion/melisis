
class ModuleNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div></div>
      <div id="mod-first" class="module-button btn">
               <div class="material-icons">perm_identity</div>
        <div class="text">Προσωπικό</div>
      </div>
      <div id="mod-second" class="module-button">
        <div class="material-icons btn">import_contacts</div>
        <div class="text">Επαφές</div>
      </div>
      <div class="app-buttons">
        <span id="notifications" class="module-button material-icons btn">notifications</span>
        <span id="app-menu" class="module-button material-icons btn">menu</span>
      </div>
          `;
  }
}
customElements.define('modules-nav', ModuleNav);


class SubModulesHRM extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <a id="sub-first" class="submodule-button btn" href="hrm_personellList.html">
    <i class="material-icons">list</i>Κατάλογος
  </a>
  <a id="sub-second" class="submodule-button btn" onclick="navToDetails()">
    <i class="material-icons">info</i>Λεπτ/ρειες
  </a>
  <a id="sub-third" class="submodule-button btn" href="hrm_personellAbsence.html">
    <i class="material-icons">airline_seat_individual_suite</i>Απόντες
  </a>
  <a id="sub-fourth" class="submodule-button btn" href="hrm_personellStats.html">
    <i class="material-icons">bar_chart</i>Στατιστικά
  </a>
          `;

  }
}
customElements.define('sub-modules-hrm', SubModulesHRM);



function navToDetails(){
  window.location ="hrm_personellDetails.html";
  console.log("hi");
}
