import React from 'react';
import Free from './Free';
import Plus from './Plus';
import Pro from './Pro'; 

const App=() =>{
    return(
      <section class="pricing py-5">
      <div class="container">
        <div className="row">
          
            <Free></Free>
            <Plus></Plus>
            <Pro></Pro>
            
        </div>
      </div>
      </section>
    );
};
export default App;