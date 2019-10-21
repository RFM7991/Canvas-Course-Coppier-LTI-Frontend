import { API } from "../Constants";

export const updateCourse = (courseId, isEnabled) => {
    var formBody = {
        'courseId': courseId,
        'isEnabled': isEnabled
    };
    
    return fetch(API + 'cart/tradezone/',
    {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(formBody)
    })
        .then(response => response.json())
        .catch(error => {
            showError()
            console.error('Trade Zone Cartography Error:', error)
        })
}