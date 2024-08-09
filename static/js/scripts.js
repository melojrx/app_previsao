$(document).ready(function(){
    $('#previsaoForm').on('submit', function(event){
        event.preventDefault();
        let formData = {};
        $(this).serializeArray().forEach(function(item){
            formData[item.name] = item.value;
        });

        // Transformar os dados para corresponder às chaves esperadas pela API
        let transformedData = {
            "Condo": parseInt(formData.Condo),
            "Size": parseInt(formData.Size),
            "Rooms": parseInt(formData.Rooms),
            "Toilets": parseInt(formData.Toilets),
            "Suites": parseInt(formData.Suites),
            "Parking": parseInt(formData.Parking),
            "Elevator": parseInt(formData.Elevator),
            "Furnished": parseInt(formData.Furnished),
            "Swimming Pool": parseInt(formData['Swimming Pool']),
            "New": parseInt(formData.New),
            "Latitude": parseFloat(formData.Latitude),
            "Longitude": parseFloat(formData.Longitude),
            // Inicializar todos os distritos com 0
            "District_Alto de Pinheiros": 0,
            "District_Anhanguera": 0,
            "District_Aricanduva": 0,
            "District_Artur Alvim": 0,
            "District_Barra Funda": 0,
            "District_Bela Vista": 0,
            "District_Belém": 0,
            "District_Bom Retiro": 0,
            "District_Brasilândia": 0,
            "District_Brooklin": 0,
            "District_Brás": 0,
            "District_Butantã": 0,
            "District_Cachoeirinha": 0,
            "District_Cambuci": 0,
            "District_Campo Belo": 0,
            "District_Campo Grande": 0,
            "District_Campo Limpo": 0,
            "District_Cangaíba": 0,
            "District_Capão Redondo": 0,
            "District_Carrão": 0,
            "District_Casa Verde": 0,
            "District_Cidade Ademar": 0,
            "District_Cidade Dutra": 0,
            "District_Cidade Líder": 0,
            "District_Cidade Tiradentes": 0,
            "District_Consolação": 0,
            "District_Cursino": 0,
            "District_Ermelino Matarazzo": 0,
            "District_Freguesia do Ó": 0,
            "District_Grajaú": 0,
            "District_Guaianazes": 0,
            "District_Iguatemi": 0,
            "District_Ipiranga": 0,
            "District_Itaim Bibi": 0,
            "District_Itaim Paulista": 0,
            "District_Itaquera": 0,
            "District_Jabaquara": 0,
            "District_Jaguaré": 0,
            "District_Jaraguá": 0,
            "District_Jardim Helena": 0,
            "District_Jardim Paulista": 0,
            "District_Jardim São Luis": 0,
            "District_Jardim Ângela": 0,
            "District_Jaçanã": 0,
            "District_José Bonifácio": 0,
            "District_Lajeado": 0,
            "District_Lapa": 0,
            "District_Liberdade": 0,
            "District_Limão": 0,
            "District_Mandaqui": 0,
            "District_Medeiros": 0,
            "District_Moema": 0,
            "District_Mooca": 0,
            "District_Morumbi": 0,
            "District_Pari": 0,
            "District_Parque do Carmo": 0,
            "District_Pedreira": 0,
            "District_Penha": 0,
            "District_Perdizes": 0,
            "District_Perus": 0,
            "District_Pinheiros": 0,
            "District_Pirituba": 0,
            "District_Ponte Rasa": 0,
            "District_Raposo Tavares": 0,
            "District_República": 0,
            "District_Rio Pequeno": 0,
            "District_Sacomã": 0,
            "District_Santa Cecília": 0,
            "District_Santana": 0,
            "District_Santo Amaro": 0,
            "District_Sapopemba": 0,
            "District_Saúde": 0,
            "District_Socorro": 0,
            "District_São Domingos": 0,
            "District_São Lucas": 0,
            "District_São Mateus": 0,
            "District_São Miguel": 0,
            "District_São Rafael": 0,
            "District_Sé": 0,
            "District_Tatuapé": 0,
            "District_Tremembé": 0,
            "District_Tucuruvi": 0,
            "District_Vila Andrade": 0,
            "District_Vila Curuçá": 0,
            "District_Vila Formosa": 0,
            "District_Vila Guilherme": 0,
            "District_Vila Jacuí": 0,
            "District_Vila Leopoldina": 0,
            "District_Vila Madalena": 0,
            "District_Vila Maria": 0,
            "District_Vila Mariana": 0,
            "District_Vila Matilde": 0,
            "District_Vila Olimpia": 0,
            "District_Vila Prudente": 0,
            "District_Vila Sônia": 0,
            "District_Água Rasa": 0,
            "Negotiation Type_rent": 0,
            "Negotiation Type_sale": 0,
            "Property Type_apartment": 0,
        };
        // Set the selected district to 1
        transformedData[`District_${formData.District}`] = 1;
        // Set the selected negotiation type
        if (formData.NegotiationType === 'rent') {
            transformedData['Negotiation Type_rent'] = 1;
        } else if (formData.NegotiationType === 'sale') {
            transformedData['Negotiation Type_sale'] = 1;
        }
        // Set the property type
        if (formData.PropertyType === 'apartment') {
            transformedData['Property Type_apartment'] = 1;
        }

        $.ajax({
            url: 'http://127.0.0.1:5000/api/v1/previsao',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(transformedData),
            success: function(response){
                let formattedValue = response.previsao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                $('#resultado').html(formattedValue).show();
            },
            error: function(response){
                let error = response.responseJSON.error;
                $('#resultado').html('<div class="alert alert-danger">Erro: ' + error + '</div>');
            }
        });
    });
});

