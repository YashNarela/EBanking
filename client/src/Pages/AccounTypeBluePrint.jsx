import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AccounTypeCard from './AccounTypeCard';
import { useNavigate } from "react-router"


const AccounTypeBluePrint = () => {

    const navigate = useNavigate()


    function Navi() {

        navigate(`/register`)
    }


    return (
        <>

            <div className='accountTypeCardDiv'>

                <div className='accountTypeCardDivInternalBody ' >


                    <div
                        className="modal show"
                        style={{ display: 'block', position: 'initial' }}
                    >


                        <h1 id='hknw'   >I Want To</h1>


                        <div className='ModalBody' >

                            <div>

                                <AccounTypeCard navi={Navi} acctp={"personal"} />
                            </div>

                            <div>
                                <AccounTypeCard navi={Navi} acctp={"bussiness"} />
                            </div>

                        </div>



                    </div>


                </div>



            </div>

        </>
    )
}

export default AccounTypeBluePrint
