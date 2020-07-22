export default async function initUI() {
  const $listMsg = document.querySelectorAll(".msg");
  await addClass($listMsg);
}

async function addClass(value) {
  let i = 0;
  let time = setInterval(() => {
    value[i].classList.add("visible");
    console.log(value.length);
    console.log(i++);
    if (i >= value.length) stopInterval(time);
  }, 600);
}

function stopInterval(interval) {
  console.log("stop");

  clearInterval(interval);
}
