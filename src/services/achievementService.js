
const all_achievements = (achievements, setAchievements, setEnd) => {
    if (achievements.length === 4) {
        setAchievements(achievements.concat('everything'))
        setEnd('everything')
    }
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

export default { all_achievements, getDescription }
