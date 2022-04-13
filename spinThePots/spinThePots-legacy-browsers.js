/******************** 
 * Spinthepots Test *
 ********************/


// store info about the experiment session:
let expName = 'spinThePots';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// Start code blocks for 'Before Experiment'

function deg2xy(deg, radius) {
    /*Convert polar (angle in degrees) to
    Cartesian coordinates.
    */
    var rad, x, y;
    [rad] = [((deg * pi) / 180)];
    [x, y] = [(radius * Math.sin(rad)), (radius * Math.cos(rad))];
    return [x, y];
}

function dxdy(a, b) {
    /*Calculate the x and y displacements
    between objects a and b (b as reference).
    */
    var dx, dy;
    [dx, dy] = [(a[0] - b[0]), (a[1] - b[1])];
    return [dx, dy];
}

function dist2(p, q) {
    /*Calculate the square of the distance
    between objects a and b.
    */
    var dx, dy;
    [dx, dy] = dxdy(p, q);
    return ((dx * dx) + (dy * dy));
}

function snapped(a, b, thresh2 = THRESH2) {
    /*Check if an object a is close enough to
    another object b. If yes, move object a to
    object b's position and return True. If no,
    return False.
    */
    if ((dist2(a.pos, b.pos) <= thresh2)) {
        a.pos = b.pos;
        return true;
    }
    return false;
}

function repelled(a, b, r = 0.1, thresh2 = THRESH2) {
    /*Check if an object a is too close to
    another object b. If yes, move object a away
    from object b and return True. If no, return
    False.
    */
    var d2, di, dj, dx, dy, i, j, ratio;
    [d2] = [dist2(a.pos, b.pos)];
    if (((d2 > 0) && (d2 <= thresh2))) {
        [ratio] = [(r / Math.sqrt(d2))];
        [dx, dy] = dxdy(a.pos, b.pos);
        [di, dj] = [(ratio * dx), (ratio * dy)];
        [i, j] = b.pos;
        a.pos = [(i + di), (j + dj)];
        return true;
    }
    return false;
}

function linear_coords(start, end, n) {
    /*Generate a list of (x, y) coordinates along
    a line from start to end over n frames.
    */
    var dx, dy, x0, x1, xys, y0, y1;
    [x0, x1] = [start[0], end[0]];
    [y0, y1] = [start[1], end[1]];
    [dx, dy] = [((x1 - x0) / n), ((y1 - y0) / n)];
    [xys] = [[]];
    for (var i, _pj_c = 0, _pj_a = util.range(n), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        xys.push([(x0 + (dx * i)), (y0 + (dy * i))]);
    }
    return xys;
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
    {'name': 'imgs/pot8.png', 'path': 'imgs/pot8.png'},
    {'name': 'imgs/pot3.png', 'path': 'imgs/pot3.png'},
    {'name': 'imgs/turntable.png', 'path': 'imgs/turntable.png'},
    {'name': 'imgs/pot2.png', 'path': 'imgs/pot2.png'},
    {'name': 'imgs/pot5.png', 'path': 'imgs/pot5.png'},
    {'name': 'imgs/end-btn.png', 'path': 'imgs/end-btn.png'},
    {'name': 'imgs/sort-btn.png', 'path': 'imgs/sort-btn.png'},
    {'name': 'imgs/pot7.png', 'path': 'imgs/pot7.png'},
    {'name': 'imgs/empty-box.png', 'path': 'imgs/empty-box.png'},
    {'name': 'imgs/star.png', 'path': 'imgs/star.png'},
    {'name': 'imgs/spin-btn.png', 'path': 'imgs/spin-btn.png'},
    {'name': 'imgs/pot6.png', 'path': 'imgs/pot6.png'},
    {'name': 'imgs/pot1.png', 'path': 'imgs/pot1.png'},
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
var SHOW_DEBUG;
var N_POTS;
var N_STICKERS;
var TOTAL_ANIMATION_SECONDS;
var RADIUS;
var STICKER_X0;
var STICKER_Y0;
var THRESH2;
var draggingInProgress;
var draggedObject;
var SORT_BUTTON_SIZE;
var SPIN_BUTTON_SIZE;
var END_BUTTON_SIZE;
var DEG_PER_POT;
var SEC_PER_STICKER;
var N_FRAMES;
var place_mouse;
var place_disp;
var spinClock;
var spin_timer;
var trialClock;
var SHOW_DUR;
var SHOW_END;
var END_EXPERIMENT;
var write_current_row;
var trial_mouse_state;
var prev_trial_mouse_state;
var chosen_pots;
var current_working_memory_score;
var current_preservation_score;
var stickers_found;
var stickers_found_idx;
var guesses_left;
var trial_num;
var sticker_names;
var sticker_locations;
var number_of_clicks;
var time_to_first_click;
var time_to_last_click;
var pot_chosen;
var sticker_in_chosen_pot;
var trial_outcome;
var trial_mouse;
var trial_disp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "place"
  placeClock = new util.Clock();
  SHOW_DEBUG = false;
  N_POTS = 8;
  N_STICKERS = 6;
  TOTAL_ANIMATION_SECONDS = 3;
  /* Length/Position have units of % screen height */
  RADIUS = 0.25;
  STICKER_X0 = 0.5;
  STICKER_Y0 = 0.25;
  /*Snap and repel threshold
  - Distance of 5% of screen from center of pot
  - Why 5%: 'It looks about right'*/
  THRESH2 = (0.05 * 0.05);
  draggingInProgress = false;
  draggedObject = null;
  SORT_BUTTON_SIZE = [0.136, 0.1];
  SPIN_BUTTON_SIZE = [0.156, 0.1];
  END_BUTTON_SIZE = [0.13, 0.1];
  DEG_PER_POT = (360 / N_POTS);
  SEC_PER_STICKER = (TOTAL_ANIMATION_SECONDS / N_STICKERS);
  N_FRAMES = Number.parseInt((SEC_PER_STICKER / frameDur));
  
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
  SHOW_DUR = 1.0;
  SHOW_END = false;
  END_EXPERIMENT = false;
  write_current_row = false;
  trial_mouse_state = 0;
  prev_trial_mouse_state = 0;
  chosen_pots = [];
  current_working_memory_score = 16;
  current_preservation_score = 0;
  stickers_found = 0;
  stickers_found_idx = 0;
  guesses_left = 16;
  trial_num = null;
  sticker_names = [];
  sticker_locations = [];
  number_of_clicks = 0;
  time_to_first_click = null;
  time_to_last_click = null;
  pot_chosen = null;
  sticker_in_chosen_pot = null;
  trial_outcome = null;
  
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
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var auto_sorting;
var place_mouse_state;
var prev_place_mouse_state;
var sort_button;
var spin_button;
var turntable;
var pots;
var pot_angles;
var stickers;
var sticker_coords;
var pot_idxs;
var xyss;
var start_frame;
var idx;
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
    auto_sorting = false;
    place_mouse_state = 0;
    prev_place_mouse_state = 0;
    sort_button = new visual.ImageStim({"win": psychoJS.window, "name": "sort_button", "image": "imgs/sort-btn.png", "pos": [0.5, (- 0.4)], "size": SORT_BUTTON_SIZE});
    sort_button.autoDraw = true;
    spin_button = new visual.ImageStim({"win": psychoJS.window, "name": "spin_button", "image": "imgs/spin-btn.png", "pos": [0, (- 0.4)], "size": [0, 0]});
    spin_button.autoDraw = true;
    turntable = new visual.ImageStim({"win": psychoJS.window, "name": "turntable", "image": "imgs/turntable.png", "pos": [0, 0], "size": 0.65, "opacity": 0.7});
    turntable.autoDraw = true;
    pots = [];
    pot_angles = [];
    for (var i, _pj_c = 0, _pj_a = util.range(N_POTS), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        pot_angles.push((i * DEG_PER_POT));
        pots.push(new visual.ImageStim({"win": psychoJS.window, "name": `pot${(i + 1)}`, "image": `imgs/pot${(i + 1)}.png`, "pos": deg2xy(pot_angles[i], RADIUS), "size": 0.1}));
        pots.slice((- 1))[0].autoDraw = true;
        pots.slice((- 1))[0].content = null;
        pots.slice((- 1))[0].vis_t = null;
    }
    stickers = [];
    sticker_coords = [];
    for (var i, _pj_c = 0, _pj_a = util.range(N_STICKERS), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        sticker_coords.push([STICKER_X0, (STICKER_Y0 - (0.1 * i))]);
        stickers.push(new visual.ImageStim({"win": psychoJS.window, "name": `sticker${(i + 1)}`, "image": `imgs/star.png`, "pos": sticker_coords[i], "size": 0.05}));
        stickers.slice((- 1))[0].autoDraw = true;
        stickers.slice((- 1))[0].location = null;
    }
    pot_idxs = [0, 1, 3, 4, 5, 6];
    xyss = [];
    for (var i, _pj_c = 0, _pj_a = util.range(N_STICKERS), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        xyss.push(linear_coords(stickers[i].pos, pots[pot_idxs[i]].pos, N_FRAMES));
    }
    start_frame = null;
    idx = 0;
    move_idx = 0;
    
    // setup some python lists for storing info about the place_mouse
    place_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    placeComponents = [];
    placeComponents.push(place_mouse);
    placeComponents.push(place_disp);
    
    placeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var stickers_left;
var prevButtonState;
var _mouseButtons;
function placeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'place'-------
    // get current time
    t = placeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    stickers_left = 0;
    for (var sticker, _pj_c = 0, _pj_a = stickers, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        sticker = _pj_a[_pj_c];
        if ((sticker.location === null)) {
            stickers_left += 1;
        }
    }
    if ((stickers_left < 1)) {
        spin_button.size = SPIN_BUTTON_SIZE;
        sort_button.size = [0, 0];
    } else {
        spin_button.size = [0, 0];
        sort_button.size = SORT_BUTTON_SIZE;
    }
    if (auto_sorting) {
        if ((move_idx < N_STICKERS)) {
            idx = ((frameN - start_frame) - 1);
            stickers[move_idx].pos = xyss[move_idx][idx];
            if (((idx + 1) >= xyss[move_idx].length)) {
                if (snapped(stickers[move_idx], pots[pot_idxs[move_idx]])) {
                    stickers[move_idx].location = pots[pot_idxs[move_idx]].name;
                    pots[pot_idxs[move_idx]].content = stickers[move_idx].name;
                }
                move_idx += 1;
                start_frame = frameN;
            }
        } else {
            auto_sorting = false;
            move_idx = 0;
        }
    } else {
        if (draggingInProgress) {
            if ((place_mouse.getPressed()[0] === 1)) {
                draggedObject.pos = place_mouse.getPos();
            } else {
                draggingInProgress = false;
                for (var pot, _pj_c = 0, _pj_a = pots, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                    pot = _pj_a[_pj_c];
                    if ((pot.content === null)) {
                        if (snapped(draggedObject, pot)) {
                            pot.content = draggedObject.name;
                            draggedObject.location = pot.name;
                            break;
                        }
                    } else {
                        if (repelled(draggedObject, pot)) {
                            break;
                        }
                    }
                }
            }
        } else {
            for (var sticker, _pj_c = 0, _pj_a = stickers, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                sticker = _pj_a[_pj_c];
                if (place_mouse.isPressedIn(sticker)) {
                    draggingInProgress = true;
                    draggedObject = sticker;
                    sticker.location = null;
                    for (var pot, _pj_f = 0, _pj_d = pots, _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
                        pot = _pj_d[_pj_f];
                        if ((pot.content === sticker.name)) {
                            pot.content = null;
                            break;
                        }
                    }
                }
            }
            if ((! draggingInProgress)) {
                place_mouse_state = place_mouse.getPressed()[0];
                if ((prev_place_mouse_state !== place_mouse_state)) {
                    prev_place_mouse_state = place_mouse_state;
                    if ((place_mouse_state === 1)) {
                        if (sort_button.contains(place_mouse)) {
                            auto_sorting = true;
                            start_frame = frameN;
                            for (var pot, _pj_c = 0, _pj_a = pots, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                                pot = _pj_a[_pj_c];
                                pot.content = null;
                            }
                            for (var sticker, _pj_c = 0, _pj_a = stickers, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                                sticker = _pj_a[_pj_c];
                                sticker.location = null;
                            }
                        }
                    }
                }
            }
        }
    }
    if (SHOW_DEBUG) {
        place_disp.text = `
    stickers_left = ${stickers_left}
    ${stickers[0].name}.location = ${stickers[0].location}
    ${stickers[1].name}.location = ${stickers[1].location}
    ${stickers[2].name}.location = ${stickers[2].location}
    ${stickers[3].name}.location = ${stickers[3].location}
    ${stickers[4].name}.location = ${stickers[4].location}
    ${stickers[5].name}.location = ${stickers[5].location}`
    ;
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
    spin_button.size = [0, 0];
    spin_button.autoDraw = false;
    sort_button.autoDraw = false;
    
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
        pot_angles[i] += shift;
        pots[i].pos = deg2xy(pot_angles[i], RADIUS);
    }
    /*PsychoPy and PsychoJS have opposite directions
    for angular displacement. We make it work for
    PsychoJS here. If you wish to run the PsychoPy
    version, change 'Auto->JS' to 'Both' and uncomment
    the appropriate line below.*/
    turntable.ori = (turntable.ori - shift);
    
    
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


var end_button;
function spinRoutineEnd() {
  return async function () {
    //------Ending Routine 'spin'-------
    spinComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    for (var sticker, _pj_c = 0, _pj_a = stickers, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        sticker = _pj_a[_pj_c];
        for (var pot, _pj_f = 0, _pj_d = pots, _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
            pot = _pj_d[_pj_f];
            if ((pot.content === sticker.name)) {
                sticker.pos = pot.pos;
                break;
            }
        }
    }
    for (var i, _pj_c = 0, _pj_a = util.range(N_POTS), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        pots[i].blank = new visual.ImageStim({"win": psychoJS.window, "name": `blank${(i + 1)}`, "image": `imgs/empty-box.png`, "pos": pots[i].pos, "size": 0.05, "opacity": 1.0});
    }
    end_button = new visual.ImageStim({"win": psychoJS.window, "name": "end_button", "image": "imgs/end-btn.png", "pos": [0, (- 0.4)], "size": [0, 0]});
    end_button.autoDraw = true;
    
    // the Routine "spin" was not non-slip safe, so reset the non-slip timer
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
      nReps: 16, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
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
    if (END_EXPERIMENT) {
        continueRoutine = false;
    } else {
        trial_num = (trials.thisRepN + 1);
        sticker_names = [];
        sticker_locations = [];
        for (var sticker, _pj_c = 0, _pj_a = stickers, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            sticker = _pj_a[_pj_c];
            sticker_names.push(sticker.name);
            sticker_locations.push(sticker.location);
        }
        number_of_clicks = 0;
        time_to_first_click = null;
        time_to_last_click = null;
        pot_chosen = null;
        sticker_in_chosen_pot = null;
        trial_outcome = null;
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
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(trial_mouse);
    trialComponents.push(trial_disp);
    
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
    if ((! END_EXPERIMENT)) {
        if (SHOW_END) {
            end_button.size = END_BUTTON_SIZE;
            trial_mouse_state = trial_mouse.getPressed()[0];
            if ((prev_trial_mouse_state !== trial_mouse_state)) {
                prev_trial_mouse_state = trial_mouse_state;
                if ((trial_mouse_state === 1)) {
                    if (end_button.contains(trial_mouse)) {
                        END_EXPERIMENT = true;
                        write_current_row = true;
                        continueRoutine = false;
                    }
                }
            }
        } else {
            trial_mouse_state = trial_mouse.getPressed()[0];
            if ((prev_trial_mouse_state !== trial_mouse_state)) {
                prev_trial_mouse_state = trial_mouse_state;
                if ((trial_mouse_state === 1)) {
                    if ((number_of_clicks === 0)) {
                        time_to_first_click = t;
                    }
                    number_of_clicks += 1;
                    for (var pot, _pj_c = 0, _pj_a = pots, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                        pot = _pj_a[_pj_c];
                        if (pot.contains(trial_mouse)) {
                            if ((pot.vis_t === null)) {
                                guesses_left -= 1;
                                time_to_last_click = t;
                                pot_chosen = pot.name;
                                for (var chosen_pot, _pj_f = 0, _pj_d = chosen_pots, _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
                                    chosen_pot = _pj_d[_pj_f];
                                    if ((pot.name === chosen_pot)) {
                                        current_preservation_score += 1;
                                        break;
                                    }
                                }
                                chosen_pots.push(pot.name);
                                if ((pot.content === null)) {
                                    trial_outcome = "wrong";
                                    current_working_memory_score -= 1;
                                } else {
                                    trial_outcome = "correct";
                                    sticker_in_chosen_pot = pot.content;
                                    stickers_found += 1;
                                    for (var sticker, _pj_f = 0, _pj_d = stickers, _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
                                        sticker = _pj_d[_pj_f];
                                        if ((pot.content === sticker.name)) {
                                            sticker.location = null;
                                            break;
                                        }
                                    }
                                }
                                pot.vis_t = globalClock.getTime();
                                if (((trial_num < 16) && (stickers_found < N_STICKERS))) {
                                    write_current_row = true;
                                    continueRoutine = false;
                                } else {
                                    SHOW_END = true;
                                }
                            }
                        }
                    }
                }
            }
        }
        for (var pot, _pj_c = 0, _pj_a = pots, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            pot = _pj_a[_pj_c];
            if ((pot.vis_t !== null)) {
                if (((globalClock.getTime() - pot.vis_t) < SHOW_DUR)) {
                    if ((pot.content === null)) {
                        pot.blank.autoDraw = true;
                    } else {
                        for (var sticker, _pj_f = 0, _pj_d = stickers, _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
                            sticker = _pj_d[_pj_f];
                            if ((pot.content === sticker.name)) {
                                sticker.autoDraw = true;
                                break;
                            }
                        }
                    }
                } else {
                    if ((pot.content === null)) {
                        pot.blank.autoDraw = false;
                    } else {
                        for (var sticker, _pj_f = 0, _pj_d = stickers, _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
                            sticker = _pj_d[_pj_f];
                            if ((pot.content === sticker.name)) {
                                sticker.pos = sticker_coords[stickers_found_idx];
                                stickers_found_idx += 1;
                                break;
                            }
                        }
                        pot.content = null;
                    }
                    pot.vis_t = null;
                }
            }
        }
        if (SHOW_DEBUG) {
            trial_disp.text = `
    trial_num = ${trial_num}
    stickers_found = ${stickers_found}
    number_of_clicks = ${number_of_clicks}
    time_to_first_click = ${round(time_to_first_click, 3)}
    trial_mouse_state = ${trial_mouse_state}
    prev_trial_mouse_state = ${prev_trial_mouse_state}`
    ;
        } else {
            trial_disp.text = `Guesses left: ${guesses_left}`;
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
    if (write_current_row) {
        write_current_row = false;
        psychoJS.experiment.addData("trial_num", trial_num);
        for (var i, _pj_c = 0, _pj_a = util.range(N_STICKERS), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            psychoJS.experiment.addData(`${sticker_names[i]}_location`, sticker_locations[i]);
        }
        psychoJS.experiment.addData("number_of_clicks", number_of_clicks);
        psychoJS.experiment.addData("time_to_first_click", time_to_first_click);
        psychoJS.experiment.addData("time_to_last_click", time_to_last_click);
        psychoJS.experiment.addData("pot_chosen", pot_chosen);
        psychoJS.experiment.addData("sticker_in_chosen_pot", sticker_in_chosen_pot);
        psychoJS.experiment.addData("trial_outcome", trial_outcome);
        psychoJS.experiment.addData("current_working_memory_score", current_working_memory_score);
        psychoJS.experiment.addData("current_preservation_score", current_preservation_score);
    }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('trial_mouse.x', trial_mouse.x);
    psychoJS.experiment.addData('trial_mouse.y', trial_mouse.y);
    psychoJS.experiment.addData('trial_mouse.leftButton', trial_mouse.leftButton);
    psychoJS.experiment.addData('trial_mouse.midButton', trial_mouse.midButton);
    psychoJS.experiment.addData('trial_mouse.rightButton', trial_mouse.rightButton);
    psychoJS.experiment.addData('trial_mouse.time', trial_mouse.time);
    psychoJS.experiment.addData('trial_mouse.clicked_name', trial_mouse.clicked_name);
    
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
