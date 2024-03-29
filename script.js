let copyright = document.getElementById("footer__text");
let year = new Date().getFullYear();
let url = "https://www.shanejeremich.com";

copyright.innerHTML = `&copy; Copyright ${year} | 
  <a href=${url} target="_blank">Shane Jeremich</a>
  <p>Interfaces and Usability | October 8th, 2023</p>`;
