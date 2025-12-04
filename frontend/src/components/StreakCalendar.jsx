import React, { useMemo } from "react";

function StreakCalendar({ tasks }) {
  // Calculate streak and calendar data
  const { streak, completedDays, calendarDays } = useMemo(() => {
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

    // Generate 365-day calendar
    const calendar = [];
    for (let i = 364; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);

      calendar.push({
        date: new Date(date),
        isCompleted: uniqueCompletedDates.has(date.toDateString()),
        isToday: date.toDateString() === today.toDateString(),
      });
    }

    return {
      streak: currentStreak,
      completedDays: uniqueCompletedDates.size,
      calendarDays: calendar,
    };
  }, [tasks]);

  return (
    <div className="streak-section">
      <div className="streak-title">
        🔥 Current Streak
        <span className="streak-count">{streak} days</span>
      </div>

      <div className="calendar-grid">
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${day.isCompleted ? "completed" : ""} ${
              day.isToday ? "today" : ""
            }`}
            title={day.date.toDateString()}
          >
            {day.date.getDate()}
          </div>
        ))}
      </div>

      <div className="calendar-legend">
        <div className="legend-item">
          <div className="legend-box"></div>
          <span>Empty</span>
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
