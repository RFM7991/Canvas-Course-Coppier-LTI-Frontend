import { CANVAS_API, CANVAS_TOKEN } from "../Constants"

export const copyCourse = (host_course_id, coppy_course_id) => {
    return fetch(CANVAS_API + 'courses/' + host_course_id + '/content_migrations',
    {
        method : 'post',
        headers: {
            'Authorization': 'Bearer ' +  token
        }
    })
    .then(res => res.json())
    .catch(err => console.error(err))
}