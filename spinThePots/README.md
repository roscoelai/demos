## Spin the Pots (Hughes and Ensor, 2005)

[spinThePots](https://roscoelai.github.io/demos/spinThePots/)

```
The Spin the Pots task was developed to assess working memory and inhibition 
in young children. The child was shown eight distinct "pots" which are set up 
on a Lazy Susan tray, and then invited to help the researcher place attractive 
stickers in six of the eight pots. The tray was then covered with a cloth and 
spun. Following this, the cloth was removed and the child choose a pot with 
the aim of finding all six stickers without error. Each choice was recorded 
and the child congratulated/encouraged before moving on to the next trial. 
Fixed spatial cues could not be used due to the rotation of the cups. Children 
were allowed a maximum of 16 trials and the task ended when all six stickers 
had been found. The task was scored as 16 minus the number of errors.
```

---

TODO:
- [x] Draw 8 _distinct_ pots on the screen ( different colors, for now )
- [x] Draw 6 stickers on the screen ( somewhere on the right, for now )
- [x] Click-and-drag stickers
- [x] 'Snap' sticker to pot if close enough ( on mouse up )
- [x] Limit one sticker per pot
- [x] 'Repel' sticker if pot is already occupied
- [x] Remove sticker from pot when clicked ( allow changing mind )
- [x] Make stickers disappear ( after _all_ stickers placed, for now )
- [ ] Or make then disappear immediately after 'snapping'
    - Remove sticker will become redundant ( and impossible )
- [ ] Transition between placement and spin is... rather weird
- [x] Draw a 'spin' button after all stickers placed in pots
- [x] Spin animation for pots
- [x] Draw image of some turntable that revolves with the pots
- [ ] Draw 'cover' or 'lid' for turntable ( that can also show rotation )
- [x] On clicking correct pot, reveal sticker at side
- [x] On clicking correct pot, reveal sticker at pot, then move to side
- [ ] Animate the movement?
- [ ] Show some congratulatory message
- [x] On clicking incorrect pot, reveal blank at pot for a short while
- [x] Rules for ending experiment ( 16 clicks or 6 stickers found )
- [x] Record which pots were clicked on in order
- [x] Record if choices were correct/incorrect in order
- [x] Test JS (online) version
- [ ] Record which pots contained which stickers
- [ ] Calculate score
- [ ] Rethink what to record
- [ ] Declutter output CSV
- [ ] Test robustness ( try to break the thing )
