import { API, CANVAS_URL, EXTERNAL_TOOL_ID } from "../Constants"
import Cookies from 'js-cookie';

export const copyCourse = (host_course_id, coppy_course_id, token) => {
    var formBody = {
        'host_id': host_course_id,
        'copy_id': coppy_course_id
    };

    console.log("copy_course" host_course_id, coppy_course_id, token)
    
    return fetch(API + 'copy/course',
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
            window.location.assign(CANVAS_URL + host_course_id +'/external_tools/' +EXTERNAL_TOOL_ID)
        } else {
        return res.json()
        }
    })
    .catch(err => console.error('Course Update Error:', err))
}