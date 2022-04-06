/******************** 
 * Spinthepots Test *
 ********************/


// store info about the experiment session:
let expName = 'spinThePots';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// Start code blocks for 'Before Experiment'

function deg2xy(deg, radius) {
    var rad, x, y;
    [rad] = [((deg * pi) / 180)];
    [x, y] = [(radius * Math.sin(rad)), (radius * Math.cos(rad))];
    return [x, y];
}

function dxdy(p, q) {
    var dx, dy;
    [dx, dy] = [(p[0] - q[0]), (p[1] - q[1])];
    return [dx, dy];
}

function dist2(p, q) {
    var dx, dy;
    [dx, dy] = dxdy(p, q);
    return ((dx * dx) + (dy * dy));
}

function snapped(a, b, thresh2 = THRESH2) {
    if ((dist2(a.pos, b.pos) <= thresh2)) {
        a.pos = b.pos;
        return true;
    }
    return false;
}

function repelled(x, y, r = 0.1, thresh2 = THRESH2) {
    var d2, di, dj, dx, dy, i, j, ratio;
    [d2] = [dist2(x.pos, y.pos)];
    if (((d2 > 0) && (d2 <= thresh2))) {
        [ratio] = [(r / Math.sqrt(d2))];
        [dx, dy] = dxdy(x.pos, y.pos);
        [di, dj] = [(ratio * dx), (ratio * dy)];
        [i, j] = y.pos;
        x.pos = [(i + di), (j + dj)];
        return true;
    }
    return false;
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
    {'name': 'imgs/pot2.png', 'path': 'imgs/pot2.png'},
    {'name': 'imgs/pot8.png', 'path': 'imgs/pot8.png'},
    {'name': 'imgs/sticker2.png', 'path': 'imgs/sticker2.png'},
    {'name': 'imgs/sort-btn.png', 'path': 'imgs/sort-btn.png'},
    {'name': 'imgs/sticker3.png', 'path': 'imgs/sticker3.png'},
    {'name': 'imgs/pot1.png', 'path': 'imgs/pot1.png'},
    {'name': 'imgs/pot5.png', 'path': 'imgs/pot5.png'},
    {'name': 'imgs/sticker5.png', 'path': 'imgs/sticker5.png'},
    {'name': 'imgs/turntable.png', 'path': 'imgs/turntable.png'},
    {'name': 'imgs/spin-btn.png', 'path': 'imgs/spin-btn.png'},
    {'name': 'imgs/pot3.png', 'path': 'imgs/pot3.png'},
    {'name': 'imgs/empty-box.png', 'path': 'imgs/empty-box.png'},
    {'name': 'imgs/sticker1.png', 'path': 'imgs/sticker1.png'},
    {'name': 'imgs/end-btn.png', 'path': 'imgs/end-btn.png'},
    {'name': 'imgs/pot6.png', 'path': 'imgs/pot6.png'},
    {'name': 'imgs/pot7.png', 'path': 'imgs/pot7.png'},
    {'name': 'imgs/sticker6.png', 'path': 'imgs/sticker6.png'},
    {'name': 'imgs/sticker4.png', 'path': 'imgs/sticker4.png'},
    {'name': 'imgs/pot4.png', 'path': 'imgs/pot4.png'}
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
var N_POTS;
var N_STICKERS;
var RADIUS;
var DEG_PER_POT;
var N_FRAMES_ALL;
var N_FRAMES;
var THRESH2;
var SORT_BUTTON_SIZE;
var SPIN_BUTTON_SIZE;
var place_mouse;
var place_disp;
var sort_button;
var spin_button;
var spinClock;
var spin_timer;
var trialClock;
var trial_mouse;
var trial_disp;
var trial_end;
var end_button;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "place"
  placeClock = new util.Clock();
  N_POTS = 8;
  N_STICKERS = 6;
  RADIUS = 0.25;
  DEG_PER_POT = (360 / N_POTS);
  N_FRAMES_ALL = Number.parseInt((3 / frameDur));
  N_FRAMES = Number.parseInt((N_FRAMES_ALL / N_STICKERS));
  THRESH2 = (0.05 * 0.05);
  SORT_BUTTON_SIZE = [0.136, 0.1];
  SPIN_BUTTON_SIZE = [0.156, 0.1];
  
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
  
  sort_button = new visual.ImageStim({
    win : psychoJS.window,
    name : 'sort_button', units : undefined, 
    image : 'imgs/sort-btn.png', mask : undefined,
    ori : 0.0, pos : [0.5, (- 0.4)], size : SORT_BUTTON_SIZE,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  spin_button = new visual.ImageStim({
    win : psychoJS.window,
    name : 'spin_button', units : undefined, 
    image : 'imgs/spin-btn.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.4)], size : [0, 0],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
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
  
  trial_end = new core.Mouse({
    win: psychoJS.window,
  });
  trial_end.mouseClock = new util.Clock();
  end_button = new visual.ImageStim({
    win : psychoJS.window,
    name : 'end_button', units : undefined, 
    image : 'imgs/end-btn.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.4)], size : [0, 0],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var DRAGGING;
var clicked_obj;
var clicked_sort;
var stickers_left;
var turntable;
var pots;
var objs;
var contents;
var pot_angles;
var STICKER_X0;
var STICKER_Y0;
var stickers;
var sticker_coords;
var pot_idxs;
var xxx;
var yyy;
var xx;
var yy;
var idx;
var start_frame;
var auto_sorting;
var move_idx;
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
    DRAGGING = false;
    clicked_obj = null;
    clicked_sort = false;
    stickers_left = N_STICKERS;
    turntable = new visual.ImageStim({"win": psychoJS.window, "name": "turntable", "image": "imgs/turntable.png", "pos": [0, 0], "size": 0.65, "opacity": 0.7});
    turntable.autoDraw = true;
    pots = [];
    objs = [];
    contents = [];
    pot_angles = [];
    for (var i, _pj_c = 0, _pj_a = util.range(N_POTS), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        pot_angles.push((i * DEG_PER_POT));
        pots.push(new visual.ImageStim({"win": psychoJS.window, "name": `pot${(i + 1)}`, "image": `imgs/pot${(i + 1)}.png`, "pos": deg2xy(pot_angles[i], RADIUS), "size": 0.1}));
        objs.push(null);
        contents.push(null);
    }
    for (var pot, _pj_c = 0, _pj_a = pots, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        pot = _pj_a[_pj_c];
        pot.autoDraw = true;
    }
    STICKER_X0 = 0.5;
    STICKER_Y0 = 0.25;
    stickers = [];
    sticker_coords = [];
    for (var i, _pj_c = 0, _pj_a = util.range(N_STICKERS), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        sticker_coords.push([STICKER_X0, (STICKER_Y0 - (0.1 * i))]);
        stickers.push(new visual.ImageStim({"win": psychoJS.window, "name": `sticker${(i + 1)}`, "image": `imgs/sticker${(i + 1)}.png`, "pos": sticker_coords[i], "size": 0.05}));
    }
    for (var sticker, _pj_c = 0, _pj_a = stickers, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        sticker = _pj_a[_pj_c];
        sticker.autoDraw = true;
    }
    pot_idxs = [0, 1, 3, 4, 5, 6];
    xxx = [];
    yyy = [];
    xx = [];
    yy = [];
    idx = 0;
    for (var i, _pj_c = 0, _pj_a = util.range(N_STICKERS), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        sticker = stickers[i];
        pot = pots[pot_idxs[i]];
        xx = [];
        yy = [];
        for (var j, _pj_f = 0, _pj_d = util.range(N_FRAMES), _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
            j = _pj_d[_pj_f];
            xx.push((sticker.pos[0] + (((pot.pos[0] - sticker.pos[0]) / N_FRAMES) * j)));
            yy.push((sticker.pos[1] + (((pot.pos[1] - sticker.pos[1]) / N_FRAMES) * j)));
        }
        xxx.push(xx);
        yyy.push(yy);
    }
    start_frame = null;
    auto_sorting = false;
    move_idx = 0;
    
    // setup some python lists for storing info about the place_mouse
    place_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    placeComponents = [];
    placeComponents.push(place_mouse);
    placeComponents.push(place_disp);
    placeComponents.push(sort_button);
    placeComponents.push(spin_button);
    
    placeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var buttonState;
var prevButtonState;
var _mouseButtons;
function placeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'place'-------
    // get current time
    t = placeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((! auto_sorting)) {
        buttonState = place_mouse.getPressed()[0];
        if ((prevButtonState !== buttonState)) {
            prevButtonState = buttonState;
            if ((buttonState === 1)) {
                if (sort_button.contains(place_mouse)) {
                    auto_sorting = true;
                    start_frame = frameN;
                }
            }
        }
    } else {
        idx = ((frameN - start_frame) - 1);
        if ((move_idx < N_STICKERS)) {
            stickers[move_idx].pos = [xxx[move_idx][idx], yyy[move_idx][idx]];
            if (((idx + 1) >= xxx[move_idx].length)) {
                if (snapped(stickers[move_idx], pots[pot_idxs[move_idx]])) {
                    objs[i] = stickers[move_idx];
                    contents[i] = stickers[move_idx].name;
                    stickers_left -= 1;
                }
                move_idx += 1;
                start_frame = frameN;
            }
        }
    }
    if ((move_idx >= N_STICKERS)) {
        sort_button.size = [0, 0];
    }
    place_disp.text = `
    Sticker left: ${stickers_left}
    contents = ${contents}
    auto_sorting = ${auto_sorting}
    frameN = ${frameN}
    start_frame = ${start_frame}
    idx = ${idx}
    N_FRAMES_ALL = ${N_FRAMES_ALL}`
    ;
    if ((! DRAGGING)) {
        for (var sticker, _pj_c = 0, _pj_a = stickers, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            sticker = _pj_a[_pj_c];
            if (place_mouse.isPressedIn(sticker)) {
                clicked_obj = sticker;
                for (var i, _pj_f = 0, _pj_d = util.range(N_POTS), _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
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
    if ((place_mouse.getPressed()[0] === 1)) {
        if (DRAGGING) {
            clicked_obj.pos = place_mouse.getPos();
        }
    } else {
        DRAGGING = false;
        if ((clicked_obj !== null)) {
            for (var i, _pj_c = 0, _pj_a = util.range(N_POTS), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
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
    if ((stickers_left < 1)) {
        spin_button.size = SPIN_BUTTON_SIZE;
    } else {
        spin_button.size = [0, 0];
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

    
    // *sort_button* updates
    if (t >= 0.0 && sort_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sort_button.tStart = t;  // (not accounting for frame time here)
      sort_button.frameNStart = frameN;  // exact frame index
      
      sort_button.setAutoDraw(true);
    }

    
    // *spin_button* updates
    if (t >= 0.0 && spin_button.status === PsychoJS.Status.NOT_STARTED) {
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
    placeComponents.forEach( function(thisComponent) {
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


function placeRoutineEnd() {
  return async function () {
    //------Ending Routine 'place'-------
    placeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    for (var sticker, _pj_c = 0, _pj_a = stickers, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        sticker = _pj_a[_pj_c];
        sticker.autoDraw = false;
    }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "place" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var SPIN_DUR;
var SPEED_MULTIPLER;
var spinComponents;
function spinRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'spin'-------
    t = 0;
    spinClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    SPIN_DUR = 4;
    SPEED_MULTIPLER = 3;
    
    // keep track of which components have finished
    spinComponents = [];
    spinComponents.push(spin_timer);
    
    spinComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    shift = ((SPEED_MULTIPLER * t) * (SPIN_DUR - t));
    for (var i, _pj_c = 0, _pj_a = util.range(N_POTS), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        pot_angles[i] = ((pot_angles[i] + shift) % 360);
        pots[i].pos = deg2xy(pot_angles[i], RADIUS);
        if ((objs[i] !== null)) {
            objs[i].pos = pots[i].pos;
        }
    }
    turntable.ori = ((turntable.ori - shift) % 360);
    
    
    // *spin_timer* updates
    if (t >= 0.0 && spin_timer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spin_timer.tStart = t;  // (not accounting for frame time here)
      spin_timer.frameNStart = frameN;  // exact frame index
      
      spin_timer.setAutoDraw(true);
    }

    frameRemains = 0.0 + SPIN_DUR - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    spinComponents.forEach( function(thisComponent) {
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


function spinRoutineEnd() {
  return async function () {
    //------Ending Routine 'spin'-------
    spinComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "spin" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var SHOW_DUR;
var END_TRIAL;
var END_BUTTON_SIZE;
var score;
var clicks_left;
var stickers_found;
var contents_copy;
var pot_choices;
var sticker_choices;
var outcome;
var buttons;
var blanks;
var starts;
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
    contents_copy = contents.slice(0);
    pot_choices = [];
    sticker_choices = [];
    outcome = [];
    buttons = util.sum(trial_mouse.getPressed());
    blanks = [];
    starts = [];
    for (var i, _pj_c = 0, _pj_a = util.range(N_POTS), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
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
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(trial_mouse);
    trialComponents.push(trial_disp);
    trialComponents.push(trial_end);
    trialComponents.push(end_button);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    if (END_TRIAL) {
        end_button.size = END_BUTTON_SIZE;
    } else {
        if ((stickers_found >= 6)) {
            trial_disp.text = `All stickers found!`;
            END_TRIAL = true;
        } else {
            if ((clicks_left < 1)) {
                trial_disp.text = `No tries left!`;
                END_TRIAL = true;
            } else {
                trial_disp.text = `Tries left = ${clicks_left}`;
                if ((buttons !== util.sum(trial_mouse.getPressed()))) {
                    buttons = util.sum(trial_mouse.getPressed());
                    for (var i, _pj_c = 0, _pj_a = util.range(N_POTS), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                        i = _pj_a[_pj_c];
                        if (((starts[i] === null) && trial_mouse.isPressedIn(pots[i]))) {
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
                for (var i, _pj_c = 0, _pj_a = util.range(N_POTS), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
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
    
    // *end_button* updates
    if ((END_TRIAL) && end_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_button.tStart = t;  // (not accounting for frame time here)
      end_button.frameNStart = frameN;  // exact frame index
      
      end_button.setAutoDraw(true);
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
    psychoJS.experiment.addData("contents", contents_copy);
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
