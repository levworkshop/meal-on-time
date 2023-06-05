import { useState } from "react";

function AddDishPage() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(1);
    const [image, setImage] = useState('');
    const [categoryId, setCategoryId] = useState(0);

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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
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
                    <input
                        type="text"
                        className="form-control me-3"
                        value={categoryId}
                        onChange={(e) => setCategoryId(+e.target.value)}
                    />
                </div>
            </div>

            <button className="btn btn-primary">Submit</button>

        </div >
    );
}

export default AddDishPage;