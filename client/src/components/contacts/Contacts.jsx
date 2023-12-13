export default function Contacts(){
    return(
        <>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-"/>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            font-family: Arial, sans-serif;\n            margin: 0;\n            padding: 0;\n            background-color: #f4f4f4;\n        }\n\n        header {\n            background-color: #333;\n            color: #fff;\n            padding: 10px;\n            text-align: center;\n        }\n\n        section {\n            margin: 20px;\n        }\n\n        h2 {\n            text-align: center;\n            color: #333;\n        }\n\n        .contact-info {\n            display: flex;\n            justify-content: space-around;\n            max-width: 600px;\n            margin: 0 auto;\n        }\n\n        .contact-info div {\n            text-align: center;\n        }\n\n        .contact-info i {\n            font-size: 24px;\n            margin-bottom: 10px;\n        }\n\n        .contact-info p {\n            margin: 0;\n        }\n    "
    }}
  />
  <header>
    <h1>КОНТАКТИ</h1>
  </header>
  <section>
    <h2>ИНФОРМАЦИЯ</h2>
    <div className="contact-info">
      <div>
        <i className="fa fa-phone" />
        <p>Телефон: 0899999999</p>
      </div>
      <div>
        <i className="fa fa-envelope" />
        <p>Email: buildstr@abv.bg</p>
      </div>
    </div>
  </section>
</>
    );
}