# API Documentation

## Introduction

This API documentation provides an overview of the available endpoints and their functionalities for the application.

Base URL: `/api`

## Endpoints

### Champions

#### Get All Champions

- URL: `/champions`
- Method: `GET`
- Description: Retrieves all champions from the database.

**Response:**

**Success:**

- Status Code: `200`
- Body: `{ success: true, data: [ChampionObject] }`

**Error:**

- Status Code: `500`
- Body: `{ success: false, error: ErrorObject }`

#### Get Champion

- URL: `/champions/:championID`
- Method: `GET`
- Description: Retrieves a specific champion by ID from the database.

**Response:**

**Success:**

- Status Code: `200`
- Body: `{ success: true, data: ChampionObject }`

**Error:**

- Status Code: `500`
- Body: `{ success: false, error: ErrorObject }`

### Authentication

#### Login

- URL: `/login`
- Method: `POST`
- Description: Authenticates a user and generates a JSON Web Token (JWT) for authorization.
- Request Body:
    - userName (required): The username of the user.
    - password (required): The password of the user.

**Response:**

**Success:**

- Status Code: `200`
- Body: `{ success: true, data: UserDataObject }`

**Error:**

- Status Code: `400`
- Body: `{ success: false, error: [ValidationErrorObject] }`

#### Logout

- URL: `/logout`
- Method: `GET`
- Description: Logs out the user by clearing the access token cookie.

**Response:**

**Success:**

- Status Code: `200`
- Body: `{ success: true, data: "user logged out" }`

### News

#### Get All News

- URL: `/news`
- Method: `GET`
- Description: Retrieves all news from the database.

**Response:**

**Success:**

- Status Code: `200`
- Body: `{ success: true, data: [NewsObject] }`

**Error:**

- Status Code: `500`
- Body: `{ success: false, error: ErrorObject }`

### Patchnotes

#### Get All Patchnotes

- URL: `/patchnotes`
- Method: `GET`
- Description: Retrieves all patchnotes from the database.

**Response:**

**Success:**

- Status Code: `200`
- Body: `{ success: true, data: [PatchnoteObject] }`

**Error:**

- Status Code: `500`
- Body: `{ success: false, error: ErrorObject }`

### User Champions

#### Get User Champions

- URL: `/userChampions/:userID`
- Method: `GET`
- Description: Retrieves the champions owned by a specific user.

**Response:**

**Success:**

- Status Code: `200`
- Body: `{ success: true, data: [UserChampionObject] }`

**Error:**

- Status Code: `500`
- Body: `{ success: false, error: ErrorObject }`

#### Get User Champion

- URL: `/userChampions`
- Method: `POST`
- Description: Retrieves a specific user champion.
- Request Body:
    - userID (required): The ID of the user.
    - championID (required): The ID of the champion.

**Response:**

**Success:**

- Status Code: `200`
- Body: `{ success: true, data: UserChampionObject }`

**Error:**

- Status Code: `500`
- Body: `{ success: false, error: ErrorObject }`

### User Friends

#### Get User Friends

- URL: `/friends/:userID`
- Method: `GET`
- Description: Retrieves the friends of a specific user.

**Response:**

**Success:**

- Status Code: `200`
- Body: `{ success: true, data: [UserFriendObject] }`

**Error:**

- Status Code: `500`
- Body: `{ success: false, error: ErrorObject }`

#### Get User Friend Requests

- URL: `/friends/:userID/open`
- Method: `GET`
- Description: Retrieves the open friend requests of a specific user.

**Response:**

**Success:**

- Status Code: `200`
- Body: `{ success: true, data: [UserFriendRequestObject] }`

**Error:**

- Status Code: `500`
- Body: `{ success: false, error: ErrorObject }`

#### Get All User Friend Requests

- URL: `/friends/:userID/open/all`
- Method: `GET`
- Description: Retrieves all friend requests of a specific user.

**Response:**

**Success:**

- Status Code: `200`
- Body: `{ success: true, data: [UserFriendRequestObject] }`

**Error:**

- Status Code: `500`
- Body: `{ success: false, error: ErrorObject }`

#### Create Friend Request

- URL: `/friends/add`
- Method: `POST`
- Description: Creates a friend request between two users.
- Request Body:
    - userID_1 (required): The ID of the user sending the request.
    - userID_2 (required): The ID of the user receiving the request.

**Response:**

**Success:**

- Status Code: `200`
- Body: `{ success: true, data: FriendRequestObject }`

**Error:**

- Status Code: `500`
- Body: `{ success: false, error: ErrorObject }`

#### Accept Friend Request

- URL: `/friends/accept`
- Method: `PUT`
- Description: Accepts a friend request.
- Request Body:
    - userID_1 (required): The ID of the user sending the request.
    - userID_2 (required): The ID of the user receiving the request.

**Response:**

**Success:**

- Status Code: `200`
- Body: `{ success: true, data: AcceptanceResponseObject }`

**Error:**

- Status Code: `500`
- Body: `{ success: false, error: ErrorObject }`

### Users

#### Get All Users

- URL: `/users`
- Method: `GET`
- Description: Retrieves all users from the database.

**Response:**

**Success:**

- Status Code: `200`
- Body: `{ success: true, data: [UserObject] }`

**Error:**

- Status Code: `500`
- Body: `{ success: false, error: ErrorObject }`

#### Get User

- URL: `/users/:userID`
- Method: `GET`
- Description: Retrieves a specific user by ID from the database.

**Response:**

**Success:**

- Status Code: `200`
- Body: `{ success: true, data: UserObject }`

**Error:**

- Status Code: `500`
- Body: `{ success: false, error: ErrorObject }`

#### Create User

- URL: `/users`
- Method: `POST`
- Description: Creates a new user in the database.
- Request Body:
    - userName (required): The name of the user.
    - userEmail (required): The email of the user.
    - userPassword (required): The password of the user.

**Response:**

**Success:**

- Status Code: `200`
- Body: `{ success: true, data: UserID }`

**Error:**

- Status Code: `500`
- Body: `{ success: false, error: ErrorObject }`

#### Update User

- URL: `/users/:userID`
- Method: `PUT`
- Description: Updates a specific user by ID in the database.
- Request Body:
    - userName: The updated name of the user.
    - userEmail: The updated email of the user.
    - userPassword: The updated password of the user.

**Response:**

**Success:**

- Status Code: `200`
- Body: `{ success: true, data: "User updated" }`

**Error:**

- Status Code: `500`
- Body: `{ success: false, error: ErrorObject }`

#### Delete User

- URL: `/users/:userID`
- Method: `DELETE`
- Description: Deletes a specific user by ID from the database.

**Response:**

**Success:**

- Status Code: `200`
- Body: `{ success: true, data: "User deleted" }`

**Error:**

- Status Code: `500`
- Body: `{ success: false, error: ErrorObject }`

#### Upload User Image

- URL: `/users/:userID/picture`
- Method: `POST`
- Description: Uploads a user image.
- Request Body: (multipart/form-data)
    - image (required): The image file to upload.

**Response:**

**Success:**

- Status Code: `200`
- Body: `{ success: true, data: { name: filename, size: imageSize } }`

**Error:**

- Status Code: `500`
- Body: `{ success: false, error: ErrorObject }`

### Wallet

#### Buy Champion

- URL: `/wallet/buy`
- Method: `POST`
- Description: Buys a champion for a user and updates the user's wallet.
- Request Body:
    - userID (required): The ID of the user.
    - championID (required): The ID of the champion to buy.

**Response:**

**Success:**

- Status Code: `200`
- Body: `{ success: true, data: "Champion bought" }`

**Error:**

- Status Code: `500`
- Body: `{ success: false, error: ErrorObject }`

#### Add Funds

- URL: `/wallet/add`
- Method: `POST`
- Description: Adds funds to a user's wallet.
- Request Body:
    - userID (required): The ID of the user.
    - walletAmount (required): The amount of funds to add.

**Response:**

**Success:**

- Status Code: `200`
- Body: `{ success: true, data: "Funds added" }`

**Error:**

- Status Code: `500`
- Body: `{ success: false, error: ErrorObject }`

#### Get User Wallet

- URL: `/wallet/:userID`
- Method: `GET`
- Description: Retrieves the wallet of a specific user.

**Response:**

**Success:**

- Status Code: `200`
- Body: `{ success: true, data: WalletObject }`

**Error:**

- Status Code: `500`
- Body: `{ success: false, error: ErrorObject }`

#### Get Wallet Transactions

- URL: `/wallet/transactions/:userWalletID`
- Method: `GET`
- Description: Retrieves the transactions of a specific user's wallet.

**Response:**

**Success:**

- Status Code: `200`
- Body: `{ success: true, data: [TransactionObject] }`

**Error:**

- Status Code: `500`
- Body: `{ success: false, error: ErrorObject }`


### Error Object Structure

The ErrorObject returned in the response body will have the following structure:

- message: A descriptive error message.

### Validation Error Object Structure

The ValidationErrorObject returned in the response body for validation errors will have the following structure:

- param: The parameter that failed validation.
- msg: The error message indicating the validation failure.

**Note:** Multiple ValidationErrorObject can be present in the array for multiple validation errors.
