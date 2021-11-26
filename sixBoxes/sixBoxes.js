/***************** 
 * Sixboxes Test *
 *****************/

import { core, data, sound, util, visual } from '../lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'sixBoxes';  // from the Builder filename that created this script
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
flowScheduler.add(instrRoutineBegin());
flowScheduler.add(instrRoutineEachFrame());
flowScheduler.add(instrRoutineEnd());
flowScheduler.add(part1RoutineBegin());
flowScheduler.add(part1RoutineEachFrame());
flowScheduler.add(part1RoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'imgs/continue.png', 'path': 'imgs/continue.png'},
    {'name': 'imgs/lambchop-5_300x300.jpg', 'path': 'imgs/lambchop-5_300x300.jpg'},
    {'name': 'imgs/lambchop-4_300x300.jpg', 'path': 'imgs/lambchop-4_300x300.jpg'},
    {'name': 'imgs/lambchop-6_300x300.jpg', 'path': 'imgs/lambchop-6_300x300.jpg'},
    {'name': 'imgs/empty-box.png', 'path': 'imgs/empty-box.png'},
    {'name': 'imgs/lambchop-2_300x300.jpg', 'path': 'imgs/lambchop-2_300x300.jpg'},
    {'name': 'imgs/lambchop-3_300x300.jpg', 'path': 'imgs/lambchop-3_300x300.jpg'},
    {'name': 'imgs/lambchop-1_300x300.jpg', 'path': 'imgs/lambchop-1_300x300.jpg'}
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


var instrClock;
var instrPart1;
var contButton;
var clickCont;
var part1Clock;
var ANIMAL_DURATION;
var BLANK_DURATION;
var ANIMAL_SIZE;
var BLANK_SIZE;
var BOX_SIZE;
var BOX_FILL_COLOR;
var BOX_LINE_COLOR;
var BOX_OPACITY;
var BOX_POS;
var EXT_POS;
var IMG_SRCS;
var box1;
var animal1;
var box2;
var animal2;
var box3;
var animal3;
var box4;
var animal4;
var box5;
var animal5;
var box6;
var animal6;
var highlighter;
var blank;
var exitButton;
var clickExit;
var debugTimer;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  instrPart1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrPart1',
    text: 'Notes:\n\n- Currently designed for "landscape" screens (16:10 or wider)\n- Blanks changed to a white box with a red "X"\n- Pictures and blanks now show for 3 seconds on click\n- Pictures will move to the sides, blanks will disappear\n- There is a (very inconspicuous) timer near the bottom-right\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: 0.95, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  contButton = new visual.ImageStim({
    win : psychoJS.window,
    name : 'contButton', units : undefined, 
    image : 'imgs/continue.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.4)], size : [0.32, 0.112],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  clickCont = new core.Mouse({
    win: psychoJS.window,
  });
  clickCont.mouseClock = new util.Clock();
  // Initialize components for Routine "part1"
  part1Clock = new util.Clock();
  ANIMAL_DURATION = 3.0;
  BLANK_DURATION = 3.0;
  ANIMAL_SIZE = [0.2, 0.2];
  BLANK_SIZE = [0.2, 0.2];
  BOX_SIZE = [0.3, 0.3];
  BOX_FILL_COLOR = "black";
  BOX_LINE_COLOR = "black";
  BOX_OPACITY = 0.3;
  BOX_POS = [[(- 0.3), 0.15], [0.0, 0.15], [0.3, 0.15], [(- 0.3), (- 0.15)], [0.0, (- 0.15)], [0.3, (- 0.15)]];
  EXT_POS = [[(- 0.7), 0.3], [(- 0.7), 0.0], [(- 0.7), (- 0.3)], [0.7, 0.3], [0.7, 0.0], [0.7, (- 0.3)]];
  IMG_SRCS = ["imgs/lambchop-1_300x300.jpg", "imgs/lambchop-2_300x300.jpg", "imgs/lambchop-3_300x300.jpg", "imgs/lambchop-4_300x300.jpg", "imgs/lambchop-5_300x300.jpg", "imgs/lambchop-6_300x300.jpg"];
  
  box1 = new visual.Rect ({
    win: psychoJS.window, name: 'box1', 
    width: BOX_SIZE[0], height: BOX_SIZE[1],
    ori: 0.0, pos: BOX_POS[0],
    lineWidth: 1.0, lineColor: new util.Color(BOX_LINE_COLOR),
    fillColor: new util.Color(BOX_FILL_COLOR),
    opacity: BOX_OPACITY, depth: -1, interpolate: true,
  });
  
  animal1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'animal1', units : undefined, 
    image : IMG_SRCS[0], mask : undefined,
    ori : 0.0, pos : BOX_POS[0], size : ANIMAL_SIZE,
    color : new util.Color([1, 1, 1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  box2 = new visual.Rect ({
    win: psychoJS.window, name: 'box2', 
    width: BOX_SIZE[0], height: BOX_SIZE[1],
    ori: 0.0, pos: BOX_POS[1],
    lineWidth: 1.0, lineColor: new util.Color(BOX_LINE_COLOR),
    fillColor: new util.Color(BOX_FILL_COLOR),
    opacity: BOX_OPACITY, depth: -3, interpolate: true,
  });
  
  animal2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'animal2', units : undefined, 
    image : IMG_SRCS[1], mask : undefined,
    ori : 0.0, pos : BOX_POS[1], size : ANIMAL_SIZE,
    color : new util.Color([1, 1, 1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  box3 = new visual.Rect ({
    win: psychoJS.window, name: 'box3', 
    width: BOX_SIZE[0], height: BOX_SIZE[1],
    ori: 0.0, pos: BOX_POS[2],
    lineWidth: 1.0, lineColor: new util.Color(BOX_LINE_COLOR),
    fillColor: new util.Color(BOX_FILL_COLOR),
    opacity: BOX_OPACITY, depth: -5, interpolate: true,
  });
  
  animal3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'animal3', units : undefined, 
    image : IMG_SRCS[2], mask : undefined,
    ori : 0.0, pos : BOX_POS[2], size : ANIMAL_SIZE,
    color : new util.Color([1, 1, 1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  box4 = new visual.Rect ({
    win: psychoJS.window, name: 'box4', 
    width: BOX_SIZE[0], height: BOX_SIZE[1],
    ori: 0.0, pos: BOX_POS[3],
    lineWidth: 1.0, lineColor: new util.Color(BOX_LINE_COLOR),
    fillColor: new util.Color(BOX_FILL_COLOR),
    opacity: BOX_OPACITY, depth: -7, interpolate: true,
  });
  
  animal4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'animal4', units : undefined, 
    image : IMG_SRCS[3], mask : undefined,
    ori : 0.0, pos : BOX_POS[3], size : ANIMAL_SIZE,
    color : new util.Color([1, 1, 1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  box5 = new visual.Rect ({
    win: psychoJS.window, name: 'box5', 
    width: BOX_SIZE[0], height: BOX_SIZE[1],
    ori: 0.0, pos: BOX_POS[4],
    lineWidth: 1.0, lineColor: new util.Color(BOX_LINE_COLOR),
    fillColor: new util.Color(BOX_FILL_COLOR),
    opacity: BOX_OPACITY, depth: -9, interpolate: true,
  });
  
  animal5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'animal5', units : undefined, 
    image : IMG_SRCS[4], mask : undefined,
    ori : 0.0, pos : BOX_POS[4], size : ANIMAL_SIZE,
    color : new util.Color([1, 1, 1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  box6 = new visual.Rect ({
    win: psychoJS.window, name: 'box6', 
    width: BOX_SIZE[0], height: BOX_SIZE[1],
    ori: 0.0, pos: BOX_POS[5],
    lineWidth: 1.0, lineColor: new util.Color(BOX_LINE_COLOR),
    fillColor: new util.Color(BOX_FILL_COLOR),
    opacity: BOX_OPACITY, depth: -11, interpolate: true,
  });
  
  animal6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'animal6', units : undefined, 
    image : IMG_SRCS[5], mask : undefined,
    ori : 0.0, pos : BOX_POS[5], size : ANIMAL_SIZE,
    color : new util.Color([1, 1, 1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  highlighter = new visual.Rect ({
    win: psychoJS.window, name: 'highlighter', 
    width: BOX_SIZE[0], height: BOX_SIZE[1],
    ori: 0.0, pos: [0, (- 1.0)],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('black'),
    opacity: BOX_OPACITY, depth: -13, interpolate: true,
  });
  
  blank = new visual.ImageStim({
    win : psychoJS.window,
    name : 'blank', units : undefined, 
    image : 'imgs/empty-box.png', mask : undefined,
    ori : 0.0, pos : [0, (- 1.0)], size : BLANK_SIZE,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  exitButton = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exitButton', units : undefined, 
    image : 'imgs/continue.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.4)], size : [0.32, 0.112],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -15.0 
  });
  clickExit = new core.Mouse({
    win: psychoJS.window,
  });
  clickExit.mouseClock = new util.Clock();
  debugTimer = new visual.TextStim({
    win: psychoJS.window,
    name: 'debugTimer',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.45, (- 0.45)], height: 0.01,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: 0.1,
    depth: -17.0 
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
var instrComponents;
function instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instr'-------
    t = 0;
    instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the clickCont
    clickCont.clicked_name = [];
    gotValidClick = false; // until a click is received
    clickCont.mouseClock.reset();
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(instrPart1);
    instrComponents.push(contButton);
    instrComponents.push(clickCont);
    
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function instrRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instr'-------
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instrPart1* updates
    if (t >= 0.0 && instrPart1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrPart1.tStart = t;  // (not accounting for frame time here)
      instrPart1.frameNStart = frameN;  // exact frame index
      
      instrPart1.setAutoDraw(true);
    }

    
    // *contButton* updates
    if (t >= 0.0 && contButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contButton.tStart = t;  // (not accounting for frame time here)
      contButton.frameNStart = frameN;  // exact frame index
      
      contButton.setAutoDraw(true);
    }

    // *clickCont* updates
    if (t >= 0.0 && clickCont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clickCont.tStart = t;  // (not accounting for frame time here)
      clickCont.frameNStart = frameN;  // exact frame index
      
      clickCont.status = PsychoJS.Status.STARTED;
      prevButtonState = clickCont.getPressed();  // if button is down already this ISN'T a new click
      }
    if (clickCont.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = clickCont.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [contButton]) {
            if (obj.contains(clickCont)) {
              gotValidClick = true;
              clickCont.clicked_name.push(obj.name)
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
    for (const thisComponent of instrComponents)
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


function instrRoutineEnd() {
  return async function () {
    //------Ending Routine 'instr'-------
    for (const thisComponent of instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var boxes;
var animals;
var animals_seen;
var clicked_boxes;
var click_times;
var showing_animal;
var showing_blank;
var start_timing;
var end_timing;
var show_exit;
var clicked_animal;
var animal_count;
var task_time_start;
var task_time_click;
var task_time_elapsed;
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
    boxes = [box1, box2, box3, box4, box5, box6];
    animals = [animal1, animal2, animal3, animal4, animal5, animal6];
    animals_seen = [false, false, false, false, false, false];
    clicked_boxes = [];
    click_times = [];
    showing_animal = false;
    showing_blank = false;
    start_timing = false;
    end_timing = false;
    show_exit = false;
    clicked_animal = null;
    animal_count = 0;
    task_time_start = null;
    task_time_click = 0;
    task_time_elapsed = 0;
    
    // setup some python lists for storing info about the clickExit
    clickExit.clicked_name = [];
    gotValidClick = false; // until a click is received
    clickExit.mouseClock.reset();
    // keep track of which components have finished
    part1Components = [];
    part1Components.push(box1);
    part1Components.push(animal1);
    part1Components.push(box2);
    part1Components.push(animal2);
    part1Components.push(box3);
    part1Components.push(animal3);
    part1Components.push(box4);
    part1Components.push(animal4);
    part1Components.push(box5);
    part1Components.push(animal5);
    part1Components.push(box6);
    part1Components.push(animal6);
    part1Components.push(highlighter);
    part1Components.push(blank);
    part1Components.push(exitButton);
    part1Components.push(clickExit);
    part1Components.push(debugTimer);
    
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
    if ((! end_timing)) {
        if ((animal_count >= 6)) {
            end_timing = true;
        }
        if (start_timing) {
            task_time_elapsed = (t - task_time_start);
        } else {
            if ((task_time_start !== null)) {
                start_timing = true;
            }
        }
    }
    if (showing_animal) {
        if (((t - task_time_click) >= ANIMAL_DURATION)) {
            clicked_animal.setPos(EXT_POS[(animal_count - 1)], {"log": false});
            showing_animal = false;
            if ((animal_count >= 6)) {
                show_exit = true;
            }
        }
    } else {
        if (showing_blank) {
            if (((t - task_time_click) >= BLANK_DURATION)) {
                blank.setAutoDraw(false, {"log": false});
                showing_blank = false;
            }
        } else {
            if ((! show_exit)) {
                blank.setAutoDraw(false, {"log": false});
                highlighter.setAutoDraw(false, {"log": false});
                for (var i, _pj_c = 0, _pj_a = util.range(6), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                    i = _pj_a[_pj_c];
                    if (clickExit.isPressedIn(boxes[i])) {
                        if (animals_seen[i]) {
                            blank.setPos(BOX_POS[i], {"log": false});
                            blank.setAutoDraw(true, {"log": false});
                            showing_blank = true;
                        } else {
                            clicked_animal = animals[i];
                            clicked_animal.setOpacity(1.0, {"log": false});
                            animals_seen[i] = true;
                            animal_count += 1;
                            showing_animal = true;
                            if ((task_time_start === null)) {
                                task_time_start = t;
                            }
                        }
                        clicked_boxes.push(boxes[i].name);
                        click_times.push(task_time_elapsed);
                        task_time_click = t;
                        break;
                    } else {
                        if (boxes[i].contains(clickExit)) {
                            highlighter.setPos(BOX_POS[i], {"log": false});
                            highlighter.setAutoDraw(true, {"log": false});
                            break;
                        }
                    }
                }
            }
        }
    }
    
    
    // *box1* updates
    if (t >= 0.0 && box1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box1.tStart = t;  // (not accounting for frame time here)
      box1.frameNStart = frameN;  // exact frame index
      
      box1.setAutoDraw(true);
    }

    
    // *animal1* updates
    if (t >= 0.0 && animal1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      animal1.tStart = t;  // (not accounting for frame time here)
      animal1.frameNStart = frameN;  // exact frame index
      
      animal1.setAutoDraw(true);
    }

    
    // *box2* updates
    if (t >= 0.0 && box2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box2.tStart = t;  // (not accounting for frame time here)
      box2.frameNStart = frameN;  // exact frame index
      
      box2.setAutoDraw(true);
    }

    
    // *animal2* updates
    if (t >= 0.0 && animal2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      animal2.tStart = t;  // (not accounting for frame time here)
      animal2.frameNStart = frameN;  // exact frame index
      
      animal2.setAutoDraw(true);
    }

    
    // *box3* updates
    if (t >= 0.0 && box3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box3.tStart = t;  // (not accounting for frame time here)
      box3.frameNStart = frameN;  // exact frame index
      
      box3.setAutoDraw(true);
    }

    
    // *animal3* updates
    if (t >= 0.0 && animal3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      animal3.tStart = t;  // (not accounting for frame time here)
      animal3.frameNStart = frameN;  // exact frame index
      
      animal3.setAutoDraw(true);
    }

    
    // *box4* updates
    if (t >= 0.0 && box4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box4.tStart = t;  // (not accounting for frame time here)
      box4.frameNStart = frameN;  // exact frame index
      
      box4.setAutoDraw(true);
    }

    
    // *animal4* updates
    if (t >= 0.0 && animal4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      animal4.tStart = t;  // (not accounting for frame time here)
      animal4.frameNStart = frameN;  // exact frame index
      
      animal4.setAutoDraw(true);
    }

    
    // *box5* updates
    if (t >= 0.0 && box5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box5.tStart = t;  // (not accounting for frame time here)
      box5.frameNStart = frameN;  // exact frame index
      
      box5.setAutoDraw(true);
    }

    
    // *animal5* updates
    if (t >= 0.0 && animal5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      animal5.tStart = t;  // (not accounting for frame time here)
      animal5.frameNStart = frameN;  // exact frame index
      
      animal5.setAutoDraw(true);
    }

    
    // *box6* updates
    if (t >= 0.0 && box6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box6.tStart = t;  // (not accounting for frame time here)
      box6.frameNStart = frameN;  // exact frame index
      
      box6.setAutoDraw(true);
    }

    
    // *animal6* updates
    if (t >= 0.0 && animal6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      animal6.tStart = t;  // (not accounting for frame time here)
      animal6.frameNStart = frameN;  // exact frame index
      
      animal6.setAutoDraw(true);
    }

    
    // *highlighter* updates
    if (t >= 0.0 && highlighter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      highlighter.tStart = t;  // (not accounting for frame time here)
      highlighter.frameNStart = frameN;  // exact frame index
      
      highlighter.setAutoDraw(true);
    }

    
    // *blank* updates
    if (t >= 0.0 && blank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank.tStart = t;  // (not accounting for frame time here)
      blank.frameNStart = frameN;  // exact frame index
      
      blank.setAutoDraw(true);
    }

    
    // *exitButton* updates
    if ((show_exit) && exitButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exitButton.tStart = t;  // (not accounting for frame time here)
      exitButton.frameNStart = frameN;  // exact frame index
      
      exitButton.setAutoDraw(true);
    }

    // *clickExit* updates
    if (t >= 0.0 && clickExit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clickExit.tStart = t;  // (not accounting for frame time here)
      clickExit.frameNStart = frameN;  // exact frame index
      
      clickExit.status = PsychoJS.Status.STARTED;
      prevButtonState = clickExit.getPressed();  // if button is down already this ISN'T a new click
      }
    if (clickExit.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = clickExit.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [exitButton]) {
            if (obj.contains(clickExit)) {
              gotValidClick = true;
              clickExit.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *debugTimer* updates
    if (t >= 0.0 && debugTimer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      debugTimer.tStart = t;  // (not accounting for frame time here)
      debugTimer.frameNStart = frameN;  // exact frame index
      
      debugTimer.setAutoDraw(true);
    }

    
    if (debugTimer.status === PsychoJS.Status.STARTED){ // only update if being drawn
      debugTimer.setText(util.round(task_time_elapsed, 3), false);
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


var idx;
var erroneous_clicks;
function part1RoutineEnd() {
  return async function () {
    //------Ending Routine 'part1'-------
    for (const thisComponent of part1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData("clicked_boxes", clicked_boxes);
    psychoJS.experiment.addData("click_times", click_times);
    idx = {"box1": 0, "box2": 1, "box3": 2, "box4": 3, "box5": 4, "box6": 5};
    erroneous_clicks = [(- 1), (- 1), (- 1), (- 1), (- 1), (- 1)];
    for (var box, _pj_c = 0, _pj_a = clicked_boxes, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        box = _pj_a[_pj_c];
        erroneous_clicks[idx[box]] += 1;
    }
    psychoJS.experiment.addData("erroneous_clicks", erroneous_clicks);
    psychoJS.experiment.addData("time_taken_sec", click_times.pop());
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "part1" was not non-slip safe, so reset the non-slip timer
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
