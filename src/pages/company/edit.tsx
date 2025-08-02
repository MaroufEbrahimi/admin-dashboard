import { Col, Row } from "antd";
import { Edit } from "@refinedev/antd";

const EditPage = () => {
  return (
    <div>
      <Row gutter={[32, 32]}>
        <Col xs={24} xl={12}>
          <Edit />
        </Col>
      </Row>
    </div>
  );
};

export default EditPage;
