# Pet Tracker Project (Learning Project - Not Maintained)

This Git repository contains the source code for a pet tracking project built with SvelteKit for the frontend, C++ for the ESP32 tracker, and Node.js for the backend server. The project was created as a learning exercise to explore embedded programming and SvelteKit features. Please note that this project will not be actively maintained.

## Project Structure

The repository is organized into three main folders:

### 1. pet-tracker-backend

This folder contains the backend code written in Node.js. It serves as a communication hub for the embedded ESP32 tracker, manages a MongoDB database for storing pet information, and provides the foundation for the fencing system. The backend facilitates data retrieval and updates to ensure real-time tracking of your pets.

### 2. pet-tracker-esp32

The `pet-tracker-esp32` directory contains C++ code that can be flashed onto an ESP32 device. This code enables the ESP32 to connect to GPS satellites, acquire location data, and communicate that information to the backend server via a 3G network connection. The ESP32 serves as the physical tracker that is attached to your pet's collar.

### 3. pet-tracker-frontend

The `pet-tracker-frontend` folder contains a SvelteKit application that serves as the user interface for configuring and monitoring the pet tracker system. When you initially set up your ESP32 device, you can connect to this frontend to input pet details, set up geofencing zones, and view your pet's real-time location on a map.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the Repository**: Clone this Git repository to your local machine using the following command:

   ```bash
   git clone https://github.com/yourusername/pet-tracker.git
   ```

2. **Backend Setup**: Navigate to the `pet-tracker-backend` directory and follow the instructions in the `README.md` file to set up the Node.js backend server with MongoDB.

3. **ESP32 Tracker**: In the `pet-tracker-esp32` directory, you'll find the C++ code for the ESP32 tracker. Compile and flash this code onto your ESP32 device using your preferred development environment.

4. **Frontend Setup**: Go to the `pet-tracker-frontend` directory and follow the instructions in the `README.md` file to set up the SvelteKit frontend.

5. **Use the Application**: Access the frontend application through a web browser, configure your pet's information, and monitor their location in real-time.

## Contributing

While this project is not actively maintained, we welcome contributions and improvements from the community. If you find issues or have ideas for enhancements, please open an issue or submit a pull request. For major changes, please discuss them first in the [Discussions](https://github.com/yourusername/pet-tracker/discussions) section.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as needed.

---

Thank you for exploring our pet tracking system, which served as a valuable learning experience for embedded programming and SvelteKit features. If you have any questions or need assistance, please don't hesitate to reach out to us through the repository's issue tracker.

