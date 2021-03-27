import React from 'react'

const HandleSubmit = (e) => {

    e.preventDefault(); //prevent to refresh page

    // const [isLoaded, setIsLoaded] = React.useState(false)
    // const [items, setItems] = React.useState([])
    // const [error, setError] = React.useState(null)
    
    React.useEffect(() => {
        fetch("https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='New_England_Patriots'")
        .then(res => res.json())
        .then(
        console.log('use effect')
        )

    }, [])

    return (
        <div>
            useEffect
        </div>
    )
}

export default HandleSubmit
