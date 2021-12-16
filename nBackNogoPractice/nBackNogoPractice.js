/************************** 
 * Nbacknogopractice Test *
 **************************/

import { core, data, sound, util, visual } from '../lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'nBackNogoPractice';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('black'),
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
flowScheduler.add(first_instRoutineBegin());
flowScheduler.add(first_instRoutineEachFrame());
flowScheduler.add(first_instRoutineEnd());
const practice_blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_blocksLoopBegin(practice_blocksLoopScheduler));
flowScheduler.add(practice_blocksLoopScheduler);
flowScheduler.add(practice_blocksLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'sequences/practice-2back.csv', 'path': 'sequences/practice-2back.csv'},
    {'name': 'sequences/practice-blocks.csv', 'path': 'sequences/practice-blocks.csv'},
    {'name': 'sequences/practice-cycle-2back.csv', 'path': 'sequences/practice-cycle-2back.csv'},
    {'name': 'sequences/practice-cycle-control.csv', 'path': 'sequences/practice-cycle-control.csv'},
    {'name': 'sequences/practice-control.csv', 'path': 'sequences/practice-control.csv'}
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


var first_instClock;
var fiHead;
var fiBody;
var fiResp;
var prac_instClock;
var heads;
var bodies;
var piHead;
var piBody;
var piResp;
var prac_restClock;
var prFix;
var prInstr;
var prac_trialClock;
var ptStim;
var ptResp;
var ptFeedback;
var ptDebug;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "first_inst"
  first_instClock = new util.Clock();
  fiHead = new visual.TextStim({
    win: psychoJS.window,
    name: 'fiHead',
    text: 'Task Instructions',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  fiBody = new visual.TextStim({
    win: psychoJS.window,
    name: 'fiBody',
    text: 'Numbers from 0-9 will be shown one at a time. \n\nAmongst numbers 1-9, some numbers are targets, while others are non-targets.\n\nPress L with your right index finger when a target appears.\n\nPress A with your left index finger when a non-target appears.\n\nDo not press anything when 0 appears. \n\nThe task will alternate between Control and 2-Back periods. The target number differs in each period.\n\nPress any key to continue reading instructions.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  fiResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "prac_inst"
  prac_instClock = new util.Clock();
  heads = {"Control-only": "Control Period Instructions", "2-Back-only": "2-Back Period Instructions", "Cycle-Control": "Task Instructions"};
  bodies = {"Control-only": "The target is 9. Press L when 9 appears.\n\nNon-target is 1-8. Press A when 1-8 appears.\n\nDo no press anything when 0 appears.\n\nPress any key to practice the Control Period.", "2-Back-only": "The target is any number that matches the number presented 2 numbers back. Press L.\n\nNon-target is all other numbers, except 0. Press A.\n\nDo no press anything when 0 appears.\n\nPress any key to practice the 2-Back Period.", "Cycle-Control": "During the scan, you will not know if your response is correct, wrong or too slow. \n\nThere will be no reminders about when and what key to press. So please remember: \n- Target number for Control and 2-Back periods\n- Which key to press for target and non-target numbers\n- Do no press anything when 0 appears\n\nDuring the brain scan, there will be 4 cycles of the task. Each cycle has a Control and 2-Back Period. \n\nWe will practice 1 cycle of the task now. Press any key to start."};
  
  piHead = new visual.TextStim({
    win: psychoJS.window,
    name: 'piHead',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  piBody = new visual.TextStim({
    win: psychoJS.window,
    name: 'piBody',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  piResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "prac_rest"
  prac_restClock = new util.Clock();
  prFix = new visual.TextStim({
    win: psychoJS.window,
    name: 'prFix',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  prInstr = new visual.TextStim({
    win: psychoJS.window,
    name: 'prInstr',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "prac_trial"
  prac_trialClock = new util.Clock();
  ptStim = new visual.TextStim({
    win: psychoJS.window,
    name: 'ptStim',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  ptResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  ptFeedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'ptFeedback',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  ptDebug = new visual.TextStim({
    win: psychoJS.window,
    name: 'ptDebug',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, 0.4], height: 0.02,  wrapWidth: undefined, ori: 0.0,
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
var _fiResp_allKeys;
var first_instComponents;
function first_instRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'first_inst'-------
    t = 0;
    first_instClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    fiBody.alignText = "left";
    fiHead.bold = true;
    
    fiResp.keys = undefined;
    fiResp.rt = undefined;
    _fiResp_allKeys = [];
    // keep track of which components have finished
    first_instComponents = [];
    first_instComponents.push(fiHead);
    first_instComponents.push(fiBody);
    first_instComponents.push(fiResp);
    
    for (const thisComponent of first_instComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function first_instRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'first_inst'-------
    // get current time
    t = first_instClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fiHead* updates
    if (t >= 0.0 && fiHead.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fiHead.tStart = t;  // (not accounting for frame time here)
      fiHead.frameNStart = frameN;  // exact frame index
      
      fiHead.setAutoDraw(true);
    }

    
    // *fiBody* updates
    if (t >= 0.0 && fiBody.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fiBody.tStart = t;  // (not accounting for frame time here)
      fiBody.frameNStart = frameN;  // exact frame index
      
      fiBody.setAutoDraw(true);
    }

    
    // *fiResp* updates
    if (t >= 0.0 && fiResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fiResp.tStart = t;  // (not accounting for frame time here)
      fiResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      fiResp.clock.reset();
      fiResp.start();
    }

    if (fiResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = fiResp.getKeys({keyList: [], waitRelease: false});
      _fiResp_allKeys = _fiResp_allKeys.concat(theseKeys);
      if (_fiResp_allKeys.length > 0) {
        fiResp.keys = _fiResp_allKeys[_fiResp_allKeys.length - 1].name;  // just the last key pressed
        fiResp.rt = _fiResp_allKeys[_fiResp_allKeys.length - 1].rt;
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
    for (const thisComponent of first_instComponents)
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


function first_instRoutineEnd() {
  return async function () {
    //------Ending Routine 'first_inst'-------
    for (const thisComponent of first_instComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    fiResp.stop();
    // the Routine "first_inst" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var practice_blocks;
var currentLoop;
function practice_blocksLoopBegin(practice_blocksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'sequences/practice-blocks.csv',
      seed: undefined, name: 'practice_blocks'
    });
    psychoJS.experiment.addLoop(practice_blocks); // add the loop to the experiment
    currentLoop = practice_blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_block of practice_blocks) {
      const snapshot = practice_blocks.getSnapshot();
      practice_blocksLoopScheduler.add(importConditions(snapshot));
      practice_blocksLoopScheduler.add(prac_instRoutineBegin(snapshot));
      practice_blocksLoopScheduler.add(prac_instRoutineEachFrame());
      practice_blocksLoopScheduler.add(prac_instRoutineEnd());
      practice_blocksLoopScheduler.add(prac_restRoutineBegin(snapshot));
      practice_blocksLoopScheduler.add(prac_restRoutineEachFrame());
      practice_blocksLoopScheduler.add(prac_restRoutineEnd());
      const practice_trialsLoopScheduler = new Scheduler(psychoJS);
      practice_blocksLoopScheduler.add(practice_trialsLoopBegin(practice_trialsLoopScheduler, snapshot));
      practice_blocksLoopScheduler.add(practice_trialsLoopScheduler);
      practice_blocksLoopScheduler.add(practice_trialsLoopEnd);
      practice_blocksLoopScheduler.add(endLoopIteration(practice_blocksLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var practice_trials;
function practice_trialsLoopBegin(practice_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: sequenceFile,
      seed: undefined, name: 'practice_trials'
    });
    psychoJS.experiment.addLoop(practice_trials); // add the loop to the experiment
    currentLoop = practice_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_trial of practice_trials) {
      const snapshot = practice_trials.getSnapshot();
      practice_trialsLoopScheduler.add(importConditions(snapshot));
      practice_trialsLoopScheduler.add(prac_trialRoutineBegin(snapshot));
      practice_trialsLoopScheduler.add(prac_trialRoutineEachFrame());
      practice_trialsLoopScheduler.add(prac_trialRoutineEnd());
      practice_trialsLoopScheduler.add(endLoopIteration(practice_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(practice_trials);

  return Scheduler.Event.NEXT;
}


async function practice_blocksLoopEnd() {
  psychoJS.experiment.removeLoop(practice_blocks);

  return Scheduler.Event.NEXT;
}


var _piResp_allKeys;
var prac_instComponents;
function prac_instRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'prac_inst'-------
    t = 0;
    prac_instClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((practiceBlock !== "Cycle-2-Back")) {
        piHead.text = heads[practiceBlock];
        piHead.bold = true;
        piBody.text = bodies[practiceBlock];
        piBody.alignText = "left";
    } else {
        continueRoutine = false;
    }
    
    piResp.keys = undefined;
    piResp.rt = undefined;
    _piResp_allKeys = [];
    // keep track of which components have finished
    prac_instComponents = [];
    prac_instComponents.push(piHead);
    prac_instComponents.push(piBody);
    prac_instComponents.push(piResp);
    
    for (const thisComponent of prac_instComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function prac_instRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'prac_inst'-------
    // get current time
    t = prac_instClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *piHead* updates
    if (t >= 0.0 && piHead.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      piHead.tStart = t;  // (not accounting for frame time here)
      piHead.frameNStart = frameN;  // exact frame index
      
      piHead.setAutoDraw(true);
    }

    
    // *piBody* updates
    if (t >= 0.0 && piBody.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      piBody.tStart = t;  // (not accounting for frame time here)
      piBody.frameNStart = frameN;  // exact frame index
      
      piBody.setAutoDraw(true);
    }

    
    // *piResp* updates
    if (t >= 0.0 && piResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      piResp.tStart = t;  // (not accounting for frame time here)
      piResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      piResp.clock.reset();
      piResp.start();
    }

    if (piResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = piResp.getKeys({keyList: [], waitRelease: false});
      _piResp_allKeys = _piResp_allKeys.concat(theseKeys);
      if (_piResp_allKeys.length > 0) {
        piResp.keys = _piResp_allKeys[_piResp_allKeys.length - 1].name;  // just the last key pressed
        piResp.rt = _piResp_allKeys[_piResp_allKeys.length - 1].rt;
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
    for (const thisComponent of prac_instComponents)
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


function prac_instRoutineEnd() {
  return async function () {
    //------Ending Routine 'prac_inst'-------
    for (const thisComponent of prac_instComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    piResp.stop();
    // the Routine "prac_inst" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var prac_restComponents;
function prac_restRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'prac_rest'-------
    t = 0;
    prac_restClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    prInstr.setText(block);
    // keep track of which components have finished
    prac_restComponents = [];
    prac_restComponents.push(prFix);
    prac_restComponents.push(prInstr);
    
    for (const thisComponent of prac_restComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function prac_restRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'prac_rest'-------
    // get current time
    t = prac_restClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prFix* updates
    if (t >= 0.0 && prFix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prFix.tStart = t;  // (not accounting for frame time here)
      prFix.frameNStart = frameN;  // exact frame index
      
      prFix.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (prFix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      prFix.setAutoDraw(false);
    }
    
    // *prInstr* updates
    if (t >= 3.0 && prInstr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prInstr.tStart = t;  // (not accounting for frame time here)
      prInstr.frameNStart = frameN;  // exact frame index
      
      prInstr.setAutoDraw(true);
    }

    frameRemains = 3.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (prInstr.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      prInstr.setAutoDraw(false);
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
    for (const thisComponent of prac_restComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prac_restRoutineEnd() {
  return async function () {
    //------Ending Routine 'prac_rest'-------
    for (const thisComponent of prac_restComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _ptResp_allKeys;
var SHOW_DEBUG;
var FEEDBACK_DURATION;
var show_feedback;
var t_start;
var get_keys;
var prac_trialComponents;
function prac_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'prac_trial'-------
    t = 0;
    prac_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    ptStim.setText(stimulus);
    ptResp.keys = undefined;
    ptResp.rt = undefined;
    _ptResp_allKeys = [];
    SHOW_DEBUG = true;
    FEEDBACK_DURATION = 1.0;
    show_feedback = (showFeedback === 1);
    t_start = null;
    get_keys = true;
    ptResp.keys = null;
    
    // keep track of which components have finished
    prac_trialComponents = [];
    prac_trialComponents.push(ptStim);
    prac_trialComponents.push(ptResp);
    prac_trialComponents.push(ptFeedback);
    prac_trialComponents.push(ptDebug);
    
    for (const thisComponent of prac_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function prac_trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'prac_trial'-------
    // get current time
    t = prac_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ptStim* updates
    if (t >= 0.0 && ptStim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ptStim.tStart = t;  // (not accounting for frame time here)
      ptStim.frameNStart = frameN;  // exact frame index
      
      ptStim.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ptStim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ptStim.setAutoDraw(false);
    }
    
    // *ptResp* updates
    if ((get_keys) && ptResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ptResp.tStart = t;  // (not accounting for frame time here)
      ptResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ptResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ptResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ptResp.clearEvents(); });
    }

    if (ptResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = ptResp.getKeys({keyList: ['a', 'l'], waitRelease: false});
      _ptResp_allKeys = _ptResp_allKeys.concat(theseKeys);
      if (_ptResp_allKeys.length > 0) {
        ptResp.keys = _ptResp_allKeys[0].name;  // just the first key pressed
        ptResp.rt = _ptResp_allKeys[0].rt;
        // was this correct?
        if (ptResp.keys == corrAns) {
            ptResp.corr = 1;
        } else {
            ptResp.corr = 0;
        }
      }
    }
    
    if (SHOW_DEBUG) {
        ptDebug.text = `show_feedback = ${show_feedback}
    t = ${round(t, 3)}`
    ;
        if ((t_start !== null)) {
            ptDebug.text += `
    t_start = ${round(t_start, 3)}`
    ;
        }
        if ((ptResp.keys !== null)) {
            ptDebug.text += `
    ptResp.keys = ${ptResp.keys}`
    ;
        }
    }
    if (show_feedback) {
        if (((t_start !== null) && ((t - t_start) > FEEDBACK_DURATION))) {
            continueRoutine = false;
        }
        if (((get_keys && (ptResp.keys !== null)) && (ptResp.keys.length > 0))) {
            t_start = t;
            get_keys = false;
            ptFeedback.text = ((ptResp.keys === corrAns) ? "Correct!" : "Wrong!");
        } else {
            if ((get_keys && (t > 2.5))) {
                t_start = t;
                get_keys = false;
                ptFeedback.text = ((stimulus === 0) ? "Correct!" : "Too slow!");
            }
        }
    } else {
        ptFeedback.text = "";
        if ((t > 2.5)) {
            continueRoutine = false;
        }
    }
    
    
    // *ptFeedback* updates
    if ((show_feedback) && ptFeedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ptFeedback.tStart = t;  // (not accounting for frame time here)
      ptFeedback.frameNStart = frameN;  // exact frame index
      
      ptFeedback.setAutoDraw(true);
    }

    
    // *ptDebug* updates
    if ((SHOW_DEBUG) && ptDebug.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ptDebug.tStart = t;  // (not accounting for frame time here)
      ptDebug.frameNStart = frameN;  // exact frame index
      
      ptDebug.setAutoDraw(true);
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
    for (const thisComponent of prac_trialComponents)
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


function prac_trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'prac_trial'-------
    for (const thisComponent of prac_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (ptResp.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         ptResp.corr = 1;  // correct non-response
      } else {
         ptResp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('ptResp.keys', ptResp.keys);
    psychoJS.experiment.addData('ptResp.corr', ptResp.corr);
    if (typeof ptResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('ptResp.rt', ptResp.rt);
        }
    
    ptResp.stop();
    ptFeedback.text = "";
    
    // the Routine "prac_trial" was not non-slip safe, so reset the non-slip timer
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
