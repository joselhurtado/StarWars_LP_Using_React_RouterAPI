import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Vehicles_0 from "/src/img/vehicles/Vehicles_0.jpeg";
import { Link } from "react-router-dom";


export default function VehicleCard() {
    const {store, actions} = useContext(Context); //Const to call store data from Flux (Actions is not used yet)
    const [vehicles, setVehicles] = useState([]); //UseState run the function from Vehicles (API)

    useEffect(() => {
        setVehicles(store.vehicleData)
    }, [store.vehicleData] // In Here we call out again to keep stored the data on re-load the page
    )

    return (
        <div className="d-flex overflow-auto">{vehicles.length > 0 && vehicles.map((x,i) =>
            <div key={i} className="card m-2 cardShape" style={{minWidth: "18rem"}}>
                <img src={Vehicles_0} className="card-img-top shapeImageTop" alt="card Image" />
                    <div className="card-body text-light">
                        <h4 className="card-title">{x.name}</h4>
                        <p className="card-text">Model: {x.model}</p>  
                        <p className="card-text">Passengers: {x.passengers}</p>  
                        <p className="card-text">Class: {x.vehicle_class}</p>
                        <br />                  
                        <div className="d-flex justify-content-between">
                        <Link to={`/vehicle/${x.id}`} className="btn btn-warning">
                        Read More
                        </Link>
                        <a href="#" className="btn btn-outline-warning fa fa-heart" />
                        </div>
                    </div>
            </div>

        ) }</div>
    );
}
