// ============================================================
// videoPortfolio.js — Minimal & Clean Video Editing Portfolio Data
//
// 💡 HOW TO USE:
// 1. REELS & LONG VIDEOS: Simply paste your Google Drive links in `driveUrl`!
// 2. YOUTUBE AUTOMATION CHANNELS: Add your YouTube channel link and paste
//    the YouTube links in `youtubeUrl` for each Short and Long video!
// ============================================================

// ------------------------------------------------------------
// 1. Shorts & Vertical Reels (9:16) — Google Drive Previews
// ------------------------------------------------------------
export const shortsVideos = [
  {
    id: "short-1",
    thumbnail: "/editing/shorts-talkinghead.jpg",
    driveUrl: "https://drive.google.com/file/d/sample-reel-1/view",
  },
  {
    id: "short-2",
    thumbnail: "/editing/shorts-techbreakdown.jpg",
    driveUrl: "https://drive.google.com/file/d/sample-reel-2/view",
  },
  {
    id: "short-3",
    thumbnail: "/editing/shorts-cinematic.jpg",
    driveUrl: "https://drive.google.com/file/d/sample-reel-3/view",
  },
  {
    id: "short-4",
    thumbnail: "/editing/shorts-gaming.jpg",
    driveUrl: "https://drive.google.com/file/d/sample-reel-4/view",
  },
];

// ------------------------------------------------------------
// 2. Long-Form Videos (16:9) — Google Drive Previews
// ------------------------------------------------------------
export const longFormVideos = [
  {
    id: "long-1",
    thumbnail: "/editing/long-documentary.jpg",
    driveUrl: "https://drive.google.com/file/d/sample-long-1/view",
  },
  {
    id: "long-2",
    thumbnail: "/editing/long-podcast.jpg",
    driveUrl: "https://drive.google.com/file/d/sample-long-2/view",
  },
  {
    id: "long-3",
    thumbnail: "/editing/long-commercial.jpg",
    driveUrl: "https://drive.google.com/file/d/sample-long-3/view",
  },
];

// ------------------------------------------------------------
// 3. YouTube Automation for AI Videos (Channels Showcase)
// ------------------------------------------------------------
export const youtubeAutomationChannels = [
  {
    id: "channel-1",
    name: "AI Tech Nexus",
    avatar: "/editing/channel-ai-1.jpg",
    channelUrl: "https://www.youtube.com/@AITechNexus", // Paste your YouTube Channel link here
    // Shorts inside this channel (YouTube links):
    shorts: [
      {
        id: "ch1-short-1",
        thumbnail: "/editing/shorts-techbreakdown.jpg",
        youtubeUrl: "https://www.youtube.com/shorts/dQw4w9WgXcQ", // Paste YouTube short link here
      },
      {
        id: "ch1-short-2",
        thumbnail: "/editing/shorts-talkinghead.jpg",
        youtubeUrl: "https://www.youtube.com/shorts/dQw4w9WgXcQ", // Paste YouTube short link here
      },
    ],
    // Long videos inside this channel (YouTube links):
    longVideos: [
      {
        id: "ch1-long-1",
        thumbnail: "/editing/long-documentary.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Paste YouTube video link here
      },
      {
        id: "ch1-long-2",
        thumbnail: "/editing/long-commercial.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Paste YouTube video link here
      },
    ],
  },
  {
    id: "channel-2",
    name: "Cosmic AI Matrix",
    avatar: "/editing/channel-ai-2.jpg",
    channelUrl: "https://www.youtube.com/@CosmicAIMatrix", // Paste your YouTube Channel link here
    // Shorts inside this channel (YouTube links):
    shorts: [
      {
        id: "ch2-short-1",
        thumbnail: "/editing/shorts-gaming.jpg",
        youtubeUrl: "https://www.youtube.com/shorts/dQw4w9WgXcQ", // Paste YouTube short link here
      },
      {
        id: "ch2-short-2",
        thumbnail: "/editing/shorts-cinematic.jpg",
        youtubeUrl: "https://www.youtube.com/shorts/dQw4w9WgXcQ", // Paste YouTube short link here
      },
    ],
    // Long videos inside this channel (YouTube links):
    longVideos: [
      {
        id: "ch2-long-1",
        thumbnail: "/editing/long-podcast.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Paste YouTube video link here
      },
    ],
  },
];
