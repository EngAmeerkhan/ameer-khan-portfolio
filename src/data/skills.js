// ============================================================
// skills.js — Skills data grouped by category
// ============================================================
import {
  SiPython, SiJavascript, SiReact, SiNodedotjs, SiHtml5, SiCss,
  SiTailwindcss, SiFastapi, SiMongodb, SiPostgresql, SiGit,
  SiTensorflow, SiPytorch, SiOpencv, SiScikitlearn,
  SiArduino, SiRaspberrypi, SiMqtt,
  SiFfmpeg, SiDavinciresolve,
  SiTypescript, SiDocker, SiLinux, SiFirebase,
} from "react-icons/si";
import { TbBrain, TbRobot, TbCpu, TbVideo, TbMovie, TbPhotoVideo } from "react-icons/tb";

export const skillCategories = [
  {
    id: "programming",
    label: "Programming & Web Development",
    icon: TbCpu,
    color: "emerald",
    skills: [
      { name: "Python", Icon: SiPython, level: 92 },
      { name: "JavaScript", Icon: SiJavascript, level: 85 },
      { name: "TypeScript", Icon: SiTypescript, level: 72 },
      { name: "React", Icon: SiReact, level: 88 },
      { name: "Node.js", Icon: SiNodedotjs, level: 78 },
      { name: "HTML5", Icon: SiHtml5, level: 95 },
      { name: "CSS3", Icon: SiCss, level: 90 },
      { name: "Tailwind CSS", Icon: SiTailwindcss, level: 88 },
      { name: "FastAPI", Icon: SiFastapi, level: 80 },
      { name: "MongoDB", Icon: SiMongodb, level: 75 },
      { name: "PostgreSQL", Icon: SiPostgresql, level: 70 },
      { name: "Docker", Icon: SiDocker, level: 68 },
      { name: "Git", Icon: SiGit, level: 90 },
      { name: "Linux", Icon: SiLinux, level: 82 },
    ],
  },
  {
    id: "ai",
    label: "AI / Machine Learning",
    icon: TbBrain,
    color: "cyan",
    skills: [
      { name: "TensorFlow", Icon: SiTensorflow, level: 82 },
      { name: "PyTorch", Icon: SiPytorch, level: 80 },
      { name: "OpenCV", Icon: SiOpencv, level: 88 },
      { name: "Scikit-Learn", Icon: SiScikitlearn, level: 85 },
      { name: "YOLO / Object Detection", Icon: TbBrain, level: 85 },
      { name: "MediaPipe", Icon: TbBrain, level: 78 },
      { name: "Firebase", Icon: SiFirebase, level: 72 },
    ],
  },
  {
    id: "iot",
    label: "IoT & Embedded Systems",
    icon: TbRobot,
    color: "teal",
    skills: [
      { name: "Arduino", Icon: SiArduino, level: 88 },
      { name: "ESP32 / ESP8266", Icon: SiArduino, level: 85 },
      { name: "Raspberry Pi", Icon: SiRaspberrypi, level: 75 },
      { name: "MQTT Protocol", Icon: SiMqtt, level: 80 },
      { name: "Sensor Integration", Icon: TbRobot, level: 88 },
      { name: "Robotics", Icon: TbRobot, level: 78 },
    ],
  },
  {
    id: "video",
    label: "Video Editing & Tools",
    icon: TbVideo,
    color: "violet",
    skills: [
      { name: "Adobe Premiere Pro", Icon: TbPhotoVideo, level: 85 },
      { name: "After Effects", Icon: TbMovie, level: 78 },
      { name: "DaVinci Resolve", Icon: SiDavinciresolve, level: 80 },
      { name: "FFmpeg", Icon: SiFfmpeg, level: 88 },
    ],
  },
];
