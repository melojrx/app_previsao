# WebApp e API Previsão de Preços de Imóveis em São Paulo

Vamos utilizar um modelo treinado para fazer a previsão do preço de venda de apartamentos na cidade de São Paulo e usar esse modelo para alimentar uma aplicação web.

Como o objetivo é focar na construção de um *webapp* e em como subir uma aplicação, a etapa da análise exploratória será suprimida (feita em etapa anterior).

As etapas de obtenção dos dados, Análise e tratamento, escolha do modelo, métricas de avaliação, salvamento e carregamento do e serialização ´para utilização na API encontram-se no Notebook de apoio do projeto. 

Para subir a API vamos usar o microframework python FLASK. 

## Instalação 

1. Clone do Projeto: 

    ```bash
    git clone [xxx](https://github.com/melojrx/app_previsao.git)
    cd app_previsao
    ```
2. Criar e Ativar o abmiente virtual:
    
    ```bash
    python -m venv .venv
    source .venv/bin/activate       # For Linux/Mac
    .\.venv\Scripts\Activate.ps1    # For Windows
    ```

3. Instalar as dependencias do Projeto:

    ```bash
    pip install -r requirements.txt
    ```

4. Rodar a Aplicação: 
 
    ```bash
    python app.py ou
    flask run 
    ```
5. A Aplicação estará disponível em: 

    http://127.0.0.1:5000/

    ![Logo do Projeto](web_app_image.png)

6. No *webapp* para melhor experiência do usuário está sendo usada a biblioteca de Mapas: (https://leafletjs.com/) 

7. API: 

    [POST] http://127.0.0.1:5000/api/v1/previsao

    Exemplo de Requisição: 

    {
  "Condo": 210,
  "Size": 65,
  "Rooms": 3,
  "Toilets": 2,
  "Suites": 1,
  "Parking": 1,
  "Elevator": 1,
  "Furnished": 0,
  "Swimming Pool": 0,
  "New": 0,
  "Latitude": -23.543138,
  "Longitude": -46.479486,
  "District_Alto de Pinheiros": 0,
  "District_Anhanguera": 0,
  "District_Aricanduva": 0,
  "District_Artur Alvim": 0,
  "District_Barra Funda": 1,
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
  "Negotiation Type_sale": 1,
  "Property Type_apartment": 1
}

Observação: Ao salvar os arquivos do modelo: features.names e model.joblib por questão de simplificação 
eles são salvos na pasta raiz do notebook. *Copiar os arquivos para a pasta model para que o script app.py funcione corretamente.*