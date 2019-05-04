import { put, takeEvery } from 'redux-saga/effects'

function* fetchJobData(action) {

   try {
    const json = yield fetch('https://search.bossjob.com/api/v1/search/job_filter?size=12&query=' + action.payload)
                    .then(response => response.json(),);

    yield put({ type: "RETRIEVEJOBS", json: json.data.jobs, json_count: json.data.total_num });
    } catch (e) {
        // yield put({type: "JOB_FETCH_FAILED", message: e.message});
    }
}

function* mySaga() {
  yield takeEvery("SEARCHJOB", fetchJobData);
}

export default mySaga;