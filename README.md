# dbSounds
### Virtual Midi Board
> An app where producers can upload sounds, test, and record them online and share with other producers in the database.
![ScreenShot](https://raw.github.com/tsabz/dbsounds/issues/1#issue-663451680)

[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger) 

- [Technology Used](#TechnologyUsed)
- [Features](#Features)
- [Example](#Example)
- [Resources](#Resources)


## Technology Used
>Node.js, Express.js, PostgresSQL, Express-Session, Reactjs
---

## Features 
>User can add their info to the database, use keyboard and touch screen to interact with the midi
---

## Example 

```javascript

const Midi = () => { 
    let [play] = useSound(baseloop, {
        sprite: {
            kick: [0, 1800],
            hihat: [1800, 2100]
          },
    });
}
```

---


### View Live App 
https://dbsounds.herokuapp.com/

## Strech Goals


## Resources 
https://www.postgresqltutorial.com/postgresql-create-table/
https://medium.com/@olinations/build-a-crud-template-using-react-bootstrap-express-postgres-9f84cc444438
https://joshwcomeau.com/react/announcing-use-sound-react-hook/#installation
https://github.com/joshwcomeau/use-sound/blob/master/stories/demos/DrumMachine.js#L5
https://neumorphism.io/#383838
https://codepen.io/beben-koben/pen/gfuvc?editors=1100
