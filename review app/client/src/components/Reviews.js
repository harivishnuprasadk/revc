import React, { Component } from 'react'
import a1 from '../components/Avengers1.jpg';
import a2 from '../components/avengers2.jpg';
import a3 from '../components/Avengers3.jpg';
import a4 from '../components/avengers4.jpg';
import './styles/reviews.css'
import AddReview from '../components/AddReview'


export class Reviews extends Component {
    render() {
        return (
            <div>

                <div className="container">
                    <h1 class="center">Movie List</h1>
                    <br />
                    <h5>AVENGERS (2012)</h5>
                    <img src={a1} class="left" width="200" height="200" alt='some value' />
                    <p >Nick Fury is compelled to launch the Avengers Initiative when.Loki poses a threat to planet Earth.
                    His squad of superheroes put their minds together to accomplish the task.
                 </p>
                    <br />
                    <AddReview/>
                    <br />
                    <h5>AVENGERS AGE OF ULTRON(2015)</h5>
                    <img src={a2} class="left" width="200" height="200" alt='some value' />
                    <p>Tony Stark builds an artificial intelligence system named Ultron with the help of Bruce Banner. When the sentient Ultron makes plans to wipe out the human race, the Avengers set out to stop him.</p>
                    <br />
                    <AddReview/>
                    <br />
                    <h5>AVENGERS INFINITY WAR (2018)</h5>
                    <img src={a3} class="left" width="200" height="200" alt='some value' />
                    <p>
                    The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.

                    </p>
                    <br />
                    <AddReview/>
                    <br />
                    <h5>AVENGERS END GAME (2019)</h5>
                    <img src={a4} class="left" width="200" height="200" alt='some value' />
                    <p>
                    After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.

                    </p>
                    <br />
                    <AddReview/>
                </div>
            </div>
        )
    }
}
  
export default Reviews
