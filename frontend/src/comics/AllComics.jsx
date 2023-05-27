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

    const loaded = comics.map((comic) => {
        return (
            <div key={comic.id}>
                <p>{comic.title}</p>
                <img src={comic.image_url} alt="cover" />
            </div>
        )
    })

    return (
        <>
            <h1>All Comics</h1>
            { comics ? loaded : <p>Loading...</p> }
        </>
    )
}