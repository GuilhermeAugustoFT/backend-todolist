const validateTitle = (req, res, next) => { // função de validação, valida se o campo titulo está ok no body
    const { body } = req; // pega o body da requisição

    if(body.title === undefined) { // verifica se o titulo é undefined
        return res.status(400).json({ message: 'The field "title" is required' }); // se for retorna o status 400 (BAD REQUEST) e uma mensagem dizendo que precisa do campo title
    }
    
    if(body.title === '') { // verifica se o titulo é vazio
        return res.status(400).json({ message: 'title cannot be empty' }); // se for retorna o status 400 (BAD REQUEST) e uma mensagem dizendo que o titulo não pode ser vazio
    }

    next(); // caso não caia em nenhum cenário de erro, termina a validação e permite a continuação do sistema
};

const validateStatus = (req, res, next) => { // função de validação, valida se o campo status está ok no body
    const { body } = req; // pega o body da requisição

    if(body.status === undefined) { // verifica se o status é undefined
        return res.status(400).json({ message: 'The field "status" is required' }); // se for retorna o status 400 (BAD REQUEST) e uma mensagem dizendo que precisa do campo status
    }
    
    if(body.status === '') { // verifica se o status é vazio
        return res.status(400).json({ message: 'status cannot be empty' }); // se for retorna o status 400 (BAD REQUEST) e uma mensagem dizendo que o status não pode ser vazio
    }

    next(); // caso não caia em nenhum cenário de erro, termina a validação e permite a continuação do sistema
};

module.exports = { 
    validateTitle,
    validateStatus
};