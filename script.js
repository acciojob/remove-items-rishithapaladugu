//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the dropdown and button
  const select = document.getElementById("colorSelect");
  const button = document.querySelector('input[type="button"]');

  button.addEventListener("click", function () {
    // Remove the selected option if any
    if (select.selectedIndex !== -1) {
      select.remove(select.selectedIndex);
    }
  });
});