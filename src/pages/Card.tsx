import React from 'react';
import Link from 'next/link';
import games from '@/styles/games';

interface CardProps {
  img: string;
  title: string;
  priceStriming?: string; // Tornar as propriedades opcionais
  priceBuy?: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    
    <div className="card">
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <Link href={`/Prices?param=${props.title}&param2=${props.img}&param3=${props.priceStriming}&param4=${props.priceBuy}`} legacyBehavior>
          <a className='btn btn-primary'>COMPRAR</a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
