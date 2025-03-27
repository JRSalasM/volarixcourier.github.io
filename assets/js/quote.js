document.querySelector(".btn-brand-1-big").addEventListener("click", function() {
    const product = document.querySelector("input[name='product']").value.trim();
    const weight = parseFloat(document.querySelector("input[name='weight']").value.trim());
    const cost = parseFloat(document.querySelector("input[name='cost']").value.trim());

    if (!product) {
        Swal.fire("Error", "Por favor, ingrese la descripción del producto.", "error");
        return;
    }
    if (isNaN(weight) || weight <= 0) {
        Swal.fire("Error", "Por favor, ingrese un peso válido en kilos.", "error");
        return;
    }
    if (isNaN(cost) || cost < 0) {
        Swal.fire("Error", "Por favor, ingrese un valor válido en dólares.", "error");
        return;
    }

    let pricePerKilo;
    if (weight <= 10) {
        pricePerKilo = 14;
    } else if (weight <= 20) {
        pricePerKilo = 12;
    } else {
        pricePerKilo = 11;
    }

    let shippingCost = weight * pricePerKilo;
    let tax = 0;

    if (cost > 200) {
        tax = cost * 0.26;
        shippingCost += tax;
    }

    const message = `Producto: ${product}\nPeso: ${weight} kg\nValor declarado: $${cost.toFixed(2)}\n` +
                    (tax > 0 ? `Impuestos (26%): $${tax.toFixed(2)}\n` : "") +
                    `Costo total de envío: $${shippingCost.toFixed(2)}`;

    Swal.fire({
        title: "Cotización de Envío",
        html: `<p><strong>Producto:</strong> ${product}</p>
               <p><strong>Peso:</strong> ${weight} kg</p>
               <p><strong>Valor declarado:</strong> $${cost.toFixed(2)}</p>
               ${tax > 0 ? `<p><strong>Impuestos (26%):</strong> $${tax.toFixed(2)}</p>` : ""}
               <p><strong>Costo total de envío:</strong> $${shippingCost.toFixed(2)}</p>`,
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "Contactar por WhatsApp",
        cancelButtonText: "Cerrar"
    }).then((result) => {
        if (result.isConfirmed) {
            const whatsappMessage = encodeURIComponent(message);
            window.open(`https://wa.me/51902627440?text=${whatsappMessage}`, "_blank");
        }
    });
});
