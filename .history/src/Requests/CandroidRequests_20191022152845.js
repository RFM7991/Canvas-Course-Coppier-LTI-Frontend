import { API } from "../Constants";

export const updateCourse = (token, courseId, isEnabled, teacherThreshold, studentThreshold) => {
    var formBody = {
        'courseId': courseId,
        'isEnabled': isEnabled,
        'teacherThreshold': teacherThreshold,
        'studentThreshold': studentThreshold
};
    
    return fetch(API + 'courses/update',
    {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' +  token
        },
        body : JSON.stringify(formBody)
    })
    .then(res => res.json())
    .catch(err => console.error('Course Update Error:', err))
}

export const getUserInfo = (token) => {

    return fetch(API + 'users/info',
    {
        method : 'get',
        headers: {
            'Authorization': 'Bearer ' +  token
        }
    })
    .then(res => res.json())
    .catch(err => console.error(err))
}

export const getCourseInfo = (token, courseId) => {
    return fetch(API + 'courses/' + courseId + '/info',
    {
        method : 'get',
        headers: {
            'Authorization': 'Bearer ' +  token
        }
    })
    .then(res => res.json())
    .catch(err => console.error(err))
}

export const runLogs = (token, courseId, sendToStudents) => {
    var formBody = {
        'courseId': courseId,
        'sendToStudents': sendToStudents,
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
    .then(res => res.json())
    .catch(err => console.error('Course Update Error:', err))
}