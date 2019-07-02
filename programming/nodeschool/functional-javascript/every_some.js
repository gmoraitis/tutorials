function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        let goodIds = goodUsers.map(ui => ui.id);
        let submittedIds = submittedUsers.map(ui => ui.id);
        return submittedIds.every(id => goodIds.includes(id));
    };
}

module.exports = checkUsersValid;