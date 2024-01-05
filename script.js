document.addEventListener('DOMContentLoaded', function () {
  const floatingVideo = document.querySelector('.floating-video');
  const navHeight = document.querySelector('nav').offsetHeight;

  setTimeout(function () {
    floatingVideo.style.bottom = navHeight + 20 + 'px'; // Position below nav bar
    floatingVideo.style.right = '20px'; // Position on the right side
    floatingVideo.style.width = '200px'; // Set video width
    floatingVideo.style.height = 'auto'; // Maintain aspect ratio
  }, 1000); // Delay for 1 second
});