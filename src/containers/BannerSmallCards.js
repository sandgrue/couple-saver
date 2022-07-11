import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


const BannerSmallCards = ({ boxTitle, boxSpecificImage, mainDivColor }) => {
    const [show, setShow] = useState(false);


    const handleToggleModal = () => {
        if (boxTitle === 'Marriage Records Search') {
            setShow(!show);
        } else {
        }
    }



    return (
        <>
            {/* <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" > */}
                <div class={`${mainDivColor} brdrRadius4 colordBox`} onClick={handleToggleModal}>
                    <div class="d-flex align-items-top">
                        <img src={require(`../assets/img/${boxSpecificImage}.svg`).default} />
                        <div class="ms-auto">
                            <span class="nextStepCircle brdrRadius50">
                                <img variant="primary" src={require('../assets/img/rightArrw.svg').default} alt="rightArrw" />
                            </span>
                        </div>
                    </div>
                    <div class="boxTitle">
                        <h2 class="fontWeight700 fontSize23 whiteColor mb-0">{boxTitle}</h2>
                    </div>
                </div>
            {/* </div> */}

            <Modal show={show} onHide={handleToggleModal} className="usMarr_Modal" centered>
                <Modal.Body>
                    <div>
                        <div className="modal_title">
                            <div className='d-flex align-items-center titleSec'>
                                <span className='imgBox'>
                                    <img src={require('../assets/img/marriageRecord.svg').default} />
                                </span>
                                <h3 className='fontSize22 fontWeight700 fontFamily2 mb-0'>Marriage Records Search</h3>
                            </div>
                            <p className='fontSize14 fontWeight400 primaryColor'>You are going to search for marriage records, fill the form below to continue</p>
                            <div className='modalField'>
                                <Form>
                                    <Form.Group className="formGroup" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="email" placeholder="First Name" />
                                        <span className='imgBoxField'>
                                            <img src={require('../assets/img/fi_user.svg').default} />
                                        </span>
                                    </Form.Group>
                                    <Form.Group className="formGroup" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="email" placeholder="Last Name" />
                                        <span className='imgBoxField'>
                                            <img src={require('../assets/img/fi_user.svg').default} />
                                        </span>
                                    </Form.Group>
                                    <Form.Group className='formGroup'>
                                        <Form.Select aria-label="Default select example">
                                            <option>Choose state</option>
                                            <option value="1">Afghanistan</option>
                                            <option value="2">America</option>
                                            <option value="3">Algeria</option>
                                        </Form.Select>
                                        <span className='imgBoxField'>
                                            <img src={require('../assets/img/greyPin.svg').default} />
                                        </span>
                                    </Form.Group>
                                </Form>
                            </div>
                        </div>

                        <span className='crossBox' onClick={handleToggleModal}>
                            <img src={require('../assets/img/crossSign.svg').default} />
                        </span>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="modalOrngeBtn brdrRadius4 fontSize16 fontWeight700 transition" variant="primary" onClick={handleToggleModal}>
                        Find
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default BannerSmallCards;