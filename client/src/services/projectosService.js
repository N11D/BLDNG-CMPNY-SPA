import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/projectoss'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOne = async (projectId) => {
    const result = await request.get(`${baseUrl}/${projectId}`, );

    return result;
}

export const getLatest = async () => {
    const query = new URLSearchParams({
        // sortBy: `_createdOn desc`,
        offset: 0,
        pageSize: 3,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

export const create = async (projectosData) => {
    const result = await request.post(baseUrl, projectosData);

    return result;
};

export const edit = async (projectId, projectosData) => {
    const result = await request.put(`${baseUrl}/${projectId}`, projectosData);

    return result;
};

export const remove = async (projectId) => request.remove(`${baseUrl}/${projectId}`);