import Form from 'react-bootstrap/Form';

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
                <option>Completo</option>
                <option>Polimento</option>
                <option>Higienização</option>
            </Form.Select>
        </Form.Group>
      </Form>
    </>
  );
}
