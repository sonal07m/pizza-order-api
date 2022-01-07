const History=require('../schema/historySchema');

exports.uploadProduct = (req, res) => {
    const {body:{name,address,pizzaName,totalAmount,phone, quantity}} = req;
    if(res) {
        let newproduct= {
            name,
            address,
            pizzaName,
            totalAmount,
            phone,
            quantity
        };

        History.create(newproduct)
            .then(() => res.send({newproduct}))
            .catch((error) => {
                console.log(error)
                return res.status(500).send(error)
            });
    }
};

exports.getProduct= (req,res) => {
    History.findAll()
        .then((result) => {
            console.log(result)

            if(!result){
                res.status(404).send({result});
            }else {
                res.status(200).send({result})
            }
        }).catch((err) => {
        res.send(err)
    })
};

