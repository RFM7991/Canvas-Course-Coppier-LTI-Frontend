import { CANVAS_API, CANVAS_TOKEN } from "../Constants"

export const copyCours1e = (host_course_id, coppy_course_id) => {
    return fetch(CANVAS_API + 'courses/' + host_course_id + '/content_migrations',
    {
        method : 'post',
        headers: {
            'Authorization': 'Bearer ' +  CANVAS_TOKEN
        }
    })
    .then(res => res.json())
    .catch(err => console.error(err))
}

export const copyCourse = (host_course_id, coppy_course_id) => {
    var formBody = {
        'host_id': host_course_id,
        'copy_id': coppy_course_id
    };
    
    return fetch(API + 'candroid/runlogs',
    {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' +  token
        },
        body : JSON.stringify(formBody)
    })
    .then(res => {
        if (res.status == 401) {
            alert('Session Expired, please Refresh the page')
            Cookies.remove('token')
            window.location.assign(URL + courseId +'/external_tools/6838')
        } else {
        return res.json()
        }
    })
    .catch(err => console.error('Course Update Error:', err))
}