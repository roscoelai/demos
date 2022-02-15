/********************** 
 * Eightboxes_V2 Test *
 **********************/

import { core, data, sound, util, visual } from '../lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'eightBoxes_v2';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'use_audio [y/n]': 'y', 'debug [y/n]': 'n'};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
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
flowScheduler.add(instRoutineBegin());
flowScheduler.add(instRoutineEachFrame());
flowScheduler.add(instRoutineEnd());
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
    {'name': 'imgs/cherries.png', 'path': 'imgs/cherries.png'},
    {'name': 'imgs/grapes.png', 'path': 'imgs/grapes.png'},
    {'name': 'imgs/empty-box.png', 'path': 'imgs/empty-box.png'},
    {'name': 'imgs/continue.png', 'path': 'imgs/continue.png'},
    {'name': 'imgs/strawberry.png', 'path': 'imgs/strawberry.png'},
    {'name': 'imgs/box.png', 'path': 'imgs/box.png'},
    {'name': 'imgs/apple.png', 'path': 'imgs/apple.png'},
    {'name': 'imgs/watermelon.png', 'path': 'imgs/watermelon.png'},
    {'name': 'aud/8boxes.mp3', 'path': 'aud/8boxes.mp3'},
    {'name': 'imgs/banana.png', 'path': 'imgs/banana.png'},
    {'name': 'imgs/orange.png', 'path': 'imgs/orange.png'},
    {'name': 'conditions_v2.csv', 'path': 'conditions_v2.csv'}
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


var instClock;
var snapped;
var _pj;
var SHOW_DEBUG;
var USE_AUDIO;
var RANDOMIZE_FRUITS;
var RANDOMIZE_POSITIONS;
var SKIP_PART_1;
var integerPart;
var decimalPart;
var N_FRUITS;
var N_BOXES;
var NCOL;
var BOX_SIZE;
var OBJ_SIZE;
var CONT_BUTTON_SIZE;
var ABOVE_BOXES_X0;
var ABOVE_BOXES_Y0;
var ABOVE_BOXES_XY;
var BOXES_X0;
var BOXES_Y0;
var BOXES_XY;
var boxes;
var IMG_NAMES;
var fruit_basket;
var inst_text;
var inst_cont;
var inst_mouse;
var inst_sound;
var part0Clock;
var text0;
var part1Clock;
var text1;
var mouse1;
var part2Clock;
var text2;
var mouse2;
var cont2;
var debug2;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "inst"
  instClock = new util.Clock();
  function _snapped(clicked_obj, box) {
      var bx, by, dx, dy, ox, oy, thresh_x2, thresh_y2;
      [ox, oy] = clicked_obj.pos;
      [bx, by] = box.pos;
      dx = (ox - bx);
      dy = (oy - by);
      thresh_x2 = ((box.size[0] * box.size[0]) / 4);
      thresh_y2 = ((box.size[1] * box.size[1]) / 4);
      if ((((dx * dx) < thresh_x2) && ((dy * dy) < thresh_y2))) {
          clicked_obj.pos = box.pos;
          return true;
      }
      return false;
  }
  snapped = _snapped;
  
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
  SHOW_DEBUG = ((expInfo["debug [y/n]"][0] === "y") || (expInfo["debug [y/n]"][0] === "Y"));
  USE_AUDIO = ((expInfo["use_audio [y/n]"][0] === "y") || (expInfo["use_audio [y/n]"][0] === "Y"));
  RANDOMIZE_FRUITS = true;
  RANDOMIZE_POSITIONS = false;
  SKIP_PART_1 = true;
  if (SHOW_DEBUG) {
      integerPart = null;
      decimalPart = null;
  }
  N_FRUITS = 7;
  N_BOXES = 8;
  NCOL = 4;
  BOX_SIZE = [0.2, 0.2];
  OBJ_SIZE = [0.16, 0.16];
  CONT_BUTTON_SIZE = [0.32, 0.112];
  ABOVE_BOXES_X0 = (- 0.4);
  ABOVE_BOXES_Y0 = 0.2;
  ABOVE_BOXES_XY = [];
  for (var i, _pj_c = 0, _pj_a = util.range(N_FRUITS), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      ABOVE_BOXES_XY.push([(ABOVE_BOXES_X0 + (i * OBJ_SIZE[1])), ABOVE_BOXES_Y0]);
  }
  BOXES_X0 = (- 0.3);
  BOXES_Y0 = 0;
  BOXES_XY = [];
  for (var i, _pj_c = 0, _pj_a = util.range(N_BOXES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      BOXES_XY.push([(BOXES_X0 + ((i % NCOL) * BOX_SIZE[0])), (BOXES_Y0 - (Number.parseInt((i / NCOL)) * BOX_SIZE[0]))]);
  }
  boxes = [];
  for (var i, _pj_c = 0, _pj_a = util.range(N_BOXES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      boxes.push(new visual.ImageStim({"win": psychoJS.window, "name": `box${(i + 1)}`, "image": "imgs/box.png", "pos": BOXES_XY[i], "size": BOX_SIZE, "opacity": 0.5}));
  }
  IMG_NAMES = ["apple", "banana", "cherries", "grapes", "orange", "strawberry", "watermelon"];
  _pj._assert((IMG_NAMES.length === N_FRUITS), null);
  fruit_basket = [];
  for (var i, _pj_c = 0, _pj_a = util.range(N_FRUITS), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      fruit_basket.push(new visual.ImageStim({"win": psychoJS.window, "name": IMG_NAMES[i], "image": `imgs/${IMG_NAMES[i]}.png`, "pos": [0, 0], "size": OBJ_SIZE}));
  }
  
  inst_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'inst_text',
    text: "Instructions:\n\nThere will be 8 boxes on the screen. Some will contain a fruit, some will be empty.\n\nAt the start of each trial, the positions of all the fruits will be revealed for a short period of time. The fruits will then appear above the boxes.\n\nYou may then click and drag each fruit back into their original boxes to complete the trial.\n\nThere will be 1 practice trial, followed by 10 trials.\n\nWhenever you are ready, click/tap on 'continue' and the next trial will begin.",
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0], height: 0.025,  wrapWidth: 0.98, ori: 0.0,
    color: new util.Color('white'),  opacity: 1.0,
    depth: -2.0 
  });
  
  inst_cont = new visual.ImageStim({
    win : psychoJS.window,
    name : 'inst_cont', units : 'height', 
    image : 'imgs/continue.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.4)], size : [0.32, 0.112],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  inst_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  inst_mouse.mouseClock = new util.Clock();
  inst_sound = new sound.Sound({
    win: psychoJS.window,
    value: 'aud/8boxes.mp3',
    secs: (- 1),
    });
  inst_sound.setVolume(1.0);
  // Initialize components for Routine "part0"
  part0Clock = new util.Clock();
  text0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text0',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "part1"
  part1Clock = new util.Clock();
  text1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text1',
    text: 'Find the fruits',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  mouse1 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse1.mouseClock = new util.Clock();
  // Initialize components for Routine "part2"
  part2Clock = new util.Clock();
  text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text2',
    text: 'Put the fruits back in their original boxes',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  mouse2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse2.mouseClock = new util.Clock();
  cont2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cont2', units : undefined, 
    image : 'imgs/continue.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.4)], size : [0, 0],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  debug2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'debug2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, 0.37], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
var instComponents;
function instRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'inst'-------
    t = 0;
    instClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the inst_mouse
    inst_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    inst_sound.setVolume(1.0);
    // keep track of which components have finished
    instComponents = [];
    instComponents.push(inst_text);
    instComponents.push(inst_cont);
    instComponents.push(inst_mouse);
    instComponents.push(inst_sound);
    
    for (const thisComponent of instComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function instRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'inst'-------
    // get current time
    t = instClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *inst_text* updates
    if (t >= 0.0 && inst_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_text.tStart = t;  // (not accounting for frame time here)
      inst_text.frameNStart = frameN;  // exact frame index
      
      inst_text.setAutoDraw(true);
    }

    
    // *inst_cont* updates
    if (t >= 0.0 && inst_cont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_cont.tStart = t;  // (not accounting for frame time here)
      inst_cont.frameNStart = frameN;  // exact frame index
      
      inst_cont.setAutoDraw(true);
    }

    // *inst_mouse* updates
    if (t >= 0.0 && inst_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_mouse.tStart = t;  // (not accounting for frame time here)
      inst_mouse.frameNStart = frameN;  // exact frame index
      
      inst_mouse.status = PsychoJS.Status.STARTED;
      inst_mouse.mouseClock.reset();
      prevButtonState = inst_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (inst_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = inst_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [inst_cont]) {
            if (obj.contains(inst_mouse)) {
              gotValidClick = true;
              inst_mouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // start/stop inst_sound
    if ((USE_AUDIO) && inst_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_sound.tStart = t;  // (not accounting for frame time here)
      inst_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ inst_sound.play(); });  // screen flip
      inst_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (inst_sound.getDuration() + inst_sound.tStart)     && inst_sound.status === PsychoJS.Status.STARTED) {
      inst_sound.stop();  // stop the sound (if longer than duration)
      inst_sound.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of instComponents)
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


function instRoutineEnd() {
  return async function () {
    //------Ending Routine 'inst'-------
    for (const thisComponent of instComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    inst_sound.stop();  // ensure sound has stopped at end of routine
    // the Routine "inst" was not non-slip safe, so reset the non-slip timer
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
      trialList: 'conditions_v2.csv',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      const snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(part0RoutineBegin(snapshot));
      trialsLoopScheduler.add(part0RoutineEachFrame());
      trialsLoopScheduler.add(part0RoutineEnd());
      trialsLoopScheduler.add(part1RoutineBegin(snapshot));
      trialsLoopScheduler.add(part1RoutineEachFrame());
      trialsLoopScheduler.add(part1RoutineEnd());
      trialsLoopScheduler.add(part2RoutineBegin(snapshot));
      trialsLoopScheduler.add(part2RoutineEachFrame());
      trialsLoopScheduler.add(part2RoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var objs;
var correct_choices;
var box_idxs;
var idxs;
var part0Components;
function part0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'part0'-------
    t = 0;
    part0Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    objs = [];
    correct_choices = [];
    for (var i, _pj_c = 0, _pj_a = util.range(N_BOXES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        boxes[i].autoDraw = true;
        objs.push(null);
        correct_choices.push(null);
    }
    if (RANDOMIZE_POSITIONS) {
        box_idxs = util.range(N_BOXES);
        util.shuffle(box_idxs);
        idxs = box_idxs.slice(0, n_fruits);
    } else {
        idxs = [pos1, pos2, pos3, pos4, pos5, pos6].slice(0, n_fruits);
    }
    if (RANDOMIZE_FRUITS) {
        util.shuffle(fruit_basket);
    }
    for (var i, _pj_c = 0, _pj_a = util.range(n_fruits), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        objs[idxs[i]] = fruit_basket[i];
        objs[idxs[i]].pos = BOXES_XY[idxs[i]];
        correct_choices[idxs[i]] = fruit_basket[i].name;
        objs[idxs[i]].autoDraw = true;
    }
    
    text0.setText(trial_name);
    // keep track of which components have finished
    part0Components = [];
    part0Components.push(text0);
    
    for (const thisComponent of part0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function part0RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'part0'-------
    // get current time
    t = part0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text0* updates
    if (t >= 0.0 && text0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text0.tStart = t;  // (not accounting for frame time here)
      text0.frameNStart = frameN;  // exact frame index
      
      text0.setAutoDraw(true);
    }

    frameRemains = 0.0 + reveal_seconds - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text0.setAutoDraw(false);
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
    for (const thisComponent of part0Components)
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


function part0RoutineEnd() {
  return async function () {
    //------Ending Routine 'part0'-------
    for (const thisComponent of part0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    for (var obj, _pj_c = 0, _pj_a = objs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        obj = _pj_a[_pj_c];
        if ((obj !== null)) {
            obj.autoDraw = false;
        }
    }
    
    // the Routine "part0" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var found_fruits;
var OBJ_DURATION;
var BLANK_DURATION;
var visible;
var visible_t;
var n_omissions;
var n_commissions;
var correct_boxes;
var clicked_boxes;
var click_times;
var first_click;
var update_time_elapsed;
var obj_count;
var task_time_start;
var task_time_elapsed;
var highlighter;
var part1Components;
function part1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'part1'-------
    t = 0;
    part1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    found_fruits = [];
    if (SKIP_PART_1) {
        for (var obj, _pj_c = 0, _pj_a = objs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            obj = _pj_a[_pj_c];
            if ((obj !== null)) {
                found_fruits.push(obj);
            }
        }
        continueRoutine = false;
    }
    OBJ_DURATION = 1.0;
    BLANK_DURATION = OBJ_DURATION;
    visible = [];
    visible_t = [];
    n_omissions = [];
    n_commissions = [];
    for (var i, _pj_c = 0, _pj_a = util.range(N_BOXES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        visible.push(false);
        visible_t.push(null);
        n_omissions.push(0);
        n_commissions.push(0);
    }
    correct_boxes = [];
    for (var i, _pj_c = 0, _pj_a = util.range(n_fruits), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        correct_boxes.push(`box${(idxs[i] + 1)}`);
        correct_choices[idxs[i]] = fruit_basket[i].name;
    }
    correct_boxes.sort();
    for (var i, _pj_c = 0, _pj_a = util.range(N_BOXES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        if ((objs[i] === null)) {
            objs[i] = new visual.ImageStim({"win": psychoJS.window, "name": `blank${(i + 1)}`, "image": "imgs/empty-box.png", "pos": BOXES_XY[i], "size": OBJ_SIZE});
        }
    }
    clicked_boxes = [];
    click_times = [];
    first_click = true;
    update_time_elapsed = false;
    obj_count = 0;
    task_time_start = null;
    task_time_elapsed = 0.0;
    highlighter = new visual.ImageStim({"win": psychoJS.window, "name": "highlighter", "image": "imgs/box.png", "pos": BOXES_XY[0], "size": BOX_SIZE, "opacity": 0.5});
    
    // setup some python lists for storing info about the mouse1
    gotValidClick = false; // until a click is received
    mouse1.mouseClock.reset();
    // keep track of which components have finished
    part1Components = [];
    part1Components.push(text1);
    part1Components.push(mouse1);
    
    for (const thisComponent of part1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function part1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'part1'-------
    // get current time
    t = part1Clock.getTime();
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
    if ((! SKIP_PART_1)) {
        if (update_time_elapsed) {
            task_time_elapsed = (t - task_time_start);
        }
        highlighter.setSize([0, 0], {"log": false});
        for (var i, _pj_c = 0, _pj_a = util.range(N_BOXES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            if (visible[i]) {
                continue;
            }
            if (mouse1.isPressedIn(boxes[i])) {
                if (first_click) {
                    task_time_start = t;
                    update_time_elapsed = true;
                    first_click = false;
                }
                if ((! _pj.in_es6("blank", objs[i].name))) {
                    obj_count += 1;
                    if ((obj_count >= n_fruits)) {
                        update_time_elapsed = false;
                    }
                } else {
                    if (_pj.in_es6("_blank", objs[i].name)) {
                        n_commissions[i] += 1;
                    } else {
                        n_omissions[i] += 1;
                    }
                }
                clicked_boxes.push(boxes[i].name);
                click_times.push(task_time_elapsed);
                objs[i].setAutoDraw(true, {"log": false});
                visible[i] = true;
                visible_t[i] = t;
                break;
            } else {
                if (boxes[i].contains(mouse1)) {
                    highlighter.setPos(boxes[i].pos, {"log": false});
                    highlighter.setSize(BOX_SIZE, {"log": false});
                    highlighter.draw();
                    break;
                }
            }
        }
        for (var i, _pj_c = 0, _pj_a = util.range(N_BOXES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            if ((visible[i] && ((t - visible_t[i]) >= OBJ_DURATION))) {
                objs[i].setAutoDraw(false, {"log": false});
                if ((! _pj.in_es6("blank", objs[i].name))) {
                    found_fruits.push(objs[i]);
                    objs[i] = new visual.ImageStim({"win": psychoJS.window, "name": `${objs[i].name}_blank`, "image": "imgs/empty-box.png", "pos": BOXES_XY[i], "size": OBJ_SIZE});
                }
                visible[i] = false;
            }
        }
        if (((obj_count >= n_fruits) && (util.sum(visible) <= 0))) {
            continueRoutine = false;
        }
    }
    
    
    // *text1* updates
    if (t >= 0.0 && text1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text1.tStart = t;  // (not accounting for frame time here)
      text1.frameNStart = frameN;  // exact frame index
      
      text1.setAutoDraw(true);
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
    for (const thisComponent of part1Components)
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


var fruit_pos;
var found_count;
var total_errors;
function part1RoutineEnd() {
  return async function () {
    //------Ending Routine 'part1'-------
    for (const thisComponent of part1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    fruit_pos = ABOVE_BOXES_XY;
    found_count = 0;
    util.shuffle(found_fruits);
    for (var found_fruit, _pj_c = 0, _pj_a = found_fruits, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        found_fruit = _pj_a[_pj_c];
        found_fruit.pos = fruit_pos[found_count];
        found_fruit.autoDraw = true;
        found_count += 1;
    }
    if ((! SKIP_PART_1)) {
        psychoJS.experiment.addData("clicked_boxes", clicked_boxes);
        psychoJS.experiment.addData("click_times", click_times);
        psychoJS.experiment.addData("time_taken_sec", click_times.pop());
        psychoJS.experiment.addData("correct_boxes", correct_boxes);
        psychoJS.experiment.addData("omission_errors", n_omissions);
        psychoJS.experiment.addData("commission_errors", n_commissions);
        total_errors = (util.sum(n_omissions) + util.sum(n_commissions));
        psychoJS.experiment.addData("total_errors", total_errors);
        highlighter.size = [0, 0];
    }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "part1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var DRAGGING;
var clicked_obj;
var fruits_left;
var first_click_time;
var choices;
var part2Components;
function part2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'part2'-------
    t = 0;
    part2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    DRAGGING = false;
    clicked_obj = null;
    fruits_left = n_fruits;
    first_click = true;
    first_click_time = 0;
    choices = [];
    for (var i, _pj_c = 0, _pj_a = util.range(N_BOXES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        choices.push(null);
    }
    
    // setup some python lists for storing info about the mouse2
    mouse2.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    part2Components = [];
    part2Components.push(text2);
    part2Components.push(mouse2);
    part2Components.push(cont2);
    part2Components.push(debug2);
    
    for (const thisComponent of part2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var time_since_start;
var time_since_first_click;
function part2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'part2'-------
    // get current time
    t = part2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((fruits_left > 0)) {
        time_since_start = t;
        time_since_first_click = (first_click ? 0 : (t - first_click_time));
    }
    if (SHOW_DEBUG) {
        debug2.text = `
    time_since_start = ${round(time_since_start, 3)}
    time_since_first_click = ${round(time_since_first_click, 3)}
    fruits_left = ${fruits_left}
    choices = ${choices}`
    ;
    }
    cont2.size = ((fruits_left < 1) ? CONT_BUTTON_SIZE : [0, 0]);
    if ((! DRAGGING)) {
        for (var found_fruit, _pj_c = 0, _pj_a = found_fruits, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            found_fruit = _pj_a[_pj_c];
            if (mouse2.isPressedIn(found_fruit)) {
                if (first_click) {
                    first_click_time = t;
                    first_click = false;
                }
                clicked_obj = found_fruit;
                for (var i, _pj_f = 0, _pj_d = util.range(N_BOXES), _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
                    i = _pj_d[_pj_f];
                    if ((choices[i] === clicked_obj.name)) {
                        choices[i] = null;
                        fruits_left += 1;
                        break;
                    }
                }
                DRAGGING = true;
            }
        }
    }
    if ((util.sum(mouse2.getPressed()) > 0)) {
        if (DRAGGING) {
            clicked_obj.pos = mouse2.getPos();
        }
    } else {
        DRAGGING = false;
        if ((clicked_obj !== null)) {
            for (var i, _pj_c = 0, _pj_a = util.range(N_BOXES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                i = _pj_a[_pj_c];
                if (snapped(clicked_obj, boxes[i])) {
                    choices[i] = clicked_obj.name;
                    fruits_left -= 1;
                    clicked_obj = null;
                    break;
                }
            }
        }
    }
    
    
    // *text2* updates
    if (t >= 0.0 && text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text2.tStart = t;  // (not accounting for frame time here)
      text2.frameNStart = frameN;  // exact frame index
      
      text2.setAutoDraw(true);
    }

    // *mouse2* updates
    if (t >= 0.0 && mouse2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse2.tStart = t;  // (not accounting for frame time here)
      mouse2.frameNStart = frameN;  // exact frame index
      
      mouse2.status = PsychoJS.Status.STARTED;
      mouse2.mouseClock.reset();
      prevButtonState = mouse2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [cont2]) {
            if (obj.contains(mouse2)) {
              gotValidClick = true;
              mouse2.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *cont2* updates
    if (t >= 0.0 && cont2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cont2.tStart = t;  // (not accounting for frame time here)
      cont2.frameNStart = frameN;  // exact frame index
      
      cont2.setAutoDraw(true);
    }

    
    // *debug2* updates
    if (t >= 0.0 && debug2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      debug2.tStart = t;  // (not accounting for frame time here)
      debug2.frameNStart = frameN;  // exact frame index
      
      debug2.setAutoDraw(true);
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
    for (const thisComponent of part2Components)
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


var errors;
function part2RoutineEnd() {
  return async function () {
    //------Ending Routine 'part2'-------
    for (const thisComponent of part2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData("time_since_start", time_since_start);
    psychoJS.experiment.addData("time_since_first_click", time_since_first_click);
    psychoJS.experiment.addData("choices", choices);
    psychoJS.experiment.addData("correct_choices", correct_choices);
    errors = 0;
    for (var i, _pj_c = 0, _pj_a = util.range(N_BOXES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        if ((choices[i] !== correct_choices[i])) {
            errors += 1;
        }
    }
    psychoJS.experiment.addData("errors", errors);
    for (var found_fruit, _pj_c = 0, _pj_a = found_fruits, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        found_fruit = _pj_a[_pj_c];
        found_fruit.autoDraw = false;
    }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "part2" was not non-slip safe, so reset the non-slip timer
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
