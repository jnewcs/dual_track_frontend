export const mockedWorkouts = [
  {
    identifier: process.env.REACT_APP_WORKOUT_UID,
    name: 'Track 150m Intervals',
    description: '5 sets of 150m with 2 minute breaks'
  },
  {
    identifier: '8935fr-1m32lk',
    name: '1 mile endurance',
    description: 'Simple 1 mile run to gain endurance'
  },
];

export const mockedWorkoutsWithDetails = [
  {
    identifier: process.env.REACT_APP_WORKOUT_UID,
    name: 'Track 150m Intervals',
    description: '5 sets of 150m with 2 minute breaks',
    segments: []
  },
  {
    identifier: '8935fr-1m32lk',
    name: '1 mile endurance',
    description: 'Simple 1 mile run to gain endurance',
    segments: []
  },
];
