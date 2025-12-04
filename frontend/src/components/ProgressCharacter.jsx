import React, { useMemo } from "react";
import "../styles/ProgressCharacter.css";

function ProgressCharacter({ tasks }) {
  const { completedCount, totalCount, progressPercent, mood } = useMemo(() => {
    const completed = tasks.filter((t) => t.completed).length;
    const total = tasks.length || 1;
    const percent = Math.round((completed / total) * 100);

    let emotion = "happy";
    if (percent === 0) emotion = "sad";
    else if (percent < 25) emotion = "worried";
    else if (percent < 50) emotion = "okay";
    else if (percent < 75) emotion = "excited";
    else emotion = "happy";

    return {
      completedCount: completed,
      totalCount: total,
      progressPercent: percent,
      mood: emotion,
    };
  }, [tasks]);

  const getMoodEmoji = () => {
    switch (mood) {
      case "sad":
        return "😢";
      case "worried":
        return "😟";
      case "okay":
        return "😐";
      case "excited":
        return "😊";
      case "happy":
        return "🥳";
      default:
        return "😊";
    }
  };

  const getMoodMessage = () => {
    switch (mood) {
      case "sad":
        return "No tasks yet! Let's get started! 💪";
      case "worried":
        return "Keep going! You're making progress! 📈";
      case "okay":
        return "Half way there! Keep it up! 🚀";
      case "excited":
        return "Amazing! You're almost done! 🎯";
      case "happy":
        return "Perfect! You crushed it! 🌟";
      default:
        return "Let's do this! 💪";
    }
  };

  return (
    <div className="progress-character">
      <div className={`character-box character-${mood}`}>
        <div className="character-head">
          <div className="character-eyes">
            <div className="eye left-eye">
              <div className="pupil"></div>
            </div>
            <div className="eye right-eye">
              <div className="pupil"></div>
            </div>
          </div>
          <div className="character-mouth"></div>
        </div>
        <div className="character-body">
          <div className="character-arms">
            <div className="arm left-arm"></div>
            <div className="arm right-arm"></div>
          </div>
          <div className="character-legs">
            <div className="leg left-leg"></div>
            <div className="leg right-leg"></div>
          </div>
        </div>
      </div>

      <div className="character-info">
        <div className="mood-emoji">{getMoodEmoji()}</div>
        <div className="mood-message">{getMoodMessage()}</div>

        <div className="progress-container">
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
          <div className="progress-text">
            {completedCount}/{totalCount} Tasks
          </div>
        </div>

        <div className="progress-percentage">{progressPercent}%</div>
      </div>
    </div>
  );
}

export default ProgressCharacter;
