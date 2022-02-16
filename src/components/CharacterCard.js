import React from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import style from "./CharacterCard.module.css"


function CharacterCard(props){
        const {character}=props;
    return(
        <Card className={"my-4 "+ style.cardHeight} key={"character" + character.id}>
            <CardImg top className={style.cardImage} src={character.image} alt="Card image cap" />
            <CardBody className="text-center">
                <CardTitle>{character.name}</CardTitle>
                <Button tag={Link} to={""+ character.id}>Go to the page</Button>
            </CardBody>
        </Card>
    )
}
export default CharacterCard;