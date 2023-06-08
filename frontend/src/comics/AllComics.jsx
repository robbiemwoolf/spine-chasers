import { useEffect, useState } from "react"
import axios from 'axios'

export default function AllComics() {
    const [comics, setComics] = useState([])

    useEffect(() => {
        async function fetchComics() {
            try {
                const response = await axios.get('https://spine-chasers-server.onrender.com/library?tags=graphicnovel')
                const { data } = response.data
                setComics(data)
            } catch (err) {
                console.error(err)
            }
        }
        fetchComics()
    }, [])

    const loaded = comics.map((book) => {
        return (
            <div key={book.id} className='allHolder'>
                <img className='cover' src={book.image_url} alt="cover" />
            </div>
        )
    })

    return (
        <>
          <div className='container'>
                <h2 className='groupTitle'>Graphic Novels</h2>
                <div className='all'>
                    { comics ? loaded : <p>Loading...</p> }
                </div>
            </div>
        </>
    )
}