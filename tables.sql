-- when user creates an account and get posted here
CREATE TABLE IF NOT EXISTS users (
	id serial PRIMARY KEY,
	name TEXT NOT NULL,
	email TEXT NOT NULL,
	password TEXT NOT NULL,
	location TEXT NOT NULL
);

-- when user post an product
CREATE TABLE IF NOT EXISTS products (
	id serial PRIMARY KEY,
	title TEXT NOT NULL,
	img TEXT NOT NULL,
	availability BOOLEAN,
	location TEXT,				-- location is unique to the product
	owner_id INTEGER, 			-- product is unique to the owner
	service_id INTEGER
);

-- when a user borrows an product
CREATE TABLE IF NOT EXISTS transactions (
	id serial PRIMARY KEY,
	product_id INTEGER,
	user_id INTEGER,
	owner_id INTEGER,
	availability BOOLEAN
);

CREATE TABLE IF NOT EXISTS messages (
	id serial PRIMARY KEY,
	message TEXT,
	product_id INTEGER,
	sender_id INTEGER,
	receiver_id INTEGER
);

-- should only contain the type of services they have
CREATE TABLE IF NOT EXISTS services (
	id serial PRIMARY KEY,
	type TEXT
);

CREATE TABLE IF NOT EXISTS locations (
	id serial PRIMARY KEY,
	neighborhood TEXT
); 


-- INSERT INTO services (type) VALUES ('Share Item'), ('Give Item'), ('Share Skill');
-- INSERT INTO locations (neighborhood) VALUES ('Pasir Ris'), ('Tampines'), ('Simei'), ('Bedok'), ('Eunos'), ('Toa Payoh'); 

