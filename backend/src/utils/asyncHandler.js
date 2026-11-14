/*
const asyncHandler = (func) => async(res,req,next) => {
    try{
        await func(res,req,next);
    }
    catch(err){
        res.status(err.statusCode || 500).json({
            success:false,
            message:err.message || 'Internal Server Error'
        })
        next(err);
    }
}*/

const asyncHandler = (requestHandler) =>  {

    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
            .catch((err) => (next(err)))
    }
}
export {asyncHandler};