import createHttp from './BaseService';

const http = createHttp(true);

export const registerUser = (user) => http.post('/users/register', user);
export const getCurrentUser = () => http.get('/users/me');

export const getUsersList = () => http.get('/users');

export const getUsersData = () => http.get('/users/data');

export const getUserDetail = (id) => http.get(`/users/${id}`);


export const deleteUser = (id) => http.delete(`/users/${id}`);

export const updateUser = (id, user) => http.put(`/users/${id}`, user);

export const updateTest = (id, user) => http.put(`/users/test/${id}`, user);

export const updateDedication = (id, viewTime) => http.put(`/users/dedication/${id}`, viewTime);

export const updateProgress = (id, body) => http.put(`/users/progress/${id}`, body);

export const updateCourses = (id, body) => http.put(`/users//updatingcourses/${id}`, body);

export const updateExam = (id, body) => http.put(`/users/examresults/${id}`, body);