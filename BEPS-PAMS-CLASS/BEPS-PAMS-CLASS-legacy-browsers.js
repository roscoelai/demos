/************************ 
 * Beps-Pams-Class Test *
 ************************/


// store info about the experiment session:
let expName = 'BEPS-PAMS-CLASS';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'debug': 'false'};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1, 1, 1]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(beginRoutineBegin());
flowScheduler.add(beginRoutineEachFrame());
flowScheduler.add(beginRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'imgs/cards/pams-card-04.png', 'path': 'imgs/cards/pams-card-04.png'},
    {'name': 'imgs/cards/beps-card-03.png', 'path': 'imgs/cards/beps-card-03.png'},
    {'name': 'imgs/cards/pams-card-16.png', 'path': 'imgs/cards/pams-card-16.png'},
    {'name': 'imgs/cards/pams-card-06.png', 'path': 'imgs/cards/pams-card-06.png'},
    {'name': 'imgs/cards/class-card-07.png', 'path': 'imgs/cards/class-card-07.png'},
    {'name': 'imgs/cards/beps-card-06.png', 'path': 'imgs/cards/beps-card-06.png'},
    {'name': 'imgs/cards/class-card-17.png', 'path': 'imgs/cards/class-card-17.png'},
    {'name': 'imgs/cards/class-card-19.png', 'path': 'imgs/cards/class-card-19.png'},
    {'name': 'imgs/cards/beps-card-07.png', 'path': 'imgs/cards/beps-card-07.png'},
    {'name': 'imgs/cards/pams-card-08.png', 'path': 'imgs/cards/pams-card-08.png'},
    {'name': 'imgs/cards/class-card-14.png', 'path': 'imgs/cards/class-card-14.png'},
    {'name': 'imgs/cards/class-card-10.png', 'path': 'imgs/cards/class-card-10.png'},
    {'name': 'imgs/cards/class-card-21.png', 'path': 'imgs/cards/class-card-21.png'},
    {'name': 'imgs/cards/beps-card-05.png', 'path': 'imgs/cards/beps-card-05.png'},
    {'name': 'imgs/cards/pams-card-11.png', 'path': 'imgs/cards/pams-card-11.png'},
    {'name': 'imgs/cards/class-card-25.png', 'path': 'imgs/cards/class-card-25.png'},
    {'name': 'imgs/transparent-box.png', 'path': 'imgs/transparent-box.png'},
    {'name': 'imgs/cards/class-card-13.png', 'path': 'imgs/cards/class-card-13.png'},
    {'name': 'imgs/cards/class-card-09.png', 'path': 'imgs/cards/class-card-09.png'},
    {'name': 'imgs/cards/pams-card-10.png', 'path': 'imgs/cards/pams-card-10.png'},
    {'name': 'imgs/draw_square.png', 'path': 'imgs/draw_square.png'},
    {'name': 'imgs/cards/pams-card-03.png', 'path': 'imgs/cards/pams-card-03.png'},
    {'name': 'imgs/cards/class-card-26.png', 'path': 'imgs/cards/class-card-26.png'},
    {'name': 'imgs/cards/class-card-11.png', 'path': 'imgs/cards/class-card-11.png'},
    {'name': 'imgs/cards/class-card-04.png', 'path': 'imgs/cards/class-card-04.png'},
    {'name': 'imgs/cards/class-card-02.png', 'path': 'imgs/cards/class-card-02.png'},
    {'name': 'imgs/draw_triangle.png', 'path': 'imgs/draw_triangle.png'},
    {'name': 'imgs/continue.png', 'path': 'imgs/continue.png'},
    {'name': 'sequences/conditions.csv', 'path': 'sequences/conditions.csv'},
    {'name': 'imgs/cards/class-card-12.png', 'path': 'imgs/cards/class-card-12.png'},
    {'name': 'imgs/cards/class-card-20.png', 'path': 'imgs/cards/class-card-20.png'},
    {'name': 'imgs/cards/pams-card-02.png', 'path': 'imgs/cards/pams-card-02.png'},
    {'name': 'imgs/cards/pams-card-09.png', 'path': 'imgs/cards/pams-card-09.png'},
    {'name': 'imgs/cards/class-card-06.png', 'path': 'imgs/cards/class-card-06.png'},
    {'name': 'imgs/cards/pams-card-13.png', 'path': 'imgs/cards/pams-card-13.png'},
    {'name': 'imgs/cards/pams-card-14.png', 'path': 'imgs/cards/pams-card-14.png'},
    {'name': 'imgs/cards/class-card-08.png', 'path': 'imgs/cards/class-card-08.png'},
    {'name': 'imgs/cards/class-card-01.png', 'path': 'imgs/cards/class-card-01.png'},
    {'name': 'imgs/cards/pams-card-17.png', 'path': 'imgs/cards/pams-card-17.png'},
    {'name': 'imgs/cards/class-card-18.png', 'path': 'imgs/cards/class-card-18.png'},
    {'name': 'imgs/cards/pams-card-05.png', 'path': 'imgs/cards/pams-card-05.png'},
    {'name': 'imgs/cards/class-card-24.png', 'path': 'imgs/cards/class-card-24.png'},
    {'name': 'imgs/cards/class-card-05.png', 'path': 'imgs/cards/class-card-05.png'},
    {'name': 'imgs/cards/pams-card-15.png', 'path': 'imgs/cards/pams-card-15.png'},
    {'name': 'imgs/cards/class-card-16.png', 'path': 'imgs/cards/class-card-16.png'},
    {'name': 'imgs/cards/class-card-15.png', 'path': 'imgs/cards/class-card-15.png'},
    {'name': 'imgs/cards/pams-card-12.png', 'path': 'imgs/cards/pams-card-12.png'},
    {'name': 'imgs/cards/class-card-03.png', 'path': 'imgs/cards/class-card-03.png'},
    {'name': 'imgs/cards/class-card-23.png', 'path': 'imgs/cards/class-card-23.png'},
    {'name': 'imgs/cards/beps-card-01.png', 'path': 'imgs/cards/beps-card-01.png'},
    {'name': 'imgs/cards/pams-card-01.png', 'path': 'imgs/cards/pams-card-01.png'},
    {'name': 'imgs/cards/pams-card-07.png', 'path': 'imgs/cards/pams-card-07.png'},
    {'name': 'imgs/cards/beps-card-04.png', 'path': 'imgs/cards/beps-card-04.png'},
    {'name': 'imgs/cards/class-card-22.png', 'path': 'imgs/cards/class-card-22.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var beginClock;
var _pj;
var SHOW_DEBUG;
var CLICK_BOX_OPACITY;
var CARD_SIZE;
var DRAW_SHAPES_SIZE;
var BLANK_IMG;
var imgs;
var img_sizes;
var cimgs;
var cimg_sizes;
var cards;
var red_box;
var gateClock;
var trialChoiceClock;
var skip_next;
var trialChoiceText;
var trialChoiceMouse;
var trialChoiceDebug;
var trialDrawingClock;
var trialDrawingText;
var trialDrawingCont;
var trialDrawingMouse;
var trialDrawingDebug;
var trialDrawingBrush;
var gettrialDrawingBrush;
var trialDrawingBrushReset;
var trialDrawingBrushCurrentShape;
var trialDrawingBrushBrushPos;
var trialDrawingBrushPointer;
var trialDrawingBrushAtStartPoint;
var trialDrawingBrushShapes;
var trialVerbalClock;
var trialVerbalText;
var trialVerbalCont;
var trialVerbalMouse;
var trialVerbalDebug;
var wipeClock;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "begin"
  beginClock = new util.Clock();
  var _pj;
  function _pj_snippets(container) {
      function in_es6(left, right) {
          if (((right instanceof Array) || ((typeof right) === "string"))) {
              return (right.indexOf(left) > (- 1));
          } else {
              if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                  return right.has(left);
              } else {
                  return (left in right);
              }
          }
      }
      container["in_es6"] = in_es6;
      return container;
  }
  _pj = {};
  _pj_snippets(_pj);
  if (_pj.in_es6(expInfo.debug, ["true", "True", "TRUE"])) {
      SHOW_DEBUG = true;
  } else {
      SHOW_DEBUG = false;
  }
  CLICK_BOX_OPACITY = (SHOW_DEBUG ? 0.25 : 0);
  CARD_SIZE = [1.0, 0.707526];
  DRAW_SHAPES_SIZE = [0.358741, 0.3];
  BLANK_IMG = new visual.ImageStim({"win": psychoJS.window, "name": "blank", "image": "imgs/transparent-box.png", "pos": [0, 0], "size": [0, 0]});
  function make_card(name, pos = [0, 0], card_size = CARD_SIZE) {
      var card;
      card = new visual.ImageStim({"win": psychoJS.window, "name": name, "image": `imgs/cards/${name}.png`, "pos": pos, "size": [0, 0]});
      return [[card], [card_size]];
  }
  function make_click_box(name, pos) {
      return new visual.ImageStim({"win": psychoJS.window, "name": name, "image": `imgs/transparent-box.png`, "pos": pos, "size": [0, 0], "opacity": CLICK_BOX_OPACITY});
  }
  function get_verbal(name, pos = [0, 0], card_size = CARD_SIZE) {
      var card;
      card = new visual.ImageStim({"win": psychoJS.window, "name": name, "image": `imgs/cards/${name}.png`, "pos": pos, "size": [0, 0]});
      return [[card], [card_size], [], []];
  }
  imgs = null;
  img_sizes = null;
  cimgs = null;
  cimg_sizes = null;
  function get_umbrellas() {
      var dx, dy, names, xy;
      [imgs, img_sizes] = make_card("beps-card-01");
      names = ["orange", "white", "yellow", "black", "blue", "red"];
      [dx, dy] = [0.305, 0.175];
      xy = [[(- dx), dy], [0, dy], [dx, dy], [(- dx), (- dy)], [0, (- dy)], [dx, (- dy)]];
      cimgs = [];
      cimg_sizes = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          cimgs.push(make_click_box(names[i], xy[i]));
          cimg_sizes.push([0.26, 0.26]);
      }
      return [imgs, img_sizes, cimgs, cimg_sizes];
  }
  function get_draw_shapes(shapeName) {
      imgs = [new visual.ImageStim({"win": psychoJS.window, "name": shapeName, "image": `imgs/${shapeName}.png`, "pos": [(- 0.32), 0], "size": [0, 0]})];
      return [imgs, [DRAW_SHAPES_SIZE], [], []];
  }
  function get_patterns(which) {
      var dy1, dy2, names, sizes, xys;
      cards = {"practice": "beps-card-03", "trial": "beps-card-04"};
      [imgs, img_sizes] = make_card(cards[which], [0, (- 0.08)]);
      names = {"practice": ["star", "bread", "watermelon", "pizza"], "trial": ["ice_cream", "basketball", "car", "beachball"]};
      dy1 = (- 0.28);
      dy2 = (- 0.26);
      xys = {"practice": [[(- 0.31), dy1], [(- 0.105), dy1], [0.13, dy1], [0.32, dy1]], "trial": [[(- 0.335), dy2], [(- 0.13), dy2], [0.085, dy2], [0.31, dy2]]};
      sizes = {"practice": [0.18, 0.18], "trial": [0.2, 0.22]};
      cimgs = [];
      cimg_sizes = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names[which].length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          cimgs.push(make_click_box(names[which][i], xys[which][i]));
          cimg_sizes.push(sizes[which]);
      }
      return [imgs, img_sizes, cimgs, cimg_sizes];
  }
  function get_symmetry() {
      var dx, dy, names, xy, y0;
      y0 = (- 0.1);
      [imgs, img_sizes] = make_card("beps-card-05", [0, y0]);
      names = ["burger", "tree", "sun", "cloud"];
      [dx, dy] = [0.285, 0.165];
      xy = [[(- dx), (y0 + dy)], [dx, (y0 + dy)], [(- dx), (y0 - dy)], [dx, (y0 - dy)]];
      cimgs = [];
      cimg_sizes = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          cimgs.push(make_click_box(names[i], xy[i]));
          cimg_sizes.push([0.295, 0.305]);
      }
      return [imgs, img_sizes, cimgs, cimg_sizes];
  }
  function get_shapes() {
      var names, xy;
      [imgs, img_sizes] = make_card("beps-card-06");
      names = ["rectangle", "circle", "triangle", "square"];
      xy = [[(- 0.215), 0.165], [0.29, 0.18], [(- 0.185), (- 0.15)], [0.29, (- 0.17)]];
      cimg_sizes = [[0.45, 0.19], [0.28, 0.28], [0.27, 0.24], [0.25, 0.25]];
      cimgs = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          cimgs.push(make_click_box(names[i], xy[i]));
      }
      return [imgs, img_sizes, cimgs, cimg_sizes];
  }
  function get_cookies() {
      var names, xy;
      [imgs, img_sizes] = make_card("beps-card-07");
      names = ["cookie1", "cookie2", "cookie3", "cookie4"];
      xy = [[(- 0.365), (- 0.01)], [(- 0.105), (- 0.015)], [0.19, (- 0.01)], [0.415, (- 0.01)]];
      cimg_sizes = [[0.2, 0.2], [0.24, 0.24], [0.275, 0.275], [0.135, 0.135]];
      cimgs = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          cimgs.push(make_click_box(names[i], xy[i]));
      }
      return [imgs, img_sizes, cimgs, cimg_sizes];
  }
  function get_flowers() {
      var names, xy;
      [imgs, img_sizes] = make_card("pams-card-01", [0, (- 0.05)]);
      names = ["flowers3", "flowers5", "flowers4", "flowers1"];
      xy = [[(- 0.235), 0.02], [(- 0.225), (- 0.265)], [0.24, 0.015], [0.24, (- 0.25)]];
      cimg_sizes = [[0.42, 0.14], [0.24, 0.24], [0.4, 0.25], [0.135, 0.135]];
      cimgs = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          cimgs.push(make_click_box(names[i], xy[i]));
      }
      return [imgs, img_sizes, cimgs, cimg_sizes];
  }
  function get_9_6() {
      var dx, dy, names, xy;
      [imgs, img_sizes] = make_card("pams-card-05");
      names = ["nine", "six"];
      [dx, dy] = [0.3, 0.01];
      xy = [[(- dx), dy], [dx, dy]];
      cimgs = [];
      cimg_sizes = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          cimgs.push(make_click_box(names[i], xy[i]));
          cimg_sizes.push([0.3, 0.32]);
      }
      return [imgs, img_sizes, cimgs, cimg_sizes];
  }
  function get_8_12() {
      var names, xy;
      [imgs, img_sizes] = make_card("pams-card-06");
      names = ["eight", "twelve"];
      xy = [[(- 0.33), 0.01], [0.29, 0.01]];
      cimgs = [];
      cimg_sizes = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          cimgs.push(make_click_box(names[i], xy[i]));
          cimg_sizes.push([0.3, 0.32]);
      }
      return [imgs, img_sizes, cimgs, cimg_sizes];
  }
  function get_5_8() {
      var names, xy;
      [imgs, img_sizes] = make_card("pams-card-07");
      names = ["five", "eight"];
      xy = [[(- 0.31), 0.01], [0.3, 0.01]];
      cimgs = [];
      cimg_sizes = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          cimgs.push(make_click_box(names[i], xy[i]));
          cimg_sizes.push([0.3, 0.32]);
      }
      return [imgs, img_sizes, cimgs, cimg_sizes];
  }
  function get_21_17() {
      var names, xy;
      [imgs, img_sizes] = make_card("pams-card-08");
      names = ["twenty_one", "seventeen"];
      xy = [[(- 0.285), 0.01], [0.3, 0.01]];
      cimgs = [];
      cimg_sizes = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          cimgs.push(make_click_box(names[i], xy[i]));
          cimg_sizes.push([0.3, 0.32]);
      }
      return [imgs, img_sizes, cimgs, cimg_sizes];
  }
  function get_popcorns() {
      var names, xy;
      [imgs, img_sizes] = make_card("pams-card-09");
      names = ["popcorns_left", "popcorns_right"];
      xy = [[(- 0.25), 0], [0.25, 0]];
      cimgs = [];
      cimg_sizes = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          cimgs.push(make_click_box(names[i], xy[i]));
          cimg_sizes.push([0.46, 0.47]);
      }
      return [imgs, img_sizes, cimgs, cimg_sizes];
  }
  function get_trees() {
      var names, xy;
      [imgs, img_sizes] = make_card("class-card-01");
      names = ["tree1", "tree2", "tree3", "tree4"];
      xy = [[(- 0.325), (- 0.045)], [(- 0.085), (- 0.165)], [0.125, (- 0.115)], [0.355, (- 0.14)]];
      cimg_sizes = [[0.28, 0.44], [0.14, 0.2], [0.19, 0.3], [0.17, 0.25]];
      cimgs = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          cimgs.push(make_click_box(names[i], xy[i]));
      }
      return [imgs, img_sizes, cimgs, cimg_sizes];
  }
  function get_vehicles() {
      var names, xy;
      [imgs, img_sizes] = make_card("class-card-02");
      names = ["car", "bus", "ball", "bicycle"];
      xy = [[(- 0.275), 0.1], [0.2, 0.1], [(- 0.27), (- 0.18)], [0.2, (- 0.18)]];
      cimg_sizes = [[0.33, 0.22], [0.43, 0.22], [0.21, 0.21], [0.32, 0.22]];
      cimgs = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          cimgs.push(make_click_box(names[i], xy[i]));
      }
      return [imgs, img_sizes, cimgs, cimg_sizes];
  }
  function get_hot() {
      var names, xy;
      [imgs, img_sizes] = make_card("class-card-03");
      names = ["ice_cream", "fire", "sun", "iron"];
      xy = [[(- 0.205), 0.0925], [0.205, 0.0925], [(- 0.2075), (- 0.19)], [0.205, (- 0.19)]];
      cimg_sizes = [[0.16, 0.25], [0.23, 0.25], [0.24, 0.24], [0.32, 0.17]];
      cimgs = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          cimgs.push(make_click_box(names[i], xy[i]));
      }
      return [imgs, img_sizes, cimgs, cimg_sizes];
  }
  function get_weather() {
      var names, xy;
      [imgs, img_sizes] = make_card("class-card-06");
      names = ["sunny", "cloudy", "rainy"];
      xy = [[(- 0.31), (- 0.065)], [0, (- 0.085)], [0.335, (- 0.085)]];
      cimg_sizes = [[0.26, 0.26], [0.32, 0.26], [0.26, 0.26]];
      cimgs = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          cimgs.push(make_click_box(names[i], xy[i]));
      }
      return [imgs, img_sizes, cimgs, cimg_sizes];
  }
  function get_tools() {
      var names, xy;
      [imgs, img_sizes] = make_card("class-card-07");
      names = ["scissors", "nail", "tweezers"];
      xy = [[(- 0.325), (- 0.04)], [0, (- 0.045)], [0.325, (- 0.045)]];
      cimg_sizes = [[0.26, 0.26], [0.2, 0.31], [0.29, 0.16]];
      cimgs = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          cimgs.push(make_click_box(names[i], xy[i]));
      }
      return [imgs, img_sizes, cimgs, cimg_sizes];
  }
  function get_carrots() {
      var names, xy;
      [imgs, img_sizes] = make_card("class-card-08");
      names = ["starry_carrots", "sally_carrots", "both_carrots"];
      xy = [[(- 0.34), (- 0.03)], [(- 0.03), (- 0.03)], [0.3, (- 0.03)]];
      cimg_sizes = [[0.23, 0.3], [0.19, 0.3], [0.31, 0.3]];
      cimgs = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          cimgs.push(make_click_box(names[i], xy[i]));
      }
      return [imgs, img_sizes, cimgs, cimg_sizes];
  }
  function get_badminton() {
      var names, xy;
      [imgs, img_sizes] = make_card("class-card-09");
      names = ["jack_play", "jack_playing", "jack_played"];
      xy = [[0, (- 0.2)], [0, (- 0.25)], [0, (- 0.3)]];
      cimg_sizes = [[0.66, 0.048], [0.72, 0.048], [0.69, 0.048]];
      cimgs = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          cimgs.push(make_click_box(names[i], xy[i]));
      }
      return [imgs, img_sizes, cimgs, cimg_sizes];
  }
  function get_swimmer() {
      var names, xy;
      [imgs, img_sizes] = make_card("class-card-12");
      names = ["boys_are", "boy_is"];
      xy = [[(- 0.31), (- 0.27)], [0.31, (- 0.27)]];
      cimg_sizes = [[0.33, 0.06], [0.3, 0.06]];
      cimgs = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          cimgs.push(make_click_box(names[i], xy[i]));
      }
      return [imgs, img_sizes, cimgs, cimg_sizes];
  }
  function get_shirt() {
      var names, xy;
      [imgs, img_sizes] = make_card("class-card-13");
      names = ["smelly", "smell"];
      xy = [[(- 0.305), (- 0.265)], [0.28, (- 0.265)]];
      cimg_sizes = [[0.32, 0.06], [0.3, 0.06]];
      cimgs = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          cimgs.push(make_click_box(names[i], xy[i]));
      }
      return [imgs, img_sizes, cimgs, cimg_sizes];
  }
  function get_look() {
      var names, xy;
      [imgs, img_sizes] = make_card("class-card-14");
      names = ["book", "cup", "leaf"];
      xy = [[(- 0.075), (- 0.02)], [0.17, (- 0.02)], [0.385, (- 0.02)]];
      cimg_sizes = [[0.21, 0.2], [0.16, 0.2], [0.16, 0.2]];
      cimgs = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          cimgs.push(make_click_box(names[i], xy[i]));
      }
      return [imgs, img_sizes, cimgs, cimg_sizes];
  }
  function get_mice() {
      var names, xy;
      [imgs, img_sizes] = make_card("class-card-15");
      names = ["rice", "map", "dice"];
      xy = [[(- 0.1), (- 0.05)], [0.14, (- 0.06)], [0.38, (- 0.07)]];
      cimg_sizes = [[0.19, 0.19], [0.22, 0.19], [0.17, 0.19]];
      cimgs = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          cimgs.push(make_click_box(names[i], xy[i]));
      }
      return [imgs, img_sizes, cimgs, cimg_sizes];
  }
  function get_cat() {
      var names, xy;
      [imgs, img_sizes] = make_card("class-card-16");
      names = ["mat", "house", "car"];
      xy = [[(- 0.07), (- 0.09)], [0.155, (- 0.05)], [0.37, (- 0.1)]];
      cimg_sizes = [[0.22, 0.16], [0.16, 0.22], [0.18, 0.12]];
      cimgs = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          cimgs.push(make_click_box(names[i], xy[i]));
      }
      return [imgs, img_sizes, cimgs, cimg_sizes];
  }
  function get_animals() {
      var names, xy;
      [imgs, img_sizes] = make_card("class-card-22");
      names = ["monkey", "goose"];
      xy = [[(- 0.23), (- 0.055)], [0.22, (- 0.05)]];
      cimg_sizes = [[0.25, 0.3], [0.33, 0.3]];
      cimgs = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          cimgs.push(make_click_box(names[i], xy[i]));
      }
      return [imgs, img_sizes, cimgs, cimg_sizes];
  }
  function get_words() {
      var names, xy;
      [imgs, img_sizes] = make_card("class-card-25");
      names = ["reheart", "rethink", "reball", "resmall"];
      xy = [[0.14, 0.115], [0.14, 0], [0.14, (- 0.13)], [0.14, (- 0.245)]];
      cimg_sizes = [[0.3, 0.09], [0.3, 0.09], [0.3, 0.09], [0.3, 0.09]];
      cimgs = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          cimgs.push(make_click_box(names[i], xy[i]));
      }
      return [imgs, img_sizes, cimgs, cimg_sizes];
  }
  cards = {"pre_umbrellas": [[], [], [], []], "umbrellas": get_umbrellas(), "draw_square": get_draw_shapes("draw_square"), "draw_triangle": get_draw_shapes("draw_triangle"), "writing": [[], [], [], []], "patterns_1": get_patterns("practice"), "patterns_2": get_patterns("trial"), "symmetry": get_symmetry(), "shapes": get_shapes(), "sizes": get_cookies(), "count_choose": get_flowers(), "count_compare": get_verbal("pams-card-02", [0, (- 0.03)]), "count_exhaustive": get_verbal("pams-card-03"), "count_interference": get_verbal("pams-card-04"), "numeric_compare_1": get_9_6(), "numeric_compare_2": get_8_12(), "numeric_compare_3": get_5_8(), "numeric_compare_4": get_21_17(), "estimate_compare": get_popcorns(), "sequences_1": get_verbal("pams-card-10"), "sequences_2": get_verbal("pams-card-11"), "ratios": get_verbal("pams-card-12"), "bar_chart": get_verbal("pams-card-13", [0, (- 0.05)]), "add_concrete": get_verbal("pams-card-14"), "add_abstract": get_verbal("pams-card-15"), "subtract_concrete": get_verbal("pams-card-16"), "subtract_abstract": get_verbal("pams-card-17"), "class_1": get_trees(), "class_2": get_vehicles(), "class_3": get_hot(), "class_4": get_verbal("class-card-04"), "class_5": get_verbal("class-card-05"), "class_6": get_weather(), "class_7": get_tools(), "class_8": get_carrots(), "class_9": get_badminton(), "class_10": get_verbal("class-card-10"), "class_11": get_verbal("class-card-11"), "class_12": get_swimmer(), "class_13": get_shirt(), "class_14": get_look(), "class_15": get_mice(), "class_16": get_cat(), "class_17": get_verbal("class-card-17"), "class_18": get_verbal("class-card-18"), "class_19": get_verbal("class-card-19"), "class_20": get_verbal("class-card-20"), "class_21": get_verbal("class-card-21"), "class_22": get_animals(), "class_23": get_verbal("class-card-23"), "class_24": get_verbal("class-card-24"), "class_25": get_words(), "class_26": get_verbal("class-card-26")};
  red_box = new visual.ImageStim({"win": psychoJS.window, "name": "red_box", "image": "imgs/transparent-box.png", "pos": [0, 0], "size": [0, 0]});
  red_box.autoDraw = true;
  
  // Initialize components for Routine "gate"
  gateClock = new util.Clock();
  // Initialize components for Routine "trialChoice"
  trialChoiceClock = new util.Clock();
  skip_next = false;
  
  trialChoiceText = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialChoiceText',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  trialChoiceMouse = new core.Mouse({
    win: psychoJS.window,
  });
  trialChoiceMouse.mouseClock = new util.Clock();
  trialChoiceDebug = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialChoiceDebug',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "trialDrawing"
  trialDrawingClock = new util.Clock();
  trialDrawingText = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialDrawingText',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  trialDrawingCont = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trialDrawingCont', units : undefined, 
    image : 'imgs/continue.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.4)], size : [0.228, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  trialDrawingMouse = new core.Mouse({
    win: psychoJS.window,
  });
  trialDrawingMouse.mouseClock = new util.Clock();
  trialDrawingDebug = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialDrawingDebug',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  trialDrawingBrush = {};
  gettrialDrawingBrush = function() {
    return ( new visual.ShapeStim({
      win: psychoJS.window,
      vertices: [[0, 0]],
      lineWidth: 3.0,
      lineColor: new util.Color('black'),
      opacity: null,
      closeShape: false,
      autoLog: false
      }))
  }
  
  trialDrawingBrushReset = trialDrawingBrush.reset = function() {
    if (trialDrawingBrushShapes.length > 0) {
      for (let shape of trialDrawingBrushShapes) {
        shape.setAutoDraw(false);
      }
    }
    trialDrawingBrushAtStartPoint = false;
    trialDrawingBrushShapes = [];
    trialDrawingBrushCurrentShape = -1;
  }
  
  trialDrawingBrushCurrentShape = -1;
  trialDrawingBrushBrushPos = [];
  trialDrawingBrushPointer = new core.Mouse({win: psychoJS.window});
  trialDrawingBrushAtStartPoint = false;
  trialDrawingBrushShapes = [];
  // Initialize components for Routine "trialVerbal"
  trialVerbalClock = new util.Clock();
  trialVerbalText = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialVerbalText',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  trialVerbalCont = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trialVerbalCont', units : undefined, 
    image : 'imgs/continue.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.4)], size : [0.228, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  trialVerbalMouse = new core.Mouse({
    win: psychoJS.window,
  });
  trialVerbalMouse.mouseClock = new util.Clock();
  trialVerbalDebug = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialVerbalDebug',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "wipe"
  wipeClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var beginComponents;
function beginRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'begin'-------
    t = 0;
    beginClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    beginComponents = [];
    
    beginComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function beginRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'begin'-------
    // get current time
    t = beginClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    beginComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function beginRoutineEnd() {
  return async function () {
    //------Ending Routine 'begin'-------
    beginComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "begin" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'sequences/conditions.csv',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      const snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(gateRoutineBegin(snapshot));
      trialsLoopScheduler.add(gateRoutineEachFrame());
      trialsLoopScheduler.add(gateRoutineEnd());
      const choiceLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(choiceLoopBegin(choiceLoopScheduler, snapshot));
      trialsLoopScheduler.add(choiceLoopScheduler);
      trialsLoopScheduler.add(choiceLoopEnd);
      const drawingLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(drawingLoopBegin(drawingLoopScheduler, snapshot));
      trialsLoopScheduler.add(drawingLoopScheduler);
      trialsLoopScheduler.add(drawingLoopEnd);
      const verbalLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(verbalLoopBegin(verbalLoopScheduler, snapshot));
      trialsLoopScheduler.add(verbalLoopScheduler);
      trialsLoopScheduler.add(verbalLoopEnd);
      trialsLoopScheduler.add(wipeRoutineBegin(snapshot));
      trialsLoopScheduler.add(wipeRoutineEachFrame());
      trialsLoopScheduler.add(wipeRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var choice;
function choiceLoopBegin(choiceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    choice = new TrialHandler({
      psychoJS: psychoJS,
      nReps: doChoice, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'choice'
    });
    psychoJS.experiment.addLoop(choice); // add the loop to the experiment
    currentLoop = choice;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    choice.forEach(function() {
      const snapshot = choice.getSnapshot();
    
      choiceLoopScheduler.add(importConditions(snapshot));
      choiceLoopScheduler.add(trialChoiceRoutineBegin(snapshot));
      choiceLoopScheduler.add(trialChoiceRoutineEachFrame());
      choiceLoopScheduler.add(trialChoiceRoutineEnd());
      choiceLoopScheduler.add(endLoopIteration(choiceLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function choiceLoopEnd() {
  psychoJS.experiment.removeLoop(choice);

  return Scheduler.Event.NEXT;
}


var drawing;
function drawingLoopBegin(drawingLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    drawing = new TrialHandler({
      psychoJS: psychoJS,
      nReps: doDrawing, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'drawing'
    });
    psychoJS.experiment.addLoop(drawing); // add the loop to the experiment
    currentLoop = drawing;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    drawing.forEach(function() {
      const snapshot = drawing.getSnapshot();
    
      drawingLoopScheduler.add(importConditions(snapshot));
      drawingLoopScheduler.add(trialDrawingRoutineBegin(snapshot));
      drawingLoopScheduler.add(trialDrawingRoutineEachFrame());
      drawingLoopScheduler.add(trialDrawingRoutineEnd());
      drawingLoopScheduler.add(endLoopIteration(drawingLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function drawingLoopEnd() {
  psychoJS.experiment.removeLoop(drawing);

  return Scheduler.Event.NEXT;
}


var verbal;
function verbalLoopBegin(verbalLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    verbal = new TrialHandler({
      psychoJS: psychoJS,
      nReps: doVerbal, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'verbal'
    });
    psychoJS.experiment.addLoop(verbal); // add the loop to the experiment
    currentLoop = verbal;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    verbal.forEach(function() {
      const snapshot = verbal.getSnapshot();
    
      verbalLoopScheduler.add(importConditions(snapshot));
      verbalLoopScheduler.add(trialVerbalRoutineBegin(snapshot));
      verbalLoopScheduler.add(trialVerbalRoutineEachFrame());
      verbalLoopScheduler.add(trialVerbalRoutineEnd());
      verbalLoopScheduler.add(endLoopIteration(verbalLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function verbalLoopEnd() {
  psychoJS.experiment.removeLoop(verbal);

  return Scheduler.Event.NEXT;
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var doChoice;
var doDrawing;
var doVerbal;
var gateComponents;
function gateRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'gate'-------
    t = 0;
    gateClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    doChoice = ((qnType === "choice") ? 1 : 0);
    doDrawing = ((qnType === "drawing") ? 1 : 0);
    doVerbal = ((qnType === "verbal") ? 1 : 0);
    [imgs, img_sizes, cimgs, cimg_sizes] = cards[qnGroup];
    for (var i, _pj_c = 0, _pj_a = util.range(imgs.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        imgs[i].size = img_sizes[i];
        imgs[i].autoDraw = true;
    }
    
    // keep track of which components have finished
    gateComponents = [];
    
    gateComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function gateRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'gate'-------
    // get current time
    t = gateClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    gateComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function gateRoutineEnd() {
  return async function () {
    //------Ending Routine 'gate'-------
    gateComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "gate" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var cimg_names;
var gotValidClick;
var trialChoiceComponents;
function trialChoiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trialChoice'-------
    t = 0;
    trialChoiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (skip_next) {
        skip_next = false;
        continueRoutine = false;
    }
    for (var i, _pj_c = 0, _pj_a = util.range(cimgs.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        cimgs[i].size = cimg_sizes[i];
        cimgs[i].autoDraw = true;
    }
    while ((cimgs.length < 6)) {
        cimgs.push(BLANK_IMG);
        cimg_sizes.push([0, 0]);
    }
    if (SHOW_DEBUG) {
        cimg_names = [];
        for (var cimg, _pj_c = 0, _pj_a = cimgs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            cimg = _pj_a[_pj_c];
            cimg_names.push(cimg.name);
        }
        for (var i, _pj_c = 0, _pj_a = util.range(imgs.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            console.log(`imgs[${i}] = ${imgs[i]}`);
            console.log(`img_sizes[${i}] = ${img_sizes[i]}`);
        }
        for (var i, _pj_c = 0, _pj_a = util.range(cimgs.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            console.log(`cimgs[${i}] = ${cimgs[i]}`);
            console.log(`cimg_sizes[${i}] = ${cimg_sizes[i]}`);
        }
    }
    
    trialChoiceText.setText(prompt);
    // setup some python lists for storing info about the trialChoiceMouse
    trialChoiceMouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    trialChoiceComponents = [];
    trialChoiceComponents.push(trialChoiceText);
    trialChoiceComponents.push(trialChoiceMouse);
    trialChoiceComponents.push(trialChoiceDebug);
    
    trialChoiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function trialChoiceRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trialChoice'-------
    // get current time
    t = trialChoiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((! prompt)) {
        trialChoiceText.text = "";
    }
    if (SHOW_DEBUG) {
        trialChoiceDebug.text = `taskName = ${taskName}
    qnGroup = ${qnGroup}
    qnNum = ${qnNum}
    qnType = ${qnType}
    redBox = ${redBox}
    corrAns = ${corrAns}
    cimg_names = ${cimg_names}
    t = ${round(t, 3)}`
    ;
    }
    
    
    // *trialChoiceText* updates
    if (t >= 0.0 && trialChoiceText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialChoiceText.tStart = t;  // (not accounting for frame time here)
      trialChoiceText.frameNStart = frameN;  // exact frame index
      
      trialChoiceText.setAutoDraw(true);
    }

    // *trialChoiceMouse* updates
    if (t >= 0.0 && trialChoiceMouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialChoiceMouse.tStart = t;  // (not accounting for frame time here)
      trialChoiceMouse.frameNStart = frameN;  // exact frame index
      
      trialChoiceMouse.status = PsychoJS.Status.STARTED;
      trialChoiceMouse.mouseClock.reset();
      prevButtonState = trialChoiceMouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (trialChoiceMouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = trialChoiceMouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [cimgs[0], cimgs[1], cimgs[2], cimgs[3], cimgs[4], cimgs[5]]) {
            if (obj.contains(trialChoiceMouse)) {
              gotValidClick = true;
              trialChoiceMouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *trialChoiceDebug* updates
    if (t >= 0.0 && trialChoiceDebug.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialChoiceDebug.tStart = t;  // (not accounting for frame time here)
      trialChoiceDebug.frameNStart = frameN;  // exact frame index
      
      trialChoiceDebug.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialChoiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
function trialChoiceRoutineEnd() {
  return async function () {
    //------Ending Routine 'trialChoice'-------
    trialChoiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if ((qnNum === "13a1")) {
        skip_next = (trialChoiceMouse.clicked_name.toString() === corrAns.toString());
        if (SHOW_DEBUG) {
            console.log(`trialChoiceMouse.clicked_name = ${trialChoiceMouse.clicked_name}`);
            console.log(`corrAns = ${corrAns}`);
            console.log(`skip_next = ${skip_next}`);
        }
    }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = trialChoiceMouse.getPos();
    _mouseButtons = trialChoiceMouse.getPressed();
    psychoJS.experiment.addData('trialChoiceMouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('trialChoiceMouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('trialChoiceMouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('trialChoiceMouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('trialChoiceMouse.rightButton', _mouseButtons[2]);
    if (trialChoiceMouse.clicked_name.length > 0) {
      psychoJS.experiment.addData('trialChoiceMouse.clicked_name', trialChoiceMouse.clicked_name[0]);}
    // the Routine "trialChoice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trialDrawingComponents;
function trialDrawingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trialDrawing'-------
    t = 0;
    trialDrawingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    trialDrawingText.setText(prompt);
    // setup some python lists for storing info about the trialDrawingMouse
    trialDrawingMouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    trialDrawingBrushReset();
    // keep track of which components have finished
    trialDrawingComponents = [];
    trialDrawingComponents.push(trialDrawingText);
    trialDrawingComponents.push(trialDrawingCont);
    trialDrawingComponents.push(trialDrawingMouse);
    trialDrawingComponents.push(trialDrawingDebug);
    trialDrawingComponents.push(trialDrawingBrush);
    
    trialDrawingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialDrawingRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trialDrawing'-------
    // get current time
    t = trialDrawingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (SHOW_DEBUG) {
        trialDrawingDebug.text = `taskName = ${taskName}
    qnGroup = ${qnGroup}
    qnNum = ${qnNum}
    qnType = ${qnType}
    redBox = ${redBox}
    corrAns = ${corrAns}
    t = ${round(t, 3)}`
    ;
    }
    
    
    // *trialDrawingText* updates
    if (t >= 0.0 && trialDrawingText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialDrawingText.tStart = t;  // (not accounting for frame time here)
      trialDrawingText.frameNStart = frameN;  // exact frame index
      
      trialDrawingText.setAutoDraw(true);
    }

    
    // *trialDrawingCont* updates
    if (t >= 0.0 && trialDrawingCont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialDrawingCont.tStart = t;  // (not accounting for frame time here)
      trialDrawingCont.frameNStart = frameN;  // exact frame index
      
      trialDrawingCont.setAutoDraw(true);
    }

    // *trialDrawingMouse* updates
    if (t >= 0.0 && trialDrawingMouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialDrawingMouse.tStart = t;  // (not accounting for frame time here)
      trialDrawingMouse.frameNStart = frameN;  // exact frame index
      
      trialDrawingMouse.status = PsychoJS.Status.STARTED;
      trialDrawingMouse.mouseClock.reset();
      prevButtonState = trialDrawingMouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (trialDrawingMouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = trialDrawingMouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [trialDrawingCont]) {
            if (obj.contains(trialDrawingMouse)) {
              gotValidClick = true;
              trialDrawingMouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *trialDrawingDebug* updates
    if (t >= 0.0 && trialDrawingDebug.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialDrawingDebug.tStart = t;  // (not accounting for frame time here)
      trialDrawingDebug.frameNStart = frameN;  // exact frame index
      
      trialDrawingDebug.setAutoDraw(true);
    }

    if (trialDrawingBrushPointer.getPressed()[0] === 1 && trialDrawingBrushAtStartPoint != true) {
      trialDrawingBrushAtStartPoint = true;
      trialDrawingBrushBrushPos = [];
      trialDrawingBrushShapes.push(gettrialDrawingBrush());
      trialDrawingBrushCurrentShape += 1;
      trialDrawingBrushShapes[trialDrawingBrushCurrentShape].setAutoDraw(true);
    }
    if (trialDrawingBrushPointer.getPressed()[0] === 1) {
      trialDrawingBrushBrushPos.push(trialDrawingBrushPointer.getPos());
      trialDrawingBrushShapes[trialDrawingBrushCurrentShape].setVertices(trialDrawingBrushBrushPos);
    } else {
      trialDrawingBrushAtStartPoint = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialDrawingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialDrawingRoutineEnd() {
  return async function () {
    //------Ending Routine 'trialDrawing'-------
    trialDrawingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    trialDrawingBrush.reset();
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "trialDrawing" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trialVerbalComponents;
function trialVerbalRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trialVerbal'-------
    t = 0;
    trialVerbalClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((redBox !== "NA")) {
        for (var i, _pj_c = 0, _pj_a = util.range(cimgs.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            if ((redBox === cimgs[i].name)) {
                red_box.pos = cimgs[i].pos;
                red_box.size = cimg_sizes[i];
                break;
            }
        }
    }
    
    trialVerbalText.setText(prompt);
    // setup some python lists for storing info about the trialVerbalMouse
    trialVerbalMouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    trialVerbalComponents = [];
    trialVerbalComponents.push(trialVerbalText);
    trialVerbalComponents.push(trialVerbalCont);
    trialVerbalComponents.push(trialVerbalMouse);
    trialVerbalComponents.push(trialVerbalDebug);
    
    trialVerbalComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialVerbalRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trialVerbal'-------
    // get current time
    t = trialVerbalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((! prompt)) {
        trialVerbalText.text = "";
    }
    if (SHOW_DEBUG) {
        trialVerbalDebug.text = `taskName = ${taskName}
    qnGroup = ${qnGroup}
    qnNum = ${qnNum}
    qnType = ${qnType}
    redBox = ${redBox}
    corrAns = ${corrAns}
    t = ${round(t, 3)}`
    ;
    }
    
    
    // *trialVerbalText* updates
    if (t >= 0.0 && trialVerbalText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialVerbalText.tStart = t;  // (not accounting for frame time here)
      trialVerbalText.frameNStart = frameN;  // exact frame index
      
      trialVerbalText.setAutoDraw(true);
    }

    
    // *trialVerbalCont* updates
    if (t >= 0.0 && trialVerbalCont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialVerbalCont.tStart = t;  // (not accounting for frame time here)
      trialVerbalCont.frameNStart = frameN;  // exact frame index
      
      trialVerbalCont.setAutoDraw(true);
    }

    // *trialVerbalMouse* updates
    if (t >= 0.0 && trialVerbalMouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialVerbalMouse.tStart = t;  // (not accounting for frame time here)
      trialVerbalMouse.frameNStart = frameN;  // exact frame index
      
      trialVerbalMouse.status = PsychoJS.Status.STARTED;
      trialVerbalMouse.mouseClock.reset();
      prevButtonState = trialVerbalMouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (trialVerbalMouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = trialVerbalMouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [trialVerbalCont]) {
            if (obj.contains(trialVerbalMouse)) {
              gotValidClick = true;
              trialVerbalMouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *trialVerbalDebug* updates
    if (t >= 0.0 && trialVerbalDebug.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialVerbalDebug.tStart = t;  // (not accounting for frame time here)
      trialVerbalDebug.frameNStart = frameN;  // exact frame index
      
      trialVerbalDebug.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialVerbalComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialVerbalRoutineEnd() {
  return async function () {
    //------Ending Routine 'trialVerbal'-------
    trialVerbalComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "trialVerbal" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var wipeComponents;
function wipeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'wipe'-------
    t = 0;
    wipeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    wipeComponents = [];
    
    wipeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function wipeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'wipe'-------
    // get current time
    t = wipeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    wipeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function wipeRoutineEnd() {
  return async function () {
    //------Ending Routine 'wipe'-------
    wipeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    for (var img, _pj_c = 0, _pj_a = imgs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        img = _pj_a[_pj_c];
        img.size = [0, 0];
        img.autoDraw = false;
    }
    for (var cimg, _pj_c = 0, _pj_a = cimgs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        cimg = _pj_a[_pj_c];
        cimg.size = [0, 0];
        cimg.autoDraw = false;
    }
    imgs = null;
    img_sizes = null;
    cimgs = null;
    cimg_sizes = null;
    red_box.size = [0, 0];
    
    // the Routine "wipe" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
