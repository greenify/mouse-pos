mouse-pos
==========

A super simple cross-browser library to get the correct coordinates of your mouse event.
Just pass the method the event obj and it will return the distance you need (as array).

```
npm install mouse-pos
```

#### getRelCoords(e) - relative to the target

`[x,y]`

#### getAbsCoords(e) - absolute to the screen

`[x,y]`

#### getWheelDelta(e)

`float` of pixels the mouse wheel moved. Could be negative.

