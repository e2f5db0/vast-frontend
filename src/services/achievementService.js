
const completeAchievement = (cookiePermission, cache, setCache, achievements, achievement, tag) => {
    if (cookiePermission === true) {
        if (!hasAchievement(achievements, cache, tag)) {
            const aCount = achievements.get('aCount')
            if (aCount) {
                achievements.set(tag, achievement)
                achievements.set('aCount', Number(aCount) + 1)
            } else {
                achievements.set('aCount', 0)
                completeAchievement(cookiePermission, cache, setCache, achievements, achievement, tag)
            }
        }
    } else {
        if (!cache.includes(achievement)) {
            setCache(cache.concat(achievement))
        }
    }
}

const allAchievements = (achievements, cache) => {
    const achievementList = toList(achievements, cache)
    if (achievementList.length === 4 || cache.length === 4) {
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

const toList = (achievements, cache) => {
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
    if (aList.length > 0) {
        return aList
    }
    return cache
}

const hasAchievements = (achievements, cache) => {
    // if aCount exists, at least one achievement is completed
    if (achievements.get('aCount') !== undefined) {
        return true
    }
    if (cache.length > 0) {
        return true
    }
    return false
}

const hasAchievement = (achievements, cache, tag) => {
    const hit = achievements.get(tag)
    if (hit) {
        return true
    }
    if (cache.length === 0) {
        return false
    }
    for (var i = 0; i < cache.length; i++) {
        let achievement = cache[i]
        if (achievement[0] === tag) {
            return true
        }
    }
    return false
}

export default {
    allAchievements, getDescription, toList, hasAchievements,
    hasAchievement, completeAchievement
}
