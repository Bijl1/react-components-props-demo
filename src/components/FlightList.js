function FlightList(props) {
    return (
        <div className="FlightList">
            <h2>Flights</h2>

            {props.children}

            <br />
            <hr />
            <small>
                <small>
                    <b>Disclaimer:</b> Prices are final prices and include all taxes and fees, including payment fees for the cheapest common payment method (which may differ depending on the provider). Additional charges may apply for other types of payment, luggage, meals, WLAN, or other additional services. Prices, availability, and travel details are provided based on the lastest information received from our partners. This information is reflecged in the results within less than 24 hours. Additional conditions may also, be applied by our partners. You should then check prices and conditions with the services providers before booking.
                </small>
            </small>
        </div>
    );
}

export default FlightList;