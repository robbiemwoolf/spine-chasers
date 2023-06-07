import { useEffect, useState } from "react"
import axios from 'axios'

export default function Home() {
    const [groupOne, setGroupOne] = useState([])

    useEffect(() => {
        async function fetchGroupOne() {
            try {
                const response = await axios.get('https://spine-chasers-server.onrender.com/library?tags=scifi')
                const { data } = response.data
                console.log(data)
                setGroupOne(data)
            } catch (err) {
                console.error(err)
            }
        }
        fetchGroupOne()
    }, [])

    const loaded = groupOne.map((book) => {
        return (
            <div key={book.id}>
                <p>{book.title}</p>
                <p>{book.isbn}</p>
                <img src={book.image_url} alt="cover" />
            </div>
        )
    })

    return (
        <>
            { groupOne ? loaded : <p>Loading...</p> }
        </>
    )
}