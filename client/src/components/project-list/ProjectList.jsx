import { useEffect, useState } from 'react';

import * as projectosService from '../../services/projectosService';
import ProjectListItem from './project-list-item/ProjectListItem';

export default function ProjectList() {
    const [projectoss, setProjects] = useState([]);

    useEffect(() => {
        projectosService.getAll()
            .then(result => setProjects(result))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <section id="catalog-page">
            <h1>Проекти</h1>

            {projectoss.map(projectos => (
                <ProjectListItem key={projectos._id} {...projectos} />
            ))}

            {projectoss.length === 0 && (
                <h3 className="no-articles">Няма налични проекти!</h3>
            )}
        </section>
    );
}