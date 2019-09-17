import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import './CardImage.styles.scss';

const CardImage = (props) => {
    const {image , tag} = props;
    return (
        <CardMedia
            component="img"
            alt={tag}
            height="140"
            image={image}
            title="salam"
        />
    );
}

export default CardImage;