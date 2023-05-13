# Spine Chasers

## A new way to manage and interact with your physical library

Spine Chasers encourages you to read and interact with your books again, so get ready to crack some spines!

You can add a book to your collection with just the ISBN, don't worry we will fill in the rest. We use the ISBN to retrieve the title, author, book cover, description, and rating. If you wish, you can add custom tags to your book to enable personalized book categories.

This project is still in the early stages if you wish to start digitally tracking your books today follow these [instructions](#run-server-locally).

All book lovers hit the phase where they are buying more books than they are reading. This application allows you to browse your library quickly. Seeing covers, descriptions, and ratings at a glance in the same way we have gotten accustomed to viewing shows and movies on Netflix.

See custom book lists populated with books you own like:

"Who done it?" (mystery/thriller)

"Visually Stunning" (graphicnovel)

"The Great Outdoors" (nature/environment)

The lists will be more niche depending on your personalized tags.

Overwhelmed with all the options? No problem! We will pick for you. After all, this project started from me not being able to choose my own book on a gloomy Sunday morning.

<!--
 ## visual helper here

graphic/gif/video

## Optimizations

What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility

## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them? -->

## Run Server Locally

Note: These are the instructions to run the server ONLY. Instructions will be updated when the client side is ready.

### Clone the project

```bash
  git clone https://github.com/robbiemwoolf/spine-chasers
```

### Go to the project directory

```bash
  cd spine-chasers/backend
```

### Install dependencies

```bash
  npm install
```

### Create .env file

```bash
    touch .env
```

### Add your database url

Copy the following code to your newly created file (replace 'YOUR_URL' with your database url)

```bash
    DATABASE_URL=YOUR_URL
```

Start the server

```bash
  npm run dev
```

## Adding books to your library ('/library')

After the installation is complete and you have your server up and running, you can start adding your books. Utilize an API platform, like [Postman](https://www.postman.com/product/what-is-postman/), to interact with your API while the client side of Spine Chasers is in development.

Follow the instructions on the Postman website to install the application. Once open follow these steps to add your first book.

1. Change request to POST.

2. Make the request at the following url: 

```http://localhost:5000/library/```


3. Below this click 'body', choose 'raw', change drop down to 'JSON'.

4. Follow this format for the body request:

```
    { 
        "isbn" : 9781620976081,
        "tags" : [ 
            "nonfiction",
            "nature",
            "political"
        ]
    }
```

Note only the isbn is required, if you do not wish to submit custom tags follow the following format:

``` { "isbn" : 9781620976081 } ```

5. Now you are ready to click the Send button.

You will receive a confirmation with the book details. It should look similar to:

```
{
    "data": [
        {
            "book_id": 294,
            "isbn": "9780393356687",
            "title": "The Overstory",
            "author": "{\"Richard Powers\"}",
            "image_url": "http://books.google.com/books/content?id=AmxFtwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
            "description": "The Overstory, winner of the 2019 Pulitzer Prize in Fiction, is a sweeping, impassioned work of activism and resistance that is also a stunning evocation of--and paean to--the natural world. From the roots to the crown and back to the seeds, Richard Powers's twelfth novel unfolds in concentric rings of interlocking fables that range from antebellum New York to the late twentieth-century Timber Wars of the Pacific Northwest and beyond. There is a world alongside ours--vast, slow, interconnected, resourceful, magnificently inventive, and almost invisible to us. This is the story of a handful of people who learn how to see that world and who are drawn up into its unfolding catastrophe.",
            "rating": "4",
            "tags": [
                "nonfiction",
                "nature",
                "political"
            ],
            "created_at": "2023-05-13T22:10:55.604Z",
            "updated_at": "2023-05-13T22:10:55.604Z"
        }
    ]
}
```

## GET request

```http://localhost:5000/library/```

Use Postman to send a GET request to retrieve a list of all your books.

Alternatively, you can retrieve a specific book at a different path.

```http://localhost:5000/isbn/:isbn```

Replace :isbn with the isbn number of the book you are trying to retrieve, like so:
```http://localhost:5000/isbn/9780393356687```

## DELETE request

If you accidentally add a book, or just need to delete a book you no longer own you can run a DELETE request at

```http://localhost:5000/isbn/:isbn```

## PUT request

Sending a PUT request to
```http://localhost:5000/isbn/:isbn``` allows you to personalize the books tags. Future functionality will also allow updates to descriptions, ratings, start/end dates, and notes.

## Known issues (Work in progress)

This project is still ongoing. The next major task after server deployment is creating a client-side with a similar layout and feel as major streaming services, think Kindle or Netflix.

After basic functionality and styling is complete and the client side is deployed, the following tasks will be addressed: user authorization in order to save your personal library on the Spine Chasers database, the ability to set custom descriptions/reviews, the option to set reading start/end dates, and a classification for those books that you are reading but do not own.

## Find a bug?

If you found an issue or would like to submit an improvement to this project, please submit an issue using the issues tab above. If you would like to submit a PR with a fix, reference the issue you created!
