import React from "react";
import {ButtonGroup,ButtonToolbar,Button} from "reactstrap";


function SeasonSelector(props){
    const {seasonMax, setSeason}=props;
    const range = (num)=>{
        let output = [];
        for (let i = 1; i <= num; i ++) {
            output.push(i);
        }
        return output;
    }

    return(
        <ButtonToolbar className="justify-content-center mx-auto">
            <ButtonGroup >
            {range(seasonMax).map((num) =>(
                <Button  key={num} value={num} onClick={()=>setSeason(num)}>{num}</Button>
            ))}

            </ButtonGroup>
        </ButtonToolbar>

    )
}
export default SeasonSelector;


