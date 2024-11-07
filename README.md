# party-igre
Skupinska naloga za predmet RPO

# Sodelujoči
Luka Lamprečnik
Nik Terglav
Rene Zadravec
Matevž Ozvatič


# Project Setup

## Prerequisites
Make sure you have the following installed:
- **[XAMPP](https://www.apachefriends.org/index.html)** (for PHP)
- **[Composer](https://getcomposer.org/)** (for PHP packages - Laravel)
- **[Laravel](https://laravel.com/)**
- **[Git](https://git-scm.com/)**
- **[Docker Desktop](https://www.docker.com/products/docker-desktop)**

## Setup Instructions

1. Git clone this repo

2. Run the following commands in terminal:
```
cd Backend
copy .env.example .env
composer install
php artisan key:generate
docker-compose -p rpo_backend up -d --build
docker exec rpo_api_container php artisan migrate
```
4. ... profit
