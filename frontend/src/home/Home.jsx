import { useEffect, useState } from "react"
import axios from 'axios'
import './Home.css'

export default function Home() {

    const [groupOne, setGroupOne] = useState([])
    const [groupTwo, setGroupTwo] = useState([])
    const [groupThree, setGroupThree] = useState([])
    const [groupFour, setGroupFour] = useState([])
    const [groupFive, setGroupFive] = useState([])

    useEffect(() => {
        const criteria = ['classics', 'horror', 'lgbtqia', 'mystery', 'nonfiction', 'lgbtq']
        async function fetchGroupOne() {
            try {
                const response = await axios.get(`https://spine-chasers-server.onrender.com/library?tags=${criteria[0]}`)
                const { data } = response.data
                console.log(data)
                setGroupOne(data)
            } catch (err) {
                console.error(err)
            }
        }
        async function fetchGroupTwo() {
            try {
                const response = await axios.get(`https://spine-chasers-server.onrender.com/library?tags=${criteria[1]}`)
                const { data } = response.data
                console.log(data)
                setGroupTwo(data)
            } catch (err) {
                console.error(err)
            }
        }
        async function fetchGroupThree() {
            try {
                const response = await axios.get(`https://spine-chasers-server.onrender.com/library?tags=${criteria[2]}`)
                const received = await axios.get(`https://spine-chasers-server.onrender.com/library?tags=${criteria[5]}`)
                const { data } = response.data
                const booksOne = data
                const booksTwo = received.data.data
                console.log('dataTwo: ', booksTwo)
                console.log('dataOne: ', booksOne)
                const dataFinal = booksOne.concat(booksTwo)
                console.log('dataFinal:', dataFinal)
                setGroupThree(dataFinal)
            } catch (err) {
                console.error(err)
            }
        }
        async function fetchGroupFour() {
            try {
                const response = await axios.get(`https://spine-chasers-server.onrender.com/library?tags=${criteria[3]}`)
                const { data } = response.data
                console.log(data)
                setGroupFour(data)
            } catch (err) {
                console.error(err)
            }
        }
        async function fetchGroupFive() {
            try {
                const response = await axios.get(`https://spine-chasers-server.onrender.com/library?tags=${criteria[4]}`)
                const { data } = response.data
                console.log(data)
                setGroupFive(data)
            } catch (err) {
                console.error(err)
            }
        }
        fetchGroupOne()
        fetchGroupTwo()
        fetchGroupThree()
        fetchGroupFour()
        fetchGroupFive()
    }, [])

    const first = groupOne.map((book) => {
        return (
            <div key={book.id} className='coverHolder'>
                <img className='cover' src={book.image_url} alt="cover" />
            </div>
        )
    })
    
    const second = groupTwo.map((book) => {
        return (
            <div key={book.id} className='coverHolder'>
                <img className='cover' src={book.image_url} alt="cover" />
            </div>
        )
    })

    const third = groupThree.map((book) => {
        return (
            <div key={book.id} className='coverHolder'>
                <img className='cover' src={book.image_url} alt="cover" />
            </div>
        )
    })

    const fourth = groupFour.map((book) => {
        return (
            <div key={book.id} className='coverHolder'>
                <img className='cover' src={book.image_url} alt="cover" />
            </div>
        )
    })

    const fifth = groupFive.map((book) => {
        return (
            <div key={book.id} className='coverHolder'>
                <img className='cover' src={book.image_url} alt="cover" />
            </div>
        )
    })

    return (
        <>
            <div className='container'>
                <h2 className='groupTitle'>Classics</h2>
                <div className='group'>
                    { groupOne ? first : <p>Loading...</p> }
                </div>
            </div>
            <div className='container'>
                <h2 className='groupTitle'>Horror</h2>
                <div className='group'>
                    { groupTwo ? second : <p>Loading...</p> }
                </div>
            </div>
            <div className='container'>
                <h2 className='groupTitle'>LGBTQIA+</h2>
                <div className='group'>
                    { groupThree ? third : <p>Loading...</p> }
                </div>
            </div>
            <div className='container'>
                <h2 className='groupTitle'>Mysteries</h2>
                <div className='group'>
                    { groupFour ? fourth : <p>Loading...</p> }
                </div>
            </div>
            <div className='container'>
                <h2 className='groupTitle'>Nonfiction</h2>
                <div className='group'>
                    { groupFive ? fifth : <p>Loading...</p> }
                </div>
            </div>
        </>
    )
}