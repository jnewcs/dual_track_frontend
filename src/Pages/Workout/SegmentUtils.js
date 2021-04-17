export const grabSegmentNotificationClass = (finishTime, timeGoal) => {
  const finishTimeInSeconds = finishTime / 1000.0;
  const difference = timeGoal - finishTimeInSeconds;
  if (difference < -8.0) return 'notification is-danger';
  if (difference < -4.0) return 'notification is-warning';

  return 'notification is-success';
};
