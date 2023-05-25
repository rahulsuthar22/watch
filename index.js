const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
setInterval(() => {
  const d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();
  //   console.log(h, m, s);
  Hdegree = h * 30 + (1 * m) / 2;
  Mdegree = m * 6 + (1 * s) / 10;
  Sdegree = s * 6;
  hour.style.transform = `rotate(${Hdegree}deg)`;
  minute.style.transform = `rotate(${Mdegree}deg)`;
  second.style.transform = `rotate(${Sdegree}deg)`;
}, 1000);
