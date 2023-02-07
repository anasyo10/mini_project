# web &middot; [![CI](https://github.com/queue-so/web/actions/workflows/ci.yml/badge.svg)](https://github.com/queue-so/web/actions/workflows/ci.yml)

## Contributing

### Requirements

- Node 16

- Yarn 1.22+

### Setup

1. Install requirements

2. Clone the repository

3. Run `yarn install` to install dependencies

4. Run `bundle install`

5. Run `cp ./config/database.yml.example ./config/database.yml`

6. Run `rails db:create && rails db:migrate && rails db:seed`

7. Run `bin/dev`

8. Open app on `http://localhost:3000`

### Dummy data

#### Admin

- email: admin@email.com
- password: 123123

#### Student

- email: student@email.com
- password: 123123
