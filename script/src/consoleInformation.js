var $ = global.jQuery;

module.exports = ConsoleInformation;

function ConsoleInformation(opts) {
  if (!(this instanceof ConsoleInformation)) {
    return new ConsoleInformation(opts);
  }

  var fontFamily = 'font-family: Gotham, "Gotham SSm A", "Gotham SSm B", "Helvetica Neue", "Helvetica", "Arial", sans-serif';

  console.log('%c                               ', 'font-size: 3rem; border-top: 2px solid black;');
  console.log('%cWe are now hiring a front-end developer', 'font-weight:bold; color: rgb(0, 0, 0); font-size: 2rem; ' + fontFamily);
  console.log('%chttps://careers.risd.edu/postings/1562',  'color: rgb(0, 0, 0); font-size: 2rem; border-bottom: 2px solid rgb(63, 241, 221); text-decoration: none; ' + fontFamily);
  console.log('%c                               ', 'color: rgb(0, 0, 0); font-size: 3rem;');

  console.log('%c                               ', 'font-size: 3rem; border-top: 2px solid black;');
  console.log('%cRhode Island School of Design', 'font-size: 3rem; font-weight: bold; color: rgb(63, 241, 221); ' + fontFamily);
  console.log('');
  console.log('%cwww.risd.edu', 'color: rgb(0, 0, 0); font-size: 2rem; border-bottom: 2px solid rgb(63, 241, 221); text-decoration: none; ' + fontFamily);
  console.log('');

  console.log('%cTwo College Street', 'color: rgb(0, 0, 0); font-size: 2rem; ' + fontFamily);
  console.log('%cProvidence, RI 02903-2784', 'color: rgb(0, 0, 0); font-size: 2rem; ' + fontFamily);
  console.log('%cUSA', 'color: rgb(0, 0, 0); font-size: 2rem; ' + fontFamily);
  console.log('');

  console.log('%c401 454-6100', 'color: rgb(0, 0, 0); font-size: 2rem; ' + fontFamily);
  console.log('%c1 800 364-RISD', 'color: rgb(0, 0, 0); font-size: 2rem; ' + fontFamily);
  console.log('%c                               ', 'color: rgb(0, 0, 0); font-size: 3rem; border-bottom: 2px solid black;');

}
