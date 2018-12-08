module.exports = function(sequelize, Sequelize) {
  var Murders = sequelize.define('murders', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
 
    action: {
      type: Sequelize.TEXT,
      notEmpty: true,
    },
 
    optionOne: {
      type: Sequelize.TEXT,
    },
 
    optionTwo: {
      type: Sequelize.TEXT,
    },
 
    murderID: {
      type: Sequelize.STRING,
    },

    endpoint: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  });
 
  Murders.bulkCreate([
    {
      action:
        'It’s a cold and rainy Monday night.  You’re walking to class at SMU on what seems like a normal evening. You enter Hyer Hall and the lights flicker. You walk up the stairs to room 200 and open the door. You scream',
      optionOne: 'Check for a heart beat.',
      optionTwo: 'Call campus security.',
      murderID: 'start',
    },
    {
      action:
        'You rush to him and check his heartbeat, but you find nothing. The body is still warm. You check his pockets for clues and  find $4.29, a e-cig, a thumb-drive, and a post-it note with the word “MOGUL” scrawled on it.. You take these items and stuff them in your pockets. You turn around to leave room 200, but a shadowy figure with an axe is standing in the doorway, blocking your path. What do you do? ',
      optionOne: 'Ask who it is',
      optionTwo: 'Fight!',
      murderID: '1',
    },
    {
      action:
        'You pull out your phone and the battery is dead. You race out of the building and into the quad. It’s pouring rain and you forgot your umbrella. Where do you go?',
      optionOne: 'Run to the Airport Garage to charge your phone',
      optionTwo: 'Go to Starbucks and ask to use someone’s phone',
      murderID: '2',
    },
    {
      action:
        'You frantically look around for weapons. You grab a chair, run towards the it, and swing the chair with all of your might. The axe falls to the floor. Direct hit! The figure collapses to the floor. What do you do next?',
      optionOne: 'Find out who it is',
      optionTwo: 'Run!',
      murderID: 'A.1',
    },
    {
      action:
        'Who’s there?”, you ask nervously. The figure moves closer to you, still in the shadows. “Who’s there?!” you ask a little louder. The figure moves even closer until you are just inches apart, your back is against the wall. You scream as you feel the knife inserted into your gut. As the darkness falls over you, a voice that sounds like Arnold Schwarzenegger but not quite comes from the figure… “Get to the choppa!',
      murderID: 'A.2.EP',
      endpoint: true,
    },
  ])
    .then(() => {
      return Murders.findAll();
    })
    .then((murders) => {
      console.log(murders);
    });
  return Murders;
 };
 