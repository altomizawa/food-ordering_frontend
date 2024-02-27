import backgroundImage from '../../images/OurTradition.png'

import Footer from '../Footer/Footer'

export default function OurTradition(){
    return (
        <>
            <section className="ourTradition">
                <img src={backgroundImage} className='ourTradition__background' />
                <div className="ourTradition__container">
                    <h2>TRADITION COMES FIRST</h2>
                    <hr></hr>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec lobortis augue, nec suscipit felis. Ut tincidunt dignissim orci, eget placerat enim dignissim id. Proin condimentum lacinia velit et scelerisque. Sed quis libero at ipsum suscipit lobortis non eget metus. Mauris a tortor eget est laoreet iaculis id et ex. Quisque id elit a mi eleifend luctus sed molestie risus. Aliquam eget placerat justo. Sed ac ex ultrices, ullamcorper nisi id, lacinia massa. Etiam varius elit eget urna sagittis, et sagittis mi scelerisque. Curabitur quis velit leo. Fusce quis laoreet diam. Aenean sollicitudin turpis in dapibus pretium. Ut velit arcu.</p>
                </div>
                <Footer />
            </section>
        </>
    )
}