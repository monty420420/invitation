import '../css/countDown.css';


function CountDown(){


    return(
     <div id='countDown' className='countDown'>
        <div className='countDown_title'>CountDown</div>
        <div className='countDown_date'>2023. 09. 17</div>
        <div className='countDown_time'>
            <div className='day'>
                <div className='num'></div>
                <div className='text'></div>
            </div>
            <div className='hours'>
                <div className='num'></div>
                <div className='text'></div>
            </div>
            <div className='minutes'>
                <div className='num'></div>
                <div className='text'></div>
            </div>
            <div className='seconds'>
                <div className='num'></div>
                <div className='text'></div>
            </div>
        </div>
     </div>
    )
}

export default CountDown;