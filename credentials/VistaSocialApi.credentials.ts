import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
	ICredentialTestRequest,
} from 'n8n-workflow';

export class VistaSocialApi implements ICredentialType {
	name = 'vistaSocialApi';
	displayName = 'Vista Social API';
	documentationUrl = 'https://vistasocial.com';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'api_key': '={{$credentials.apiKey}}'
			}
		},
	};
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://vistasocial.com/api/integration',
			url: '/make/whoami',
		},
	};
}
