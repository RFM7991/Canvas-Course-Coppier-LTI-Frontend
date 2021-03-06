import {  } from "../Constants"

export const copyCourse = (host_course_id, coppy_course_id) => {
    return fetch(API + 'courses/' + courseId + '/info',
    {
        method : 'get',
        headers: {
            'Authorization': 'Bearer ' +  token
        }
    })
    .then(res => {
        if (res.status == 401) {
            alert('Session Expired, please Refresh the page')
            Cookies.remove('token')
            window.location.reload()
        } else {
        return res.json()
        }
    })
    .catch(err => console.error(err))
}