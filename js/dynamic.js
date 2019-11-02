/* Dynamic Current Year for Copyright */

var currentYearElement = document.getElementById('copyright-year');
var currentYear = new Date().getFullYear();
currentYearElement.innerHTML = currentYear;
// document.write(new Date().getFullYear());

/* END Dynamic Current Year for Copyright */
/* Dynamic Last Updated Date */

var lastUpdate = document.getElementById("last-update");
lastUpdate.innerHTML = "Last Updated: 03/11/2019";

/* END Dynamic Last Updated Date */