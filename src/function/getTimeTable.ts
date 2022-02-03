export async function getTimeTable(url: string) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (!data.error) {
            for (let index in data) {
                for (let i = 1; i < 9; i++) {
                    if (data[index][i].classname == 'null') {
                        data[index][i] = '';
                    }
                }
            }
            return data;
        } else {
            return data.error;
        }

    } catch (err) {
        return 'err';
    }
}

/**
 * getTimeTable API from :
 * https://md-apps.herokuapp.com/API/:classname/:year/:week
 * https://md-apps.herokuapp.com/API/:classname/:year
 * https://md-apps.herokuapp.com/API/:classname
 * https://md-apps.herokuapp.com/mdcloud/fastTimetable/:id/:psd
 */