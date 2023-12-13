import '../../styles/home.css'
import withAuth from "../../HOC/withAuth";

function Home(){

    return (
        <div className="home-container">
          <h2>Добре дошли в нашата строителна компания</h2>
          <p>
            Ние сме тук, за да ви предоставим висококачествени строителни услуги. Нашите експерти са готови да реализират вашия проект.
          </p>
          <p>
            Свържете се с нас, за да започнем работа по вашата идея.
          </p>
        </div>
      );
}

const EnhancedHome = withAuth(Home);

export default EnhancedHome;