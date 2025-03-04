# ContainerizedWebApp

A full-stack containerized web application featuring Django REST Framework backend, PostgreSQL database, and React frontend. This project demonstrates how to set up a complete development environment using Docker and Docker Compose.

## 🚀 Features

- **User Authentication System**: Sign up, login, and dashboard views
- **Containerized Architecture**: All components run in separate Docker containers
- **Django REST API**: Backend API for user authentication and management
- **React Frontend**: Modern UI built with React and Vite
- **PostgreSQL Database**: Persistent data storage
- **Docker Compose**: Easy orchestration of all services

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## 🛠️ Project Structure

```
.
├── backend/                # Django application
│   ├── backend/            # Django project files
|   ├── authentication/     # authentication django app
|   ├── entry_point.sh      # launcher file
|   ├── manage.py           #
│   ├── requirements.txt    # Python dependencies
│   └── Dockerfile          # Backend container configuration
├── frontend/               # React application
│   ├── src/              # React source code
│   ├── package.json        # Node.js dependencies
│   |── Dockerfile          # Frontend container configuration
|   ├── tsconfig.app.json
|   ├── tsconfig.json
|   ├── tsconfig.node.json
|    └── vite.config.ts
├── docker-compose.yml      # Docker Compose configuration
└── README.md               # Project documentation
```

## 🔧 Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/RutujaGurav07/ContainerzedWebApp.git
cd ContainerzedWebApp
```

2. **Start the containers**

```bash
docker-compose build
docker-compose up -d
```

This command builds and starts all the containers defined in the `docker-compose.yml` file.

3. **Access the applications**

- Frontend: http://localhost:5173
- Backend API: http://localhost:8000
- Django Admin: http://localhost:8000/admin

## 🚢 Docker Configuration

### Backend (Django)

The backend service uses Python 3.9 and Django. The Dockerfile:
- Installs Python dependencies from requirements.txt
- Sets up the Django application
- Exposes port 8000
- Runs the Django server with Gunicorn

### Frontend (React)

The frontend service uses Node.js and React with Vite. The Dockerfile:
- Installs Node.js dependencies from package.json
- Copies the React application code
- Exposes port 5173
- Runs the Vite development server

### Database (PostgreSQL)

The database service uses PostgreSQL 13. It's configured with:
- A persistent volume for data storage
- Environment variables for database credentials
- Exposed port 5432 for external connections

## 📚 API Endpoints

The backend provides these API endpoints:

- `POST /api/auth/register/`: Register a new user
- `POST /api/auth/login/`: Authenticate a user
- `POST /api/auth/logout/`: Log out the current user
- `GET /api/auth/user/`: Get information about the current user


## 🔄 Common Commands

- Start all services: `docker-compose up -d`
- Stop all services: `docker-compose down -v`
- View logs: `docker-compose logs -f [service_name]`
- Run Django migrations: `docker-compose exec backend python manage.py migrate`
- Create a Django superuser: `docker-compose exec backend python manage.py createsuperuser`
- Access backend shell: `docker-compose exec backend python manage.py shell`

## 🌟 Future Enhancements

- Add user profile management
- Implement JWT authentication
- Add more complex data models and relationships
- Create a production-ready deployment configuration
- Implement CI/CD pipeline

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

If you have any questions or suggestions, please open an issue on GitHub.

---

Created with ❤️ by [Rutuja Gurav](https://github.com/RutujaGurav07)
