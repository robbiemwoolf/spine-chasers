import ItemForList from "../components/ItemForList"

export default function Home() {
    const listTitles = ['group one', 'group two', 'group three', 'group four', 'group five']

    const lists = listTitles.map((listTitle) => {
        return (
        <>
            <h3>{listTitle}</h3>
            <ItemForList key={listTitle}/>
        </>
        )
    })

    return (
        <>
            {lists}
        </>
    )
}