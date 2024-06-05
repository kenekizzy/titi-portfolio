import Arrow from '../assets/icons/maki_arrow.svg'

 const PlayGround = () => {
   const scrollLeft = () => {
     document.querySelector('.picture-frames').scrollBy({ left: -200, behavior: 'smooth' })
   }

   const scrollRight = () => {
     document.querySelector('.picture-frames').scrollBy({ left: 200, behavior: 'smooth' })
   }
  return (
    <div className="mt-5 text-white">
      <h2 className="font-normal text-2xl">Playground</h2>
      <hr className='my-2 w-[104px] h-[3px]'/>
      <p className="font-normal text-lg w-[788px]">
        In my free time, I <span className="white-text">sketch</span> and I <span className="white-text">paint</span>. I also dabble into <span className="white-text">graphic work</span>, I love art in all forms and it helps my creativity , It also relaxes and refreshes the mind.
      </p>
      <div className="picture-frames">
        <img src={Arrow} alt="Scroll Left" className="arrow arrow-left text-white" onClick={scrollLeft} />
        <img src={Arrow} alt="Scroll Right" className="arrow arrow-right" onClick={scrollRight} />
      </div>
      <div className="button-section">
        <button className="view-button">View all</button>
      </div>
    </div>
  )
}

export default PlayGround