export const grabSegmentNotificationClass = (finishTime, timeGoal) => {
  const finishTimeInSeconds = finishTime / 1000.0;
  const difference = timeGoal - finishTimeInSeconds;
  if (difference < -8.0) return 'has-text-danger';
  if (difference < -4.0) return 'has-text-warning';

  return 'has-text-success';
};

export const getPreviousWorkoutData = (identifier) => {
  const segmentDataFromLS = localStorage.getItem(`liveSegmentData-${identifier}`) || "{}";
  return JSON.parse(segmentDataFromLS);
}

export const getRelevantSegmentData = (identifier, sessionIdentifier, segmentIdentifier) => {
  const segmentDataFromLS = localStorage.getItem(`liveSegmentData-${identifier}`) || "{}";
  const parsedSegmentData = JSON.parse(segmentDataFromLS);
  const relevantSession = parsedSegmentData[sessionIdentifier];
  if (!relevantSession) return {};

  return relevantSession[segmentIdentifier] || {};
}

export const saveRelevantSegmentData = (identifier, sessionIdentifier, segmentIdentifier, segmentData) => {
  const saved = localStorage.getItem(`liveSegmentData-${identifier}`) || "{}";
  const savedIdentifierData = JSON.parse(saved);
  const savedSessionData = savedIdentifierData[sessionIdentifier] || {};
  const newSessionData = {
    ...savedSessionData,
    [segmentIdentifier]: segmentData
  };

  const jsonString = JSON.stringify({
    ...savedIdentifierData,
    [sessionIdentifier]: newSessionData
  });
  localStorage.setItem(`liveSegmentData-${identifier}`, jsonString);
}

export const removeWorkoutHistory = (identifier) => {
  localStorage.removeItem(`liveSegmentData-${identifier}`);
}
