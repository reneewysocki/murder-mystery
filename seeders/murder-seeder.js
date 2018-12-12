'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'murders',
      [
        {
          action:
            'It’s a cold and rainy Monday night.  You’re walking to class at SMU on what seems like a normal evening. You enter Hyer Hall and the lights flicker. You walk up the stairs to room 200 and open the door. You scream. </br></br> In the middle of the floor, Jack is laying face down, surrounded by blood. There is nothing in the room but the tables, chairs and a single Monster energy drink that has been spilled onto the tile. </br></br> <b>What do you do?</b>',
          optionOne: 'Check for a heart beat.',
          optionOneLink: '/2',
          optionTwo: 'Call campus security.',
          optionTwoLink: '/3',
          murderID: 'start',
        },
        {
          action:
            'You rush to him and check his heartbeat, but you find nothing. The body is still warm. You check his pockets for clues and  find $4.29, a e-cig, a thumb-drive, and a post-it note with the word “MOGUL” scrawled on it.. You take these items and stuff them in your pockets. You turn around to leave room 200, but a shadowy figure with an axe is standing in the doorway, blocking your path. What do you do? ',
          optionOne: 'Ask who it is',
          optionOneLink: '/5',
          optionTwo: 'Fight them!',
          optionTwoLink: '/4',
          murderID: '1',
        },
        {
          action:
            'You pull out your phone and the battery is dead. You race out of the building and into the quad. It’s pouring rain and you forgot your umbrella. Where do you go?',
          optionOne: 'Run to the Airport Garage to charge your phone',
          optionOneLink: '/6',
          optionTwo: 'Go to Starbucks and ask to use someone’s phone',
          optionTwoLink: '/7',
          murderID: '2',
        },
        {
          action:
            'You frantically look around for weapons. You grab a chair, run towards the it, and swing the chair with all of your might. The axe falls to the floor. Direct hit! The figure collapses to the floor. What do you do next?',
          optionOne: 'Find out who it is',
          optionOneLink: '/5',
          optionTwo: 'Run!',
          optionTwoLink: '/9',
          murderID: 'A.1',
        },
        {
          action:
            'Who’s there?”, you ask nervously. The figure moves closer to you, still in the shadows. “Who’s there?!” you ask a little louder. The figure moves even closer until you are just inches apart, your back is against the wall. You scream as you feel the knife inserted into your gut. As the darkness falls over you, a voice that sounds like Arnold Schwarzenegger but not quite comes from the figure… “Get to the choppa!',
          murderID: '5',
          endpoint: true,
        },
        {
          action:
            'You make your way to the parking garage, but the pond has overflowed, blocking your way, you decide to go try and trek through the water but you remember your fear of swimming since you almost drowned in White Rock Lake.  You hear growling and hissing and a lot of Sports Center.  Across the pond towards your car is Dimitry.  What do you do?',
          optionOne:
            'Ask him what he is doing in a speedo and if he knows what happened to Jack?',
          optionOneLink: '/10',
          optionTwo:
            'Realize he is repeating Sport Center stats from 1997 and his head spins around and he asks you if you pulled the latest repository for class…you get freaked out and decide to run towards Deadman.',
          optionTwoLink: '/11',
          murderID: '#',
        },
        {
          action:
            'You hurry to Starbucks, get a grande dark roast (because if you’re already there you might as well) and see Harrell and William doing the same thing. You',
          optionOne: 'Mention what you saw in Hyer',
          optionOneLink: '/12',
          optionTwo: 'Don’t mention what you saw ',
          optionTwoLink: '/13',
          murderID: '#',
        },
        {
          action:
            'You stand over the collapsed figure’s body. “What the f*ck, man? Why did you do that?” It’s your classmate, Dave. “Why did you have an axe?!” you interrogate. “I was going to practice my axe throwing after class!” he says defensively. “I’m sorry I hit you with a chair, but do you know who killed Jack?” you ask as you help him from the floor. He looks around and says “I might have an idea… Follow me.” He turns and walks away. What do you do?',
          optionOne: 'Follow him',
          optionOneLink: '/14',
          optionTwo: 'Sneak away. You don’t trust him',
          optionTwoLink: '/15',
          murderID: '#',
        },
        {
          action:
            'You hurry out of the classroom and decide the best option is to see if there is anyone at Starbucks. You rush to Starbucks, get a grande dark roast (because if you’re already there you might as well) and see Harrell and William doing the same thing. You',
          optionOne: 'Mention what you saw in Hyer',
          optionOneLink: '/12',
          optionTwo: 'Don’t mention what you saw',
          optionTwoLink: '/13',
          murderID: '#',
        },
        {
          action:
            'Dmitry begins to share his passion for the Breaststroke and tells you that he will be late today as he has been practicing for the 2020 Summer Olympics.  He tells you that Jon slacked him some code that is important and that was only for him.  Dmitry thinks you should have it',
          //ADD LINKS & FIX murderID REPLACE #
          optionOne: 'You take the Code and run towards Deadman Building',
          optionOneLink: '#',
          optionTwo:
            'You don’t believe Dmitry but you ask him if he has any cash on him, he says yes and begs you to take it, he tells you to trust him.  He hands you $4.29 and you run to Deadman Building',
          optionTwoLink: '#',
          murderID: '#',
        },
        {
          action:
            'You enter Deadman and your laptop connects to the wifi, you remember how Dmitry told you to pull the latest push.  You pull the latest repo push, and there is a new folder in the Class Repository.  It is called red-dead-redemption.  Inside the repo is a detailed README which followed the class recommendations on writing READMEs.  Inside it mentions to go to the Basement of Dallas Hall',
          //ADD LINKS & FIX murderID REPLACE #
          optionOne:
            'As you run through Deadman, you stop to take a “Courage Poop” and you find a power cord from class in the bathroom.  It is the larger size one and could be used as a weapon.  You pick it up and continue running towards Basement of Dallas Hall',
          optionOneLink: '/16',
          optionTwo:
            '2.	As you run through Deadman, you get lost and run into Jessica.  Out of nowhere she asks you if your Inspector is open on your browser.  Impatiently she starts to tell you to open your Inspector on your browser, you get nervous and run away from her.  She is fast and starts chasing you.  You run into Rebecca is dog, Tito, wearing a UPS Outfit.  Tito tells you to go down the hallway and go left towards the exit.  Tito also tells you that he will stop Jessica from chasing you, using his cuteness.  As you go down the hallway and turn left, you find a package.  Its from Tito.  Inside is a note.  You continue to the Basement of Dallas Hall',
          optionTwoLink: '#',
          murderID: '#',
        },
        {
          action:
            'You ask if either of them had been in the classroom yet and neither of them have. You mention what you saw and they each have very different reactions. Harrell decides that the three of you should get to the bottom of this and wants to go back to the room to investigate. William cautiously states that the three of you should check out Dedman Hall, because that’s where class had been moved previously. You',
          optionOne: 'Agree with Harrell and return to Hyer',
          optionOneLink: '/19',
          optionTwo: 'Agree with William and check out Dedman',
          optionTwoLink: '/20',
          murderID: '#',
        },
        {
          action:
            'You see how they’re doing and mention that you went to class and didn’t see anyone in there. Confused, they ask if you think they should check out Dallas Hall - where class had been moved in the past. You:',
          optionOne: 'Return to Hyer and deny knowing about anything in there',
          optionOneLink: '/21',
          optionTwo: 'Check out Dallas Hall while they go to Hyer',
          optionTwoLink: '/16',
          murderID: '#',
        },
        {
          action:
            'You follow Dave, and he takes you behind Dallas Hall to a tiny building named Blanton Observatory, which is padlocked shut. You:',
          //ADD LINKS & FIX murderID REPLACE #
          optionOne:
            'Use your picklocking skills that you never thought you would need to use',
          optionOneLink: '/26',
          optionTwo: 'Find somewhere else to look for classmates or clues',
          optionTwoLink: '/16',
          murderID: '#',
        },
        {
          action:
            'When Dave isn’t looking, you bolt out of the classroom and make your way to the quad. When you get there, you see the rest of the class on the steps of Dallas Hall. There’s a table set up with a birthday cake. The entire class yells “SURPRISE”. It’s at that point that Jack walks out from the building as healthy as can be. Turns out you had been working so hard on your project and homework that you forgot it was your own birthday!',
          murderID: '#',
          endpoint: true,
        },
        {
          action:
            'You walk into Dallas Hall.  There is blood all over, its dripping from the walls and the scent of Monster is present in the air.  You freeze in fear and Erik pops out wearing his Military Fatigues and wearing a “Ammo Belt” with wireless “mouses” strap to them.  He says he is following the “Boot Camp Killer”.  You verify that class is canceled and you tell Erik about how you want to go into the Basement to finish this out',
          //ADD LINKS & FIX murderID REPLACE #
          optionOne:
            'Ask Erik to follow you to the basement to investigate what is down there?',
          optionOneLink: '/17',
          optionTwo:
            'Ask Erik to get help and go to the basement by yourself to investigate what is down there?',
          optionTwoLink: '/18',
          murderID: '#',
        },
        {
          action:
            'You walk into the basement with Erik.  You find a hooded figure, surrounded by shorter figures.  They are all chanting “Soh-Cah-Toa”.  You realize almost immediately its Cheddi and his students. Erik starts throwing “Grenade Mice” but the students overtake you.  Cheddi begins giving you Math Quiz and tells you if you make a mistake that you will join Jack.  You try to answer but you make a mistake, you forgot linear algebra.  His students begin to eat you alive.  As you cry out in pain, you and Erik lock eyes in fear.  Erik tells you not to cry and the room fades to black',
          murderID: '#',
          endpoint: true,
        },
        {
          action:
            'As Erik runs to get help, you walk into the basement alone.  You find a hooded figure, surrounded by shorter figures.  They are all chanting “Soh-Cah-Toa-Soh-Cah-Toa”.  The minions overtake you.  The hooded figure begins giving you Math Quiz and tells you if you make a mistake that you will join Jack.  You try to answer but you make a mistake, you forgot linear algebra.  His Minions begin to eat you alive.  As you cry out in pain, Erik shows up with his Army unit and some weapons of Math-destruction.  Erik starts throwing his “Gernader Mice”.  You get free, Erik and his unit take control of the situation until campus police arrive.  Before Campus Police takes away the hooded figure, you go over to pull off the hood.  “Yikes it was Cheddi!” you scream, as you pull down the hood.  Cheddi yells I would of gotten away with it if it wasn’t for you meddling students.  You get an award and a A from Jessica for the rest of class for your heroics',
          murderID: '#',
          endpoint: true,
        },
        {
          action:
            'You return to Hyer, walking behind Harrell and William just in case something jumps out of nowhere. Lights still flickering, Jack is in the same position you found him in. Harrell and William are appalled at the horrific sight of their own TA lying dead in the room where they’ve learned everything from HTML to Node.js. Suddenly, the lights go out for a split second, and when they come back on the body and the pool of blood surround him has vanished. All that remains is a tiny USB flash drive. As you pick it up, you find out it’s actually a Portkey, and are subsequently transported into another dimension. You wind up in an open field in the middle of nowhere. You start looking around, until Voldemort, the dark lord himself, appears out of thin air. He points his wand, yells “AVADA KEDAVRA” and blasts you to kingdom come. All of a sudden, you wake up, in class, and realize that it was all a bad dream and you could use some more sleep at night',
          murderID: '#',
          endpoint: true,
        },
        {
          action:
            'You hurry inside Dedman to escape the rain in hopes of seeing the rest of your class, but just like in Hyer, the lights are flickering and nobody is in sight. The only thing you see is a single, opened Monster Energy at the end of a long hallway. You',
          optionOne: 'Inspect the can?',
          optionOneLink: '/22',
          optionTwo: 'Search upstairs?',
          optionTwoLink: '/23',
          murderID: '#',
        },
        {
          action:
            'When you return to Hyer with Harrell and William you’re shocked to find out that everything looks like it has gone back to normal; the lights have stopped flickering, there are other students walking around the building, and there are even some other classmates are sitting in your classroom. There isn’t a body lying on the ground - no blood either. “I guess everyone was just a little late,” you say, very confused. You decide that maybe you are just tired and forget about it, however you never see Jack again. Fast forward 1 year. It’s been almost 8 months since you completed the Bootcamp, and you’re showing your class’ repository to a couple of friends. You use the “git pull” command and see a single README file that was pushed a couple weeks ago. What you find is a letter from your course instructor, Jon. Inside Jon details what happened the night of Jack’s disappearance and murder. Apparently, Jon thought Jack was a threat to his millions of dollars in investments he had with Monster Energy',
          murderID: '#',
          endpoint: true,
        },
        {
          action:
            'You start walking to the end of the hallway (which looks like a hallway in a scary movie that you yell at the character for going down), and suddenly you see a figure cross the hall from one room to another. For some reason you still continue down the hall, and the lights completely go out. After a moment, the lights come back on. You look behind you, and Harrell and William are nowhere to be found. You look forward, and all of a sudden you see your instructor, Jon, with a knife, casually sipping on the Monster. He starts chuckling quietly, and it crescendos into a maniacal cackle, when in an instant the lights go out again',
          murderID: '#',
          endpoint: true,
        },
        {
          action:
            'The three of you run upstairs and approach another hallway. You',
          //ADD LINKS & FIX murderID REPLACE #
          optionOne: 'Go left',
          optionOneLink: '/24',
          optionTwo: 'Go right',
          optionTwoLink: '/25',
          murderID: '#',
        },
        {
          action:
            'There is one classroom in front of you with its door open, and the three of you decide to walk towards it. As you get closer and closer to the class, you feel a hand on your shoulder. You turn around, and no one is there. At this point your group channels Usain Bolt and sprints to the classroom. You slam the door behind you, pull yourself together (as much as possible), and realize that you’ve interrupted a class. You stand in front of about 50 people, talking frantically like a child who still uses a night-light and thinks there’s a monster under their bed. Naturally, no one believes the three of you and you’re told, politely, to leave the room. As you return to the hallway, the three of you decide that it’s time to wrap up the adventure and just leave it to the professionals. After a few days of investigation, they found that your instructor, Jon, had fingerprints all over the cans of Monster',
          murderID: '#',
          endpoint: true,
        },
        {
          action:
            'The lights are flickering, but for some reason there is one light towards the end of the hall that stays on constantly. As you get closer and closer, a ghostly figure flashes before you for a split second and disappears. The three of you decide that this has become too real and don’t want to explore anymore. You leave the building, call the police with William’s phone and let them handle everything from there, while you scurry to your car and go home to watch the stream of class',
          murderID: '#',
          endpoint: true,
        },
        {
          action:
            'After a few minutes of trying to pick the lock, you look around and find a large rock. You proceed to pick up said rock and repeatedly hit the padlock until it breaks off from the door. You open the door to the tiny shack of a building, and see your other TA, Jessica. She is alive, but tied to a chair. She claims she is being tortured but she shows no signs of struggling to get away from being tied up. She then tells you to remove the curtain the covers the entire wall of the circular building. The opened curtain reveals hundreds of opened, full cans of Monster Energy, her most hated enemy. As you and Dave start to untie Jessica from the chair, the door slams shut. You try pushing the door open but with no luck. After hours of banging on the door and yelling at the top of your lungs, the door finally opens. It’s your instructor, Jon. “The only way I let any of you out of here is if Jessica drinks one can of Monster,” Jon states. Jessica says absolutely not, so Jon shuts the door and the three of you are never heard from again.',
          murderID: '#',
          endpoint: true,
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('murders', null, {}),
};
