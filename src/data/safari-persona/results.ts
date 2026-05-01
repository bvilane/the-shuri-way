export type TempoKey = 'still' | 'slowBuild' | 'rhythmic' | 'kinetic' | 'anchored';
export type PersonalityKey = 'observer' | 'romantic' | 'explorer' | 'planner' | 'connector';

export interface ResultData {
  title: string;
  recognitionLine: string;
  shortCopy: string;
  paragraph: string;
  tempoTheme: TempoKey;
}

export const tempoThemes: Record<TempoKey, { base: string; accent: string; cssVar: string }> = {
  still: { base: '#1A2030', accent: '#8A9BA8', cssVar: 'tempo-still' },
  slowBuild: { base: '#1E2518', accent: '#7D9068', cssVar: 'tempo-slow' },
  rhythmic: { base: '#1C2B1E', accent: '#D4823A', cssVar: 'tempo-rhythmic' },
  kinetic: { base: '#261A0E', accent: '#D4A032', cssVar: 'tempo-kinetic' },
  anchored: { base: '#221510', accent: '#C4644A', cssVar: 'tempo-anchored' },
};

export const tempoLabels: Record<TempoKey, string> = {
  still: 'Still',
  slowBuild: 'Slow-Build',
  rhythmic: 'Rhythmic',
  kinetic: 'Kinetic',
  anchored: 'Anchored',
};

export const personalityLabels: Record<PersonalityKey, string> = {
  observer: 'Observer',
  romantic: 'Romantic',
  explorer: 'Explorer',
  planner: 'Planner',
  connector: 'Connector',
};

export const results: Record<string, ResultData> = {
  "still_observer": {
    title: "Still Observer",
    recognitionLine: "Safari works best for you when nothing is being rushed and everything is available to be noticed.",
    shortCopy: "You are not the person who needs constant action to feel like the day was worth it. Quiet, space, and something small worth noticing is genuinely enough for you out there.",
    paragraph: "You are the kind of person who comes back from a game drive and remembers the way the light hit the water, the bird call your guide couldn't immediately identify, and the set of tracks that suggested something had passed through an hour before you arrived. The big sightings are great but the absence of obvious drama is not a problem for you because you have trained yourself to find meaning in smaller things.",
    tempoTheme: "still",
  },
  "still_romantic": {
    title: "Still Romantic",
    recognitionLine: "You experience safari at its best when the world slows down enough for you to actually feel it.",
    shortCopy: "You are not chasing sightings because you care more about that particular quality of a moment when your nervous system slows down and you fall in love with life again.",
    paragraph: "You are the kind of person who comes on safari not to tick animals off a list but to slow down. You are here for moments when the noise of ordinary life falls away and something about the light or the silence makes you fall a little bit in love with the world. Those moments do not happen on a schedule and cannot be manufactured, which is why you have no interest in a safari that tries too hard to deliver them. You are here to breathe and experience the world like a poet.",
    tempoTheme: "still",
  },
  "still_explorer": {
    title: "Still Explorer",
    recognitionLine: "You are most alive on safari when stillness is a choice and not a requirement.",
    shortCopy: "Sitting in a vehicle for hours waiting for something to happen is not your idea of a good time. You are the person who requests a walking safari because you'd rather see the bush on foot and sweat a little doing it.",
    paragraph: "You are not built for sitting still. You have a lot of energy and need somewhere to put it, but you are not the person chasing adrenaline for its own sake. What you actually want is to be physically inside the experience rather than watching it from a seat. A walking safari is your style because it lets you move, stop, notice, and move again on your own terms. The stillness you are capable of is never passive because you prefer to be completely in whatever you're doing.",
    tempoTheme: "still",
  },
  "still_planner": {
    title: "Still Planner",
    recognitionLine: "You enjoy a safari with a clear plan and enough quiet time to actually take it all in.",
    shortCopy: "You are not the person who needs constant action but you are absolutely the person who needs to know what time the drive starts, where you are going, and roughly what to expect when you get there. Give you the plan and you will be the most patient person in the vehicle.",
    paragraph: "You are the kind of person who reads the itinerary before the trip because knowing what to expect relaxes you. You are not a control freak but you do like to know what is happening, why it is happening, and when the next thing is happening. That is just how your brain works best. You appreciate a safari guide who briefs the group before the drive and keeps you in the loop on the decisions they make. It is uncertainty that makes you twitchy, not waiting.",
    tempoTheme: "still",
  },
  "still_connector": {
    title: "Still Connector",
    recognitionLine: "You enjoy a safari where the best moments are the quiet ones you get to share with others.",
    shortCopy: "You do not need to fill silence with conversation. You just need the right people around you when something happens, because that is what turns a good safari moment into a story you are still telling years later.",
    paragraph: "Stillness does not feel lonely to you when the right people are in it with you. Sitting without talking, watching the same thing unfold, breathing the same air, this is a form of closeness that ordinary life rarely offers and you recognise its value. You are also the person who, three days into a trip with strangers, somehow knows everyone's life story, or at least why they came on safari.",
    tempoTheme: "still",
  },
  "slowBuild_observer": {
    title: "Slow-Build Observer",
    recognitionLine: "Safari makes the most sense to you when the day has enough time to reveal itself properly and rewards you for paying attention.",
    shortCopy: "You are not the person who needs an early dramatic sighting to feel like the day was worth it. The longer you spend out there, the more the bush starts making sense to you. A day that gradually fills with detail is far more satisfying than one that peaks in the first hour and then has nothing left to say.",
    paragraph: "You are not in a hurry and you are not anxious about the quiet stretches because you know that attention compounds over time. You are essentially building a puzzle across your trip, picking up small pieces that increase your level of understanding. By the last day you are the one who can pick out individual elephants from the herd the guides have been tracking all week and tell anyone who will listen exactly what makes each one different.",
    tempoTheme: "slowBuild",
  },
  "slowBuild_romantic": {
    title: "Slow-Build Romantic",
    recognitionLine: "You enjoy a safari where the emotional payoff takes all day to arrive and hits harder because of it.",
    shortCopy: "You want the day to earn its ending. A safari that delivers everything in the first hour and then coasts leaves you strangely empty. The ones that build slowly toward something unexpected by sunset are the ones you never stop remembering.",
    paragraph: "You travel to feel something and you know from experience that the best feelings cannot be rushed. A sunset that comes at the end of a long unhurried day hits completely differently from one you rushed to catch forty minutes before. You are the person who tears up a little on the last evening not because of any single moment but because of all of them added together. A good safari, like a good romcom, only works because of everything that came before the climax.",
    tempoTheme: "slowBuild",
  },
  "slowBuild_explorer": {
    title: "Slow-Build Explorer",
    recognitionLine: "You are most satisfied when a day in the bush unfolds like a trail you did not know you were following.",
    shortCopy: "You do not need things to happen immediately but you do need to feel like they are opening up as the day goes on. A slow morning that suddenly reveals something unexpected is your favourite kind of day, and you would take that short burst of adrenaline over an action-packed itinerary every single time.",
    paragraph: "You are the kind of traveller who needs the journey to feel organic rather than engineered. A slow start does not frustrate you because you understand the day needs to warm up first, and you are comfortable sitting in that opening act longer than most people would be. Once the day cracks open into something unexpected, a breathtaking view from the top of a hill or a dramatic sighting that nobody saw coming, everything before it becomes worth it.",
    tempoTheme: "slowBuild",
  },
  "slowBuild_planner": {
    title: "Slow-Build Planner",
    recognitionLine: "A safari done right for you is a day that follows a logical arc from quiet to rewarding.",
    shortCopy: "A slow start makes complete sense to you when someone can explain why it increases the odds of something better later. You are not impatient with the process as long as the process is intentional.",
    paragraph: "You appreciate a guide who thinks in sequences rather than just reacting to whatever appears. There is a big difference between a guide who says \"we will see what happens\" and one who says \"we are starting here because the light and the wind give us the best odds by mid-morning.\" Give you the reasoning and the slow morning stops feeling like waiting and starts feeling like a solid plan.",
    tempoTheme: "slowBuild",
  },
  "slowBuild_connector": {
    title: "Slow-Build Connector",
    recognitionLine: "Your best safari days are the ones where the experience builds between people as much as it builds around you.",
    shortCopy: "A slow morning in good company does not feel slow at all. The conversations that happen in the quiet stretches are as much the experience as any wildlife you will actually see.",
    paragraph: "You are the kind of person who arrives at a camp full of strangers and treats the whole thing like a long dinner party that happens to have wildlife in it. Before long you are learning everyone's stories around the campfire, developing inside jokes, exchanging numbers on the last morning, and making plans you wish you could keep. The safari is the backdrop. The people are the plot.",
    tempoTheme: "slowBuild",
  },
  "rhythmic_observer": {
    title: "Rhythmic Observer",
    recognitionLine: "You notice the most on safari when the day gives you something to contrast against what came before.",
    shortCopy: "Your attention works best when it has different pitches to switch between. A long stretch of nothing followed by sudden movement is more exciting to you than either one on its own because each makes the other easier to notice.",
    paragraph: "Your attention works best when it has room to breathe between moments. Too much happening back to back and the details start blurring together. Too little happening and you get into your head. Those quiet stretches in between are when you actually process what just happened and notice everything you missed while the action was unfolding. You need the silence as much as you need the sighting.",
    tempoTheme: "rhythmic",
  },
  "rhythmic_romantic": {
    title: "Rhythmic Romantic",
    recognitionLine: "You feel safari most deeply when the day moves between calm and alive because the contrast allows you to notice what you feel.",
    shortCopy: "You need the day to have a pulse. A long quiet stretch you can romanticize followed by an elephant herd that takes your breath away hits harder than back to back sightings ever could.",
    paragraph: "Feeling requires buildup. You are not looking for constant intensity but you need the day to have movement in it, a shift in mood or light or energy that makes the quieter moments feel like they were leading somewhere. You are the person who cries at the end of films not just because of the final scene but because of everything that led there. Safari works the same way for you.",
    tempoTheme: "rhythmic",
  },
  "rhythmic_explorer": {
    title: "Rhythmic Explorer",
    recognitionLine: "You explore safari best when the day alternates between stillness and movement because one without the other loses its meaning.",
    shortCopy: "Constant movement eventually stops feeling like exploration and starts feeling like stress to you. You need the quiet stretches because they give you space to look forward to the adventures.",
    paragraph: "You are the kind of traveller who is not easily bored but you are easily under-stimulated, and there is a difference. A safari that mixes long observational pauses with a new walking route or an unexpected detour gives you both the depth and the variety that keeps you fully engaged from start to finish. When the day keeps changing shape, you are at your sharpest, asking better questions, noticing more, and generally being the most interesting person at dinner that evening.",
    tempoTheme: "rhythmic",
  },
  "rhythmic_planner": {
    title: "Rhythmic Planner",
    recognitionLine: "A well structured safari for you is one where the rhythm between quiet and active has been thought through in advance.",
    shortCopy: "You want a guide who has designed the day with intentional variation, who knows when to push and when to hold back and can explain the reasoning behind both.",
    paragraph: "You are not looking for spontaneity but you are also not looking for a day that stays at one pitch throughout. You want planned variation, a day with a clear structure that moves through different gears. A morning drive that gives way to a bush walk, a slow lunch back at camp, and an evening drive that ends somewhere completely different from where it started is your idea of a well designed day.",
    tempoTheme: "rhythmic",
  },
  "rhythmic_connector": {
    title: "Rhythmic Connector",
    recognitionLine: "The safari days you remember most are the ones that had enough going on to give you and your group something to talk about all evening.",
    shortCopy: "A day with too little happening leaves the group with nothing to talk about over dinner. A day with too much leaves everyone too exhausted to enjoy each other. You need the balance because the conversations are as much the point as the safari itself.",
    paragraph: "You draw energy from people and you need your safari to reflect that, but you also know that constant social intensity is exhausting and that some of the most connected moments happen in silence. A day that alternates between lively group energy and companionable silence gives you the full range of what safari can be with other people. You leave every trip with at least one new friend and a group chat that is still active three months later.",
    tempoTheme: "rhythmic",
  },
  "kinetic_observer": {
    title: "Kinetic Observer",
    recognitionLine: "You observe safari best when your body is moving because stillness makes your mind restless rather than focused.",
    shortCopy: "You would rather observe the bush from horseback or a microlight flight than from a parked vehicle. Sitting still has never helped you notice more.",
    paragraph: "You are the kind of person who wants to come back from safari with mud on their boots and a knowledge of how the ecosystem works. You want to know which direction the river runs, where the tree line thins out, and why the animals congregate in one area in the morning and another in the afternoon, all by following their tracks yourself. Most people assume observation requires sitting still but for you the opposite is true. Movement is what clears your head enough to actually notice things.",
    tempoTheme: "kinetic",
  },
  "kinetic_romantic": {
    title: "Kinetic Romantic",
    recognitionLine: "The safari moments that move you most are usually the ones that happen while you are in motion.",
    shortCopy: "You find beauty while you are moving, not while you are waiting for it to come to you. A hot air balloon at dawn where the bush unfolds breathtakingly beneath you is exactly your kind of moment.",
    paragraph: "You are not the person who finds magic in stillness. Your most vivid safari memories are probably from above, beside, or in the middle of the bush rather than watching it from a distance. The way the light catches the water on a canoe trip through the delta, the feeling of being on horseback when a herd moves past, these are the moments that stay with you. You do not fall in love with a place by looking at it. You fall in love with it by moving through it.",
    tempoTheme: "kinetic",
  },
  "kinetic_explorer": {
    title: "Kinetic Explorer",
    recognitionLine: "Safari is something you do rather than something you watch and the distinction matters enormously to you.",
    shortCopy: "You will always choose the version of any activity that requires more of your body and gives more of the place back to you in return. Give you a quad bike trail, a canoe trip, or a hike and you'll be exactly where you are supposed to be.",
    paragraph: "You are not content to observe the bush from a distance when there is an option to be inside it. You are the person who signs up for the full day hike, comes back with sore legs and a slightly unhinged look in their eye, and immediately asks what is on the schedule for tomorrow. The physical relationship with the environment is not incidental to the experience. It is the experience. You have never once regretted choosing the harder option.",
    tempoTheme: "kinetic",
  },
  "kinetic_planner": {
    title: "Kinetic Planner",
    recognitionLine: "You plan your safari around movement because you know that a day without it will not deliver what you came for.",
    shortCopy: "You want an active day with a packed itinerary and enough activities to keep your body as busy as your mind. A mapped hiking route or a quad bike trail gives you both the movement you need and the peace of mind that comes from knowing exactly where you are going.",
    paragraph: "You are the person who emails the camp before arrival to ask which activities are available, how long each one takes, and whether they can be combined in a single day. You have also probably looked up the place on Google Maps. You arrive with a clear sense of what an active day should look like and you want a guide who can match that energy with an equally clear plan. Spontaneous movement does not satisfy you as much as structured movement does because you need to know that the itinerary has been designed with your pace in mind rather than defaulting to the standard sit-and-wait approach. ",
    tempoTheme: "kinetic",
  },
  "kinetic_connector": {
    title: "Kinetic Connector",
    recognitionLine: "You connect most easily with people on safari when you are doing something together rather than simply being somewhere together.",
    shortCopy: "Shared activity is your version of intimacy. A group walking safari where everyone is navigating the same terrain together is more your idea of connection than a campfire conversation.",
    paragraph: "You are the person who convinces the whole group to do the thing they were on the fence about and is never once wrong for doing so. A quad bike trail where nobody knew what to expect, a sunrise hike that required a 4am alarm, or a canoe trip that turned out to be harder than advertised, are experiences that create the kind of closeness that sitting and watching cannot. The stories that come out of a day where everyone did something slightly outside their comfort zone together are the ones your group is still telling years later.",
    tempoTheme: "kinetic",
  },
  "anchored_observer": {
    title: "Anchored Observer",
    recognitionLine: "Safari reveals the most to you when you have stayed in one place long enough to actually understand it.",
    shortCopy: "Novelty for its own sake has never really been your thing. What you are actually after is the feeling of knowing a place well enough that it starts to feel like it belongs to you a little, and you to it.",
    paragraph: "The bush does not give up its meaning to people who are passing through and you know this intuitively. You are the kind of person who has probably returned to the same holiday destination more than once and found it more rewarding the second time. Learning the rhythms of a wildlife reserve, recognising its inhabitants, and understanding how it changes across different times of the year is what excites you more than just the sightings. Familiarity is not the enemy of discovery for you. It is the condition for it.",
    tempoTheme: "anchored",
  },
  "anchored_romantic": {
    title: "Anchored Romantic",
    recognitionLine: "Safari feels most meaningful to you when you have a place that becomes yours over the course of the trip.",
    shortCopy: "You are not looking for variety. You are looking for depth and that means staying somewhere long enough for it to stop feeling like a place you are visiting and start feeling like a place you belong.",
    paragraph: "You fall in love with places the way some people fall in love with people, slowly, repeatedly, and with a loyalty that surprises even you. A single camp over several days gives you enough time to develop a relationship with the landscape, to notice how the light changes across different mornings, to feel the specific quality of that place settle into you. You are not the person who needs to see three countries in ten days. You are the person who comes back to the same reserve five years later and feels immediately at home.",
    tempoTheme: "anchored",
  },
  "anchored_explorer": {
    title: "Anchored Explorer",
    recognitionLine: "You enjoy safari best when you have a fixed base to return to and that makes you braver about where you go during the day.",
    shortCopy: "Staying at the same place night after night does not limit your exploration. It is actually what makes it possible. Knowing exactly where you are going back to frees you to go further out without hesitation.",
    paragraph: "Security, for you, has always been the thing that makes risk feel worth taking. You are a more confident and more curious explorer when home base is fixed. It removes the mental load of constant novelty and frees up all that energy for actual exploration. While everyone else is splitting the trip across three camps to cover more ground, you want to spend the whole week in one place because you know real discoveries happen when you get familiar with a place. You explore harder when you know exactly where home is.",
    tempoTheme: "anchored",
  },
  "anchored_planner": {
    title: "Anchored Planner",
    recognitionLine: "A safari with one great camp and a routine gives you the conditions to actually relax into the experience.",
    shortCopy: "One well chosen camp, a consistent daily rhythm, and a guide who knows the area deeply, is the sort of safari that lets you stop managing the experience and actually start feeling it.",
    paragraph: "You are the person who, once they find a camp they like, sees absolutely no reason to leave it. Logistics that change daily, new rooms, new staff, and new routines, create a mental overhead that exhausts you and makes it hard to be fully present for any of it. Once the structure is reliable you become one of the most engaged people on any safari. By day three you know the staff by name, have a favourite spot at the fire, and are getting the most out of every single drive because your brain has finally stopped worrying.",
    tempoTheme: "anchored",
  },
  "anchored_connector": {
    title: "Anchored Connector",
    recognitionLine: "Safari means the most to you when the people and the place both become familiar over time.",
    shortCopy: "You want somewhere you can stay long enough to become a familiar face, where, by day three, the staff know your name and your group has its own inside jokes. The relationships that form when the place and the people both become familiar are the ones you are still talking about years later.",
    paragraph: "Connections deepen with repetition and you know this better than most. Staying longer in one camp gives you enough days to get past the polite small talk with your guide, to have the camp staff know how you take your coffee, and build the kind of rapport with your travel companions that only comes from sharing the same fire multiple nights in a row. You are not the kind of traveller who collects experiences. You are the kind who wants to meet people, and knows that people take time.",
    tempoTheme: "anchored",
  }
};
