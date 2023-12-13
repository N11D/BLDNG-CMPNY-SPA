import { useNavigate } from 'react-router-dom';

import * as projectosService from '../../services/projectosService';

export default function ProjectCreate() {
    const navigate = useNavigate();
    
    const createProjectSubmitHandler = async (e) => {
        e.preventDefault();

        const projectosData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await projectosService.create(projectosData);

            navigate('/projects');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createProjectSubmitHandler}>
                <div className="container">
                    <h1>Създай проект:</h1>
                    <label htmlFor="neighbourhood">Квартал:</label>
                    <input type="text" id="title" name="title" placeholder="" />

                    <label htmlFor="street">Улица:</label>
                    <input type="text" id="street" name="street" placeholder="" />

                    <label htmlFor="rzp">Разгърната Застроена Площ:</label>
                    <input type="number" id="rzp" name="rzp" min="800" placeholder="" />

                    <label htmlFor="projectos-img">Снимка:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="" />

                    <label htmlFor="dopulnitelno">Допълнителна информация:</label>
                    <textarea name="dopulnitelno" id="dopulnitelno"></textarea>
                    <input className="btn submit" type="submit" value="Създай Проект" />
                </div>
            </form>
        </section>
    );
}