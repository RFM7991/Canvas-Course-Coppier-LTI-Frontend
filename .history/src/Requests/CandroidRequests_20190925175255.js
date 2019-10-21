import { API } from "../Constants";

export const updateCourse = (courseId, isEnabled) => {
    console.log('fire')
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
    .then(res => { 
        console.log(res.json())
        return res
    })
    .catch(err => {
        console.error('Course Update Error:', err)
    })
}