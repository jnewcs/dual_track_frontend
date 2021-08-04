export const getFromLocalStorage = (key, type = 'string') => {
  if (type === 'object') {
    const item = localStorage.getItem(key) || '{}';
    return JSON.parse(item);
  }

  const item = localStorage.getItem(key);
  if (!item || item === 'null') return null;
  return item;
};

export const grabSegmentNotificationClass = (finishTime, timeGoal) => {
  const finishTimeInSeconds = finishTime / 1000.0;
  const difference = timeGoal - finishTimeInSeconds;
  if (difference < -8.0) return 'has-text-danger';
  if (difference < -4.0) return 'has-text-warning';

  return 'has-text-success';
};

export const getPreviousWorkoutData = (identifier) => {
  return getFromLocalStorage(`liveSegmentData-${identifier}`, 'object');
}

export const getRelevantSegmentData = (identifier, sessionIdentifier, segmentIdentifier) => {
  const parsedSegmentData = getFromLocalStorage(`liveSegmentData-${identifier}`, 'object');
  const relevantSession = parsedSegmentData[sessionIdentifier];
  if (!relevantSession) return {};

  return relevantSession[segmentIdentifier] || {};
}

export const saveRelevantSegmentData = (identifier, sessionIdentifier, segmentIdentifier, segmentData) => {
  const savedIdentifierData = getFromLocalStorage(`liveSegmentData-${identifier}`, 'object');
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

export const isLastSegment = (segmentIdentifier, segments) => {
  if (!segmentIdentifier || !segments) return false;

  const index = segments.findIndex((seg) => seg.identifier === segmentIdentifier);
  return index === (segments.length - 1);
}
