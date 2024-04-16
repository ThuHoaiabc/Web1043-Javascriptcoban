const message = document.querySelector('.message');
const box = document.querySelector('.box');
const output = document.querySelector('.output');

const game = {
  timer: 0,
  start: null
};

function ranNum(max) {
  return Math.floor(Math.random() * max);
}

function addbox() {
  message.textContent = "Click it...";
  game.start = new Date().getTime();
  box.style.display = "block";
  box.style.left = ranNum(450) + "px";
  box.style.top = ranNum(450) + "px";
}

box.addEventListener('click', () => {
  box.style.display = "none";
  if (!game.start) {
    message.textContent = "Loading...";
  } else {
    const cur = new Date().getTime();
    const dur = (cur - game.start) / 1000;
    message.textContent = `It took ${dur} seconds to click`;
  }
  // Khi click vào box, hủy timer và khởi động lại game sau 3 giây
  clearTimeout(game.timer);
  game.timer = setTimeout(addbox, 3000);
});

// Bắt đầu trò chơi khi trang web được load
window.addEventListener('load', () => {
  box.style.display = "none";
  box.style.position = "absolute";
});

// Sự kiện bắt đầu trò chơi khi nhấp vào message
message.addEventListener('click', () => {
  addbox();
});