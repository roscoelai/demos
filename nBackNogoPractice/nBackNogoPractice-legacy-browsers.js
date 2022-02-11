/************************** 
 * Nbacknogopractice Test *
 **************************/


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
flowScheduler.add(terminateRoutineBegin());
flowScheduler.add(terminateRoutineEachFrame());
flowScheduler.add(terminateRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'imgs/slide-05.png', 'path': 'imgs/slide-05.png'},
    {'name': 'imgs/slide-09.png', 'path': 'imgs/slide-09.png'},
    {'name': 'imgs/slide-07.png', 'path': 'imgs/slide-07.png'},
    {'name': 'sequences/practice-4-2back.csv', 'path': 'sequences/practice-4-2back.csv'},
    {'name': 'sequences/practice-3-control.csv', 'path': 'sequences/practice-3-control.csv'},
    {'name': 'sequences/practice-cycle-control.csv', 'path': 'sequences/practice-cycle-control.csv'},
    {'name': 'sequences/practice-2-2back.csv', 'path': 'sequences/practice-2-2back.csv'},
    {'name': 'sequences/practice-cycle-2back.csv', 'path': 'sequences/practice-cycle-2back.csv'},
    {'name': 'imgs/slide-01.png', 'path': 'imgs/slide-01.png'},
    {'name': 'imgs/slide-02.png', 'path': 'imgs/slide-02.png'},
    {'name': 'sequences/practice-1-control.csv', 'path': 'sequences/practice-1-control.csv'},
    {'name': 'sequences/practice-blocks.csv', 'path': 'sequences/practice-blocks.csv'},
    {'name': 'imgs/slide-04.png', 'path': 'imgs/slide-04.png'}
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
var SHOW_DEBUG;
var FULL_SLIDE_SIZE;
var SHORT_SLIDE_SIZE;
var fiImage;
var fiResp;
var prac_instClock;
var piImage;
var piResp;
var prac_restClock;
var prFix;
var prInstr;
var prac_trialClock;
var pracStim;
var pracResp;
var pracFeedback;
var pracDebug;
var task_goodjobClock;
var tgImage;
var tgResp;
var terminateClock;
var termText;
var termResp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "first_inst"
  first_instClock = new util.Clock();
  SHOW_DEBUG = true;
  FULL_SLIDE_SIZE = [1.4, 0.7875];
  SHORT_SLIDE_SIZE = [1.4, 0.6699];
  
  fiImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fiImage', units : undefined, 
    image : 'imgs/slide-01.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : FULL_SLIDE_SIZE,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  fiResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "prac_inst"
  prac_instClock = new util.Clock();
  piImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'piImage', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
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
  pracStim = new visual.TextStim({
    win: psychoJS.window,
    name: 'pracStim',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  pracResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  pracFeedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'pracFeedback',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  pracDebug = new visual.TextStim({
    win: psychoJS.window,
    name: 'pracDebug',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "task_goodjob"
  task_goodjobClock = new util.Clock();
  tgImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'tgImage', units : undefined, 
    image : 'imgs/slide-04.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : FULL_SLIDE_SIZE,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  tgResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "terminate"
  terminateClock = new util.Clock();
  termText = new visual.TextStim({
    win: psychoJS.window,
    name: 'termText',
    text: 'Practice completed, press any key to exit.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  termResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
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
    fiResp.keys = undefined;
    fiResp.rt = undefined;
    _fiResp_allKeys = [];
    // keep track of which components have finished
    first_instComponents = [];
    first_instComponents.push(fiImage);
    first_instComponents.push(fiResp);
    
    first_instComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    
    // *fiImage* updates
    if (t >= 0.0 && fiImage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fiImage.tStart = t;  // (not accounting for frame time here)
      fiImage.frameNStart = frameN;  // exact frame index
      
      fiImage.setAutoDraw(true);
    }

    
    // *fiResp* updates
    if (t >= 0.3 && fiResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fiResp.tStart = t;  // (not accounting for frame time here)
      fiResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      fiResp.clock.reset();
      fiResp.start();
      fiResp.clearEvents();
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
    first_instComponents.forEach( function(thisComponent) {
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


function first_instRoutineEnd() {
  return async function () {
    //------Ending Routine 'first_inst'-------
    first_instComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'sequences/practice-blocks.csv',
      seed: undefined, name: 'practice_blocks'
    });
    psychoJS.experiment.addLoop(practice_blocks); // add the loop to the experiment
    currentLoop = practice_blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practice_blocks.forEach(function() {
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
      practice_blocksLoopScheduler.add(task_goodjobRoutineBegin(snapshot));
      practice_blocksLoopScheduler.add(task_goodjobRoutineEachFrame());
      practice_blocksLoopScheduler.add(task_goodjobRoutineEnd());
      practice_blocksLoopScheduler.add(endLoopIteration(practice_blocksLoopScheduler, snapshot));
    });
    
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
    practice_trials.forEach(function() {
      const snapshot = practice_trials.getSnapshot();
    
      practice_trialsLoopScheduler.add(importConditions(snapshot));
      practice_trialsLoopScheduler.add(prac_trialRoutineBegin(snapshot));
      practice_trialsLoopScheduler.add(prac_trialRoutineEachFrame());
      practice_trialsLoopScheduler.add(prac_trialRoutineEnd());
      practice_trialsLoopScheduler.add(endLoopIteration(practice_trialsLoopScheduler, snapshot));
    });
    
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


var show_feedback;
var show_goodjob;
var stim_dur;
var blank_dur;
var feedback_dur;
var resp_dur;
var max_t;
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
    show_feedback = (showFeedback === 1);
    show_goodjob = (showGoodjob === 1);
    stim_dur = stimDur;
    blank_dur = blankDur;
    feedback_dur = feedbackDur;
    resp_dur = stim_dur;
    max_t = ((resp_dur + feedback_dur) + blank_dur);
    
    piImage.setSize(FULL_SLIDE_SIZE);
    piImage.setImage(instFile);
    piResp.keys = undefined;
    piResp.rt = undefined;
    _piResp_allKeys = [];
    // keep track of which components have finished
    prac_instComponents = [];
    prac_instComponents.push(piImage);
    prac_instComponents.push(piResp);
    
    prac_instComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    if (((blockNum === 4) || (blockNum === 6))) {
        continueRoutine = false;
    }
    
    
    // *piImage* updates
    if (t >= 0.0 && piImage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      piImage.tStart = t;  // (not accounting for frame time here)
      piImage.frameNStart = frameN;  // exact frame index
      
      piImage.setAutoDraw(true);
    }

    
    // *piResp* updates
    if (t >= 0.3 && piResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      piResp.tStart = t;  // (not accounting for frame time here)
      piResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      piResp.clock.reset();
      piResp.start();
      piResp.clearEvents();
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
    prac_instComponents.forEach( function(thisComponent) {
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


function prac_instRoutineEnd() {
  return async function () {
    //------Ending Routine 'prac_inst'-------
    prac_instComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    prInstr.setText(blockName);
    // keep track of which components have finished
    prac_restComponents = [];
    prac_restComponents.push(prFix);
    prac_restComponents.push(prInstr);
    
    prac_restComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    prac_restComponents.forEach( function(thisComponent) {
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


function prac_restRoutineEnd() {
  return async function () {
    //------Ending Routine 'prac_rest'-------
    prac_restComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var raw_rt;
var is_correct;
var _pracResp_allKeys;
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
    raw_rt = null;
    is_correct = null;
    
    pracStim.setText(stimulus);
    pracResp.keys = undefined;
    pracResp.rt = undefined;
    _pracResp_allKeys = [];
    // keep track of which components have finished
    prac_trialComponents = [];
    prac_trialComponents.push(pracStim);
    prac_trialComponents.push(pracResp);
    prac_trialComponents.push(pracFeedback);
    prac_trialComponents.push(pracDebug);
    
    prac_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    if ((t > max_t)) {
        continueRoutine = false;
    }
    if ((raw_rt === null)) {
        if ((pracResp.keys && (pracResp.keys.length > 0))) {
            raw_rt = t;
            pracFeedback.text = ((pracResp.corr === 1) ? "Correct!" : "Wrong!");
            is_correct = ((pracResp.corr === 1) ? true : false);
        } else {
            if ((t > resp_dur)) {
                pracFeedback.text = ((stimulus === 0) ? "Correct!" : "Too slow!");
                is_correct = ((stimulus === 0) ? true : false);
            }
        }
    }
    if ((! show_feedback)) {
        pracFeedback.text = "";
    }
    if ((SHOW_DEBUG && ((frameN % 6) === 0))) {
        pracDebug.text = `Debug:
    blockName = ${blockName}
    stim_dur = ${stim_dur} s
    feedback_dur = ${feedback_dur} s
    blank_dur = ${blank_dur} s
    show_feedback = ${show_feedback}
    show_goodjob = ${show_goodjob}
    pracResp.keys = ${pracResp.keys}
    is_correct = ${is_correct}
    raw_rt = ${((raw_rt === null) ? null : round(raw_rt, 3))}
    t = ${round(t, 3)}`
    ;
    }
    
    
    // *pracStim* updates
    if (t >= 0.0 && pracStim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracStim.tStart = t;  // (not accounting for frame time here)
      pracStim.frameNStart = frameN;  // exact frame index
      
      pracStim.setAutoDraw(true);
    }

    frameRemains = 0.0 + stim_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pracStim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pracStim.setAutoDraw(false);
    }
    
    // *pracResp* updates
    if (t >= 0.0 && pracResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracResp.tStart = t;  // (not accounting for frame time here)
      pracResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { pracResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { pracResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { pracResp.clearEvents(); });
    }

    frameRemains = 0.0 + resp_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pracResp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pracResp.status = PsychoJS.Status.FINISHED;
  }

    if (pracResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = pracResp.getKeys({keyList: ['a', 'l'], waitRelease: false});
      _pracResp_allKeys = _pracResp_allKeys.concat(theseKeys);
      if (_pracResp_allKeys.length > 0) {
        pracResp.keys = _pracResp_allKeys[0].name;  // just the first key pressed
        pracResp.rt = _pracResp_allKeys[0].rt;
        // was this correct?
        if (pracResp.keys == corrAns) {
            pracResp.corr = 1;
        } else {
            pracResp.corr = 0;
        }
      }
    }
    
    
    // *pracFeedback* updates
    if (t >= stim_dur && pracFeedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracFeedback.tStart = t;  // (not accounting for frame time here)
      pracFeedback.frameNStart = frameN;  // exact frame index
      
      pracFeedback.setAutoDraw(true);
    }

    frameRemains = stim_dur + feedback_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pracFeedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pracFeedback.setAutoDraw(false);
    }
    
    // *pracDebug* updates
    if ((SHOW_DEBUG) && pracDebug.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracDebug.tStart = t;  // (not accounting for frame time here)
      pracDebug.frameNStart = frameN;  // exact frame index
      
      pracDebug.setAutoDraw(true);
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
    prac_trialComponents.forEach( function(thisComponent) {
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


function prac_trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'prac_trial'-------
    prac_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    pracFeedback.text = "";
    psychoJS.experiment.addData("uncorrected_reaction_time", raw_rt);
    
    // was no response the correct answer?!
    if (pracResp.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         pracResp.corr = 1;  // correct non-response
      } else {
         pracResp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('pracResp.keys', pracResp.keys);
    psychoJS.experiment.addData('pracResp.corr', pracResp.corr);
    if (typeof pracResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('pracResp.rt', pracResp.rt);
        }
    
    pracResp.stop();
    // the Routine "prac_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _tgResp_allKeys;
var task_goodjobComponents;
function task_goodjobRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'task_goodjob'-------
    t = 0;
    task_goodjobClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    tgResp.keys = undefined;
    tgResp.rt = undefined;
    _tgResp_allKeys = [];
    // keep track of which components have finished
    task_goodjobComponents = [];
    task_goodjobComponents.push(tgImage);
    task_goodjobComponents.push(tgResp);
    
    task_goodjobComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function task_goodjobRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'task_goodjob'-------
    // get current time
    t = task_goodjobClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((! show_goodjob)) {
        continueRoutine = false;
    }
    
    
    // *tgImage* updates
    if (t >= 0.0 && tgImage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tgImage.tStart = t;  // (not accounting for frame time here)
      tgImage.frameNStart = frameN;  // exact frame index
      
      tgImage.setAutoDraw(true);
    }

    
    // *tgResp* updates
    if (t >= 0.3 && tgResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tgResp.tStart = t;  // (not accounting for frame time here)
      tgResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      tgResp.clock.reset();
      tgResp.start();
      tgResp.clearEvents();
    }

    if (tgResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = tgResp.getKeys({keyList: [], waitRelease: false});
      _tgResp_allKeys = _tgResp_allKeys.concat(theseKeys);
      if (_tgResp_allKeys.length > 0) {
        tgResp.keys = _tgResp_allKeys[_tgResp_allKeys.length - 1].name;  // just the last key pressed
        tgResp.rt = _tgResp_allKeys[_tgResp_allKeys.length - 1].rt;
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
    task_goodjobComponents.forEach( function(thisComponent) {
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


function task_goodjobRoutineEnd() {
  return async function () {
    //------Ending Routine 'task_goodjob'-------
    task_goodjobComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    tgResp.stop();
    // the Routine "task_goodjob" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _termResp_allKeys;
var terminateComponents;
function terminateRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'terminate'-------
    t = 0;
    terminateClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    termResp.keys = undefined;
    termResp.rt = undefined;
    _termResp_allKeys = [];
    // keep track of which components have finished
    terminateComponents = [];
    terminateComponents.push(termText);
    terminateComponents.push(termResp);
    
    terminateComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function terminateRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'terminate'-------
    // get current time
    t = terminateClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *termText* updates
    if (t >= 0.0 && termText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      termText.tStart = t;  // (not accounting for frame time here)
      termText.frameNStart = frameN;  // exact frame index
      
      termText.setAutoDraw(true);
    }

    
    // *termResp* updates
    if (t >= 0.3 && termResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      termResp.tStart = t;  // (not accounting for frame time here)
      termResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      termResp.clock.reset();
      termResp.start();
      termResp.clearEvents();
    }

    if (termResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = termResp.getKeys({keyList: [], waitRelease: false});
      _termResp_allKeys = _termResp_allKeys.concat(theseKeys);
      if (_termResp_allKeys.length > 0) {
        termResp.keys = _termResp_allKeys[_termResp_allKeys.length - 1].name;  // just the last key pressed
        termResp.rt = _termResp_allKeys[_termResp_allKeys.length - 1].rt;
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
    terminateComponents.forEach( function(thisComponent) {
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


function terminateRoutineEnd() {
  return async function () {
    //------Ending Routine 'terminate'-------
    terminateComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    termResp.stop();
    // the Routine "terminate" was not non-slip safe, so reset the non-slip timer
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
