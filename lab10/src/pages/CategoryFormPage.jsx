import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderComponent from "../components/HeaderComponent";

function CategoryFormPage() {
    const categories = [
        { cod: 1, nom: "Horror" },
        { cod: 2, nom: "Comedy" },
        { cod: 3, nom: "Action" },
        { cod: 4, nom: "Drama" },
    ];

    const { idcategoria } = useParams();
    const [category, setCategory] = useState({ nom: "", cod: "" });
    const navigate = useNavigate();

    useEffect(() => {
        const categoryToEdit = categories.find(cat => cat.cod == idcategoria);
        if (categoryToEdit) {
            setCategory(categoryToEdit);
        }
    }, [idcategoria]);

    const handleInputChange = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/categorias"); 
    };

    const handleCancel = () => {
        navigate("/categorias"); 
    };

    return (
        <>
            <HeaderComponent />
            <div className="container mt-3">
                <div className="border-bottom pb-3 mb-3">
                    <h3>Editar - Categoría</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">Nombre de Categoría</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputName"
                            name="nom"
                            value={category.nom}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-primary">Guardar</button>
                        <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default CategoryFormPage;
