

module.exports = async (client) => {
    const stringlength = 69;
    console.log(`Elio Loaded`);

    client.user.setActivity(client.config.app.playing);
};
