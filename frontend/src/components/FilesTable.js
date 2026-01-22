import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  Spinner,
  Alert,
  Container,
  Form,
  Row,
  Col,
  Button,
  Navbar,
} from "react-bootstrap";
import {
  fetchFilesList,
  fetchFileByName,
  clearFilter,
} from "../store/slices/filesSlice";

const FilesTable = () => {
  const dispatch = useDispatch();
  const { data, loading, error, selectedFile } = useSelector(
    (state) => state.files,
  );
  const [searchInput, setSearchInput] = useState("");

  // Cargar lista al inicio con /files/list
  useEffect(() => {
    dispatch(fetchFilesList());
  }, [dispatch]);

  // Buscar por fileName cuando el usuario escribe y presiona Enter o botón
  const handleSearch = () => {
    if (searchInput.trim()) {
      dispatch(fetchFileByName(searchInput.trim()));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Limpiar filtro y recargar todo
  const handleClear = () => {
    setSearchInput("");
    dispatch(clearFilter());
    dispatch(fetchFilesList());
  };

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p>Cargando datos...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">Error: {error}</Alert>
      </Container>
    );
  }

  return (
    <div>
      <Navbar data-bs-theme="dark" style={{ backgroundColor: "#f34910" }}>
        <Container fluid>
          <Navbar.Brand className="text-white">React Test App</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="mt-4 " fluid>
        <Row className="mb-4">
          <Col md={4}>
            <Form.Control
              type="text"
              placeholder="Nombre del archivo (ej: test2.csv)"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </Col>
          <Col md={4}>
            <Button variant="primary" onClick={handleSearch} className="me-2">
              Buscar
            </Button>
            <Button variant="secondary" onClick={handleClear}>
              Limpiar
            </Button>
          </Col>
        </Row>
        {selectedFile && (
          <Alert variant="info">
            Mostrando resultados para: <strong>{selectedFile}</strong>
          </Alert>
        )}

        {/* Tabla de datos */}
        <Table striped bordered hover responsive>
          <thead>
            <tr className="">
              <th>Archivo</th>
              <th>Texto</th>
              <th>Número</th>
              <th>Hex</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {data.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center">
                  No hay datos disponibles
                </td>
              </tr>
            ) : (
              data.map((file, fileIndex) =>
                file.lines?.map((line, lineIndex) => (
                  <tr key={`${fileIndex}-${lineIndex}`}>
                    <td>{file.file}</td>
                    <td>{line.text}</td>
                    <td>{line.number}</td>
                    <td>{line.hex}</td>
                  </tr>
                )),
              )
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default FilesTable;
