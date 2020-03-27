import React from 'react'
import './section3.scss';
import Man1 from '../../../Assects/Profilo_images/user-01.jpg';
import Man2 from '../../../Assects/Profilo_images/user-02.jpg';
import Man3 from '../../../Assects/Profilo_images/user-03.jpg';
import Man4 from '../../../Assects/Profilo_images/user-04.jpg';
import Jeep1 from '../../../Assects/All Car Images/Jeep_images/Jeep-photo-1506015391300-4802dc74de2e.jpg';
import Truckes from '../../../Assects/All Car Images/Truck_images/an-arocs-tipper-2643-enriches-the-fleet-of-le-maitre-svtp-social-media.jpg'
export default function Section3() {
    return (
        <div>
            <div className="dark">
                <section className="section">
                    <div className="container">
                        <h1 className="is-size-1 has-text-centered has-text-weight-bold" style={{ color: "#ff9500" }}>
                            Get Help To Team
                </h1>
                    </div>
                    <section className="section">
                        <div className="container">
                            <div className="columns">
                                <div className="column">
                                    <img src={Man1} style={{ borderRadius: "50%" }} />
                                    <h1 className="is-size-4 has-text-warning">
                                        Help You Need
            </h1>
                                    <p>
                                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
                                </div>
                                <div className="column">
                                    <img src={Man2} style={{ borderRadius: "50%" }} />
                                    <h1 className="is-size-4 has-text-info">
                                        What Is Help You Need
            </h1>
                                    <p>
                                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
                                </div>
                                <div className="column">
                                    <img src={Man3} style={{ borderRadius: "50%" }} />
                                    <h1 className="is-size-4 has-text-success">
                                        No Body Have Your App
            </h1>
                                    <p>
                                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
                                </div>
                                <div className="column">
                                    <img src={Man4} style={{ borderRadius: "50%" }} />
                                    <h1 className="is-size-4 has-text-link">
                                        Alll Offical IS This Site
            </h1>
                                    <p>
                                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <section className="section">
                    <div className="container">
                        <h1 className="is-size-1 has-text-centered has-text-weight-bold">
                            Login In Your Account
                   </h1>
                        <div className="columns" style={{ marginTop: "40px" }}>
                            <div className="column">
                                <div class="field">
                                    <p class="control has-icons-left has-icons-right">
                                        <input class="input" type="email" placeholder="Enter Your Email" style={{ background: "none", border: "none", borderBottom: " 2px solid #eee", borderRadius: "0px", outline: "none" }} />
                                    </p>
                                </div>
                                <div class="field">
                                    <p class="control has-icons-left">
                                        <input class="input" type="password" placeholder="************************************************" style={{ background: "none", border: "none", borderBottom: " 2px solid #eee", borderRadius: "0px", outline: "none" }} />
                                    </p>
                                </div>
                                <div class="field-body">
                                    <div class="field">
                                        <div class="control">
                                            <textarea class="textarea" placeholder="Explain how we can help you" style={{ background: "none", border: "none", borderBottom: " 2px solid #eee", borderRadius: "0px", outline: "none" }}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="field">
                                    <p class="control">
                                        <button class="button login-button">
                                            Login
    </button>
                                    </p>
                                </div>
                            </div>
                            <div className="column">
                                <div class="field is-horizontal">
                                    <div class="field-label is-normal">
                                        <label class="label">From</label>
                                    </div>
                                    <div class="field-body">
                                        <div class="field">
                                            <p class="control is-expanded has-icons-left">
                                                <input class="input" type="text" placeholder="Name" style={{ background: "none", border: "none", borderBottom: " 2px solid #eee", borderRadius: "0px", outline: "none" }} />
                                            </p>
                                        </div>
                                        <div class="field">
                                            <p class="control is-expanded has-icons-left has-icons-right">
                                                <input class="input is-success" type="email" placeholder="Email" value="Example@Naame.com" style={{ background: "none", border: "none", borderBottom: " 2px solid #eee", borderRadius: "0px", outline: "none" }} />
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="field is-horizontal">
                                    <div class="field-label"></div>
                                    <div class="field-body">
                                        <div class="field is-expanded">
                                            <div class="field has-addons">
                                                <p class="control is-expanded">
                                                    <input class="input" type="tel" placeholder="Your phone number" style={{ background: "none", border: "none", borderBottom: " 2px solid #eee", borderRadius: "0px", outline: "none" }} />
                                                </p>
                                            </div>
                                            <p class="help">Do not enter the first zero</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="field is-horizontal">
                                    <div class="field-label is-normal">
                                        <label class="label">Department</label>
                                    </div>
                                    <div class="field-body">
                                        <div class="field is-narrow">
                                            <div class="control">
                                                <div class="select is-fullwidth">
                                                    <select style={{ background: "none", border: "none", borderBottom: " 2px solid #eee", borderRadius: "0px", outline: "none" }}>
                                                        <option>Business development</option>
                                                        <option>Marketing</option>
                                                        <option>Sales</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="field is-horizontal">
                                    <div class="field-label">
                                        <label class="label">Already a member?</label>
                                    </div>
                                    <div class="field-body">
                                        <div class="field is-narrow">
                                            <div class="control">
                                                <label class="radio">
                                                    <input type="radio" name="member" style={{ background: "none", border: "none", borderBottom: " 2px solid #eee", borderRadius: "0px", outline: "none" }} />
          Yes
        </label>
                                                <label class="radio">
                                                    <input type="radio" name="member" />
          No
        </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="field is-horizontal">
                                    <div class="field-label is-normal">
                                        <label class="label">Subject</label>
                                    </div>
                                    <div class="field-body">
                                        <div class="field">
                                            <div class="control">
                                                <input class="input is-danger" type="text" placeholder="e.g. Partnership opportunity" style={{ background: "none", border: "none", borderBottom: " 2px solid #eee", borderRadius: "0px", outline: "none" }} />
                                            </div>
                                            <p class="help is-danger">
                                                This field is required
      </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="field is-horizontal">
                                    <div class="field-label is-normal">
                                        <label class="label">Question</label>
                                    </div>
                                    <div class="field-body">
                                        <div class="field">
                                            <div class="control">
                                                <textarea class="textarea" placeholder="Explain how we can help you" style={{ background: "none", border: "none", borderBottom: " 2px solid #eee", borderRadius: "0px", outline: "none" }}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="field is-horizontal">
                                    <div class="field-label">
                                    </div>
                                    <div class="field-body">
                                        <div class="field">
                                            <div class="control">
                                                <button class="button login-button">
                                                    SIng Up
        </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <img src={Jeep1} />
                            </div>
                            <div className="column">
                                <h1 className="is-size-3 has-text-weight-bold has-text-link">
                                    Its All Jeep Model Have Avaible Here
</h1>
                                <p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
</p><br />
                                <p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
</p>
                                <button class="button login-button">
                                    Apply Now
        </button>
                            </div>
                         
                        </div>
                        <div className="columns">
<div className="column">
<h1 className="is-size-3 has-text-weight-bold has-text-success">
    Fully Order Complete Of Your Country
</h1>
<p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
</p><br />
                                <p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
</p>
</div>
<div className="column">
<img src={Truckes}/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
