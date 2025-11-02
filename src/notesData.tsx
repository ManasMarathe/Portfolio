import React from "react";
import {
  GitHubStats,
  LeetCodeStats,
  KaggleStats,
} from "./components/NoteComponents";
import Achievement from "./components/NoteComponents/Achievement";
import { achievementNotes } from "./data";

export interface Note {
  id: string;
  title: string;
  date?: string;
  preview: string;
  content: React.ReactNode;
  image?: string;
}

export interface NotesData {
  [section: string]: Note[];
}

export const notesData: NotesData = {
  Dev: [
    {
      id: "dev-1",
      title: "GitHub Development Profile",
      preview:
        "Comprehensive GitHub statistics showcasing coding activity, language usage, and open source contributions.",
      content: <GitHubStats />,
    },
    {
      id: "dev-2",
      title: "High-Throughput Messaging System",
      preview:
        "Engineered messaging system at Gupshup handling 15,000 TPS with customer prioritization and callback handling.",
      content: (
        <div
          style={{
            padding: "20px",
            fontFamily: "SF Pro Display, -apple-system, sans-serif",
            lineHeight: "1.6",
          }}
        >
          <h3 style={{ color: "#fff", marginBottom: "16px" }}>
            🚀 High-Performance Messaging System
          </h3>
          <div
            style={{
              background: "#1a1a1a",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #333",
              marginBottom: "16px",
            }}
          >
            <h4
              style={{
                color: "#007aff",
                fontSize: "18px",
                marginBottom: "12px",
              }}
            >
              System Capabilities
            </h4>
            <ul style={{ color: "#cbd5e1", listStyle: "none", padding: 0 }}>
              <li style={{ padding: "8px 0", borderBottom: "1px solid #333" }}>
                <span style={{ color: "#34c759", fontWeight: "600" }}>
                  ⚡ Throughput:
                </span>{" "}
                Handles 15,000 transactions per second (TPS)
              </li>
              <li style={{ padding: "8px 0", borderBottom: "1px solid #333" }}>
                <span style={{ color: "#34c759", fontWeight: "600" }}>
                  🎯 Prioritization:
                </span>{" "}
                Dynamic customer-based message prioritization
              </li>
              <li style={{ padding: "8px 0", borderBottom: "1px solid #333" }}>
                <span style={{ color: "#34c759", fontWeight: "600" }}>
                  🔄 Callbacks:
                </span>{" "}
                Robust callback handling and retry mechanisms
              </li>
              <li style={{ padding: "8px 0" }}>
                <span style={{ color: "#34c759", fontWeight: "600" }}>
                  📈 Scale:
                </span>{" "}
                Processing 100M+ messages daily with 99.99% uptime
              </li>
            </ul>
          </div>
          <div
            style={{
              background: "rgba(0, 122, 255, 0.1)",
              padding: "16px",
              borderRadius: "8px",
              borderLeft: "4px solid #007aff",
            }}
          >
            <p style={{ color: "#cbd5e1", margin: 0, fontSize: "14px" }}>
              <strong style={{ color: "#007aff" }}>Tech Stack:</strong> Java,
              Spring Boot, RabbitMQ, PostgreSQL, Redis, AWS, Kubernetes
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "dev-3",
      title: "Analytics Backend for Messaging Campaigns",
      preview:
        "Built complete analytics backend to track and visualize messaging campaign performance and metrics.",
      content: (
        <div
          style={{
            padding: "20px",
            fontFamily: "SF Pro Display, -apple-system, sans-serif",
            lineHeight: "1.6",
          }}
        >
          <h3 style={{ color: "#fff", marginBottom: "16px" }}>
            📊 Campaign Analytics Platform
          </h3>
          <div
            style={{
              background: "#1a1a1a",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #333",
              marginBottom: "16px",
            }}
          >
            <h4
              style={{
                color: "#007aff",
                fontSize: "18px",
                marginBottom: "12px",
              }}
            >
              Key Features
            </h4>
            <ul style={{ color: "#cbd5e1", listStyle: "none", padding: 0 }}>
              <li style={{ padding: "8px 0", borderBottom: "1px solid #333" }}>
                <span style={{ color: "#ff9500", fontWeight: "600" }}>
                  📈 Real-time Metrics:
                </span>{" "}
                Live tracking of message delivery, open rates, and engagement
              </li>
              <li style={{ padding: "8px 0", borderBottom: "1px solid #333" }}>
                <span style={{ color: "#ff9500", fontWeight: "600" }}>
                  🎯 Campaign Insights:
                </span>{" "}
                Detailed analytics for campaign performance and ROI
              </li>
              <li style={{ padding: "8px 0", borderBottom: "1px solid #333" }}>
                <span style={{ color: "#ff9500", fontWeight: "600" }}>
                  📊 Data Visualization:
                </span>{" "}
                Interactive dashboards and reports for stakeholders
              </li>
              <li style={{ padding: "8px 0" }}>
                <span style={{ color: "#ff9500", fontWeight: "600" }}>
                  ⚡ Performance:
                </span>{" "}
                Optimized queries handling millions of records efficiently
              </li>
            </ul>
          </div>
          <div
            style={{
              background: "rgba(255, 149, 0, 0.1)",
              padding: "16px",
              borderRadius: "8px",
              borderLeft: "4px solid #ff9500",
            }}
          >
            <p style={{ color: "#cbd5e1", margin: 0, fontSize: "14px" }}>
              <strong style={{ color: "#ff9500" }}>Tech Stack:</strong> Python,
              PostgreSQL, Elasticsearch, REST APIs, Data Aggregation Pipelines
            </p>
          </div>
        </div>
      ),
    },
  ],
  DSA: [
    {
      id: "dsa-1",
      title: "LeetCode Problem Solving Stats",
      preview:
        "Comprehensive LeetCode statistics showing problem-solving progress, contest performance, and submission activity with beautiful visualizations.",
      content: <LeetCodeStats />,
    },
  ],
  "Data Science": [
    {
      id: "ds-1",
      title: "Kaggle Data Science Profile",
      preview:
        "Kaggle profile showcasing data science competitions, datasets, and machine learning projects with performance metrics and rankings.",
      content: <KaggleStats />,
    },
  ],
  Achievements: achievementNotes.map(note => ({
    id: note.id,
    title: note.title,
    preview: note.preview,
    content: (
      <Achievement
        image={note.image}
        title={note.achievementTitle}
        content={note.content}
        date={note.date}
        link={note.link}
      />
    ),
  })),
};
