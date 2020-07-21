import React from 'react';
import useSound from 'use-sound';
import baseloop from './sounds/baseloop.wav';
import kicks from './sounds/kicks.wav';
import virgo from './sounds/virgo.wav';
import wave from './sounds/wave.mp3';



const useKeyboardBindings = map => {
    React.useEffect(() => {
      const handlePress = ev => {
        const handler = map[ev.key];
  
        if (typeof handler === 'function') {
          handler();
        }
      };
  
      window.addEventListener('keydown', handlePress);
  
      return () => {
        window.removeEventListener('keydown', handlePress);
      };
    }, [map]);
  };



const Midi = () => { 
    let [play] = useSound(baseloop, {
        sprite: {
            kick: [0, 1800],
            hihat: [1800, 2100]
          },
    });

    let [k] = useSound(kicks, {
      sprite: {
        kicks1: [0, 6000],
        kicks2: [0, 6000]
      },
    });

    let [v] = useSound(virgo, {
      sprite: {
        virgo1: [0, 500],
        virgo2: [500, 900],
        virgo3: [1200, 1250],
      },
    });

    let [w] = useSound(wave, {
      sprite: {
        wave1: [0, 3000],
        wave2: [3000, 6000],
      },
    });

    
    


    useKeyboardBindings({
        1: () => play({ id: 'kick' }),
        2: () => play({ id: 'hihat' }),
        3: () => k({ id: 'kicks1' }),
        4: () => k({ id: 'kicks2' }),
        5: () => v({ id: 'virgo1' }),
        6: () => v({ id: 'virgo2' }),
        7: () => v({ id: 'virgo3' }),
        8: () => w({ id: 'wave1' }),
        9: () => w({ id: 'wave2' })
      });
        
        return (
            <div className="midicontainer">
                <div className="buttonrow">
                    <>
                    <button arian-label="kick" onMouseDown={() => play({id: 'kick'})} className="square">1</button>
                    
                    <button arian-label="hihat" onMouseDown={() => play({id: 'hihat'})} className="square">2</button>
                    <button arian-label="snare" onMouseDown={() => k({id: 'kicks1'})} className="square">3</button>
                    
                    <button arian-label="snare" onMouseDown={() => k({id: 'kicks2'})} className="square">4</button>
                    <button arian-label="cowbell" onMouseDown={() => v({id: 'virgo1'})} className="square">5</button>
                    </>
                    <button arian-label="cowbell" onMouseDown={() => v({id: 'virgo2'})} className="square">6</button>
                    <button arian-label="cowbell" onMouseDown={() => v({id: 'virgo3'})} className="square">7</button>
                    <button arian-label="cowbell" onMouseDown={() => w({id: 'wave1'})} className="square">8</button>
                    <button arian-label="cowbell" onMouseDown={() => w({id: 'wave2'})} className="square">9</button>
                </div>
            </div>
        )
}



export default Midi