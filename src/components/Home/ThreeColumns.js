import React from "react";

const ThreeColumns =()=>{

    return (
        <>
            <section className="stats container">
                {/* <div className="statistics__container"> */}
                    <div className="stats__single">
                        <div className="stats__number">10</div>
                        <h3 className="stats__title">oddanych worków</h3>
                        <p className="stats__description">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                    <div className="stats__single">
                        <div className="stats__number">5</div>
                        <h3 className="stats__title">wspartych organizacji</h3>
                        <p className="stats__description">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                    <div className="stats__single">
                        <div className="stats__number">7</div>
                        <h3 className="stats__title">zorganizowanych zbiórek</h3>
                        <p className="stats__description">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                {/* </div> */}
            </section>
        </>
    )

}

export default ThreeColumns;