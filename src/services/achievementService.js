
const completeAchievement = (cookiePermission, achievements, achievement, tag) => {
    if (cookiePermission === true && hasAchievement(achievements, achievement) === false) {
        const aCount = achievements.get('aCount')
        if (aCount) {
            achievements.set(tag, achievement)
            achievements.set('aCount', Number(aCount) + 1)
        } else {
            achievements.set('aCount', 0)
            completeAchievement(cookiePermission, achievements, achievement, tag)
        }
    }
}

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
    const tags = 'MORTE'
    let i = 0
    while (i < tags.length) {
        let achievement = achievements.get(tags[i])
        if (achievement) {
            aList.push(achievement)
        }
        i = i + 1
    }
    return aList
}

const hasAchievements = (achievements) => {
    // if aCount exists, at least one achievement is completed
    if (achievements.get('aCount') !== undefined) {
        return true
    }
    return false
}

const hasAchievement = (achievements, tag) => {
    const hit = achievements.get(tag)
    if (hit) {
        return true
    }
    return false
}

export default {
    allAchievements, getDescription, toList, hasAchievements,
    hasAchievement, completeAchievement
}
