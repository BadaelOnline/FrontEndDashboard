import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios);
let lang = window.localStorage.getItem('lang');
// /
export const loadDoctors = ({ commit }) => {
    axios
        .get(`http://edalili.e-dalely.com/public/api/doctor/get?lang=${lang}`)
        .then((res) => {
            console.warn('doctors :', res.data.doctor.data);
            let doctors = res.data.doctor.data;
            commit('SET_Doctors', doctors);
        })
        .catch(function (error) {
            console.log('Error: ', error);
        });
};
export const loadDoctor = ({ commit }, DoctorID) => {
    axios
        .get(
            `http://edalili.e-dalely.com/public/api/doctor/getById/${DoctorID}?lang=${lang}`
        )
        .then((res) => {
            console.warn('DoctorID :', res.data.doctor);
            let DoctorID = res.data.doctor;
            commit('SET_DoctorID', DoctorID);
        })
        .catch(function (error) {
            console.log('Error: ', error);
        });
};
export const loadDoctorTrashed = ({ commit }) => {
    axios
        .get(
            `http://edalili.e-dalely.com/public/api/doctor/getTrashed?lang=${lang}`
        )
        .then((res) => {
            console.warn('doctorstrashed :', res.data.doctor);
            let doctorstrashed = res.data.doctor;
            commit('SET_DoctorTrashed', doctorstrashed);
        })
        .catch(function (error) {
            console.log('Error: ', error);
        });
};

export const trashDoctor = ({ commit }, items) => {
    axios.put(
        `http://edalili.e-dalely.com/public/api/doctor/restoreTrashed/${items.id}`,
        commit('Trash_Doctor', items.id)
    );
};
