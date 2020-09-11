import React from 'react';


function Step(props) {



    return (
        <div className='step'>
           
            Krok:<input type='number' className='value-step' onChange={props.setStep} value={props.currentStepValue}/>
        </div>
    );

}


export default Step;