//                                                   Users collection in MongoDB

module.exports = mongoose => {
    const User = mongoose.model(
        "user",
        mongoose.Schema({
            id: String,
            nom: String,
            prenom: String,
            email: String
        })
    );
    return User;
};
