import {
	ILoadOptionsFunctions,
	INodePropertyOptions,
	IDataObject,
	IExecuteFunctions,
	NodeApiError,
	IRequestOptions,
	IHttpRequestMethods
} from 'n8n-workflow';

export async function vistaSocialApiRequest(
	this: IExecuteFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	resource: string,
	body: IDataObject = {},
	qs: IDataObject = {},
	uri?: string,
	headers: IDataObject = {},
) {
	const options: IRequestOptions = {
		headers: {
			'Content-Type': 'application/json',
		},
		method,
		form: body,
		qs,
		uri: `https://vistasocial.com/api/integration${resource}`,
		json: true,
	};


	try {

		if (Object.keys(headers).length !== 0) {
			options.headers = Object.assign({}, options.headers, headers);
		}

		if (Object.keys(body).length === 0) {
			delete options.body;
		}

		return await this.helpers.requestWithAuthentication.call(this, 'vistaSocialApi', options);
	} catch (error) {
		console.log(error.stack)
		throw new NodeApiError(this.getNode(), error, {
			message: error.message,
		});
	}
}

export async function getProfiles(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const responseData = await vistaSocialApiRequest.call(this, 'GET', '/profiles');
	const profiles = responseData as [{ id: string; name: string;}];
	const options: INodePropertyOptions[] = profiles.map((profile) => {
		const name = profile.name;
		const value = profile.id;
		return { name, value };
	});
	return options;
}

export async function getWorkflows(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const responseData = await vistaSocialApiRequest.call(this, 'GET', '/workflows');
	const workflows = responseData as [{ id: string; name: string;}];
	const options: INodePropertyOptions[] = workflows.map((item) => {
		const name = item.name;
		const value = item.id;
		return { name, value };
	});
	return options;
}

export async function getUsers(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const responseData = await vistaSocialApiRequest.call(this, 'GET', '/users');
	const users = responseData as [{ id: string; name: string;}];
	const options: INodePropertyOptions[] = users.map((item) => {
		const name = item.name;
		const value = item.id;
		return { name, value };
	});
	return options;
}

export async function getGroups(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const responseData = await vistaSocialApiRequest.call(this, 'GET', '/groups');
	const groups = responseData as [{ id: string; name: string;}];
	const options: INodePropertyOptions[] = groups.map((item) => {
		const name = item.name;
		const value = item.id;
		return { name, value };
	});
	return options;
}
