# Store Manager
[![Build Status](https://travis-ci.org/musonant/store-manager.svg?branch=api)](https://travis-ci.org/musonant/store-manager)
[![Coverage Status](https://coveralls.io/repos/github/musonant/store-manager/badge.svg)](https://coveralls.io/github/musonant/store-manager)
[![Maintainability](https://api.codeclimate.com/v1/badges/f80a67e8dede565b1662/maintainability)](https://codeclimate.com/github/musonant/store-manager/maintainability)[![Test Coverage](https://api.codeclimate.com/v1/badges/f80a67e8dede565b1662/test_coverage)](https://codeclimate.com/github/musonant/store-manager/test_coverage)

## Description
Store Manger - is store managment app which is meant to be used in one store.

# Table of Contents

 * [Technologies](#technologies)
 * [Features](#features)
 * [Installation](#installation)

## Technologies
* HyperText Mark-up Language (HTML)
* Cascade Style Sheet (CSS)
* Vanilla Javascript
* Nodejs (Express framework)

### Pivotal Tracker
The Store Manger project is broken down into small task with pivotal tracker board. The link to the relevant Pivoltal tracker board is (https://www.pivotaltracker.com/n/projects/2203434)

### API Enpoint
API Endpoints is hosted at (https://musonant-store-manager.herokuapp.com/api/v1)

### UI Templates
The application is hosted online on gh-pages with 
 [StoreMangager] (https://musonant.github.io/store-manager/UI/)


## Features
- Get all Products
- Get a specific Product
- Get all Sales Record
- Get a specific Sale Record
- Create Products
- Create Sale Record


## Getting Started
### Installation
- install npm install
- install POSTMAN app
- run `npm run start:dev` then navigate to `localhost:8000` on POSTMAN


### API Endpoint Route 
<table>
<tr><th>HTTP VERB</th><th>ENDPOINT</th><th>TASK</th></tr>

<tr><td>GET</td> <td>api/v1/products</td> <td> Get all Products</td></tr>

<tr><td>GET</td> <td>api/v1/products/:productId</td> <td> Get a single Product</td></tr>

<tr><td>GET</td> <td>api/v1/sales</td> <td> Get all Sales </td></tr>

<tr><td>GET</td> <td>api/v1/sales/:saleId</td> <td> Get a single sale record</td></tr> 

<tr><td>POST</td> <td>api/v1/products</td> <td> Create a Product </td></tr>

<tr><td>POST</td> <td>api/v1/sales</td> <td> Create a new Sale record </td></tr>


</table>

## Author
**Emmanuel Osuh** 
