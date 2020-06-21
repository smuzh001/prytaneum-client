import axios from 'utils/axios';
import errors from 'utils/errors';
import TownhallForm from '../TownhallForm';

/*
    TYPE DECLARATIONS
 */

interface TownhallForm {
    speaker?: string;
    moderator?: string;
    date?: Date;
    description?: string;
    url?: string;
    topic: string;
}

interface RequestBody {
    form: TownhallForm;
}
type Create = RequestBody;
type Update = RequestBody & { townhallId: string };

export type Townhall = Required<TownhallForm> & {
    _id: string;
    picture: string;
};

/*
    API
*/
export async function createTownhall(form: TownhallForm) {
    const { speaker, moderator, date, description, url } = form;
    if (!speaker || !moderator || !date || !url || !description) {
        throw errors.fieldError();
    }
    const body: Create = { form };
    return axios.post('/api/townhalls/create', body);
}

export async function updateTownhall(form: TownhallForm, townhallId: string) {
    const { speaker, moderator, date, description, url } = form;
    if (!speaker || !moderator || !date || !url || !description) {
        throw errors.fieldError();
    }

    // townhallId should be a part of the url
    if (!townhallId) {
        throw errors.internalError();
    }

    const body: Update = { form, townhallId };
    return axios.post('/api/townhalls/update', body);
}

export async function getTownhallList() {
    return axios.get<{ list: Townhall[] }>('/api/townhalls/list');
}
