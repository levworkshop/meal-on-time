import Title from "../../components/Title";
import Card, { CardProps, Category } from "../../components/Card";
import React, { useEffect, useState } from "react";
import './HomePage.css';
import { useFetchGet } from "../../hooks/useFetchGet";

// const data: Array<CardProps> = [];

const data: Array<CardProps> = [
    {
        id: 1,
        title: "Greek Salad",
        price: 30.5,
        description: "Great Salad",
        image: "https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220__340.jpg",
        rating: 4,
        category: Category.vegeterian
    },
    {
        id: 2,
        title: "Pad Thai",
        price: 42,
        description: "Yumi yumi",
        image: "https://cdn.pixabay.com/photo/2014/11/25/14/55/noodles-545259__340.jpg ",
        rating: 5,
        category: Category.asian
    },
    {
        id: 3,
        title: "Fried Chicken",
        price: 98.60,
        description: "I like it",
        image: "https://cdn.pixabay.com/photo/2014/01/24/04/05/fried-chicken-250863__340.jpg",
        rating: 3,
        category: Category.chicken
    }
];

function HomePage() {
    const categories: Array<Category> = Object.values(Category);
    const [selectedCategory, setSelectedCategory] = useState(Category.all);
    const [search, setSearch] = useState('');
    const [cards, setCards] = useState([...data]);
    const [displayMode, setDisplayMode] = useState('grid');
    const dishes = useFetchGet<Array<CardProps>>(`${process.env.REACT_APP_SERVER_URL}dishes`);

    function handleDisplayChange(mode: string) {
        setDisplayMode(mode);
    }

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        // state doesn't update immediately
        // setSearch(e.target.value);
        // console.log(search); // this will hold the previous value before state has changed

        // use variable to immediately access the value
        const value = e.target.value;
        setSearch(value);
        console.log(value);

        const normalizedValue = value.trim().toLowerCase();
        const filtered: Array<CardProps> = data.filter(
            card => card.title.toLowerCase().includes(normalizedValue)
        );

        setCards(filtered);
    }

    function handleCategoryChange(value: Category) {
        setSelectedCategory(value);

        if (value === Category.all) {
            setCards([...data]);
            return;
        }

        const filtered: Array<CardProps> = data.filter(
            card => card.category === value
        );

        setCards(filtered);
    }

    return (
        <>
            <Title
                text="Order Delivery and Takaway"
            />

            <div className="d-flex">
                <div className="px-5">
                    <button
                        onClick={() => handleDisplayChange('grid')}
                        className="btn btn-light mx-1"
                    >
                        <i className="bi bi-grid-3x3-gap-fill"></i>
                    </button>
                    <button
                        onClick={() => handleDisplayChange('list')}
                        className="btn btn-light mx-1"
                    >
                        <i className="bi bi-list-ul"></i>
                    </button>
                </div>

                <div className="d-flex align-items-center">
                    <label className="me-3">Category:</label>

                    <select
                        value={selectedCategory}
                        onChange={(e) => handleCategoryChange(e.target.value as Category)}
                        className="form-select"
                    >
                        {categories.map(category =>
                            <option key={category} value={category}>
                                {category}
                            </option>
                        )}
                    </select>
                </div>

                <div>
                    <input
                        className="form-control mx-3"
                        placeholder="Search"
                        value={search}
                        onChange={handleSearch}
                    />
                </div>
            </div>


            <div className={displayMode}>
                {
                    !dishes || dishes.length === 0 && <div>No dishes</div>
                }
                {dishes &&
                    dishes.map(cardItem =>
                        <Card
                            key={cardItem.id}
                            {...cardItem}
                            onCategoryChange={handleCategoryChange}
                        >
                            {cardItem.rating === 5 &&
                                <p className="card-text bg-warning p-2">
                                    <i className="bi bi-award me-2"></i>
                                    Top Dish
                                </p>
                            }
                            {cardItem.rating === 4 &&
                                <p className="card-text bg-info p-2">
                                    Popular
                                </p>
                            }
                        </Card>
                    )
                }
            </div>
        </>
    );
}

export default HomePage;