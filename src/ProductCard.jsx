import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import "./ProductCard.css";

const ProductCard = ({ nombre, precio, imagenUrl }) => {
  const [open, setOpen] = useState(false); // Estado para abrir o cerrar el diálogo

  // Función para manejar el clic en "Añadir al carrito"
  const handleAddToCart = () => {
    setOpen(true); // Abre el diálogo cuando el producto se añade al carrito

    // Cierra el diálogo automáticamente después de 3 segundos
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  return (
    <div className="product-card">
      <div className="product-header">
        <h3 className="product-name">{nombre}</h3>
        <span className="product-price">{precio}</span>
      </div>

      <div className="product-image-container">
        <img src={imagenUrl} alt={nombre} className="product-image" />
      </div>

      <Button
        className="add-to-cart-btn"
        variant="contained"
        onClick={handleAddToCart}
        sx={{
          fontFamily: "Cardo, serif",
          backgroundColor: "#D1C7BF",
          color: "#000000",
          padding: "10px 20px",
          fontSize: "16px",
          width: "176px",
          height: "42px",
          borderRadius: "34px",
          textTransform: "capitalize",
        }}
      >
        Añadir al carrito
      </Button>

      {/* Diálogo de Producto Añadido */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-paper": {
            width: "957px",
            height: "350px",
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontSize: "36px",
            borderRadius: "8px",
            textAlign: "center",
            fontfamily: "Cardo",
            fontweight: 400,
            boxShadow: "0px 10px 40px #E7CF9E",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <DialogContent
          id="alert-dialog-description"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100%",
          }}
        >
          ¡Producto añadido al carrito!
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="white">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductCard;
