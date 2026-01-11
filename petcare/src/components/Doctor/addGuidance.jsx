import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

function DoctorGuidanceForm() {
  const [form, setForm] = useState({
    doctorName: "",
    guidance: "",
    video: ""
  });
console.log(form);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setForm({ ...form, video: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <Card className="p-4 shadow" style={{ maxWidth: "500px", margin: "auto" }}>
      <h4 className="mb-3 text-center">Doctor Guidance</h4>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Guide title</Form.Label>
          <Form.Control
            type="text"
            name="doctorName"
   
            onChange={handleChange}
            placeholder="Enter doctor name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Guidance description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="guidance"
            onChange={handleChange}
            placeholder="Enter guidance"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Video Link</Form.Label>
        <Form.Control
            type="text"
            name="video"
                        onChange={handleChange}
            placeholder="Paste video link"
            required
          />
        
        </Form.Group>

        <Button type="submit" className="w-100" variant="primary">
          Submit
        </Button>
      </Form>
    </Card>
  );
}

export default DoctorGuidanceForm;
