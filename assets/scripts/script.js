function openMenu() {
  const menu = document.getElementById("mobile-menu");
  const menuBackdrop = document.getElementById("mobile-menu-backdrop");
  menu.classList.remove("hidden");
  menuBackdrop.classList.remove("hidden");

}

function closeMenu() {
  const menu = document.getElementById("mobile-menu");
  const menuBackdrop = document.getElementById("mobile-menu-backdrop");
  menu.classList.add("hidden");
  menuBackdrop.classList.add("hidden");
}