import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FaUser } from "react-icons/fa";

const AccounTypeCard = ({ acctp, navi }) => {
    return (
        <>


            <Card className='ActTypCard' style={{ width: '18rem' }} onClick={navi} >
                <Card.Body>


                    <Card.Text>

                        <h3>
                            Register my individual account <FaUser />
                        </h3>

                        {
                            <h5>Select this if you have a {acctp} account</h5>

                        }
                    </Card.Text>

                </Card.Body>
            </Card>


        </>
    )
}

export default AccounTypeCard
