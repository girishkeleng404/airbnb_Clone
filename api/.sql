CREATE TABLE Users (
  id SERIAL PRIMARY KEY, 
   username VARCHAR(50) NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL, 
  password VARCHAR(200) 
 
);

CREATE TABLE places (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    title TEXT,
    address TEXT,
    description TEXT,
    extra_info TEXT,
    check_in TEXT,
    check_out TEXT,
    max_guests INT
);

-- Perks Table
CREATE TABLE perks (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL
);

-- Place Perks Join Table
CREATE TABLE place_perks (
    place_id INT REFERENCES places(id) ON DELETE CASCADE,
    perk_id INT REFERENCES perks(id) ON DELETE CASCADE,
    PRIMARY KEY (place_id, perk_id)
);

-- Photos Table
CREATE TABLE photos (
    id SERIAL PRIMARY KEY,
    place_id INT REFERENCES places(id) ON DELETE CASCADE,
    photo_url TEXT
);-- Users Table

