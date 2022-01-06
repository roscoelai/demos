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
    {'name': 'imgs/continue.png', 'path': 'imgs/continue.png'},
    {'name': 'sequences/practice-2.csv', 'path': 'sequences/practice-2.csv'},
    {'name': 'imgs/day.png', 'path': 'imgs/day.png'},
    {'name': 'sequences/practice-1.csv', 'path': 'sequences/practice-1.csv'},
    {'name': 'imgs/deck.png', 'path': 'imgs/deck.png'},
    {'name': 'imgs/day-redline.png', 'path': 'imgs/day-redline.png'},
    {'name': 'imgs/night-redline.png', 'path': 'imgs/night-redline.png'},
    {'name': 'sequences/practice-3.csv', 'path': 'sequences/practice-3.csv'},
    {'name': 'sequences/rule-1.csv', 'path': 'sequences/rule-1.csv'},
    {'name': 'sequences/rule-3.csv', 'path': 'sequences/rule-3.csv'},
    {'name': 'imgs/night-box.png', 'path': 'imgs/night-box.png'},
    {'name': 'sequences/rule-2.csv', 'path': 'sequences/rule-2.csv'},
    {'name': 'imgs/day-box.png', 'path': 'imgs/day-box.png'},
    {'name': 'sequences/blocks.csv', 'path': 'sequences/blocks.csv'},
    {'name': 'imgs/night.png', 'path': 'imgs/night.png'}
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


var gateClock;
var SHOW_DEBUG;
var CARD_SIZE;
var DECK_SIZE;
var CONTINUE_SIZE;
var BOX_SIZE;
var NEW_CARD_POS;
var PICTURE_DELAY;
var FEEDBACK_DELAY_CORRECT;
var FEEDBACK_DELAY_INCORRECT;
var terminate_experiment;
var practice_passed;
var practice_names;
var cumulative_time;
var day_box;
var night_box;
var card_stack;
var snapped;
var gateText;
var gateReady;
var gateCont;
var gateMouse;
var trialClock;
var mouse;
var header;
var feedback;
var debug;
var trial_evalClock;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "gate"
  gateClock = new util.Clock();
  SHOW_DEBUG = true;
  CARD_SIZE = [0.18, 0.26];
  DECK_SIZE = [0.2, 0.28];
  CONTINUE_SIZE = [0.228, 0.1];
  BOX_SIZE = [0.3375, 0.2775];
  NEW_CARD_POS = [0.011, (- 0.309)];
  PICTURE_DELAY = 0.1;
  FEEDBACK_DELAY_CORRECT = 0.5;
  FEEDBACK_DELAY_INCORRECT = 1.0;
  terminate_experiment = false;
  practice_passed = false;
  practice_names = ["Practice 1", "Practice 2", "Practice 3"];
  cumulative_time = 0.0;
  day_box = new visual.ImageStim({"win": psychoJS.window, "name": "day_box", "image": "imgs/day-box.png", "pos": [(- 0.4), 0.15], "size": [0, 0]});
  night_box = new visual.ImageStim({"win": psychoJS.window, "name": "night_box", "image": "imgs/night-box.png", "pos": [0.4, 0.15], "size": [0, 0]});
  card_stack = new visual.ImageStim({"win": psychoJS.window, "name": "card_stack", "image": "imgs/deck.png", "pos": [0, (- 0.3)], "size": [0, 0]});
  day_box.autoDraw = true;
  night_box.autoDraw = true;
  card_stack.autoDraw = true;
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
  
  gateText = new visual.TextStim({
    win: psychoJS.window,
    name: 'gateText',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  gateReady = new visual.TextStim({
    win: psychoJS.window,
    name: 'gateReady',
    text: 'Ready?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  gateCont = new visual.ImageStim({
    win : psychoJS.window,
    name : 'gateCont', units : undefined, 
    image : 'imgs/continue.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.4)], size : CONTINUE_SIZE,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  gateMouse = new core.Mouse({
    win: psychoJS.window,
  });
  gateMouse.mouseClock = new util.Clock();
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  header = new visual.TextStim({
    win: psychoJS.window,
    name: 'header',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.05)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  debug = new visual.TextStim({
    win: psychoJS.window,
    name: 'debug',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, 0.4], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "trial_eval"
  trial_evalClock = new util.Clock();
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
      blocksLoopScheduler.add(gateRoutineBegin(snapshot));
      blocksLoopScheduler.add(gateRoutineEachFrame());
      blocksLoopScheduler.add(gateRoutineEnd());
      const trialsLoopScheduler = new Scheduler(psychoJS);
      blocksLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      blocksLoopScheduler.add(trialsLoopScheduler);
      blocksLoopScheduler.add(trialsLoopEnd);
      blocksLoopScheduler.add(trial_evalRoutineBegin(snapshot));
      blocksLoopScheduler.add(trial_evalRoutineEachFrame());
      blocksLoopScheduler.add(trial_evalRoutineEnd());
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
var show_feedback;
var score;
var gotValidClick;
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
        continueRoutine = true;
    }
    day_box.size = [0, 0];
    night_box.size = [0, 0];
    card_stack.size = [0, 0];
    show_feedback = (isPractice === 1);
    score = 0;
    
    gateText.setText(blockName);
    // setup some python lists for storing info about the gateMouse
    gateMouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    gateComponents = [];
    gateComponents.push(gateText);
    gateComponents.push(gateReady);
    gateComponents.push(gateCont);
    gateComponents.push(gateMouse);
    
    for (const thisComponent of gateComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function gateRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'gate'-------
    // get current time
    t = gateClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *gateText* updates
    if (t >= 0.0 && gateText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gateText.tStart = t;  // (not accounting for frame time here)
      gateText.frameNStart = frameN;  // exact frame index
      
      gateText.setAutoDraw(true);
    }

    
    // *gateReady* updates
    if (t >= 0.0 && gateReady.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gateReady.tStart = t;  // (not accounting for frame time here)
      gateReady.frameNStart = frameN;  // exact frame index
      
      gateReady.setAutoDraw(true);
    }

    
    // *gateCont* updates
    if (t >= 0.0 && gateCont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gateCont.tStart = t;  // (not accounting for frame time here)
      gateCont.frameNStart = frameN;  // exact frame index
      
      gateCont.setAutoDraw(true);
    }

    // *gateMouse* updates
    if (t >= 0.0 && gateMouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gateMouse.tStart = t;  // (not accounting for frame time here)
      gateMouse.frameNStart = frameN;  // exact frame index
      
      gateMouse.status = PsychoJS.Status.STARTED;
      gateMouse.mouseClock.reset();
      prevButtonState = gateMouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (gateMouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = gateMouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [gateCont]) {
            if (obj.contains(gateMouse)) {
              gotValidClick = true;
              gateMouse.clicked_name.push(obj.name)
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
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "gate" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var drag_in_process;
var clicked_object;
var lock_card_stack;
var draggable_object;
var picture_delay_start;
var feedback_delay_start;
var choice;
var correct;
var trial_time;
var card;
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
    } else {
        continueRoutine = true;
    }
    day_box.size = BOX_SIZE;
    night_box.size = BOX_SIZE;
    card_stack.size = DECK_SIZE;
    drag_in_process = false;
    clicked_object = null;
    lock_card_stack = false;
    draggable_object = null;
    picture_delay_start = 0.0;
    feedback_delay_start = null;
    choice = null;
    correct = null;
    trial_time = null;
    card = new visual.ImageStim({"win": psychoJS.window, "name": `${stimulus}`, "image": `imgs/${stimulus}.png`, "pos": NEW_CARD_POS, "size": [0, 0]});
    
    // setup some python lists for storing info about the mouse
    gotValidClick = false; // until a click is received
    header.setText(blockName);
    feedback.setText('');
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(mouse);
    trialComponents.push(header);
    trialComponents.push(feedback);
    trialComponents.push(debug);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var feedback_delay;
function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
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
    if (SHOW_DEBUG) {
        debug.text = `tryNumber = ${tryNumber}`;
        debug.text = `
    trial = ${trial}`
    ;
        if (_pj.in_es6(blockName, practice_names)) {
            debug.text += `
    score = ${score} (out of ${maxScore})`
    ;
        }
        debug.text += `
    globalClock = ${round(globalClock.getTime(), 3)}`
    ;
        debug.text += `
    t = ${round(t, 3)}`
    ;
        if ((clicked_object !== null)) {
            debug.text += `
    clicked_object.name = ${clicked_object.name}`
    ;
            debug.text += `
    pos = (${round(clicked_object.pos[0], 3)}, ${round(clicked_object.pos[1], 3)})`
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
            if (((! lock_card_stack) && mouse.isPressedIn(card_stack))) {
                draggable_object = card;
                draggable_object.size = CARD_SIZE;
                draggable_object.autoDraw = true;
                picture_delay_start = t;
                lock_card_stack = true;
            } else {
                if (((draggable_object !== null) && (! drag_in_process))) {
                    if (mouse.isPressedIn(draggable_object)) {
                        clicked_object = draggable_object;
                        drag_in_process = true;
                    }
                }
            }
        }
    }
    if ((util.sum(mouse.getPressed()) > 0)) {
        if (drag_in_process) {
            clicked_object.pos = mouse.getPos();
        }
    } else {
        drag_in_process = false;
        if ((clicked_object !== null)) {
            if (snapped(clicked_object, day_box)) {
                choice = "day_box";
                clicked_object.size = [0, 0];
            } else {
                if (snapped(clicked_object, night_box)) {
                    choice = "night_box";
                    clicked_object.size = [0, 0];
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
            clicked_object = null;
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
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trial_evalComponents;
function trial_evalRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial_eval'-------
    t = 0;
    trial_evalClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    trial_evalComponents = [];
    
    for (const thisComponent of trial_evalComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_evalRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial_eval'-------
    // get current time
    t = trial_evalClock.getTime();
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
    for (const thisComponent of trial_evalComponents)
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


function trial_evalRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial_eval'-------
    for (const thisComponent of trial_evalComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    if ((tryNumber === 3)) {
        if (((! practice_passed) && (score < maxScore))) {
            terminate_experiment = true;
        }
        practice_passed = false;
    } else {
        if ((_pj.in_es6(blockName, practice_names) && (score === maxScore))) {
            practice_passed = true;
        }
    }
    
    // the Routine "trial_eval" was not non-slip safe, so reset the non-slip timer
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
