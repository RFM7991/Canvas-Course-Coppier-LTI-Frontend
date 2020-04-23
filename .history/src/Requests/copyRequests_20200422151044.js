import { API } from "../Constants"
import Cookies from 'js-cookie';

export const copyCourse = (host_course_id, coppy_course_id, token) => {
    var formBody = {
        'host_id': host_course_id,
        'copy_id': coppy_course_id
    };
    
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
            window.location.assign(URL + courseId +'/external_tools/6838')
        } else {
        return res.json()
        }
    })
    .catch(err => console.error('Course Update Error:', err))
}