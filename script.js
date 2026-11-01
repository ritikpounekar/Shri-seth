// Footer year
var yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Photo viewer: opens only for gallery tiles that have a real photo
(function () {
  var viewer = document.getElementById('viewer');
  if (!viewer || typeof viewer.showModal !== 'function') return;

  var viewerImg = viewer.querySelector('img');
  var viewerCap = viewer.querySelector('.cap');
  var closeBtn = viewer.querySelector('.close');

  document.querySelectorAll('.tile').forEach(function (tile) {
    tile.addEventListener('click', function () {
      var img = tile.querySelector('img');
      if (!img || !tile.classList.contains('has-img')) return;
      viewerImg.src = img.src;
      viewerImg.alt = img.alt;
      viewerCap.textContent = img.alt;
      viewer.showModal();
    });
  });

  closeBtn.addEventListener('click', function () { viewer.close(); });
  viewer.addEventListener('click', function (e) {
    if (e.target === viewer) viewer.close();
  });
})();
