/************************* 
 * Dayandnightcards Test *
 *************************/


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
    {'name': 'sequences/rule-2.csv', 'path': 'sequences/rule-2.csv'},
    {'name': 'sequences/practice-2.csv', 'path': 'sequences/practice-2.csv'},
    {'name': 'sequences/rule-3.csv', 'path': 'sequences/rule-3.csv'},
    {'name': 'imgs/night-redline-box.png', 'path': 'imgs/night-redline-box.png'},
    {'name': 'imgs/day-redline-box.png', 'path': 'imgs/day-redline-box.png'},
    {'name': 'sequences/practice-3.csv', 'path': 'sequences/practice-3.csv'},
    {'name': 'imgs/day-box.png', 'path': 'imgs/day-box.png'},
    {'name': 'imgs/night-redline.png', 'path': 'imgs/night-redline.png'},
    {'name': 'imgs/night-box.png', 'path': 'imgs/night-box.png'},
    {'name': 'imgs/deck.png', 'path': 'imgs/deck.png'},
    {'name': 'sequences/rule-1.csv', 'path': 'sequences/rule-1.csv'},
    {'name': 'imgs/day.png', 'path': 'imgs/day.png'},
    {'name': 'imgs/day-redline.png', 'path': 'imgs/day-redline.png'},
    {'name': 'imgs/night.png', 'path': 'imgs/night.png'},
    {'name': 'sequences/practice-1.csv', 'path': 'sequences/practice-1.csv'},
    {'name': 'sequences/blocks.csv', 'path': 'sequences/blocks.csv'}
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
var BOX_SIZE;
var PICTURE_DELAY;
var FEEDBACK_DELAY;
var terminate_experiment;
var practice_passed;
var practice_names;
var cumulative_time;
var snapped;
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
  BOX_SIZE = [0.3375, 0.2775];
  PICTURE_DELAY = 0.1;
  FEEDBACK_DELAY = 0.5;
  terminate_experiment = false;
  practice_passed = false;
  practice_names = ["Practice 1", "Practice 2", "Practice 3"];
  cumulative_time = 0.0;
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
    blocks.forEach(function() {
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
    });
    
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
    trials.forEach(function() {
      const snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
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


async function blocksLoopEnd() {
  psychoJS.experiment.removeLoop(blocks);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var score;
var day_box;
var night_box;
var card_stack;
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
    score = 0;
    day_box = new visual.ImageStim({"win": psychoJS.window, "name": "day_box", "image": dayBox, "pos": [(- 0.4), 0.15], "size": BOX_SIZE});
    day_box.autoDraw = true;
    night_box = new visual.ImageStim({"win": psychoJS.window, "name": "night_box", "image": nightBox, "pos": [0.4, 0.15], "size": BOX_SIZE});
    night_box.autoDraw = true;
    card_stack = new visual.ImageStim({"win": psychoJS.window, "name": "card_stack", "image": `imgs/deck.png`, "pos": [0, (- 0.3)], "size": DECK_SIZE});
    card_stack.autoDraw = true;
    
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
    if (terminate_experiment) {
        continueRoutine = false;
    }
    if (practice_passed) {
        continueRoutine = false;
    } else {
        continueRoutine = true;
    }
    drag_in_process = false;
    clicked_object = null;
    lock_card_stack = false;
    draggable_object = null;
    picture_delay_start = 0.0;
    feedback_delay_start = null;
    choice = null;
    correct = null;
    trial_time = null;
    card = new visual.ImageStim({"win": psychoJS.window, "name": `${stimulus}`, "image": `imgs/${stimulus}.png`, "pos": [0.011, (- 0.309)], "size": [0, 0]});
    
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
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var _pj;
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
        if (_pj.in_es6(blockName, practice_names)) {
            debug.text += `
    score = ${score}`
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
        if (((t - feedback_delay_start) > FEEDBACK_DELAY)) {
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
                    feedback.text = "Wrong!";
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
    if ((showFeedback) && feedback.status === PsychoJS.Status.NOT_STARTED) {
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


function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    trial_evalComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    trial_evalComponents.forEach( function(thisComponent) {
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


function trial_evalRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial_eval'-------
    trial_evalComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
