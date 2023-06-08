import { useEffect, useState } from "react"
import axios from 'axios'

export default function AllBooks() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        async function fetchBooks() {
            try {
                const response = await axios.get('https://spine-chasers-server.onrender.com/library')
                const { data } = response.data
                setBooks(data)
            } catch (err) {
                console.error(err)
            }
        }
        fetchBooks()
    }, [])

    const loaded = books.map((book) => {
        return (
            <div key={book.id} className='allHolder'>
                <img className='cover' src={book.image_url} alt="cover" />
            </div>
        )
    })

    return (
        <>
            <div className='container'>
                <h2 className='groupTitle'>All Books</h2>
                <div className='all'>
                    { books ? loaded : <p>Loading...</p> }
                </div>
            </div>
        </>
    )
}