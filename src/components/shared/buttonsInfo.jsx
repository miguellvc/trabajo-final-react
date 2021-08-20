import React from 'react'; 


export const ButtonInfo = () =>{

    return(
        <>
            <div class="container-btn">
                <input type="checkbox" id="btn-mas"/>
                <div class="btn-info">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-youtube"></a>
                    <a href=""class="fas fa-map-marker-alt"></a>
                    <a href=""class="fas fa-info-circle"></a>
                </div>
                <div class="btn-mas">
                    <label for="btn-mas" class="fa fa-plus"></label>
                </div>
            </div>
        </>
    )

}

