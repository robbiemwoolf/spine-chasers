const request = require("supertest");

const app = require("../src/app");
const knex = require("../src/db/connection");

describe("Library Routes", () => {
    beforeAll(() => {
        return knex.migrate
            .forceFreeMigrationsLock()
            .then(() => knex.migrate.rollback(null, true))
            .then(() => knex.migrate.latest());
    });

    beforeEach(() => {
        return knex.seed.run();
    });

    afterAll(async () => {
        return await knex.migrate.rollback(null, true).then(() => knex.destroy());
    });

    describe("GET /library", () => {

        it("should return a list of all library books by default", async () => {
            const length = 289;
            const response = await request(app).get("/library")

            expect(response.statusCode).toBe(200);
            expect(response.body.error).toBeUndefined();
            expect(response.body.data.length).toEqual(length);
            expect(response.body.data[0].book_id).toEqual(1)
        });

        it("should return a list of books with the given tag", async () => {
            const tag = "retelling"
            const response = await request(app).get(`/library?tags=${tag}`);

            expect(response.statusCode).toBe(200);
            expect(response.body.data.length).toEqual(5);
        });

        it("should return the book with the given isbn", async () => {
            const isbn = 9780143114741;
            const response = await request(app).get(`/library/isbn/${isbn}`);

            expect(response.statusCode).toBe(200);
            expect(response.body.data.book_id).toEqual(102);
        });
    });
});