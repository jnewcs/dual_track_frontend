export const mockedLoginCall = () => {
  return {
    json: () => ({
      "id": 1,
      "email": "j.newcomb@outlook.com",
      "created_at":"2021-04-01T04:51:02.665Z",
      "updated_at":"2021-04-01T05:16:52.627Z"
    }),
    headers: {
      get: (_type) => 'Bearer n345123fds23rgb'
    }
  };
}