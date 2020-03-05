
const allAchievements = (achievements) => {
    const achievementList = toList(achievements)
    if (achievementList.length === 4) {
        return true
    }
    return false
}

const getDescription = (achievement) => {
    if (achievement === 'Meet Your Death') {
        return 'Tread down the path of acceptance'
    }
    if (achievement === 'Onlooker') {
        return 'The quieter you become, the more you are able to hear'
    }
    if (achievement === 'Rotten Religion') {
        return 'Tread down the path of nihilism'
    }
    if (achievement === 'Tale of Creation') {
        return 'Tread the path of endarkenment'
    }
    if (achievement === 'Everything') {
        return 'Completionist (100%)'
    }
}

const toList = (achievements) => {
    let aList = []
    let i = 0
    while (i < 5) {
        let achievement = achievements.get(String(i))
        if (achievement) {
            aList.push(achievement)
        }
        i = i + 1
    }
    return aList
}

const hasAchievements = (achievements) => {
    let i = 0
    while (i < 5) {
        let achievement = achievements.get(String(i))
        if (achievement) {
            return true
        }
        i = i + 1
    }
    return false
}

const hasAchievement = (achievements, achievement) => {
    let i = 0
    while (i < 5) {
        let a = achievements.get(String(i))
        if (a === achievement) {
            return true
        }
        i = i + 1
    }
    return false
}

const find = (achievements, string) => {
    let i = 0
    while (i < 5) {
        let achievement = achievements.get(String(i))
        if (achievement === string) {
            return true
        }
        i = i + 1
    }
    return false
}

export default {
    allAchievements, getDescription, toList, hasAchievements,
    hasAchievement, find
}
