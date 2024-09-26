import schoolBg from '../../assets/img/bg.jpg';
function Header() {
	return (
		<>
			<div className="relative flex flex-col h-60 overflow-hidden">
				<p className="text-center text-green-900 text-4xl font-bold pt-8">Welcome</p>
				<img
					src={schoolBg}
					alt=""
					className='absolute -z-10'
				/>
			</div>
		</>
	);
}

export default Header;
