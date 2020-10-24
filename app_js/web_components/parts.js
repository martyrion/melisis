class ModuleNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div></div>
      <div class="module-button btn active">
               <div class="material-icons">perm_identity</div>
        <div class="text">Προσωπικό</div>
      </div>
      <div class="module-button">
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


