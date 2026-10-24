// ============================================================
// videoPortfolio.js — Minimal & Clean Video Editing Portfolio Data
//
// 💡 HOW TO USE:
// 1. REELS & LONG VIDEOS: Simply paste your Google Drive links in `driveUrl`!
// 2. YOUTUBE AUTOMATION CHANNELS: Add your YouTube channel link and paste
//    the YouTube links in `youtubeUrl` for each Short and Long video!
// ============================================================

// ------------------------------------------------------------
// 1. Shorts & Vertical Reels (9:16) — Instagram Reels with Instant Hover Preview
// ------------------------------------------------------------
export const shortsVideos = [
  {
    id: "reel-1",
    title: "Houston Real Estate & Growth Trends",
    creator: "@mustafa.tunc.houston.realtor",
    tag: "Real Estate Edit",
    thumbnail: "/editing/reels/reel-1.jpg",
    previewVideo: "/editing/reels/reel-1.mp4",
    instagramUrl:
      "https://www.instagram.com/reel/Dey7we5kel4/?utm_source=ig_web_copy_link&dlrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    reelCode: "Dey7we5kel4",
  },
  {
    id: "reel-2",
    title: "Open House Chicago: 3 Vintage Home Details",
    creator: "Danielle Eddy (@deddyo2007)",
    tag: "Architecture & Homes",
    thumbnail: "/editing/reels/reel-2.jpg",
    previewVideo: "/editing/reels/reel-2.mp4",
    instagramUrl:
      "https://www.instagram.com/reel/DefTUaYFHId/?utm_source=ig_web_copy_link&xtok=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    reelCode: "DefTUaYFHId",
  },
  {
    id: "reel-3",
    title: "Iconic Chicago Home Styles: Greystones & Bungalows",
    creator: "Danielle Eddy (@deddyo2007)",
    tag: "Architecture & Real Estate",
    thumbnail: "/editing/reels/reel-3.jpg",
    previewVideo: "/editing/reels/reel-3.mp4",
    instagramUrl:
      "https://www.instagram.com/reel/DdwvC-kk8lv/?utm_source=ig_web_copy_link&dlrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    reelCode: "DdwvC-kk8lv",
  },
  {
    id: "reel-4",
    title: "Crucial Advice for First-Time Home Buyers",
    creator: "Danielle Eddy (@deddyo2007)",
    tag: "Buyer Guide & Strategy",
    thumbnail: "/editing/reels/reel-4.jpg",
    previewVideo: "/editing/reels/reel-4.mp4",
    instagramUrl:
      "https://www.instagram.com/reel/DeM7E7iD9JD/?utm_source=ig_web_copy_link&srtk=MzRlODBiNWFlZA==",
    reelCode: "DeM7E7iD9JD",
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
// 2. YouTube Automation for AI Videos (Channels Showcase)
// ------------------------------------------------------------
export const youtubeAutomationChannels = [
  {
    id: "channel-1",
    name: "StoryHive Studios AI",
    avatar: "/editing/channel-ai-1.jpg",
    channelUrl: "https://www.youtube.com/@StoryHiveStudios", // Official YouTube Channel link
    longVideos: [
      {
        id: "ch1-long-1",
        title: "The Dark Truth Behind the Great Fire of London | 1666",
        thumbnail: "/editing/storyhive-long-1.jpg",
        previewVideo: "/editing/youtube/storyhive-1.mp4",
        youtubeUrl: "https://youtu.be/1FGSv_CJ9W4?si=iqMWhCPUHDbiplZ9",
      },
      {
        id: "ch1-long-2",
        title: "The Black Death: The Plague That Changed Europe Forever",
        thumbnail: "/editing/storyhive-long-2.jpg",
        previewVideo: "/editing/youtube/storyhive-2.mp4",
        youtubeUrl: "https://youtu.be/5T5Pmd02nO4?si=N4zEzUZho0R0Sifo",
      },
      {
        id: "ch1-long-3",
        title: "The Ship Was Found Empty… Where Did the 10 People Go? | Mary Celeste",
        thumbnail: "/editing/storyhive-long-3.jpg",
        previewVideo: "/editing/youtube/storyhive-3.mp4",
        youtubeUrl: "https://youtu.be/Oi-B_EL45IM?si=mT__lvDyTBJiNhI9",
      },
      {
        id: "ch1-long-4",
        title: "117 People Vanished! Roanoke Colony Ka Woh Raaz",
        thumbnail: "/editing/storyhive-long-4.jpg",
        previewVideo: "/editing/youtube/storyhive-4.mp4",
        youtubeUrl: "https://youtu.be/CS3WBZtbnw8?si=q82SIV9K-ThC6SRL",
      },
    ],
  },
  {
    id: "channel-2",
    name: "Restoration Ventures",
    avatar: "/editing/channel-ai-2.jpg",
    channelUrl: "https://www.youtube.com/@RestorationVentures",
    longVideos: [
      {
        id: "ch2-long-1",
        title: "AI Restoration Case Study & Visual Breakdown",
        thumbnail: "/editing/long-podcast.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
    ],
  },
  {
    id: "channel-3",
    name: "Pawssh Sspa",
    avatar: "/editing/channel-ai-3.jpg",
    channelUrl: "https://www.youtube.com/@PawsshSspa",
    longVideos: [
      {
        id: "ch3-long-1",
        title: "Pet Care AI Branding & Commercial Edit",
        thumbnail: "/editing/long-commercial.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      {
        id: "ch3-long-2",
        title: "High-Retention Pet Automation Stories",
        thumbnail: "/editing/long-documentary.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
    ],
  },
];

