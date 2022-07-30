module.exports = {
    updateUserDisplayNameInGroupChats: jest.fn(async (userID, newDisplayName) => {
        if (userID === "badUserID") {
            return false;
        } else if (userID === "goodUserID") {
            return true;
        } else if (userID === null || newDisplayName === null) {
            return false;
        } else if (userID === "" || newDisplayName === "") {
            return false;
        }
    }),

    updateUserDisplayNameInPrivateChats: jest.fn(async (userID, newDisplayName) => {
        if (userID === "badUserID") {
            return false;
        } else if (userID === "goodUserID") {
            return true;
        } else if (userID === "" || newDisplayName === "") {
            return false;
        }
    }),

    getConversationByGroupID: async (req, res) => {
        return res.status(200).send("getConvGroupMock")
    },

    getPrivateConversationByUserIDs: async (req, res) => {
        return res.status(200).send("getConvPrivMock")
    }
}