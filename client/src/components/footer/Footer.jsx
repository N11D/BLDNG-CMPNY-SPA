import '../../styles/footer.css'

export default function Footer(){
    return(<footer className="footer-container">
    <div className="footer-content">
      <div className="footer-section">
        <h3>Контакти</h3>
        <p>Телефон: 0899999999</p>
        <p>Email: YRT@gmail.com</p>
      </div>
      <div className="footer-section">
        <h3>Адрес</h3>
        <p>ул. Пашата 2571</p>
        <p>София, България</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2023 Строителна Компания. Всички права запазени.</p>
    </div>
  </footer>
    );
}