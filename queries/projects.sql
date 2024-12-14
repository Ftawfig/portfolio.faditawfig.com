CREATE TABLE entries (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    entry_key VARCHAR(255) NOT NULL,
    entry_type VARCHAR(255) NOT NULL,
    entry_title VARCHAR(255),
    entry_category VARCHAR(255),
    employer VARCHAR(255),
    entry_description TEXT,
    start_date VARCHAR(255),
    end_date VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)