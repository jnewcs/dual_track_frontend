import { grabGradientClass } from "../Pages/Workout/SegmentUtils";

export const mockedWorkouts = [
  {
    identifier: process.env.REACT_APP_WORKOUT_UID,
    name: 'Track 150m Intervals',
    description: '5 sets of 150m with 2 minute breaks',
    gradientClass: grabGradientClass(0)
  },
  {
    identifier: '8935fr-1m32lk',
    name: '1 mile endurance',
    description: 'Simple 1 mile run to gain endurance',
    gradientClass: grabGradientClass(1)
  },
];

export const mockedWorkoutsWithDetails = [
  {
    identifier: process.env.REACT_APP_WORKOUT_UID,
    name: 'Track 150m Intervals',
    description: '5 sets of 150m with 2 minute breaks',
    segments: [
      {
        identifier: 'y676-3refs',
        display_length: '150m',
        length: 150.00,
        measurement: 'meter',
        time_goal: 30.00,
        rest: 60.00,
        quantity: 1,
        description: 'Slow build up. Try to reach 60% speed by the finish line'
      },
      {
        identifier: 't234o-G435231',
        display_length: '100m',
        length: 100.00,
        measurement: 'meter',
        time_goal: 20.00,
        rest: 75.00,
        quantity: 1,
        description: 'Try to reach 60% speed by the finish line'
      }
    ],
    gradientClass: grabGradientClass(0)
  },
  {
    identifier: '8935fr-1m32lk',
    name: '1 mile endurance',
    description: 'Simple 1 mile run to gain endurance',
    segments: [],
    gradientClass: grabGradientClass(1)
  },
];
