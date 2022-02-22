/************************ 
 * Beps-Pams-Class Test *
 ************************/

import { core, data, sound, util, visual } from '../lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'BEPS-PAMS-CLASS';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'use_audio [y/n]': 'y', 'debug [y/n]': 'y'};

// Start code blocks for 'Before Experiment'
var _pj;

function _pj_snippets(container) {
    function _assert(comp, msg) {
        function PJAssertionError(message) {
            this.name = "PJAssertionError";
            this.message = (message || "Custom error PJAssertionError");
            if (((typeof Error.captureStackTrace) === "function")) {
                Error.captureStackTrace(this, this.constructor);
            } else {
                this.stack = new Error(message).stack;
            }
        }
        PJAssertionError.prototype = Object.create(Error.prototype);
        PJAssertionError.prototype.constructor = PJAssertionError;
        msg = (msg || "Assertion failed.");
        if ((! comp)) {
            throw new PJAssertionError(msg);
        }
    }
    container["_assert"] = _assert;
    return container;
}
_pj = {};
_pj_snippets(_pj);

function hide(img) {
    /*
    To eliminate any possibility of clicking on
    a non-visible, clickable image, also set the
    size to (0, 0)
    */
    img.size = [0, 0];
    img.autoDraw = false;
}

function unhide(img, size = null) {
    if ((size !== null)) {
        img.size = size;
    }
    img.autoDraw = true;
}

function make_img(name, file_name, pos, size, opacity) {
    return new visual.ImageStim({"win": psychoJS.window, "name": name, "image": file_name, "pos": pos, "size": size, "opacity": opacity});
}

function make_slide(num, pos = [0, 0], size = SLIDE_SIZE) {
    return make_img(`slide-${num}`, `imgs/slides/slide-${num}.png`, pos, size, 1);
}

function make_box(name, pos, size, opacity = CLICK_BOX_OPACITY, suffix = "") {
    return make_img(name, `imgs/transparent-box${suffix}.png`, pos, size, opacity);
}

var sizes;
function size_rep(size, n) {
    var sizes;
    sizes = [];
    for (var _, _pj_c = 0, _pj_a = util.range(n), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        _ = _pj_a[_pj_c];
        sizes.push(size);
    }
    return sizes;
}

var cimgs;
function make_boxes(names, xys, sizes, opacity = CLICK_BOX_OPACITY) {
    var cimgs;
    _pj._assert((names.length === xys.length), null);
    _pj._assert((names.length === sizes.length), null);
    cimgs = [];
    for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        cimgs.push(make_box(names[i], xys[i], sizes[i], opacity));
    }
    return cimgs;
}

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
flowScheduler.add(zeEndRoutineBegin());
flowScheduler.add(zeEndRoutineEachFrame());
flowScheduler.add(zeEndRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'aud/silence.mp3', 'path': 'aud/silence.mp3'},
    {'name': 'aud/mp3/19_PAMS-1-flower.mp3', 'path': 'aud/mp3/19_PAMS-1-flower.mp3'},
    {'name': 'aud/mp3/42_CLASS-7-pluck.mp3', 'path': 'aud/mp3/42_CLASS-7-pluck.mp3'},
    {'name': 'imgs/slides/slide-43.png', 'path': 'imgs/slides/slide-43.png'},
    {'name': 'imgs/slides/slide-56.png', 'path': 'imgs/slides/slide-56.png'},
    {'name': 'aud/mp3/23_PAMS-5-9or6.mp3', 'path': 'aud/mp3/23_PAMS-5-9or6.mp3'},
    {'name': 'aud/mp3/48_CLASS-11c-cup.mp3', 'path': 'aud/mp3/48_CLASS-11c-cup.mp3'},
    {'name': 'imgs/slides/slide-63.png', 'path': 'imgs/slides/slide-63.png'},
    {'name': 'aud/mp3/02_BEPS-1-white.mp3', 'path': 'aud/mp3/02_BEPS-1-white.mp3'},
    {'name': 'aud/mp3/21_PAMS-3-apple1.mp3', 'path': 'aud/mp3/21_PAMS-3-apple1.mp3'},
    {'name': 'imgs/slides/slide-35.png', 'path': 'imgs/slides/slide-35.png'},
    {'name': 'imgs/slides/slide-36.png', 'path': 'imgs/slides/slide-36.png'},
    {'name': 'imgs/slides/slide-02.png', 'path': 'imgs/slides/slide-02.png'},
    {'name': 'imgs/slides/slide-51.png', 'path': 'imgs/slides/slide-51.png'},
    {'name': 'imgs/slides/slide-28.png', 'path': 'imgs/slides/slide-28.png'},
    {'name': 'imgs/slides/slide-30.png', 'path': 'imgs/slides/slide-30.png'},
    {'name': 'imgs/slides/slide-58.png', 'path': 'imgs/slides/slide-58.png'},
    {'name': 'imgs/slides/slide-45.png', 'path': 'imgs/slides/slide-45.png'},
    {'name': 'imgs/transparent-box-1to5.png', 'path': 'imgs/transparent-box-1to5.png'},
    {'name': 'aud/mp3/54_CLASS-15-mice.mp3', 'path': 'aud/mp3/54_CLASS-15-mice.mp3'},
    {'name': 'imgs/slides/slide-01.png', 'path': 'imgs/slides/slide-01.png'},
    {'name': 'imgs/slides/slide-40.png', 'path': 'imgs/slides/slide-40.png'},
    {'name': 'imgs/slides/slide-13.png', 'path': 'imgs/slides/slide-13.png'},
    {'name': 'aud/mp3/35_PAMS-17-minus.mp3', 'path': 'aud/mp3/35_PAMS-17-minus.mp3'},
    {'name': 'imgs/slides/slide-48.png', 'path': 'imgs/slides/slide-48.png'},
    {'name': 'aud/mp3/09_BEPS-8-triangle.mp3', 'path': 'aud/mp3/09_BEPS-8-triangle.mp3'},
    {'name': 'imgs/slides/slide-61.png', 'path': 'imgs/slides/slide-61.png'},
    {'name': 'imgs/slides/slide-38.png', 'path': 'imgs/slides/slide-38.png'},
    {'name': 'aud/mp3/64_CLASS-25-redo.mp3', 'path': 'aud/mp3/64_CLASS-25-redo.mp3'},
    {'name': 'imgs/slides/slide-19.png', 'path': 'imgs/slides/slide-19.png'},
    {'name': 'sequences/conditions.csv', 'path': 'sequences/conditions.csv'},
    {'name': 'imgs/slides/slide-06.png', 'path': 'imgs/slides/slide-06.png'},
    {'name': 'imgs/slides/slide-26.png', 'path': 'imgs/slides/slide-26.png'},
    {'name': 'aud/mp3/31_PAMS-13-horse.mp3', 'path': 'aud/mp3/31_PAMS-13-horse.mp3'},
    {'name': 'imgs/slides/slide-47.png', 'path': 'imgs/slides/slide-47.png'},
    {'name': 'aud/mp3/03_BEPS-2-yellow.mp3', 'path': 'aud/mp3/03_BEPS-2-yellow.mp3'},
    {'name': 'aud/mp3/60_CLASS-21-findS-rep.mp3', 'path': 'aud/mp3/60_CLASS-21-findS-rep.mp3'},
    {'name': 'aud/mp3/27_PAMS-9-popcorn.mp3', 'path': 'aud/mp3/27_PAMS-9-popcorn.mp3'},
    {'name': 'imgs/slides/slide-53.png', 'path': 'imgs/slides/slide-53.png'},
    {'name': 'imgs/slides/slide-25.png', 'path': 'imgs/slides/slide-25.png'},
    {'name': 'imgs/slides/slide-60.png', 'path': 'imgs/slides/slide-60.png'},
    {'name': 'aud/mp3/46_CLASS-11a-cat.mp3', 'path': 'aud/mp3/46_CLASS-11a-cat.mp3'},
    {'name': 'aud/mp3/65_CLASS-26-sand.mp3', 'path': 'aud/mp3/65_CLASS-26-sand.mp3'},
    {'name': 'imgs/slides/slide-31.png', 'path': 'imgs/slides/slide-31.png'},
    {'name': 'aud/mp3/51_CLASS-12-boyswim.mp3', 'path': 'aud/mp3/51_CLASS-12-boyswim.mp3'},
    {'name': 'aud/mp3/15_BEPS-13b-pattern2.mp3', 'path': 'aud/mp3/15_BEPS-13b-pattern2.mp3'},
    {'name': 'aud/mp3/45_CLASS-10-lady.mp3', 'path': 'aud/mp3/45_CLASS-10-lady.mp3'},
    {'name': 'imgs/slides/slide-27.png', 'path': 'imgs/slides/slide-27.png'},
    {'name': 'imgs/slides/slide-32.png', 'path': 'imgs/slides/slide-32.png'},
    {'name': 'imgs/slides/slide-57.png', 'path': 'imgs/slides/slide-57.png'},
    {'name': 'imgs/continue.png', 'path': 'imgs/continue.png'},
    {'name': 'aud/mp3/39_CLASS-4-tortoise.mp3', 'path': 'aud/mp3/39_CLASS-4-tortoise.mp3'},
    {'name': 'imgs/slides/slide-59.png', 'path': 'imgs/slides/slide-59.png'},
    {'name': 'aud/mp3/62_CLASS-23-untie.mp3', 'path': 'aud/mp3/62_CLASS-23-untie.mp3'},
    {'name': 'imgs/slides/slide-55.png', 'path': 'imgs/slides/slide-55.png'},
    {'name': 'aud/mp3/26_PAMS-8-21or17.mp3', 'path': 'aud/mp3/26_PAMS-8-21or17.mp3'},
    {'name': 'imgs/transparent-box.png', 'path': 'imgs/transparent-box.png'},
    {'name': 'aud/mp3/11_BEPS-10-letterB.mp3', 'path': 'aud/mp3/11_BEPS-10-letterB.mp3'},
    {'name': 'aud/mp3/20_PAMS-2-human.mp3', 'path': 'aud/mp3/20_PAMS-2-human.mp3'},
    {'name': 'aud/mp3/13_BEPS-12-name.mp3', 'path': 'aud/mp3/13_BEPS-12-name.mp3'},
    {'name': 'imgs/slides/slide-15.png', 'path': 'imgs/slides/slide-15.png'},
    {'name': 'imgs/slides/slide-42.png', 'path': 'imgs/slides/slide-42.png'},
    {'name': 'imgs/slides/slide-24.png', 'path': 'imgs/slides/slide-24.png'},
    {'name': 'imgs/slides/slide-03.png', 'path': 'imgs/slides/slide-03.png'},
    {'name': 'aud/mp3/41_CLASS-6-beach.mp3', 'path': 'aud/mp3/41_CLASS-6-beach.mp3'},
    {'name': 'aud/mp3/25_PAMS-7-5or8.mp3', 'path': 'aud/mp3/25_PAMS-7-5or8.mp3'},
    {'name': 'aud/mp3/56_CLASS-17-sunshine.mp3', 'path': 'aud/mp3/56_CLASS-17-sunshine.mp3'},
    {'name': 'aud/mp3/58_CLASS-19-pen1.mp3', 'path': 'aud/mp3/58_CLASS-19-pen1.mp3'},
    {'name': 'aud/mp3/08_BEPS-7-square.mp3', 'path': 'aud/mp3/08_BEPS-7-square.mp3'},
    {'name': 'imgs/slides/slide-34.png', 'path': 'imgs/slides/slide-34.png'},
    {'name': 'aud/mp3/57_CLASS-18-box.mp3', 'path': 'aud/mp3/57_CLASS-18-box.mp3'},
    {'name': 'aud/mp3/24_PAMS-6-8or12.mp3', 'path': 'aud/mp3/24_PAMS-6-8or12.mp3'},
    {'name': 'imgs/slides/slide-17.png', 'path': 'imgs/slides/slide-17.png'},
    {'name': 'aud/mp3/37_CLASS-2,3-belong.mp3', 'path': 'aud/mp3/37_CLASS-2,3-belong.mp3'},
    {'name': 'imgs/slides/slide-21.png', 'path': 'imgs/slides/slide-21.png'},
    {'name': 'imgs/slides/slide-18.png', 'path': 'imgs/slides/slide-18.png'},
    {'name': 'imgs/slides/slide-16.png', 'path': 'imgs/slides/slide-16.png'},
    {'name': 'imgs/slides/slide-52.png', 'path': 'imgs/slides/slide-52.png'},
    {'name': 'aud/mp3/29_PAMS-11-pattern2.mp3', 'path': 'aud/mp3/29_PAMS-11-pattern2.mp3'},
    {'name': 'aud/mp3/53_CLASS-14-look.mp3', 'path': 'aud/mp3/53_CLASS-14-look.mp3'},
    {'name': 'aud/mp3/63_CLASS-24-moon.mp3', 'path': 'aud/mp3/63_CLASS-24-moon.mp3'},
    {'name': 'imgs/slides/slide-46.png', 'path': 'imgs/slides/slide-46.png'},
    {'name': 'aud/mp3/52_CLASS-13-shirt.mp3', 'path': 'aud/mp3/52_CLASS-13-shirt.mp3'},
    {'name': 'imgs/slides/slide-08.png', 'path': 'imgs/slides/slide-08.png'},
    {'name': 'imgs/slides/slide-05.png', 'path': 'imgs/slides/slide-05.png'},
    {'name': 'imgs/slides/slide-66.png', 'path': 'imgs/slides/slide-66.png'},
    {'name': 'imgs/slides/slide-29.png', 'path': 'imgs/slides/slide-29.png'},
    {'name': 'aud/mp3/34_PAMS-16-sweets.mp3', 'path': 'aud/mp3/34_PAMS-16-sweets.mp3'},
    {'name': 'imgs/slides/slide-39.png', 'path': 'imgs/slides/slide-39.png'},
    {'name': 'aud/mp3/04_BEPS-3-red.mp3', 'path': 'aud/mp3/04_BEPS-3-red.mp3'},
    {'name': 'imgs/slides/slide-04.png', 'path': 'imgs/slides/slide-04.png'},
    {'name': 'aud/mp3/47_CLASS-11b-bear.mp3', 'path': 'aud/mp3/47_CLASS-11b-bear.mp3'},
    {'name': 'aud/mp3/30_PAMS-12-pencil.mp3', 'path': 'aud/mp3/30_PAMS-12-pencil.mp3'},
    {'name': 'aud/mp3/05_BEPS-4,5,6-color.mp3', 'path': 'aud/mp3/05_BEPS-4,5,6-color.mp3'},
    {'name': 'aud/mp3/17_BEPS-15-rectangle.mp3', 'path': 'aud/mp3/17_BEPS-15-rectangle.mp3'},
    {'name': 'aud/mp3/22_PAMS-4-apple2.mp3', 'path': 'aud/mp3/22_PAMS-4-apple2.mp3'},
    {'name': 'imgs/slides/slide-14.png', 'path': 'imgs/slides/slide-14.png'},
    {'name': 'aud/mp3/44_CLASS-9-badminton.mp3', 'path': 'aud/mp3/44_CLASS-9-badminton.mp3'},
    {'name': 'aud/mp3/60_CLASS-21-findS.mp3', 'path': 'aud/mp3/60_CLASS-21-findS.mp3'},
    {'name': 'imgs/slides/slide-64.png', 'path': 'imgs/slides/slide-64.png'},
    {'name': 'imgs/slides/slide-20.png', 'path': 'imgs/slides/slide-20.png'},
    {'name': 'imgs/slides/slide-37.png', 'path': 'imgs/slides/slide-37.png'},
    {'name': 'imgs/slides/slide-41.png', 'path': 'imgs/slides/slide-41.png'},
    {'name': 'aud/mp3/55_CLASS-16-cat.mp3', 'path': 'aud/mp3/55_CLASS-16-cat.mp3'},
    {'name': 'aud/mp3/14_BEPS-13a-pattern1-rep.mp3', 'path': 'aud/mp3/14_BEPS-13a-pattern1-rep.mp3'},
    {'name': 'aud/mp3/12_BEPS-11-letterC.mp3', 'path': 'aud/mp3/12_BEPS-11-letterC.mp3'},
    {'name': 'imgs/slides/slide-33.png', 'path': 'imgs/slides/slide-33.png'},
    {'name': 'imgs/slides/slide-65.png', 'path': 'imgs/slides/slide-65.png'},
    {'name': 'aud/mp3/28_PAMS-10-pattern1.mp3', 'path': 'aud/mp3/28_PAMS-10-pattern1.mp3'},
    {'name': 'aud/mp3/43_CLASS-8-carrots.mp3', 'path': 'aud/mp3/43_CLASS-8-carrots.mp3'},
    {'name': 'aud/mp3/37_CLASS-2,3-belong-rep.mp3', 'path': 'aud/mp3/37_CLASS-2,3-belong-rep.mp3'},
    {'name': 'aud/mp3/59_CLASS-20-pen2.mp3', 'path': 'aud/mp3/59_CLASS-20-pen2.mp3'},
    {'name': 'aud/mp3/40_CLASS-5-rock.mp3', 'path': 'aud/mp3/40_CLASS-5-rock.mp3'},
    {'name': 'aud/mp3/33_PAMS-15-plus.mp3', 'path': 'aud/mp3/33_PAMS-15-plus.mp3'},
    {'name': 'imgs/slides/slide-09.png', 'path': 'imgs/slides/slide-09.png'},
    {'name': 'aud/mp3/16_BEPS-14-symmetry.mp3', 'path': 'aud/mp3/16_BEPS-14-symmetry.mp3'},
    {'name': 'aud/mp3/18_BEPS-16-cookie.mp3', 'path': 'aud/mp3/18_BEPS-16-cookie.mp3'},
    {'name': 'imgs/slides/slide-54.png', 'path': 'imgs/slides/slide-54.png'},
    {'name': 'aud/mp3/10_BEPS-9-letterA.mp3', 'path': 'aud/mp3/10_BEPS-9-letterA.mp3'},
    {'name': 'aud/mp3/61_CLASS-22-monkey.mp3', 'path': 'aud/mp3/61_CLASS-22-monkey.mp3'},
    {'name': 'aud/mp3/36_CLASS-1-tree.mp3', 'path': 'aud/mp3/36_CLASS-1-tree.mp3'},
    {'name': 'imgs/slides/slide-23.png', 'path': 'imgs/slides/slide-23.png'},
    {'name': 'aud/mp3/32_PAMS-14-cows.mp3', 'path': 'aud/mp3/32_PAMS-14-cows.mp3'},
    {'name': 'aud/mp3/01_intro.mp3', 'path': 'aud/mp3/01_intro.mp3'},
    {'name': 'imgs/slides/slide-07.png', 'path': 'imgs/slides/slide-07.png'},
    {'name': 'aud/mp3/14_BEPS-13a-pattern1.mp3', 'path': 'aud/mp3/14_BEPS-13a-pattern1.mp3'},
    {'name': 'imgs/slides/slide-62.png', 'path': 'imgs/slides/slide-62.png'},
    {'name': 'imgs/slides/slide-22.png', 'path': 'imgs/slides/slide-22.png'},
    {'name': 'imgs/slides/slide-44.png', 'path': 'imgs/slides/slide-44.png'}
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
var SHOW_DEBUG;
var USE_AUDIO;
var CLICK_BOX_OPACITY;
var SLIDE_SIZE;
var CONT_SIZE;
var GLOBAL_CONT;
var BLANK_IMG;
var all_cimgs;
var beginSlide;
var beginCont;
var beginMouse;
var beginSound;
var gateClock;
var trialChoiceClock;
var MAX_OPTIONS;
var ALL_REDBOX_TARGETS;
var ALL_REDBOX_TIMES;
var repeat_prev;
var cimg_names;
var redbox_targets;
var redbox_times;
var redbox_target;
var redbox_time;
var red_box;
var trialChoiceMouse;
var trialChoiceDebug;
var trialDrawingClock;
var MIN_DIST_SQ;
var dist_sq;
var round_dp;
var x;
var y;
var xx;
var yy;
var trialDrawingBrush;
var gettrialDrawingBrush;
var trialDrawingBrushReset;
var trialDrawingBrushCurrentShape;
var trialDrawingBrushBrushPos;
var trialDrawingBrushPointer;
var trialDrawingBrushAtStartPoint;
var trialDrawingBrushShapes;
var trialDrawingMouse;
var trialDrawingDebug;
var trialTextClock;
var textbox_xys;
var textbox_sizes;
var textbox_lhs;
var trialTextTextbox;
var trialTextMouse;
var trialTextDebug;
var wipeClock;
var zeEndClock;
var endSlide;
var endCont;
var endMouse;
var endKeyResp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "begin"
  beginClock = new util.Clock();
  function get_6umbrellas() {
      var dx, dy, names, sizes, x0, xys, y0;
      names = ["orange", "white", "yellow", "black", "blue", "red"];
      x0 = 0.005;
      y0 = (- 0.05);
      dx = 0.325;
      dy = 0.14;
      xys = [[(x0 - dx), (y0 + dy)], [x0, (y0 + dy)], [(x0 + dx), (y0 + dy)], [(x0 - dx), (y0 - dy)], [x0, (y0 - dy)], [(x0 + dx), (y0 - dy)]];
      sizes = size_rep([0.25, 0.25], names.length);
      return make_boxes(names, xys, sizes);
  }
  function get_1umbrella() {
      var dx, names, sizes, xys, y0;
      names = ["orange", "blue", "black"];
      y0 = (- 0.22125);
      dx = 0.375;
      xys = [[(- dx), y0], [0, y0], [dx, y0]];
      sizes = size_rep([0.275, 0.09], names.length);
      return make_boxes(names, xys, sizes);
  }
  function get_pattern1() {
      var dx, names, sizes, x0, xys, y0;
      names = ["star", "bread", "watermelon", "pizza"];
      x0 = 0;
      y0 = (- 0.145);
      dx = 0.12;
      xys = [[((x0 - (3 * dx)) - 0.0135), y0], [((x0 - dx) - 0.00925), y0], [((x0 + dx) - 0.005), y0], [(x0 + (3 * dx)), y0]];
      sizes = size_rep([0.195, 0.19], names.length);
      return make_boxes(names, xys, sizes);
  }
  function get_pattern2() {
      var dx, names, sizes, x0, xys, y0;
      names = ["ice_cream", "basketball", "car", "beachball"];
      x0 = 0;
      y0 = (- 0.145);
      dx = 0.12;
      xys = [[((x0 - (3 * dx)) - 0.0135), y0], [((x0 - dx) - 0.00925), y0], [((x0 + dx) - 0.005), y0], [(x0 + (3 * dx)), y0]];
      sizes = size_rep([0.195, 0.19], names.length);
      return make_boxes(names, xys, sizes);
  }
  function get_symmetry() {
      var dx, dy, names, sizes, x0, xys, y0;
      names = ["burger", "tree", "sun", "cloud"];
      x0 = (- 0.03);
      y0 = (- 0.04);
      dx = 0.21;
      dy = 0.14;
      xys = [[(x0 - dx), (y0 + dy)], [(x0 + dx), (y0 + dy)], [(x0 - dx), (y0 - dy)], [(x0 + dx), (y0 - dy)]];
      sizes = size_rep([0.25, 0.25], names.length);
      return make_boxes(names, xys, sizes);
  }
  function get_shapes() {
      var names, sizes, xys;
      names = ["rectangle", "circle", "triangle", "square"];
      xys = [[(- 0.225), 0.0925], [0.26, 0.0925], [(- 0.21), (- 0.16)], [0.26, (- 0.1625)]];
      sizes = [[0.35, 0.135], [0.21, 0.2], [0.205, 0.17], [0.185, 0.175]];
      return make_boxes(names, xys, sizes);
  }
  function get_cookies() {
      var names, sizes, xys, y0;
      names = ["cookie1", "cookie2", "cookie3", "cookie4"];
      y0 = (- 0.025);
      xys = [[(- 0.385), y0], [(- 0.1125), y0], [0.195, y0], [0.435, y0]];
      sizes = [[0.2, 0.2], [0.24, 0.24], [0.275, 0.275], [0.135, 0.135]];
      return make_boxes(names, xys, sizes);
  }
  
  function get_flowers() {
      var names, sizes, xys;
      names = ["flowers3", "flowers5", "flowers4", "flowers1"];
      xys = [[(- 0.175), (- 0.025)], [0.185, (- 0.025)], [(- 0.17), (- 0.215)], [0.185, (- 0.2025)]];
      sizes = [[0.32, 0.1], [0.3, 0.17], [0.18, 0.17], [0.09, 0.09]];
      return make_boxes(names, xys, sizes);
  }
  function get_yes_no() {
      var dx, names, sizes, xys, y0;
      names = ["yes", "no"];
      y0 = (- 0.2075);
      dx = 0.2325;
      xys = [[(- dx), y0], [dx, y0]];
      sizes = size_rep([0.275, 0.085], names.length);
      return make_boxes(names, xys, sizes);
  }
  function get_9or6() {
      var dx, names, sizes, xys, y0;
      names = ["9", "6"];
      y0 = (- 0.01);
      dx = 0.28;
      xys = [[(- dx), y0], [dx, y0]];
      sizes = size_rep([0.3, 0.32], names.length);
      return make_boxes(names, xys, sizes);
  }
  function get_8or12() {
      var names, sizes, xys, y0;
      names = ["8", "12"];
      y0 = (- 0.03);
      xys = [[(- 0.32), y0], [0.295, y0]];
      sizes = [[0.25, 0.33], [0.38, 0.33]];
      return make_boxes(names, xys, sizes);
  }
  function get_5or8() {
      var names, sizes, xys, y0;
      names = ["5", "8"];
      y0 = (- 0.045);
      xys = [[(- 0.31), y0], [0.33, y0]];
      sizes = size_rep([0.3, 0.36], names.length);
      return make_boxes(names, xys, sizes);
  }
  function get_21or17() {
      var names, sizes, xys, y0;
      names = ["21", "17"];
      y0 = (- 0.01);
      xys = [[(- 0.33), y0], [0.34, y0]];
      sizes = size_rep([0.36, 0.32], names.length);
      return make_boxes(names, xys, sizes);
  }
  function get_popcorns() {
      var names, sizes, xys, y0;
      names = ["popcorns_left", "popcorns_right"];
      y0 = (- 0.07);
      xys = [[(- 0.27), y0], [0.25, y0]];
      sizes = size_rep([0.46, 0.47], names.length);
      return make_boxes(names, xys, sizes);
  }
  function get_apples() {
      var dx, names, sizes, xys, y0;
      names = ["1", "2", "3", "4", "5", "6"];
      y0 = (- 0.2275);
      dx = 0.0675;
      xys = [[((- 5) * dx), y0], [((- 3) * dx), y0], [((- 1) * dx), y0], [dx, y0], [(3 * dx), y0], [(5 * dx), y0]];
      sizes = size_rep([0.115, 0.125], names.length);
      return make_boxes(names, xys, sizes);
  }
  function get_farm() {
      var dx, names, sizes, x0, xys, y0;
      names = ["1", "2", "3", "4"];
      x0 = 0.0125;
      y0 = (- 0.25);
      dx = 0.1;
      xys = [[(x0 - (3 * dx)), y0], [(x0 - (1 * dx)), y0], [(x0 + dx), y0], [(x0 + (3 * dx)), y0]];
      sizes = size_rep([0.115, 0.125], names.length);
      return make_boxes(names, xys, sizes);
  }
  
  function get_trees() {
      var names, sizes, xys;
      names = ["tree1", "tree2", "tree3", "tree4"];
      xys = [[(- 0.305), (- 0.045)], [(- 0.08), (- 0.165)], [0.12, (- 0.115)], [0.34, (- 0.14)]];
      sizes = [[0.26, 0.44], [0.14, 0.2], [0.19, 0.3], [0.17, 0.25]];
      return make_boxes(names, xys, sizes);
  }
  function get_vehicles() {
      var names, sizes, xys;
      names = ["car", "bus", "ball", "bicycle"];
      xys = [[(- 0.245), 0.1], [0.21, 0.1], [(- 0.24), (- 0.18)], [0.21, (- 0.18)]];
      sizes = [[0.33, 0.22], [0.43, 0.22], [0.21, 0.21], [0.32, 0.22]];
      return make_boxes(names, xys, sizes);
  }
  function get_hot() {
      var names, sizes, xys;
      names = ["ice_cream", "fire", "sun", "iron"];
      xys = [[(- 0.195), 0.0925], [0.195, 0.0925], [(- 0.1975), (- 0.18)], [0.205, (- 0.18)]];
      sizes = [[0.16, 0.25], [0.23, 0.25], [0.24, 0.24], [0.32, 0.17]];
      return make_boxes(names, xys, sizes);
  }
  function get_speed() {
      var dx, names, sizes, xys, y0;
      names = ["slow", "happy", "heavy"];
      y0 = (- 0.26);
      dx = 0.3;
      xys = [[(- dx), y0], [0, y0], [dx, y0]];
      sizes = size_rep([0.25, 0.08], names.length);
      return make_boxes(names, xys, sizes);
  }
  function get_weight() {
      var dx, names, sizes, x0, xys, y0;
      names = ["heavy", "dark", "big"];
      x0 = 0.02;
      y0 = (- 0.255);
      dx = 0.3;
      xys = [[(x0 - dx), y0], [x0, y0], [(x0 + dx), y0]];
      sizes = size_rep([0.25, 0.08], names.length);
      return make_boxes(names, xys, sizes);
  }
  function get_weather() {
      var dx, names, sizes, xys;
      names = ["sunny", "cloudy", "rainy"];
      dx = 0.345;
      xys = [[(- dx), (- 0.075)], [0, (- 0.085)], [dx, (- 0.085)]];
      sizes = [[0.26, 0.26], [0.32, 0.26], [0.26, 0.26]];
      return make_boxes(names, xys, sizes);
  }
  function get_tools() {
      var dx, names, sizes, xys;
      names = ["scissors", "nail", "tweezers"];
      dx = 0.315;
      xys = [[(- dx), (- 0.04)], [0, (- 0.045)], [dx, (- 0.045)]];
      sizes = [[0.26, 0.26], [0.2, 0.31], [0.29, 0.16]];
      return make_boxes(names, xys, sizes);
  }
  function get_carrots() {
      var names, sizes, xys, y0;
      names = ["he", "she", "they"];
      y0 = (- 0.06);
      xys = [[(- 0.28), y0], [0.02, y0], [0.34, y0]];
      sizes = [[0.23, 0.3], [0.19, 0.3], [0.31, 0.3]];
      return make_boxes(names, xys, sizes);
  }
  function get_badminton() {
      var names, sizes, xys;
      names = ["play", "playing", "played"];
      xys = [[(- 0.3), (- 0.165)], [0.005, (- 0.255)], [0.3, (- 0.165)]];
      sizes = size_rep([0.29, 0.08], names.length);
      return make_boxes(names, xys, sizes);
  }
  function get_lady() {
      var names, sizes, xys;
      names = ["with", "or", "and"];
      xys = [[(- 0.245), (- 0.2)], [(- 0.005), (- 0.28)], [0.22, (- 0.2)]];
      sizes = size_rep([0.36, 0.06], names.length);
      return make_boxes(names, xys, sizes);
  }
  function get_prepositions() {
      var dy, names, sizes, x0, xys, y0;
      names = ["above", "at", "beside", "under", "on", "below", "underneath"];
      x0 = 0.35;
      y0 = 0.015;
      dy = 0.06;
      xys = [[x0, (y0 + (3 * dy))], [x0, (y0 + (2 * dy))], [x0, (y0 + dy)], [x0, y0], [x0, (y0 - dy)], [x0, (y0 - (2 * dy))], [x0, (y0 - (3 * dy))]];
      sizes = size_rep([0.2, 0.045], names.length);
      return make_boxes(names, xys, sizes);
  }
  function get_room1() {
      var dy, names, sizes, x0, xys, y0;
      names = ["vase", "apple", "duck", "cup"];
      x0 = 0.35;
      y0 = (- 0.005);
      dy = 0.0325;
      xys = [[x0, (y0 + (3 * dy))], [x0, (y0 + dy)], [x0, (y0 - dy)], [x0, (y0 - (3 * dy))]];
      sizes = size_rep([0.2, 0.045], names.length);
      return make_boxes(names, xys, sizes);
  }
  function get_swimmer() {
      var dx, names, sizes, xys, y0;
      names = ["boys_are", "boy_is"];
      y0 = (- 0.255);
      dx = 0.295;
      xys = [[(- dx), y0], [dx, y0]];
      sizes = [[0.33, 0.06], [0.3, 0.06]];
      return make_boxes(names, xys, sizes);
  }
  function get_shirt() {
      var names, sizes, xys, y0;
      names = ["smelly", "smell"];
      y0 = (- 0.255);
      xys = [[(- 0.29), y0], [0.27, y0]];
      sizes = [[0.32, 0.06], [0.3, 0.06]];
      return make_boxes(names, xys, sizes);
  }
  function get_look() {
      var names, sizes, xys;
      names = ["book", "cup", "leaf"];
      xys = [[(- 0.07), (- 0.02)], [0.165, (- 0.02)], [0.37, (- 0.02)]];
      sizes = [[0.21, 0.2], [0.16, 0.2], [0.16, 0.2]];
      return make_boxes(names, xys, sizes);
  }
  function get_mice() {
      var names, sizes, xys;
      names = ["rice", "map", "dice"];
      xys = [[(- 0.095), (- 0.05)], [0.135, (- 0.06)], [0.365, (- 0.07)]];
      sizes = [[0.19, 0.19], [0.22, 0.19], [0.17, 0.19]];
      return make_boxes(names, xys, sizes);
  }
  function get_cat() {
      var names, sizes, xys;
      names = ["mat", "house", "car"];
      xys = [[(- 0.07), (- 0.09)], [0.14, (- 0.05)], [0.355, (- 0.1)]];
      sizes = [[0.22, 0.16], [0.16, 0.22], [0.18, 0.12]];
      return make_boxes(names, xys, sizes);
  }
  function get_sunshine() {
      var dx, names, sizes, x0, xys, y0;
      names = ["sun", "shine", "sunshine"];
      x0 = (- 0.0025);
      y0 = (- 0.2675);
      dx = 0.28;
      xys = [[(x0 - dx), y0], [x0, y0], [(x0 + dx), y0]];
      sizes = size_rep([0.23, 0.07], names.length);
      return make_boxes(names, xys, sizes);
  }
  function get_box() {
      var dx, names, sizes, x0, xys, y0;
      names = ["box", "ox", "bow"];
      x0 = (- 0.0075);
      y0 = (- 0.235);
      dx = 0.3125;
      xys = [[(x0 - dx), y0], [x0, y0], [(x0 + dx), y0]];
      sizes = size_rep([0.2475, 0.08], names.length);
      return make_boxes(names, xys, sizes);
  }
  function get_pen() {
      var names, sizes, xys;
      names = ["A-I", "K-M", "N", "P", "Q-S"];
      xys = [[0.0075, 0.0375], [(- 0.0775), (- 0.15)], [0.26125, (- 0.14875)], [(- 0.2475), (- 0.27125)], [0.09125, (- 0.27125)]];
      sizes = [[0.62, 0.235], [0.445, 0.11], [0.1075, 0.105], [0.1075, 0.105], [0.4475, 0.105]];
      return make_boxes(names, xys, sizes);
  }
  function get_room2() {
      var names, sizes, xys;
      names = ["shoes", "sofa", "star", "sun", "stuffed_toy", "sandwich", "everything_else"];
      xys = [[0.14, (- 0.1925)], [0.0125, (- 0.0325)], [(- 0.105), 0.0825], [0.0025, 0.1175], [(- 0.33), (- 0.18)], [(- 0.0725), (- 0.1175)], [0.01, (- 0.035)]];
      sizes = [[0.08, 0.08], [0.33, 0.105], [0.05, 0.055], [0.015, 0.015], [0.06, 0.14], [0.06, 0.06], [0.9, 0.47]];
      return make_boxes(names, xys, sizes);
  }
  function get_animals() {
      var dx, names, sizes, xys;
      names = ["monkey", "goose"];
      dx = 0.21;
      xys = [[(- dx), (- 0.055)], [dx, (- 0.05)]];
      sizes = [[0.25, 0.3], [0.33, 0.3]];
      return make_boxes(names, xys, sizes);
  }
  function get_un() {
      var dx, names, sizes, x0, xys, y0;
      names = ["undo", "untie", "under"];
      x0 = 0;
      y0 = (- 0.275);
      dx = 0.305;
      xys = [[(x0 - dx), y0], [x0, y0], [(x0 + dx), y0]];
      sizes = size_rep([0.2475, 0.08], names.length);
      return make_boxes(names, xys, sizes);
  }
  function get_moon() {
      var dx, names, sizes, x0, xys, y0;
      names = ["moondown", "moonset", "moonlight"];
      x0 = 0;
      y0 = (- 0.24);
      dx = 0.285;
      xys = [[(x0 - dx), y0], [x0, y0], [(x0 + dx), y0]];
      sizes = size_rep([0.2475, 0.065], names.length);
      return make_boxes(names, xys, sizes);
  }
  function get_words() {
      var names, sizes, x0, xys;
      names = ["reheart", "rethink", "resmall"];
      x0 = 0.12;
      xys = [[x0, 0.1], [x0, (- 0.04)], [x0, (- 0.17)]];
      sizes = size_rep([0.29, 0.09], names.length);
      return make_boxes(names, xys, sizes);
  }
  function get_sand() {
      var dx, names, sizes, x0, xys, y0;
      names = ["sandy", "sandless", "sandful"];
      x0 = 0.02;
      y0 = (- 0.25);
      dx = 0.2875;
      xys = [[(x0 - dx), y0], [x0, y0], [(x0 + dx), y0]];
      sizes = size_rep([0.2475, 0.08], names.length);
      return make_boxes(names, xys, sizes);
  }
  
  // expInfo["debug [y/n]"] = "n";
  // expInfo["use_audio [y/n]"] = "y";
  SHOW_DEBUG = ((expInfo["debug [y/n]"][0] === "y") || (expInfo["debug [y/n]"][0] === "Y"));
  USE_AUDIO = ((expInfo["use_audio [y/n]"][0] === "y") || (expInfo["use_audio [y/n]"][0] === "Y"));
  CLICK_BOX_OPACITY = (SHOW_DEBUG ? 0.25 : 0);
  SLIDE_SIZE = [1.2, 0.675];
  CONT_SIZE = [0.228, 0.1];
  GLOBAL_CONT = new visual.ImageStim({"win": psychoJS.window, "name": "global_cont", "image": "imgs/continue.png", "pos": [0, (- 0.4)], "size": [0, 0]});
  BLANK_IMG = make_box("_", [0, 0], 0);
  all_cimgs = {"02": get_6umbrellas, "03": get_6umbrellas, "04": get_6umbrellas, "05": get_1umbrella, "06": get_1umbrella, "07": get_1umbrella, "14": get_pattern1, "15": get_pattern2, "16": get_symmetry, "17": get_shapes, "18": get_cookies, "19": get_flowers, "20": get_yes_no, "23": get_9or6, "24": get_8or12, "25": get_5or8, "26": get_21or17, "27": get_popcorns, "30": get_apples, "31": get_farm, "36": get_trees, "37": get_vehicles, "38": get_hot, "39": get_speed, "40": get_weight, "41": get_weather, "42": get_tools, "43": get_carrots, "44": get_badminton, "45": get_lady, "46": get_prepositions, "47": get_prepositions, "48": get_room1, "51": get_swimmer, "52": get_shirt, "53": get_look, "54": get_mice, "55": get_cat, "56": get_sunshine, "57": get_box, "58": get_pen, "59": get_pen, "60": get_room2, "61": get_animals, "62": get_un, "63": get_moon, "64": get_words, "65": get_sand};
  
  beginSlide = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beginSlide', units : undefined, 
    image : 'imgs/slides/slide-01.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.2, 0.675],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  beginCont = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beginCont', units : undefined, 
    image : 'imgs/transparent-box.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.185)], size : [0.34, 0.085],
    color : new util.Color([1, 1, 1]), opacity : CLICK_BOX_OPACITY,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  beginMouse = new core.Mouse({
    win: psychoJS.window,
  });
  beginMouse.mouseClock = new util.Clock();
  beginSound = new sound.Sound({
    win: psychoJS.window,
    value: 'aud/mp3/01_intro.mp3',
    secs: (- 1),
    });
  beginSound.setVolume(1.0);
  // Initialize components for Routine "gate"
  gateClock = new util.Clock();
  // Initialize components for Routine "trialChoice"
  trialChoiceClock = new util.Clock();
  MAX_OPTIONS = 7;
  ALL_REDBOX_TARGETS = {"39": ["heavy", "happy", "slow"], "40": ["big", "dark", "heavy"], "44": ["played", "playing", "play"], "45": ["or", "and", "with"], "46": ["underneath", "below", "on", "under", "beside", "at", "above"], "48": ["cup", "duck", "apple", "vase"], "51": ["boy_is", "boys_are"], "52": ["smell", "smelly"], "53": ["leaf", "cup", "book"], "54": ["dice", "map", "rice"], "55": ["car", "house", "mat"], "56": ["sunshine", "shine", "sun"], "57": ["bow", "ox", "box"], "61": ["goose", "monkey"], "62": ["under", "untie", "undo"], "63": ["moonset", "moonlight", "moondown"], "64": ["resmall", "rethink", "reheart"], "65": ["sandless", "sandful", "sandy"]};
  ALL_REDBOX_TIMES = {"39": [5.2, 4.3, 3.7, 3.0], "40": [4.8, 4.0, 3.2, 2.5], "44": [14.0, 11.0, 7.4, 4.3], "45": [13.0, 10.9, 8.0, 5.0], "46": [9.8, 8.8, 8.0, 7.2, 6.5, 5.8, 5.0, 4.2], "48": [7.7, 7.0, 6.3, 5.2, 4.3], "51": [8.6, 7.1, 4.3], "52": [8.2, 6.6, 4.1], "53": [6.4, 5.4, 4.4, 3.4], "54": [6.6, 5.6, 4.6, 3.6], "55": [6.5, 5.5, 4.5, 3.5], "56": [8.6, 7.6, 6.6, 5.6], "57": [6.3, 5.5, 4.7, 3.8], "61": [6.0, 5.1, 4.0], "62": [11.0, 10.3, 9.5, 8.5], "63": [9.8, 8.8, 7.8, 6.8], "64": [8.5, 7.7, 6.8, 5.8], "65": [8.1, 7.2, 6.3, 5.3]};
  repeat_prev = false;
  cimgs = [];
  cimg_names = [];
  redbox_targets = [];
  redbox_times = [];
  redbox_target = null;
  redbox_time = null;
  red_box = null;
  
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
    depth: -2.0 
  });
  
  // Initialize components for Routine "trialDrawing"
  trialDrawingClock = new util.Clock();
  MIN_DIST_SQ = (0.005 * 0.005);
  function _dist_sq(x1, y1, x2, y2) {
      var dx, dy;
      dx = (x2 - x1);
      dy = (y2 - y1);
      return ((dx * dx) + (dy * dy));
  }
  dist_sq = _dist_sq;
  function _round_dp(x, dp = 5) {
      var num;
      num = Math.pow(10, dp);
      return (Math.round((x * num)) / num);
  }
  round_dp = _round_dp;
  x = 0;
  y = 0;
  xx = [];
  yy = [];
  
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
    depth: -3.0 
  });
  
  // Initialize components for Routine "trialText"
  trialTextClock = new util.Clock();
  textbox_xys = {"21": [0.1025, (- 0.23)], "22": [0.1025, (- 0.2425)], "28": [0.14, 0.03], "29": [0.34, 0.015], "32": [0.1025, (- 0.255)], "33": [0.1025, (- 0.2125)], "34": [0.1025, (- 0.225)], "35": [0.1025, (- 0.2125)]};
  textbox_sizes = {"21": [0.255, 0.07], "22": [0.255, 0.07], "28": [0.22, 0.14], "29": [0.22, 0.19], "32": [0.255, 0.07], "33": [0.255, 0.07], "34": [0.255, 0.07], "35": [0.255, 0.07]};
  textbox_lhs = {"21": 0.045, "22": 0.045, "28": 0.11, "29": 0.15, "32": 0.045, "33": 0.045, "34": 0.045, "35": 0.045};
  
  trialTextTextbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'trialTextTextbox',
    text: '',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.045,
    size: [0, 0],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.01,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  trialTextMouse = new core.Mouse({
    win: psychoJS.window,
  });
  trialTextMouse.mouseClock = new util.Clock();
  trialTextDebug = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialTextDebug',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "wipe"
  wipeClock = new util.Clock();
  // Initialize components for Routine "zeEnd"
  zeEndClock = new util.Clock();
  endSlide = new visual.ImageStim({
    win : psychoJS.window,
    name : 'endSlide', units : undefined, 
    image : 'imgs/slides/slide-66.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.2, 0.675],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  endCont = new visual.ImageStim({
    win : psychoJS.window,
    name : 'endCont', units : undefined, 
    image : 'imgs/transparent-box.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : CLICK_BOX_OPACITY,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  endMouse = new core.Mouse({
    win: psychoJS.window,
  });
  endMouse.mouseClock = new util.Clock();
  endKeyResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
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
    // setup some python lists for storing info about the beginMouse
    beginMouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    beginSound.setVolume(1.0);
    // keep track of which components have finished
    beginComponents = [];
    beginComponents.push(beginSlide);
    beginComponents.push(beginCont);
    beginComponents.push(beginMouse);
    beginComponents.push(beginSound);
    
    for (const thisComponent of beginComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function beginRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'begin'-------
    // get current time
    t = beginClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *beginSlide* updates
    if (t >= 0.0 && beginSlide.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beginSlide.tStart = t;  // (not accounting for frame time here)
      beginSlide.frameNStart = frameN;  // exact frame index
      
      beginSlide.setAutoDraw(true);
    }

    
    // *beginCont* updates
    if (t >= 0.0 && beginCont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beginCont.tStart = t;  // (not accounting for frame time here)
      beginCont.frameNStart = frameN;  // exact frame index
      
      beginCont.setAutoDraw(true);
    }

    // *beginMouse* updates
    if (t >= 0.2 && beginMouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beginMouse.tStart = t;  // (not accounting for frame time here)
      beginMouse.frameNStart = frameN;  // exact frame index
      
      beginMouse.status = PsychoJS.Status.STARTED;
      beginMouse.mouseClock.reset();
      prevButtonState = beginMouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (beginMouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = beginMouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [beginCont]) {
            if (obj.contains(beginMouse)) {
              gotValidClick = true;
              beginMouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // start/stop beginSound
    if ((USE_AUDIO) && beginSound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beginSound.tStart = t;  // (not accounting for frame time here)
      beginSound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ beginSound.play(); });  // screen flip
      beginSound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (beginSound.getDuration() + beginSound.tStart)     && beginSound.status === PsychoJS.Status.STARTED) {
      beginSound.stop();  // stop the sound (if longer than duration)
      beginSound.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of beginComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of beginComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    beginSound.stop();  // ensure sound has stopped at end of routine
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
    for (const thisTrial of trials) {
      const snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(gateRoutineBegin(snapshot));
      trialsLoopScheduler.add(gateRoutineEachFrame());
      trialsLoopScheduler.add(gateRoutineEnd());
      trialsLoopScheduler.add(trialChoiceRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialChoiceRoutineEachFrame());
      trialsLoopScheduler.add(trialChoiceRoutineEnd());
      trialsLoopScheduler.add(trialDrawingRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialDrawingRoutineEachFrame());
      trialsLoopScheduler.add(trialDrawingRoutineEnd());
      trialsLoopScheduler.add(trialTextRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialTextRoutineEachFrame());
      trialsLoopScheduler.add(trialTextRoutineEnd());
      trialsLoopScheduler.add(wipeRoutineBegin(snapshot));
      trialsLoopScheduler.add(wipeRoutineEachFrame());
      trialsLoopScheduler.add(wipeRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var is_choice;
var is_drawing;
var is_text;
var slide_num;
var slide;
var aud_file;
var trial_sound;
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
    is_choice = (qnType === "choice");
    is_drawing = (qnType === "drawing");
    is_text = (qnType === "text");
    slide_num = ((slideNum < 10) ? `0${slideNum}` : slideNum.toString());
    if ((slide_num !== "NA")) {
        slide = make_slide(slide_num);
        slide.autoDraw = true;
    } else {
        slide = BLANK_IMG;
    }
    if (USE_AUDIO) {
        aud_file = (audFile ? `aud/mp3/${audFile}.mp3` : "A");
        trial_sound = new sound.Sound({"win": psychoJS.window, "value": aud_file, "secs": (- 1), "stereo": true, "hamming": true, "name": "trial_sound"});
        if ((aud_file !== "A")) {
            trial_sound.setVolume(1.0);
        } else {
            trial_sound.setVolume(0);
        }
        trial_sound.play();
    }
    
    // keep track of which components have finished
    gateComponents = [];
    
    for (const thisComponent of gateComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of gateComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of gateComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "gate" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _pj;
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
    if ((! is_choice)) {
        continueRoutine = false;
    } else {
        if ((((qnNum === "13a2") || (qnNum === "21_2")) && (! repeat_prev))) {
            repeat_prev = false;
            continueRoutine = false;
        } else {
            cimgs = all_cimgs[slide_num]();
            for (var cimg, _pj_c = 0, _pj_a = cimgs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                cimg = _pj_a[_pj_c];
                cimg.autoDraw = true;
            }
            while ((cimgs.length < MAX_OPTIONS)) {
                cimgs.push(BLANK_IMG);
            }
            if (USE_AUDIO) {
                if (_pj.in_es6(slide_num, ALL_REDBOX_TARGETS)) {
                    redbox_targets = ALL_REDBOX_TARGETS[slide_num];
                    redbox_times = ALL_REDBOX_TIMES[slide_num];
                    redbox_target = redbox_targets.pop();
                    redbox_time = redbox_times.pop();
                }
                if (_pj.in_es6(slide_num, ["44", "45", "46", "48", "51", "52", "56", "57", "62", "63", "64", "65"])) {
                    red_box = make_box("red_box", [0, 0], [0, 0], 1, "-1to5");
                } else {
                    red_box = make_box("red_box", [0, 0], [0, 0], 1);
                }
            }
            if (SHOW_DEBUG) {
                cimg_names = [];
                for (var i, _pj_c = 0, _pj_a = util.range(cimgs.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                    i = _pj_a[_pj_c];
                    cimg_names.push(cimgs[i].name);
                }
            }
        }
    }
    
    // setup some python lists for storing info about the trialChoiceMouse
    trialChoiceMouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    trialChoiceComponents = [];
    trialChoiceComponents.push(trialChoiceMouse);
    trialChoiceComponents.push(trialChoiceDebug);
    
    for (const thisComponent of trialChoiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialChoiceRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trialChoice'-------
    // get current time
    t = trialChoiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (is_choice) {
        if (USE_AUDIO) {
            if ((redbox_targets.length > 0)) {
                if ((t >= redbox_time)) {
                    for (var cimg, _pj_c = 0, _pj_a = cimgs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                        cimg = _pj_a[_pj_c];
                        if ((cimg.name === redbox_target)) {
                            red_box.pos = cimg.pos;
                            unhide(red_box, cimg.size);
                            break;
                        }
                    }
                    redbox_target = redbox_targets.pop();
                    redbox_time = redbox_times.pop();
                }
            } else {
                if ((redbox_times.length > 0)) {
                    if ((t >= redbox_time)) {
                        for (var cimg, _pj_c = 0, _pj_a = cimgs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                            cimg = _pj_a[_pj_c];
                            if ((cimg.name === redbox_target)) {
                                red_box.pos = cimg.pos;
                                unhide(red_box, cimg.size);
                                break;
                            }
                        }
                        redbox_time = redbox_times.pop();
                    }
                } else {
                    if (((redbox_time !== null) && (t >= redbox_time))) {
                        hide(red_box);
                    }
                }
            }
        }
        if (SHOW_DEBUG) {
            trialChoiceDebug.text = `trialChoice
    taskName = ${taskName}
    audFile = ${audFile}
    slide_num = ${slide_num}
    qnNum = ${qnNum}
    qnType = ${qnType}
    corrAns = ${corrAns}
    cimg_names = ${cimg_names}
    t = ${round(t, 3)}`
    ;
        }
    }
    
    // *trialChoiceMouse* updates
    if (t >= 0.2 && trialChoiceMouse.status === PsychoJS.Status.NOT_STARTED) {
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
          for (const obj of [cimgs[0], cimgs[1], cimgs[2], cimgs[3], cimgs[4], cimgs[5], cimgs[6]]) {
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
    for (const thisComponent of trialChoiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of trialChoiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (is_choice) {
        if ((qnNum === "13a1")) {
            repeat_prev = (trialChoiceMouse.clicked_name.toString() !== corrAns.toString());
        }
        if ((qnNum === "21_1")) {
            if ((((typeof trialChoiceMouse.clicked_name) === "string") || (trialChoiceMouse.clicked_name instanceof String))) {
                repeat_prev = (trialChoiceMouse.clicked_name.toString()[0] !== "s");
            } else {
                repeat_prev = (trialChoiceMouse.clicked_name[0].toString()[0] !== "s");
            }
        }
        if (SHOW_DEBUG) {
            console.log(`trialChoiceMouse.clicked_name = ${trialChoiceMouse.clicked_name}`);
            console.log(`corrAns = ${corrAns}`);
            console.log(`repeat_prev = ${repeat_prev}`);
        }
        for (var cimg, _pj_c = 0, _pj_a = cimgs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            cimg = _pj_a[_pj_c];
            hide(cimg);
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
    if ((! is_drawing)) {
        continueRoutine = false;
    } else {
        if (SHOW_DEBUG) {
            console.log(`trialDrawingMouse = ${trialDrawingMouse}`);
        }
    }
    
    trialDrawingBrushReset();
    // setup some python lists for storing info about the trialDrawingMouse
    trialDrawingMouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    trialDrawingComponents = [];
    trialDrawingComponents.push(trialDrawingBrush);
    trialDrawingComponents.push(trialDrawingMouse);
    trialDrawingComponents.push(trialDrawingDebug);
    
    for (const thisComponent of trialDrawingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    if (is_drawing) {
        if ((xx.length > 2)) {
            unhide(GLOBAL_CONT, CONT_SIZE);
        }
        if (((trialDrawingMouse.getPressed()[0] === 1) && (t > 0.2))) {
            [x, y] = trialDrawingMouse.getPos();
            if (((xx.length > 0) && (yy.length > 0))) {
                if ((dist_sq(xx.slice((- 1))[0], yy.slice((- 1))[0], x, y) > MIN_DIST_SQ)) {
                    xx.push(round_dp(x));
                    yy.push(round_dp(y));
                }
            } else {
                xx.push(round_dp(x));
                yy.push(round_dp(y));
            }
        }
        if (SHOW_DEBUG) {
            trialDrawingDebug.text = `trialDrawing
    taskName = ${taskName}
    slideNum = ${slideNum}
    qnNum = ${qnNum}
    qnType = ${qnType}
    corrAns = ${corrAns}
    t = ${round(t, 3)}
    x, y = ${round(x, 3)}, ${round(y, 3)}
    len(xx) = ${xx.length}`
    ;
        }
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
    // *trialDrawingMouse* updates
    if (t >= 0.2 && trialDrawingMouse.status === PsychoJS.Status.NOT_STARTED) {
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
          for (const obj of [GLOBAL_CONT]) {
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

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialDrawingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of trialDrawingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (is_drawing) {
        trialDrawingBrush.reset();
        psychoJS.experiment.addData("drawing_x", xx);
        psychoJS.experiment.addData("drawing_y", yy);
        xx = [];
        yy = [];
    }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "trialDrawing" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trialTextComponents;
function trialTextRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trialText'-------
    t = 0;
    trialTextClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((! is_text)) {
        continueRoutine = false;
    } else {
        trialTextTextbox.pos = textbox_xys[slide_num];
        trialTextTextbox.size = textbox_sizes[slide_num];
        trialTextTextbox.letterHeight = textbox_lhs[slide_num];
    }
    
    trialTextTextbox.setText('');
    // setup some python lists for storing info about the trialTextMouse
    trialTextMouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    trialTextComponents = [];
    trialTextComponents.push(trialTextTextbox);
    trialTextComponents.push(trialTextMouse);
    trialTextComponents.push(trialTextDebug);
    
    for (const thisComponent of trialTextComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var textbox_content;
function trialTextRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trialText'-------
    // get current time
    t = trialTextClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
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
    if (is_text) {
        textbox_content = "";
        for (var ch, _pj_c = 0, _pj_a = trialTextTextbox.text, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            ch = _pj_a[_pj_c];
            if (_pj.in_es6(ch, "0123456789")) {
                textbox_content += ch;
            }
        }
        trialTextTextbox.text = textbox_content;
        if ((trialTextTextbox.text.length > 0)) {
            unhide(GLOBAL_CONT, CONT_SIZE);
        } else {
            hide(GLOBAL_CONT);
        }
        if (SHOW_DEBUG) {
            trialTextDebug.text = `trialText
    taskName = ${taskName}
    slideNum = ${slideNum}
    qnNum = ${qnNum}
    qnType = ${qnType}
    corrAns = ${corrAns}
    trialTextTextbox.text = ${trialTextTextbox.text}
    t = ${round(t, 3)}`
    ;
        }
    }
    
    
    // *trialTextTextbox* updates
    if (t >= 0.0 && trialTextTextbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialTextTextbox.tStart = t;  // (not accounting for frame time here)
      trialTextTextbox.frameNStart = frameN;  // exact frame index
      
      trialTextTextbox.setAutoDraw(true);
    }

    // *trialTextMouse* updates
    if (t >= 0.2 && trialTextMouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialTextMouse.tStart = t;  // (not accounting for frame time here)
      trialTextMouse.frameNStart = frameN;  // exact frame index
      
      trialTextMouse.status = PsychoJS.Status.STARTED;
      trialTextMouse.mouseClock.reset();
      prevButtonState = trialTextMouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (trialTextMouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = trialTextMouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [GLOBAL_CONT]) {
            if (obj.contains(trialTextMouse)) {
              gotValidClick = true;
              trialTextMouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *trialTextDebug* updates
    if (t >= 0.0 && trialTextDebug.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialTextDebug.tStart = t;  // (not accounting for frame time here)
      trialTextDebug.frameNStart = frameN;  // exact frame index
      
      trialTextDebug.setAutoDraw(true);
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
    for (const thisComponent of trialTextComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialTextRoutineEnd() {
  return async function () {
    //------Ending Routine 'trialText'-------
    for (const thisComponent of trialTextComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    hide(trialTextTextbox);
    
    psychoJS.experiment.addData('trialTextTextbox.text',trialTextTextbox.text)
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "trialText" was not non-slip safe, so reset the non-slip timer
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
    
    for (const thisComponent of wipeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of wipeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of wipeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (USE_AUDIO) {
        if (((slide_num === "05") || (slide_num === "06"))) {
            trial_sound = new sound.Sound({"win": psychoJS.window, "value": "aud/silence.mp3", "stereo": true, "hamming": true, "name": "trial_sound"});
            trial_sound.play();
        }
        trial_sound.stop();
    }
    hide(slide);
    hide(GLOBAL_CONT);
    
    // the Routine "wipe" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _endKeyResp_allKeys;
var zeEndComponents;
function zeEndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'zeEnd'-------
    t = 0;
    zeEndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the endMouse
    endMouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    endKeyResp.keys = undefined;
    endKeyResp.rt = undefined;
    _endKeyResp_allKeys = [];
    // keep track of which components have finished
    zeEndComponents = [];
    zeEndComponents.push(endSlide);
    zeEndComponents.push(endCont);
    zeEndComponents.push(endMouse);
    zeEndComponents.push(endKeyResp);
    
    for (const thisComponent of zeEndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zeEndRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'zeEnd'-------
    // get current time
    t = zeEndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *endSlide* updates
    if (t >= 0.0 && endSlide.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endSlide.tStart = t;  // (not accounting for frame time here)
      endSlide.frameNStart = frameN;  // exact frame index
      
      endSlide.setAutoDraw(true);
    }

    
    // *endCont* updates
    if (t >= 0.0 && endCont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endCont.tStart = t;  // (not accounting for frame time here)
      endCont.frameNStart = frameN;  // exact frame index
      
      endCont.setAutoDraw(true);
    }

    // *endMouse* updates
    if (t >= 0.2 && endMouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endMouse.tStart = t;  // (not accounting for frame time here)
      endMouse.frameNStart = frameN;  // exact frame index
      
      endMouse.status = PsychoJS.Status.STARTED;
      endMouse.mouseClock.reset();
      prevButtonState = endMouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (endMouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = endMouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [endCont]) {
            if (obj.contains(endMouse)) {
              gotValidClick = true;
              endMouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *endKeyResp* updates
    if (t >= 0.2 && endKeyResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endKeyResp.tStart = t;  // (not accounting for frame time here)
      endKeyResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      endKeyResp.clock.reset();
      endKeyResp.start();
      endKeyResp.clearEvents();
    }

    if (endKeyResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = endKeyResp.getKeys({keyList: [], waitRelease: false});
      _endKeyResp_allKeys = _endKeyResp_allKeys.concat(theseKeys);
      if (_endKeyResp_allKeys.length > 0) {
        endKeyResp.keys = _endKeyResp_allKeys[_endKeyResp_allKeys.length - 1].name;  // just the last key pressed
        endKeyResp.rt = _endKeyResp_allKeys[_endKeyResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    for (const thisComponent of zeEndComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zeEndRoutineEnd() {
  return async function () {
    //------Ending Routine 'zeEnd'-------
    for (const thisComponent of zeEndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    endKeyResp.stop();
    // the Routine "zeEnd" was not non-slip safe, so reset the non-slip timer
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
