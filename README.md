# Maharashtra City Explorer

A React application showcasing the beauty and history of Satara and other cities in Maharashtra. Designed with Tailwind CSS for a visually appealing and responsive user experience.

## Features

- **City Cards**: Display multiple cities with images, names, and descriptions.
- **Responsive Design**: Optimized for all screen sizes using Tailwind CSS.
- **Hover Effects**: Smooth animations for interactive user experience.
- **Dynamic Data**: Easily expandable to include more cities and details.

## Technologies Used

- React.js
- Tailwind CSS

## Folder Structure

```plaintext
view-card_react/
├── public/
│   ├── satara.jpg
│   ├── karad.jpg
│   ├── mahabaleshwar.jpg
│   ├── panchgani.jpg
├── src/
│   ├── components/
│   │   ├── CityCard.js
│   │   ├── CityList.js
│   ├── App.js
│   ├── index.js
├── package.json
```

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd view-card_react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the application**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## How to Add More Cities

1. Add new images to the `public` folder.
2. Update the `cities` array in `CityList.js` with the new city details:
   ```javascript
   {
     name: "New City",
     image: "new-city.jpg",
     description: "Description of the city."
   }
   ```

## Screenshots

### Home Page
![Home Page Screenshot](public/screenshot-homepage.png)

## License
This project is licensed under the [MIT License](LICENSE).
