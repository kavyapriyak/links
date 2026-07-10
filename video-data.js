/* Shared video data for the AI with Kavya "Claude Universe" pages.
   Loaded by pillar-picker.html (the quiz) and video-map.html (the map).

   Each entry: { title, url, date, status }
   - `url` present  → Published (shows on the map AND in quiz results)
   - no `url`       → placeholder, quiz ignores it; on the map,
                      status: "production" → In Production, otherwise → Idea
   - `date` is YYYY-MM-DD; lists render oldest first, undated entries last. */
var VIDEO_LINKS = {
  chat: [
    { title: "Stop Rewriting Prompts — Use Claude Artifacts Instead",
      url: "https://youtu.be/iuIyxeTCBYU", date: "2026-05-27" },
    { title: "Opus, Sonnet, Haiku — Which Claude Should You Actually Use?",
      url: "https://youtu.be/jJn3Q9pUKDc", date: "2026-06-05" },
    { title: "Skills in Claude", status: "production" }
  ],
  cowork: [
    { title: "I Automated My Gmail From My Phone — Claude Cowork + Dispatch",
      url: "https://youtu.be/lsV0g5SMHSY", date: "2026-06-14" }
  ],
  code: [
    { title: "Claude Code 101: From One Idea to a Live Website and Desktop App",
      url: "https://youtu.be/ND62dc1-MZ8", date: "2026-06-26" },
    { title: "Claude Universe Pillar Picker", status: "production" },
    { title: "Desktop App: Package & Ship", status: "idea" },
    { title: "I Built My Own Link-in-Bio", status: "idea" }
  ],
  design: [
    { title: "Claude Design: Build a YouTube Brand Without a Designer",
      url: "https://youtu.be/Mht77XP66yg", date: "2026-05-20" }
  ]
};
