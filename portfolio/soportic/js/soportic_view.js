$(window).resize(ajustar());
$(window).load(ajustar());

function ajustar() {
    if ($(window).width() > 600) {
        $("#domicilio_icon").height($("#domicilio_icon").parent().height());
        $("#diploma_icon").height($("#diploma_icon").parent().height());
        
    } else {
        var1 = $('#domicilio_texto').detach();
        $('#domicilio_icon').after(var1);
    }
}

