const VF = Vex.Flow;

// Create a VexFlow renderer attaced to the DIV element "boo"
var vf = new VF.Factory({renderer: {
  elementId: 'boo', height: 280 }});
var score = vf.EasyScore();
var system = vf.System();

// Create a 4/4 treble stave, and add two parallel voices
system.addStave({
  voices: [
    score.voice(
    	score.beam(score.notes('E4/8, F4', {stem: 'up'})).concat(
        score.beam(score.notes('G4/8, B4', {stem: 'up'})).concat(
          score.beam(score.notes('E4/8, F4', {stem: 'up'})).concat(
            score.beam(score.notes('D4/8, E4', {stem: 'up'}))
          )
         )
      )
    )
  ]
}).addClef('treble').addTimeSignature('4/4').addKeySignature("Eb");

/*
system.addStave({
  voices: [
    score.voice(
    	score.notes('E3/w', {stem: 'up'})
    )
  ]
}).addClef('bass').addTimeSignature('4/4').addKeySignature("Eb");
*/

system.addStave({
  voices: [
    score.voice(
      score.notes('(E2 E3)/q', {clef: 'bass', stem: 'up'}).concat(
        score.notes('(E2 D3)/h', {clef: 'bass', stem: 'up'}).concat(
          score.notes('(E2 E3)/q', {clef: 'bass', stem: 'up'})    
        )
      )
    )
  ]
}).addClef('bass').addTimeSignature('4/4').addKeySignature("Eb");

system.addConnector()


// Draw it!
vf.draw();
