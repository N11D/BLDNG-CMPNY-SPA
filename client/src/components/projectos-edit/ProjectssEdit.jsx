import { useNavigate, useParams } from 'react-router-dom';

import * as projectosService from '../../services/projectosService';
import { useEffect, useState } from 'react';

export default function ProjectssEdit() {
    const navigate = useNavigate();
    const { projectId } = useParams();
    const [projectos, setProject] = useState({
        title: '',
        street: '',
        rzp: '',
        imageUrl: '',
        dopulnitelno: '',
    });

    useEffect(() => {
        projectosService.getOne(projectId)
            .then(result => {
                setProject(result);
            });
    }, [projectId]);

    const editProjectssSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await projectosService.edit(projectId, values);

            navigate('/projects');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    const onChange = (e) => {
        setProject(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={editProjectssSubmitHandler}>
                <div className="container">
                    <h1>Промени проект</h1>
                    <label htmlFor="neighbourhood">Квартал:</label>
                    <input type="text" id="title" name="title" value={projectos.title} onChange={onChange} placeholder="Enter projectos title..." />

                    <label htmlFor="street">Улица:</label>
                    <input type="text" id="street" name="street" value={projectos.street} onChange={onChange} placeholder="Enter projectos street..." />

                    <label htmlFor="rzp">Разгърната Застроена Площ:</label>
                    <input type="number" id="rzp" name="rzp" value={projectos.rzp} onChange={onChange} min="1" placeholder="1" />

                    <label htmlFor="projectos-img">Снимка:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={projectos.imageUrl} onChange={onChange} placeholder="Upload a photo..." />

                    <label htmlFor="dopulnitelno">Допълнителна информация:</label>
                    <textarea name="dopulnitelno" value={projectos.dopulnitelno} onChange={onChange} id="dopulnitelno"></textarea>
                    <input className="btn submit" type="submit" value="Промени проект" />
                </div>
            </form>
        </section>
    )
    }