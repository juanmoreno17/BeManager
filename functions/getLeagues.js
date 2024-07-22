module.exports = function (db) {
    return function (req, res) {
        const { uid } = req.body;
        if (!uid) return res.status(404).send({ err: 'No se ha enviado un identificador' });
        return db
            .collection('leagues')
            .where('uid', '==', uid)
            .get()
            .then((querySnapshot) => {
                const data = [];
                querySnapshot.forEach((i) => data.push(i.data()));
                return res.status(200).send({ data });
            })
            .catch((error) =>
                res.status(501).send({ err: 'No se encontró un documento con ese uid', error }),
            );
    };
};
