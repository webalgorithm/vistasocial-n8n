import type { INodeProperties } from 'n8n-workflow';

export const groupOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['group'],
			},
		},
		options: [
			{
				name: 'List',
				value: 'list',
				description: "List groups",
				routing: {
					request: {
						method: 'GET',
						url: '/groups',
					},
				},
				action: 'List groups',
			},

		],
		default: 'list',
	},
];
