import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="not-found-page flex justify-center items-center">
      <div id="msgError" className="error-message font-bold flex flex-col">
        <h1 className='text-[2rem]'>Ops!</h1>
        <h3  className='text-[1.5rem]'>Página não encontrada!</h3>
        
      </div>
    </div>
  );
};

export default NotFoundPage;