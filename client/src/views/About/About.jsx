import style from './About.module.css'

const About = () => {

    const URL ='https://res.cloudinary.com/empleosagil/image/upload/v1708910531/kbnqygssvim5uiqblsj0.webp' 
  return (
    <div className={style.mainContainer} >
  
 <div className="container" >
    <div className="row">
        <div className="col-md-6">
            <div className={style.textContainer} >
            <div>
               
               <h3 className={style.aboutTitle}>
                      “Somos el <span className={style.blueText} >puente</span> hacia <br /> empleos <span className={style.blueText}>flexibles</span> y servicios <br /><span className={style.blueText}>confiables</span>”
                  </h3>
          </div>
          <div>
              <p>
                  <span className={style.orangeText}>EmpleosÁgil</span> es una plataforma innovadora diseñada para conectar a profesionales independientes con oportunidades laborales flexibles y servicios a domicilio. Nuestro enfoque se centra en facilitar la búsqueda y oferta de empleo temporal, así como en la contratación de servicios especializados, como plomería, electricidad, manicura, y más. 
                  <p><br /> En su fase inicial, lanzada en Argentina, hemos logrado conectar a cientos de trabajadores con potenciales clientes, logrando gran parte de ellos finalmente concretar el trabajo. En la siguiente etapa nos proponemos expandirnos gradualmente por toda América Latina, derribando fronteras y brindando soluciones ágiles y eficientes a la hora de llegar a nuevos usuarios.</p>
              </p>
          </div>
      </div>
            </div>
            
        <div className="col-md-6">
        <div className={style.imgContainer}>
    <img src={URL} alt="quienes-somos" className={`img-fluid ${style.aboutImg}`} style={{ marginTop: "-5rem" }} />
</div>

        </div>
    </div>
 </div>
</div>
  )
}

export default About