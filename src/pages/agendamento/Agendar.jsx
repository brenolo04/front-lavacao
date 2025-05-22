import Form from 'react-bootstrap/Form';
import Calendario from './Calendario';
import Horario from './Horario';
import { Stack } from 'react-bootstrap';

export default function Agendar() {
  return (
    <>
      <Form className='p-4'>
        <Form.Group className="mb-3">
            <Form.Label>Serviço</Form.Label>
            <Form.Select>
                <option>Completo</option>
                <option>Polimento</option>
                <option>Higienização</option>
            </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Veículo</Form.Label>
            <Form.Select>
                <option>Hatch</option>
                <option>Caminhonete</option>
                <option>Sedan</option>
            </Form.Select>
        </Form.Group>
        <Stack direction='horizontal'>
          <Form.Group>
            <Calendario>
            </Calendario>
          </Form.Group>
          <Form.Group>
            <Horario></Horario>
          </Form.Group>
        </Stack>
      </Form>
    </>
  );
}
