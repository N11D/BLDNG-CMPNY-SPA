import '../../styles/details.css'
import { useContext, useEffect, useReducer, useState, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as projectosService from '../../services/projectosService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";
import reducer from './commentReducer';
import useForm from '../../hooks/useForm';
import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../paths";

export default function ProjectDetails() {
    const navigate = useNavigate();
    const { email, userId } = useContext(AuthContext);
    const [projectos, setProject] = useState({});
    const [comments, dispatch] = useReducer(reducer, []);
    const { projectId } = useParams();

    useEffect(() => {
        projectosService.getOne(projectId)
            .then(setProject);

        commentService.getAll(projectId)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: result,
                });
            });
    }, [projectId]);

    const addCommentHandler = async (values) => {
        const newComment = await commentService.create(
            projectId,
            values.comment
        );

        newComment.owner = { email };

        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment
        })
    }

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${projectos.title}`);

        if (hasConfirmed) {
            await projectosService.remove(projectId);

            navigate('/projects');
        }
    }

    const { values, onChange, onSubmit } = useForm(addCommentHandler, {
        comment: '',
    });

    return (
        <section id="projectos-details">
            <h1>Детайли на проект</h1>
            <div className="info-section">
                <div className="projectos-header">
                    <img className="projectos-img" src={projectos.imageUrl} alt={projectos.title} />
                    <h1>{projectos.title}</h1>
                    <span className="rzp">Разгърната Застроена Площ: {projectos.rzp}</span>
                    <p className="type">{projectos.street}</p>
                </div>

                <p className="text">{projectos.dopulnitelno}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(({ _id, text, owner: { email } }) => (
                            <li key={_id} className="comment">
                                <p>{email}: {text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>

                {userId === projectos._ownerId && (
                    <div className="buttons">
                        <Link to={pathToUrl(Path.ProjectssEdit, { projectId })} className="button">Промени</Link>
                        <button className="button" onClick={deleteButtonClickHandler}>Изтрий</button>
                    </div>
                )}
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onSubmit}>
                    <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
        </section>);
}