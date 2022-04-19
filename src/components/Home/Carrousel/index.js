import React from 'react'
import Client from "../../../clients.json"
const Carrousel = () => {

    const itemOne = Client.slice(0, 4)
    const itemTwo = Client.slice(5, 9)
    const itemThree = Client.slice(10, 14)
    const itemFour = Client.slice(15, 19)

    console.log(itemFour)

    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner bg-white">
                    <div class="carousel-item active" data-bs-interval="2000">
                        <div class="row py-2 text-center">
                            {itemOne.map((data, index) =>
                                <div key={index} class="col-3 col-lg-3 my-2">
                                    <img src={data.url} className="img-client" alt="..." />
                                </div>
                            )}
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <div class="row py-2 text-center">
                            {itemTwo.map((data, index) =>
                                <div key={index} class="col-3 col-lg-3 my-2">
                                    <img src={data.url} className="img-client" alt="..." />
                                </div>
                            )}
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <div class="row py-2 text-center">
                            {itemThree.map((data, index) =>
                                <div key={index} class="col-3 col-lg-3 my-2">
                                    <img src={data.url} className="img-client" alt="..." />
                                </div>
                            )}
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <div class="row py-2 text-center">
                            {itemFour.map((data, index) =>
                                <div key={index} class="col-3 col-lg-3 my-2">
                                    <img src={data.url} className="img-client" alt="..." />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrousel;