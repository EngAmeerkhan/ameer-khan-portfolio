// ============================================================
// projects.js — Data for the Projects section
// ============================================================

export const projects = [
  {
    id: 1,
    title: "AI-Based Fabric Defect Detection System",
    shortDesc:
      "Automated defect detection pipeline for textile manufacturing using anomaly detection and object classification.",
    fullDesc:
      "This system leverages PatchCore for unsupervised anomaly detection combined with YOLOv8 for precise defect classification. It processes fabric images in real-time on a camera-equipped inspection station, flags defective regions, and generates quality reports — dramatically reducing human inspection time and error rates.",
    tags: ["AI/ML", "Computer Vision", "PatchCore", "YOLOv8", "Python"],
    tagColors: {
      "AI/ML": "emerald",
      "Computer Vision": "cyan",
      PatchCore: "indigo",
      YOLOv8: "violet",
      Python: "yellow",
    },
    tech: ["Python", "PyTorch", "YOLOv8", "OpenCV", "FastAPI"],
    image: "/projects/fabric-defect.jpg",
    github: "https://github.com/EngAmeerkhan",
    demo: "#",
  },
  {
    id: 2,
    title: "AI-Based Deaf Gesture Detection System",
    shortDesc:
      "Real-time sign language interpreter that converts hand gestures from video into readable sentences.",
    fullDesc:
      "Using MediaPipe for hand landmark extraction and a custom-trained LSTM model, the system detects ASL/PSL gestures frame-by-frame, maps them to vocabulary, and assembles grammatically coherent sentences. It runs at 30+ FPS on a standard webcam, making communication more accessible for the deaf community.",
    tags: ["AI/ML", "Computer Vision", "Sign Language", "LSTM", "MediaPipe"],
    tagColors: {
      "AI/ML": "emerald",
      "Computer Vision": "cyan",
      "Sign Language": "rose",
      LSTM: "indigo",
      MediaPipe: "sky",
    },
    tech: ["Python", "TensorFlow", "MediaPipe", "OpenCV", "React"],
    image: "/projects/deaf-gesture.jpg",
    github: "https://github.com/EngAmeerkhan",
    demo: "#",
  },
  {
    id: 3,
    title: "AI-Based Waste Segregation Robot",
    shortDesc:
      "Autonomous robot that detects, picks up, and sorts garbage into categorized bins using material classification.",
    fullDesc:
      "An end-to-end robotics solution combining a robotic arm (servo-controlled), a vision system trained with YOLOv8 for waste type classification (metal, paper, plastic, organic), and path-planning logic. The robot autonomously navigates to detected waste items, grips them, and deposits them in the correct bin — all without human intervention.",
    tags: ["AI/ML", "Robotics", "IoT", "Computer Vision", "Arduino"],
    tagColors: {
      "AI/ML": "emerald",
      Robotics: "orange",
      IoT: "teal",
      "Computer Vision": "cyan",
      Arduino: "sky",
    },
    tech: ["Python", "YOLOv8", "Arduino", "ROS", "OpenCV"],
    image: "/projects/waste-robot.jpg",
    github: "https://github.com/EngAmeerkhan",
    demo: "#",
  },
  {
    id: 4,
    title: "AI-Based Long-to-Short Viral Video Generator",
    shortDesc:
      "Automatically converts long-form video content into short, viral-style clips optimized for social media.",
    fullDesc:
      "A pipeline that ingests long-form video, uses NLP-based transcript analysis to identify high-engagement segments, then leverages FFmpeg for precision cutting, caption overlays, aspect-ratio reformatting (9:16), and audio normalization. The output is social-media-ready short clips that maximize retention.",
    tags: ["FFmpeg", "NLP", "Video Processing", "Python", "Automation"],
    tagColors: {
      FFmpeg: "red",
      NLP: "violet",
      "Video Processing": "orange",
      Python: "yellow",
      Automation: "emerald",
    },
    tech: ["Python", "FFmpeg", "Whisper AI", "OpenAI API", "MoviePy"],
    image: "/projects/viral-video.jpg",
    github: "https://github.com/EngAmeerkhan",
    demo: "#",
  },
  {
    id: 5,
    title: "IoT-Based Smart Environmental Monitoring System",
    shortDesc:
      "Dashboard-connected sensor network for soil, temperature & intrusion monitoring with remote motor control.",
    fullDesc:
      "A full-stack IoT solution featuring soil moisture, DHT22 temperature/humidity, and PIR motion sensors connected to an ESP32. Data streams to a real-time web dashboard (MQTT + WebSockets). Users can remotely trigger a water pump when soil moisture drops below a threshold, and receive instant push alerts on motion detection for field security.",
    tags: ["IoT", "ESP32", "MQTT", "Smart Sensors", "Real-time"],
    tagColors: {
      IoT: "teal",
      ESP32: "emerald",
      MQTT: "sky",
      "Smart Sensors": "cyan",
      "Real-time": "violet",
    },
    tech: ["ESP32", "Arduino C++", "MQTT", "Node.js", "React", "WebSockets"],
    image: "/projects/smart-environment.jpg",
    github: "https://github.com/EngAmeerkhan",
    demo: "#",
  },
];
