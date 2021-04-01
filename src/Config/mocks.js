export const mockedLoginCall = () => {
  return {
    json: () => ({
      email: 'test@test.com'
    }),
    headers: {
      get: (_type) => 'Bearer n345123fds23rgb'
    }
  };
}