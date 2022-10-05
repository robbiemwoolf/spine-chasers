const request = require('supertest')
const app = require('../src/app')
const db = require('../src/db/connection')

describe('path /', () => {
    beforeAll(() => {
        return db.migrate
            .forceFreeMigrationsLock()
            .then(() => db.migrate.rollback(null, true))
            .then(() => db.migrate.latest())
    })

    beforeEach(() => {
        return db.seed.run()
    })

    afterAll(async () => {
        return await db.migrate.rollback(null, true).then(() => db.destroy())
    })
    
    describe('GET method', () => {
        it('returns an array of users', async () => {
            const expected = [
                {
                    user_id: 1,
                    username: 'robbiemwoolf',
                    first_name: 'Robbie',
                    last_name: 'Woolf',
                    email: 'robbiemwoolf@gmail.com',
                    password: 'P@ssw0rd',
                    library_total: 0,
                    read_total: 0,
                    read_comics_total: 0,
                    token_total: 0,
                    created_at: '',
                    updated_at: ''
                },
                {
                    user_id: 2,
                    username: 'deviantcamel',
                    first_name: 'Tia',
                    last_name: 'Woolf',
                    email: 'tiaamartinez@hotmail.com',
                    password: 'pa$3word',
                    library_total: 0,
                    read_total: 0,
                    read_comics_total: 0,
                    token_total: 0,
                    created_at: '',
                    updated_at: ''
                }
            ]

            users.push(...expected)

            const res = await req(app).get('/api/users')

            expect(res.status).toBe(200)
            expect(res.body.data).toEqual(expected)
        })
    })

    describe('POST method', () => {
        it('returns 200 OK when signup request is valid', async (done) => {
            request(app)
                .post('/api/users')
                .send({
                    username: 'user1',
                    email: 'user1@mail.com',
                    password: 'P@ssw0rd',
                })
                    expect(res.status).toBe(200)
                    done()
        })
    
        it('returns success message when signup request is valid', (done) => {
            request(app)
                .post('/api/users')
                .send({
                    username: 'user1',
                    email: 'user1@mail.com',
                    password: 'P@ssw0rd',
                })
                .then((response) => {
                    expect(response.body.message).toBe('user created')
                    done()
                })
        })
    
        it('saves the user to database', (done) => {
            request(app)
                .post('/api/users')
                .send({
                    username: 'user1',
                    first_name: 'Ripley',
                    last_name: '',
                    email: 'user1@mail.com',
                    password: 'P@ssw0rd',
                })
                .then(() => {
                    users.findAll().then((usersList) => {
                        expect(usersList.length.toBe(1))
                        done()
                    })
                })
        })
    })
})