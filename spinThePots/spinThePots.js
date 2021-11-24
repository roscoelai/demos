﻿/******************** 
 * Spinthepots Test *
 ********************/

import { core, data, sound, util, visual } from '../lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'spinThePots';  // from the Builder filename that created this script
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
flowScheduler.add(placeRoutineBegin());
flowScheduler.add(placeRoutineEachFrame());
flowScheduler.add(placeRoutineEnd());
flowScheduler.add(spinRoutineBegin());
flowScheduler.add(spinRoutineEachFrame());
flowScheduler.add(spinRoutineEnd());
flowScheduler.add(trialRoutineBegin());
flowScheduler.add(trialRoutineEachFrame());
flowScheduler.add(trialRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'imgs/pot4.png', 'path': 'imgs/pot4.png'},
    {'name': 'imgs/spin-btn.png', 'path': 'imgs/spin-btn.png'},
    {'name': 'imgs/pot7.png', 'path': 'imgs/pot7.png'},
    {'name': 'imgs/sticker1.png', 'path': 'imgs/sticker1.png'},
    {'name': 'imgs/pot8.png', 'path': 'imgs/pot8.png'},
    {'name': 'imgs/sticker4.png', 'path': 'imgs/sticker4.png'},
    {'name': 'imgs/sticker6.png', 'path': 'imgs/sticker6.png'},
    {'name': 'imgs/sticker2.png', 'path': 'imgs/sticker2.png'},
    {'name': 'imgs/sticker3.png', 'path': 'imgs/sticker3.png'},
    {'name': 'imgs/end-btn.png', 'path': 'imgs/end-btn.png'},
    {'name': 'imgs/pot5.png', 'path': 'imgs/pot5.png'},
    {'name': 'imgs/sticker5.png', 'path': 'imgs/sticker5.png'},
    {'name': 'imgs/pot2.png', 'path': 'imgs/pot2.png'},
    {'name': 'imgs/pot6.png', 'path': 'imgs/pot6.png'},
    {'name': 'imgs/empty-box.png', 'path': 'imgs/empty-box.png'},
    {'name': 'imgs/pot3.png', 'path': 'imgs/pot3.png'},
    {'name': 'imgs/turntable.png', 'path': 'imgs/turntable.png'},
    {'name': 'imgs/pot1.png', 'path': 'imgs/pot1.png'}
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


var placeClock;
var DIST_FROM_CENTER;
var ONE_DEG;
var theta;
var x360;
var y360;
var turntable;
var pots;
var objs;
var contents;
var stickers;
var sticker_coords;
var coord;
var place_mouse;
var place_disp;
var spin_button;
var spinClock;
var spin_timer;
var trialClock;
var trial_mouse;
var trial_disp;
var end_button;
var trial_end;
var key_resp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "place"
  placeClock = new util.Clock();
  DIST_FROM_CENTER = 0.25;
  ONE_DEG = (pi / 180);
  theta = 0;
  x360 = [];
  y360 = [];
  for (var i, _pj_c = 0, _pj_a = util.range(360), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      theta = (i * ONE_DEG);
      x360.push((DIST_FROM_CENTER * Math.sin(theta)));
      y360.push((DIST_FROM_CENTER * Math.cos(theta)));
  }
  turntable = new visual.ImageStim({"win": psychoJS.window, "name": "turntable", "image": "imgs/turntable.png", "pos": [0, 0], "size": 0.65, "opacity": 0.7});
  turntable.autoDraw = true;
  pots = [];
  objs = [];
  contents = [];
  for (var i, _pj_c = 0, _pj_a = util.range(8), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      pots.push(new visual.ImageStim({"win": psychoJS.window, "name": `pot${(i + 1)}`, "image": `imgs/pot${(i + 1)}.png`, "pos": [x360[(i * 45)], y360[(i * 45)]], "size": 0.1, "opacity": 1.0}));
      objs.push(null);
      contents.push(null);
  }
  for (var pot, _pj_c = 0, _pj_a = pots, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      pot = _pj_a[_pj_c];
      pot.autoDraw = true;
  }
  stickers = [];
  sticker_coords = [];
  coord = null;
  for (var i, _pj_c = 0, _pj_a = util.range(6), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      coord = [0.5, (0.25 - (0.1 * i))];
      sticker_coords.push(coord);
      stickers.push(new visual.ImageStim({"win": psychoJS.window, "name": `sticker${(i + 1)}`, "image": `imgs/sticker${(i + 1)}.png`, "pos": coord, "size": 0.05, "opacity": 1.0}));
  }
  for (var sticker, _pj_c = 0, _pj_a = stickers, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      sticker = _pj_a[_pj_c];
      sticker.autoDraw = true;
  }
  
  place_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  place_mouse.mouseClock = new util.Clock();
  place_disp = new visual.TextStim({
    win: psychoJS.window,
    name: 'place_disp',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, 0.4], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  spin_button = new visual.ImageStim({
    win : psychoJS.window,
    name : 'spin_button', units : undefined, 
    image : 'imgs/spin-btn.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.4)], size : [0, 0],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "spin"
  spinClock = new util.Clock();
  spin_timer = new visual.TextStim({
    win: psychoJS.window,
    name: 'spin_timer',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.4)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  trial_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  trial_mouse.mouseClock = new util.Clock();
  trial_disp = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_disp',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, 0.4], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  end_button = new visual.ImageStim({
    win : psychoJS.window,
    name : 'end_button', units : undefined, 
    image : 'imgs/end-btn.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.4)], size : [0, 0],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  trial_end = new core.Mouse({
    win: psychoJS.window,
  });
  trial_end.mouseClock = new util.Clock();
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var END_PART_1;
var DRAGGING;
var THRESH2;
var SPIN_BUTTON_SIZE;
var stickers_left;
var clicked_obj;
var dxdy;
var dist2;
var snapped;
var repelled;
var gotValidClick;
var placeComponents;
function placeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'place'-------
    t = 0;
    placeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    END_PART_1 = false;
    DRAGGING = false;
    THRESH2 = (0.05 * 0.05);
    SPIN_BUTTON_SIZE = [0.156, 0.1];
    stickers_left = 6;
    clicked_obj = null;
    function _dxdy(p, q) {
        var dx, dy;
        dx = (p[0] - q[0]);
        dy = (p[1] - q[1]);
        return [dx, dy];
    }
    dxdy = _dxdy;
    function _dist2(p, q) {
        var dx, dy;
        [dx, dy] = dxdy(p, q);
        return ((dx * dx) + (dy * dy));
    }
    dist2 = _dist2;
    function _snapped(x, y, thresh2 = THRESH2) {
        if ((dist2(x.pos, y.pos) <= thresh2)) {
            x.pos = y.pos;
            return true;
        }
        return false;
    }
    snapped = _snapped;
    function _repelled(x, y, r = 0.1, thresh2 = THRESH2) {
        var d2, di, dj, dx, dy, i, j, ratio;
        d2 = dist2(x.pos, y.pos);
        if (((d2 > 0) && (d2 <= thresh2))) {
            ratio = (r / Math.sqrt(d2));
            [dx, dy] = dxdy(x.pos, y.pos);
            di = (ratio * dx);
            dj = (ratio * dy);
            [i, j] = y.pos;
            x.pos = [(i + di), (j + dj)];
            return true;
        }
        return false;
    }
    repelled = _repelled;
    
    // setup some python lists for storing info about the place_mouse
    place_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    placeComponents = [];
    placeComponents.push(place_mouse);
    placeComponents.push(place_disp);
    placeComponents.push(spin_button);
    
    for (const thisComponent of placeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function placeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'place'-------
    // get current time
    t = placeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    place_disp.text = `Sticker left: ${stickers_left}
    contents = ${contents}`
    ;
    if ((stickers_left > 0)) {
        if ((! DRAGGING)) {
            for (var sticker, _pj_c = 0, _pj_a = stickers, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                sticker = _pj_a[_pj_c];
                if (place_mouse.isPressedIn(sticker)) {
                    clicked_obj = sticker;
                    for (var i, _pj_f = 0, _pj_d = util.range(8), _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
                        i = _pj_d[_pj_f];
                        if ((contents[i] === sticker.name)) {
                            objs[i] = null;
                            contents[i] = null;
                            stickers_left += 1;
                            break;
                        }
                    }
                    DRAGGING = true;
                }
            }
        }
        if ((util.sum(place_mouse.getPressed()) > 0)) {
            if (DRAGGING) {
                clicked_obj.pos = place_mouse.getPos();
            }
        } else {
            DRAGGING = false;
            if ((clicked_obj !== null)) {
                for (var i, _pj_c = 0, _pj_a = util.range(8), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                    i = _pj_a[_pj_c];
                    if ((contents[i] === clicked_obj.name)) {
                        break;
                    } else {
                        if (((contents[i] !== null) && repelled(clicked_obj, pots[i]))) {
                            break;
                        } else {
                            if (snapped(clicked_obj, pots[i])) {
                                objs[i] = clicked_obj;
                                contents[i] = clicked_obj.name;
                                stickers_left -= 1;
                                break;
                            }
                        }
                    }
                }
            }
        }
    } else {
        for (var sticker, _pj_c = 0, _pj_a = stickers, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            sticker = _pj_a[_pj_c];
            sticker.autoDraw = false;
        }
        END_PART_1 = true;
        spin_button.size = SPIN_BUTTON_SIZE;
    }
    
    // *place_mouse* updates
    if (t >= 0.0 && place_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      place_mouse.tStart = t;  // (not accounting for frame time here)
      place_mouse.frameNStart = frameN;  // exact frame index
      
      place_mouse.status = PsychoJS.Status.STARTED;
      place_mouse.mouseClock.reset();
      prevButtonState = place_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (place_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = place_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [spin_button]) {
            if (obj.contains(place_mouse)) {
              gotValidClick = true;
              place_mouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *place_disp* updates
    if (t >= 0.0 && place_disp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      place_disp.tStart = t;  // (not accounting for frame time here)
      place_disp.frameNStart = frameN;  // exact frame index
      
      place_disp.setAutoDraw(true);
    }

    
    // *spin_button* updates
    if ((END_PART_1) && spin_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spin_button.tStart = t;  // (not accounting for frame time here)
      spin_button.frameNStart = frameN;  // exact frame index
      
      spin_button.setAutoDraw(true);
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
    for (const thisComponent of placeComponents)
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


function placeRoutineEnd() {
  return async function () {
    //------Ending Routine 'place'-------
    for (const thisComponent of placeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "place" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var SPIN_SPEED;
var pot;
var idx;
var spinComponents;
function spinRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'spin'-------
    t = 0;
    spinClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    SPIN_SPEED = 8;
    pot = null;
    idx = 0;
    
    // keep track of which components have finished
    spinComponents = [];
    spinComponents.push(spin_timer);
    
    for (const thisComponent of spinComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var shift;
var frameRemains;
function spinRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'spin'-------
    // get current time
    t = spinClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    shift = Number.parseInt((frameN * SPIN_SPEED));
    for (var i, _pj_c = 0, _pj_a = util.range(8), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        pot = pots[i];
        idx = (((i * 45) + shift) % 360);
        pot.pos = [x360[idx], y360[idx]];
    }
    turntable.ori = (360 - (shift % 360));
    
    
    // *spin_timer* updates
    if (t >= 0.0 && spin_timer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spin_timer.tStart = t;  // (not accounting for frame time here)
      spin_timer.frameNStart = frameN;  // exact frame index
      
      spin_timer.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (spin_timer.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      spin_timer.setAutoDraw(false);
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
    for (const thisComponent of spinComponents)
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


function spinRoutineEnd() {
  return async function () {
    //------Ending Routine 'spin'-------
    for (const thisComponent of spinComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var SHOW_DUR;
var END_TRIAL;
var END_BUTTON_SIZE;
var score;
var clicks_left;
var stickers_found;
var pot_choices;
var sticker_choices;
var outcome;
var buttons;
var blanks;
var starts;
var _key_resp_allKeys;
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
    SHOW_DUR = 1.0;
    END_TRIAL = false;
    END_BUTTON_SIZE = [0.13, 0.1];
    score = 16;
    clicks_left = 16;
    stickers_found = 0;
    pot_choices = [];
    sticker_choices = [];
    outcome = [];
    buttons = util.sum(trial_mouse.getPressed());
    blanks = [];
    starts = [];
    for (var i, _pj_c = 0, _pj_a = util.range(8), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        blanks.push(new visual.ImageStim({"win": psychoJS.window, "name": `blank${(i + 1)}`, "image": `imgs/empty-box.png`, "pos": pots[i].pos, "size": 0.05, "opacity": 1.0}));
        starts.push(null);
    }
    
    // setup some python lists for storing info about the trial_mouse
    // current position of the mouse:
    trial_mouse.x = [];
    trial_mouse.y = [];
    trial_mouse.leftButton = [];
    trial_mouse.midButton = [];
    trial_mouse.rightButton = [];
    trial_mouse.time = [];
    trial_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // setup some python lists for storing info about the trial_end
    trial_end.clicked_name = [];
    gotValidClick = false; // until a click is received
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(trial_mouse);
    trialComponents.push(trial_disp);
    trialComponents.push(end_button);
    trialComponents.push(trial_end);
    trialComponents.push(key_resp);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var _mouseXYs;
function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((stickers_found >= 6)) {
        trial_disp.text = `All stickers found!`;
        END_TRIAL = true;
        end_button.size = END_BUTTON_SIZE;
    } else {
        if ((clicks_left < 1)) {
            trial_disp.text = `No tries left!`;
            END_TRIAL = true;
            end_button.size = END_BUTTON_SIZE;
        } else {
            trial_disp.text = `Tries left = ${clicks_left}`;
            if ((buttons !== util.sum(trial_mouse.getPressed()))) {
                buttons = util.sum(trial_mouse.getPressed());
                for (var i, _pj_c = 0, _pj_a = util.range(8), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                    i = _pj_a[_pj_c];
                    if (trial_mouse.isPressedIn(pots[i])) {
                        pot_choices.push(pots[i].name);
                        sticker_choices.push(contents[i]);
                        if ((contents[i] !== null)) {
                            objs[i].pos = pots[i].pos;
                            outcome.push("correct");
                        } else {
                            outcome.push("wrong");
                            score -= 1;
                        }
                        starts[i] = t;
                        clicks_left -= 1;
                        break;
                    }
                }
            }
            for (var i, _pj_c = 0, _pj_a = util.range(8), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                i = _pj_a[_pj_c];
                if ((starts[i] !== null)) {
                    if (((t - starts[i]) < SHOW_DUR)) {
                        if ((objs[i] !== null)) {
                            objs[i].autoDraw = true;
                        } else {
                            blanks[i].autoDraw = true;
                        }
                    } else {
                        if ((objs[i] !== null)) {
                            objs[i].pos = sticker_coords[stickers_found];
                            stickers_found += 1;
                        } else {
                            blanks[i].autoDraw = false;
                        }
                        starts[i] = null;
                        objs[i] = null;
                        contents[i] = null;
                    }
                }
            }
        }
    }
    
    // *trial_mouse* updates
    if (t >= 0.0 && trial_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_mouse.tStart = t;  // (not accounting for frame time here)
      trial_mouse.frameNStart = frameN;  // exact frame index
      
      trial_mouse.status = PsychoJS.Status.STARTED;
      trial_mouse.mouseClock.reset();
      prevButtonState = trial_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (trial_mouse.status === PsychoJS.Status.STARTED && Boolean(END_TRIAL)) {
      trial_mouse.status = PsychoJS.Status.FINISHED;
  }
    if (trial_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = trial_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = trial_mouse.getPos();
          trial_mouse.x.push(_mouseXYs[0]);
          trial_mouse.y.push(_mouseXYs[1]);
          trial_mouse.leftButton.push(_mouseButtons[0]);
          trial_mouse.midButton.push(_mouseButtons[1]);
          trial_mouse.rightButton.push(_mouseButtons[2]);
          trial_mouse.time.push(trial_mouse.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [pots[0], pots[1], pots[2], pots[3], pots[4], pots[5], pots[6], pots[7]]) {
            if (obj.contains(trial_mouse)) {
              gotValidClick = true;
              trial_mouse.clicked_name.push(obj.name)
            }
          }
        }
      }
    }
    
    // *trial_disp* updates
    if (t >= 0.0 && trial_disp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_disp.tStart = t;  // (not accounting for frame time here)
      trial_disp.frameNStart = frameN;  // exact frame index
      
      trial_disp.setAutoDraw(true);
    }

    
    // *end_button* updates
    if ((END_TRIAL) && end_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_button.tStart = t;  // (not accounting for frame time here)
      end_button.frameNStart = frameN;  // exact frame index
      
      end_button.setAutoDraw(true);
    }

    // *trial_end* updates
    if ((END_TRIAL) && trial_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_end.tStart = t;  // (not accounting for frame time here)
      trial_end.frameNStart = frameN;  // exact frame index
      
      trial_end.status = PsychoJS.Status.STARTED;
      trial_end.mouseClock.reset();
      prevButtonState = trial_end.getPressed();  // if button is down already this ISN'T a new click
      }
    if (trial_end.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = trial_end.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [end_button]) {
            if (obj.contains(trial_end)) {
              gotValidClick = true;
              trial_end.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
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
    psychoJS.experiment.addData("pot_choices", pot_choices);
    psychoJS.experiment.addData("sticker_choices", sticker_choices);
    psychoJS.experiment.addData("outcome", outcome);
    psychoJS.experiment.addData("score", score);
    
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('trial_mouse.x', trial_mouse.x);
    psychoJS.experiment.addData('trial_mouse.y', trial_mouse.y);
    psychoJS.experiment.addData('trial_mouse.leftButton', trial_mouse.leftButton);
    psychoJS.experiment.addData('trial_mouse.midButton', trial_mouse.midButton);
    psychoJS.experiment.addData('trial_mouse.rightButton', trial_mouse.rightButton);
    psychoJS.experiment.addData('trial_mouse.time', trial_mouse.time);
    psychoJS.experiment.addData('trial_mouse.clicked_name', trial_mouse.clicked_name);
    
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
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
