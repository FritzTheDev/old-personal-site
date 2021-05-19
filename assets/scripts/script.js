function openMenu() {
  const menu = document.getElementById("mobile-menu");
  const menuBackdrop = document.getElementById("mobile-menu-backdrop");
  menu.classList.remove("hidden");
  menu.classList.add("fade-in");
  menuBackdrop.classList.remove("hidden");
  menuBackdrop.classList.add("fade-in");
}

function closeMenu() {
  const menu = document.getElementById("mobile-menu");
  const menuBackdrop = document.getElementById("mobile-menu-backdrop");
  menu.classList.add("hidden");
  menuBackdrop.classList.add("hidden");
}