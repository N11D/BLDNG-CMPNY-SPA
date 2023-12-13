import { Link } from "react-router-dom";
import AuthContext from "../../../contexts/authContext";

export default function ProjectListItem({
    _id,
    title,
    street,
    imageUrl,
}) {
    
    return (
            <div className="allProjects">
            <div className="allProjects-info">
                <img src={imageUrl} />
                <h6>{street}</h6>
                <h2>{title}</h2>
                <Link to={`/projects/${_id}`} className="details-button">Детайли</Link>
            </div>
        </div>
    );
}