# CRUD API Project | CRUD API Paskaita

This project description is provided in **two languages**: Lithuanian 🇱🇹 and English 🇬🇧. 

**English version is at the bottom of this file.**  

---

## 📌 Projekto Aprašymas (Lietuvių kalba)

Šis projektas yra paprastas CRUD (Sukurti, Skaityti, Atnaujinti, Ištrinti) API, sukurtas naudojant `Node.js` ir `Express.js`. Jis skirtas mokymosi tikslams ir demonstruoja, kaip sukurti RESTful API su pagrindinėmis duomenų bazės operacijomis.

### 📂 Projekto Struktūra

- `index.js` - Pagrindinis serverio failas.

- `database.js` - Duomenų bazės konfigūracijos failas.

- `package.json` - Projekto priklausomybės ir skriptai.

- `cypress/` - Aplankas su `Cypress` testais.

- `CRUD_API_PASKAITA.postman_collection.json` - `Postman` kolekcija API testavimui.

- `products_202502060824.sql` ir `users_202502060820.sql` - SQL failai duomenų bazei.

### 🔧 Diegimas

1. **Klonuokite repozitoriją:**

   ```bash
   git clone https://github.com/Sandra-Ston/CRUD_API_paskaita.git
   cd CRUD_API_paskaita
   ```

2. **Įdiekite priklausomybes:**

    ```bash
   npm install
   ```

3. **Sukonfigūruokite duomenų bazę:**

- Įsitikinkite, kad MySQL veikia.

- Importuokite `products_202502060824.sql` ir `users_202502060820.sql`.

- Atnaujinkite `database.js` faile esamus nustatymus.

4. **Paleiskite serverį:**

    ```bash
   node index.js
   ```

    API bus pasiekiama adresu `http://localhost:3000`.

### API maršrutai

- **Vartotojai (`/users`):**

  - `GET /users` - Gauti visus vartotojus.

  - `GET /users/:id` - Gauti vartotoją pagal ID.

  - `POST /users` - Sukurti naują vartotoją.

  - `PUT /users/:id` - Atnaujinti vartotoją pagal ID.

  - `DELETE /users/:id` - Ištrinti vartotoją pagal ID.

- **Produktai (/products):**

  - `GET /products` - Gauti visus produktus.

  - `GET /products/:id` - Gauti produktą pagal ID.

  - `POST /products` - Sukurti naują produktą.

  - `PUT /products/:id` - Atnaujinti produktą pagal ID.

  - `DELETE /products/:id` - Ištrinti produktą pagal ID.
 
### 🧪 Testavimas

- Projekte integruoti end-to-end testai naudojant Cypress. Norėdami paleisti testus, vykdykite:

    ```bash
   npx cypress open
   ```  

    Tai atvers Cypress sąsają, kurioje galėsite pasirinkti ir paleisti testus.

- API testavimui galite naudoti Postman. Įkelkite `CRUD_API_PASKAITA.postman_collection.json` ir vykdykite užklausas.

---

## 📌 Project Description (English)

This project is a simple CRUD (Create, Read, Update, Delete) API built using `Node.js` and `Express.js`. It is designed for learning purposes and demonstrates how to create a RESTful API with basic database operations.

### 📂 Project Structure

- `index.js` - Main server file.

- `database.js` - Database configuration.

- `package.json` - Project dependencies and scripts.

- `cypress/` - Folder containing Cypress tests.

- `CRUD_API_PASKAITA.postman_collection.json` - Postman collection for API testing.

- `products_202502060824.sql` & `users_202502060820.sql` - SQL files for database initialization.

### 🔧 Installation

1. **Clone the repository:**

    ```bash
   git clone https://github.com/Sandra-Ston/CRUD_API_paskaita.git
   cd CRUD_API_paskaita
   ```

2. **Install dependencies:**

    ```bash
   npm install
   ```

3. **Set up the database:**

- Ensure MySQL is running.

- Import `products_202502060824.sql` and `users_202502060820.sql`.

- Update database connection settings in `database.js`.

4. **Start the server:**

    ```bash
   node index.js
   ```

    The API will be available at http://localhost:3000.

### 🔗 API Endpoints

- **Users (`/users`):**

  - `GET /users` - Get all users.

  - `GET /users/:id` - Get a user by ID.

  - `POST /users` - Create a new user.

  - `PUT /users/:id` - Update a user by ID.

  - `DELETE /users/:id` - Delete a user by ID.
    
- **Products (/products):**

  - `GET /products` - Get all products.

  - `GET /products/:id` - Get a product by ID.

  - `POST /products` - Create a new product.

  - `PUT /products/:id` - Update a product by ID.

  - `DELETE /products/:id` - Delete a product by ID.

### 🧪 Testing

 - To run end-to-end tests, use:

    ```bash
    npx cypress open
    ```

    This will open the Cypress interface, where you can select and run tests.

- For API testing, you can use Postman. Import the `CRUD_API_PASKAITA.postman_collection.json` file and run requests.
