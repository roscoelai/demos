/********************* 
 * Theoryofmind Test *
 *********************/


// store info about the experiment session:
let expName = 'theoryOfMind';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'debug [y/n]': 'n'};

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

function make_img(name, file_path, pos = [0, 0], size = [0, 0], opacity = 1) {
    var img;
    [img] = [new visual.ImageStim({"win": psychoJS.window, "name": name, "image": file_path, "pos": pos, "size": size, "opacity": opacity})];
    return img;
}

function hide(obj) {
    obj.size = [0, 0];
    obj.autoDraw = false;
}

function unhide(obj, size) {
    obj.size = size;
    obj.autoDraw = true;
}

function make_box(name, pos, size, opacity = CLICK_BOX_OPACITY) {
    var img;
    [img] = [make_img(name, `imgs/transparent-box.png`, pos, size, opacity)];
    img.autoDraw = true;
    return img;
}

var names;
var xys;
var sizes;
var cimgs;
function make_boxes(dct, opacity = CLICK_BOX_OPACITY) {
    var cimgs, names, sizes, xys;
    names = dct["names"];
    xys = dct["xys"];
    sizes = dct["sizes"];
    _pj._assert((names.length === xys.length), null);
    _pj._assert((names.length === sizes.length), null);
    cimgs = [];
    for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        cimgs.push(make_box(names[i], xys[i], sizes[i], opacity));
    }
    return cimgs;
}

function make_poly(name, size, pos, opacity = POLYGON_OPACITY) {
    var h, img, w;
    [w, h] = size;
    [img] = [new visual.Rect({"win": psychoJS.window, "name": name, "width": w, "height": h, "pos": pos, "lineWidth": 0, "fillColor": new util.Color("white"), "opacity": opacity})];
    img.autoDraw = true;
    return img;
}

function make_rect(name, size, pos, opacity = POLYGON_OPACITY) {
    var height, img, width;
    [width, height] = size;
    [img] = [new visual.Rect({"win": psychoJS.window, "name": name, "width": width, "height": height, "pos": pos, "lineWidth": 0, "fillColor": new util.Color("white"), "opacity": opacity})];
    img.autoDraw = true;
    return img;
}

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('white'),
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
    {'name': 'imgs/slide-13.png', 'path': 'imgs/slide-13.png'},
    {'name': 'imgs/slide-20.png', 'path': 'imgs/slide-20.png'},
    {'name': 'imgs/slide-10.png', 'path': 'imgs/slide-10.png'},
    {'name': 'imgs/slide-17.png', 'path': 'imgs/slide-17.png'},
    {'name': 'imgs/slide-19.png', 'path': 'imgs/slide-19.png'},
    {'name': 'imgs/slide-02.png', 'path': 'imgs/slide-02.png'},
    {'name': 'imgs/slide-04.png', 'path': 'imgs/slide-04.png'},
    {'name': 'imgs/continue.png', 'path': 'imgs/continue.png'},
    {'name': 'imgs/slide-16.png', 'path': 'imgs/slide-16.png'},
    {'name': 'imgs/slide-11.png', 'path': 'imgs/slide-11.png'},
    {'name': 'imgs/slide-18.png', 'path': 'imgs/slide-18.png'},
    {'name': 'imgs/slide-15.png', 'path': 'imgs/slide-15.png'},
    {'name': 'imgs/slide-01.png', 'path': 'imgs/slide-01.png'},
    {'name': 'imgs/slide-07.png', 'path': 'imgs/slide-07.png'},
    {'name': 'imgs/slide-03.png', 'path': 'imgs/slide-03.png'},
    {'name': 'sequences/conditions.csv', 'path': 'sequences/conditions.csv'},
    {'name': 'imgs/slide-12.png', 'path': 'imgs/slide-12.png'},
    {'name': 'imgs/slide-08.png', 'path': 'imgs/slide-08.png'},
    {'name': 'imgs/slide-14.png', 'path': 'imgs/slide-14.png'},
    {'name': 'imgs/transparent-box.png', 'path': 'imgs/transparent-box.png'},
    {'name': 'imgs/slide-09.png', 'path': 'imgs/slide-09.png'},
    {'name': 'imgs/slide-05.png', 'path': 'imgs/slide-05.png'},
    {'name': 'imgs/slide-06.png', 'path': 'imgs/slide-06.png'}
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


var begin1Clock;
var SHOW_DEBUG;
var CLICK_BOX_OPACITY;
var POLYGON_OPACITY;
var CONTINUE_SIZE;
var SLIDE_SIZE_1;
var SLIDE_SIZE_2;
var SLIDES;
var SLIDE_NAMES;
var GLOBAL_CONT;
var GLOBAL_BLANK;
var GLOBAL_MOUSE;
var GLOBAL_MOUSE_state;
var prev_GLOBAL_MOUSE_state;
var inst_slide_names;
var slide_idx;
var prev_slide_idx;
var begin1Text;
var trialClock;
var SLIDE_ATTRS;
var control_scores;
var current_total_score;
var trialMouse;
var trialText;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "begin1"
  begin1Clock = new util.Clock();
  SHOW_DEBUG = ((expInfo["debug [y/n]"][0] === "y") || (expInfo["debug [y/n]"][0] === "Y"));
  CLICK_BOX_OPACITY = (SHOW_DEBUG ? 0.25 : 0);
  POLYGON_OPACITY = (SHOW_DEBUG ? 0.95 : 1);
  CONTINUE_SIZE = [0.228, 0.1];
  SLIDE_SIZE_1 = [0.999, 0.75];
  SLIDE_SIZE_2 = [1.333, 0.75];
  SLIDES = {};
  for (var i, _pj_c = 0, _pj_a = util.range(1, 21), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      if ((i < 10)) {
          i = `0${i}`;
      }
      SLIDES[`slide-${i}`] = make_img(`slide-${i}`, `imgs/slide-${i}.png`, [0, 0], [0, 0]);
  }
  SLIDE_NAMES = {"1": ["slide-01", "slide-02"], "2": ["slide-03"], "3": ["slide-04", "slide-05"], "4": ["slide-06", "slide-07", "slide-08", "slide-09", "slide-10", "slide-11"], "5": ["slide-11"], "6": ["slide-11"], "7": ["slide-12", "slide-13", "slide-14", "slide-15", "slide-16"], "8": ["slide-16"], "9": ["slide-17"], "10": ["slide-18", "slide-19"], "11": ["slide-20"], "12": ["slide-20"]};
  GLOBAL_CONT = make_img("GLOBAL_CONT", "imgs/continue.png", [0, (- 0.4)], CONTINUE_SIZE);
  GLOBAL_BLANK = make_img("GLOBAL_BLANK", "imgs/continue.png", [0, 0], [0, 0]);
  GLOBAL_MOUSE = new core.Mouse({"win": psychoJS.window});
  GLOBAL_MOUSE_state = 0;
  prev_GLOBAL_MOUSE_state = 0;
  inst_slide_names = [];
  slide_idx = 0;
  prev_slide_idx = 0;
  
  begin1Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'begin1Text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  SLIDE_ATTRS = {};
  SLIDE_ATTRS["slide-02"] = {"names": ["cake", "lollipop", "cookie", "chocolate_bar"], "xys": [[(- 0.125), 0.14], [0.09, 0.14], [(- 0.1325), (- 0.07)], [0.09, (- 0.07)]], "sizes": [[0.16, 0.16], [0.16, 0.16], [0.18, 0.16], [0.16, 0.16]]};
  SLIDE_ATTRS["slide-03"] = {"names": ["happy", "sad", "scared", "angry"], "xys": [[(- 0.12), 0.15], [0.11, 0.15], [(- 0.12), (- 0.05)], [0.11, (- 0.05)]], "sizes": [[0.19, 0.19], [0.19, 0.19], [0.19, 0.19], [0.19, 0.19]]};
  SLIDE_ATTRS["slide-05"] = {"names": ["table", "chair", "desk", "drawer"], "xys": [[(- 0.1275), 0.19], [0.155, 0.19], [(- 0.125), (- 0.03)], [0.1725, (- 0.03)]], "sizes": [[0.24, 0.15], [0.15, 0.21], [0.26, 0.15], [0.2, 0.15]]};
  SLIDE_ATTRS["slide-11"] = {"names": ["table", "chair", "desk", "drawer"], "xys": [[(- 0.1175), 0.19], [0.11, 0.19], [(- 0.115), (- 0.025)], [0.115, (- 0.0175)]], "sizes": [[0.22, 0.14], [0.15, 0.21], [0.22, 0.14], [0.16, 0.15]]};
  SLIDE_ATTRS["slide-16"] = {"names": ["train", "wagon", "truck", "airplane"], "xys": [[(- 0.145), 0.19], [0.175, 0.1875], [(- 0.15), (- 0.07)], [0.175, (- 0.07)]], "sizes": [[0.34, 0.16], [0.24, 0.19], [0.22, 0.16], [0.26, 0.16]]};
  SLIDE_ATTRS["slide-17"] = {"names": ["happy", "sad", "scared", "mad"], "xys": [[(- 0.14), 0.19], [0.13, 0.19], [(- 0.14), (- 0.06)], [0.13, (- 0.06)]], "sizes": [[0.2, 0.23], [0.2, 0.23], [0.2, 0.23], [0.2, 0.23]]};
  SLIDE_ATTRS["slide-19"] = {"names": ["train", "wagon", "truck", "airplane"], "xys": [[(- 0.16), 0.19], [0.155, 0.1675], [(- 0.17), (- 0.09)], [0.155, (- 0.09)]], "sizes": [[0.34, 0.16], [0.24, 0.19], [0.22, 0.16], [0.26, 0.16]]};
  SLIDE_ATTRS["slide-20"] = {"names": ["happy", "sad", "scared", "mad"], "xys": [[(- 0.15), 0.185], [0.13, 0.185], [(- 0.15), (- 0.065)], [0.13, (- 0.065)]], "sizes": [[0.2, 0.23], [0.2, 0.23], [0.2, 0.23], [0.2, 0.23]]};
  cimgs = [null, null, null, null];
  control_scores = [];
  current_total_score = 0;
  
  trialMouse = new core.Mouse({
    win: psychoJS.window,
  });
  trialMouse.mouseClock = new util.Clock();
  trialText = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialText',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
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
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'sequences/conditions.csv', '0:'),
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      const snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(begin1RoutineBegin(snapshot));
      trialsLoopScheduler.add(begin1RoutineEachFrame());
      trialsLoopScheduler.add(begin1RoutineEnd());
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var slide_size;
var slide_names;
var begin1Components;
function begin1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'begin1'-------
    t = 0;
    begin1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    slide_size = ((Number.parseInt(taskNum) === 5) ? SLIDE_SIZE_2 : SLIDE_SIZE_1);
    slide_names = SLIDE_NAMES[trialNum.toString()];
    if ((slide_names.length < 2)) {
        continueRoutine = false;
    } else {
        slide_idx = 0;
        prev_slide_idx = 0;
        inst_slide_names = slide_names.slice(0, (- 1));
        unhide(SLIDES[inst_slide_names[slide_idx]], slide_size);
        unhide(GLOBAL_CONT, CONTINUE_SIZE);
    }
    
    // keep track of which components have finished
    begin1Components = [];
    begin1Components.push(begin1Text);
    
    begin1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function begin1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'begin1'-------
    // get current time
    t = begin1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((slide_idx >= inst_slide_names.length)) {
        continueRoutine = false;
    } else {
        if ((prev_slide_idx !== slide_idx)) {
            prev_slide_idx = slide_idx;
            hide(SLIDES[inst_slide_names[prev_slide_idx]]);
            unhide(SLIDES[inst_slide_names[slide_idx]], slide_size);
            hide(GLOBAL_CONT);
            unhide(GLOBAL_CONT, CONTINUE_SIZE);
            begin1Text.autoDraw = false;
            begin1Text.autoDraw = true;
        }
    }
    GLOBAL_MOUSE_state = GLOBAL_MOUSE.getPressed()[0];
    if ((prev_GLOBAL_MOUSE_state !== GLOBAL_MOUSE_state)) {
        prev_GLOBAL_MOUSE_state = GLOBAL_MOUSE_state;
        if ((GLOBAL_MOUSE_state === 1)) {
            if (GLOBAL_CONT.contains(GLOBAL_MOUSE)) {
                slide_idx += 1;
            }
        }
    }
    if (SHOW_DEBUG) {
        begin1Text.text = `begin1
    taskNum = ${taskNum}
    slide_idx = ${slide_idx}
    prev_slide_idx = ${prev_slide_idx}
    inst_slide_names[${slide_idx}] = ${inst_slide_names[slide_idx]}`
    ;
    }
    
    
    // *begin1Text* updates
    if (t >= 0.0 && begin1Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin1Text.tStart = t;  // (not accounting for frame time here)
      begin1Text.frameNStart = frameN;  // exact frame index
      
      begin1Text.setAutoDraw(true);
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
    begin1Components.forEach( function(thisComponent) {
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


function begin1RoutineEnd() {
  return async function () {
    //------Ending Routine 'begin1'-------
    begin1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    hide(SLIDES[inst_slide_names[prev_slide_idx]]);
    hide(GLOBAL_CONT);
    
    // the Routine "begin1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var qnSlide;
var cimg_names;
var block1;
var block2;
var mouse_over;
var gotValidClick;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (((((Number.parseInt(testQn) === 2) || (Number.parseInt(testQn) === 6)) || (Number.parseInt(testQn) === 7)) && (control_scores.slice((- 1))[0] !== 1))) {
        continueRoutine = false;
    } else {
        if ((((Number.parseInt(testQn) === 4) || (Number.parseInt(testQn) === 5)) && ((control_scores.slice((- 1))[0] !== 1) && (control_scores.slice((- 2))[0] !== 1)))) {
            continueRoutine = false;
        }
    }
    qnSlide = slide_names.slice((- 1))[0];
    unhide(SLIDES[qnSlide], slide_size);
    cimgs = make_boxes(SLIDE_ATTRS[qnSlide], CLICK_BOX_OPACITY);
    cimg_names = [];
    for (var i, _pj_c = 0, _pj_a = util.range(cimgs.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        if ((cimgs[i] === null)) {
            cimgs[i] = GLOBAL_BLANK;
            cimg_names.push("_");
        } else {
            cimg_names.push(cimgs[i].name);
        }
    }
    if ((Number.parseInt(taskNum) === 4)) {
        if ((Number.parseInt(qnNum) === 1)) {
            block1 = make_poly("block1", [0.8, 0.05], [0, (- 0.225)]);
            block2 = make_poly("block1", [0.8, 0.05], [0, (- 0.275)]);
        } else {
            if ((Number.parseInt(qnNum) === 2)) {
                block1 = make_poly("block1", [0.8, 0.05], [0, (- 0.175)]);
                block2 = make_poly("block1", [0.8, 0.05], [0, (- 0.275)]);
            } else {
                if ((Number.parseInt(qnNum) === 3)) {
                    block1 = make_poly("block1", [0.8, 0.05], [0, (- 0.175)]);
                    block2 = make_poly("block1", [0.8, 0.05], [0, (- 0.225)]);
                }
            }
        }
    } else {
        if ((Number.parseInt(taskNum) === 5)) {
            if ((Number.parseInt(qnNum) === 1)) {
                block1 = make_poly("block1", [1, 0.05], [0, (- 0.295)]);
            } else {
                if ((Number.parseInt(qnNum) === 2)) {
                    block1 = make_poly("block1", [1, 0.05], [0, (- 0.24)]);
                } else {
                    if ((Number.parseInt(qnNum) === 6)) {
                        block1 = make_poly("block1", [1, 0.1], [0, (- 0.29)]);
                    } else {
                        if ((Number.parseInt(qnNum) === 7)) {
                            block1 = make_poly("block1", [1, 0.05], [0, (- 0.215)]);
                        }
                    }
                }
            }
        }
    }
    if (SHOW_DEBUG) {
        mouse_over = "_";
    }
    
    // setup some python lists for storing info about the trialMouse
    trialMouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(trialMouse);
    trialComponents.push(trialText);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (SHOW_DEBUG) {
        mouse_over = "_";
        for (var cimg, _pj_c = 0, _pj_a = cimgs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            cimg = _pj_a[_pj_c];
            if (cimg.contains(trialMouse)) {
                mouse_over = cimg.name;
                break;
            }
        }
        trialText.text = `trial
    taskNum = ${taskNum}
    qnNum = ${qnNum}
    qnSlide = ${qnSlide}
    cimg_names = ${cimg_names}
    mouse_over = ${mouse_over}
    score_so_far = ${score_so_far}
    t = ${round(t, 3)}`
    ;
    }
    
    // *trialMouse* updates
    if (t >= 0.0 && trialMouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialMouse.tStart = t;  // (not accounting for frame time here)
      trialMouse.frameNStart = frameN;  // exact frame index
      
      trialMouse.status = PsychoJS.Status.STARTED;
      trialMouse.mouseClock.reset();
      prevButtonState = trialMouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (trialMouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = trialMouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [cimgs[0], cimgs[1], cimgs[2], cimgs[3]]) {
            if (obj.contains(trialMouse)) {
              gotValidClick = true;
              trialMouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *trialText* updates
    if (t >= 0.0 && trialText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialText.tStart = t;  // (not accounting for frame time here)
      trialText.frameNStart = frameN;  // exact frame index
      
      trialText.setAutoDraw(true);
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
    trialComponents.forEach( function(thisComponent) {
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


var response;
var outcome;
var _mouseXYs;
function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    response = trialMouse.clicked_name[0];
    if ((corrAns2 === "NA")) {
        outcome = ((response === corrAns1) ? 1 : 0);
    } else {
        outcome = (((response === corrAns1) || (response === corrAns2)) ? 1 : 0);
    }
    trials.addData("response", response);
    if ((controlQn !== "NA")) {
        control_scores.push(outcome);
        trials.addData("control_score", outcome);
        trials.addData("test_score", null);
        trials.addData("current_total_score", null);
    }
    if ((testQn !== "NA")) {
        current_total_score += outcome;
        trials.addData("test_score", outcome);
        trials.addData("current_total_score", current_total_score);
    }
    trials.addData("response_time", t);
    hide(SLIDES[qnSlide]);
    for (var cimg, _pj_c = 0, _pj_a = cimgs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        cimg = _pj_a[_pj_c];
        hide(cimg);
    }
    if ((Number.parseInt(taskNum) === 4)) {
        block1.autoDraw = false;
        block2.autoDraw = false;
    } else {
        if (((Number.parseInt(taskNum) === 5) && ((((Number.parseInt(qnNum) === 1) || (Number.parseInt(qnNum) === 2)) || (Number.parseInt(qnNum) === 6)) || (Number.parseInt(qnNum) === 7)))) {
            block1.autoDraw = false;
        }
    }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = trialMouse.getPos();
    _mouseButtons = trialMouse.getPressed();
    psychoJS.experiment.addData('trialMouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('trialMouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('trialMouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('trialMouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('trialMouse.rightButton', _mouseButtons[2]);
    if (trialMouse.clicked_name.length > 0) {
      psychoJS.experiment.addData('trialMouse.clicked_name', trialMouse.clicked_name[0]);}
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
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
