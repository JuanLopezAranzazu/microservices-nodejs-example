# Microservices NodeJS + MongoDB

Este proyecto es un ejemplo de una arquitectura de microservicios utilizando NodeJS y MongoDB. Incluye los siguientes servicios:

## Servicios

### Customer Service
Este servicio maneja la gestión de clientes.

#### Endpoints
- `GET /customers` - Obtiene una lista de clientes.
- `POST /customers` - Crea un nuevo cliente.
- `GET /customers/:id` - Obtiene los detalles de un cliente específico.
- `PUT /customers/:id` - Actualiza la información de un cliente.
- `DELETE /customers/:id` - Elimina un cliente.

### Order Service
Este servicio maneja la gestión de pedidos.

#### Endpoints
- `GET /orders` - Obtiene una lista de pedidos.
- `POST /orders` - Crea un nuevo pedido.
- `GET /orders/:id` - Obtiene los detalles de un pedido específico.
- `PUT /orders/:id` - Actualiza la información de un pedido.
- `DELETE /orders/:id` - Elimina un pedido.

### API Gateway
El API Gateway actúa como un punto de entrada único para todos los servicios.

#### Endpoints
- `GET /customers` - Redirige al servicio de clientes.
- `POST /customers` - Redirige al servicio de clientes.
- `GET /customers/:id` - Redirige al servicio de clientes.
- `PUT /customers/:id` - Redirige al servicio de clientes.
- `DELETE /customers/:id` - Redirige al servicio de clientes.
- `GET /orders` - Redirige al servicio de pedidos.
- `POST /orders` - Redirige al servicio de pedidos.
- `GET /orders/:id` - Redirige al servicio de pedidos.
- `PUT /orders/:id` - Redirige al servicio de pedidos.
- `DELETE /orders/:id` - Redirige al servicio de pedidos.

## Instalación

Instalar dependencias
```bash
cd customer-service && npm install
cd ../order-service && npm install
cd ../api-gateway && npm install
```

## Ejecución

1. Inicia el servicio de clientes:
  ```bash
  cd customer-service && npm start
  ```
2. Inicia el servicio de pedidos:
  ```bash
  cd ../order-service && npm start
  ```
3. Inicia el API Gateway:
  ```bash
  cd ../api-gateway && npm start
  ```