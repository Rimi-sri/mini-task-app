import React, { useState, useMemo } from "react";

function StreakCalendar({ tasks }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const dailyQuotes = [
    "Believe in yourself! 💪",
    "Keep pushing! 🚀",
    "You got this! ✨",
    "Stay focused! 🎯",
    "Keep learning! 📚",
    "Never give up! 🔥",
    "Progress over perfection! 📈",
    "Be the best version! 🌟",
    "Make it happen! 💥",
    "Stay positive! 🌈",
    "Work hard! 💼",
    "Dream big! 🌙",
    "Be awesome! 🎉",
    "Show your power! ⚡",
    "Love what you do! ❤️",
    "Be unstoppable! 🦾",
    "Achieve greatness! 👑",
    "Go the extra mile! 🏃",
    "Inspire others! 💫",
    "Be legendary! 🐉",
    "Create magic! ✨",
    "Spread joy! 😊",
    "Seize the day! ☀️",
    "Be bold! 🦁",
    "Think big! 🧠",
    "Stay hungry! 🍎",
    "Rise and shine! 🌅",
    "Own it! 🏆",
    "Shine bright! ⭐",
    "Thrive always! 🌸",
    "Be fearless! 🚁",
  ];

  const { streak, completedDays, monthData } = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Get all completed task dates
    const completedTaskDates = tasks
      .filter((task) => task.completed)
      .map((task) => {
        const date = new Date(task.createdAt);
        date.setHours(0, 0, 0, 0);
        return date.toDateString();
      });

    const uniqueCompletedDates = new Set(completedTaskDates);

    // Calculate current streak
    let currentStreak = 0;
    let checkDate = new Date(today);

    while (true) {
      if (uniqueCompletedDates.has(checkDate.toDateString())) {
        currentStreak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }

    // Generate calendar for current month
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const calendar = [];
    
    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      calendar.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      calendar.push({
        date: new Date(date),
        day,
        isCompleted: uniqueCompletedDates.has(date.toDateString()),
        isToday: date.toDateString() === today.toDateString(),
        quote: dailyQuotes[day - 1] || dailyQuotes[day % dailyQuotes.length],
      });
    }

    return {
      streak: currentStreak,
      completedDays: uniqueCompletedDates.size,
      monthData: calendar,
    };
  }, [tasks, currentMonth]);

  const monthName = currentMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const goToPreviousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const goToToday = () => {
    setCurrentMonth(new Date());
  };

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="streak-section">
      {/* Streak Header */}
      <div className="streak-title">
        🔥 Current Streak
        <span className="streak-count">{streak} days</span>
      </div>

      {/* Month Navigation */}
      <div className="month-navigation">
        <button onClick={goToPreviousMonth} className="nav-btn">
          ◀
        </button>
        <div className="month-display">
          <h3>{monthName}</h3>
        </div>
        <button onClick={goToNextMonth} className="nav-btn">
          ▶
        </button>
      </div>

      {/* Today Button */}
      <button onClick={goToToday} className="today-btn">
        Go to Today
      </button>

      {/* Weekday Headers */}
      <div className="weekdays-row">
        {weekDays.map((day) => (
          <div key={day} className="weekday-header">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="monthly-calendar-grid">
        {monthData.map((dayData, index) => (
          <div
            key={index}
            className={`calendar-cell ${dayData ? "" : "empty"} ${
              dayData?.isCompleted ? "completed" : ""
            } ${dayData?.isToday ? "today" : ""}`}
            title={dayData ? dayData.date.toDateString() : ""}
          >
            {dayData ? (
              <>
                <div className="day-number">{dayData.day}</div>
                <div className="day-quote">{dayData.quote}</div>
              </>
            ) : null}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="calendar-legend">
        <div className="legend-item">
          <div className="legend-box"></div>
          <span>No Task</span>
        </div>
        <div className="legend-item">
          <div className="legend-box completed"></div>
          <span>Completed</span>
        </div>
        <div className="legend-item">
          <div className="legend-box today"></div>
          <span>Today</span>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-container">
        <div className="stat">
          <span className="stat-label">Total Completed</span>
          <span className="stat-value">{completedDays}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Completion Rate</span>
          <span className="stat-value">
            {tasks.length > 0
              ? Math.round((tasks.filter((t) => t.completed).length / tasks.length) * 100)
              : 0}
            %
          </span>
        </div>
      </div>
    </div>
  );
}

export default StreakCalendar;
