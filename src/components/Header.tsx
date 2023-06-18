import logo from './../assets/Troll Face.png'

const Header = () => {
	return (
		<header className='header'>
			<img src={logo} alt="" className='header--image' />
			<h3 className='header--title'>Meme Generator</h3>
			<h4 className='header--project'>React Course - Project 3</h4>
		</header>
	)
}

export default Header