
const all_achievements = (achievements, setAchievements, setEnd) => {
    if (achievements.length === 4) {
        setAchievements(achievements.concat('everything'))
        setEnd('everything')
    }
}

export default { all_achievements }
