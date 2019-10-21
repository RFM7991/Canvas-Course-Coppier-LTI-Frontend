import { API } from "../Constants";

export const updateCourse = (courseId, isEnabled) => {
    var formBody = {
        'courseId': courseId,
        'isEnabled': isEnabled
    };
    
    return fetch(API + 'candroid/update/course/',
    {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(formBody)
    })
    .then(res => res.json())
    .catch(err => console.error('Course Update Error:', err))
}