import React from 'react';
import { Form, Button } from 'react-bootstrap';

const CheckAvailabilityForm = () => {
    return (
        <>
            <div class="checkAvail">
                <h4 class="fontSize22 fontWeight700 primaryColor fontFamily2">Check Availability</h4>
                <p class="fontSize14 fontWeight400">You are going to check Norwalk Los Angeles County availability, fill the form below to continue</p>
                <Form>
                    <Form.Group className="mb-3 formInput" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="First Name" />
                        <img class="" src={require('../assets/img/fi_user.svg').default} />
                    </Form.Group>
                    <Form.Group className="mb-3 formInput" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Last Name" />
                        <img class="" src={require('../assets/img/fi_user.svg').default} />
                    </Form.Group>
                    <Form.Group className="mb-3 formInput" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email" />
                        <img class="" src={require('../assets/img/fi_mail.svg').default} />
                    </Form.Group>
                    <Form.Group className="mb-3 formInput" controlId="formBasicEmail">
                        <Form.Control type="date" placeholder="Wedding date" />
                        <img class="" src={require('../assets/img/fi_calendar.svg').default} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control value="Hi, I am interested about wedding licensing information from Norwalk Los Angeles County" as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" className="checkBtnAvail w-100">Check Availability</Button>
                </Form>
            </div>
        </>
    )
}

export default CheckAvailabilityForm