javascript:function rainbow(){  const body = document.body;  body.animate([    {filter: 'hue-rotate(0deg)'},    {filter: 'hue-rotate(360deg)'}], {    duration: 1000,    iterations: Infinity  }); document.getElementsByClassName("col-24 col-sm-24 col-md-24 col-lg-3 col-xl-2 col-xxl-2 d-none d-lg-block p-side")[0].remove(); document.getElementsByClassName("slopeg-header-content")[0].remove(); document.getElementsByClassName('title-game')[0].remove(); document.getElementsByClassName('d-xxl-none')[0].remove(); document.getElementsByClassName('d-lg-none')[0].remove(); document.getElementsByClassName('container-fluid p-3 p-sm-5 p-md-10 p-lg-15 pt-20')[0].remove(); document.getElementsByClassName('block-footer mt-20')[0].remove(); document.getElementsByClassName('container-fluid play-game-box p-3 p-sm-5 p-md-10 p-lg-0 pt-20')[0].style.marginLeft = "12%"; document.body.style.overflow = "hidden"; void(0);}rainbow();
