import { useState } from "react";
import Card from "../../components/Card";
import Title from "../../components/Title";
import './Home.css';

function Home() {
    const data = [
        {
            id: 1,
            name: "Greek Salad",
            price: 30.5,
            description: "Great salad...",
            image: "https://cdn.pixabay.com/photo/2016/08/09/10/30/,tomatoes-1580273__340.jpg",
            category: "Vegeterian",
            rating: 4
        },
        {
            id: 2,
            name: "Pad Thai",
            price: 42,
            description: "Yumi yumi",
            image: "https://cdn.pixabay.com/photo/2017/02/25/15/23/pad-thai-2098017__340.jpg",
            category: "Asian",
            rating: 5
        },
        {
            id: 3,
            name: "Fried Chicken",
            price: 98.60,
            description: "I like it",
            image: "https://cdn.pixabay.com/photo/2016/07/31/17/51/chicken-1559548__340.jpg",
            category: "Chicken",
            rating: 3
        }
    ];

    const [display, setDisplay] = useState('grid');

    // function handleDisplayClick(displayType: string) {
    //     setDisplay(displayType);
    // }

    return (
        <>
            <Title content="Order Delivery Or Takeaway" />

            <div>
                <button
                    onClick={() => setDisplay('grid')}
                    className="btn btn-light mx-1"
                >
                    <i className="bi-grid-3x3-gap-fill"></i>
                </button>

                <button
                    onClick={() => setDisplay('list')}
                    className="btn btn-light"
                >
                    <i className="bi-list-ul"></i>
                </button>
            </div>

            <div className={`${display} p-5`}>
                {
                    data.map(card =>
                        <Card
                            key={card.id}
                            {...card}
                        />
                    )
                }
            </div>
        </>
    );
}

export default Home;