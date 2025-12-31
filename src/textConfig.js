const textConfig = {
  landing: {
    title: "Hey Jigglypuff! 💕",
    subtitle: "I Wanted to do something special for you, so I made something special just for you...",
    lastLine: "Click below to see what it is! ✨",
    button: "Open My Heart 💖",
    footer: "Made with love, only for you 💕",
  },
  landing: {
    title: "Happy New Year 2026! 🎉",
    subtitle: "Wishing you joy, success, and endless happiness in the coming year!",
    lastLine: "Click below to start your New Year journey! ✨",
    button: "Begin Celebration 🎊",
    footer: "Cheers to a wonderful 2026! 🎉",
  },

  // ActivityPage/Letter configuration
  letter: {
    headerTitle: "A New Year Letter 💌",
    headerSubtitle: "Warm wishes for 2026",
    letterHeaderTitle: "My love",
    letterMessage: `My dearest love,

Across the miles your smile arrives before you do, lighting quiet moments with a warmth I can feel from here. Though days and time keep us apart, every message and memory brings you closer in my heart and makes ordinary moments feel like something gentle and bright.

Please remember: distance does not lessen what I feel. It teaches me patience and strengthens the quiet certainty that you are mine and I am yours. I count the days until we can close this space, and until then I hold you close in every thought.

Always yours, always.`,
    letterSignature: "💕",
    envelopeClickHint: "Click to open your New Year wish",
    specialDeliveryText: "Special Delivery 🎉",
    continueButton: "Continue To Celebrate ✨"
  },

  chillZone: {
    heading: "A Dedicated Playlist For You",
    subheading: "I Hope You'll Like It",
    chooseTrackHint: "Choose a track to start vibing ✨",
    continueButton: "Continue to Next ✨",
    tracks: [
      { id: 1, title: "Dil Cheeze Tujhe Dedi", caption: "You own this heart — dedicated to you 💞" },
      { id: 2, title: "If the world was ending", caption: "Even if the world ends, I'd still find you 🤍" },
      { id: 3, title: "Dil ka Jo Haal hai", caption: "Tu Kaare Dil Bekarar 💞" }
    ]
  },
  chillZone: {
    heading: "New Year Playlist",
    subheading: "Celebrate with these festive tracks!",
    chooseTrackHint: "Choose a song to start the party ✨",
    continueButton: "Continue to Next ✨",
    tracks: [
      { id: 1, title: "Happy New Year - ABBA", caption: "Classic vibes for a fresh start! 🎊" },
      { id: 2, title: "Auld Lang Syne", caption: "Remember the good times and friends! 🎉" },
      { id: 3, title: "Firework - Katy Perry", caption: "Shine bright in 2026! 🎉" }
    ]
  },

  cards: {
    heading: "Some Special Cards For You",
    subheading: "Click each card to reveal a special message!",
    tapLabel: "✨ Tap!",
    progress: {
      start: "Start by tapping any card above ✨",
      discovered: (n, total) => `${n} of ${total} messages discovered! Keep exploring 💕`,
      complete: "Amazing! You've discovered all the messages! 🎉"
    },
    popup: {
      title: "All Messages Unlocked!",
      message: "Each message is a piece of my heart that belongs to you forever. ✨",
      openFinal: "Open the Final Letter 💌",
      stay: "Stay here a bit longer"
    },
    cardMessages: [
      "You're my favorite kind of memory — the one that makes me smile without even realizing it. 💖",
      "I did like you and i still respect what you said about being good friends. ✨",
      "The little things you do — your expressions, your laughter, the way you talk — they've all become my favorite details. 🌸"
    ]
  },
  cards: {
    heading: "New Year Wishes",
    subheading: "Tap each card for a special New Year message!",
    tapLabel: "✨ Tap!",
    progress: {
      start: "Start by tapping any card above ✨",
      discovered: (n, total) => `${n} of ${total} wishes discovered! Keep celebrating! 🎉`,
      complete: "Awesome! You've revealed all the wishes! 🎊"
    },
    popup: {
      title: "All Wishes Unlocked!",
      message: "May every wish come true for you in 2026! ✨",
      openFinal: "Open the Final Letter 💌",
      stay: "Stay and celebrate more!"
    },
    cardMessages: [
      "May your year be filled with new hopes, new joy, and new beginnings! 🎉",
      "Wishing you health, wealth, and happiness in 2026! 🎊",
      "May every day sparkle with positivity and love! 🎉"
    ]
  },

  finalLetter: {
    title: "Final New Year Wish",
    sealingText: "Sealing your wish...",
    sealButton: "Seal this Wish 🎉",
    restartButton: "Restart",
    sealedTitle: "Wish Sealed for 2026",
    sealedSubtitle: "Wishing You a Wonderful Year!",
    typedDefault: "Happy New Year! 🎊",
    experienceAgain: "Experience Again ✨",
    sendKissButton: "Send a Virtual Hug 🤗",
    dateLocale: "en-US",
    // Letter content
    letterGreeting: "My sweetest darling,",
    letterParagraphs: [
      "May 2026 bring you gentle mornings, small victories, and warm moments that remind you how deeply you're loved, even when I'm far away.",
      "Celebrate each day knowing someone here is always cheering for you; cherish the memories we share and hold onto the promise of the ones we'll build together when distance fades.",
      "Thank you for loving across the miles—your messages and laughter brighten my days and make the waiting easier. Every little thing you do matters more than you know.",
      "Wishing you a year of closeness in heart despite the miles, and the excitement for the day we finally close this gap and celebrate side by side."
    ],
    sealingNote: "Sealing will finish the celebration."
  },
  finalLetter: {
    title: "Final New Year Wish",
    sealingText: "Sealing your wish...",
    sealButton: "Seal this Wish 🎉",
    restartButton: "Restart",
    sealedTitle: "Wish Sealed for 2026",
    sealedSubtitle: "Wishing You a Wonderful Year!",
    typedDefault: "Happy New Year! 🎊",
    experienceAgain: "Experience Again ✨",
    sendKissButton: "Send a Virtual Hug 🤗",
    dateLocale: "en-US",
    // Letter content
    letterGreeting: "My sweetest darling,",
    letterParagraphs: [
      "May 2026 bring you gentle mornings, small victories, and warm moments that remind you how deeply you're loved, even when I'm far away.",
      "Celebrate each day knowing someone here is always cheering for you; cherish the memories we share and hold onto the promise of the ones we'll build together when distance fades.",
      "Thank you for loving across the miles—your messages and laughter brighten my days and make the waiting easier. Every little thing you do matters more than you know.",
      "Wishing you a year of closeness in heart despite the miles, and the excitement for the day we finally close this gap and celebrate side by side."
    ],
    sealingNote: "Sealing will finish the celebration."
  },

  common: {
    continue: "Continue to Next ✨",
    close: "Close",
    ok: "OK"
  }
};

export default textConfig;
