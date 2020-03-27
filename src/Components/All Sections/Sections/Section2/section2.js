import React from 'react'
import './section2.scss';
import Truck from '../../../Assects/All Car Images/Truck_images/an-arocs-tipper-2643-enriches-the-fleet-of-le-maitre-svtp-940-04.jpg'
import JEEP from '../../../Assects/All Car Images/Jeep_images/Gallery-Exterior-White-Colorado-Sunset-Desktop.jpg.image.1440.jpg'
export default function section2() {
    return (
        <div>
            <div className="bg_clr">
                <div className="container">
                <h2>About Us</h2>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                </p>
                </div>
                <div className="columns">
                <div className="column">
                    <section className="section">
                    <h1 className="is-size-1" style={{color:"#ff9500",    fontWeight:" 700",fontFamily: "sans-serif"}}>
                    Volvo Announces All-New XC90 Prices
                    </h1>
                    <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                    <button className="button btn-get">
                        Get It Now
                    </button>
                    </section>
                </div>
                <div className="column">
                <img src={JEEP}/>
                </div>
                </div>
                <section className="section">
                <div className="columns">
                    <div className="column">
                    <img src={Truck}/>
                    </div>
                    <div className="column">
                    <h1 className="is-size-2" style={{color:"#ff9500",fontWeight:" 800",fontFamily: "sans-serif"}}>
                    Volvo Announced All-New CX990 Prices In Pakistan.
                    </h1>
                    <p>
                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </p>
                    <button className="button prachase">
                    Parchase Now 
                    </button>
                    </div>
                </div>
                </section>
            </div>
        </div>
    )
}
