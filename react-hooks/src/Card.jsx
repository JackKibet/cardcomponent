import ProfilePic from './assets/jackcodes web.jpg';
function Card(){


    return(

        <div className="card">
            <img className="card-img" src={ProfilePic} alt="profileimg" />
            <h2>Jack Kibet</h2>
            <p>i am a react js developer</p>
        </div>
    );
}
export default Card