document.querySelector(".btn-brand-1-big").addEventListener("click", function() {
    const product = document.querySelector("input[name='product']").value.trim();
    const weight = parseFloat(document.querySelector("input[name='weight']").value.trim());
    const cost = parseFloat(document.querySelector("input[name='cost']").value.trim());

    const service_1 = document.querySelector("#service-1").checked
    const service_2 = document.querySelector("#service-2").checked
    const service_3 = document.querySelector("#service-3").checked
    const service_4 = document.querySelector("#service-4").checked

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
    if (weight < 5) {
        pricePerKilo = 11;
    } else {
        pricePerKilo = 10;
    }

    let shippingCost = weight * pricePerKilo;
    let total = 0;
    let tax = 0;

    total += shippingCost

    if (cost > 200) {
        tax = cost * 0.26;
        total += tax;
    }

    if(service_1) total += 6;
    if(service_2) total += 3;
    if(service_3) total += 1;
    if(service_4) total += 2.5;

    const message = `Producto: ${product}
    Peso: ${weight} kg
    Valor declarado: $${cost.toFixed(2)}
    -------------------------
    Costo por ${weight} kilos: $${shippingCost.toFixed(2)}
    ${tax > 0 ? `Impuestos (26%): $${tax.toFixed(2)}` : ""}
    ${service_1 > 0 ? `Reempaquetado ($6 x caja): $${(6).toFixed(2)}` : ""}
    ${service_2 > 0 ? `Cambio consignatario ($3): $${(3).toFixed(2)}` : ""}
    ${service_3 > 0 ? `Consolidación ($1): $${(1).toFixed(1)}` : ""}
    ${service_4 > 0 ? `Embalaje provincia ($2.5): $${(2.5).toFixed(2)}` : ""}
    -------------------------
    Costo total de envío: $${total.toFixed(2)}`;

    Swal.fire({
        title: "Cotización de Envío",
        html: `<div class="text-center">
            <p><strong>Producto:</strong> ${product}</p>
            <p><strong>Peso:</strong> ${weight} kg</p>
            <p><strong>Valor declarado:</strong> $${cost.toFixed(2)}</p>
            <hr/>
            <p><strong>Costo por ${weight} kilos:</strong> $${shippingCost.toFixed(2)}</p>
            ${tax > 0 ? `<p><strong>Impuestos (26%):</strong> $${tax.toFixed(2)}</p>` : ""}
            ${service_1 > 0 ? `<p><strong>Reempaquetado ($6 x caja):</strong> $${(6).toFixed(2)}</p>` : ""}
            ${service_2 > 0 ? `<p><strong>Cambio consignatario ($3):</strong> $${(3).toFixed(2)}</p>` : ""}
            ${service_3 > 0 ? `<p><strong>Consolidación ($1):</strong> $${(1).toFixed(1)}</p>` : ""}
            ${service_4 > 0 ? `<p><strong>Embalaje provincia ($2.5):</strong> $${(2.5).toFixed(2)}</p>` : ""}
            <hr/><p><strong>Costo total de envío:</strong> $${total.toFixed(2)}</p>
        </div>`,
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
