import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
      index: true,
    },

    extractedText: {
      type: String,
      required: true,
    },

    score: {
      type: Number,
      default: 0,
    },

    summary: {
      type: String,
      default: "",
    },

    name: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      default: "",
    },

    phone: {
      type: String,
      default: "",
    },

   education: {
    type: [
      {
        institution: { type: String, default: "" },
        degree: { type: String, default: "" },
        duration: { type: String, default: "" },
        percentage: { type: String, default: "" },
      },
    ],
    default: [],
  },

    skills: {
      type: [String],
      default: [],
    },

  projects: {
    type: [
      {
        name: { type: String, default: "" },
        technologies: { type: [String], default: [] },
        details: { type: [String], default: [] },
      },
    ],
    default: [],
  },

    experience: {
      type: [String],
      default: [],
    },

    strengths: {
      type: [String],
      default: [],
    },

    weaknesses: {
      type: [String],
      default: [],
    },

    missingSkills: {
      type: [String],
      default: [],
    },

    suggestedRole: {
      type: String,
      default: "",
    },

    recommendations: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Resume = mongoose.model("Resume", resumeSchema);

export default Resume;