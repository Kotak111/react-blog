import React from 'react';
import { useForm } from 'react-hook-form';

function AnySuggestion(props) {
    const {register, handleSubmit, formState: { errors }} =useForm();

    function DataSug(data){
        console.log(data);
    }
    return (
        <div>
            <div className="any-main">
                <div className="row mx-0">
                <div className="col-lg-6 col-md-6 col-sm-12 "></div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="any-text">
                            <h3 className='any-text-2'>Ask me any blog suggestion</h3>
                        </div>
                        <div className='d-flex dev-sug '>
                            <form action="" method='post' onSubmit={handleSubmit(DataSug)} className=''>
                           <textarea name="" id="" cols="50" rows="5" className='text-area'
                           {...register("suggestion",{required:"please enter subject"})} placeholder='Enter Your Blog Suggestion'></textarea>
                           {errors.suggestion && <p className='err-mes'>{errors.suggestion.message}</p>}
                            <button className='btn btn-danger btn-click p-2'>Send</button>
                            </form>
                        </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default AnySuggestion;