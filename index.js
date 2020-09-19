$(document).ready(() => {
  let rand = Math.floor(Math.random() * Math.floor(200));
  const src = `https://www.youtube.com/embed/oGxgDnItjuA?start=${rand}&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&mute=1`;
  const element = document.getElementById("bgvid");
  element.src = src;

  preloaderFadeOutTime = 200;
  function hidePreloader() {
		let preloader = $("#preloader");
		
		// Doan nay so cang nho load cang nhanh
    let progress = setInterval(() => {
      let $bar = $(".bar");
      document.getElementById("skip").onclick = () => {
        endVid();
      };

      function endVid() {
        clearInterval(progress);
        preloader.fadeOut(preloaderFadeOutTime);
        element.remove();
			}
			
      if ($bar.val() >= 100) {
        endVid();
      } else {
				// Doan nay + cang nhieu chay cang nhanh
        $bar.val($bar.val() + 5);
      }
    }, 500);
  }

  hidePreloader();
});
