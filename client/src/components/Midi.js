import React from 'react';
import useSound from 'use-sound';
import baseloop from './sounds/baseloop.wav';
// import disco from './sounds/disco.mp3';ž

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
    const [play] = useSound(baseloop, {
        sprite: {
            kick: [0, 1800],
            hihat: [1800, 2100]
          },
    });



    useKeyboardBindings({
        1: () => play({ id: 'kick' }),
        2: () => play({ id: 'hihat' }),
        3: () => play({ id: 'drum1' }),
        4: () => play({ id: 'drum2' }),
      });

    // useKeyboardBindings({
    //     1: () => play({})
    // })

        
        return (
            <div className="midicontainer">
                <div className="buttonrow">
                    <>
                    <button arian-label="kick" onMouseDown={() => play({id: 'kick'})} className="square">1</button>
                    
                    <button arian-label="hihat" onMouseDown={() => play({id: 'hihat'})} className="square">2</button>
                    <button className="square">3</button>
                    
                    <button arian-label="snare" onMouseDown={() => play({id: 'drum1'})} className="square">4</button>
                    <button arian-label="cowbell" onMouseDown={() => play({id: 'drum2'})} className="square">5</button>
                    </>
                    <button className="square">6</button>
                    <button className="square">7</button>
                    <button className="square">8</button>
                </div>
                <div className="buttonrow">
                    <button className="square">a</button>
                    <button className="square">s</button>
                    <button className="square">d</button>
                    <button className="square">f</button>
                    <button className="square">g</button>
                    <button className="square">h</button>
                    <button className="square">j</button>
                    <button className="square">k</button>
                </div>
                <div className="buttonrow">
                    <button className="square">31</button>
                    <button className="square">32</button>
                    <button className="square">33</button>
                    <button className="square">34</button>
                    <button className="square">35</button>
                    <button className="square">36</button>
                    <button className="square">37</button>
                    <button className="square">38</button>
                </div>
            </div>
        )
}



export default Midi