import React, { useState, useEffect } from 'react'

const Meme = () => {
	const [meme, setMeme] = useState({
		id: 0,
		name: '',
		url: '',
		width: 0,
		height: 0,
		box_count: 0,
	})
	const [data, setData] = useState([])

	useEffect(() => {
		const getData = async () => {
			setData([])
			const result = await fetch('/api/meme.json')
				.then((response) => {
					return response.json()
				})
				.catch((error) => console.error(error))

			if (!completeFetch)
				setData(result)
		}
		let completeFetch = false

		getData()
		return () => {
			completeFetch = true
		}
	}, [])

	const handleMeme = () => {
		setMeme(data[Math.floor(Math.random() * data.length)])
	}

	const GetMeme = () => {
		return (
			<div className="meme">
				<p>{meme.name}</p>
				<img src={meme.url} width={meme.width} height={meme.height} />
			</div>
		)
	}

	return (
		<main>
			<div className="form">
				<input type="text" placeholder='Top text' className="form--input" />
				<input type="text" placeholder='Bottom text' className="form--input" />
				<button className="form--button" onClick={handleMeme}>Get a new meme image 🖼</button>
			</div>
			{meme.url !== '' && GetMeme()}

		</main>
	)
}

export default Meme