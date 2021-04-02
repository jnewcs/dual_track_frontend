// src/server.js
import { createServer, Response, Model } from 'miragejs';

export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,
    models: {
      user: Model
    },
    seeds(server) {
      server.create('user', { name: 'Bob', email: 'j.newcomb@outlook.com' });
    },
    routes() {
      this.passthrough('/dual_track_frontend/CHANGELOG.json');
      this.urlPrefix = 'https://glacial-plateau-65219.herokuapp.com';

      this.post('/login', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        const user = schema.users.findBy({ email: attrs.user.email });
        if (user) {
          return new Response(200, { Authorization: 'Bearer 5G3144t3g' }, user.attrs);
        }

        return new Response(401, {}, { sucess: false, message: 'Email was not found' });
      });
    },
  })

  return server
}
