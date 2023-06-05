import { useEffect, useState } from "react";
import { useInputText } from "../hooks/useInputText";

export interface ICategory {
    id: number;
    name: string;
}

function AddDishPage() {
    // const [name, setName] = useState('');
    const nameProps = useInputText('');
    // const [description, setDescription] = useState('');
    const descriptionProps = useInputText('');
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(1);
    // const [image, setImage] = useState('');
    const imageProps = useInputText('');
    const [categories, setCategories] = useState<Array<ICategory>>([]);
    const [categoryId, setCategoryId] = useState(0);

    const getCategories = async (): Promise<Array<ICategory>> => {
        const res = await fetch('http://localhost:3000/categories');
        return res.json();
    }

    useEffect(() => {
        getCategories()
            .then(res => {
                setCategories(res)
            })
    }, [])

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
                        {
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

            <button className="btn btn-primary">Submit</button>

        </div >
    );
}

export default AddDishPage;