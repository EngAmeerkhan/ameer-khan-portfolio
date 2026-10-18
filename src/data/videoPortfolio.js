// ============================================================
// videoPortfolio.js — Data for Video Editing Portfolio & Showcase
// 
// 💡 TO CUSTOMIZE:
// Simply replace the youtubeUrl, instagramUrl, and driveUrl with
// your own links for each video! The app automatically supports
// watching embeds, opening Instagram reels, and accessing Google Drive links.
// ============================================================

export const videoEditorProfile = {
  name: "Ameer Khan",
  title: "Professional Video Editor & Motion Designer",
  experienceYears: "3+",
  tagline: "Transforming Raw Footage into High-Retention Viral Reels & Cinematic Masterpieces",
  bio: "Specializing in high-pacing YouTube edits, viral TikTok & Instagram Reels, cinematic color grading, and custom motion graphics. Combining technical precision with narrative storytelling to skyrocket watch time and engagement.",
  stats: [
    { label: "Total Views Generated", value: "5M+", numeric: 5 },
    { label: "Videos Delivered", value: "150+", numeric: 150 },
    { label: "Avg. Watch Retention", value: "85%", numeric: 85 },
    { label: "Standard Turnaround", value: "24-48h", numeric: 48 },
  ],
  skills: [
    { name: "Adobe Premiere Pro", level: 95, category: "NLE Editing" },
    { name: "DaVinci Resolve Studio", level: 90, category: "Color Grading & Master" },
    { name: "Adobe After Effects", level: 88, category: "VFX & Motion Design" },
    { name: "FFmpeg Automation", level: 92, category: "Automated Video Pipelines" },
    { name: "CapCut Pro", level: 94, category: "Fast Viral Pacing" },
    { name: "Adobe Audition", level: 85, category: "Sound Design & Mix" },
  ],
  specialties: [
    {
      title: "Viral Retention Hooks",
      desc: "Captivating first 3 seconds with dynamic kinetic text, audio risers, and micro-cuts that stop the scroll.",
      icon: "⚡",
    },
    {
      title: "Cinematic Color Grading",
      desc: "Transforming flat LOG camera profiles into lush Rec.709 & filmic look emulations with custom LUTs.",
      icon: "🎨",
    },
    {
      title: "Audio Architecture & SFX",
      desc: "Multi-layered sound design: whooshes, risers, impacts, ambience, and vocal clarity enhancement.",
      icon: "🎧",
    },
    {
      title: "Custom 2D/3D Motion Graphics",
      desc: "Sleek lower thirds, animated diagrams, callouts, and tracking elements that bring dry concepts to life.",
      icon: "📐",
    },
  ],
};

// ------------------------------------------------------------
// Shorts & Vertical Reels (9:16)
// ------------------------------------------------------------
export const shortsVideos = [
  {
    id: "short-1",
    title: "Viral Talking Head: The Creator Secret",
    category: "Talking Head",
    duration: "0:59",
    views: "850K",
    likes: "62K",
    aspectRatio: "9:16",
    thumbnail: "/editing/shorts-talkinghead.jpg",
    // Replace with your real links below:
    youtubeUrl: "https://www.youtube.com/shorts/dQw4w9WgXcQ",
    youtubeEmbedId: "dQw4w9WgXcQ", // If provided, plays inside the modal preview
    instagramUrl: "https://www.instagram.com/reels/",
    driveUrl: "https://drive.google.com/drive/folders/sample-preview-drive-link",
    description:
      "High-energy talking-head format with Alex Hormozi inspired word-by-word highlighted captions, custom sound effects, jump cuts, and punch-in zooms to maintain peak visual interest.",
    tags: ["Alex Hormozi Style", "Kinetic Subtitles", "Sound SFX", "High Retention"],
    software: ["Premiere Pro", "After Effects"],
    client: "Leo Creates (@leo_creates)",
  },
  {
    id: "short-2",
    title: "AI Neural Microchip Tech Breakdown",
    category: "Tech Breakdown",
    duration: "0:45",
    views: "1.2M",
    likes: "94K",
    aspectRatio: "9:16",
    thumbnail: "/editing/shorts-techbreakdown.jpg",
    youtubeUrl: "https://www.youtube.com/shorts/dQw4w9WgXcQ",
    youtubeEmbedId: "dQw4w9WgXcQ",
    instagramUrl: "https://www.instagram.com/reels/",
    driveUrl: "https://drive.google.com/drive/folders/sample-preview-drive-link",
    description:
      "Complex artificial intelligence hardware explained through 3D motion graphic callouts, neon HUD elements, sound-synced transitions, and data overlays.",
    tags: ["3D HUD Graphics", "Tech Explainer", "Motion Design", "Sci-Fi Sound"],
    software: ["After Effects", "Premiere Pro", "DaVinci Resolve"],
    client: "NextGen Tech Lab",
  },
  {
    id: "short-3",
    title: "Cinematic Coastal Drive: Supercar Reel",
    category: "Cinematic",
    duration: "0:38",
    views: "640K",
    likes: "48K",
    aspectRatio: "9:16",
    thumbnail: "/editing/shorts-cinematic.jpg",
    youtubeUrl: "https://www.youtube.com/shorts/dQw4w9WgXcQ",
    youtubeEmbedId: "dQw4w9WgXcQ",
    instagramUrl: "https://www.instagram.com/reels/",
    driveUrl: "https://drive.google.com/drive/folders/sample-preview-drive-link",
    description:
      "Moody golden hour color grading with custom Kodak 2383 film print emulation, speed ramping synced to deep electronic bass beats, and seamless whip pan transitions.",
    tags: ["Color Grading", "Film Emulation", "Speed Ramping", "Sound Design"],
    software: ["DaVinci Resolve Studio", "Premiere Pro"],
    client: "Apex Motor Club",
  },
  {
    id: "short-4",
    title: "Esports Tournament Finals Hype Reel",
    category: "Gaming",
    duration: "0:52",
    views: "1.8M",
    likes: "140K",
    aspectRatio: "9:16",
    thumbnail: "/editing/shorts-gaming.jpg",
    youtubeUrl: "https://www.youtube.com/shorts/dQw4w9WgXcQ",
    youtubeEmbedId: "dQw4w9WgXcQ",
    instagramUrl: "https://www.instagram.com/reels/",
    driveUrl: "https://drive.google.com/drive/folders/sample-preview-drive-link",
    description:
      "Ultra-fast paced tournament montage with screen shakes, impact bass drops, visual glitches, velocity curves, and animated player kill counter overlays.",
    tags: ["Velocity Curves", "Screen Shake", "Glitches", "Esports"],
    software: ["Premiere Pro", "After Effects", "Audition"],
    client: "Team Nova Esports",
  },
];

// ------------------------------------------------------------
// Long-Form Videos & Documentaries (16:9)
// ------------------------------------------------------------
export const longFormVideos = [
  {
    id: "long-1",
    title: "The Rise of Autonomous AI: Future Documentary",
    category: "Documentary",
    duration: "14:28",
    views: "420K",
    aspectRatio: "16:9",
    thumbnail: "/editing/long-documentary.jpg",
    // Replace with your real links below:
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    youtubeEmbedId: "dQw4w9WgXcQ",
    instagramUrl: "https://www.instagram.com/",
    driveUrl: "https://drive.google.com/drive/folders/sample-preview-drive-link",
    description:
      "A cinematic 14-minute YouTube deep-dive exploring next-generation humanoid robotics. Complete with multi-layered archival B-roll, custom animated infographics, film score mixing, and color grading in ACES.",
    tags: ["YouTube Long-form", "Documentary Pacing", "Color Graded", "Custom Score"],
    software: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
    client: "Future Tech Media",
  },
  {
    id: "long-2",
    title: "The Circuit Studio Podcast: Founder Edition",
    category: "Podcast",
    duration: "48:15",
    views: "180K",
    aspectRatio: "16:9",
    thumbnail: "/editing/long-podcast.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    youtubeEmbedId: "dQw4w9WgXcQ",
    instagramUrl: "https://www.instagram.com/",
    driveUrl: "https://drive.google.com/drive/folders/sample-preview-drive-link",
    description:
      "3-camera setup cut with live dynamic multi-camera switching, audio noise removal & leveling, automated chapter markers, highlight reels, and branded lower thirds.",
    tags: ["Multi-Cam Cut", "Studio Podcast", "Audio Mastering", "Lower Thirds"],
    software: ["Premiere Pro", "Audition", "Photoshop"],
    client: "The Circuit Podcast",
  },
  {
    id: "long-3",
    title: "Apex Smart Ring: Minimalist Luxury Commercial",
    category: "Commercial",
    duration: "1:45",
    views: "95K",
    aspectRatio: "16:9",
    thumbnail: "/editing/long-commercial.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    youtubeEmbedId: "dQw4w9WgXcQ",
    instagramUrl: "https://www.instagram.com/",
    driveUrl: "https://drive.google.com/drive/folders/sample-preview-drive-link",
    description:
      "High-end product showcase commercial featuring volumetric lighting, macro close-ups, spatial sound design, and custom 3D typography that drives high conversion.",
    tags: ["Commercial", "Product Showcase", "Volumetric Light", "Sound Design"],
    software: ["DaVinci Resolve", "After Effects", "Premiere Pro"],
    client: "Apex Wearables Inc.",
  },
];
