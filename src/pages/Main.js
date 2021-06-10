import image from '../images/mother-and-daughter-drawing.jpeg'


export default function Main() {
  return (
    <div className='main-page'>
      <div className='main-banner'></div>

      <div className='row'>

        <div className='branch col-4'>
          <img className='branch-img' src={image} />
          <div className='branch-title'>
            <h3>Branch #1</h3>
          </div>
          
        </div>

        <div className='branch col-4'>
          <img className='branch-img' src={image} />
        </div>

        <div className='branch col-4'>
          <img className='branch-img' src={image} />
        </div>

      </div>
    </div>
  );
}
