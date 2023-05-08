import { useState } from "react";

export enum Category {
    all = 'All',
    vegeterian = 'Vegeterian',
    asian = 'Asian',
    chicken = 'Chicken'
}

export interface CardProps {
    id?: number;
    title: string;
    image: string;
    description: string;
    price: number;
    rating: number;
    category: Category;
}

interface Props extends CardProps {
    children: React.ReactNode;
    onCategoryChange: Function;
}

function Card({
    title,
    image,
    description,
    price,
    rating,
    category,
    children,
    onCategoryChange,
}: Props) {
    const [total, setTotal] = useState(price * 1.17);

    return (
        <div className="card m-3">
            <img src={image} className="card-img-top" alt="" />

            <div
                onClick={() => onCategoryChange(category)}
                className="badge text-bg-info"
            >
                {category}
            </div>

            <div className="card-body p-3">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {description}
                </p>
                <p className="card-text">${total}</p>
                <p className="card-text">
                    rating: {rating}
                    <i className="bi bi-star"></i>
                </p>

                {children}

                <a href="#" className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>
    );
}

export default Card;
