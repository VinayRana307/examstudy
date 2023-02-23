const initialState = '';

export const Theme_Color = (state = initialState, action) =>{

    switch(action.type){
        case "THEME_COLOR" : return state({"color":"red"}); 
    }
}