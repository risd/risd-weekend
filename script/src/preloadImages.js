module.exports = function( $ ){

  // console.log('PreLoadImages initialized.');

  var modifiers = JSON.parse($("#modifiers-json").html());
  var modifierImageUrls = [];
  var imagesToLoad = [];

  if (modifiers) {
    getImages();
    preloadImages(modifierImageUrls);
  }

  function getImages() {
    for (var i = 0; i < modifiers.length; i++) {
      if (modifiers[i].modifier_image) {
        modifierImageUrls.push(modifiers[i].modifier_image.resize_url);
      }
    }
  }

  function preloadImages(imageArray) {
    for (i = 0; i < imageArray.length; i++) {
			imagesToLoad[i] = new Image();
			imagesToLoad[i].src = imageArray[i];
		}
  }

};
