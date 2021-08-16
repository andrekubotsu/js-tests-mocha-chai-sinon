class CustomError extends Error{
    constructor({message, data}){
        super(message);
        this.data = data;
    }
}

try{
    //console.log(name);
    const name = 'Andre';
    const myError = new CustomError({
        message: 'Custom message', 
        data: {
            type: 'Server error'
        }
    });
    throw myError;
} catch(error){
    console.log('Error', error);
} finally {
    console.log('Keep going...');
}

