/****************** 
 * Nbacknogo Test *
 ******************/


// store info about the experiment session:
let expName = 'nBackNogo';  // from the Builder filename that created this script
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
flowScheduler.add(task_rem1RoutineBegin());
flowScheduler.add(task_rem1RoutineEachFrame());
flowScheduler.add(task_rem1RoutineEnd());
flowScheduler.add(task_rem2RoutineBegin());
flowScheduler.add(task_rem2RoutineEachFrame());
flowScheduler.add(task_rem2RoutineEnd());
const task_blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(task_blocksLoopBegin(task_blocksLoopScheduler));
flowScheduler.add(task_blocksLoopScheduler);
flowScheduler.add(task_blocksLoopEnd);
flowScheduler.add(very_endRoutineBegin());
flowScheduler.add(very_endRoutineEachFrame());
flowScheduler.add(very_endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'sequences/block-1-of-7-control.csv', 'path': 'sequences/block-1-of-7-control.csv'},
    {'name': 'sequences/block-6-of-7-2back.csv', 'path': 'sequences/block-6-of-7-2back.csv'},
    {'name': 'sequences/block-3-of-7-control.csv', 'path': 'sequences/block-3-of-7-control.csv'},
    {'name': 'sequences/blocks.csv', 'path': 'sequences/blocks.csv'},
    {'name': 'sequences/block-7-of-7-control.csv', 'path': 'sequences/block-7-of-7-control.csv'},
    {'name': 'sequences/block-5-of-7-control.csv', 'path': 'sequences/block-5-of-7-control.csv'},
    {'name': 'sequences/block-4-of-7-2back.csv', 'path': 'sequences/block-4-of-7-2back.csv'},
    {'name': 'sequences/block-2-of-7-2back.csv', 'path': 'sequences/block-2-of-7-2back.csv'}
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


var task_rem1Clock;
var tr1Body;
var tr1Resp;
var task_rem2Clock;
var tr2Body;
var tr2Resp;
var task_restClock;
var restFix;
var restInstr;
var task_trialClock;
var trialStim;
var trialDelay;
var trialResp;
var trialDebug;
var very_endClock;
var veFix;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "task_rem1"
  task_rem1Clock = new util.Clock();
  tr1Body = new visual.TextStim({
    win: psychoJS.window,
    name: 'tr1Body',
    text: 'Reminder:\n\nThis scan consists of Control and 2-Back periods. In the Control periods, the number 9 is the target. In the 2-Back periods, any number that matches the number presented two numbers back is the target.\n\nPress L for target numbers.\nPress A for non-target numbers.\nDo not press anything for 0.\n\nPress any key to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  tr1Resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "task_rem2"
  task_rem2Clock = new util.Clock();
  tr2Body = new visual.TextStim({
    win: psychoJS.window,
    name: 'tr2Body',
    text: 'Place your left index finger on A \nand right index finger on L.\n\nWait for the tester to start the scan.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  tr2Resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "task_rest"
  task_restClock = new util.Clock();
  restFix = new visual.TextStim({
    win: psychoJS.window,
    name: 'restFix',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  restInstr = new visual.TextStim({
    win: psychoJS.window,
    name: 'restInstr',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "task_trial"
  task_trialClock = new util.Clock();
  trialStim = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialStim',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  trialDelay = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialDelay',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  trialResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  trialDebug = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialDebug',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, 0.4], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "very_end"
  very_endClock = new util.Clock();
  veFix = new visual.TextStim({
    win: psychoJS.window,
    name: 'veFix',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _tr1Resp_allKeys;
var task_rem1Components;
function task_rem1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'task_rem1'-------
    t = 0;
    task_rem1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    tr1Resp.keys = undefined;
    tr1Resp.rt = undefined;
    _tr1Resp_allKeys = [];
    // keep track of which components have finished
    task_rem1Components = [];
    task_rem1Components.push(tr1Body);
    task_rem1Components.push(tr1Resp);
    
    task_rem1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function task_rem1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'task_rem1'-------
    // get current time
    t = task_rem1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *tr1Body* updates
    if (t >= 0.0 && tr1Body.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tr1Body.tStart = t;  // (not accounting for frame time here)
      tr1Body.frameNStart = frameN;  // exact frame index
      
      tr1Body.setAutoDraw(true);
    }

    
    // *tr1Resp* updates
    if (t >= 0.0 && tr1Resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tr1Resp.tStart = t;  // (not accounting for frame time here)
      tr1Resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      tr1Resp.clock.reset();
      tr1Resp.start();
    }

    if (tr1Resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = tr1Resp.getKeys({keyList: [], waitRelease: false});
      _tr1Resp_allKeys = _tr1Resp_allKeys.concat(theseKeys);
      if (_tr1Resp_allKeys.length > 0) {
        tr1Resp.keys = _tr1Resp_allKeys[_tr1Resp_allKeys.length - 1].name;  // just the last key pressed
        tr1Resp.rt = _tr1Resp_allKeys[_tr1Resp_allKeys.length - 1].rt;
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
    task_rem1Components.forEach( function(thisComponent) {
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


function task_rem1RoutineEnd() {
  return async function () {
    //------Ending Routine 'task_rem1'-------
    task_rem1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    tr1Resp.stop();
    // the Routine "task_rem1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _tr2Resp_allKeys;
var task_rem2Components;
function task_rem2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'task_rem2'-------
    t = 0;
    task_rem2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    tr2Resp.keys = undefined;
    tr2Resp.rt = undefined;
    _tr2Resp_allKeys = [];
    // keep track of which components have finished
    task_rem2Components = [];
    task_rem2Components.push(tr2Body);
    task_rem2Components.push(tr2Resp);
    
    task_rem2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function task_rem2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'task_rem2'-------
    // get current time
    t = task_rem2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *tr2Body* updates
    if (t >= 0.0 && tr2Body.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tr2Body.tStart = t;  // (not accounting for frame time here)
      tr2Body.frameNStart = frameN;  // exact frame index
      
      tr2Body.setAutoDraw(true);
    }

    
    // *tr2Resp* updates
    if (t >= 0.0 && tr2Resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tr2Resp.tStart = t;  // (not accounting for frame time here)
      tr2Resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      tr2Resp.clock.reset();
      tr2Resp.start();
    }

    if (tr2Resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = tr2Resp.getKeys({keyList: ['f1', 'q'], waitRelease: false});
      _tr2Resp_allKeys = _tr2Resp_allKeys.concat(theseKeys);
      if (_tr2Resp_allKeys.length > 0) {
        tr2Resp.keys = _tr2Resp_allKeys[_tr2Resp_allKeys.length - 1].name;  // just the last key pressed
        tr2Resp.rt = _tr2Resp_allKeys[_tr2Resp_allKeys.length - 1].rt;
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
    task_rem2Components.forEach( function(thisComponent) {
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


function task_rem2RoutineEnd() {
  return async function () {
    //------Ending Routine 'task_rem2'-------
    task_rem2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    tr2Resp.stop();
    // the Routine "task_rem2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var task_blocks;
var currentLoop;
function task_blocksLoopBegin(task_blocksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    task_blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'sequences/blocks.csv',
      seed: undefined, name: 'task_blocks'
    });
    psychoJS.experiment.addLoop(task_blocks); // add the loop to the experiment
    currentLoop = task_blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    task_blocks.forEach(function() {
      const snapshot = task_blocks.getSnapshot();
    
      task_blocksLoopScheduler.add(importConditions(snapshot));
      task_blocksLoopScheduler.add(task_restRoutineBegin(snapshot));
      task_blocksLoopScheduler.add(task_restRoutineEachFrame());
      task_blocksLoopScheduler.add(task_restRoutineEnd());
      const task_trialsLoopScheduler = new Scheduler(psychoJS);
      task_blocksLoopScheduler.add(task_trialsLoopBegin(task_trialsLoopScheduler, snapshot));
      task_blocksLoopScheduler.add(task_trialsLoopScheduler);
      task_blocksLoopScheduler.add(task_trialsLoopEnd);
      task_blocksLoopScheduler.add(endLoopIteration(task_blocksLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var task_trials;
function task_trialsLoopBegin(task_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    task_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: sequenceFile,
      seed: undefined, name: 'task_trials'
    });
    psychoJS.experiment.addLoop(task_trials); // add the loop to the experiment
    currentLoop = task_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    task_trials.forEach(function() {
      const snapshot = task_trials.getSnapshot();
    
      task_trialsLoopScheduler.add(importConditions(snapshot));
      task_trialsLoopScheduler.add(task_trialRoutineBegin(snapshot));
      task_trialsLoopScheduler.add(task_trialRoutineEachFrame());
      task_trialsLoopScheduler.add(task_trialRoutineEnd());
      task_trialsLoopScheduler.add(endLoopIteration(task_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function task_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(task_trials);

  return Scheduler.Event.NEXT;
}


async function task_blocksLoopEnd() {
  psychoJS.experiment.removeLoop(task_blocks);

  return Scheduler.Event.NEXT;
}


var task_restComponents;
function task_restRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'task_rest'-------
    t = 0;
    task_restClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    restInstr.setText(block);
    // keep track of which components have finished
    task_restComponents = [];
    task_restComponents.push(restFix);
    task_restComponents.push(restInstr);
    
    task_restComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function task_restRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'task_rest'-------
    // get current time
    t = task_restClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *restFix* updates
    if (t >= 0.0 && restFix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      restFix.tStart = t;  // (not accounting for frame time here)
      restFix.frameNStart = frameN;  // exact frame index
      
      restFix.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (restFix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      restFix.setAutoDraw(false);
    }
    
    // *restInstr* updates
    if (t >= 3.0 && restInstr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      restInstr.tStart = t;  // (not accounting for frame time here)
      restInstr.frameNStart = frameN;  // exact frame index
      
      restInstr.setAutoDraw(true);
    }

    frameRemains = 3.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (restInstr.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      restInstr.setAutoDraw(false);
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
    task_restComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function task_restRoutineEnd() {
  return async function () {
    //------Ending Routine 'task_rest'-------
    task_restComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _trialResp_allKeys;
var SHOW_DEBUG;
var get_key;
var uncorrected_reaction_time;
var task_trialComponents;
function task_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'task_trial'-------
    t = 0;
    task_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.500000);
    // update component parameters for each repeat
    trialStim.setText(stimulus);
    trialResp.keys = undefined;
    trialResp.rt = undefined;
    _trialResp_allKeys = [];
    SHOW_DEBUG = false;
    get_key = true;
    uncorrected_reaction_time = null;
    
    // keep track of which components have finished
    task_trialComponents = [];
    task_trialComponents.push(trialStim);
    task_trialComponents.push(trialDelay);
    task_trialComponents.push(trialResp);
    task_trialComponents.push(trialDebug);
    
    task_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var _pj;
function task_trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'task_trial'-------
    // get current time
    t = task_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *trialStim* updates
    if (t >= 0.0 && trialStim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialStim.tStart = t;  // (not accounting for frame time here)
      trialStim.frameNStart = frameN;  // exact frame index
      
      trialStim.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trialStim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trialStim.setAutoDraw(false);
    }
    
    // *trialDelay* updates
    if (t >= 1.0 && trialDelay.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialDelay.tStart = t;  // (not accounting for frame time here)
      trialDelay.frameNStart = frameN;  // exact frame index
      
      trialDelay.setAutoDraw(true);
    }

    frameRemains = 1.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trialDelay.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trialDelay.setAutoDraw(false);
    }
    
    // *trialResp* updates
    if (t >= 0.0 && trialResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialResp.tStart = t;  // (not accounting for frame time here)
      trialResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { trialResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { trialResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { trialResp.clearEvents(); });
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trialResp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trialResp.status = PsychoJS.Status.FINISHED;
  }

    if (trialResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = trialResp.getKeys({keyList: ['a', 'l'], waitRelease: false});
      _trialResp_allKeys = _trialResp_allKeys.concat(theseKeys);
      if (_trialResp_allKeys.length > 0) {
        trialResp.keys = _trialResp_allKeys[0].name;  // just the first key pressed
        trialResp.rt = _trialResp_allKeys[0].rt;
        // was this correct?
        if (trialResp.keys == corrAns) {
            trialResp.corr = 1;
        } else {
            trialResp.corr = 0;
        }
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
    if (SHOW_DEBUG) {
        trialDebug.text = `trialResp.keys = ${trialResp.keys}`;
        trialDebug.text += `
    t = ${round(t, 3)}`
    ;
        if ((uncorrected_reaction_time !== null)) {
            trialDebug.text += `
    uncorrected_reaction_time = ${round(uncorrected_reaction_time, 3)}`
    ;
        }
    }
    if ((get_key && _pj.in_es6(trialResp.keys, ["a", "l"]))) {
        uncorrected_reaction_time = t;
        get_key = false;
    }
    
    
    // *trialDebug* updates
    if (t >= 0.0 && trialDebug.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialDebug.tStart = t;  // (not accounting for frame time here)
      trialDebug.frameNStart = frameN;  // exact frame index
      
      trialDebug.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trialDebug.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trialDebug.setAutoDraw(false);
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
    task_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function task_trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'task_trial'-------
    task_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (trialResp.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         trialResp.corr = 1;  // correct non-response
      } else {
         trialResp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('trialResp.keys', trialResp.keys);
    psychoJS.experiment.addData('trialResp.corr', trialResp.corr);
    if (typeof trialResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('trialResp.rt', trialResp.rt);
        }
    
    trialResp.stop();
    psychoJS.experiment.addData("uncorrected_reaction_time", uncorrected_reaction_time);
    
    return Scheduler.Event.NEXT;
  };
}


var very_endComponents;
function very_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'very_end'-------
    t = 0;
    very_endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    very_endComponents = [];
    very_endComponents.push(veFix);
    
    very_endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function very_endRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'very_end'-------
    // get current time
    t = very_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *veFix* updates
    if (t >= 0.0 && veFix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      veFix.tStart = t;  // (not accounting for frame time here)
      veFix.frameNStart = frameN;  // exact frame index
      
      veFix.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (veFix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      veFix.setAutoDraw(false);
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
    very_endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function very_endRoutineEnd() {
  return async function () {
    //------Ending Routine 'very_end'-------
    very_endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
