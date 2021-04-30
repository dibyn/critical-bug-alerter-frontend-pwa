import axios from 'axios'
const API_URL = process.env.NEXT_PUBLIC_API_URL
const ISSUE_LIST_URL = API_URL + `/issue/list`
const ISSUE_GRAPH_URL = API_URL + `/issue/graph`
const ISSUE_STATUS_LIST_URL = API_URL + `/issue/status`
const CREATE_ISSUE_URL = API_URL + `/create/issue`
const ISSUE_GENERATE_URL = API_URL + `/generate/issue`
export const fetchIssueListApi = () => {
	return axios
		.get(`${ISSUE_LIST_URL}`, {})
		.then(response => {
			return response.data
		})
		.catch(error => {
			throw error
		})
}
export const fetchIssueGraphApi = () => {
	return axios
		.get(`${ISSUE_GRAPH_URL}`, {})
		.then(response => {
			return response.data
		})
		.catch(error => {
			throw error
		})
}
export const changeStatusIssueApi = ({ issueId, params }) => {
	return axios
		.post(`${API_URL}/issue/change-status/${issueId}`, params)
		.then(response => {
			return response.data
		})
		.catch(error => {
			throw error
		})
}
export const createIssueApi = params => {
	return axios
		.post(`${CREATE_ISSUE_URL}`, { data: params })
		.then(response => {
			return response.data
		})
		.catch(error => {
			throw error
		})
}
export const generateIssueApi = () => {
	return axios
		.get(`${ISSUE_GENERATE_URL}`, {})
		.then(response => {
			return response.data
		})
		.catch(error => {
			throw error
		})
}
export const issueStatusListApi = () => {
	return axios
		.get(`${ISSUE_STATUS_LIST_URL}`, {})
		.then(response => {
			return response.data
		})
		.catch(error => {
			throw error
		})
}
export const getConfigKeyApi = (config_key) => {
	return axios
		.get(`${API_URL}/config/${config_key}`, {})
		.then(response => {
			return response.data
		})
		.catch(error => {
			throw error
		})
}
export const updateConfigKeyValueApi = (params) => {
	return axios
		.post(`${API_URL}/config`, params)
		.then(response => {
			return response.data
		})
		.catch(error => {
			throw error
		})
}
