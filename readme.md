# BOOKS MANAGEMENT SYSTEM

This project create with Laravel + Vue. Following is the function of the system:
* Add a book
* Delete a book
* Change an authors name
* Search for a book by title or author
* Export in CSV and XML

## Development Environment
* PHP 7.3
* Node JS 10.14.2 (npm 6.4.1)
* Vagrant 2.2
* Virtual Box 6.0.0

## Setup Guide
### Clone Repository
> git clone # with ssh

> git clone # with https

### Install Dependencies
> composer install

### Install Node Dependencies
> npm install

### Build JS Files
> npm run dev     # Single run

> npm run watch   # Run with wather

### Initialize Homestead
> vendor/bin/homestead make     # Initialize Homestead.yaml

Open up Homestead.yaml file and edit the value as you wish.

> vagrant up    # Initialize VM

### Setup Hosts File
Open the hosts file based on your OS and add IP and sites map from your Homestead.yaml into the file with the domain.
> 192.168.100.100   xxx.test     # Sample only

### Generate your .env
SSH into the VM by running `vagrant ssh`
Copy `.env.example` to `.env` by running script below

> cd code       # Your path might differs
> cp .env.example .env
> php artisan key:generate    # Create app key
