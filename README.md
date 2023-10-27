## Country Information Web App

This is a simple web application that allows users to fetch and display information about a specific country. Users can input a country name, and the app will retrieve and display various details about that country, such as its flag, official name, region, subregion, population, and more.

Table of Contents
Getting Started
Prerequisites
Installation
Usage
Code Explanation
Contributing
License

## Demo

Get a live demo of the project at [https://countryinfoweb.netlify.app/]

## Prerequisites

Before you can run this web app, ensure you have the following:

A web browser to view the application.
An internet connection to fetch country information from an external API.

## Installation

Clone or download this repository to your local machine.
Open the project directory in a text editor or code IDE of your choice.

## Usage

Open the project's HTML file in your web browser (e.g., index.html).
Enter the name of the country you want to look up in the input field and click the "Submit" button.
The application will fetch information about the specified country and display it on the page.

## Code Explanation

The code uses JavaScript to add an event listener to the form with the ID 'country-form,' listening for a submit event.
When the form is submitted, the JavaScript code prevents the default form submission behavior (e.preventDefault()).
It retrieves the country name from the input field and constructs a URL to fetch data from the "https://restcountries.com/v3.1" API using the fetch function.
It then processes the fetched data and displays relevant information about the country on the web page.

## Contributing

If you'd like to contribute to this project, please follow these steps:

Fork the project.
Create a new branch for your feature or bug fix.
Make your changes and commit them.
Push the changes to your fork.
Submit a pull request to the original repository.
Please ensure your code adheres to good coding practices and includes necessary comments and documentation.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

