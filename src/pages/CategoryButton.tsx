import React, { useState } from 'react';
import games from '@/styles/games';
import Card from './Card';

//teste

type Item = {
    id: number;
    name: string;
    category: string;
};

const categories: string[] = [];
games.forEach((item) => {
    if (!categories.includes(item.category)) {
        categories.push(item.category);
    }
});

function ItemListByCategory() {
    const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
    const [showAll, setShowAll] = useState<boolean>(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div>
            <div>
                <button className='btn btn-category'
                    onClick={toggleShowAll}
                >
                    Todos
                </button>
                {categories.map((category) => (
                    <button className='btn btn-category'
                        key={category}
                        onClick={() => {
                            setSelectedCategory(category);
                            setShowAll(false);
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="card-container">
                {showAll
                    ? games.map((item) => (
                        <Card 
                            key={item.id}
                            title={item.name}
                            img={item.img}
                        />
                    ))
                    : games
                        .filter((item) => item.category === selectedCategory)
                        .map((item) => (
                            <Card
                                key={item.id}
                                title={item.name}
                                img={item.img}
                            />
                        ))}
            </div>
        </div>
    );
}

export default ItemListByCategory;

