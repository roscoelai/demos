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
let expInfo = {'participant': ''};

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
    {'name': 'conditions.csv', 'path': 'conditions.csv'},
    {'name': 'imgs/empty-box.png', 'path': 'imgs/empty-box.png'},
    {'name': 'imgs/banana.png', 'path': 'imgs/banana.png'},
    {'name': 'imgs/grapes.png', 'path': 'imgs/grapes.png'},
    {'name': 'imgs/continue.png', 'path': 'imgs/continue.png'},
    {'name': 'imgs/watermelon.png', 'path': 'imgs/watermelon.png'},
    {'name': 'imgs/orange.png', 'path': 'imgs/orange.png'},
    {'name': 'imgs/box.png', 'path': 'imgs/box.png'},
    {'name': 'imgs/apple.png', 'path': 'imgs/apple.png'},
    {'name': 'imgs/strawberry.png', 'path': 'imgs/strawberry.png'}
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
var inst_text_2;
var inst_cont;
var inst_mouse;
var part0Clock;
var N_BOXES;
var RANDOMIZE_FRUITS;
var RANDOMIZE_POSITIONS;
var UNIT;
var box_width;
var obj_width;
var BOX_SIZE;
var OBJ_SIZE;
var BLANK_SIZE;
var OBJ_POS;
var NCOL;
var BOX_X0;
var BOX_Y0;
var x;
var y;
var BOX_POS;
var idxs8;
var boxes;
var FRUIT_X0;
var FRUIT_Y0;
var FRUIT_POS;
var IMG_PATHS;
var objs6;
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
  inst_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'inst_text_2',
    text: "Instructions:\n\nThere will be 8 boxes on the screen. Some will contain a fruit, some will be empty.\n\nAt the start of each trial, the positions of all the fruits will be revealed for a short period of time. The fruits will then appear above the boxes.\n\nYou may then click and drag each fruit back into their original boxes to complete the trial.\n\nThere will be 1 practice trial, followed by 6 trials.\n\nWhenever you are ready, click/tap on 'continue' and the next trial will begin.",
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0], height: 0.025,  wrapWidth: 0.98, ori: 0.0,
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  inst_cont = new visual.ImageStim({
    win : psychoJS.window,
    name : 'inst_cont', units : 'height', 
    image : 'imgs/continue.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.4)], size : [0.32, 0.112],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  inst_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  inst_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "part0"
  part0Clock = new util.Clock();
  N_BOXES = 8;
  RANDOMIZE_FRUITS = true;
  RANDOMIZE_POSITIONS = false;
  UNIT = 0.1;
  box_width = (UNIT * 2.0);
  obj_width = (UNIT * 1.6);
  BOX_SIZE = [box_width, box_width];
  OBJ_SIZE = [obj_width, obj_width];
  BLANK_SIZE = OBJ_SIZE;
  if ((! RANDOMIZE_POSITIONS)) {
      OBJ_POS = {"Practice trial": [0, 6], "Trial 1": [5, 3], "Trial 2": [0, 3, 6], "Trial 3": [1, 4, 6, 7], "Trial 4": [0, 2, 5, 6], "Trial 5": [0, 1, 2, 5, 7], "Trial 6": [0, 2, 3, 4, 5, 6]};
  }
  NCOL = 4;
  BOX_X0 = (- 3);
  BOX_Y0 = 0;
  x = 0;
  y = 0;
  BOX_POS = [];
  idxs8 = [];
  boxes = [];
  for (var i, _pj_c = 0, _pj_a = util.range(N_BOXES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      x = ((BOX_X0 + ((i % NCOL) * 2)) * UNIT);
      y = ((BOX_Y0 - (Number.parseInt((i / NCOL)) * 2)) * UNIT);
      BOX_POS.push([x, y]);
      idxs8.push(i);
      boxes.push(new visual.ImageStim({"win": psychoJS.window, "name": `box${(i + 1)}`, "image": "imgs/box.png", "pos": BOX_POS[i], "size": BOX_SIZE, "opacity": 0.5}));
  }
  FRUIT_X0 = (- 0.4);
  FRUIT_Y0 = (2 * UNIT);
  FRUIT_POS = [];
  for (var i, _pj_c = 0, _pj_a = util.range(6), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      x = (FRUIT_X0 + (i * obj_width));
      y = FRUIT_Y0;
      FRUIT_POS.push([x, y]);
  }
  IMG_PATHS = ["imgs/apple.png", "imgs/banana.png", "imgs/grapes.png", "imgs/orange.png", "imgs/strawberry.png", "imgs/watermelon.png"];
  objs6 = [];
  for (var i, _pj_c = 0, _pj_a = util.range(6), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      objs6.push(new visual.ImageStim({"win": psychoJS.window, "name": `obj${(i + 1)}`, "image": IMG_PATHS[i], "pos": [0, 0], "size": OBJ_SIZE}));
  }
  
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
    // keep track of which components have finished
    instComponents = [];
    instComponents.push(inst_text_2);
    instComponents.push(inst_cont);
    instComponents.push(inst_mouse);
    
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
    
    // *inst_text_2* updates
    if (t >= 0.0 && inst_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_text_2.tStart = t;  // (not accounting for frame time here)
      inst_text_2.frameNStart = frameN;  // exact frame index
      
      inst_text_2.setAutoDraw(true);
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
      trialList: 'conditions.csv',
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
var visible;
var visible_t;
var n_omissions;
var n_commissions;
var correct_choices;
var idxs;
var correct_boxes;
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
    visible = [];
    visible_t = [];
    n_omissions = [];
    n_commissions = [];
    correct_choices = [];
    for (var i, _pj_c = 0, _pj_a = util.range(N_BOXES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        objs.push(null);
        visible.push(false);
        visible_t.push(null);
        n_omissions.push(0);
        n_commissions.push(0);
        correct_choices.push(null);
        boxes[i].autoDraw = true;
    }
    if (RANDOMIZE_POSITIONS) {
        util.shuffle(idxs8);
        idxs = idxs8.slice(0, n_fruits);
    } else {
        idxs = OBJ_POS[trial_name];
    }
    if (RANDOMIZE_FRUITS) {
        util.shuffle(objs6);
    }
    correct_boxes = [];
    for (var i, _pj_c = 0, _pj_a = util.range(n_fruits), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        objs[idxs[i]] = objs6[i];
        objs[idxs[i]].pos = BOX_POS[idxs[i]];
        correct_boxes.push(`box${(idxs[i] + 1)}`);
        correct_choices[idxs[i]] = objs6[i].name;
    }
    correct_boxes.sort();
    for (var i, _pj_c = 0, _pj_a = util.range(N_BOXES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        if ((objs[i] === null)) {
            objs[i] = new visual.ImageStim({"win": psychoJS.window, "name": `blank${(i + 1)}`, "image": "imgs/empty-box.png", "pos": BOX_POS[i], "size": BLANK_SIZE});
        }
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


var _pj;
function part0RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'part0'-------
    // get current time
    t = part0Clock.getTime();
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
    if ((t <= reveal_seconds)) {
        for (var obj, _pj_c = 0, _pj_a = objs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            obj = _pj_a[_pj_c];
            if (_pj.in_es6("obj", obj.name)) {
                obj.draw();
            }
        }
    } else {
        continueRoutine = false;
    }
    
    
    // *text0* updates
    if (t >= 0.0 && text0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text0.tStart = t;  // (not accounting for frame time here)
      text0.frameNStart = frameN;  // exact frame index
      
      text0.setAutoDraw(true);
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
    // the Routine "part0" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var DEBUG;
var OBJ_DURATION;
var BLANK_DURATION;
var SKIP_PART_1;
var clicked_boxes;
var click_times;
var first_click;
var update_time_elapsed;
var obj_count;
var task_time_start;
var task_time_elapsed;
var found_count;
var found_fruits;
var fruit_pos;
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
    DEBUG = true;
    OBJ_DURATION = (DEBUG ? 1.0 : 3.0);
    BLANK_DURATION = OBJ_DURATION;
    SKIP_PART_1 = true;
    clicked_boxes = [];
    click_times = [];
    first_click = true;
    update_time_elapsed = false;
    obj_count = 0;
    task_time_start = null;
    task_time_elapsed = 0.0;
    found_count = 0;
    found_fruits = [];
    fruit_pos = FRUIT_POS;
    if (SKIP_PART_1) {
        for (var obj, _pj_c = 0, _pj_a = objs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            obj = _pj_a[_pj_c];
            if ((! _pj.in_es6("blank", obj.name))) {
                found_fruits.push(obj);
                found_fruits.slice((- 1))[0].pos = fruit_pos[found_count];
                found_fruits.slice((- 1))[0].autoDraw = true;
                found_count += 1;
            }
        }
        continueRoutine = false;
    }
    highlighter = new visual.ImageStim({"win": psychoJS.window, "name": "highlighter", "image": "imgs/box.png", "pos": BOX_POS[0], "size": BOX_SIZE, "opacity": 0.5});
    
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
                found_fruits.slice((- 1))[0].pos = FRUIT_POS[found_count];
                found_fruits.slice((- 1))[0].autoDraw = true;
                found_count += 1;
                objs[i] = new visual.ImageStim({"win": psychoJS.window, "name": `${objs[i].name}_blank`, "image": "imgs/empty-box.png", "pos": BOX_POS[i], "size": BLANK_SIZE});
            }
            visible[i] = false;
        }
    }
    if (((obj_count >= n_fruits) && (util.sum(visible) <= 0))) {
        continueRoutine = false;
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


var total_errors;
function part1RoutineEnd() {
  return async function () {
    //------Ending Routine 'part1'-------
    for (const thisComponent of part1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
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
    }
    highlighter.size = [0, 0];
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "part1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var CONT_BUTTON_SIZE;
var DRAGGING;
var integerPart;
var decimalPart;
var contents;
var clicked_obj;
var fruits_left;
var show_continue;
var first_click_time;
var snapped;
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
    CONT_BUTTON_SIZE = [0.32, 0.112];
    DRAGGING = false;
    integerPart = null;
    decimalPart = null;
    contents = [null, null, null, null, null, null, null, null];
    clicked_obj = null;
    fruits_left = n_fruits;
    show_continue = false;
    first_click = true;
    first_click_time = 0;
    function _snapped(clicked_obj, box, thresh2 = (UNIT * UNIT)) {
        var bx, by, dx, dy, ox, oy;
        [ox, oy] = clicked_obj.pos;
        [bx, by] = box.pos;
        dx = (ox - bx);
        dy = (oy - by);
        if ((((dx * dx) < thresh2) && ((dy * dy) < thresh2))) {
            clicked_obj.pos = box.pos;
            return true;
        }
        return false;
    }
    snapped = _snapped;
    
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
    
            // add-on: pad(n: number, width: number): string
            function pad(n, width) {
                width = width || 2;
                integerPart = Number.parseInt(n);
                decimalPart = (n+'').match(/\.[0-9]*/);
                if (!decimalPart)
                    decimalPart = '';
                return (integerPart+'').padStart(width,'0') + decimalPart;
            }
    
            if ((fruits_left > 0)) {
        time_since_start = t;
        time_since_first_click = (first_click ? 0 : (t - first_click_time));
    }
    debug2.text = `time_since_start = ${pad(Number.parseFloat(time_since_start).toPrecision(3), 1)}
    time_since_first_click = ${pad(Number.parseFloat(time_since_first_click).toPrecision(3), 1)}
    fruits_left = ${fruits_left}
    contents = ${contents}`
    ;
    if ((fruits_left < 1)) {
        cont2.size = CONT_BUTTON_SIZE;
    } else {
        cont2.size = [0, 0];
    }
    if ((! DRAGGING)) {
        for (var found_fruit, _pj_c = 0, _pj_a = found_fruits, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            found_fruit = _pj_a[_pj_c];
            if (mouse2.isPressedIn(found_fruit)) {
                if (first_click) {
                    first_click_time = t;
                    first_click = false;
                }
                clicked_obj = found_fruit;
                for (var i, _pj_f = 0, _pj_d = util.range(8), _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
                    i = _pj_d[_pj_f];
                    if ((contents[i] === clicked_obj.name)) {
                        contents[i] = null;
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
            for (var i, _pj_c = 0, _pj_a = util.range(8), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                i = _pj_a[_pj_c];
                if (snapped(clicked_obj, boxes[i])) {
                    contents[i] = clicked_obj.name;
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
    psychoJS.experiment.addData("choices", contents);
    psychoJS.experiment.addData("correct_choices", correct_choices);
    errors = 0;
    for (var i, _pj_c = 0, _pj_a = util.range(contents.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        if ((contents[i] !== correct_choices[i])) {
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
