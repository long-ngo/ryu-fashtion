import { Form, Button, Col } from 'react-bootstrap';

export default ({ submit, data = {} }) => {
    return (
        <Form onSubmit={submit}>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Tên sản phẩm</Form.Label>
                    <Form.Control
                        name="name"
                        type="text"
                        defaultValue={data.name ? data.name : ''}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPrice">
                    <Form.Label>Giá</Form.Label>
                    <Form.Control
                        name="price"
                        type="text"
                        defaultValue={data.price ? data.price : ''}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridDiscount">
                <Form.Label>Giảm giá</Form.Label>
                <Form.Control
                    name="discount"
                    defaultValue={data.discount ? data.discount : ''}
                />
            </Form.Group>

            <Form.Group controlId="formGridStock">
                <Form.Label>Kho</Form.Label>
                <Form.Control
                    name="stock"
                    defaultValue={data.stock ? data.stock : ''}
                />
            </Form.Group>

            <Form.Group controlId="formGridImage">
                <Form.Label>Hình ảnh</Form.Label>
                <Form.Control
                    name="image"
                    defaultValue={data.image ? data.image : ''}
                />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea">
                <Form.Label>Mô tả</Form.Label>
                <Form.Control
                    name="description"
                    as="textarea"
                    rows={3}
                    defaultValue={data.description ? data.description : ''}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                {data.name ? 'Cập nhập' : 'Tạo'}
            </Button>
        </Form>
    );
};
