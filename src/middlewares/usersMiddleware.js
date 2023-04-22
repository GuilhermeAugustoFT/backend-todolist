const validadeBody = (req, res, next) => {
    const { name, email, password } = req.body;

    if(name === undefined) {
        return res.status(400).json({ message: 'The field "name" is required' }); 
    }

    if(name === '') { 
        return res.status(400).json({ message: 'name cannot be empty' });
    }

    if(email === undefined) {
        return res.status(400).json({ message: 'The field "email" is required' }); 
    }

    if(email === '') { 
        return res.status(400).json({ message: 'email cannot be empty' });
    }

    if(password === undefined) {
        return res.status(400).json({ message: 'The field "password" is required' }); 
    }

    if(password === '') { 
        return res.status(400).json({ message: 'password cannot be empty' });
    }

    next();
};

module.exports = {
    validadeBody,
};