const root_url = 'https://api.rawg.io/api';

// time
const getCurrentTime = (type) => {
    var result;
    if (type == 'month') {
        result = new Date().getMonth() + 1;
    }
    if (type == 'day') {
        result = new Date().getDate();
    }

    if(type == 'year'){
        result = new Date().getFullYear();
        return result;
    }

    if (result < 10) { result = `0${result}` }
    return result;
}

const currentMonth = getCurrentTime('month')
const currentDay = getCurrentTime('day')
const currentDate = `${getCurrentTime('year')}-${currentMonth}-${currentDay}`
const lastYear = `${getCurrentTime('year') - 1}-${currentMonth}-${currentDay}`
const nextYear = `${getCurrentTime('year') + 1}-${currentMonth}-${currentDay}`

const key = '971c9a4a58054963aee755c86846278b'
const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10&key=${key}`
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10&key=${key}`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10&key=${key}`;

export const popularGamesURL = `${root_url}/${popularGames}`
export const newGamesURL = `${root_url}/${newGames}`
export const upcomingGamesURL = `${root_url}/${upcoming_games}`
