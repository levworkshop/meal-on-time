import { useState } from "react";
import { useInputText } from "../hooks/useInputText";
import { useFetchGet } from "../hooks/useFetchGet";
import { useNavigate } from "react-router-dom";

export interface ICategory {
    id: number;
    name: string;
}

function AddDishPage() {
    const navigate = useNavigate();
    const nameProps = useInputText('');
    const descriptionProps = useInputText('');
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(1);
    const imageProps = useInputText('');
    const [categoryId, setCategoryId] = useState(0);
    const categories = useFetchGet<Array<ICategory>>('http://localhost:3000/categories');

    function handleSubmit() {
        // data validation

        fetch('http://localhost:3000/dishes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameProps.value,
                description: descriptionProps.value,
                price,
                rating,
                image: imageProps.value,
                categoryId
            })
        })
            .then(() => navigate('/'))

    }

    return (
        <div className="m-4">
            <div className="col-sm-12 col-md-6">
                <div className="mb-3">
                    <label
                        className="form-label"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control me-3"
                        {...nameProps}
                    />
                </div>
            </div>
            <div className="col-sm-12 col-md-6">
                <div className="mb-3">
                    <label
                        className="form-label"
                    >
                        Description
                    </label>
                    <input
                        type="text"
                        className="form-control me-3"
                        {...descriptionProps}
                    />
                </div>
            </div>
            <div className="col-sm-12 col-md-6">
                <div className="mb-3">
                    <label
                        className="form-label"
                    >
                        Price
                    </label>
                    <input
                        type="number"
                        className="form-control me-3"
                        value={price}
                        onChange={(e) => setPrice(+e.target.value)}
                    />
                </div>
            </div>
            <div className="col-sm-12 col-md-6">
                <div className="mb-3">
                    <label
                        className="form-label"
                    >
                        Rating
                    </label>
                    <input
                        type="number"
                        className="form-control me-3"
                        value={rating}
                        onChange={(e) => setRating(+e.target.value)}
                    />
                </div>
            </div>
            <div className="col-sm-12 col-md-6">
                <div className="mb-3">
                    <label
                        className="form-label"
                    >
                        Image
                    </label>
                    <input
                        type="text"
                        className="form-control me-3"
                        {...imageProps}
                    />
                </div>
            </div>
            <div className="col-sm-12 col-md-6">
                <div className="mb-3">
                    <label
                        className="form-label"
                    >
                        Category
                    </label>
                    <select
                        value={categoryId}
                        onChange={(e) => setCategoryId(+e.target.value)}
                    >
                        {categories &&
                            categories.map(category =>
                                <option
                                    key={category.id}
                                    value={category.id}
                                >{category.name}</option>
                            )
                        }
                    </select>
                </div>
            </div>

            <button
                className="btn btn-primary"
                onClick={handleSubmit}
            >
                Submit
            </button>

        </div >
    );
}

export default AddDishPage;