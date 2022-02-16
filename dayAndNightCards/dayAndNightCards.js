/************************* 
 * Dayandnightcards Test *
 *************************/

import { core, data, sound, util, visual } from '../lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'dayAndNightCards';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'use_audio [y/n]': 'y', 'debug [y/n]': 'y'};

// Start code blocks for 'Before Experiment'

function within_box(obj, box) {
    /*
    Determine if object is within box
    - Squared difference in x (and y) coordinates
    should be less than the square of half the
    box width (and height)
    - That would mean the center of the object is
    within the box boundaries
    */
    var box_h, box_w, box_x, box_y, dx, dy, hh, hw, obj_x, obj_y;
    [obj_x, obj_y] = obj.pos;
    [box_x, box_y] = box.pos;
    [box_w, box_h] = box.size;
    [dx, dy] = [(obj_x - box_x), (obj_y - box_y)];
    [hw, hh] = [(box_w / 2), (box_h / 2)];
    return (((dx * dx) < (hw * hw)) && ((dy * dy) < (hh * hh)));
}

function snapped(obj1, obj2, func = within_box) {
    /*
    Determine if obj1 snapped to center of obj2
    - Check if obj1 is 'near' obj2, based on func
    - If yes, set the obj1's position to be
    equal to obj2's position and return True
    - Otherwise, do nothing and return False
    */
    if (func(obj1, obj2)) {
        obj1.pos = obj2.pos;
        return true;
    }
    return false;
}

function hide(obj) {
    obj.size = [0, 0];
    obj.autoDraw = false;
}

function unhide(obj, size) {
    obj.size = size;
    obj.autoDraw = true;
}

function make_img(name, file_path, pos = [0, 0], size = [0, 0]) {
    var img;
    [img] = [new visual.ImageStim({"win": psychoJS.window, "name": name, "image": file_path, "pos": pos, "size": size})];
    img.autoDraw = true;
    return img;
}

function make_slide(num, name = "slide", pos = [0, 0], size = SLIDE_SIZE) {
    return make_img(`${name}-${num}`, `imgs/slides/slide-${num}.png`, pos, size);
}

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
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin(blocksLoopScheduler));
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'sequences/blocks.csv', 'path': 'sequences/blocks.csv'},
    {'name': 'imgs/night.png', 'path': 'imgs/night.png'},
    {'name': 'imgs/day-redline.png', 'path': 'imgs/day-redline.png'},
    {'name': 'imgs/continue.png', 'path': 'imgs/continue.png'},
    {'name': 'imgs/day.png', 'path': 'imgs/day.png'},
    {'name': 'imgs/slides/slide-02.png', 'path': 'imgs/slides/slide-02.png'},
    {'name': 'imgs/night-box.png', 'path': 'imgs/night-box.png'},
    {'name': 'sequences/practice-3.csv', 'path': 'sequences/practice-3.csv'},
    {'name': 'sequences/rule-2.csv', 'path': 'sequences/rule-2.csv'},
    {'name': 'sequences/rule-1.csv', 'path': 'sequences/rule-1.csv'},
    {'name': 'sequences/practice-1.csv', 'path': 'sequences/practice-1.csv'},
    {'name': 'imgs/slides/slide-10.png', 'path': 'imgs/slides/slide-10.png'},
    {'name': 'imgs/slides/slide-03.png', 'path': 'imgs/slides/slide-03.png'},
    {'name': 'sequences/rule-3.csv', 'path': 'sequences/rule-3.csv'},
    {'name': 'imgs/slides/slide-07.png', 'path': 'imgs/slides/slide-07.png'},
    {'name': 'imgs/slides/slide-05.png', 'path': 'imgs/slides/slide-05.png'},
    {'name': 'imgs/night-redline.png', 'path': 'imgs/night-redline.png'},
    {'name': 'imgs/slides/slide-06.png', 'path': 'imgs/slides/slide-06.png'},
    {'name': 'sequences/practice-2.csv', 'path': 'sequences/practice-2.csv'},
    {'name': 'imgs/deck.png', 'path': 'imgs/deck.png'},
    {'name': 'imgs/day-box.png', 'path': 'imgs/day-box.png'},
    {'name': 'imgs/slides/slide-04.png', 'path': 'imgs/slides/slide-04.png'},
    {'name': 'imgs/slides/slide-08.png', 'path': 'imgs/slides/slide-08.png'},
    {'name': 'imgs/slides/slide-09.png', 'path': 'imgs/slides/slide-09.png'},
    {'name': 'imgs/slides/slide-01.png', 'path': 'imgs/slides/slide-01.png'}
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
var USE_AUDIO;
var EXIT_3_PRAC;
var SLIDE_SIZE;
var CONTINUE_SIZE;
var CONTINUE_POS;
var DECK_SIZE;
var CARD_SIZE;
var NEW_CARD_POS;
var BOX_SIZE;
var PICTURE_DELAY;
var FEEDBACK_DELAY_CORRECT;
var FEEDBACK_DELAY_INCORRECT;
var SLIDE_FILE_NUMS;
var GLOBAL_CONT;
var terminate_experiment;
var practice_passed;
var cumulative_time;
var slide;
var s1;
var s2;
var s3;
var begin1Mouse;
var begin2Clock;
var begin2Mouse;
var begin3Clock;
var begin3Mouse;
var gateClock;
var DRAG_MOUSE;
var DAY_BOX;
var NIGHT_BOX;
var CARD_STACK;
var trialClock;
var header;
var feedback;
var debug;
var trialsEndClock;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "begin1"
  begin1Clock = new util.Clock();
  SHOW_DEBUG = ((expInfo["debug [y/n]"][0] === "y") || (expInfo["debug [y/n]"][0] === "Y"));
  USE_AUDIO = ((expInfo["use_audio [y/n]"][0] === "y") || (expInfo["use_audio [y/n]"][0] === "Y"));
  EXIT_3_PRAC = false;
  SLIDE_SIZE = [1.0, 0.562438];
  CONTINUE_SIZE = [0.228, 0.1];
  CONTINUE_POS = [0, (- 0.4)];
  DECK_SIZE = [0.2, 0.28];
  CARD_SIZE = [0.18, 0.26];
  NEW_CARD_POS = [0.011, (- 0.309)];
  BOX_SIZE = [0.3375, 0.2775];
  PICTURE_DELAY = 0.1;
  FEEDBACK_DELAY_CORRECT = 0.5;
  FEEDBACK_DELAY_INCORRECT = 1.0;
  SLIDE_FILE_NUMS = {"1": ["01", "02", "03"], "2": ["NA", "NA", "03"], "3": ["NA", "NA", "03"], "4": ["NA", "NA", "04"], "5": ["05", "NA", "06"], "6": ["NA", "NA", "06"], "7": ["NA", "NA", "06"], "8": ["NA", "NA", "07"], "9": ["08", "NA", "09"], "10": ["NA", "NA", "09"], "11": ["NA", "NA", "09"], "12": ["NA", "NA", "10"]};
  GLOBAL_CONT = make_img("GLOBAL_CONT", "imgs/continue.png", CONTINUE_POS, CONTINUE_SIZE);
  terminate_experiment = false;
  practice_passed = false;
  cumulative_time = 0.0;
  slide = null;
  s1 = null;
  s2 = null;
  s3 = null;
  
  begin1Mouse = new core.Mouse({
    win: psychoJS.window,
  });
  begin1Mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "begin2"
  begin2Clock = new util.Clock();
  begin2Mouse = new core.Mouse({
    win: psychoJS.window,
  });
  begin2Mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "begin3"
  begin3Clock = new util.Clock();
  begin3Mouse = new core.Mouse({
    win: psychoJS.window,
  });
  begin3Mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "gate"
  gateClock = new util.Clock();
  DRAG_MOUSE = new core.Mouse({"win": psychoJS.window});
  DAY_BOX = make_img("day_box", "imgs/day-box.png", [(- 0.4), 0.15], [0, 0]);
  NIGHT_BOX = make_img("night_box", "imgs/night-box.png", [0.4, 0.15], [0, 0]);
  CARD_STACK = make_img("card_stack", "imgs/deck.png", [0, (- 0.3)], [0, 0]);
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  header = new visual.TextStim({
    win: psychoJS.window,
    name: 'header',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.05)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  debug = new visual.TextStim({
    win: psychoJS.window,
    name: 'debug',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, 0.4], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "trialsEnd"
  trialsEndClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var blocks;
var currentLoop;
function blocksLoopBegin(blocksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'sequences/blocks.csv',
      seed: undefined, name: 'blocks'
    });
    psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
    currentLoop = blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlock of blocks) {
      const snapshot = blocks.getSnapshot();
      blocksLoopScheduler.add(importConditions(snapshot));
      blocksLoopScheduler.add(begin1RoutineBegin(snapshot));
      blocksLoopScheduler.add(begin1RoutineEachFrame());
      blocksLoopScheduler.add(begin1RoutineEnd());
      blocksLoopScheduler.add(begin2RoutineBegin(snapshot));
      blocksLoopScheduler.add(begin2RoutineEachFrame());
      blocksLoopScheduler.add(begin2RoutineEnd());
      blocksLoopScheduler.add(begin3RoutineBegin(snapshot));
      blocksLoopScheduler.add(begin3RoutineEachFrame());
      blocksLoopScheduler.add(begin3RoutineEnd());
      blocksLoopScheduler.add(gateRoutineBegin(snapshot));
      blocksLoopScheduler.add(gateRoutineEachFrame());
      blocksLoopScheduler.add(gateRoutineEnd());
      const trialsLoopScheduler = new Scheduler(psychoJS);
      blocksLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      blocksLoopScheduler.add(trialsLoopScheduler);
      blocksLoopScheduler.add(trialsLoopEnd);
      blocksLoopScheduler.add(trialsEndRoutineBegin(snapshot));
      blocksLoopScheduler.add(trialsEndRoutineEachFrame());
      blocksLoopScheduler.add(trialsEndRoutineEnd());
      blocksLoopScheduler.add(endLoopIteration(blocksLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: fileName,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      const snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


async function blocksLoopEnd() {
  psychoJS.experiment.removeLoop(blocks);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
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
    [s1, s2, s3] = SLIDE_FILE_NUMS[block];
    if (((terminate_experiment || practice_passed) || (s1 === "NA"))) {
        continueRoutine = false;
    } else {
        slide = make_slide(s1);
        unhide(GLOBAL_CONT, CONTINUE_SIZE);
    }
    
    // setup some python lists for storing info about the begin1Mouse
    begin1Mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    begin1Components = [];
    begin1Components.push(begin1Mouse);
    
    for (const thisComponent of begin1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function begin1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'begin1'-------
    // get current time
    t = begin1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *begin1Mouse* updates
    if (t >= 0.0 && begin1Mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin1Mouse.tStart = t;  // (not accounting for frame time here)
      begin1Mouse.frameNStart = frameN;  // exact frame index
      
      begin1Mouse.status = PsychoJS.Status.STARTED;
      begin1Mouse.mouseClock.reset();
      prevButtonState = begin1Mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (begin1Mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = begin1Mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [GLOBAL_CONT]) {
            if (obj.contains(begin1Mouse)) {
              gotValidClick = true;
              begin1Mouse.clicked_name.push(obj.name)
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
    for (const thisComponent of begin1Components)
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


function begin1RoutineEnd() {
  return async function () {
    //------Ending Routine 'begin1'-------
    for (const thisComponent of begin1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((s1 !== "NA")) {
        hide(slide);
        hide(GLOBAL_CONT);
    }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "begin1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var begin2Components;
function begin2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'begin2'-------
    t = 0;
    begin2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (((terminate_experiment || practice_passed) || (s2 === "NA"))) {
        continueRoutine = false;
    } else {
        slide = make_slide(s2);
        unhide(GLOBAL_CONT, CONTINUE_SIZE);
    }
    
    // setup some python lists for storing info about the begin2Mouse
    begin2Mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    begin2Components = [];
    begin2Components.push(begin2Mouse);
    
    for (const thisComponent of begin2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function begin2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'begin2'-------
    // get current time
    t = begin2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *begin2Mouse* updates
    if (t >= 0.0 && begin2Mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin2Mouse.tStart = t;  // (not accounting for frame time here)
      begin2Mouse.frameNStart = frameN;  // exact frame index
      
      begin2Mouse.status = PsychoJS.Status.STARTED;
      begin2Mouse.mouseClock.reset();
      prevButtonState = begin2Mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (begin2Mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = begin2Mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [GLOBAL_CONT]) {
            if (obj.contains(begin2Mouse)) {
              gotValidClick = true;
              begin2Mouse.clicked_name.push(obj.name)
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
    for (const thisComponent of begin2Components)
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


function begin2RoutineEnd() {
  return async function () {
    //------Ending Routine 'begin2'-------
    for (const thisComponent of begin2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((s2 !== "NA")) {
        hide(slide);
        hide(GLOBAL_CONT);
    }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "begin2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var begin3Components;
function begin3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'begin3'-------
    t = 0;
    begin3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (((terminate_experiment || practice_passed) || (s3 === "NA"))) {
        continueRoutine = false;
    } else {
        slide = make_slide(s3);
        unhide(GLOBAL_CONT, CONTINUE_SIZE);
    }
    
    // setup some python lists for storing info about the begin3Mouse
    begin3Mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    begin3Components = [];
    begin3Components.push(begin3Mouse);
    
    for (const thisComponent of begin3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function begin3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'begin3'-------
    // get current time
    t = begin3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *begin3Mouse* updates
    if (t >= 0.0 && begin3Mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin3Mouse.tStart = t;  // (not accounting for frame time here)
      begin3Mouse.frameNStart = frameN;  // exact frame index
      
      begin3Mouse.status = PsychoJS.Status.STARTED;
      begin3Mouse.mouseClock.reset();
      prevButtonState = begin3Mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (begin3Mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = begin3Mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [GLOBAL_CONT]) {
            if (obj.contains(begin3Mouse)) {
              gotValidClick = true;
              begin3Mouse.clicked_name.push(obj.name)
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
    for (const thisComponent of begin3Components)
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


function begin3RoutineEnd() {
  return async function () {
    //------Ending Routine 'begin3'-------
    for (const thisComponent of begin3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((s3 !== "NA")) {
        hide(slide);
        hide(GLOBAL_CONT);
    }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "begin3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var show_feedback;
var score;
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
    if ((terminate_experiment || practice_passed)) {
        continueRoutine = false;
    } else {
        unhide(DAY_BOX, BOX_SIZE);
        unhide(NIGHT_BOX, BOX_SIZE);
        unhide(CARD_STACK, DECK_SIZE);
    }
    show_feedback = (isPractice === 1);
    score = 0;
    
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


var dormant_card;
var active_card;
var moving_card;
var drag_in_process;
var feedback_delay_start;
var picture_delay_start;
var choice;
var correct;
var trial_time;
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
    if ((terminate_experiment || practice_passed)) {
        continueRoutine = false;
    }
    dormant_card = make_img(stimulus, `imgs/${stimulus}.png`, NEW_CARD_POS, [0, 0]);
    active_card = null;
    moving_card = null;
    drag_in_process = false;
    feedback_delay_start = null;
    picture_delay_start = 0.0;
    choice = null;
    correct = null;
    trial_time = null;
    
    header.setText(blockName);
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(header);
    trialComponents.push(feedback);
    trialComponents.push(debug);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var feedback_delay;
function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (SHOW_DEBUG) {
        debug.text = `tryNumber = ${tryNumber}
    trial = ${trial} (out of ${maxScore})
    score = ${score} (out of ${maxScore})
    globalClock = ${round(globalClock.getTime(), 3)}
    t = ${round(t, 3)}`
    ;
        if ((moving_card !== null)) {
            debug.text += `
    moving_card.name = ${moving_card.name}
    pos = (${round(moving_card.pos[0], 3)}, ${round(moving_card.pos[1], 3)})`
    ;
        }
    }
    if ((feedback_delay_start !== null)) {
        feedback_delay = FEEDBACK_DELAY_CORRECT;
        if ((correct === 0)) {
            feedback_delay = FEEDBACK_DELAY_INCORRECT;
        }
        if (((t - feedback_delay_start) > feedback_delay)) {
            continueRoutine = false;
        }
    } else {
        if (((t - picture_delay_start) < PICTURE_DELAY)) {
        } else {
            if ((active_card === null)) {
                if (DRAG_MOUSE.isPressedIn(CARD_STACK)) {
                    active_card = dormant_card;
                    unhide(active_card, CARD_SIZE);
                    picture_delay_start = t;
                }
            } else {
                if ((! drag_in_process)) {
                    if (DRAG_MOUSE.isPressedIn(active_card)) {
                        moving_card = active_card;
                        drag_in_process = true;
                    }
                }
            }
        }
    }
    if ((util.sum(DRAG_MOUSE.getPressed()) > 0)) {
        if (drag_in_process) {
            moving_card.pos = DRAG_MOUSE.getPos();
        }
    } else {
        drag_in_process = false;
        if ((moving_card !== null)) {
            if (snapped(moving_card, DAY_BOX)) {
                choice = "day_box";
                hide(moving_card);
            } else {
                if (snapped(moving_card, NIGHT_BOX)) {
                    choice = "night_box";
                    hide(moving_card);
                }
            }
            if ((choice !== null)) {
                trial_time = t;
                cumulative_time += t;
                feedback_delay_start = t;
                if ((choice === corrAns)) {
                    correct = 1;
                    feedback.text = "Correct!";
                    score += 1;
                } else {
                    correct = 0;
                    feedback.text = "Let's think again";
                }
            }
            moving_card = null;
        }
    }
    
    
    // *header* updates
    if (t >= 0.0 && header.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header.tStart = t;  // (not accounting for frame time here)
      header.frameNStart = frameN;  // exact frame index
      
      header.setAutoDraw(true);
    }

    
    // *feedback* updates
    if ((show_feedback) && feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback.tStart = t;  // (not accounting for frame time here)
      feedback.frameNStart = frameN;  // exact frame index
      
      feedback.setAutoDraw(true);
    }

    
    // *debug* updates
    if ((SHOW_DEBUG) && debug.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      debug.tStart = t;  // (not accounting for frame time here)
      debug.frameNStart = frameN;  // exact frame index
      
      debug.setAutoDraw(true);
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
    for (const thisComponent of trialComponents)
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


function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    feedback.text = "";
    psychoJS.experiment.addData("choice", choice);
    psychoJS.experiment.addData("correct", correct);
    psychoJS.experiment.addData("trial_time", trial_time);
    psychoJS.experiment.addData("cumulative_time", cumulative_time);
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trialsEndComponents;
function trialsEndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trialsEnd'-------
    t = 0;
    trialsEndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    trialsEndComponents = [];
    
    for (const thisComponent of trialsEndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialsEndRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trialsEnd'-------
    // get current time
    t = trialsEndClock.getTime();
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
    for (const thisComponent of trialsEndComponents)
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


function trialsEndRoutineEnd() {
  return async function () {
    //------Ending Routine 'trialsEnd'-------
    for (const thisComponent of trialsEndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    hide(DAY_BOX);
    hide(NIGHT_BOX);
    hide(CARD_STACK);
    if ((tryNumber === 3)) {
        if (((EXIT_3_PRAC && (! practice_passed)) && (score < maxScore))) {
            terminate_experiment = true;
        }
        practice_passed = false;
    } else {
        if (((score === maxScore) && (((blockName === "Practice 1") || (blockName === "Practice 2")) || (blockName === "Practice 3")))) {
            practice_passed = true;
        }
    }
    
    // the Routine "trialsEnd" was not non-slip safe, so reset the non-slip timer
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
